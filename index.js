import express from 'express';

const students = [{id: 0, name: "student1"}]

const app = express()

app.use(express.json());

app.get("/students", (req, res) => {
    res.send(students);
});

app.post("/students", (req, res) => {
    const newStudent = req.body

    students = [...students, newStudent];

    res.send(newStudent);
});

app.patch("/students/:index", (req, res) => {
    const studentIndex = req.params
    const updatedStudentData = req.body

    students[studentIndex] = updatedStudentData;

    res.send(students[studentIndex]);

    //to be impemented
});

app.listen(3000, () => {
    console.log("listening to port 3000");
});