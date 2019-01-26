<html>
	<head>
        <link rel="stylesheet" href="styles/a5.css" />
        <script rel="javacripts/text" src="javacripts/index.js"></script>
		<?php
			include("connection.php");
		?>
	</head>
	<body>
            <?php
                $tableBodyText = "";
                $partQueryID = $_POST['partqueryid'];

                $connection = ConnectToDatabase(); //from connection.php to open pass to database

                if(!isset($_POST['partqueryid']))
                {
                    echo "<font size=5>Please fill the fields.";
                }
                else
                {
                    $partQuery = "SELECT * FROM Parts WHERE (PartID = $partQueryID)";
                    $preparedQuerySelect = $connection -> prepare($partQuery);
                    $preparedQuerySelect -> execute();
                    
                    Print "<font size=5>The record you are querying as follow:</font><br>";    
    
                    echo "<table>";
    
                    $text = "<tr id='tableHeader'>";
                    $text .= "<th>PartID</th>";
                    $text .= "<th>VendorNo</th>";
                    $text .= "<th>Description</th>";
                    $text .= "<th>OnHand</th>";
                    $text .= "<th>OnOrder</th>";
                    $text .= "<th>Cost</th>";
                    $text .= "<th>ListPrice</th>";
                    $text .= "</tr>";
                    echo $text;
    
                    while ($row = $preparedQuerySelect -> fetch())
                    {
                        $partID = $row['PartID'];
                        $vendorNo = $row['VendorNo'];
                        $description = $row['PartDescription'];
                        $onHand = $row['OnHand'];
                        $onOrder = $row['OnOrder'];
                        $cost = $row['Cost'];
                        $listPrice = $row['ListPrice'];
        
                        $tableBodyText .= "<tr>";
                        $tableBodyText .= "<td>$partID</td>";
                        $tableBodyText .= "<td class='text'>$vendorNo</td>";
                        $tableBodyText .= "<td class='text'>$description</td>";
                        $tableBodyText .= "<td class='text'>$onHand</td>";
                        $tableBodyText .= "<td class='text'>$onOrder</td>";
                        $tableBodyText .= "<td class='text'>$cost</td>";
                        $tableBodyText .= "<td class='text'>$listPrice</td>";
                        $tableBodyText .= "</tr>";
                    }
                    echo $tableBodyText;
    
                    echo "</table>";
                }
			?>
	</body>
</html>
