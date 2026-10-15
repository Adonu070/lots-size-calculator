
const ulpage=document.getElementById('ul-page');
const comoditybnt=document.getElementById('select-comodity-btn')
let list=document.querySelectorAll('.list')
const curency=document.querySelector('.currency')

comoditybnt.addEventListener('click',()=>{
  ulpage.style.display='block'
})


 list.forEach(list=>{
list.addEventListener('click',()=>{   
 
    // alert('bro')
  curency.innerHTML=list.innerHTML
  })
 
})













//  display result

//  display result end