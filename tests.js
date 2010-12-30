$(document).ready(function(){
    
    module("FormData");

    test("FormData exist", function() {
        ok(window.FormData);
    });
    
    test("append simple value", function() {
        var data = new FormData();
        data.append('chuck', 'norris');
        data._boundary = '--';
        equal(data.__toString(), "----\r\nContent-Disposition: form-data; name='chuck';\r\n\r\nnorris\r\n----", "body should correctly formatted");
    });

    test("append file", function() {
        var data = new FormData();
        data.append('chuck', {
            name: "norris.pdf",
            getAsBinary: function() {
                return 'norris';
            }
        });
        data._boundary = '--';
        equal(data.__toString(), "----\r\nContent-Disposition: form-data; name='chuck'; filename='norris.pdf'\r\nContent-Type: application/octet-stream\r\n\r\nnorris\r\n----", "body should correctly formatted");
    });
});
