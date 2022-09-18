const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box")
function compareValues(sum,luckyNumber)
  {
     if(luckyNumber.value<0){
      outputBox.innerText="Lucky number can't be negative😑";
    }
  else if(sum%luckyNumber.value===0){
    outputBox.innerText="Yayy!Your birthday is lucky🥳";
    outputBox.style.color="blue"
  }
  
  else{
    outputBox.innerText="Oh!Your birthday is not lucky😒";
    outputBox.style.color="red"
  }
  }

function checkBirthDateIsLucky(){
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if(dob&&luckyNumber.value)
  compareValues(sum,luckyNumber)
  else
  outputBox.innerText="Please enter both the fields🙏";
}
function calculateSum(dob){
  
  dob= dob.replaceAll("-","");
  let sum=0;
  for(let index=0;index<dob.length;index++){
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}

checkNumberButton.addEventListener('click',checkBirthDateIsLucky)