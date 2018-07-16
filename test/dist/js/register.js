$('#submitregister').click(function (e) {
    Bmob.initialize("7f6188f706fb1fa6f4bf7536dee9c0e2", "556ffc74181e3c9dea2989f4786997eb");
    var user = new Bmob.User();
    // user.set("username", $("#username").val());
    // user.set("password", $("#password").val());
    console.log("first");
    user.set("username", "guoguo");
    user.set("password", "123");
    console.log("two");
    //user.set("email", "email@example.com");

    // other fields can be set just like with Bmob.Object
    //user.set("phone", "415-392-0202");

    user.signUp(null, {
        success: function (user) {
            // Hooray! Let them use the app now.
            alert("success");
        },
        error: function (user, error) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
        }
    });

});

