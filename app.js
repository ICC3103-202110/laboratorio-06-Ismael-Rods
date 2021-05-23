const {printTable} = require('console-table-printer')
const {inputf} = require('./view')  //simil import getTitle from view.js
const {update,newValue} = require('./update')

//Impure
async function app(state,update,view){
  while (true){

    
      const {model, currentView} = state
      const {title, table} = currentView
      console.clear()
      console.log(title)
      printTable(table)
      const {IleftRight,IValue,IFrom,ITo} = await inputf(model)
      const updatedModel = update(IleftRight,IValue,IFrom,ITo,model)
      console.log(updatedModel)
      state = {
        ...state,
        model: updatedModel,
        currentView: view(updatedModel)
      }
   }
}

module.exports = {
  app
}


