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
                if(!isset($_POST['vendorNo']) && !isset($_POST['vendorname']) && !isset($_POST['address1']) && !isset($_POST['city']) &&
                    !isset($_POST['province']) && !isset($_POST['pt']) && !isset($_POST['country']) && !isset($_POST['phone']))
                {
                    echo "Please enter required fields.";
                }
                else
                {
                    $vendorNo = $_POST['vendorNo'];
                    $vendorName = $_POST['vendorname'];
                    $address1 = $_POST['address1'];
                    $address2 = $_POST['address2'];
                    $city = $_POST['city'];
                    $prov = $_POST['province'];
                    $postCode = $_POST['pt'];
                    $country = $_POST['country'];
                    $phone = $_POST['phone'];
                    $fax = $_POST['fax'];

                    if(empty($address2)){
                        $address2 ="N/A";
                    }
                    if(empty($fax)){
                        $fax = "N/A";
                    }
                    $sql = "INSERT INTO Vendors (VendorNo, VendorName, Address1, Address2, City, Prov, PostCode, Country, Phone, Fax) 
                    VALUES ('$vendorNo', '$vendorName', '$address1', '$address2', '$city', '$prov', '$postCode', '$country', '$phone', '$fax')";
                
                    if ($connection->query($sql) == TRUE)
                    {
                        echo "New record created successfully<br>";
                    }
                    else
                    {
                        echo "Error: " . $sql . "<br>" . $conn->error;
                    }               
                    /*
                    if(odbc_exec($sql))
                    {
                        echo "Success";
                    }
                    else
                    {
                        echo "Failed";
                    }
                    */
                    echo "<table>";
                    $text = "<tr id='tableHeader'>";
                    $text .= "<th>VendorNo</th>";
                    $text .= "<th>VendorName</th>";
                    $text .= "<th>Address1</th>";
                    $text .= "<th>Address2</th>";
                    $text .= "<th>City</th>";
                    $text .= "<th>Prov</th>";
                    $text .= "<th>PostCode</th>";
                    $text .= "<th>Country</th>";
                    $text .= "<th>Phone</th>";
                    $text .= "<th>Fax</th>";
                    $text .= "</tr>";
                    echo $text;

                    $tableBodyText .= "<tr>";
                    $tableBodyText .= "<td>$vendorNo</td>";
                    $tableBodyText .= "<td class='text'>$vendorName</td>";
                    $tableBodyText .= "<td class='text'>$address1</td>";
                    $tableBodyText .= "<td class='text'>$address2</td>";
                    $tableBodyText .= "<td class='text'>$city</td>";
                    $tableBodyText .= "<td class='text'>$prov</td>";
                    $tableBodyText .= "<td class='text'>$postCode</td>";
                    $tableBodyText .= "<td class='text'>$country</td>";
                    $tableBodyText .= "<td class='text'>$phone</td>";
                    $tableBodyText .= "<td class='text'>$fax</td>";
                    $tableBodyText .= "</tr>";
                    echo $tableBodyText;
                    echo "</table>";  
                }
                $connection = null;
            ?>
    </body>
</html>