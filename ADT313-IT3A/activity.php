
<h1> Hands-on Activity</h1>
<?php
$table = array(
    "header"=>array(
        "StudentID",
        "FirstName",
        "MiddleName",
        "Lastname",
        "Section",
        "Course",
        "Year Level"
    ),
    "body"=>array(
                array(
                  "studentid"=>"0",
                  "firstname"=>"Aaron",  
                  "middlename"=>"Bolea",
                  "lastname"=>"Sapiter",
                  "section"=>"BSIT-3A",
                  "course"=>"BSIT",
                  "yearlevel"=>"3rd Year",
                ),

                array(
                  "studentid"=>"1",
                  "firstname"=>"Xoro",  
                  "middlename"=>"Mi",
                  "lastname"=>"Roronoa",
                  "section"=>"BSA-1A",
                  "course"=>"BSA",
                  "yearlevel"=>"1st Year",
                  ),

                  array(
                  "studentid"=>"2",
                  "firstname"=>"Monkey",  
                  "middlename"=>"Dog",
                  "lastname"=>"Luffy",
                  "section"=>"BSBA-4B",
                  "course"=>"BSBA",
                  "yearlevel"=>"4th Year",
                  ),

                  array(
                  "studentid"=>"3",
                  "firstname"=>"Marvin",  
                  "middlename"=>"Wi",
                  "lastname"=>"Selosa",
                  "section"=>"BSIT-3A",
                  "course"=>"BSIT",
                  "yearlevel"=>"3rd Year",
                  ),

                  array(
                  "studentid"=>"4",
                  "firstname"=>"HAAAA",  
                  "middlename"=>"TTTTTT",
                  "lastname"=>"DOGGG",
                  "section"=>"BSA-2C",
                  "course"=>"BSA",
                  "yearlevel"=>"2nd Year",
                  ),

                  array(
                  "studentid"=>"5",
                  "firstname"=>"Luis",  
                  "middlename"=>"Miguel",
                  "lastname"=>"Benedicto",
                  "section"=>"BSIT-3C",
                  "course"=>"BSIT",
                  "yearlevel"=>"3rd Year",
                  ),

                  array(
                  "studentid"=>"6",
                  "firstname"=>"Ace",  
                  "middlename"=>"Owa",
                  "lastname"=>"Matamis",
                  "section"=>"BSIT-3B",
                  "course"=>"BSIT",
                  "yearlevel"=>"3rd Year",
                  ),

                  array(
                  "studentid"=>"7",
                  "firstname"=>"Elai",  
                  "middlename"=>"Pugosa",
                  "lastname"=>"Maria",
                  "section"=>"BSM 1-D",
                  "course"=>"BSM",
                  "yearlevel"=>"1st Year",
                  ),

                  array(
                  "studentid"=>"8",
                  "firstname"=>"Charles",  
                  "middlename"=>"Beagle",
                  "lastname"=>"Dela Cruz",
                  "section"=>"BSA-4D",
                  "course"=>"BSA",
                  "yearlevel"=>"4th Year",
                  ),

                  array(
                  "studentid"=>"9",
                  "firstname"=>"Eco",  
                  "middlename"=>"Durant",
                  "lastname"=>"Lebron",
                  "section"=>"BSIT-2A",
                  "course"=>"BSIT",
                  "yearlevel"=>"2nd Year",
                  ),

                  array(
                    "studentid"=>"0",
                    "firstname"=>"Sheena",  
                    "middlename"=>"De Guzman",
                    "lastname"=>"Tomas",
                    "section"=>"BSC-1A",
                    "course"=>"BSC",
                    "yearlevel"=>"1st Year",
                  ), 
                )

)

?>

<table border ="1">
  <thead>
    <?php
      for($i = 0; $i <= count($table["header"]) -1; $i++) {
        echo "<th>" .$table["header"][$i]."</th>";
      }    
    ?>
    </thead>
    <tbody>
      <?php
        for($i= 0; $i <= count($table["body"]) -1; $i++){
          echo "<tr>";
          echo "<td>".$i."</td>";
          echo "<td>".$table["body"][$i]["firstname"]."</td>";
          echo "<td>".$table["body"][$i]["middlename"]."</td>";
          echo "<td>".$table["body"][$i]["lastname"]."</td>";
          echo "<td>".$table["body"][$i]["section"]."</td>";
          echo "<td>".$table["body"][$i]["course"]."</td>";
          echo "<td>".$table["body"][$i]["yearlevel"]."</td>";
          echo "</tr>";

        }
      ?>
    </tbody>
<table/>





