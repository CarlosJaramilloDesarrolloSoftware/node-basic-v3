const express = require('express')
const bodyParser = require('body-parser')
const TaskModel = require('./models/task')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('<h1>Index de NODEX</h1>');
});

app.get('/task', (req, res) => {
    res.status(200).json({
        'success': true,
        'data': TaskModel.findAll(),
        'msg': ''
    });
});

app.get('/task/:id', (req, response) => {
    let data = TaskModel.findById(req.params.id);
    if(data != null){
        response.status(200).json({
            'success': true,
            'data': [data],
            'msg': ''
        });
    }else{
        response.status(200).json({
            'success': false,
            'data': [],
            'msg': 'Model not found'
        });
    }
});

app.post('/task', (req, res) => {
    console.log(req.body.title)
    res.send(req.body)
    // let task = new Task();
});

app.delete('/task/:id', (req, res) => {
    let deleted = TaskModel.deleteById(req.params.id);
    res.send("Res:" + deleted)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});