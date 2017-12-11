var open = false;

$("head style").append('.hor_menu{margin: 0px;padding: 0px;width:50px;list-style: none;display: flex;flex-direction: column;justify-content:center;}');
$("head style").append('.hor_div{background-color:#a33500;width:150px;color: white;display: flex;align-items: center;font-family: \'Roboto\', sans-serif;font-size: 18px;}');
$("head style").append('.hor_div ul{list-style:none;padding:0px;margin-left:5px;}');
$("head style").append('.hor_div ul li{margin:8px;padding:8px;background-color:#c24306;cursor: pointer;border-radius:5px;}');


$("#artwork").on("click",function(){
  if (open != true) {
  $("body").append('<div class="hor_div bighp"><ul class=".hor_menu"><a href="#plot"><li>История создания</li></a><a href="#heroes"><li>Персонажи</li></a></ul></div>');
  $("head").append('<style id="clr">.bighp {position:absolute;top:60px;left:125px;}</style>');
  open = true;
  }
  else {
  $(".hor_div").remove();
  $("head #clr").remove();
  open = false;
  }
});

$("#testing").on("click",function(){
  $("#test").dialog("open");
});
