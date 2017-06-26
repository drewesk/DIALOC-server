const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const users = require("./routes/user")


app.use("/users", users);
// app.get("/", function(req, res, next) {
//     res.json({
//       connected: true
//     })
// });



const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`Listening on ${port}`);
});
