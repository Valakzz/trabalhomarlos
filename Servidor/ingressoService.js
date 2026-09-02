import db from './database.js'
let sucesso = false

 function sucess(){
  let sucesso = false
 }


export function comprarIngresso(filme, assento){

  const ingressoExistente = db.exec(`SELECT * FROM ingressos WHERE filme = ${filme} AND = assento ${assento}`).get()

  if(ingressoExistente){
    return{
      

    }
  }


}