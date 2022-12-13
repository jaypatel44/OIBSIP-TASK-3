function converter(){
    let temp= document.getElementById('jay');
    let type = document.getElementById("temperature");
    let unit = document.getElementById("unit");
    if(type.value==='°C' && unit.value==='°F'){
        let x = Number(temp.value)*(9/5)+32;
        document.getElementById("num").innerHTML=x;
        document.getElementById("units").innerHTML='°F';
    }
    else if(type.value==='°F' && unit.value==='°C'){
        let x = (Number(temp.value)-32)*(5/9);
        document.getElementById("num").innerHTML=x;
        document.getElementById("units").innerHTML='°C';
    }
    else{
        document.getElementById("num").innerHTML=temp.value;
        document.getElementById("units").innerHTML=unit.value;
    }
}