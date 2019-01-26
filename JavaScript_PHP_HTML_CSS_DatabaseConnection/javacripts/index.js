function openTab(evt, tableName) {
    var tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("true", "");
    }
    document.getElementById(tableName).style.display = "block";
    evt.currentTarget.className += "true";
}

function validForm(idName, spanName) {
    if(document.getElementById(idName).value == "")
    {
        document.getElementById(idName).focus();
        document.getElementById(spanName).innerHTML = "This field is required";
        document.getElementById(spanName).style.color = "red";
        event.preventDefault();
    }
    else {
        document.getElementById(spanName).innerHTML = "";
    }
}

function runPartForm() {
    validForm('vendor#','spanvendor');
    validForm('description','spandescrip');
    validForm('onhand', 'spanonhand');
    validForm('onorder', 'spanonorder');
    validForm('cost','spancost');
    validForm('listprice','spanprice');
}

function runVendorForm() {
    validForm('vendornum','spanvendornum');
    validForm('vendorname','spanvendorname');
    validForm('address1','spanaddress1');
    validForm('city','spancity');
    validForm('province','spanprovince');
    validForm('pt','spanpt');
    validForm('country','spancountry');
    validForm('phone','spanphone');
}

function runQuery() {
    validForm('partquery','spanquery');
}