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

    const div=document.createElement('div');
    const ul=document.createElement('ul');
    const li=document.createElement('li');
    li.style.listStyle="none"
    li.style.marginBottom="10px"
    const text=document.createTextNode(input.value);
    li.appendChild(text);
    ul.appendChild(li)
    div.appendChild(ul);
    listcontainer.appendChild(div);
    input.value="";

let removebtn=document.createElement('button')
removebtn.innerHTML='<i class="fa-solid fa-trash-can"></i>';
removebtn.style.backgroundColor="red";
removebtn.style.color="white"
ul.appendChild(removebtn) 
removebtn.addEventListener('click',function(){
removebtn.parentElement.remove();
taskcount.innerHTML--;
})
    li.addEventListener('click',function(){
        li.style.textDecoration="line-through"
    })
    clear.addEventListener('click',function(){
        removebtn.parentElement.parentElement.remove();
        taskcount.innerHTML=0;
    })
})