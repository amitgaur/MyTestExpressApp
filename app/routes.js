
module.exports = function (app) {
    
    app.use("/*", function(req, res,next) {
        res.setHeader('Last-Modified', (new Date()).toUTCString());
        next();
    });
    app.use("/index", function(req, res) {
        var obj = {"hi" : "bi"};
        res.send(200,obj);

    });   

}
