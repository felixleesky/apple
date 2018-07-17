function register() {
    Bmob.initialize("7f6188f706fb1fa6f4bf7536dee9c0e2", "556ffc74181e3c9dea2989f4786997eb");
    //创建类和实例
    var GameScore = Bmob.Object.extend("GameScore");

    $('#submit').click(function (e) {
        var gameScore = new GameScore();
        gameScore.set("userName", $("#userName").val());
        gameScore.set("address", $("#address").val());
        // gameScore.set("score", 137);
        // gameScore.set("playerName", "bmob");

        /*一系列根据自己的意图判断输入框是否已输入内容并决定是否往下执行*/
        var formData = $('form').serialize();
        var firstname = $("#userName").val();
        var lastname = $("#score").val();
        console.log(firstname);
        console.log(lastname);
        //添加数据，第一个入口参数是null
        gameScore.save(null, {
            success: function (gameScore) {
                // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
                alert('添加数据成功，返回的objectId是：' + gameScore.id);
            },
            error: function (gameScore, error) {
                alert('添加数据失败，返回错误信息：' + error.description);
            }
        });
        e.preventDefault();
    });
}
register();

function register() {
    Bmob.initialize("7f6188f706fb1fa6f4bf7536dee9c0e2", "556ffc74181e3c9dea2989f4786997eb");
    $('#submitregister').click(function (e) {
        console.log("start");
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
                alert("register success!");
            },
            error: function (user, error) {
                // Show the error message somewhere and let the user try again.
                alert("Error: " + error.code + " " + error.message);
            }
        });
        e.preventDefault();
    });
}
register();

