let persona = parseInt (prompt ("Indique cuantos personas registrará"));
let edad; //registro de Las edades
let sedad = 0; //acumulador de Las edades
let n; //ciclo
for(n=1;n<=cA;n++){
edad=parseInt(prompt("Ingrese la edad de la persona"+n));

sedad = sedad + edad;
if (edad<=0) {
    console.log("La edad debe ser mayor a 0")
}

}

console.log("El promedio de las edades de las " + persona + " personas es: "+ sedad/persona);

