(function () {

    var root = this;

    require.config({
        paths: {

            //common
            'servicegateway': '/js/app/service/servicegateway',
            'config': '/js/app/config',

            //views
            'play': '/js/app/views/play',

            //services            
            'playservice': '/js/app/service/playservice'
        }
    });
    
    define('jquery', [], function () {
        return root.jQuery;
    });
    define('amplify', [], function () {
        return root.amplify;
    });

})();