// Objecte Cromo

const CromosDisp = ["ARG20", "BEL3","BEL11","BEL16", "ENG3","ESP8","ESP13","ESP10","FRA19","POL17","POR3","POR17","PO18"];
function Cromo(p_pais = null, p_pos = null) {
    var paisos = ["ESP", "ARG", "FRA", "ENG", "POR","POL", "BEL"];
    
    if (p_pais !== null)
       this.pais = p_pais;
    else
        this.pais = paisos[Math.trunc(Math.random() * 7)];
    this.incorporacio = 2022;
    this.altura = 1.765;
    this.pes = 67.5;
    this.posicio = "D";
    this.nom = "Jules Kundee";
    this.dataNaixement = "01/01/2000";        // Podria ser Objecte Date
    if (p_pos !== null)
       this.posicioAlbum = p_pos;
    else
    
       this.posicioAlbum = Math.trunc(Math.random() * 20) + 1;

    this.getPais = function () {
        return this.pais;
    }

    this.getPosicioAlbum = function () {
        return this.posicioAlbum;
    }
}

function compraPaquets () {

    // Retorna un array de cromos (5)
    var paquet=[];

    for (var i=0;i<5;i++) {
        if (i===0)
           paquet [i] = new Cromo("ENG", 3);
        else
           paquet[i] = new Cromo();
           
    }
   return paquet;
}

var paquet = compraPaquets();
var imatges = [paquet[0].pais + paquet[0].posicioAlbum, paquet[1].pais + paquet[1].posicioAlbum, paquet[2].pais + paquet[2].posicioAlbum, paquet[3].pais + paquet[3].posicioAlbum, paquet[4].pais + paquet[4].posicioAlbum];
var paisCromCompr = [paquet[0].pais, paquet[1].pais, paquet[2].pais, paquet[3].pais, paquet[4].pais, ] ;
var posicions = [paquet[0].posicioAlbum, paquet[1].posicioAlbum, paquet[2].posicioAlbum, paquet[3].posicioAlbum, paquet[4].posicioAlbum];
var validat = false;

function validarCromo(){
    for (var j = 0; j < imatges.length; j++) {
        for (var i = 0; i < CromosDisp.length; i++) {
            if (imatges[j] == CromosDisp[i]) {
                validat = true;
            }
            
        }
        if (validat == false) {
            imatges[j] = 'GEN';
            paisCromCompr[j] = 'GEN';
        }
        validat = false;
    }
   
}

validarCromo();


var imatge1 ="../imatges/cromos/" + imatges[0] + ".png";
var imatge2 ="../imatges/cromos/" + imatges[1] + ".png";
var imatge3 ="../imatges/cromos/" + imatges[2] + ".png";
var imatge4 ="../imatges/cromos/" + imatges[3] + ".png";
var imatge5 ="../imatges/cromos/" + imatges[4] + ".png";


document.getElementById("cro1").setAttribute("src", imatge1);
document.getElementById("cro2").setAttribute("src", imatge2);
document.getElementById("cro3").setAttribute("src", imatge3);
document.getElementById("cro4").setAttribute("src", imatge4);
document.getElementById("cro5").setAttribute("src", imatge5);


var pais1 ="../imatges/paisos/" + paisCromCompr[0] + ".png";
var pais2 ="../imatges/paisos/" + paisCromCompr[1] + ".png";
var pais3 ="../imatges/paisos/" + paisCromCompr[2] + ".png";
var pais4 ="../imatges/paisos/" + paisCromCompr[3] + ".png";
var pais5 ="../imatges/paisos/" + paisCromCompr[4] + ".png";


document.getElementById("pai1").setAttribute("src", pais1);
document.getElementById("pai2").setAttribute("src", pais2);
document.getElementById("pai3").setAttribute("src", pais3);
document.getElementById("pai4").setAttribute("src", pais4);
document.getElementById("pai5").setAttribute("src", pais5);



document.getElementById("pos1").textContent = posicions[0];
document.getElementById("pos2").textContent = posicions[1];
document.getElementById("pos3").textContent = posicions[2];
document.getElementById("pos4").textContent = posicions[3];
document.getElementById("pos5").textContent = posicions[4];

