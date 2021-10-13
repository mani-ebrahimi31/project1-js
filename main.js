let teachers = [];
let students = [];
let addTeacherBtn = document.querySelector('.add-teacher');
let addStudentBtn = document.querySelector('.add-student');
let printBtn = document.querySelector('.print');
let boxes = document.querySelectorAll('.keyValue-box');

function addTeacher() {
    //select Teacher box
    let childs = boxes[0].children;
    for (let i = 0; i < childs.length; i++)
        if (childs[i].value.trim().length < 1)
            return alert(`${childs[i].placeholder} must be filled out`)


    //creating firstname input
    let nameInput = document.createElement("input");
    nameInput.classList.add("q-input");
    nameInput.placeholder = "name";
    nameInput.type = "name";
    nameInput.style.marginRight = "4px";
    nameInput.style.marginTop = "10px";

    //creating lastname input
    let lastNameInput = document.createElement("input");
    lastNameInput.classList.add("q-input");
    lastNameInput.placeholder = "lastname";
    nameInput.style.marginTop = "10px";

    //add inputs to boxe
    boxes[0].appendChild(nameInput)
    boxes[0].appendChild(lastNameInput)

}
function addStudent() {
    //select Teacher box
    let childs = boxes[1].children;
    for (let i = 0; i < childs.length; i++) {
        console.log(childs[i].value);
        if (childs[i].value.trim().length < 1) return alert(`${childs[i].placeholder} must be filled out`)
    }

    //creating firstname input
    let nameInput = document.createElement("input");
    nameInput.classList.add("q-input");
    nameInput.placeholder = "name";
    nameInput.type = "name";
    nameInput.style.marginRight = "4px";
    nameInput.style.marginTop = "10px";

    //creating lastname input
    let lastNameInput = document.createElement("input");
    lastNameInput.classList.add("q-input");
    lastNameInput.placeholder = "lastname";
    nameInput.style.marginTop = "10px";

    //add inputs to boxe
    boxes[1].appendChild(nameInput)
    boxes[1].appendChild(lastNameInput)

}
function print() {
    let resDiv = document.querySelector(".res");
    //adding teacher to teachers Array
    for (let i = 0; i < boxes[0].children.length; i = i + 2) {
        //checking if its not empty
        if (boxes[0].children[i].value.trim().length > 1 && boxes[0].children[i + 1].value.trim().length > 1) {
            teachers.push({
                name: boxes[0].children[i].value,
                lastname: boxes[0].children[i + 1].value
            })
        }
    }
    //printing teacher
    if (teachers.length > 0) {
        resDiv.innerHTML = "<p style='color:red'>Teachers:</p>"
        for (let i = 0; i < teachers.length; i++) {
            resDiv.innerHTML += `<p> ${i + 1}.${teachers[i].name} ${teachers[i].lastname} <p> `
        }
    }
    //adding student to students Array
    for (let i = 0; i < boxes[1].children.length; i = i + 2) {
        if (boxes[1].children[i].value.trim().length > 1 && boxes[1].children[i + 1].value.trim().length > 1) {
            students.push({
                name: boxes[1].children[i].value,
                lastname: boxes[1].children[i + 1].value
            })
        }
    }
    //printing students
    if (students.length > 0) {
        resDiv.innerHTML += "<p style='color:blue'>Students:</p>"
        for (let i = 0; i < students.length; i++) {
            resDiv.innerHTML += `<p> ${i + 1}.${students[i].name} ${students[i].lastname} <p> `;
        }
    }
    teachers = [];
    students = [];
}
addTeacherBtn.addEventListener("click", addTeacher)
addStudentBtn.addEventListener("click", addStudent)
printBtn.addEventListener("click", print)
