let data = [
    {
        Q: "Q : JS is used For?",
        a: "Frontend",
        b: "Animation",
        c: "Dynamically update Content",
        d: "Backend",
        ans: "ans3",

    },
    {
        Q : "Q : Fullform of JS ?",
        a : "JavaScript",
        b : "JavaSience",
        c : "JavaS",
        d : "Javasecure",
        ans : "ans1",

    },
    {
        Q : "Q : who developed JS ?",
        a : "santa",
        b : "brenden Eich",
        c : "george",
        d : "Neck",
        ans : "ans2",

    },
    {
        Q : "Q : When JS develope ?",
        a : "1995",
        b : "1990",
        c : "1999",
        d : "1892",
        ans:"ans1"

    }
] 

    let qes = document.getElementById('qns');
    let opt1 = document.getElementById("opt1")
    let opt2 = document.getElementById("opt2")
    let opt3 = document.getElementById("opt3")
    let opt4 = document.getElementById("opt4")
    let answers = document.querySelectorAll('.options')
    let scor = document.getElementById('myScore')
    let net = document.getElementById('net')
    let bac = document.querySelector('.fa-solid fa-arrow-left')

 let num = 0; 
 let score =0;
 let ans;

 console.log(score)

qes.innerHTML = data[num].Q;
opt1.innerHTML = data[num].a;
opt2.innerHTML = data[num].b;
opt3.innerHTML = data[num].c;
opt4.innerHTML = data[num].d;

function getans(){
   
 answers.forEach(currentele => {
    if (currentele.checked) {
        ans =currentele.id
        console.log(ans)
    }
 });

 return ans

}
function disselct(){
    answers.forEach((hello)=>{
        hello.checked = false;
    })
}


function next(){  
   
   let getan = getans();
   if(getan == data[num].ans){
    score++
       console.log(score)
   }
   num++

   disselct()

   if(num < data.length){
qes.innerHTML = data[num].Q;
opt1.innerHTML = data[num].a;
opt2.innerHTML = data[num].b; 
opt3.innerHTML = data[num].c;
opt4.innerHTML = data[num].d;
   }else{
      scor.innerHTML =  ` your score is ${score} / ${data.length} </br> </br>
      <button onclick="location.reload()">Play Again</button>`
      net.remove();

      
   }
  


}

