const express= require('express')
const app = express()

const port = 3000;

app.listen(port, () => {
    console.log('Example app listening at http://localhost:3000')
});

app.get('/atualizou', function (req, res) {
    res.json({"AWS" : "funcionando"});
});

app.use(express.urlencoded({
    extended: true
}));

app.post('/bar', function(req, rest) {
    var body = req.body;
    console.log(req.body.foo);
    res.send(req.body.foo);
});