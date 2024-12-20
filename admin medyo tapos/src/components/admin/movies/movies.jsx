import React, { useState, useEffect } from 'react';
import { useUser } from '../../../contexts/UserContext';
import { useViewMovie } from '../../../contexts/ViewMovieContext';
import { useUpdateMovie } from '../../../contexts/UpdateMovieContext';
import { useUpdateVideos } from '../../../contexts/UpdateVideosContext';
import { UpdateVideosProvider } from '../../../contexts/UpdateVideosContext';
import { useDeleteVideos } from '../../../contexts/DeleteVideosContext';
import { DeleteVideosProvider } from '../../../contexts/DeleteVideosContext';
import { useDeletePhotos } from '../../../contexts/DeletePhotosContext';
import { DeletePhotosProvider } from '../../../contexts/DeletePhotosContext';
import { UpdateCastsProvider, useUpdateCasts } from '../../../contexts/UpdateCastsContext';
import { DeleteCastProvider, useDeleteCast } from '../../../contexts/DeleteCastContext';
import { DeleteMovieProvider, useDeleteMovie } from '../../../contexts/DeleteMovieContext';
import './movies.css';


const getYouTubeEmbedUrl = (url) => {
  try {
   
    const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    
    if (videoIdMatch && videoIdMatch[1]) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }
    
    return null;
  } catch (error) {
    console.error('Error converting YouTube URL:', error);
    return null;
  }
};


const safeFormatDate = (dateValue, includeTime = false) => {
  if (!dateValue) return '';
  
  try {
    const date = new Date(dateValue);
    

    if (isNaN(date.getTime())) {
      console.warn('Invalid date:', dateValue);
      return '';
    }
    
    
    if (includeTime) {
      
      const localDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
      return localDate.toISOString().slice(0, 16);
    }
    

    return date.toISOString().split('T')[0];
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
};

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedOverview, setEditedOverview] = useState('');
  const [editedPopularity, setEditedPopularity] = useState('');
  const [editedReleaseDate, setEditedReleaseDate] = useState('');
  const [editedVideoName, setEditedVideoName] = useState('');
  const [videosToRemove, setVideosToRemove] = useState([]);
  const [photosToRemove, setPhotosToRemove] = useState([]);
  const [editedCasts, setEditedCasts] = useState([]);
  const [castsToRemove, setCastsToRemove] = useState([]);

  const { user, accessToken } = useUser();
  const { 
    getUserMovies, 
    getMovieDetails, 
    updateMovie, 
    deleteCasts, 
    deletePhotos, 
    deleteVideos 
  } = useViewMovie();
  const { updateMovie: contextUpdateMovie } = useUpdateMovie();
  const { updateVideos } = useUpdateVideos();
  const { deleteVideo } = useDeleteVideos();
  const { deletePhoto } = useDeletePhotos();
  const { updateCast } = useUpdateCasts();
  const { deleteCast } = useDeleteCast();
  const { deleteMovie } = useDeleteMovie();


  useEffect(() => {
    const fetchUserMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        if (!user) {
          throw new Error('No user logged in');
        }
        if (!getUserMovies) {
          throw new Error('getUserMovies function is not available');
        }

        const userMovies = await getUserMovies(user.id);
        
        console.log('Fetched movies:', userMovies);

        setMovies(userMovies || []);
      } catch (error) {
        console.error('Detailed error fetching movies:', error);
        setError(error.message || 'Failed to load movies');
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchUserMovies();
    }
  }, [user, getUserMovies]);

 
  const handleMovieClick = async (movieId) => {
    try {
      console.log('Fetching details for movie ID:', movieId);
      
    
      const response = await fetch(`/movies/${movieId}/details`, {
        headers: {
          'Authorization': `Bearer ${user.accessToken}`
        }
      });
      
      if (!response.ok) {
       
        const errorText = await response.text();
        console.error('Error response text:', errorText);
        throw new Error(`Failed to fetch movie details. Status: ${response.status}, ${errorText}`);
      }
      
      const movieData = await response.json();
      
      
      console.log('Full Response:', JSON.stringify(movieData, null, 2));
      
     
      if (!movieData) {
        console.error('Received empty movie data');
        return;
      }

   
      const movie = movieData.movie || 
                    movieData.data || 
                    movieData.Movie || 
                    movieData;
      
      console.log('Extracted Movie Object:', movie);
      console.log('Movie Title:', movie?.title);
      console.log('Movie Overview:', movie?.overview);

    
      const processedMovieDetails = {
        ...movie,
        casts: movieData.casts || movieData.Casts || [],
        videos: movieData.videos || movieData.Videos || [],
        photos: movieData.photos || movieData.Photos || [],
        createdAt: movie.createdAt || movie.created_at || movie.dateCreated || null,
        updatedAt: movie.updatedAt || movie.updated_at || movie.dateUpdated || null
      };

      console.log('Processed Movie Details:', processedMovieDetails);
      
      
      if (!processedMovieDetails.title) {
        console.warn('Movie details missing title');
        return;
      }
      
      setSelectedMovie(processedMovieDetails);
      setCurrentVideo(processedMovieDetails.videos && processedMovieDetails.videos.length > 0 ? processedMovieDetails.videos[0] : null);
    } catch (error) {
      console.error('Detailed error fetching movie details:', error);
    }
  };


  const handleDeleteMovie = async () => {
    try {
      if (!selectedMovie) return;
      
      for (const cast of selectedMovie.casts) {
        await deleteCast(cast.id, user.id);
        console.log(`Cast ${cast.id} deleted`);
      }

      for (const photo of selectedMovie.photos) {
        await deletePhoto(photo.id, user.id);
        console.log(`Photo ${photo.id} deleted`);
      }

      for (const video of selectedMovie.videos) {
        await deleteVideo(video.id, user.id);
        console.log(`Video ${video.id} deleted`);
      }

      await deleteMovie(selectedMovie.id, user.id);
      console.log(`Movie ${selectedMovie.id} deleted`);

      setSelectedMovie(null);
      setIsEditing(false);
      setConfirmDelete(false);

      const updatedMovies = await getUserMovies(user.id);
      setMovies(updatedMovies);

    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };


 
  useEffect(() => {
    if (isEditing && selectedMovie) {
      setEditedTitle(selectedMovie.title || '');
      setEditedOverview(selectedMovie.overview || '');
      setEditedPopularity(selectedMovie.popularity ? selectedMovie.popularity.toString() : '');
      
      
      setEditedReleaseDate(safeFormatDate(selectedMovie.releaseDate));
      setEditedVideoName(currentVideo?.name || '');
      setEditedCasts(selectedMovie.casts || []);
      console.log('Initialized edited casts:', selectedMovie.casts);
    }
  }, [isEditing, selectedMovie, currentVideo]);


  const handleOverviewChange = (e) => {
    setEditedOverview(e.target.value);
  };

  
  const handleTitleChange = (e) => setEditedTitle(e.target.value);
  const handlePopularityChange = (e) => {
    const value = e.target.value;
    if (value === '' || (!isNaN(value) && parseFloat(value) >= 0)) {
      setEditedPopularity(value);
    }
  };
  const handleReleaseDateChange = (e) => setEditedReleaseDate(e.target.value);
  const handleVideoNameChange = (e) => setEditedVideoName(e.target.value);


  const handleRemoveVideo = (videoId) => {
    setVideosToRemove((prev) => [...prev, videoId]);
  };

 
  const handleRemovePhoto = (photoId) => {
    setPhotosToRemove((prev) => [...prev, photoId]);
  };


  const handleCastNameChange = (index, newName) => {
    setEditedCasts((prevCasts) => {
      const updatedCasts = [...prevCasts];
      updatedCasts[index] = { ...updatedCasts[index], name: newName };
      return updatedCasts;
    });
  };

  
  const handleCharacterNameChange = (index, newCharacterName) => {
    setEditedCasts((prevCasts) => {
      const updatedCasts = [...prevCasts];
      updatedCasts[index] = { ...updatedCasts[index], characterName: newCharacterName };
      return updatedCasts;
    });
  };


  const handleRemoveCast = (castId) => {
    setCastsToRemove((prev) => [...prev, castId]);
  };


  const handleEditMovie = async () => {
    try {
      let movieUpdateNeeded = false;

      let videoUpdateNeeded = false;

      const updatedMovieData = {
        id: selectedMovie.id,
        title: editedTitle.trim(),
        overview: editedOverview.trim(),
        popularity: editedPopularity ? parseFloat(editedPopularity) : selectedMovie.popularity || 0,
        releaseDate: editedReleaseDate || selectedMovie.releaseDate || null,
        tmdbId: selectedMovie.tmdbId || null,
        voteAverage: selectedMovie.voteAverage || 0,
        backdropPath: selectedMovie.backdropPath || '',
        posterPath: selectedMovie.posterPath || '',
        isFeatured: selectedMovie.isFeatured || false
      };

      const movieFields = ['title', 'overview', 'popularity', 'releaseDate'];
      movieUpdateNeeded = movieFields.some(field => 
        updatedMovieData[field] !== selectedMovie[field]
      );

      if (currentVideo) {
        const updatedVideo = {
          id: currentVideo.id,
          name: editedVideoName.trim(),
          url: currentVideo.url,
          user_id: currentVideo.user_id || currentVideo.userId,
          movie_id: currentVideo.movie_id || currentVideo.movieId,
          site: currentVideo.site,
          video_key: currentVideo.video_key || currentVideo.videoKey,
          video_type: currentVideo.video_type || currentVideo.videoType,
          official: currentVideo.official
        };

        const videoFields = ['name', 'url', 'site', 'video_key', 'video_type', 'official'];
        videoUpdateNeeded = videoFields.some(field => 
          updatedVideo[field] !== currentVideo[field]
        );

        if (videoUpdateNeeded) {
          console.log('Attempting to update video:', {
            movieId: selectedMovie.id,
            videoData: updatedVideo,
            videoDataStringified: JSON.stringify(updatedVideo, null, 2)
          });
          await updateVideos({
            movieId: selectedMovie.id, 
            videoData: updatedVideo, 
            editedVideoName: editedVideoName.trim(),
            user: user,
            accessToken: accessToken
          });
          console.log('Video update successful');
        }
      }

      if (movieUpdateNeeded) {
        console.log('Updating movie:', updatedMovieData);
        let result;
        try {
          result = await contextUpdateMovie(selectedMovie.id, updatedMovieData);
          console.log('Movie update result:', result);
        } catch (updateError) {
          console.warn('Movie update encountered an error:', updateError);
          result = selectedMovie;
        }

        if (!result) {
          console.error('No movie data available after update');
          result = selectedMovie;
        }

        console.log('Attempting to refresh movies for user:', user.id);
        const refreshedMovies = await getUserMovies(user.id);
        console.log('Refreshed movies:', refreshedMovies);

        setMovies([...refreshedMovies]);

        const updatedMovieInList = refreshedMovies.find(movie => movie.id === result.id);
        if (updatedMovieInList) {
          try {
            const fullMovieDetails = await handleMovieClick(updatedMovieInList.id);
            if (fullMovieDetails) {
              setSelectedMovie(fullMovieDetails);
              console.log('Updated selected movie:', fullMovieDetails);
            }
          } catch (error) {
            console.error('Error re-fetching movie details:', error);
            setSelectedMovie(updatedMovieInList);
          }
        }
      }

      for (const videoId of videosToRemove) {
        await deleteVideo(videoId, user.id);
        console.log(`Video ${videoId} deleted`);
      }

      for (const photoId of photosToRemove) {
        await deletePhoto(photoId, user.id);
        console.log(`Photo ${photoId} deleted`);
      }

      for (let i = 0; i < editedCasts.length; i++) {
        const originalCast = selectedMovie.casts[i];
        const updatedCast = editedCasts[i];
        if (originalCast.name !== updatedCast.name || originalCast.characterName !== updatedCast.characterName) {
          console.log('Updating cast:', updatedCast);
          await updateCast(updatedCast.id, {
            name: updatedCast.name,
            characterName: updatedCast.characterName
          });
        }
      }

      for (const castId of castsToRemove) {
        await deleteCast(castId, user.id);
        console.log(`Cast ${castId} deleted`);
      }

      if (!movieUpdateNeeded && !videoUpdateNeeded && videosToRemove.length === 0 && photosToRemove.length === 0 && castsToRemove.length === 0) {
        console.log('No updates needed');
        return;
      }

      setIsEditing(false);
      setSelectedMovie(null);
      setTimeout(() => {
        const updatedMovieInList = movies.find(movie => movie.id === selectedMovie.id);
        if (updatedMovieInList) {
          handleMovieClick(updatedMovieInList.id);
        }
      }, 300);
    } catch (error) {
      console.error('Unexpected error in handleEditMovie:', error);
    }

  };


  const handleCancelEdit = () => {
    setIsEditing(false);
    setVideosToRemove([]); 
    setPhotosToRemove([]); 
    setCastsToRemove([]); 
  };

  if (loading) {
    return (
      <div className="movies-loading">
        <p>Loading your movie collection...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="movies-error">
        <p>Error: {error}</p>
        <p>Please try refreshing the page or logging in again.</p>
      </div>
    );
  }

  return (
    <div 
      className="movies-container"
      style={{
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none'
      }}
    >
      {selectedMovie ? (
        <div 
          className="movies__details"
          style={{
          overflowY: 'auto',
          height: '100%',
          WebkitOverflowScrolling: 'touch'
          }}
        >
            <div className="movie-details-content">
            <div className="movie-details-header">
              {isEditing ? (
                <input 
                  type="text"
                  id="edit-movie-title"
                    className="movies__title-input"
                  value={editedTitle}
                  onChange={handleTitleChange}
                  placeholder="Enter movie title"
                />
              ) : (
                <h2>{selectedMovie.title || selectedMovie.name || 'No Title'}</h2>
              )}
                <div className="movie-action-buttons">
                <button 
                  className="movie-details-close" 
                  onClick={() => setSelectedMovie(null)}
                >
                  ×
                </button>
              </div>
            </div>
            
            <img 
                className="movie-details-poster"
              src={
                selectedMovie.backdropPath 
                  ? `https://image.tmdb.org/t/p/w500${selectedMovie.backdropPath}` 
                  : (
                    selectedMovie.posterPath 
                      ? `https://image.tmdb.org/t/p/w500${selectedMovie.posterPath}` 
                      : '/placeholder.png'
                  )
              } 
              alt={selectedMovie.title || selectedMovie.name || 'Movie Poster'} 
              onError={(e) => { e.target.src = '/placeholder.png'; }}
            />
            
            <p className="movie-details-overview">
              {isEditing ? (
                <textarea
                  id="edit-movie-overview"
                    className="movies__overview-input"
                  value={editedOverview}
                  onChange={handleOverviewChange}
                  placeholder="Enter a detailed overview of the movie"
                  rows="6"
                />
              ) : (
                selectedMovie.overview || selectedMovie.description || 'No description available'
              )}
            </p>
            
            <div className="movie-details-body">
              <div className="movie-details-info">
              <div className="movie-details-meta">
              <div className="movie-details-meta-item">
                    <h4>Popularity</h4>
                    {isEditing ? (
                      <input
                        type="number"
                        id="edit-movie-popularity"
                        className="movies__popularity-input"
                        value={editedPopularity}
                        onChange={handlePopularityChange}
                        placeholder="Enter popularity"
                        step="0.01"
                        min="0"
                      />
                    ) : (
                      <p>{selectedMovie.popularity ? selectedMovie.popularity.toFixed(2) : 'N/A'}</p>
                    )}
                  </div>
                  <div className="movies-details-info-item">
                    <h4>Release Date</h4>
                    {isEditing ? (
                      <input
                        type="date"
                        id="edit-movie-release-date"
                        className="movies__release-date-input"
                        value={editedReleaseDate}
                        onChange={handleReleaseDateChange}
                      />
                    ) : (
                      <p>{selectedMovie.releaseDate ? new Date(selectedMovie.releaseDate).toLocaleDateString() : 'N/A'}</p>
                    )}
                  </div>
                    <div className="movies-details-info-item">
                    <h4>Date Created</h4>
                    <p>
                      {selectedMovie.createdAt 
                      ? new Date(selectedMovie.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                        })
                      : 'N/A'}
                    </p>
                    </div>

                </div>
              </div>
              
             
                <div className="movies__media">
                  <div className="movies__media-header">
                  <h3>Videos</h3>
                  </div>
                  {selectedMovie.videos && selectedMovie.videos.length > 0 ? (
                  <div className="movies__video-carousel">
                    {selectedMovie.videos.length > 1 && (
                    <button 
                      className="movies__video-nav movies__video-nav--prev"
                      onClick={() => {
                      const currentIndex = selectedMovie.videos.findIndex(v => v.id === currentVideo.id);
                      const prevIndex = currentIndex > 0 ? currentIndex - 1 : selectedMovie.videos.length - 1;
                      setCurrentVideo(selectedMovie.videos[prevIndex]);
                      }}
                    >
                      ◀
                    </button>
                    )}
                    
                    <div className="movies__video-container">
                    {currentVideo && currentVideo.url ? (
                      <>
                      {currentVideo.url.includes('youtube.com') || currentVideo.url.includes('youtu.be') ? (
                        <iframe
                        src={getYouTubeEmbedUrl(currentVideo.url)}
                        title={currentVideo.name || 'YouTube Video'}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        ></iframe>
                      ) : (
                        <video 
                        controls 
                        src={currentVideo.url}
                        onError={(e) => {
                          console.error('Video Playback Error:', e);
                        }}
                        >
                        Your browser does not support the video tag.
                        </video>
                      )}
                      {isEditing && (
                        <div className="movies-video-edit-controls">
                        <input 
                          type="text" 
                          className="movies-video-name-input"
                          value={editedVideoName}
                          onChange={handleVideoNameChange}
                          placeholder="Enter video name"
                        />
                        <button 
                          className="movies-video-remove-btn"
                          onClick={() => handleRemoveVideo(currentVideo.id)}
                        >
                          {videosToRemove.includes(currentVideo.id) ? 'Undo Remove' : 'Remove Video'}
                        </button>
                        </div>
                      )}
                      </>
                    ) : (
                      <p>No valid video available</p>
                    )}
                    </div>
                    
                    {selectedMovie.videos.length > 1 && (
                    <button 
                      className="movies__video-nav movies__video-nav--next"
                      onClick={() => {
                      const currentIndex = selectedMovie.videos.findIndex(v => v.id === currentVideo.id);
                      const nextIndex = currentIndex < selectedMovie.videos.length - 1 ? currentIndex + 1 : 0;
                      setCurrentVideo(selectedMovie.videos[nextIndex]);
                      }}
                    >
                      ▶
                    </button>
                    )}
                  </div>
                  ) : (
                  <p>No videos available</p>
                  )}
                </div>

                
                <div className="movies__photos">
                  <div className="movies__photos-header">
                  <h3>Photos</h3>
                  </div>
                  <div className="movies__photos-grid">
                  {selectedMovie.photos && selectedMovie.photos.length > 0 ? (
                    selectedMovie.photos.map(photo => (
                    <div key={photo.id} className="movies__photo-item">
                      <img 
                      src={`https://image.tmdb.org/t/p/w500${photo.url}`} 
                      alt={photo.description || 'Movie Photo'} 
                      onError={(e) => { e.target.src = '/placeholder.png'; }}
                      style={{
                        opacity: photosToRemove.includes(photo.id) ? 0.5 : 1
                      }}
                      />
                      {isEditing && (
                      <button 
                        className="movies__btn movies__btn--photo-remove"
                        onClick={() => handleRemovePhoto(photo.id)}
                      >
                        {photosToRemove.includes(photo.id) ? 'Undo Remove' : 'Remove'}
                      </button>
                      )}
                    </div>
                    ))
                  ) : (
                    <p>No photos available</p>
                  )}
                  </div>
                </div>


               
                <div className="movie-cast-grid">
                  <h3>Cast</h3>
                  {selectedMovie.casts && selectedMovie.casts.length > 0 ? (
                    selectedMovie.casts.map((actor, index) => (
                      <div key={actor.id} className="cast-member-card">
                        <div className="cast-member-image">
                          <img 
                            src={actor.url ? `https://image.tmdb.org/t/p/w500${actor.url}` : '/placeholder.png'} 
                            alt={actor.name || 'Actor'} 
                            onError={(e) => { e.target.src = '/placeholder.png'; }}
                            style={{
                              opacity: castsToRemove.includes(actor.id) ? 0.5 : 1
                            }}
                          />
                        </div>
                        <div className="cast-member-info">
                          {isEditing ? (
                            <>
                              <input 
                                type="text" 
                                className="movie-edit-input"
                                value={editedCasts[index]?.name || ''}
                                onChange={(e) => handleCastNameChange(index, e.target.value)}
                                placeholder="Actor Name"
                              />
                              <input 
                                type="text" 
                                className="movie-edit-input"
                                value={editedCasts[index]?.characterName || ''}
                                onChange={(e) => handleCharacterNameChange(index, e.target.value)}
                                placeholder="Character Name"
                              />
                              <button 
                                className="movie-action-button delete"
                                onClick={() => handleRemoveCast(actor.id)}
                              >
                                Remove
                              </button>
                            </>
                          ) : (
                            <>
                              <p className="cast-member-name">{actor.name || 'Unknown Actor'}</p>
                              <p className="cast-member-character">{actor.characterName || ''}</p>
                            </>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No cast information available</p>
                  )}
                </div>


                <div className="movies__actions">
                {!isEditing && (
                  <button 
                  id="edit-movie-btn"
                    className="movie-action-button movie-action-button--edit"
                    onClick={() => {
                      setIsEditing(true);
                      setConfirmDelete(false);
                    }}
                  >
                    Edit Movie
                  </button>
                )}
                {isEditing && !confirmDelete && (
                  <button 
                    id="cancel-edit-btn"
                    className="movies-action-btn movies-cancel-btn"
                    onClick={handleCancelEdit}
                  >
                    Cancel Edit
                  </button>
                )}
                {isEditing && !confirmDelete && (
                  <button 
                    id="save-edit-btn"
                    className="movies-action-btn movies-save-btn"
                    onClick={handleEditMovie}
                  >
                    Done Edit
                  </button>
                )}
                {isEditing && !confirmDelete && (
                  <button 
                    id="delete-movie-btn"
                    className="movies-action-btn movies-delete-btn"
                    onClick={() => setConfirmDelete(true)}
                  >
                    Delete Movie
                  </button>
                )}
                {confirmDelete && (
                  <>
                    <button 
                      id="confirm-delete-btn"
                      className="movies-action-btn movies-confirm-delete-btn"
                      onClick={handleDeleteMovie}
                    >
                      Confirm Delete
                    </button>
                    <button 
                      id="cancel-delete-btn"
                      className="movies-action-btn movies-cancel-delete-btn"
                      onClick={() => setConfirmDelete(false)}
                    >
                      Cancel Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="movies-content">
          <h1>My Movies</h1>
          {movies.length === 0 ? (
            <div className="movies-empty">
              <p>No movies found. Start by searching and adding movies!</p>
            </div>
          ) : (
            <div className="movies-grid">
              {movies.map(movie => {
              const year = movie.releaseDate ? new Date(movie.releaseDate).getFullYear() : '';
              
              return (
                <div 
                key={movie.id} 
                className="movie-card" 
                    onClick={() => handleMovieClick(movie.id)}
                  >
                    <div className="movie-card-image">
                      <img 
                        src={movie.posterPath ? 
                            `https://image.tmdb.org/t/p/w500${movie.posterPath}` : 
                            '/placeholder.png'
                        } 
                        alt={movie.title} 
                        onError={(e) => { e.target.src = '/placeholder.png'; }}
                      />
                    </div>
                    <div className="movie-card-details">
                      <h3>{movie.title}</h3>
                      <p>{year}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const MoviesWithProvider = () => {
  return (
    <DeleteMovieProvider>
      <DeleteCastProvider>
        <DeletePhotosProvider>
          <DeleteVideosProvider>
            <UpdateVideosProvider>
              <UpdateCastsProvider>
                <Movies />
              </UpdateCastsProvider>
            </UpdateVideosProvider>
          </DeleteVideosProvider>
        </DeletePhotosProvider>
      </DeleteCastProvider>
    </DeleteMovieProvider>
  );
};

export default MoviesWithProvider;
