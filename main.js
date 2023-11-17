const subtrair = document.querySector("#subtrair")
const soma = document.querySector("#somar")
const braco = documnt.querySector("#braco")

somar.addEventListener("click", (evento) => {
braco.value = parseInt(braco.value) + 1
})

subtrair.addEventListener("click", (evento)=> {
    braco.value = parseInt(braco.value) - 1
 })