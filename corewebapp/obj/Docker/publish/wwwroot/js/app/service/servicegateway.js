define('servicegateway', ['jquery', 'amplify', 'config'], function ($, amp, config) {

    var createGetRequest = function (id, url) {
        createRequest(id, url, 'get');
    }

    var createPostRequest = function (id, url) {
        createRequest(id, url, 'post');
    }

    var createRequest = function (id, url, httpMethod) {
        amp.request.define(id, 'ajax', {
            url: config.baseUrl + url,
            type: httpMethod,
            dataType: 'json',
            contentType : 'application/json; charset:utf-8',
            cache: false
        })
    }

    var executeGetRequest = function (resourceId, callBacks, inputData) {
        if (typeof (inputData) !== "undefined" && inputData !== null) {
            amplify.request({
                resourceId: resourceId,
                success: callBacks.success,
                error: function (response) {
                    callBacks.error(response);
                },
                data: inputData
            });
        }
        else {
            amplify.request({
                resourceId: resourceId,
                success: callBacks.success,
                error: function (response) {
                    callBacks.error(response);
                }
            });
        }
    }

    var executePostRequest = function (resourceId, callBacks, data) {
        amp.request({
            resourceId: resourceId,
            success: callBacks.success,
            error: function (response) {
                callBacks.error(response);
            },
            data: JSON.stringify(data)
        });
    };

    return {

        createGetRequest: createGetRequest,
        createPostRequest: createPostRequest,
        executeGetRequest: executeGetRequest,
        executePostRequest: executePostRequest
    };
})