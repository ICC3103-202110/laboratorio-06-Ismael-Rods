const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
function getTitle(){
    return chalk.yellow(
        figlet.textSync('Unit Converter App',
            {
                font: 'Nancyj-Underlined',
                horizontalLayout: 'full',
            }
        )
    )
}

function getTable(model){
    const {leftValue, leftUnit, rightValue, rightUnit} = model
    return [
        {'Left value': leftValue, 'Left Unit': leftUnit, 'Right Value': rightValue, 'Right Unit': rightUnit }
    ]
}

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}
function inputf(model){
    const {input1,input2,input3} = model
    const choices = ['Celsius', 'Fahrenheit','Kelvin']
    return inquirer.prompt([
        {
            name: 'IleftRight',
            type: 'input',
            message: 'Left Temperature is a source?',
            default: input1,
            validate: function(value){
                if (value === 'y' ||value === 'n' ){
                    return true
                }else {
                    return 'Enter Y/n'
                }
                
            }
        },
        {
            name: 'IValue',
            type: 'input',
            message: 'Temperature value to convert?',
            default: input2, 
           
        },
        {
            name: 'IFrom',
            type: 'list',
            message: 'From?',
            default: input3,
            choices: choices,
        },
        {
            name: 'ITo',
            type: 'list',
            message: 'To?',
            default: input3,
            choices: choices,
        }
    ])

}

module.exports = {   
    view,
    inputf,
}
