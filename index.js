
const ulpage=document.querySelectorAll('.ul-page');
const list=document.querySelectorAll('.list')
const curency=document.querySelector('.currency')
const selectpiar=document.getElementById('select-pair')
const bluring=document.querySelector('.blur')
const pair=document.querySelector('.pairs')


 list.forEach(list=>{
list.addEventListener('click',()=>{   
 
    // alert('bro')
  curency.innerHTML=list.innerHTML
bluring.style.display='none'


  })
 
})

const marketselection=document.querySelectorAll('.market-leection')
const forex=document.getElementById('forex');
const crypto=document.getElementById('crypto');
const indices=document.getElementById('indices')
const market=document.querySelector('.market')

let fxbgcolor= document.querySelector('.fx');
let cryptobrcolor=document.querySelector('.cryp');
let indicesecolor=document.querySelector('.inds');


const thefx=document.querySelector('.thefx')
const thedity=document.querySelector('.thedity')
const thepto=document.querySelector('.thepto')


// auto
pair.innerHTML='Currency pair'
thefx.innerHTML='fx'
fxbgcolor.classList.add('green')
 curency.innerHTML='Select pair'

// autor end



marketselection.forEach(marketselection=>{
  marketselection.addEventListener('click',()=>{
 thefx.innerHTML='';
thedity.innerHTML='';
thepto.innerHTML='';
ulpage.forEach(ulpage=>{
  ulpage.style.display='none'
})

    if (marketselection.innerHTML==='FX(Forex)'){
// forex.style.display='block';
  // market.forEach(market=>{
    fxbgcolor.classList.add('green')
    indicesecolor.classList.remove('green')
    cryptobrcolor.classList.remove('green')
pair.innerHTML='Currency pair';
curency.innerHTML='Select pair'
thefx.innerHTML='fx'
// })

    }


else if(marketselection.innerHTML.includes('Indices')){
  // indices.style.display='block';
  indicesecolor.classList.add('green')
  cryptobrcolor.classList.remove('green')
    fxbgcolor.classList.remove('green')
  thedity.innerHTML='commodity';
  pair.innerHTML='Choose pair'
    curency.innerHTML='Select pair'
    
}


else if(marketselection.innerHTML==='Crypto'){
  // crypto.style.display='block';
cryptobrcolor.classList.add('green')
  indicesecolor.classList.remove('green');
  fxbgcolor.classList.remove('green')
thepto.innerHTML='crypto'
pair.innerHTML='Choose pair'
curency.innerHTML='Select pair'
// thefx.innerHTML='';
}



  })
})







bluring.addEventListener('click',()=>{
bluring.style.display='none'
})

selectpiar.addEventListener('click',()=>{

 if (thefx.innerHTML==='fx'){

forex.style.display='block'
  indices.style.display='none';
  crypto.style.display='none';
 bluring.style.display='block'
}


else if(thedity.innerHTML==='commodity'){
  indices.style.display='block'
  forex.style.display='none';
  crypto.style.display='none';
 bluring.style.display='block'
}
 else if(thepto.innerHTML==='crypto'){
crypto.style.display='block';
  indices.style.display='none'
  forex.style.display='none'
bluring.style.display='block'
 }

})







//  display result

let balance=document.getElementById('balance');
let pips=document.getElementById('pips');
let risk=document.getElementById('Risk');
let lotsize=document.querySelector('.lots-size');
const calculatebtn=document.querySelector('.calculate-btn');
const displayriskaount=document.querySelector('.riskamount');
const displaypipvalue=document.querySelector('.pips-par-value');
const displaypipsinrisk=document.querySelector('.pips-in-risk')
// pips value
let xauusdpaylot=100
let majorpairpaylot=10
// pips value end

calculatebtn.addEventListener('click',()=>{
  // get % of the balance
 let balanceevalue=Number(balance.value) 
 let riskvalue=Number(risk.value)
 let pipsvalue=Number(pips.value)
 let risktotake=balanceevalue*riskvalue/100; //risk
//  get % of the balance end
if (curency.innerHTML.includes('XAUUSD')&& balanceevalue&&riskvalue&&pipsvalue){
 let xauusdlotstouse=risktotake/(pipsvalue*xauusdpaylot)
 lotsize.innerHTML=xauusdlotstouse.toFixed(2);
 displayriskaount.innerHTML=`$${risktotake}`
 displaypipvalue.innerHTML=`$${1}`
 displaypipsinrisk.innerHTML=pipsvalue
}

else if (curency.innerHTML.includes('GBPUSD')|| curency.innerHTML.includes('EURUSD')|| curency.innerHTML.includes('AUDUSD')|| curency.innerHTML.includes('NZDUSD')) {
  

let majorpairlots=risktotake/(pipsvalue*majorpairpaylot)
 lotsize.innerHTML=majorpairlots.toFixed(2);
 displayriskaount.innerHTML=`$${risktotake}`
 displaypipvalue.innerHTML=`$${0.10}`
 displaypipsinrisk.innerHTML=pipsvalue
}



})


//  display result end