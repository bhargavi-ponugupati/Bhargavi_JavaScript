var no_of_attempts = 3;

function checkUserIdPassword(){

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if ( username == "EpamPEP" && password == "EPAMPEP@2020") {
        alert ("SignInin successfully");
        return false;
    }
    else if ( username != "EpamPEP" && password != "EPAMPEP@2020"){
        attemptLeft --;
        alert("You have left "+no_of_attempts+" attempts;");

        if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}
