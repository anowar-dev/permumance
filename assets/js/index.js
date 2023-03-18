$(document).ready(function(){
    $(".myLinks1").css({"display": "none"});
    $(".myLinks2").css({"display": "none"});
    $(".drop-menu1").click(function(){
        $(".faic").toggle();
        $(".myLinks1").toggle();
    });

    $(".drop-menu2").click(function(){
        $(".faic2").toggle();
        $(".myLinks2").toggle();
    });
});