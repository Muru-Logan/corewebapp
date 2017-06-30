define('play', ['jquery', 'playservice'], function ($, service) {

    var init = function () {
        
        $('#btn_reverse').click(function () {
            var val = $("#anyvalue").val();

            if ((val === "undefined") || (val === null))
            {
                $("#status").text("Please enter valid string...");
            }
            $("#status").text("Processing...");
            var callback = {
                success: function (result) {
                    //alert(result);
                    $("#result").text(result);
                    $("#status").text("");
                },
                error: function (error) {
                    alert(error);
                }
            }

            service.reverse(val, callback);

        });

        $('#btn_clear').click(function () {
            $("#anyvalue").val("");
            $("#result").text("");
            

        });
    }

    init();


    return {
        init: init
    };

});