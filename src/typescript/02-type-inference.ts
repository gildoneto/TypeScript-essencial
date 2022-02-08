// Type Inference
let message2 = 'Mensagem definida'
message2 = 'string nova'

// Não precisa informar que o `e` é um MouseEvent
window.addEventListener("click", (e) => {
    console.log(e.target)
})