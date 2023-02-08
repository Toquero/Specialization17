$(document).ready(function () {

    $("#subtn").click(function () {

        var addItem = $('input[name=list-item]').val();
        if ($('input[name=list-item]').val() == "") {
            alert("You need to input any to-do-list!");
        }
        else {
            $("ol").append("<li>" + addItem + "&nbsp &nbsp &nbsp <button class = removeClass>" + "Remove" + "</button>" + "</li>");
            $('input[name=list-item]').val("");
        }

    });

    function removeTodoItem(e, item) {
        e.preventDefault();
        $(item).parent().fadeOut('slow', function () {
            $(item).parent().remove();
        });
    }

    $(".removeClass").on('click', '.removeClass', function () {
        removeTodoItem(e, item);
    });


    $(document).on('click', 'li', function () {
        $(this).fadeOut('slow').wrap("<strike>");

    });

    $('ol').sortable();

});
