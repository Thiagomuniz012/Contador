const contagem = document.getElementById('contagem')
const aumentar = document.getElementById('aumentar')
const diminuir = document.getElementById('diminuir')
const resetar = document.getElementById('resetar')

let count = 0
let intervalo = 0

const atualizar = () => {
  contagem.innerHTML = count
}

aumentar.addEventListener('mousedown', () => {
  intervalo = setInterval(() => {
    count++
    atualizar()
  }, 100)
})

document.addEventListener('mouseup', () => {
  clearInterval(intervalo)
})

diminuir.addEventListener('mousedown', () => {
  intervalo = setInterval(() => {
    count--
    atualizar()
  }, 100)
})

resetar.addEventListener('click', () => {
    count = 0
    atualizar()
  })