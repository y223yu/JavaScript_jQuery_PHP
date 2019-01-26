////////////////////////// JAVACRIPT /////////////////////////////////////
var flagPT = true;
var flagP = true;
var flagE = true;
function toTrim() // TRIM INPUT STRING
{
    var TrimFirstName = document.getElementById("firstname");
    TrimFirstName.value = TrimFirstName.value.toString().trim();    
    var TrimLastName = document.getElementById("lastname");
    TrimLastName.value = TrimLastName.value.toString().trim();    
    var TrimAddress = document.getElementById("address");
    TrimAddress.value = TrimAddress.value.toString().trim();
    var TrimCity = document.getElementById("city");
    TrimCity.value = TrimCity.value.toString().trim();
    var TrimProvince = document.getElementById("province"); 
    TrimProvince.value = TrimProvince.value.toString().trim();
}

function Capitalization() // capitalize first word in an input string
{
    var firstName = document.getElementById("firstname");
    var lastName = document.getElementById("lastname");
    var city = document.getElementById("city");
    var province = document.getElementById("province");
    var postalcode = document.getElementById("postalcode");
    firstname.value = firstName.value.charAt(0).toUpperCase() + firstName.value.substring(1).toLowerCase();
    lastname.value = lastName.value.charAt(0).toUpperCase() + lastName.value.substring(1).toLowerCase();
    city.value = city.value.charAt(0).toUpperCase() + city.value.substring(1).toLowerCase();
    province.value = province.value.charAt(0).toUpperCase() + province.value.substring(1).toUpperCase();
    postalcode.value = postalcode.value.toUpperCase();
}

function toCapitalization(input) // UPPERCASE FIRST WORD OF STRING
{
    var res = new Array();
    res = input.split(" ");
    var output = "";
    for(var i  = 0; i < res.length; i++)
    {
        output = output + res[i].substring(0,1).toUpperCase() + res[i].substring(1).toLowerCase() + " "; 
    }
    
    document.getElementById("address").value = output;
}

function ExpressionEmail() // VALIDITY FOR EMAIL
{
    var EmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var CheckEmail = document.getElementById("email").value;
    if(CheckEmail == "")
    {
        var x = document.getElementById("emailerror");
        x.style.color = "red";
        x.style.fontWeight = "bold";
        x.innerHTML = " Email is required";
        return flagE = false;       
    }
    else if(!CheckEmail.match(EmailRegex))
    {
        var x = document.getElementById("emailerror");
        x.style.color = "red";
        x.style.fontWeight = "bold";
        x.innerHTML = " Invalid email address";  
        return flagE = false;      
    }
    else {
        document.getElementById("emailerror").innerHTML = "";
        return flagE = true;
    }
}

function ExpressPT() // VALIDIDTY POSTAL CODE
{
    var PTRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    var checkPT = document.getElementById("postalcode").value;
    if(checkPT == "")
    {
        var x = document.getElementById("postalerror");
        x.style.color = "red";
        x.style.fontWeight = "bold";
        x.innerHTML = " PostalCode is required";  
        return flagPT = false; 
    }
    else if(!checkPT.match(PTRegex))
    {
        var x = document.getElementById("postalerror");
        x.style.color = "red";
        x.style.fontWeight = "bold";
        x.innerHTML = " Invalid PostalCode"; 
        return flagPT = false;  
    }
    else {
        document.getElementById("postalerror").innerHTML = "";
        return flagPT = true; 
    }
}

function ExpressPhone() // VALIDITY FOR PHONE NUMBER
{
    var PhoneRegex = /^\d{3}\-\d{3}\-\d{4}$/;
    var checkPhone = document.getElementById("phonenumber").value;
    if(checkPhone == "")
    {
        var x = document.getElementById("phoneerror");
        x.style.color = "red";
        x.style.fontWeight = "bold";
        x.innerHTML = " PhoneNumber is required";  
        return flagP = false; 
    }
    else if(!checkPhone.match(PhoneRegex))
    {
        var x = document.getElementById("phoneerror");
        x.style.color = "red";
        x.style.fontWeight = "bold";
        x.innerHTML = " Invalid PhoneNumber";  
        return flagP = false; 
    }
    else {
        document.getElementById("phoneerror").innerHTML = "";
        return flagP = true; 
    }
}

function submitForm() {
    if (flagPT == true && flagE == true && flagP == true) {
        document.forms['form'].submit();
    }
    else {
        event.preventDefault();
    }
}
//increase the quantity of books by button
function AddJavascript()
{
    var x = document.getElementById("javascript_qty").value;
    x = parseInt(x) + 1;
    document.getElementById("javascript_qty").value = x;
}
function AddJquery()
{
    var x = document.getElementById("jquery_qty").value;
    x = parseInt(x) + 1;
    document.getElementById("jquery_qty").value = x;
}
function AddPhp()
{
    var x = document.getElementById("php_qty").value;
    x = parseInt(x) + 1;
    document.getElementById("php_qty").value = x;
}
function AddCsharp()
{
    var x = document.getElementById("csharp_qty").value;
    x = parseInt(x) + 1;
    document.getElementById("csharp_qty").value = x;
}
//decrease the quantity of books by button
function MinusJavascript()
{
    var x = document.getElementById("javascript_qty").value;
    if(parseInt(x) > 0)
    {
        x = parseInt(x) - 1;
        document.getElementById("javascript_qty").value = x;
    }
}
function MinusJquery()
{
    var x = document.getElementById("jquery_qty").value;
    if(parseInt(x) > 0)
    {
        x = parseInt(x) - 1;
        document.getElementById("jquery_qty").value = x;
    }
}
function MinusPhp()
{
    var x = document.getElementById("php_qty").value;
    if(parseInt(x) > 0)
    {
        x = parseInt(x) - 1;
        document.getElementById("php_qty").value = x;
    }
}
function MinusCsharp()
{
    var x = document.getElementById("csharp_qty").value;
    if(parseInt(x) > 0)
    {
        x = parseInt(x) - 1;
        document.getElementById("csharp_qty").value = x;
    }
}
//////////////////// JQUERY //////////////////////////
$(function(){
    $('#form').submit(function(){
  
      if ($.trim($('#firstname').val()).length == 0)
      {
        $('#firstnameerror').css({"color": "red", "font-weight": "bold"});
        $('#firstnameerror').html(" First Name is required");    
        $('#firstname').focus();
      }
      else
      {
        $('#firstnameerror').empty();
      }

      if ($.trim($('#lastname').val()).length == 0)
      {
        $('#lastnameerror').css({"color": "red", "font-weight": "bold"});
        $('#lastnameerror').html(" Last Name is required");    
        $('#lastname').focus();
      }
      else
      {
        $('#lastnameerror').empty();
      }

      if($.trim($('#address').val()).length == 0)
        {
          $('#addresserror').css({"color": "red", "font-weight": "bold"});
          $('#addresserror').html(" This field is required");    
          $('#address').focus();
        }
        else {
            $('#addresserror').empty();
        }

        if($.trim($('#city').val()).length == 0)
        {
            $('#cityerror').css({"color": "red", "font-weight": "bold"});
            $('#cityerror').html(" This field is required");    
            $('#city').focus();
        }
      else {
          $('#cityerror').empty();
      }

      if($.trim($('#province').val()).length == 0)
      {
        $('#provinceerror').css({"color": "red", "font-weight": "bold"});
        $('#provinceerror').html(" This field is required");    
        $('#province').focus();
      }
      else {
          $('#provinceerror').empty();
      }
    });
});
