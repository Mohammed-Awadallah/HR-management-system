let arr = [];
let form = document.getElementById("form");


function Employee(employeeID, fullName, department, level , img) {
    this.id = employeeID;
    this.fullName = fullName;
    this.dept = department;
    this.lvl = level;
    this.sal = 0;
    this.img = img;
    arr.push(this);

}


let employee1 = new Employee(1000 , "Ghazi Samer" , "Administration" , "Senior" , 'assets/Ghazi.jpg' );
let employee2 = new Employee(1001 , "Lana Ali" , "Finance" , "Senior" , 'assets/Lana.jpg');
let employee3 = new Employee(1002 , "Tamara Ayoub" , "Marketing" , "Senior" , 'assets/Tamara.jpg' );
let employee4 = new Employee(1003 , "Safi Walid" , "Administration" , "Mid-Senior" , 'assets/Safi.jpg');
let employee5 = new Employee(1004 , "Omar Zaid" ,	"Development" , "Senior" , 'assets/Omar.jpg' );
let employee6 = new Employee(1005 , "Rana Saleh" , "Development" , "Junior" , 'assets/Rana.jpg');
let employee7 = new Employee(1006 , "Hadi Ahmad" , "Finance" , "Mid-Senior" , 'assets/Hadi.jpg');


form.addEventListener("submit" , addEmbloyee)

function addEmbloyee(event) {
    event.preventDefault();
    let embloyeeName = event.target.embloyeeName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let image = event.target.image.value;
    let newId = generatID();
    let newEmployee = new Employee(newId , embloyeeName , department , level , image);
    newEmployee.calSal();
   saveForm();
//    console.log(arr);
   newEmployee.render();
 
}


Employee.prototype.calSal = function() {
    let sa = 0 ; 
    switch (this.lvl) {
        case  "Junior":
            sa = Math.floor(Math.random() * (1000 - 500) ) + 500;
            break;
        case  "Mid-Senior":
            sa = Math.floor(Math.random() * (1500 - 1000) ) + 1000;

            break;
        case  "Senior":
            sa = Math.floor(Math.random() * (2000 - 1500) ) + 1500;
            break;
        default:
            console.log("no level has been specified for the employee")
            break;
    }
    sa = sa - ((7.5 * 100)/100);
    this.sal = sa;
    return sa;
}
function generatID() {
    var val = Math.floor(1000 + Math.random() * 9000);
    return val;
}


Employee.prototype.render = function () {
    var newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "#980F5A";
    newDiv.style.color = "white";
    newDiv.style.width = "250px";
    newDiv.style.padding = "20px";
    newDiv.style.margin = "20px";
    newDiv.style.fontSize = "15px";
  

     let image = document.createElement('img') ; 
    image.setAttribute("src", this.img);
    newDiv.appendChild(image).width ="200";
    employeeDiv.appendChild(newDiv);

    let info = document.createElement('p')
    info.textContent = "name : " +this.fullName + "  -  " + "ID: " + this.id + " " +  "Department : " 
    + this.dept + " - " + "level : " + this.lvl  + " - " + "salary : " +  this.calSal();
     
    newDiv.appendChild(info);
    employeeDiv.appendChild(newDiv);
}

function renderAll(){
arr.forEach(element => {
    element.render();
});}

function saveForm() {
    let stringfiedEmployees = JSON.stringify(arr)
    localStorage.setItem("Employees" , stringfiedEmployees);
    
}
function getForm() {
    
    
    let data = localStorage.getItem("Employees");
    let parsedData = JSON.parse(data);
    if(parsedData != null){
        arr = [];
        console.log(parsedData);
        for (let i = 0; i < parsedData.length; i++) {
         console.log(parsedData[i]);
         new Employee(parsedData[i].id , parsedData[i].fullName , parsedData[i].dept , parsedData[i].lvl , parsedData[i].img);
            
        }
    }
    
}
getForm();
renderAll();




