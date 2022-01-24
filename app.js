let arr = [];
function Employee(employeeID, fullName, department, level ) {
    this.id = employeeID;
    this.fullName = fullName;
    this.dept = department;
    this.lvl = level;
    this.sal = salary;
    this.img = '#';
    arr.push(this);

}
let employee1 = new Employee(1000 , "Ghazi Samer" , "Administration" , "Senior" ,);
let employee2 = new Employee(1001 , "Lana Ali" , "Finance" , "Senior");
let employee3 = new Employee(1002 , "Tamara Ayoub" , "Marketing" , "Senior" );
let employee4 = new Employee(1003 , "Safi Walid" , "Administration" , "Mid-Senior");
let employee5 = new Employee(1004 , "Omar Zaid" ,	"Development" , "Senior" );
let employee6 = new Employee(1005 , "Rana Saleh" , "Development" , "Junior");
let employee7 = new Employee(1006 , "Hadi Ahmad" , "Finance" , "Mid-Senior");
var salary = 0;
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
    return sa;
}

Employee.prototype.callNameandSal = function(){
    salary = this.calSal();

    document.write(`<h1>${this.fullName} </h1>`);
    document.write(`<p> ${salary} </p>`);

}

arr.forEach(element => {
    element.callNameandSal();
    
});


