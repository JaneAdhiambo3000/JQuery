jQuery(document).ready(function () {
    jQuery('h1').click(function () {
        alert("This is a heading tag")
        alert("I told you, THIS IS A HEADER!");
    });

    jQuery('p').click(function () {
        alert("This is a paragraph")
    });

    jQuery('img').click(function () {
        alert("This is an image")
    });
});

$(document).ready(function(){
    $("p").click(function(){
        $("img").show();
    });
});

$(document).ready(function(){
    $("p").click(function(){
        $(".walrus-showing").toggle();
        $(".walrus-hidden").toggle();
    });
});

$(document).ready(function(){
    $(".clickable").click(function(){
        $(".walrus-showing").toggle();
        $(".walrus-hidden").toggle();
    });
});
