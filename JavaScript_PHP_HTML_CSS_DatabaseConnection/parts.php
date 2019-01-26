<!doctype html>
<html>
    <head>
        <link rel="stylesheet" href="styles/a5.css" />
        <script rel="javacripts/text" src="javacripts/index.js"></script>
    </head>
    <body>
            <?php
                $connectionString = 'odbc:Driver={Microsoft Access Driver (*.mdb)};Dbq=C:\\xampp\\htdocs\\ass5\\a5.mdb';
                $connection = new PDO($connectionString);
                $connection -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                $tableBodyText = "";

                if(!isset($_POST['vendornumber']) && !isset($_POST['description']) && !isset($_POST['onhand']) &&
                    !isset($_POST['onorder']) &&!isset($_POST['cost']) &&!isset($_POST['listprice']))
                {
                    echo "Please enter required fields.";
                }
                else
                {
                    //$partID = $_POST['partid'];
                    $vendorNumber = $_POST['vendornumber'];
                    $description = $_POST['description'];
                    $onHand = $_POST['onhand'];
                    $onOrder = $_POST['onorder'];
                    $cost = $_POST['cost'];
                    $listPrice = $_POST['listprice'];

                    $sql = "INSERT INTO Parts (VendorNo, PartDescription, OnHand, OnOrder, Cost, ListPrice) 
                            VALUES ('$vendorNumber', '$description', '$onHand', '$onOrder', '$cost', '$listPrice')";

                    if ($connection->query($sql) == TRUE)
                    {
                        echo "New record created successfully<br>";
                    }
                    else
                    {
                        echo "Error: " . $sql . "<br>" . $conn->error;
                    }               

                    echo "<table>";
                    $text = "<tr id='tableHeader'>";
                    //$text .= "<th>PartID</th>";
                    $text .= "<th>VendorNo</th>";
                    $text .= "<th>Description</th>";
                    $text .= "<th>OnHand</th>";
                    $text .= "<th>OnOrder</th>";
                    $text .= "<th>Cost</th>";
                    $text .= "<th>ListPrice</th>";
                    $text .= "</tr>";
                    echo $text;

                    $tableBodyText .= "<tr>";
                    //$tableBodyText .= "<td>$partID</td>";
                    $tableBodyText .= "<td class='text'>$vendorNumber</td>";
                    $tableBodyText .= "<td class='text'>$description</td>";
                    $tableBodyText .= "<td class='text'>$onHand</td>";
                    $tableBodyText .= "<td class='text'>$onOrder</td>";
                    $tableBodyText .= "<td class='text'>$cost</td>";
                    $tableBodyText .= "<td class='text'>$listPrice</td>";
                    $tableBodyText .= "</tr>";
                    echo $tableBodyText;
                    echo "</table>";
                }
                $connection = null;
            ?>
    </body>
</html>