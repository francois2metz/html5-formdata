/**
 * Emulate FormData for some browsers
 * MIT License
 * (c) 2010 François de Metz
 */
(function(w) {
    if (w.FormData)
        return;
    function FormData() {
        this._boundary = "--------FormData" + Math.random();
        this._fields = [];
    }
    FormData.prototype.append = function(key, value) {
        this._fields.push([key, value]);
    }
    FormData.prototype.toString = function() {
        var boundary = this._boundary;
        var body = "--" + boundary + "\r\n";
        this._fields.forEach(function(field) {
            // file upload
            if (field[1].name) {
                var file = field[1];
                body += "Content-Disposition: form-data; name='"+ field[0] +"'; filename='"+ file.name +"'\r\n";
                body += "Content-Type: application/octet-stream\r\n\r\n";
                body += file.getAsBinary() + "\r\n";
            } else {
                body += "Content-Disposition: form-data; name='"+ field[0] +"';\r\n\r\n";
                body += field[1] + "\r\n";
            }
            body += "--" + boundary;
        });
        return body;
    }
    w.FormData = FormData;
})(window);
