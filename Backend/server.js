const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
let tasks = [];
let nextId = 1;

app.get('/', (req, res) => {
    res.send('Hello this part is Backend ')
});
app.get('/about', (req, res) => {
    res.send('This is my todoapp about backend')
});
app.post('/tasks', (req, res) => {
    const newTask = {
        id: nextId++,
        task: req.body.task
    };
    tasks.push(newTask);
    console.log(tasks);
    res.send('Task added successfully!');
});

app.delete('/tasks/:id', (req, res) => {
    const id = Number(req.params.id);
    tasks = tasks.filter((task) => task.id !== id);
    res.send('Task Deleted Successfully...!');
});

app.put('/tasks/:id', (req, res) => {
    const id = Number(req.params.id);
    const updatedTask = req.body.task;

    const task = tasks.find((t) => t.id === id);

    if (!task) {
        return res.status(404).send('Task not found!');
    }

    task.task = updatedTask;

    res.send('Task Updated Successfully!');
});
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
