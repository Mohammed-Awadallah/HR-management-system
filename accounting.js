let data = localStorage.getItem("Employees");
    let parsedData = JSON.parse(data);
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    
    table.appendChild(thead);
    table.appendChild(tbody);
    
    // Adding the entire table to the body tag
    document.getElementById('body').appendChild(table);
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Department Name";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "NumberOfEmployess";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "AverageSalary";
    let heading_4 = document.createElement('th');
    heading_4.innerHTML = "TotalSalary";
    
    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    row_1.appendChild(heading_4);
    thead.appendChild(row_1);

    let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "Administration";
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = employeesOfAdmin() ;
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = averageSalaryAdministration() ;
let row_2_data_4 = document.createElement('td');
row_2_data_4.innerHTML = salaryAdministration();

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
row_2.appendChild(row_2_data_4);
tbody.appendChild(row_2);
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "Development";
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = employeesOfDevelopment();
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = averageSalaryDevelopment();
let row_3_data_4 = document.createElement('td');
row_3_data_4.innerHTML = salaryDevelopment();


row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
row_3.appendChild(row_3_data_4);
tbody.appendChild(row_3);

let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = "Finance";
let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = employeesOfFinance();
let row_4_data_3 = document.createElement('td');
row_4_data_3.innerHTML = averageSalaryFinance();
let row_4_data_4 = document.createElement('td');
row_4_data_4.innerHTML = salaryOfFinance();


row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
row_4.appendChild(row_4_data_4);
tbody.appendChild(row_4);

let row_5 = document.createElement('tr');
let row_5_data_1 = document.createElement('td');
row_5_data_1.innerHTML = "Marketing";
let row_5_data_2 = document.createElement('td');
row_5_data_2.innerHTML = marketingEmployee();
let row_5_data_3 = document.createElement('td');
row_5_data_3.innerHTML = averageSalaryMarketing();
let row_5_data_4 = document.createElement('td');
row_5_data_4.innerHTML = salaryMarketing();


row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
row_5.appendChild(row_5_data_3);
row_5.appendChild(row_5_data_4);
tbody.appendChild(row_5);

var footer = table.createTFoot();
var row = footer.insertRow(0);
var cell = row.insertCell(0);
cell.innerHTML = "Total";
var cell2 = row.insertCell(1);
cell2.innerHTML = totalEmployees();
var cell3 = row.insertCell(2)
cell3.innerHTML = averageAllSalary();
var cell4 = row.insertCell(3);
cell4.innerHTML = totalSalaryEmployees();

    
function totalEmployees(){

    let x = parsedData.length ; 
    return x 
}
function totalSalaryEmployees() {
    let x = 0;
parsedData.forEach(element => {
    x += element.sal;
});

  return x ;
}

function averageAllSalary(){
 let x = 0;
 parsedData.forEach(element => {
    x += element.sal;
});

x = x / parsedData.length;
return x ;

}

function employeesOfAdmin(){
    let x = 0;
    parsedData.forEach(element => {
        if (element.dept == "Administration") {
          
            x++;
        }
    });
    return x;
}
function salaryAdministration(){
    let x = 0 ;
    parsedData.forEach(element => {
        if (element.dept == "Administration") {
            x += element.sal;
            
        }
    });
    return x;
}
function averageSalaryAdministration(){
    let x = 0 ;
    parsedData.forEach(element => {
        if (element.dept == "Administration") {
            x += element.sal;
            
        }
    });
    let num = employeesOfAdmin();
    x = x / num;
    return x ;
}

function employeesOfDevelopment(){
    let x = 0 ;
    parsedData.forEach(element => {
        if (element.dept == "Development") {
             x++;
            
        }
    });
    return x
}
function salaryDevelopment(){
    let x = 0 ;
    parsedData.forEach(element => {
        if (element.dept == "Development") {
            x = x + element.sal;
            
        }
    });
    return x;
}
    function averageSalaryDevelopment(){
        let x = salaryDevelopment() ;
        
        let num = employeesOfDevelopment();
        x = x / num;
        return x ;
    }

function employeesOfFinance(){
    let x = 0 ;
    parsedData.forEach(element => {
        if (element.dept == "Finance") {
             x++;
            
        }
    });
    return x;
}
function salaryOfFinance(){
    let x = 0 ;
    parsedData.forEach(element => {
        if (element.dept == "Finance") {
            x += element.sal;
            
        }
    });
    return x;
}

function averageSalaryFinance(){
    let x = 0 ;
    parsedData.forEach(element => {
        if (element.dept == "Finance") {
            x += element.sal;
            
        }
    });
    let num = employeesOfFinance();
    x = x / num;
    return x ;
}

function marketingEmployee(){
    {
        let x = 0 ;
        parsedData.forEach(element => {
            if (element.dept == "Marketing") {
                 x++;
                
            }
        });
        return x;
    }

}
function averageSalaryMarketing(){
    let x = 0 ;
    parsedData.forEach(element => {
        if (element.dept == "Marketing") {
            x += element.sal;
            
        }
    });
    let num = marketingEmployee();
    x = x / num;
    return x ;
}
function salaryMarketing() {

      let x = 0 ;
    parsedData.forEach(element => {
        if (element.dept == "Marketing") {
            x += element.sal;
            
        }
    });
    return x;

}



    


     


