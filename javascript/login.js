module.exports = function (phantom, ready) {

    phantom.evaluate(function(){
      if (document.getElementById("loginform")!=null)
      {
        phantom.echo('login required');
        // Enter username and password in the input fields
        document.getElementById("username-input").value="llclradmin@nonexistanttest.com";
        document.getElementById("password-input").value="password";
        document.getElementById("btnSubmit").click()
        }
      });


    phantom.open(phantom.url, function () {
      setTimeout(ready, 5000);
    });
  }
