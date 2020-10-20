$("input-group").css("width", "200px");
$("#item").css('padding', "10%")
$("#item").css('width', "106%")
$("#url").css('padding', "3%")
$("#url").css('width', "120%")
$("#add").css('padding', "3%")

$('body').css('background-image', 'url("back.jpg")');
$("body").css("background-color", "#d2b48c")


$(".sidenav").css("z-index", "1")
$(".sidenav").css("top", "0")
$(".sidenav").css("left", "0")
$(".sidenav").css("background-color", "#111")
$(".sidenav").css("overflow-x", "hidden")
$(".sidenav").css("transition", "1s")
$(".sidenav").css("padding-top", "60px")
$(".horror").css("color", "black")
$("#add").on("click", function(e) {
    e.preventDefault();
    var itemVal = $("#item").val();
    var urlVal = $("#url").val();
    var list = $("#list");
    var item = $("<li class='listitems' style='display:none'></li>");
    var image = $("<img class='images' src='" + urlVal + "'>");
    var span = $("<span class='item'>" + itemVal + "</span>");
    if (itemVal !== "" && urlVal !== "") {
        item.append(image);
        item.append(span);
        list.append(item);
        list.append("<br>");
        $(".listitems").fadeIn(1500);
        $("#error").fadeOut(1500);
        $("#error").val("");
        $("#url").val("");
        $("#item").val("");

    } else {
        $("#error").fadeIn(2500);
        $("#error").val("Please fill in all the inputs!");
    }
});