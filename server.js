const express = require('express')

// Console Emoji
const emoji = String.fromCodePoint(0x1F30D)
const app = express()

var PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log( "Server listening on ==> " + emoji + " http://localhost:" + PORT);
})