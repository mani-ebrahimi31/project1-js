let teachers = [];
let students = [];

let addTeacherBtn = document.querySelector('.add-teacher');
let addStudentBtn = document.querySelector('.add-student');
let printBtn = document.querySelector('.print');
let boxes = document.querySelectorAll('.keyValue-box');

const addTeacher = () => addInput(boxes[0])
const addStudent = () => addInput(boxes[1])
const print = () => {
    document.querySelector(".res").innerHTML = "";
    printArrays(boxes[0], teachers, 'Teachers') //print Teachers
    printArrays(boxes[1], students, 'Students') //print Students
    teachers = [];
    students = [];
}

function addInput(box) {
    let childs = box.children;
    for (let i = 0; i < childs.length; i++)
        if (childs[i].value.trim().length < 1)
            return alert(`${childs[i].placeholder} must be filled out`)

    //creating firstname input
    let nameInput = createInput('name')
    //creating lastname input
    let lastNameInput = createInput()
    //add inputs to boxe
    box.appendChild(nameInput)
    box.appendChild(lastNameInput)
}
function createInput(type) {
    let createdInput = document.createElement("input");
    createdInput.classList.add("q-input");
    createdInput.style.marginTop = "10px";
    if (type == 'name') {
        createdInput.placeholder = "name";
        createdInput.style.marginRight = "4px";
    } else {
        createdInput.placeholder = "lastname";
    }
    return createdInput
}
function printArrays(box, array, arrayName) {
    let resDiv = document.querySelector(".res");
    //adding values to  Array
    for (let i = 0; i < box.children.length; i = i + 2) {
        //checking if its not empty
        if (box.children[i].value.trim().length > 1 && box.children[i + 1].value.trim().length > 1) {
            array.push({
                name: box.children[i].value,
                lastname: box.children[i + 1].value
            })
        }
    }
    //printing teachers or Students
    if (array.length > 0) {
        resDiv.innerHTML += `<p style='color:red'>${arrayName}:</p>`
        for (let i = 0; i < array.length; i++) {
            resDiv.innerHTML += `<p> ${i + 1}.${array[i].name} ${array[i].lastname} <p> `
        }
    }
}
addTeacherBtn.addEventListener("click", addTeacher)
addStudentBtn.addEventListener("click", addStudent)
printBtn.addEventListener("click", print)