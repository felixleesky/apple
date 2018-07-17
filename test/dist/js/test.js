function test() {
    Bmob.initialize("7f6188f706fb1fa6f4bf7536dee9c0e2", "556ffc74181e3c9dea2989f4786997eb");
    var html = "";
    html += "<table>" + "<th>姓名</th><th>得分</th><th>地址</th>" + "</table>";
    console.log(1);
    var GameScore = Bmob.Object.extend("GameScore");
    var query = new Bmob.Query(GameScore);
    query.find({
        success: function (results) {
            var html = "";
            // html +="<table>"+"<th>"+"姓名"+"</th>"+"<th>"+"地址"+"</th>";
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                // alert(object.id + ' - ' + object.get('userName'));
                //html += "<li>title:" + item.title + " content:" + item.content + "</li>";
                // html += "<li>title:" + object.get('userName') + " content:" + object.get('score') + "</li>";
                html += "<tr><td>" + object.get('userName') + "</td>" + "<td>" + object.get('score') + "</td></tr>";
                // html +="</table>";
                $("table").append(html);
                //  $(".test").append(html);
                //  html += "<td>name:"+object.userName+
                // <td id="userName">姓名</td>
                //    <td id="score">得分</td>
                //    <td id="address">地址</td>
                // alert(object.id + ' - ' + object.get('playerName'));
                //document.write(html);
                console.log(222);
            }
            console.log("query");
        },
        error: function (object, error) {
            alert("query object fail");
        }
    });
}
test();