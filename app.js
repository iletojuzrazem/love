
function czas()
{
teraz = new Date();
dzien = new Date("Aug 07 2021 00:00:00");

// wyliczanie roznicy
sekund = Math.abs(teraz-dzien)/1000;
minut = parseInt(sekund/60);
godzin = parseInt(minut/60);
dni = parseInt(godzin/24);
lat = parseInt(dni/365);

// wyliczanie calego okresu
sekund = parseInt((sekund-minut*60));
minut = parseInt((minut-godzin*60));
godzin = parseInt((godzin-dni*24));
dni = parseInt((dni-lat*365));

document.getElementById('czas').innerHTML="| LAT: "+lat +" | DNI: "+dni+" | GODZIN: "+godzin+" | MINUT: "+minut+" | SEKUND: "+sekund+" |";
}
setInterval(czas, 1000)

