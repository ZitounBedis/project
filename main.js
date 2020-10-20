$(".container button").css("font-size", "30px");
$(".container button").css("color", "black");
$(".container button").css("text-align", "center");
$(".container button").css("width", "50%");
$(".container button").css("background-color", "#d2b48c");
$(".column").css("width", "33.33%");
$(".column").css("padding", "100px");
$("#topbutton").css("position", "fixed");
$("#topbutton").css("bottom", "50%");
$("h3.description").css("border-style", "double");
$("h3.description").css("border-color", "black");
$("h3.read").css("border-style", "dotted");
$("h3.read").css("border-color", "black");
$(".read").css("color", "black");
$(".container button").css("float", "center");
$(".btn1").css("fontFamily", "Satisfy", "cursive")
$(".btn2").css("fontFamily", "Satisfy", "cursive")
$(".btn3").css("fontFamily", "Satisfy", "cursive")
$(".column").css("width", "33.33%");
$(".column").css("padding", "100px");
$(".description").css("fontFamily", "Courier", "monospace")
$(".image").css("height", "300px")
$(".image").css("width", "200px")
$(".error").css("color", "black")
$("#add").css("color", "black")
$("#add").css("backgroundcolor", "black")
$("form").css("top", "50%");
$("form").css("left", "75%");
$("form").css("position", "absolte");
$("form").css("transform", "50%", "50%");
$("add").css("width", "50%")
$("error").css("font-weight", "bold")
$("error").css("display", "none");
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