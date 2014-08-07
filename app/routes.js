
module.exports = function (app) {
    
    app.use("/*", function(req, res,next) {
        res.setHeader('Last-Modified', (new Date()).toUTCString());
        next();
    });
    app.use("/", function(req, res) {
        res.sendfile('./public/views/index.html');
        
    });
    app.use("/index", function(req, res) {
        var obj = {"hi" : "bi"};
        res.status(200).send(obj);

    });   

}
