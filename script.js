document.getElementById('player').addEventListener('click', sumarpuntos);

puntos = 0;
tiempo = 60;
function sumarpuntos(){
    puntos++;
    document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "</b>";
    randNum = Math.round(Math.random()*450);
    randNum2 = Math.round(Math.random()*450);
    document.getElementById('player').style.marginTop = randNum + "px";
    document.getElementById('player').style.marginLeft = randNum2 + "px";
}

function restartTiempo(){
    tiempo --;
    document.getElementById('tiempo').innerHTML = "Tiempo: <b>" + tiempo + "</b>"; 
    if (tiempo === 0){
        fin();
    }
}
setInterval(restartTiempo,1000);

function fin(){
    alert('Fin del juego, Tu puntaje es: ' + puntos);
    puntos = 0;
    tiempo = 60;
}