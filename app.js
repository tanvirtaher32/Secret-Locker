// Generate Pin


let pinShow = document.getElementById('pinShow');

document.getElementById('generateBtn').addEventListener('click', function (e) {
    let randomNumber = Math.floor(1000 + Math.random() * 9000)
    pinShow.value = randomNumber;
    console.log(randomNumber);

})

let pinType = document.getElementById('pinType')
 document.getElementById('numPad').addEventListener('click', function (e) {
  const pin =  e.target.innerText;
  if(isNaN(pin)){
    if(pin === 'C'){
        pinType.value = '';
    }
    if(pin === '&lt;' ){
        pinType.value = '';
    }
  }
  else{
    let pinTypeValue = pinType.value;
    pinTypeValue = pinTypeValue + pin;
    pinType.value = pinTypeValue;
  }
 })


 document.getElementById('submit').addEventListener('click',function(){

    if(pinType.value === pinShow.value){
       
        document.getElementById('notifySuccess').style.display = 'block';
        document.getElementById('notifyFail').style.display = 'none';
    }
    else{
       
        document.getElementById('notifyFail').style.display = 'block';
        document.getElementById('notifySuccess').style.display = 'none';
    }
 })


 