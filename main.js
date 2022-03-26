//add selectors
let taskName=document.querySelector(".input");
let submit=document.querySelector(".add");
let container=document.querySelector(".tasks");
//add functions
let count=0;

if(window.localStorage.getItem("counter")>0){
    count=window.localStorage.getItem("counter");
}
function onSub(){
    
    window.localStorage.setItem(`Task${count}`,taskName.value);
    taskName.value="";
    count++;
    window.localStorage.setItem("counter",count);
};

submit.addEventListener("click",() => {
    let line=document.createElement("p");
    line.innerHTML=`task ${count}:  ${ window.localStorage.getItem(`Task${count-1}`)} <span>new (can't change)</span>  <button  class"clk new">Delete</button>`;
    document.querySelector(".tasks").appendChild(line);
})
function show(){
    for(i=0;i<count;i++){
        let line=document.createElement("p");
    line.innerHTML=`task ${i+1}:  ${ window.localStorage.getItem(`Task${i}`)}  <button class"clk">Delete</button>`;
    document.querySelector(".tasks").appendChild(line);
    }
}
show()
let myBtn=document.querySelectorAll("p button");
function myEvent(){
    this.parentElement.classList.toggle("hi");
}
myBtn.forEach(btn => btn.addEventListener("click",myEvent));
// window.localStorage.clear()