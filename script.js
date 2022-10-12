function calcularFuso() {
  //Cria referência aos elementos da página
  let inHoraBrasil = document.getElementById('inHoraBrasil')
  let outHoraFranca = document.getElementById('outHoraFranca')

  //Obtem e converte o conteúdo do campo inHoraBrasil 
  let horaBrasil = Number(inHoraBrasil.value)

  //Se não preecheu ou NaN
  if (inHoraBrasil.value == '' || isNaN(horaBrasil)) {
    alert('Informe a hora no Brasil corretamente')
    inHoraBrasil.focus()
    return
  }
  //Calcula o horário na França
  let horaFranca = horaBrasil + 5

  //Se passar das 24 horas na França
  if (horaFranca > 24) {
    horaFranca = horaFranca - 24
  }
  //Exibe resposta (altera conteúdo do elemento outHoraFranca)
  outHoraFranca.textContent = 'Hora na França: ' + horaFranca + 'hs'
}
//Cria referência ao elemento btExibir e registra evento associado a função
let btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', calcularFuso)