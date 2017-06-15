module.exports = function (phantom, ready) {

    phantom.evaluate(function(){
      if (document.getElementById("loginform")!=null)
      {
        // Enter username and password in the input fields
        document.getElementById("username-input").value="llclradmin@nonexistanttest.com";
        document.getElementById("password-input").value="password";
        document.getElementById("loginform").submit();
      }
    });

    phantom.open(phantom.url, function () {
      setTimeout(ready, 5000);
    });
  }
