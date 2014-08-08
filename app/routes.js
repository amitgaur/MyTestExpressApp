module.exports = function (app) {
    
    app.use("/*", function(req, res,next) {
        res.setHeader('Last-Modified', (new Date()).toUTCString());
        res.sendfile('./public/views/index.html');
    });
    app.use("/index", function(req, res) {
        var obj = {"hi" : "bi"};
        res.status(200).send(obj);

    });   

}
