$(document).ready(function(){
    
    module("FormData");

    test("FormData exist", function() {
        ok(window.FormData);
    });

    test("add bad fake property", function() {
        var data = new FormData();
        ok(data.fake);
    });
    
    test("append simple value", function() {
        var data = new FormData();
        data.append('chuck', 'norris');
        data.boundary = '-a';
        equal(data, "---a\r\nContent-Disposition: form-data; name=\"chuck\";\r\n\r\nnorris\r\n---a--", "body should correctly formatted");
    });

    test("append file", function() {
        var data = new FormData();
        data.append('chuck', {
            name: "norris.pdf",
            type: "application/pdf",
            getAsBinary: function() {
                return 'norris';
            }
        });
        data.boundary = '-a';
        equal(data, "---a\r\nContent-Disposition: form-data; name=\"chuck\"; filename=\"norris.pdf\"\r\nContent-Type: application/pdf\r\n\r\nnorris\r\n---a--", "body should correctly formatted");
    });
});
