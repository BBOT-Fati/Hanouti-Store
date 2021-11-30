<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stl.css">
    <title>Hanouti</title>
</head>
<body>
    <header>
        <h1> Hanouti</h1>
    </header>
    <div id="side">
        <input type="text">
        <div id="txt">
            <p>total :</p>
            <p id="total">0</p>
            <p> MAD</p>
        </div>
        <ul id="cart">
               
        </ul>
    </div>
    <div id="content">
        <?php 
            include "./data.php";
            foreach($products as $i){
                echo'<div class="produit" id="'.$i["name"].'"> 
                        <img src="'.$i["image"].'">
                        <h2>'.$i["name"].' | '.$i["price"].' dh </h2> 
                        <img src="imgs/plus.png" id="'.$i["id"].'" class="icona">
                    </div>';
            }
            ?> <script>
                    var data = <?php echo json_encode($products); ?>;
                </script>
    </div>
    <footer> 
       <p> by BBOT Fatimezzahra</p>
    </footer>
    <script src="src.js"></script>
</body>

</html>