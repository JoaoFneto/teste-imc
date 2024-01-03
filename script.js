function calcular(){
    let vPeso = document.getElementById('peso');
    let vAltura = document.getElementById('altura');
    let res = document.getElementById('res');
    let img = document.getElementById('imagem');
    
    let kg = Number(vPeso.value);
    let cm = Number(vAltura.value);
    
    let calcular = parseFloat( kg / (cm*cm));
    
    res.innerHTML = `<p>O resultado do seu IMC foi de: <strong>${calcular}</strong>.</p>`

    if (calcular < 18.5){
        res.innerHTML += `<p>Você está <stong>abaixo do peso</stong>.</p>`
        img.src = 'resultadoimc.jpeg'
    } else if (calcular > 18.5 && calcular < 24.9){
        res.innerHTML += `<p>Você está <stong>no peso normal</stong>.</p>`
        img.src = 'resultadoimc.jpeg'
    } else if (calcular >= 25 && calcular < 29.9){
        res.innerHTML += `<p>Você está <stong>com sobrepeso</stong>.</p>`
        img.src = 'resultadoimc.jpeg'
    } else if (calcular >= 30 && calcular < 34.9){
        res.innerHTML += `<p>Você está <stong>com obesidade grau 1</stong>.</p>`
        img.src = 'resultadoimc.jpeg'
    } else if (calcular >= 35 && calcular < 39.9){
        res.innerHTML += `<p>Você está <stong>com obesidade grau 2</stong>.</p>`
        img.src = 'resultadoimc.jpeg'
    } else {
        res.innerHTML += `<p>Você está <stong>obesidade extrema</stong>.</p>`
        img.src = 'resultadoimc.jpeg'
    }
    res.innerHTML += `<p>Procure um especialista.</p>`
}
