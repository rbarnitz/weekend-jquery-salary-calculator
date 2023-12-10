console.log('HELLO WORLD');


let salaryTotal = 0;


function addEmployee(){
    //pulling info from each input field
    let firstName = document.querySelector('#first-name').value;
    console.log(firstName);
    let lastName = document.querySelector('#last-name').value;
    console.log(lastName);
    let id = document.querySelector('#id').value;
    console.log(id);
    let title = document.querySelector('#title').value;
    console.log(title);
    let salary = document.querySelector('#salary').value;
    console.log(salary);

        //turn salary into a number variable
        let salaryNum = parseInt(salary);
        console.log('input data', salary);
    
    
        //check salary limit
        
        let monthlySalaryCap = 20000;


    //adding a row to the table
    let addRow = document.querySelector('#employee-table');
    



    if (salaryNum > monthlySalaryCap){
            console.log('salary too large');
            addRow.innerHTML += `
            <tr bgcolor= "red">
            
                     <th>${firstName}</th>
                     <th>${lastName}</th>
                     <th>${id}</th>
                     <th>${title}</th>
                     <th>$${salary}
                     <button id="delete-employee" onClick="deleteEmployee(event)">Delete</button>
                     </th>
            </tr>`
            return
        }
    
        //updating salary count
        salaryTotal += salaryNum;
        console.log('salary Sum',salaryTotal);
    
        let salaryDisplay = document.querySelector('#total-monthly');
    
        salaryDisplay.innerHTML =`Monthly Total: ${salaryTotal}`
    

    addRow.innerHTML += `
    <tr>
             <th>${firstName}</th>
             <th>${lastName}</th>
             <th>${id}</th>
             <th>${title}</th>
             <th>$${salary}
                <button id="delete-employee" onClick="deleteEmployee(event)">Delete</button>
             </th>
    </tr>`
    

}


function deleteEmployee(event){
    let deleteEmp = document.querySelector('#delete-employee').parentElement.parentElement;
    deleteEmp.remove();


}




    // <input type="text" id="first-name" placeholder="First Name"/>
    // <input type="text" id="last-name" placeholder="Last Name"/>
    // <input type="number" id="ID" placeholder="ID"/>
    // <input type="text" id="Title" placeholder="Title"/>
    // <input type="number" id="Salary" placeholder="Salary"/>