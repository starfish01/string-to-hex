var express = require('express');
var app = express();
app.set('view engine', 'ejs');


app.get('/', function (req, res) {    
    // res.send(toHex('SERABCD12'));
    res.render('pages/index', {
        title: 'SERABCD12',
        value: toHex('SERABCD12')
    });

});

app.get('/:convertStrings',(req, res) =>{
    const textToConvert = req.params.convertStrings;
    res.render('pages/index', {
        title: textToConvert.toUpperCase(),
        value: toHex(textToConvert.toUpperCase())
    });
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

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
