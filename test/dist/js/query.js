function Query() {
    console.log(1);
    var currentUser = Bmob.User.current();
    var GameScore = Bmob.Object.extend("GameScore");
    var query = new Bmob.Query(GameScore);
    query.find({
        success: function (results) {
            var html = "";
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                //console.log(object);
                console.log(object.get('userName'));
                html += "<tr><td>" + object.get('userName') + "</td>" +  "<td>" + object.get('score') + "</td></tr>";
                // $(".querys").append(html);
                // $(".querys").html(html);
            }
            $("table").append(html);
   
        },
        error: function (object, error) {
            alert("query object fail");
        }
    });
}
Query();

$(function () {
    $('#userdata').click(function () {
       // Bmob.User.logOut();
        $(location).attr('href', './userdata.html');
        console.log(11);
    });
    $('#logOut').click(function () {
        console.log(22);
        Bmob.User.logOut();
        $(location).attr('href', './login.html');
        console.log(22);
    });
});
    
