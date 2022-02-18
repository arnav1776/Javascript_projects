function init(){
  var leftDiv=document.createElement("div");
  leftDiv.setAttribute("id","left");

  var rightDiv=document.createElement("div");
  rightDiv.setAttribute("id","right");

  var body=document.body;
  body.appendChild(leftDiv);
  body.appendChild(rightDiv);


  var textArea=document.createElement("textarea");
  textArea.setAttribute("placeholder","I need to");
  textArea.setAttribute("class","textBox");
  textArea.setAttribute("id","textArea");
  rightDiv.appendChild(textArea);

  var leftHeading=document.createElement("h1");
  leftHeading.innerText="TASK LIST";
  leftDiv.appendChild(leftHeading);

  var subHeading=document.createElement("h4");
  subHeading.innerHTML="<br>Add tasks to the list by typing to the right side and pressing enter. You may then view pending tasks below.";
  leftDiv.appendChild(subHeading);

  var box=document.createElement("div");
  box.setAttribute("id","box");
  leftDiv.appendChild(box);

}
init();

function displayData(){
  var items=JSON.parse(localStorage.getItem("tasks"));
    var list;
    if(items!==null){
      list=items;
      var leftdiv=document.getElementById("left");
      var box=document.getElementById("box");
      box.innerHTML="";
      
      Array.from(list).forEach(function(elem,index){
        var container=document.createElement("div");
        container.setAttribute("class","container");

        var contentPara=document.createElement("p");
        contentPara.setAttribute("id","para");
        contentPara.innerHTML=elem.val;
         
        var line=document.createElement("div");
        line.setAttribute("id","line");
        container.appendChild(line);

        var checkBox=document.createElement("input");
        if(elem.check){
          line.style.display="inline-flex";
          checkBox.checked=true;
        }else{
          line.style.display="none";
          checkBox.checked=false;
        }
        checkBox.setAttribute("onClick",`BoxCheak(${index})`);
        checkBox.setAttribute("type","checkbox");

        var edit=document.createElement("button");
        edit.innerHTML="Edit";
        edit.setAttribute("id","edit")
        edit.setAttribute("onClick",`editbtn(${index})`);


        var deleteBtn=document.createElement("button");
        deleteBtn.setAttribute("id",index);
        deleteBtn.setAttribute("onClick","delbtn(this.id)")
        deleteBtn.setAttribute("class","deleteBtn");
        deleteBtn.innerHTML="<h4>X</h4>";

        container.appendChild(contentPara);
        container.appendChild(checkBox);
        container.appendChild(edit);
        container.appendChild(deleteBtn);
  
        
        box.appendChild(container);
      })
      leftdiv.appendChild(box);
    }
}
displayData();


var getTextArea=document.getElementById("textArea");
getTextArea.addEventListener("keyup",function(e){
  var value=getTextArea.value;
  var code=e.code;
  if(value!=="" && code==="Enter"){
    e.preventDefault();
    var items=JSON.parse(localStorage.getItem("tasks"));
    if(items===null){
      list=[];
    }else{
      list=items;
    }
    var obj={
      val:value,
      check:false
    }
    list.push(obj);
    localStorage.setItem("tasks",JSON.stringify(list));
    showData();
  
  getTextArea.value=" ";
  }else{
    console.log("Try again");
  }
 
})



function BoxCheck(index){
   var items=JSON.parse(localStorage.getItem("tasks"));
    if(items===null){
      list=[];
    }else{
      list=items;
    }
    if(list[index].check===true){
      list[index].check=false;
    }else{
      list[index].check=true;
    }
    localStorage.setItem("tasks",JSON.stringify(list));
    showData();
}


function editbtn(index){
  var container=document.getElementsByClassName("container");

  container[index].innerHTML=`<textarea name="editText" id="editText" cols="30" rows="2" onblur="editText(${index})" placeholder="Edit the Task"></textarea>`;
}

function editText(index){
    var items=JSON.parse(localStorage.getItem("tasks"));
    if(items===null){
      list=[];
    }else{
      list=items;
    }
    var edit=document.getElementById("editText").value;
    list[index].val=edit;
    localStorage.setItem("tasks",JSON.stringify(list));
    displayData();
  }

function delbtn(index){
    var item=localStorage.getItem("tasks");
    if(item===null){
      listit=[];
    }else{
      listit=JSON.parse(item);
      listit.splice(index,1);
      console.log(listit);
      localStorage.setItem("tasks",JSON.stringify(listit));
    }
    displayData();  
}
