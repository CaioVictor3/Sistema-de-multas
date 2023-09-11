function calcular(){
    var txtv = window.document.querySelector('input#txtvel');
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value);

    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong> km/h</p>`
    if (vel > 60){
        res.innerHTML += `<p>Você está acima da velocidade permitida!! Sujeito a <strong>MULTA</strong></p>`
    } else {
        res.innerHTML += `<p>Você está dentro da velocidade permitida</p>`
    }

    res.innerHTML += `<p>Dirija sempre com cinto de segurança</p>`
}