

const express = require('express')

const app = express()


app.get('/', function (req, res) {
    res.status(202).send('hello developer')
})
app.post('/hello', function (req, res) {
    console.log(req.query.name)//object.property
    console.log(req.query.surname)//object.property
    res.status(202).json({
        "msg": "Hello Everyone",
        "data": req.query.name
    })
})


app.listen(5000)