var express = require('express')
var app = express()

//port definition
app.set('port', process.env.PORT || 4200)

app.use(express.static('webapp'))

//server starting
var server = app.listen(app.get('port'), function () {
  var port = server.address().port
  console.log('Express server listening on port %s', port)
})
