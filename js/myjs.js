
// first calcolator
// let display = document.getElementById('display');

// let buttons = Array.from(document.getElementsByClassName('button'));

// buttons.map( button => {
//     button.addEventListener('click', (e) => {
//         switch(e.target.innerText){
//             case 'C':
//                 display.innerText = '';
//                 break;
//             case '←':
//                 if(display.innerText){
//                     display.innerText = display.innerText.slice(0,-1);

//                 }   
//                 break; 
//             case '=':
//                 try{
//                     display.innerText =eval(display.innerText);
//                 } catch{
//                     display.innerText ='Error!'
                    
//                 }
//                 break;
//             default:
//                 display.innerText += e.target.innerText;
//         }
//     });

// });




// // second calcolator
// class Calculator{
//     constructor(previousOperandTextElement,currentOperandTextElement){
//         this.previousOperandTextElement = previousOperandTextElement;
//         this.currentOperandTextElement = currentOperandTextElement;
//         this.clear();
//     }

//     clear(){
//         this.currentOperand = '';
//         this.previousOperand = '';
//         this.operation = undefined;
//     }
//     delete(){
//         this.currentOperand = this.currentOperand.toString().slice(0,-1);
//     }

//     appendNumber(number){
//         if(number === '.' && this.currentOperand.includes('.')) return
//         this.currentOperand = this.currentOperand.toString() + number.toString();
//     }

//     chooseOperation(operation){
//         if(this.currentOperand === '') return
//         if(this.previousOperand !== '') {
//             this.compute();
//         }
//         this.operation = operation;
//         this.previousOperand = this.currentOperand
//         this.currentOperand = ''
//     }

//     compute(){
//         let computation 
//         const prev = parseFloat(this.previousOperand)
//         const current = parseFloat(this.currentOperand)
//         if(isNaN(prev) || isNaN(current)) return 
//         switch (this.operation){
//             case '+':
//                 computation = prev + current
//                 break;
//             case '-':
//                 computation = prev - current
//                 break;
//             case '*':
//                 computation = prev * current
//                 break;
//             case '/':
//                 computation = prev / current
//                 break;
//             default: 
//                 return    
//         }

//         this.currentOperand = computation
//         this.operation = undefined
//         this.previousOperand = ''
//     }

//     getDisplayNumber(number){
//         const stringNumber = number.toString();
//         const integerDigits = parseFloat(stringNumber.split('.')[0])
//         const decimalDigits = stringNumber.split('.')[1]
//         let integerDisplay
//         if (isNaN(integerDigits)){
//             integerDigits= ''
//         }else{
//             integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits:0})
//         }

//         if(decimalDigits != null){
//             return `${integerDisplay}.${decimalDigits}`
//         }else{
//             return integerDigits
//         }
//     }


//     updateDisplay(){
//         this.currentOperandTextElement.innerText = 
//         this.getDisplayNumber(this.currentOperand)
//         if(this.operation != null){
//             this.previousOperandTextElement.innerText = 
//             `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
//         }else{
//             this.previousOperandTextElement.innerText = ''
//         }
        
//     }
// }


// const numberButtons = document.querySelectorAll('[data-number]');
// const operationButtons =document.querySelectorAll('[data-operation]');
// const equalsButton = document.querySelector('[data-equals]');
// const deleteButton = document.querySelector('[data-delete]');
// const allClearButton = document.querySelector('[data-all-clear]');
// const previousOperandTextElement = document.querySelector('[data-previous-operand]');
// const currentOperandTextElement = document.querySelector('[data-current-operand]');

// const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement);

// numberButtons.forEach( button => {
//     button.addEventListener('click', () => {
//         calculator.appendNumber(button.innerText);
//         calculator.updateDisplay();

//     })
// })

// operationButtons.forEach( button => {
//     button.addEventListener('click', () => {
//         calculator.chooseOperation(button.innerText);
//         calculator.updateDisplay();

//     })
// })

// equalsButton.addEventListener('click', button => {
//     calculator.compute()
//     calculator.updateDisplay();
// })


// allClearButton.addEventListener('click', button => {
//     calculator.clear()
//     calculator.updateDisplay();
// })


// deleteButton.addEventListener('click', button => {
//     calculator.delete()
//     calculator.updateDisplay();
// })


// main project

const btnNumber = document.querySelectorAll('.btn-numbers');
const btnOperation = document.querySelectorAll('.btn-operator');
const btnEquale = document.querySelector('.btn-equale');
const btnReset = document.querySelector('.btn-reset');
const btnDelete = document.querySelector('.btn-delete');

const currentOutput = document.getElementById('current-output');
const previousOutput = document.getElementById('previous-output');

let allOperation;

btnNumber.forEach( button => {
        button.addEventListener('click', () => {
            if(button.innerText === '.' && currentOutput.innerText.includes('.')) return
            currentOutput.innerText = currentOutput.innerText.toString() +  button.innerText.toString();
        })
    })

btnOperation.forEach( button => {
        button.addEventListener('click', () => {
            chooseOperation(button.innerText)
            allOperation = button.innerText;

            if(allOperation === '+' && previousOutput.innerText.includes('+') ||
            allOperation === '-' && previousOutput.innerText.includes('-') ||
            allOperation === '*' && previousOutput.innerText.includes('*') ||
            allOperation === '/' && previousOutput.innerText.includes('/')) return

                if( previousOutput.innerText !== ""){
                    previousOutput.innerText = `${previousOutput.innerText.toString()} ${allOperation}`
                }
               
            })
    })

btnReset.addEventListener('click', () =>{
    currentOutput.innerText = ""
    previousOutput.innerText= ""
})



btnDelete.addEventListener('click', () =>{
    currentOutput.innerText = currentOutput.innerText.toString().slice(0,-1);
    previousOutput.innerText = previousOutput.innerText.toString().slice(0,-1);
})



btnEquale.addEventListener('click', () =>{

   equals(currentOutput.innerText , previousOutput.innerText,allOperation);

})


function chooseOperation(operatorr){
        if(currentOutput.innerText === '') return
        if(previousOutput.innerText !== '') {

            let computation 
            const prev = parseFloat(previousOutput.innerText)
            const current = parseFloat(currentOutput.innerText)
            if(isNaN(prev) || isNaN(current)) return 
            switch (operatorr){
                case '+':
                    computation = prev + current
                    break;
                case '-':
                    computation = prev - current
                    break;
                case '*':
                    computation = prev * current
                    break;
                case '/':
                    computation = prev / current
                    break;
                default: 
                    return    
            }

        currentOutput.innerText = computation.toLocaleString('en')
        operatorr = undefined
        previousOutput.innerText = ''

        }
        previousOutput.innerText = currentOutput.innerText
        currentOutput.innerText = ''
}


function equals(current , previous,allOperationn){
    if(currentOutput.innerText === '') return
    if(previousOutput.innerText !== '') {

        let sum 
        const prevNumber = parseFloat(previousOutput.innerText)
        const currentNumber = parseFloat(currentOutput.innerText)
        const operation=allOperationn
        if(isNaN(prevNumber) || isNaN(currentNumber)) return 
        switch (operation){
            case '+':
                sum = prevNumber + currentNumber
                break;
            case '-':
                sum = prevNumber - currentNumber
                break;
            case '*':
                sum = prevNumber * currentNumber
                break;
            case '/':
                sum = prevNumber / currentNumber
                break;
            default: 
                return    
        }
        currentOutput.innerText = sum.toLocaleString('en')
        operatorr = undefined
        previousOutput.innerText = ''
        
    }
    
    
    
}

// themes

function themes(){

    let theme = document.allThemes.theme.value;
    let myBody = document.getElementById('mybody');
    let inputOutput = document.querySelector('.input-output');
    let calculatoreBg = document.querySelector('.calculatore_keys');
    let calcHeader = document.querySelector('.calc-header h1');
    let radio = document.querySelector('.radio h4');
    let numbersLabel = document.querySelectorAll('#label');
    let bgRadio = document.querySelector('.check-radio');
    let bgDelete = document.querySelector('.calculatore_keys .btn-delete');
    let bgReset = document.querySelector('.calculatore_keys .btn-reset');
    let bgEqaule = document.querySelector('.calculatore_keys .btn-equale');
    let bgButton = document.querySelectorAll('.calculatore_keys button');
    
    if(theme =="theme-1"){
        myBody.style.backgroundColor = "hsl(222, 26%, 31%)"
        inputOutput.style.backgroundColor = "hsl(224, 36%, 15%)"
        inputOutput.style.color = "ghostwhite"
        calcHeader.style.color = "ghostwhite"
        radio.style.color = "ghostwhite"

        numbersLabel.forEach(label =>{
            if(label.id ==="label"){
                label.style.color = "ghostwhite"
            }
            
        })


        bgButton.forEach(button =>{
            if(button.className ==="btn-numbers" ){
                button.style.backgroundColor = "hsl(45, 7%, 89%)"
                button.style.boxShadow = "hsl(35, 11%, 61%)"
                button.style.color = "hsl(60, 10%, 19%)"
            }

            if(button.className ==="btn-operator" ){
                button.style.backgroundColor = "hsl(45, 7%, 89%)"
                button.style.boxShadow = "hsl(35, 11%, 61%)"
                button.style.color = "hsl(60, 10%, 19%)"
            }
            
        })


        calculatoreBg.style.backgroundColor = "hsl(223, 31%, 20%)"
        bgRadio.style.backgroundColor = "hsl(224, 36%, 15%)"
        bgDelete.style.backgroundColor = "hsl(225, 21%, 49%)"
        bgReset.style.backgroundColor = "hsl(225, 21%, 49%)"
        bgEqaule.style.backgroundColor = " hsl(6, 63%, 50%)"
        bgEqaule.style.color = "ghostwhite"
        bgEqaule.style.boxShadow = " hsl(177, 92%, 70%)"
    }

    if(theme =="theme-2"){
        myBody.style.backgroundColor = "hsl(0, 0%, 90%)"
        inputOutput.style.backgroundColor = "hsl(0, 0%, 93%)"
        inputOutput.style.color = "hsl(60, 10%, 19%)"
        calcHeader.style.color = "hsl(60, 10%, 19%)"
        radio.style.color = "hsl(60, 10%, 19%)"

        numbersLabel.forEach(label =>{
            if(label.id ==="label"){
                label.style.color = "hsl(60, 10%, 19%)"
            }
            
        })


        bgButton.forEach(button =>{
            if(button.className ==="btn-numbers" ){
                button.style.backgroundColor = "hsl(45, 7%, 89%)"
                button.style.boxShadow = "hsl(35, 11%, 61%)"
                button.style.color = "hsl(60, 10%, 19%)"
            }

            if(button.className ==="btn-operator" ){
                button.style.backgroundColor = "hsl(45, 7%, 89%)"
                button.style.boxShadow = "hsl(35, 11%, 61%)"
                button.style.color = "hsl(60, 10%, 19%)"
            }
            
        })

        calculatoreBg.style.backgroundColor = "hsl(0, 5%, 81%)"
        bgRadio.style.backgroundColor = "hsl(0, 5%, 81%)"
        bgDelete.style.backgroundColor = "hsl(185, 42%, 37%)"
        bgReset.style.backgroundColor = "hsl(185, 42%, 37%)"
        bgEqaule.style.backgroundColor = "hsl(25, 98%, 40%)"
        bgEqaule.style.color = "hsl(0, 0, 100%)"
        bgEqaule.style.boxShadow = " hsl(177, 92%, 70%)"

      
    }

    if(theme =="theme-3"){
        myBody.style.backgroundColor = "hsl(268, 75%, 9%)"
        inputOutput.style.backgroundColor = "hsl(268, 71%, 12%)"
        inputOutput.style.color = "hsl(52, 100%, 62%)"
        calcHeader.style.color = "hsl(52, 100%, 62%)"
        radio.style.color = "hsl(52, 100%, 62%)"

        numbersLabel.forEach(label =>{
            if(label.id ==="label"){
                label.style.color = "hsl(52, 100%, 62%)"
            }
            
        })


        bgButton.forEach(button =>{
            if(button.className ==="btn-numbers" ){
                button.style.backgroundColor = "hsl(268, 47%, 21%)"
                button.style.boxShadow = "hsl(285, 91%, 52%)"
                button.style.color = "hsl(52, 100%, 62%)"
            }

            if(button.className ==="btn-operator" ){
                button.style.backgroundColor = "hsl(268, 47%, 21%)"
                button.style.boxShadow = "hsl(285, 91%, 52%)"
                button.style.color = "hsl(52, 100%, 62%)"
            }
            
        })

        calculatoreBg.style.backgroundColor = "hsl(268, 71%, 12%)"
        bgRadio.style.backgroundColor = "hsl(268, 71%, 12%)"
        bgDelete.style.backgroundColor = "hsl(281, 89%, 26%)"
        bgReset.style.backgroundColor = "hsl(281, 89%, 26%)"
        bgEqaule.style.backgroundColor = "hsl(176, 100%, 44%)"
        bgEqaule.style.color = "hsl(198, 20%, 13%)"
        bgEqaule.style.boxShadow = " hsl(177, 92%, 70%)"

    }
}






