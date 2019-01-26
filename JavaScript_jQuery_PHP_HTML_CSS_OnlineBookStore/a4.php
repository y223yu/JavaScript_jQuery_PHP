<!doctype html>
<html>
    <head>
        <title>Your Receipt</title>
        <link href="styles/php.css" type="text/css" rel="stylesheet">
    </head>
    <body>
        <font size=5>Your Receipt. Please verify the information and keep it properly.</font><br><br>
        <?php
            $bookName = $_POST["books"]; //$bookName = the value of checkbox // style="background-color: white; padding: 20px"
            $bookArr = array();
            $bookArr = $bookName; //create an array for multiple choice
            $bookTypes = count($bookArr); //the length of $bookArr

            $prices = array('JavaScript'=>15.99, 'jQuery'=>24.99, 'PHP'=>17.99, 'CSharp'=>14.99); 

            $jsQty = $_POST["javascript_qty"];
            $jqueryQty = $_POST["jquery_qty"];
            $phpQty = $_POST["php_qty"];
            $csharpQty = $_POST["csharp_qty"];

            $quantity = array('JavaScript'=>$jsQty, 'jQuery'=>$jqueryQty, 'PHP'=>$phpQty, 'CSharp'=>$csharpQty);

            $firstname = $_POST["firstname"];
            $lastname = $_POST["lastname"];
            $fullname = $firstname." ".$lastname;

            $address = $_POST["address"];
            $city = $_POST["city"];

            $province = $_POST["province"]; 
            $taxes = array('ON'=>0.13, 'BC'=>0.2, 'AB'=>0); //sale taxes for 3 provinces

            $cityprovince = $city.", ".$province;

            $postalcode = $_POST["postalcode"];
            $phonenumber = $_POST["phonenumber"];
            $email = $_POST["email"];

            if(strlen($firstname)==0 || strlen($lastname)==0 || strlen($address)==0 || strlen($city)==0 || strlen($province)==0 || 
                strlen($postalcode)==0 || strlen($phonenumber)==0 || strlen($email)==0 )
            {
                print("<font size=7>Invalid inputs. All fields are required.</font>");
            }

            print("<font size=4>Shipping To:</font><br>");
            Print("<font size=3>$fullname</font><br>");
            print("<font size=3>$address</font><br>");
            print("<font size=3>$cityprovince</font><br>");
            print("<font size=3>$postalcode</font><br>");
            print("<font size=3>$phonenumber</font><br>");
            print("<font size=3>$email</font><br><br>");
        ?>
        <font size=5>You have chosen the book: </font><br>
        <table border = 0 width = 730>
            <tr><th>Book Name</th><th>Price</th><th>Quantity</th><th>Cost</th></tr>
        <?php
            $i = 0;
            $totalBeforeTax = 0;
            $delivery = 0;
            $extraDelivery = 0;
            while($i<$bookTypes)
            {
                
                $book = $bookArr[$i];
                $cost = $prices[$book] * $quantity[$book];
                print("<tr><td>$bookArr[$i]</td><td>$prices[$book]</td><td>$quantity[$book]</td><td>$cost</td></tr>");
                $totalBeforeTax = $totalBeforeTax + $cost;
                $i = $i + 1;
            }
            if($totalBeforeTax >= 0.01 && $totalBeforeTax <= 25)
            {
                $delivery = 3;
                $day = date("Y-m-d",strtotime("+1 day"));
            }
            else if($totalBeforeTax >= 25.01 && $totalBeforeTax <= 50)
            {
                $delivery = 4;
                $day = date("Y-m-d",strtotime("+2 day"));
            }
            else if($totalBeforeTax >= 50.01 && $totalBeforeTax <= 75)
            {
                $delivery = 5;
                $day = date("Y-m-d",strtotime("+3 day"));
            }
            else if($totalBeforeTax > 75)
            {
                $delivery = 6;
                $day = date("Y-m-d",strtotime("+4 day"));
            }
            $rateCost = $taxes[$province] * $totalBeforeTax;
            $totalAfterTax = $totalBeforeTax + $rateCost + $delivery;
            print("<tr><td>Tax</td><td></td><td></td><td>$rateCost</td></tr>");
            print("<tr><td>Delivery</td><td></td><td></td><td>$delivery</td></tr>");
            print("<tr><td>Total</td><td></td><td></td><td>$totalAfterTax</td></tr>");
        ?>
        </table><br><br>
        <?php           
            print("Estimated Delivery Date: $day");
        ?>
    </body>
</html>