const item = document.querySelector('#item');
const todobox = document.querySelector('#to-do-box');
const butto = document.querySelector('#butto');



item.addEventListener("keyup", function(event){
   if (event.key == "Enter") {
      if (item.value.trim() == ''){
      alert("please enter some text")
      return
      }
      todo(this.value)
      this.value = " ";
   }
   });

   butto.addEventListener("click",()=>{
      if (item.value.trim() == ''){
         alert("please enter some text")
         return
         }
           todo(item.value)
           item.value ="";
   })


   const todo = (hello) =>{
      const addele = document.createElement("li");
      addele.innerHTML =  
      ` ${ hello} <i class="fas fa-trash"></i>`;
     
      todobox.appendChild(addele);


      addele.addEventListener("click",function(){
         this.classList.toggle("done");
      });

      addele.querySelector('i').addEventListener("click", function(){
         addele.remove();
      });

   
   };
