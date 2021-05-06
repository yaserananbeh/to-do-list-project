'use strict';
// alert('yaser');


const form=document.getElementById('form');
const taskContainer=document.getElementById('taskContainer');
const clearAllDataButton=document.getElementById('clearAllData');


function Task(name){
  this.name=name;
  // console.log(this);
  Task.all.push(this);
}
Task.all=[];

if(localStorage.length!==0){
  let pastData=JSON.parse(localStorage.getItem('task'));
  for (let i = 0; i < pastData.length; i++) {
    Task.all.push(pastData[i]);
  }
  clearAllDataButton.style.display='block';
}



form.addEventListener('submit', handleUserData);
function handleUserData(e){
  e.preventDefault();

  let newTask=new Task();
  newTask.name=e.target.taskInfo.value;

  localStorage.setItem('task',JSON.stringify(Task.all));

  let div=document.createElement('div');
  div.setAttribute('class', 'oneTask');
  taskContainer.append(div);
  let h4El=document.createElement('h4');
  div.append(h4El);
  h4El.textContent=newTask.name;
  let btn=document.createElement('button');
  btn.setAttribute('class','button button3');
  btn.textContent='X';
  div.append(btn);

  btn.addEventListener('click',deleteElement);
  clearAllDataButton.style.display='block';
  form.reset();
}
function deleteElement(e){
  // console.log(e.target.parentElement);
  e.target.parentElement.remove();
}

function getStorageData(){
  if(localStorage.length!==0){
    let storageData=JSON.parse(localStorage.getItem('task'));

    for (let i = 0; i < storageData.length; i++) {
      let div=document.createElement('div');
      div.setAttribute('class', 'oneTask');
      taskContainer.append(div);
      let h4El=document.createElement('h4');
      div.append(h4El);
      h4El.textContent=storageData[i].name;
      let btn=document.createElement('button');
      btn.setAttribute('class','button button3');
      btn.textContent='X';
      div.append(btn);

    }
  }
}
getStorageData();

clearAllDataButton.addEventListener('click',clearAllTable);
function clearAllTable(){
  localStorage.clear();
  location.reload();
}

