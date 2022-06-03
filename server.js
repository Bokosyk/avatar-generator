// Dependencies
const express = require('express')
const emoji = String.fromCodePoint(0x1F30D)
const app = express()

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// to map the EJS template engine to “.html” files
app.engine('html', require('ejs').renderFile);

// Tells express to serve files statically
app.use(express.static('./'));

var PORT = process.env.PORT || 3000;

// Renders page
app.get('/', function (req, res) {
  res.render("index.html")
});

app.listen(PORT, function(err){
  if (err) console.log(err);
  console.log( "Server listening on ==> " + emoji + " http://localhost:" + PORT);
})