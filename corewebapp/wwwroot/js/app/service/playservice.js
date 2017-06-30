define('playservice', ['jquery', 'servicegateway'], function ($, gateway) {

    var init = function () {
        gateway.createGetRequest('reverse', 'home/reverse')

    }

    var reverse = function (data, callbacks) {
        var inputData = { value: data };
        gateway.executeGetRequest('reverse', callbacks, inputData);
    }


    init();

    return {
        reverse: reverse
    };

});