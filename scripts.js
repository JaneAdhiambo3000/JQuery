// jQuery(document).ready(function () {
//     jQuery('h1').click(function () {
//         alert("This is a heading tag")
//         alert("I told you, THIS IS A HEADER!");
//     });

//     jQuery('p').click(function () {
//         alert("This is a paragraph")
//     });

//     jQuery('img').click(function () {
//         alert("This is an image")
//     });
// });

// $(document).ready(function(){
//     $("p").click(function(){
//         $("img").show();
//     });
// });

// $(document).ready(function(){
//     $("p").click(function(){
//         $(".walrus-showing").toggle();
//         $(".walrus-hidden").toggle();
//     });
// });

// $(document).ready(function(){
//     $(".clickable").click(function(){
//         $(".walrus-showing").toggle();
//         $(".walrus-hidden").toggle();
//     });
// });

$(document).ready(function () {
    $("button").click(function () {
        $("#div1").fadeToggle();
    });
});


$(document).ready(function () {
    $("button#green").click(function () {
        $("body").removeClass();
        $("body").addClass("green-background");
    });

    $("button#yellow").click(function () {
        $("body").removeClass();
        $("body").addClass("yellow-background");
    });

    $("button#red").click(function () {
        $("body").removeClass();
        $("body").addClass("red-background");
    });
});


// $(document).ready(function () {
//     $("button#hello").click(function () {
//         $("ul").after("<li>Hello!</li>");
//         $('li').css('background-color', 'green');
//     });

//     $("button#goodbye").click(function () {
//         $("ul").before("<li>Goodbye!</li>");
//     });

//     $("button#stop").click(function () {
//         $("ul").after("<li>Stop copying me!</li>");

//     });
// });
$(document).ready(function () {
    $("button#hello").click(function () {
        $("ul#user").prepend("<li>Hello!</li>");
        $("ul#webpage").prepend("<li>Why hello there!</li>");
    });

    $("button#goodbye").click(function () {
        $("ul#user").prepend("<li>Goodbye!</li>");
        $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
    });

    $("button#stop").click(function () {
        $("ul#user").prepend("<li>Stop copying me!</li>");
        $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    });
});


$(document).ready(function () {
    $("button#sounds").click(function () {
        $("ul").prepend("<li>meow<li>");
        $("ol").prepend("<li>bark bark<li>");
    });
});

$(document).ready(function () {
    $("p").click(function () {
        $("img").show();
    });
});
$(document).ready(function () {
    $("p").click(function () {
        $(".pic-showing").toggle();
        $(".pic-hidden").toggle();
    });
});

