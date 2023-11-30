function signIn() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
         alert("Sign In successful");
       } else if (this.readyState == 4 && this.status != 200) {
         alert("Sign In failed");
       }
    };
   
    xhttp.open("POST", "your_sign_in_endpoint", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password));
   }