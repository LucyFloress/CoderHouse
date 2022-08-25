let persona = parseInt (prompt ("Indique cuantos personas registrará"));
let edad; //registro de Las edades
let sedad = 0; //acumulador de Las edades
let n; //ciclo



for(n=1;n<=persona;n++){
edad=parseInt(prompt("Ingrese la edad de la persona "+n));

sedad = sedad + edad;

}

console.log("El promedio de las edades de las " + persona + " personas es: " + (sedad/persona));
