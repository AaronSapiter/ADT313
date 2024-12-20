-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 20, 2024 at 05:51 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movieprojectdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `casts`
--

CREATE TABLE `casts` (
  `id` int(11) NOT NULL,
  `movieId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `url` varchar(255) NOT NULL,
  `characterName` varchar(120) NOT NULL,
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp(),
  `dateUpdated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `casts`
--

INSERT INTO `casts` (`id`, `movieId`, `userId`, `name`, `url`, `characterName`, `dateCreated`, `dateUpdated`) VALUES
(3, 194, 2, 'hey', '/qJYWq2oZcvHh7lnGskxkrYXCom0.jpg', 'Sienna Shaw', '2024-12-20 16:47:17', '0000-00-00 00:00:00'),
(4, 194, 2, 'David Howard Thornton', '/z82y3Nxm7VZjfaMPMdUtbyoAyls.jpg', 'Art the Clown', '2024-12-20 16:47:17', '0000-00-00 00:00:00'),
(5, 194, 2, 'Samantha Scaffidi', '/jwd0XXuc4ibXAXjOxmhsFP0fQEO.jpg', 'Victoria Heyes', '2024-12-20 16:47:17', '0000-00-00 00:00:00'),
(6, 194, 2, 'Elliott Fullam', '/dNsFLihmWfA2KCENbZCtq9AjSob.jpg', 'Jonathan Shaw', '2024-12-20 16:47:17', '0000-00-00 00:00:00'),
(7, 194, 2, 'Margaret Anne Florence', '/c2EqBueLCrn6XEnmfutylUd1icl.jpg', 'Jessica', '2024-12-20 16:47:17', '0000-00-00 00:00:00'),
(8, 194, 2, 'Bryce Johnson', '/iyHjMvKijZZDVZkK681JAio4nAh.jpg', 'Greg', '2024-12-20 16:47:17', '0000-00-00 00:00:00'),
(9, 194, 2, 'Krsy Fox', '/6bRT5c4MoP7yP3yza5HFdV9ajra.jpg', 'Jennifer', '2024-12-20 16:47:18', '0000-00-00 00:00:00'),
(10, 194, 2, 'gggg', '/jkbpjqRFBmAaGILnDiqpnPj0qty.jpg', 'Cole', '2024-12-20 16:47:18', '0000-00-00 00:00:00'),
(11, 194, 2, 'Antonella Rose', '/sdqM1qQEjRuo460AuUOjFAH7kCm.jpg', 'Gabby', '2024-12-20 16:47:18', '0000-00-00 00:00:00'),
(12, 194, 2, 'ganda', '/yHqudNe4X6sFceaSgVLAfmsJEbk.jpg', 'Mia', '2024-12-20 16:47:18', '0000-00-00 00:00:00'),
(13, 195, 2, 'Gore Abrams', '/bKMTqbl0FYlzIC6aTMKQZNAhhXK.jpg', 'Oliver', '2024-12-20 16:47:23', '0000-00-00 00:00:00'),
(14, 195, 2, 'Dennis Quaid', '/lMaDAJHzsKH7U3dln2B3kY3rOhE.jpg', 'Harvey', '2024-12-20 16:47:23', '0000-00-00 00:00:00'),
(15, 195, 2, 'Edward Hamilton-Clark', '/q1EWL2z2xMcbf84TpOTqGs6Csxs.jpg', 'Fred', '2024-12-20 16:47:23', '0000-00-00 00:00:00'),
(16, 195, 2, 'Oscar Lesage', '/6yd3eODeuk0nuiFYbmLzpDTL5k2.jpg', 'Troy', '2024-12-20 16:47:23', '0000-00-00 00:00:00'),
(17, 195, 2, 'Demi Moore', '/gPgZSodybMFBodw7nKRTALONIr2.jpg', 'Elisabeth', '2024-12-20 16:47:23', '0000-00-00 00:00:00'),
(18, 195, 2, 'Margaret Qualley 10/10', '/jStNyMj3acpLuH48awLVLqqlyaV.jpg', 'Sue', '2024-12-20 16:47:23', '0000-00-00 00:00:00'),
(19, 195, 2, 'Christian Erickson', '/cpEzQNW1EsRmK8SMj4y5xwevXwM.jpg', 'Man at Diner', '2024-12-20 16:47:23', '0000-00-00 00:00:00'),
(20, 195, 2, 'Tom Morton', '/aOdP4niQX4ckaFwPQmbf0mlYTC5.jpg', 'Doctor', '2024-12-20 16:47:23', '0000-00-00 00:00:00'),
(21, 195, 2, 'Hugo Diego Garcia', '/mC0Aly8hHgNIYvZSa1SZmYU47pn.jpg', 'Diego - Boyfriend', '2024-12-20 16:47:23', '0000-00-00 00:00:00'),
(22, 195, 2, 'Robin Greer', '/ndu0tbz16mtOchMROcnJf2pPchg.jpg', 'Male Nurse', '2024-12-20 16:47:23', '0000-00-00 00:00:00'),
(32, 197, 2, 'Jing Yanjun', '/pxYjuRTvAUepSXBm1GGiqhJ52rW.jpg', 'Wu Xie', '2024-12-20 16:47:40', '0000-00-00 00:00:00'),
(33, 197, 2, 'Chen Yesheng', '/3mLGofPn7kc68EWMEpdi5lUtiG8.jpg', 'Zhang Qiling', '2024-12-20 16:47:40', '0000-00-00 00:00:00'),
(34, 197, 2, 'Wang Bowen', '/nCgM8bfVR93LgrAjSCf9HEI3DnY.jpg', 'Wang Pangzi', '2024-12-20 16:47:40', '0000-00-00 00:00:00'),
(35, 198, 2, 'Ron Livingston', '/pr5CjWnkaf5WKTIYh8wtNufjmyb.jpg', 'Roger Perron', '2024-12-20 16:47:57', '0000-00-00 00:00:00'),
(36, 198, 2, 'Joey King', '/b0diEOPPAxOOInWOP9koaqvqUvi.jpg', 'Christine Perron', '2024-12-20 16:47:57', '0000-00-00 00:00:00'),
(37, 198, 2, 'Vera Farmiga', '/29b8Kp44lOf9F07DtOUuW28wph6.jpg', 'Lorraine Warren', '2024-12-20 16:47:57', '0000-00-00 00:00:00'),
(38, 198, 2, 'Patrick Wilson', '/tc1ezEfIY8BhCy85svOUDtpBFPt.jpg', 'Ed Warren', '2024-12-20 16:47:57', '0000-00-00 00:00:00'),
(39, 198, 2, 'Mackenzie Foy', '/6n8yZKJ3YHkm4Ds3zNjJpankHUk.jpg', 'Cindy Perron', '2024-12-20 16:47:57', '0000-00-00 00:00:00'),
(40, 198, 2, 'Lili Taylor', '/if8rbaj1TXlzg0Oq4g0bpU3b5rh.jpg', 'Carolyn Perron', '2024-12-20 16:47:57', '0000-00-00 00:00:00'),
(41, 198, 2, 'Hayley McFarland', '/x2JAEC10XI6Ie2sArUzMbe4l2Mh.jpg', 'Nancy Perron', '2024-12-20 16:47:57', '0000-00-00 00:00:00'),
(42, 198, 2, 'Sterling Jerins', '/10kkqqbO8Ct58DqsBPSQIsG9ve4.jpg', 'Judy Warren', '2024-12-20 16:47:57', '0000-00-00 00:00:00'),
(43, 198, 2, 'Kyla Deaver', '/yK2pAqrhei8N49ZOHL8u6ccaSPr.jpg', 'April Perron', '2024-12-20 16:47:57', '0000-00-00 00:00:00'),
(44, 198, 2, 'Shanley Caswell', '/yySEoaskedLZKKHSAOOZ5cr7HHo.jpg', 'Andrea Perron', '2024-12-20 16:47:57', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `tmdbId` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `overview` text NOT NULL,
  `popularity` float NOT NULL,
  `releaseDate` date NOT NULL,
  `voteAverage` float NOT NULL,
  `backdropPath` varchar(255) NOT NULL,
  `posterPath` varchar(255) NOT NULL,
  `isFeatured` tinyint(1) NOT NULL DEFAULT 0,
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp(),
  `dateUpdated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`id`, `userId`, `tmdbId`, `title`, `overview`, `popularity`, `releaseDate`, `voteAverage`, `backdropPath`, `posterPath`, `isFeatured`, `dateCreated`, `dateUpdated`) VALUES
(194, 2, 1034541, 'Terrifier 3', 'Five years after surviving Art the Clown\'s Halloween massacre, Sienna and Jonathan are still struggling to rebuild their shattered lives. As the holiday season approaches, they try to embrace the Christmas spirit and leave the horrors of the past behind. But just when they think they\'re safe, Art returns, determined to turn their holiday cheer into a new nightmare. The festive season quickly unravels as Art unleashes his twisted brand of terror, proving that no holiday is safe. ddddd', 726.556, '2024-10-09', 6.9, '/mvDMt3JZ5zlsrXduGzj9jBEfVBT.jpg', '/ju10W5gl3PPK3b7TjEmVOZap51I.jpg', 0, '2024-12-20 16:47:17', '0000-00-00 00:00:00'),
(195, 2, 933260, 'The Substance sexy', 'A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.', 765.307, '2024-09-07', 7.231, '/t98L9uphqBSNn2Mkvdm3xSFCQyi.jpg', '/lqoMzCcZYEFK729d6qzt349fB4o.jpg', 0, '2024-12-20 16:47:23', '0000-00-00 00:00:00'),
(197, 2, 1178020, 'Conjuring Curse', 'A mysterious letter addressed to Wu Lao Gou, Wu Xie\'s deceased grandfather, disrupted the retirement plan of the Golden Trio, i.e., Wu Xie, Zhang Qi Ling, and Wang Pang Zi. The letter referred to a mysterious underground palace called \"Comet\" in Mongolia. The Golden Trio decided to explore it, only to get involved in an unimaginable adventure and encounter treacherous Mongolian bandits, the countdown to escape from the \"Comet\", the weird rules of the burial chamber, and the invisible entity... The Golden Trio had no choice but to take a leap of faith...', 3.508, '2023-09-16', 4, '/hRzqUG6WixLx740KJKy4ZnBO9US.jpg', '/xbZLrSN3ynyemRZBRjzYUGKUOui.jpg', 0, '2024-12-20 16:47:40', '0000-00-00 00:00:00'),
(198, 2, 138843, 'The Conjuring', 'nakakatakyut', 90.67, '2013-07-18', 7.54, '/aQCCpAIdWAp6wyFgjMry4okwrZo.jpg', '/wVYREutTvI2tmxr6ujrHT704wGF.jpg', 0, '2024-12-20 16:47:56', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

CREATE TABLE `photos` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `movieId` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp(),
  `dateUpdated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `photos`
--

INSERT INTO `photos` (`id`, `userId`, `movieId`, `url`, `description`, `dateCreated`, `dateUpdated`) VALUES
(3, 2, 194, '/mvDMt3JZ5zlsrXduGzj9jBEfVBT.jpg', 'Backdrop image for Terrifier 3', '2024-12-20 16:47:18', '0000-00-00 00:00:00'),
(4, 2, 194, '/ouDkQ2BKH2ddxqYZ7b8DQxGtolc.jpg', 'Backdrop image for Terrifier 3', '2024-12-20 16:47:18', '0000-00-00 00:00:00'),
(5, 2, 194, '/xlkclSE4aq7r3JsFIJRgs21zUew.jpg', 'Backdrop image for Terrifier 3', '2024-12-20 16:47:18', '0000-00-00 00:00:00'),
(6, 2, 194, '/eQEgKIRF7KeVGBQ8IYcklpU8RPf.jpg', 'Backdrop image for Terrifier 3', '2024-12-20 16:47:18', '0000-00-00 00:00:00'),
(7, 2, 194, '/vm7nZcG0d7g34ofTUIca89Dy52g.jpg', 'Backdrop image for Terrifier 3', '2024-12-20 16:47:18', '0000-00-00 00:00:00'),
(8, 2, 195, '/t98L9uphqBSNn2Mkvdm3xSFCQyi.jpg', 'Backdrop image for The Substance', '2024-12-20 16:47:24', '0000-00-00 00:00:00'),
(9, 2, 195, '/seg7WCWcprQ4vABydxsA8W36TNp.jpg', 'Backdrop image for The Substance', '2024-12-20 16:47:24', '0000-00-00 00:00:00'),
(10, 2, 195, '/8dqZsevb5E8x29OFyr1neSp7bc9.jpg', 'Backdrop image for The Substance', '2024-12-20 16:47:24', '0000-00-00 00:00:00'),
(11, 2, 195, '/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg', 'Backdrop image for The Substance', '2024-12-20 16:47:24', '0000-00-00 00:00:00'),
(12, 2, 195, '/pQesMch1KeIfpCwoZfMPTZDR5Gd.jpg', 'Backdrop image for The Substance', '2024-12-20 16:47:24', '0000-00-00 00:00:00'),
(13, 2, 198, '/d6VujmUENEyjczFQUgZSL1OA02R.jpg', 'Backdrop image for The Conjuring', '2024-12-20 16:47:58', '0000-00-00 00:00:00'),
(14, 2, 198, '/mXndmCbpvlqnD6po0EMfxEZcUSn.jpg', 'Backdrop image for The Conjuring', '2024-12-20 16:47:58', '0000-00-00 00:00:00'),
(15, 2, 198, '/ogbUktEq60qm14hPq8iYgHEJH30.jpg', 'Backdrop image for The Conjuring', '2024-12-20 16:47:58', '0000-00-00 00:00:00'),
(16, 2, 198, '/aQCCpAIdWAp6wyFgjMry4okwrZo.jpg', 'Backdrop image for The Conjuring', '2024-12-20 16:47:58', '0000-00-00 00:00:00'),
(17, 2, 198, '/s59v2hO63DKLmM3FZPdsXML42rF.jpg', 'Backdrop image for The Conjuring', '2024-12-20 16:47:58', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstName` varchar(128) NOT NULL,
  `middleName` varchar(128) NOT NULL,
  `lastName` varchar(128) NOT NULL,
  `contactNo` varchar(15) NOT NULL,
  `role` enum('admin','user') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `firstName`, `middleName`, `lastName`, `contactNo`, `role`) VALUES
(2, 'eyeyron@mail.com', '2c8dd5067dfb2570b0bf0d91355c9a18', 'eyeyron', 'eyeyron', 'eyeyron', '123456', 'admin'),
(3, 'ahahron@mail.com', '200858e7d28c75c62311db34809f821e', 'ahahron', 'ahahron', 'ahahron', '123123123', 'user');

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `movieId` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `site` varchar(255) NOT NULL,
  `videoKey` varchar(255) NOT NULL,
  `videoType` varchar(255) NOT NULL,
  `official` tinyint(1) NOT NULL,
  `dateCreated` timestamp NOT NULL DEFAULT current_timestamp(),
  `dateUpdated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`id`, `userId`, `movieId`, `url`, `name`, `site`, `videoKey`, `videoType`, `official`, `dateCreated`, `dateUpdated`) VALUES
(3, 2, 194, 'https://www.youtube.com/watch?v=zb2P9y70lJE', 'Greetings from Santa hehehehe', 'YouTube', 'zb2P9y70lJE', 'Clip', 1, '2024-12-20 16:47:19', '0000-00-00 00:00:00'),
(4, 2, 194, 'https://www.youtube.com/watch?v=sO-j8YRJLXc', 'Only In Cinemas Now', 'YouTube', 'sO-j8YRJLXc', 'Teaser', 1, '2024-12-20 16:47:19', '0000-00-00 00:00:00'),
(5, 2, 194, 'https://www.youtube.com/watch?v=FW6gRKp5XY4', ':30 UK TV Spot', 'YouTube', 'FW6gRKp5XY4', 'Teaser', 1, '2024-12-20 16:47:19', '0000-00-00 00:00:00'),
(6, 2, 194, 'https://www.youtube.com/watch?v=mPQoGFlJQ5Q', 'UK Screening Audience Reactions', 'YouTube', 'mPQoGFlJQ5Q', 'Featurette', 1, '2024-12-20 16:47:19', '0000-00-00 00:00:00'),
(7, 2, 194, 'https://www.youtube.com/watch?v=tlpLULMoDIc', ':15 UK TV Spot', 'YouTube', 'tlpLULMoDIc', 'Teaser', 1, '2024-12-20 16:47:19', '0000-00-00 00:00:00'),
(8, 2, 194, 'https://www.youtube.com/watch?v=o0xvTl-cxbk', 'Holiday Shopping', 'YouTube', 'o0xvTl-cxbk', 'Clip', 1, '2024-12-20 16:47:19', '0000-00-00 00:00:00'),
(9, 2, 194, 'https://www.youtube.com/watch?v=lYMTzx2Qcmw', 'Official Teaser Trailer', 'YouTube', 'lYMTzx2Qcmw', 'Teaser', 1, '2024-12-20 16:47:19', '0000-00-00 00:00:00'),
(10, 2, 194, 'https://www.youtube.com/watch?v=0EDDtgWnSeY', 'Uncut Theatrical Trailer', 'YouTube', '0EDDtgWnSeY', 'Trailer', 1, '2024-12-20 16:47:19', '0000-00-00 00:00:00'),
(11, 2, 194, 'https://www.youtube.com/watch?v=D6mC2rXALOE', 'New Theatrical Trailer', 'YouTube', 'D6mC2rXALOE', 'Trailer', 1, '2024-12-20 16:47:19', '0000-00-00 00:00:00'),
(12, 2, 194, 'https://www.youtube.com/watch?v=p8hGx8Rd8L8', 'Teaser #1', 'YouTube', 'p8hGx8Rd8L8', 'Teaser', 1, '2024-12-20 16:47:19', '0000-00-00 00:00:00'),
(13, 2, 195, 'https://www.youtube.com/watch?v=BKcMm5RG2M4', 'Q&A with Coralie Fargeat & Guillermo del Toro', 'YouTube', 'BKcMm5RG2M4', 'Featurette', 1, '2024-12-20 16:47:24', '0000-00-00 00:00:00'),
(14, 2, 195, 'https://www.youtube.com/watch?v=Rk3u4_IH0cY', 'Official Clip - Pretty Girls Should Always Smile', 'YouTube', 'Rk3u4_IH0cY', 'Clip', 1, '2024-12-20 16:47:24', '0000-00-00 00:00:00'),
(15, 2, 195, 'https://www.youtube.com/watch?v=HGmRKUYWN48', 'Official Interview - Demi Moore at Cannes Film Festival', 'YouTube', 'HGmRKUYWN48', 'Featurette', 1, '2024-12-20 16:47:24', '0000-00-00 00:00:00'),
(16, 2, 195, 'https://www.youtube.com/watch?v=DBiPdgIZt1g', 'In Conversation with THE SUBSTANCE Filmmaker Coralie Fargeat', 'YouTube', 'DBiPdgIZt1g', 'Featurette', 1, '2024-12-20 16:47:24', '0000-00-00 00:00:00'),
(17, 2, 195, 'https://www.youtube.com/watch?v=O9nfzMT05ck', 'Official Clip - Get Ready With Me', 'YouTube', 'O9nfzMT05ck', 'Clip', 1, '2024-12-20 16:47:24', '0000-00-00 00:00:00'),
(18, 2, 195, 'https://www.youtube.com/watch?v=jNQtxvA2zPY', 'Official Interview - Margaret Qualley', 'YouTube', 'jNQtxvA2zPY', 'Featurette', 1, '2024-12-20 16:47:24', '0000-00-00 00:00:00'),
(19, 2, 195, 'https://www.youtube.com/watch?v=lR5nlovVgvQ', 'Official Trailer #2', 'YouTube', 'lR5nlovVgvQ', 'Trailer', 1, '2024-12-20 16:47:25', '0000-00-00 00:00:00'),
(20, 2, 195, 'https://www.youtube.com/watch?v=0uUEiKr9FmA', 'The Substance (2024) - \"I\'m Sue\"', 'YouTube', '0uUEiKr9FmA', 'Clip', 0, '2024-12-20 16:47:25', '0000-00-00 00:00:00'),
(21, 2, 195, 'https://www.youtube.com/watch?v=4dzYB2JiMAA', 'Official Clip - I\'d Like To Order', 'YouTube', '4dzYB2JiMAA', 'Clip', 1, '2024-12-20 16:47:25', '0000-00-00 00:00:00'),
(22, 2, 195, 'https://www.youtube.com/watch?v=QzbgCI-FFu0', 'Official Clip - Lucky Day', 'YouTube', 'QzbgCI-FFu0', 'Clip', 1, '2024-12-20 16:47:25', '0000-00-00 00:00:00'),
(23, 2, 195, 'https://www.youtube.com/watch?v=1_SSwbYYIQc', 'Breaking Down THE SUBSTANCE\'s Shrimp Scene', 'YouTube', '1_SSwbYYIQc', 'Featurette', 1, '2024-12-20 16:47:25', '0000-00-00 00:00:00'),
(24, 2, 195, 'https://www.youtube.com/watch?v=kEWzeBLhLD4', 'THE SUBSTANCE - Coralie Fargeat rips beauty standards to gory shreds | MUBI Podcast', 'YouTube', 'kEWzeBLhLD4', 'Featurette', 1, '2024-12-20 16:47:25', '0000-00-00 00:00:00'),
(25, 2, 195, 'https://www.youtube.com/watch?v=aA-vyoIPcL4', 'The hype is real', 'YouTube', 'aA-vyoIPcL4', 'Featurette', 1, '2024-12-20 16:47:25', '0000-00-00 00:00:00'),
(26, 2, 195, 'https://www.youtube.com/watch?v=seyGZLvAauk', 'TIFF 2024 Q&A', 'YouTube', 'seyGZLvAauk', 'Featurette', 1, '2024-12-20 16:47:25', '0000-00-00 00:00:00'),
(27, 2, 195, 'https://www.youtube.com/watch?v=U-RxVJrLKrk', 'Official Clip', 'YouTube', 'U-RxVJrLKrk', 'Clip', 1, '2024-12-20 16:47:25', '0000-00-00 00:00:00'),
(28, 2, 195, 'https://www.youtube.com/watch?v=B1B3HZRHpEw', 'Official Teaser', 'YouTube', 'B1B3HZRHpEw', 'Teaser', 1, '2024-12-20 16:47:25', '0000-00-00 00:00:00'),
(29, 2, 195, 'https://www.youtube.com/watch?v=LNlrGhBpYjc', 'Official Trailer', 'YouTube', 'LNlrGhBpYjc', 'Trailer', 1, '2024-12-20 16:47:25', '0000-00-00 00:00:00'),
(30, 2, 195, 'https://www.youtube.com/watch?v=86wkRfWQWiY', 'Mark it in your calendar', 'YouTube', '86wkRfWQWiY', 'Teaser', 1, '2024-12-20 16:47:25', '0000-00-00 00:00:00'),
(31, 2, 198, 'https://www.youtube.com/watch?v=T3SN-VlSplw', 'Extended Movie Preview', 'YouTube', 'T3SN-VlSplw', 'Clip', 1, '2024-12-20 16:47:58', '0000-00-00 00:00:00'),
(32, 2, 198, 'https://www.youtube.com/watch?v=PKT3WVzHDdY', 'Face-To-Face with Terror', 'YouTube', 'PKT3WVzHDdY', 'Featurette', 1, '2024-12-20 16:47:58', '0000-00-00 00:00:00'),
(33, 2, 198, 'https://www.youtube.com/watch?v=Ulg65p84JwU', 'A Life in Demonology', 'YouTube', 'Ulg65p84JwU', 'Featurette', 1, '2024-12-20 16:47:58', '0000-00-00 00:00:00'),
(34, 2, 198, 'https://www.youtube.com/watch?v=9KMbaFqweqg', 'Behind the Scenes', 'YouTube', '9KMbaFqweqg', 'Behind the Scenes', 1, '2024-12-20 16:47:58', '0000-00-00 00:00:00'),
(35, 2, 198, 'https://www.youtube.com/watch?v=IeykV4yFlrE', 'Hide & Clap', 'YouTube', 'IeykV4yFlrE', 'Clip', 1, '2024-12-20 16:47:58', '0000-00-00 00:00:00'),
(36, 2, 198, 'https://www.youtube.com/watch?v=Zk5f0x2I1_I', 'Full Movie Preview', 'YouTube', 'Zk5f0x2I1_I', 'Clip', 1, '2024-12-20 16:47:58', '0000-00-00 00:00:00'),
(37, 2, 198, 'https://www.youtube.com/watch?v=RmOojxfX_iA', 'Somebody\'s With Her', 'YouTube', 'RmOojxfX_iA', 'Clip', 1, '2024-12-20 16:47:58', '0000-00-00 00:00:00'),
(38, 2, 198, 'https://www.youtube.com/watch?v=3zFjXHN40vM', 'I Know Where You\'re Hiding', 'YouTube', '3zFjXHN40vM', 'Clip', 1, '2024-12-20 16:47:58', '0000-00-00 00:00:00'),
(39, 2, 198, 'https://www.youtube.com/watch?v=RF-w0OQdawg', 'I\'m Trying To Sleep', 'YouTube', 'RF-w0OQdawg', 'Clip', 1, '2024-12-20 16:47:58', '0000-00-00 00:00:00'),
(40, 2, 198, 'https://www.youtube.com/watch?v=q_qyivJOG0g', 'Cindy Sleepwalking', 'YouTube', 'q_qyivJOG0g', 'Clip', 1, '2024-12-20 16:47:58', '0000-00-00 00:00:00'),
(41, 2, 198, 'https://www.youtube.com/watch?v=PpZV5gPo1EA', 'Wanna See Him?', 'YouTube', 'PpZV5gPo1EA', 'Clip', 1, '2024-12-20 16:47:58', '0000-00-00 00:00:00'),
(42, 2, 198, 'https://www.youtube.com/watch?v=XAwpBIXjQrY', 'Sheets In The Wind', 'YouTube', 'XAwpBIXjQrY', 'Clip', 1, '2024-12-20 16:47:58', '0000-00-00 00:00:00'),
(43, 2, 198, 'https://www.youtube.com/watch?v=Gb-jRz7HWqs', 'Official Teaser Trailer', 'YouTube', 'Gb-jRz7HWqs', 'Trailer', 1, '2024-12-20 16:47:59', '0000-00-00 00:00:00'),
(44, 2, 198, 'https://www.youtube.com/watch?v=k10ETZ41q5o', 'Official Main Trailer', 'YouTube', 'k10ETZ41q5o', 'Trailer', 1, '2024-12-20 16:47:59', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `casts`
--
ALTER TABLE `casts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `casts`
--
ALTER TABLE `casts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=199;

--
-- AUTO_INCREMENT for table `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
