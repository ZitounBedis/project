$('body').css('background-color', '#d2b48c')

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