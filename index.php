<?php
require("lib/db.php");
require("config/config.php");
$conn = db_init($config['host'], $config['duser'], $config['dpw'], $config['dname']);
$result = mysqli_query($conn, 'SELECT * FROM topic');
?>
<!DOCTYPE html>
<html>
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" type="text/css" href="http://localhost/style.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
</head>

<body id="target">
  <header>
    <h1><a href="http://localhost/index.php">JavaScript</a></h1>
  </header>
  <nav>
    <ol>
      <?php
      while( $row = mysqli_fetch_assoc($result) ){
        echo '<li><a href="http://localhost/index.php?id='.$row['id'].'">'.htmlspecialchars($row['title']).'</a></li>'."\n";
      }
      ?>
    </ol>
  </nav>
  <div id="control">
    <input type="button" value="white" onclick="document.getElementById('target').className='white'" />
    <input type="button" value="black" onclick="document.getElementById('target').className='black'" />
    <a href="http://localhost/write.php">쓰기</a>
  </div>
  <article>
    <?php
    if(empty($_GET['id']) === false){

    $sql = "SELECT topic.id, title, name,description FROM topic LEFT JOIN user ON topic.author = user.id WHERE topic.id =".$_GET['id'];
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_assoc($result);

    echo '<h2>'.htmlspecialchars($row['title']).'</h2>';
    echo '<p>'.htmlspecialchars($row['name']).'</p>';
    echo strip_tags($row['description'],'<a><h1><h2><h3><h4><h5><ul><ol><li>');
  }
    ?>
  </article>
  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
</body>
