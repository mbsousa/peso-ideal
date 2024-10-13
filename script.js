const frm = document.querySelector("form")
const resp = document.querySelector("#imc")

frm.addEventListener("submit",(e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const genero = frm.inGenero.value
    const altura = Number(frm.inAltura.value)

    let peso 
    if (genero === "masculino"){
        peso = 22*Math.pow(altura,2)
    } else {
        peso = 21*Math.pow(altura,2)
    }

    resp.innerText = `${nome}, seu peso ideal é ${peso.toFixed(2)} kg.`
})