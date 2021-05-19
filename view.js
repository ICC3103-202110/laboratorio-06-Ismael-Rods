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

module.exports = {   
    view,
}
