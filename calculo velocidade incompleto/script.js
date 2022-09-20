let arregar = []

function calcular() {
    document.getElementById('quadradodois').innerHTML = "";
    const deslocamento = document.getElementById('a').value;
    const tempo = document.getElementById('b').value;
    let andarfl = parseFloat(deslocamento)
    let passarfl = parseFloat(tempo)
    let velocidade;
    if (deslocamento && tempo) {
        velocidade = andarfl / passarfl
        arregar.push(velocidade);
        document.getElementById('c').value = velocidade

    }
    for (let i in arregar) {
        document.getElementById('quadradodois').innerHTML += arregar[i] + "<br>";
    }
}

function limpar(){
    const a = document.getElementById('a').value = "";
    const b = document.getElementById('b').value = "";
    const r = document.getElementById('c').value = "";
}