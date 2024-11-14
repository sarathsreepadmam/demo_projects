var eye = document.getElementById("eye");
var password = document.getElementById("password");
debugger;


//eye.onclick = showHidePwd();

function showHidePwd(){
    debugger;
    if(password.type == "password"){
        password.type = "text";
        eye.innerHTML = '<i class="fa fa-eye"></i>';
    }
    else{
        debugger;
        password.type = "password";
        eye.innerHTML = '<i class="fa fa-eye-slash"></i>';

    }
}

let data = {};
data["abc"] = "xyz";
data["latlong"] = "longlat";