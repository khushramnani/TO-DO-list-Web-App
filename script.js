document.addEventListener('DOMContentLoaded', showData);

const addtask = document.querySelector('.addBtn');

const input = document.querySelector('.input-box')

const list = document.querySelector('.list')

addtask.addEventListener('click',()=>{
    if (input.value === '') {
        alert("you need to add task")
    } else{
        let li = document.createElement('li')
        li.innerHTML = input.value
        list.appendChild(li)

        let span = document.createElement('span')
        span.innerHTML = '<i class="ri-delete-bin-7-line"></i>'

        li.appendChild(span)

    }
    input.value = ""
    saveData()
})

list.addEventListener('click',(e)=>{
    if (e.target.tagName === "LI" ) {
        e.target.classList.toggle('checked')
    } else if (e.target.tagName === "SPAN" || e.target.tagName === "I"){
        e.target.closest('LI').remove()
        saveData()
    }
    
},false)


function saveData() {
    localStorage.setItem("data",list.innerHTML)
}

function showData() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        list.innerHTML = savedData;
    }
}