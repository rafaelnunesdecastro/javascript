function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex');
       var idade = ano - Number(fano.value);
       var gênero = ''
       var img = document.createElement('img');
       img.setAttribute('id', 'foto');
       if (fsex[0].checked) {
        gênero = 'homem'
        if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'crianca-masculino.png');
        } else if (idade < 21){
        //jovem
        img.setAttribute('src', 'homem-jovem.png');
        } else if (idade <50) {
            //Adulto
            img.setAttribute('src', 'homem-adulto.png');
        }else {
            //Idoso
            img.setAttribute('src', 'homem-idoso.png');
        }
       }else if (fsex[1].checked){
        gênero = 'mulher'
        if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'crianca-feminino.png');
        } else if (idade < 21){
        //jovem
        img.setAttribute('src', 'mulher-jovem.png');
        } else if (idade <50) {
            //Adulto
            img.setAttribute('src', 'mulher-adulta.png');
        }else {
            //Idoso
            img.setAttribute('src', 'mulher-idosa.png');
        }
       }
       
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }
}