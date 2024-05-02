let profile = document.querySelector('.profile')
let modal = document.querySelector('.modal')
let modalContent = document.querySelector('.modal-content')
let modalEdit = document.querySelector('.modal-content-edit')
let edit = document.querySelector('.edit-profile')
let tableContent = document.querySelectorAll('.employee-content')
let checkBox = document.querySelectorAll('.select')
let checkAll = document.querySelector('.selectAll')
let closeBtnEdit = document.querySelector('#close-btn')

profile.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalContent.style.display = 'flex'
    modal.style.justifyContent = 'flex-end';
    modal.style.alignItems = 'flex-start';
})

edit.addEventListener('click', () => {
    modalContent.style.display = 'none';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modalEdit.style.display = 'flex'
})

closeBtnEdit.addEventListener('click', () => {
    modal.style.display = 'none';
    modalContent.style.display = 'none';
    modalEdit.style.display = 'none'
})

window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = 'none';
        modalContent.style.display = 'flex';
        modal.style.justifyContent = 'flex-end';
        modal.style.alignItems = 'flex-start';
        modalEdit.style.display = 'none'
    }
}


let loadFile = function (event) {
    let picture = document.querySelectorAll('#main-profile')
    picture.forEach(e => {
        e.src = URL.createObjectURL(event.target.files[0]);
    });
};


checkBox.forEach((tabCont, index) => {
    if (tabCont.checked) {
        tableContent[index].classList.add("active");
    }
    tabCont.addEventListener("click", () => {
        tableContent[index].classList.toggle("active");

    });
});

checkAll.addEventListener("click", () => {
    if (checkAll.checked) {
        checkBox.forEach(v => {
            v.checked = true;
        })
        tableContent.forEach(v => {
            v.classList.add("active");
        })
    } else {
        checkBox.forEach(v => {
            v.checked = false;
        })
        tableContent.forEach(v => {
            v.classList.remove("active");
        })
    }
})

function employeeFunction() {
    let input = document.getElementById('employeeList').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('employee-content');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "";
        }
    }
}

// /* search bar for employee list */
// let searchInput = document.querySelector('#employeeList');
// let tableRows = document.querySelector('#employee-table').querySelectorAll('.table-content')

// searchInput.addEventListener('input', (e) => {
//     let searchInputValue = e.target.value.toLowerCase();
//   tableRows.forEach(row => {
//     let doesRowMatch = row.textContent.toLowerCase().includes(searchInputValue);
//     if (doesRowMatch) {
//       row.style.display = 'table-row';
//     } else {
//       row.style.display = 'none';
//     }
//   })
// })

function timesheetfunction() {
    let input = document.getElementById('employee-timesheet').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('time-content');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "";
        }
    }
}

// /* search bar for timesheet */
// function myFunction() {
//   // Declare variables
//   var input, filter, table, tr, td, i, txtValue;
//   input = document.getElementById("employee-timesheet");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("timesheet");
//   tr = table.getElementsByTagName("tr");

//   // Loop through all table rows, and hide those who don't match the search query
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[1];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }
//Delete Employee AJAX for Delete API
$(".delete-employee").on("submit", function (e) {
    let ids = [];
    tableContent.forEach(value => {
        if (value.classList.contains('active')) {
            ids.push(value.children[1].textContent);
        }
    })
    ids = ids.toString()
    console.log(typeof ids);
    $.ajax({
        url: "/api/delete-employee/",
        method: "POST",
        data: {
            ID: ids,
        },
    })
})

function payrollFunction() {
    let input = document.getElementById('payroll').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('payroll-content');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "";
        }
    }
}



$("#regform").on("submit", function (e) {
    let employeeFName = document.getElementById('fname').value
    let employeeLName = document.getElementById('lname').value
    let employeeWorksite = document.getElementById('worksite').value
    let employeeContact = document.getElementById('contactphone').value
    // let employeeIdNumber = document.getElementById('id').value
    let employeeDepartment = document.getElementById('department').value
    $.ajax({
        url: "/api/add-employee/",
        method: "POST",
        data: {
            fname: employeeFName,
            lname: employeeLName,
            worksite: employeeWorksite,
            contactphone: employeeContact,
            department: employeeDepartment,

            // IdNumber: employeeIdNumber,
        },
    })
    console.log(employeeFName)
    console.log(employeeLName)
    console.log(employeeWorksite)
    console.log(employeeContact)

})