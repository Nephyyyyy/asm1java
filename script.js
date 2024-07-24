'use strict';
const submitBtn = document.getElementById("submit-btn");
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");




const tbody = document.getElementById("tbody")
const petArr = []
const validate = validateData(data);
if(validate)
{
    petArr.push(data)
    clearInput()
    renderTableData(petArr)
}

submitBtn.addEventListener('click',function()
{
    const data = {
        id : idInput.value,
        name: nameInput.value,
        age : parseInt(ageInput.value),
        type: typeInput.value,
        weight:weightInput.value,
        length : parseInt(lengthInput.value),
        color:colorInput.value,
        breed:breedInput.value,
        vaccinated:vaccinatedInput.checked,
        dewormed:dewormedInput.checked,
        sterilized:sterilizedInput.checked,
        date: new Date(),
    };

    if(data.id === '')
    {
        alert( "Please input for id ")
        return false
    }
    if(data.age <1 || data.age> 15)
    {
        alert("Age must be between 1 and 15!")
        return false
    }
    if(data.weight <1 || data.weight> 15)
    {
        alert("Weight must be between 1 and 15!")
        return false
    }
    if(data.length <1 || data.length> 100)
    {
        alert("Length must be between 1 and 100!")
        return false
    }
    if(data.type ==="Select Type")
    {
        alert("Please select Type!")
        return false
    }
    if(data.breed ==="Select Breed")
    {
        alert("Please select Breed!")
        return false
    }
    for(let i=0; i< petArr.length; i++ )
    {
        if(data.id ===petArr[i].id)
        {
            alert("ID must be unique");
            return fasle
            break;
        }
    }
        renderTableData(petArr)
        function renderTableData(petArr)
        {
            tbody.innerHTML="";
            for(let i =0; i,petArr.length; i++) 
            {
                const row = document.createElement('tr')
                row.innerHTML = `
                                <th scope="row">${petArr[i].id}</th>
                                <td>${petArr[i].name}</td>
                                <td>${petArr[i].age}</td>   
                                <td>${petArr[i].type}</td>
                                <td>${petArr[i].weight}</td>
                                <td>${petArr[i].length}</td>
                                <td>${petArr[i].breed}</td>
                                <td>
                                    <i class="bi bi-square-fill" style="color: ${petArr[i].color}"></i>
                                </td>
                                <td><i class="bi ${petArr[i].vaccinated ? " bi-check-circle-fill " : " bi-x-circle-fill "}"></i></td>
                                <td><i class="bi ${petArr[i].dewormed ? " bi-check-circle-fill " : " bi-x-circle-fill "}"></i></td>
                                <td><i class="bi ${petArr[i].sterilized ? " bi-check-circle-fill " : " bi-x-circle-fill "}"></i></td>
                                <td>
                                    ${petArr[i].date.getDate()}/${petArr[i].date.getMonth()+1}/${petArr[i].date.getFullYear()}
                                </td>
                                <td><button type="button" class="btn btn-danger">Delete</button>
                                </td>
                                `;
                tableBodyEl.appendChild(row)
            }
        }
       













});
function validateData(data)
{}


