(function () {

    var root = this;

    require.config({
        paths: {
            //rxjs
            //'rx': '/lib/rxjs/dist/rx',

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

    define('rx', [], function () {
        return root.rx;
    });

})();