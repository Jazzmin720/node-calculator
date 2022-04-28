var readlineSync = require('readline-sync');
const add = "+";
const subtract = "-";
const multiply = "*";
const divide = "/";


function getCalc (){
    let getOperation = readlineSync.question('What operation would you like to perform? (* , / , + , -)' )
    if(getOperation == add){
        let firstNum = readlineSync.question('Please enter the first number.')
        if(!isNaN(firstNum)){
            let secondNum = readlineSync.question('Please enter the second number.')
                if(!isNaN(secondNum)){
                console.log(Number(firstNum) +Number(secondNum));
                }else if(isNaN(secondNum)){
                    do{
                        console.log('That is not a valid number.')
                        secondNum = readlineSync.question('Please enter the second number.');
                    }while(isNaN(secondNum))
                }
        }else if(isNaN(firstNum)){
            do{
                console.log('That is not a valid number.')
                firstNum = readlineSync.question('Please enter the first number.')
            }while(isNaN(firstNum));
        }
    }else if(getOperation == subtract){
        let firstNum = readlineSync.question('Please enter the first number.')
        if(!isNaN(firstNum)){
            let secondNum = readlineSync.question('Please enter the second number.')
            if(!isNaN(secondNum)){
                console.log(Number(firstNum)-Number(secondNum));
            }else if(isNaN(secondNum)){
                do{
                    console.log('That is not a valid number.')
                   secondNum = readlineSync.question('Please enter the second number.')
                }while(isNaN(secondNum));
            }
        }else if(isNaN(firstNum)){
            do{
                console.log('That is not a valid number.')
               firstNum = readlineSync.question('Please enter the first number.')
            }while(isNaN(firstNum));
        }
    }else if(getOperation == multiply){
        let firstNum = readlineSync.question('Please enter the first number.')
        if(!isNaN(firstNum)){
            let secondNum = readlineSync.question('Please enter the second number.')
            if(!isNaN(secondNum)){
                console.log(Number(firstNum) * Number(secondNum));
            }else if(isNaN(secondNum)){
                do{
                    console.log('That is not a valid number.')
                   secondNum =  readlineSync.question('Please enter the second number.')
                }while(isNaN(secondNum));
            }
        }else if(isNaN(firstNum)){
            do{
                console.log('That is not a valid number.')
               firstNum =  readlineSync.question('Please enter the first number.')
            }while(isNaN(firstNum));
        }
            
    }else if(getOperation == divide){
        let firstNum = readlineSync.question('Please enter the first number.')
        if(!isNaN(firstNum)){
            let secondNum = readlineSync.question('Please enter the second number.')
            if(!isNaN(secondNum)){
                console.log(Number(firstNum) / Number(secondNum));
            }else if(isNaN(secondNum)){
                do{
                    console.log('That is not a valid number.')
                  secondNum =  readlineSync.question('Please enter the second number.')
                }while(isNaN(secondNum));
            }
        }else if(isNaN(firstNum)){
            do{
                console.log('That is not a valid number.')
               firstNum = readlineSync.question('Please enter the first number.')
            }while(isNaN(firstNum));
        }
    }else(
        console.log('That is not a valid character. Refresh and try again.')
        getOperation;
        )
        
    }
            

    
getCalc();

