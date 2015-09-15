jQuery(function(){
var $home = $('#home');
var $articles = $('article');
$articles.hide();
$home.show();

$("a").click (
function ()
{

$("a").css("background","#fafafa");
$(this).css("background","yellow");


var getLink = $(this).attr("href");
$articles.hide(); 

var $myLink = $(getLink);
$myLink.slideDown();

}   
)





});

