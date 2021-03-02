var express = require('express');
var app = express();


app.get('/', function (req, res) {    
    res.send(toHex('SERABCD12'));
});

app.get('/:convertStrings',(req, res) =>{
    const textToConvert = req.params.convertStrings;
    
    res.send(toHex(textToConvert.toUpperCase()));

});

function toHex(string){
    var msg = [];
    for (var i = 0; i < string.length; i++) {
        var s = string.charCodeAt(i).toString(16);
        while (s.length < 2) {
          s = '0' + s;
        }
        msg.push(s);
      }
    return msg;
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});