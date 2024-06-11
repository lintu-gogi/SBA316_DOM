const form = document.getElementById("form_Id");
const inputEle = document.getElementById("new_input");
const listEle = document.getElementById("tasks");
const saveBtn=document.querySelector("#saveBtn");
let li;
let span;
let deleteBtn;
let debtnClassList;

form.addEventListener("submit",addValues);

function addValues(evt){
    evt.preventDefault();
    if(inputEle.value.trim()===''){
        alert("The text is empty. Please enter the text");
        inputEle.value="";
    }
    if(inputEle.value.trim()!==''){
    li= document.createElement("li");
    li.classList.add('liClass');
    li.innerHTML=`<label>${inputEle.value}</label>`;
    listEle.appendChild(li);
    listEle.style.marginTop="10px";
    listEle.style.fontSize="18px";
    deleteBtn= document.createElement("button");
    //deleteBtn.textContent='Delete';
    deleteBtn.innerHTML="\u00d7";
    deleteBtn.classList.add('delete-btn');
    li.appendChild(deleteBtn);
    deleteBtn.style.marginTop="10px";
    /*span= document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);*/
    inputEle.value="";
    inputEle.focus();
    
    //return true;
    }
    else
    inputEle.focus();
}

listEle.addEventListener('click',(e)=>{
    if(e.target.tagName=="BUTTON")
    e.target.parentElement.remove();
});
saveBtn.addEventListener('click',(e)=>{
    let listOFInputs=document.querySelectorAll(".liClass");
    //Array to save all the elements before resetting
    let saveArray=new Array();
    console.log(listOFInputs);
    listOFInputs.forEach(element => {
        saveArray.push(element)
        console.log(element);
        listEle.removeChild(element);
        
    });
    
    console.log(saveArray);
    window.alert("To Do List Saved");
    //e.target.parentElement.remove();
})

   