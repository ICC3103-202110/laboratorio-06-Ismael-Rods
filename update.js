

function update(leftRightInput,newInputValue,newFrom,newTo,model){
    const {leftValue,leftUnit,rightValue,rightUnit,leftOrRight,inputValue} = model
    function newValue(value,fromUnit,toUnit){
        if (fromUnit === 'Celsius' && toUnit === 'Celcius'){
            return Number(value)
        }
        else if (fromUnit === 'Celsius' && toUnit === 'Fahrenheit'){
            return (Number(value)*(9/5)+32)
        }
        else if (fromUnit === 'Celsius' && toUnit === 'Kelvin'){
            return Number(value) + 273.15
        }
        else if (fromUnit === 'Fahrenheit' && toUnit === 'Fahrenheit'){
            return Number(value)
        }
        else if (fromUnit === 'Fahrenheit' && toUnit === 'Celsius'){
            return ((Number(value)-32)*(5/9))
        }
        else if (fromUnit === 'Fahrenheit' && toUnit === 'Kelvin'){
            return ((Number(value)-32)*(5/9))+ 273.15
        }
        else if (fromUnit === 'Kelvin' && toUnit === 'Kelvin'){
            return (Number(value))
        }
        else if (fromUnit === 'Kelvin' && toUnit === 'Celsius'){
            return (Number(value)-273.15)
        }
        else if (fromUnit === 'Kelvin' && toUnit === 'Fahrenheit'){
            return ((Number(value)-273.15)*(9/5))+32
        }
    }
    const newwValue = newValue(newInputValue,newFrom,newTo)
    if (leftRightInput==='y'){
     
        return {
            ...model,
            leftValue: Number(newInputValue),
            leftUnit: newFrom,
            rightValue: Number(newwValue),
            rightUnit: newTo,
            leftOrRight: 'Y/n',
            inputValue: newInputValue,
        
        }
    }
    else if (leftRightInput==='n'){
  
        return {
            ...model,
            leftValue: Number(newwValue),
            leftUnit: newTo,
            rightValue: Number(newInputValue),
            rightUnit: newFrom,
            leftOrRight: 'Y/n',
            inputValue: newInputValue,
        
        }
    }
    
}


module.exports = {
    update,
}