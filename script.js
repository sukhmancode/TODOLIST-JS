const listcontainer=document.getElementById("list");
const button=document.getElementById('btn')
const input=document.getElementById('input')
const taskcount=document.getElementById('count')
const clear=document.getElementById('clear')



button.addEventListener('click',function(){
    if(input.value===""){
        document.querySelector('.input-error').innerHTML="Enter something"
        document.getElementById('symbol').style.translate="0px -9px"
        return;
    }else{
        document.querySelector('.input-error').innerHTML="";
        taskcount.innerHTML++;
       

    }
    const inputs=document.createElement('input');
   
    inputs.type="text"
    inputs.setAttribute('readonly','readonly')
    inputs.value=input.value;
   
    inputs.classList.add('input-list')

    const div=document.createElement('div');
    const ul=document.createElement('ul');
    const li=document.createElement('li');
    li.style.listStyle="none"
    li.style.marginBottom="10px"
    const text=document.createTextNode(input.value);
    input.appendChild(text);
    li.appendChild(inputs);
    ul.appendChild(li)
    div.appendChild(ul);
    listcontainer.appendChild(div);

    let savebutton=document.createElement('button');
    savebutton.innerText="EDIT"
    savebutton.style.backgroundColor="green";
    ul.appendChild(savebutton);

    input.value="";
    savebutton.addEventListener('click',()=>{
        if(savebutton.innerText.toLowerCase()=="edit"){
            inputs.removeAttribute('readonly');
            inputs.focus();
            savebutton.innerText="SAVE";
            savebutton.style.backgroundColor="tomato";
        }else{
            inputs.setAttribute('readonly','readonly');
            savebutton.innerText="EDIT"
            savebutton.style.backgroundColor="green"
        }
    })

let removebtn=document.createElement('button')
removebtn.innerHTML='<i class="fa-solid fa-trash-can"></i>';
removebtn.style.backgroundColor="red";
removebtn.style.color="white"
ul.appendChild(removebtn) 
removebtn.addEventListener('click',function(){
removebtn.parentElement.remove();
if(taskcount.innerHTML==0) return;
taskcount.innerHTML--;
})
    inputs.addEventListener('click',function(){
        inputs.style.textDecoration="line-through";
        inputs.style.fontStyle="Italic";
        taskcount.innerHTML--;
    })
    clear.addEventListener('click',function(){
        removebtn.parentElement.parentElement.remove();
        taskcount.innerHTML=0;
    })
})

