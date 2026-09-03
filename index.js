import express from 'express';

const students = [ 
  { id: 1,
    name: "Russell",
    course: "Computer Science"
  },
  { 
    id: 2,
    name: "Lilian",
    course: "Computer Science",
  },
  {  
    id: 3,
    name: "Jackilyn",
    course: "Computer Science"
  },
  {  
    id: 4,
    name: "Isabella",
    course: "Information Technology"
  },
  {
    id: 5,
    name: "Kenneth",
    course: "Information Technology"
  }
]

const app = express()

app.use(express.json());

app.get("/students", (req, res) => {
    res.send(students);
});

app.get('/student/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).send('Student not found');
  res.send(student);
});

app.post('/student', (req, res) => {
  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name: req.body.name,
  };
  students.push(newStudent);
  res.send(newStudent);
});

app.patch('/student/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) return res.status(404).send({message: "Student not found"});
  Object.assign(student, req.body);
  res.send(student);
});

app.delete('/student/:id', (req, res) => {
  const studentIndex = students.findIndex(s => s.id === parseInt(req.params.id));
  if (studentIndex === -1) return res.status(404).send({message: "Student not found"});
  const deletedStudent = students.splice(studentIndex, 1);
  res.send(deletedStudent[0]);
});

app.listen(3000, () => {
    console.log("listening to port 3000");
});