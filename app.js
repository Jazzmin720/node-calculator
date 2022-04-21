var readlineSync = require('readline-sync');
const add = "+";
const subtract = "-";
const multiply = "*";
const divide = "/";

function getCalc (){
    let getOperation = readlineSync.question('What operation would you like to perform? (* , / , + , -)' );
   
    if(getOperation == add){
        let firstNum = readlineSync.question('Please enter the first number.');
        if(!isNaN(firstNum)){
            readlineSync.question('Please enter the second number.');
        }else if(isNaN(firstNum)){
            do{
                console.log('That is not a valid number.')
                readlineSync.question('Please enter the first number.')
            }while(isNaN(firstNum));
        }
    }else if(getOperation == subtract){
        let firstNum = readlineSync.question('Please enter the first number.');
        if(!isNaN(firstNum)){
            readlineSync.question('Please enter the second number.');
        }else if(isNaN(firstNum)){
            do{
                console.log('That is not a valid number.')
                readlineSync.question('Please enter the first number.')
            }while(isNaN(firstNum));
        }
    }else if(getOperation == multiply){
        let firstNum = readlineSync.question('Please enter the first number.');
        if(!isNaN(firstNum)){
            readlineSync.question('Please enter the second number.');
        }else if(isNaN(firstNum)){
            do{
                console.log('That is not a valid number.')
                readlineSync.question('Please enter the first number.')
            }while(isNaN(firstNum));
        }
    }else if(getOperation == divide){
        let firstNum = readlineSync.question('Please enter the first number.');
        if(!isNaN(firstNum)){
            readlineSync.question('Please enter the second number.');
        }else if(isNaN(firstNum)){
            do{
                console.log('That is not a valid number.')
                readlineSync.question('Please enter the first number.')
            }while(isNaN(firstNum));
        }
    }
}
getCalc();

//create a function to perform the math