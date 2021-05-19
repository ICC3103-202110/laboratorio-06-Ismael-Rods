const {printTable} = require('console-table-printer')
const {inputf} = require('./view')  //simil import getTitle from view.js
const {update} = require('./update')

//Impure
async function app(state,update,view){
  //while (true){

    
      const {model, currentView} = state
      const {title, table} = currentView
      console.clear()
      console.log(title)
      printTable(table)
      //const {input1,input2} = await inputf(model)
      //const updatedModel = update(input1,input2,model)
      //console.log(updatedModel)
      //state = {
       // ...state,
        //model: updatedModel,
        //currentView: view(updatedModel)
      //}
    //}
}

module.exports = {
  app
}


