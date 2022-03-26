const express = require('express');
const res = require('express/lib/response');
const app = express()
const path = require('path');
const port = 3000
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require('cors');
const { timingSafeEqual } = require('crypto');
app.use(cors({ origin: "*" }))

app.get('/', (req, res) => {
    console.log(__dirname)
    console.log(path);
    console.log("in get")
    var x = req.query.fname
    console.log(x);
    res.sendFile(path.join(__dirname + `/images/${x}.jpeg`));
})

app.post('/login', (req, res) => {
    // const t1 = req.params()
    res.send("Loged In " + req.body.text);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    // console.log(__dirname)
})

appp = {

}