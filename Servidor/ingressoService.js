import db from './database.js'
export function comprarIngresso(filme, assento){

  const ingressoExistente = db.prepare(`SELECT * FROM ingressos WHERE filme = '${filme}' AND assento = '${assento}'`).get()

  if(ingressoExistente){
  return{
    sucesso: false,
    mensagem: `O assento ${assento} já está ocupado para o filme ${filme}.`

    }
  }

  db.prepare(`INSERT INTO ingressos (filme,assento) VALUES ('${filme}', '${assento}')`).run()

  return {
        sucesso: true,
        mensagem: 'Ingresso comprado com sucesso!',
        
    }

}

export function listarIngressos(){

  const ingressos = db.prepare(' SELECT * FROM ingressos').all()

  return ingressos
}

export function buscarIngresso(id){

  const ingresso = db.prepare(`SELECT * FROM ingressos WHERE ID =${id}`).get()

  if(!ingresso){
  return{
    sucesso: false,
    mensagem: 'Ingresso não encontrado'
  }
  }

  return{
    sucesso: true,
    ingresso: ingresso 
  }
}

export function editarIngresso(id, filme, assento){

  const ingresso = db.prepare(`SELECT * FROM ingressos WHERE id =${id}`).get()

  if(!ingresso){
    return{
      sucesso: false,
      mensagem: `${id} Não encontrado no banco de Dados`
    }

  }
  
    db.prepare(`UPDATE ingressos SET filme = '${filme}', assento ='${assento}' WHERE id = ${id}`).run()

    return{
      sucesso: true,
      mensagem: 'Assento e filme atualizado com Sucesso'
    }
}

export function excluirIngresso(id){

  const ingresso = db.prepare(`SELECT * FROM ingressos WHERE id = ${id}`).get()

  if(!ingresso){

    return{
      sucesso:false,
      mensagem: 'Id do ingresso não encontrado'
    }
  }

  db.prepare(`DELETE FROM ingressos WHERE id =${id}`).run()

  return{
    sucesso:true,
    mensagem: `Ingresso com id ${id} excluido com sucesso`
  }
}






