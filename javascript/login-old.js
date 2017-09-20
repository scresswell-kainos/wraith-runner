module.exports = function (phantom, ready) {

    // test interaction on the page
    phantom.evaluate(function(){
        if (document.getElementById("loginform")!=null)
        {
            // Enter username and password in the input fields
            document.getElementById("username-input").value="lr_admin_1@email.com";
            document.getElementById("password-input").value="password";
            document.getElementById("btnSubmit").click();
        }
    });

    setTimeout(function(){ready();}, 20000);
}
