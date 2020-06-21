const goodsRoutes = require("./goods");

const appRouter = (app, fs) =>{
app.get("/", (req, res) => {
    res.send("You are at root, please add /getAvailable to the URL to see the available goods");
  });

goodsRoutes(app, fs);
};
module.exports = appRouter