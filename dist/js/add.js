require(['bmob-min','jquery'],function($){
Bmob.initialize("7f6188f706fb1fa6f4bf7536dee9c0e2", "556ffc74181e3c9dea2989f4786997eb");
console.log(111);
$("#add").click(function(){
    document.getElementById("qqq").innerHTML = $("#userName").val(); 
});
function add(){
console.log(222);
//创建类和实例

$("button").click(function(){
var GameScore = Bmob.Object.extend("GameScore");
var gameScore = new GameScore();
gameScore.set("userName", $("#userName").val());
gameScore.set("score", $("#score").vali());
gameScore.set("address", $("#address").val());
//添加数据，第一个入口参数是null
gameScore.save(null, {
  success: function(gameScore) {
    // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
    alert('添加数据成功，返回的objectId是：' + gameScore.id);
  },
  error: function(gameScore, error) {
    // 添加失败
    alert('添加数据失败，返回错误信息：' + error.description);
  }
      });
  });


  }
add();
 });






