
const ulpage=document.querySelectorAll('.ul-page');
const list=document.querySelectorAll('.list')
const curency=document.querySelector('.currency')
const selectpiar=document.getElementById('select-pair')
const bluring=document.querySelector('.blur')
const pair=document.querySelector('.pairs')
const pairsymbol=document.getElementById('pairsymbol');
const liveprice=document.getElementById('liveprice')
let balance=document.getElementById('balance');









 list.forEach(list=>{
list.addEventListener('click',()=>{   
  curency.innerHTML=list.innerHTML
//  document.querySelector('.currencyselcted').innerHTML=list.innerHTML
bluring.style.display='none'

  })
 
})


// ,"base_code":"GBP","target_code":"USD","conversion_rate":1.3375}

async function gatedata(thesymbol){
try{

  const respons= await fetch(`https://v6.exchangerate-api.com/v6/8ce863e5f792ed76106498b9/pair/${thesymbol}`)

const data= await respons.json();
let result=JSON.stringify(data.conversion_rate)
liveprice.innerHTML=result

// let pairchar=JSON.stringify(thesymbol);
let removedpairchar=thesymbol.replaceAll("/","")
 pairsymbol.innerHTML=removedpairchar


}catch (error){


}

}

// window.gatedata=gatedata;




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
const allplatform=document.querySelector('.allplatform')
const brokers=document.querySelector('.brokers')
const propfirm=document.querySelector('.prop');
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
allplatform.style.display='block'
brokers.style.display='block';
propfirm.style.display='none'
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

if (balance){


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
let cryptopairpaylot=1
let pairwithoutjpy= 0.0001
let pairdwithjpy=0.01
let contractsize=100000

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
 lotsize.innerHTML=xauusdlotstouse.toFixed(3);
 displayriskaount.innerHTML=`$${risktotake}`
 displaypipvalue.innerHTML=`$${1}`
 displaypipsinrisk.innerHTML=pipsvalue
}


// get html currency showing
const allpairs=curency.textContent.trim();
const quotecurrency=allpairs.slice(-3)
console.log(quotecurrency)
// get html currency showing end

// USD/CAD GROUP
 if (quotecurrency==='CAD'&&balanceevalue&&riskvalue&&pipsvalue){

 fetch(`https://v6.exchangerate-api.com/v6/8ce863e5f792ed76106498b9/pair/USD/CAD`)
.then((threspons)=>threspons.json())
.then( therespons=>localStorage.setItem('usdcadprice',therespons.conversion_rate))
  let thecontracsize=contractsize*pairwithoutjpy
 
  let convertusdcadprice=Number(localStorage.getItem('usdcadprice')) //usdcad price
  let convertousdamount=thecontracsize/convertusdcadprice; //pips in USD is correct
  let thelotsizetouse=risktotake/(pipsvalue*convertousdamount) 
  lotsize.innerHTML=thelotsizetouse.toFixed(3)
}


// USD/CHF GROUP
else if (quotecurrency==='CHF'&&balanceevalue&&riskvalue&&pipsvalue){

 fetch(`https://v6.exchangerate-api.com/v6/8ce863e5f792ed76106498b9/pair/USD/CHF`)
.then((threspons)=>threspons.json())
.then( therespons=>localStorage.setItem('usdchfprice',therespons.conversion_rate))
  let thecontracsize=contractsize*pairwithoutjpy
 console.log(thecontracsize)
  let convertusdchfprice=Number(localStorage.getItem('usdchfprice')) //usdcad price
  let convertousdamount=thecontracsize/convertusdchfprice; //pips in USD is correct
  let thelotsizetouse=risktotake/(pipsvalue*convertousdamount) 
  lotsize.innerHTML=thelotsizetouse.toFixed(3)
}



// USD/JPY GROUP
else if (quotecurrency==='JPY'&&balanceevalue&&riskvalue&&pipsvalue){



  
 fetch(`https://v6.exchangerate-api.com/v6/8ce863e5f792ed76106498b9/pair/USD/JPY`)
.then((threspons)=>threspons.json())
.then( therespons=>localStorage.setItem('usdjpyfprice',therespons.conversion_rate))
console.log()
  let thecontracsize=contractsize*pairdwithjpy
 console.log(thecontracsize)
  let convertusdjpyprice=Number(localStorage.getItem('usdjpyfprice')) //usdcad price
  let convertousdamount=thecontracsize/convertusdjpyprice; //pips in USD is correct
  let thelotsizetouse=risktotake/(pipsvalue*convertousdamount) 
  lotsize.innerHTML=thelotsizetouse.toFixed(3)

}

// AUDUSD GROUP

else if (quotecurrency==='AUD'&&balanceevalue&&riskvalue&&pipsvalue){



  
 fetch(`https://v6.exchangerate-api.com/v6/8ce863e5f792ed76106498b9/pair/AUD/USD`)
.then((threspons)=>threspons.json())
.then( therespons=>localStorage.setItem('audusdprice',therespons.conversion_rate))
console.log()
  let thecontracsize=contractsize*pairwithoutjpy
 console.log(thecontracsize)
  let convertaudusdprice=Number(localStorage.getItem('audusdprice')) //audusd price
  let convertousdamount=thecontracsize*convertaudusdprice; //pips in USD is correct
  let thelotsizetouse=risktotake/(pipsvalue*convertousdamount) 
  lotsize.innerHTML=thelotsizetouse.toFixed(3)

}


// GBPUSD GROUP
else if (quotecurrency==='GBP'&&balanceevalue&&riskvalue&&pipsvalue){
 fetch(`https://v6.exchangerate-api.com/v6/8ce863e5f792ed76106498b9/pair/GBP/USD`)
.then((threspons)=>threspons.json())
.then( therespons=>localStorage.setItem('gbpusdprice',therespons.conversion_rate))
console.log()
  let thecontracsize=contractsize*pairwithoutjpy
 console.log(thecontracsize)
  let convertgbpusdprice=Number(localStorage.getItem('gbpusdprice')) //gbpusd price
  let convertousdamount=thecontracsize*convertgbpusdprice; //pips in USD is correct
  let thelotsizetouse=risktotake/(pipsvalue*convertousdamount) 
  lotsize.innerHTML=thelotsizetouse.toFixed(3)

}


// EURUSD GROUP


else if (quotecurrency==='EUR'&&balanceevalue&&riskvalue&&pipsvalue){
 fetch(`https://v6.exchangerate-api.com/v6/8ce863e5f792ed76106498b9/pair/EUR/USD`)
.then((threspons)=>threspons.json())
.then( therespons=>localStorage.setItem('eurusdprice',therespons.conversion_rate))
console.log()
  let thecontracsize=contractsize*pairwithoutjpy
 console.log(thecontracsize)
  let converteurusdprice=Number(localStorage.getItem('eurusdprice')) //eurusd price
  let convertousdamount=thecontracsize*converteurusdprice; //pips in USD is correct
  let thelotsizetouse=risktotake/(pipsvalue*convertousdamount) 
  lotsize.innerHTML=thelotsizetouse.toFixed(3)

}

// NZDUSD GROUP

else if (quotecurrency==='NZD'&&balanceevalue&&riskvalue&&pipsvalue){
 fetch(`https://v6.exchangerate-api.com/v6/8ce863e5f792ed76106498b9/pair/NZD/USD`)
.then((threspons)=>threspons.json())
.then( therespons=>localStorage.setItem('nzdusdprice',therespons.conversion_rate))
console.log()
  let thecontracsize=contractsize*pairwithoutjpy
 console.log(thecontracsize)
  let convertnzdusdprice=Number(localStorage.getItem('nzdusdprice')) //nzdusd price
  let convertousdamount=thecontracsize*convertnzdusdprice; //pips in USD is correct
  let thelotsizetouse=risktotake/(pipsvalue*convertousdamount) 
  lotsize.innerHTML=thelotsizetouse.toFixed(3)

}



//major pairs

else if (quotecurrency==='USD'&&balanceevalue&&riskvalue&&pipsvalue) {
  
let majorpairlots=risktotake/(pipsvalue*majorpairpaylot)
 lotsize.innerHTML=majorpairlots.toFixed(3);
 displayriskaount.innerHTML=`$${risktotake}`
 displaypipvalue.innerHTML=`$${0.01}`
 displaypipsinrisk.innerHTML=pipsvalue;

}


// crytpo


else if (curency.innerHTML.includes('BTC')||curency.innerHTML.includes('ETH')&&balanceevalue &&riskvalue && pipsvalue){
let cryptolotstouse=risktotake/(pipsvalue*cryptopairpaylot)
 lotsize.innerHTML=cryptolotstouse.toFixed(3);
 displayriskaount.innerHTML=`$${risktotake}`
 displaypipvalue.innerHTML=`$${0.10}`
 displaypipsinrisk.innerHTML=pipsvalue;
}

else{
 lotsize.innerHTML='0.000'
}

})



}

const savebalance=document.querySelector('.save-balance');
const savebalancerap=document.querySelector('.save-balance-rap');
const inputext=document.querySelectorAll('.input-text')
const savetext='Save'
 savebalance.innerHTML=savetext

balance.addEventListener('click',()=>{
savebalancerap.style.display='block';
 savebalance.innerHTML=savetext
})

savebalance.addEventListener('click',()=>{

 localStorage.setItem('savedbalance',balance.value)
        savebalance.innerHTML='Saved';

})
balance.value=localStorage.getItem('savedbalance')

inputext.forEach(inputext=>{
  inputext.addEventListener('click',()=>{
   savebalancerap.style.display='none'
})
})


// if(savebalance.innerHTML==='Saved'){

// }



// nav
const calculatorpage=document.querySelector('.calculator-page');

if (calculatorpage){




const calculatorpagetwo=document.querySelector('.calculator-page-two');
const calculate=document.getElementById('Calculate');
  const theinforpage=document.querySelector('.infor-page');
const theinforpagetwo=document.querySelector('.infor-page-two');

const infor= document.getElementById('Infor')

   calculate.classList.add('Calculate');
//  theinforpage.addEventListener('.click',()=>{
//   theinforpage.style.display='none'})
calculatorpage.style.display='none'
 calculatorpagetwo.style.display='block';
   theinforpage.style.display='block';

let page=document.querySelectorAll('.page')
function showpage(thepage){
page.forEach(pages=>{
  pages.style.display='none';
})
document.getElementById(thepage).style.display='block'

}



  theinforpage.addEventListener('click',()=>{
   theinforpage.style.display='none'; 
    theinforpagetwo.style.display='block';
    calculatorpage.style.display='block';
  calculatorpagetwo.style.display='none';

   infor.classList.add('Info')
   calculate.classList.remove('Calculate');
})





calculatorpage.addEventListener('click',()=>{
  calculatorpage.style.display='none';
  calculatorpagetwo.style.display='block';
   theinforpage.style.display='block'; 
    theinforpagetwo.style.display='none';
   infor.classList.remove('Info')
   calculate.classList.add('Calculate');
})





}

// platforms

// brokers
const  platform=document.querySelectorAll('.platform')


platform.forEach(platform=>{
  platform.addEventListener('click',()=>{
    if(platform.innerHTML==='Brokers'){
brokers.style.display='block';
propfirm.style.display='none'
    }
else if (platform.innerHTML==='Propfirms'){
brokers.style.display='none';
propfirm.style.display='block'
}



  })
})




//brokers end

// platforms end












 // nav end


// serch feature
// const search=document.querySelector('.search')
// const searchinput=document.getElementById('searchinput')
// search.addEventListener('click',()=>{
//   list.includes(searchinput.value).innerHTML='bbb'
// })






















// function hold (){

// // const calculatorpage=document.querySelector('.calculator-page');
// // const calculatorpagetwo=document.querySelector('.calculator-page-two')

// // const theinforpagetwo=document.querySelector('.infor-page-two');

 
// // nav.forEach(nav=>{
// function calculatepage(){
//   calculatorpagetwo.style.display='block';
//   calculatorpage.style.display='none';

//    theinforpage.style.display='block';
//    theinforpagetwo.style.display='none';

//     calculate.classList.add('Calculate');
//   infor.classList.remove('Info')


// }

// // function calculatepagecolored(){
// //   calculatorpagetwo.style.display='none';
// //   calculatorpage.style.display='block';

// //    theinforpage.style.display='block';
// //    theinforpagetwo.style.display='none'
      
// // }

// function inforpage(){
// theinforpage.style.display='none';
// theinforpagetwo.style.display='block'
// calculatorpage.style.display='block';
// calculatorpagetwo.style.display='none';
// calculate.classList.remove('Calculate');
//     infor.classList.add('Info')
// }


// // function inforpagecolored(){
// // theinforpage.style.display='block';
// // theinforpagetwo.style.display='none';
// // }
//   // calculatorpage.addEventListener('Click',()=>{

 

     
//   //     })

// // else if(calculatorcolored){
// //   //        inforcoloerd.style.display='block';
// //   // infornotcoloerd.style.display='none';

// //    calculatorcolored.style.display='none'
// //       calculatornotcolored.style.display='block';
      
// //       nav.classList.add('greennav')
// // }



 

// // })
// }




