function userdata() {
    var currentUser = Bmob.User.current();
    if (currentUser.id) {

        var UserData = Bmob.Object.extend("UserData");
        var query = new Bmob.Query(UserData);
        //userData.set("userId",currentUser.objectId);
        console.log(currentUser.id);
        query.equalTo("userId", currentUser.id);
        query.find({
            success: function (results) {
                console.log(results);

            },
            error: function (error) {
                alert("查询失败: " + error.code + " " + error.message);
            }

        });

    } else {
        alert("error:获取用户失败");
        $(location).attr('href', './login.html');
    }
}
userdata();

// var currentUser = Bmob.User.current();
// if (currentUser) {
//     // do stuff with the user
// } else {
//     // show the signup or login page
// }