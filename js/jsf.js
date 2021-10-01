const operation= button.innerText ;
            let prev = parseFloat(previousOutput.innerText )
            let current = parseFloat(currentOutput.innerText)
            previousOutput.innerText =`${currentOutput.innerText.toString()} ` ;
            currentOutput.innerText=''
            if(isNaN(prev) || isNaN(current)) return 
                switch(operation){
                    case '+':
                        sum =  prev + current;
                        previousOutput.innerText = `${sum} ` ;
                        break;
                    case '-':
                        sum =  prev - current;
                        previousOutput.innerText = `${sum} ` ;
                        break;
                    case '*':
                        sum =  prev * current;
                        previousOutput.innerText = `${sum} ` ;
                        break;
                    case '/':
                        sum =  prev / current;
                        previousOutput.innerText = `${sum} ` ;
                        break;
                        default: return
            }





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

        currentOutput.innerText = computation
        operatorr = undefined
        previousOutput.innerText = ''
        }


        operation = operatorr;
        previousOutput.innerText = currentOutput.innerText
        currentOutput.innerText = ''
    }