console.log('HELLO WORLD');


let salaryTotal = 0;
let employeeArray = [];
var globalSalary = 0;
console.log(globalSalary);


document.addEventListener('keypress', function (event) {
    // Check if the pressed key is the 'Enter' key (key code 13)
    if (event.key === 'Enter') {
      // Call your addEmployee function when 'Enter' is pressed
      addEmployee();
    }
  });

function addEmployee(){
    //pulling info from each input field
    //clearing input and resetting placeholders

    let firstName = document.querySelector('#first-name').value;
    //console.log(firstName);
    let firstNameClear = document.querySelector('#first-name');
    firstNameClear.value = '';

    let lastName = document.querySelector('#last-name').value;
    //console.log(lastName);
    let lastNameClear = document.querySelector('#last-name');
    lastNameClear.value = ''

    let id = document.querySelector('#id').value;
    //console.log(id);
    let idClear = document.querySelector('#id');
    idClear.value = ''

    let title = document.querySelector('#title').value;
    //console.log(title);
    let titleClear = document.querySelector('#title');
    titleClear.value = ''

    let salary = document.querySelector('#salary').value;
    //console.log(salary);
    
    let salaryClear = document.querySelector('#salary');
    salaryClear.value = ''

    let employeeArrayEntry = [
        {
          First: firstName,
          Last: lastName,
          ID: id,
          Title: title,
          Salary: salary,
        },
            ]
        console.log(employeeArrayEntry);
        employeeArray.push(employeeArrayEntry);
        console.log(employeeArray);




        


        //turn salary into a number variable
        let salaryNum = parseInt(salary);
        console.log('input data', salary);

        //calc monthly salary
        let monthlySalary = salaryNum/12;
        console.log(monthlySalary);
    
        //check salary limit
        
        let monthlySalaryCap = 20000;


    //adding a row to the table
    let addRow = document.querySelector('#employee-table');
    


    //check to see if salary is too high
    if (monthlySalary > monthlySalaryCap){
            console.log('salary too large');

        
    //add row element with red color
            addRow.innerHTML += `
            <tr class = "expensive">
            
                     <th>${firstName}</th>
                     <th>${lastName}</th>
                     <th>${id}</th>
                     <th>${title}</th>
                     <th>$${salary}
                     <button id="delete-employee" onClick="deleteEmployee(event)">Delete</button>
                     </th>
                     <th></th>

                     
            </tr>`
    //return so we don't duplicate entries
            return
        }
    
     //updating salary count
        salaryTotal += salaryNum;
        console.log('salary Sum',salaryTotal);

        globalSalary = salaryTotal;
    
        let salaryDisplay = document.querySelector('#total-monthly');
    
        salaryDisplay.innerHTML =`Monthly Total: ${salaryTotal}`
    
    //add info if salary is NOT too high
    addRow.innerHTML += `
    <tr class="${salary}">
             <th>${firstName}</th>
             <th>${lastName}</th>
             <th>${id}</th>
             <th>${title}</th>
             <th id = "salaryNum" >$${salary} 
              <button id="delete-employee" onClick="deleteEmployee(event)">Delete</button>
             </th>
    </tr>`

    
}

/*
function clearFields(){

var frm = document.getElementbyId('first-name')[0];

frm.reset();  // Reset all form data
   return false; // Prevent page refresh
}


    let firstName = document.querySelector('#first-name');
    console.log(firstName);

    //const firstNameInput = document.getElementById('first_name');

  // Send value to server
  console.log(firstName.value);

  // 👇️ clear input field
  firstName.value = '';



}
*/


function deleteEmployee(event){
    console.log("event value", event.innerHTML);

    let thisCell = event.target;
    console.log("this cell: ", thisCell);


    let currentRow = thisCell.closest("tr");
    
    let value = currentRow.className;
    
    let valueNum = parseInt(value);
    
    console.log('class name is:', valueNum);

    let rowValue = thisCell.value;
    console.log('deleted value',rowValue);
    
    console.log("current Row: ", currentRow);

    currentRow.remove();

    console.log('global salary is: ',globalSalary);
    globalSalary = globalSalary - valueNum;
    console.log('new global salary is: ',globalSalary);



    let salaryDisplay = document.querySelector('#total-monthly');
    
    salaryDisplay.innerHTML =`Monthly Total: ${globalSalary}`

    
    
    //let value = document.getElementById("salaryNum").className;
    //console.log(value);


    //declare delete location
    //let deleteEmp = document.querySelector('#delete-employee').parentElement.parentElement;
    
    //remove element
    //deleteEmp.remove();

}

