let aritmatika1,operatorAritmatika,aritmatika2,hasilAritmatika;
document.getElementById('buttonAritmatika').onclick = function(){
    aritmatika1 = Number(document.getElementById('aritmatika1').value);
    aritmatika2 = Number(document.getElementById('aritmatika2').value);
    operatorAritmatika = document.getElementById('operatorAritmatika').value;
    
    hasilAritmatika = eval(aritmatika1 + operatorAritmatika + aritmatika2);
    document.getElementById('hasilAritmatika').innerText = hasilAritmatika;
}
