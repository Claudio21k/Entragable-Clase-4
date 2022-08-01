// Claudio Arguedas
// Entregable

// Variables
let seguir = "N";
let deuda = Number(prompt("Ingresar el monto de la deuda: "));

//do
do {
   
//callback -> llamar atras
 const pregunta = (pregunta, si, no) =>
{
     if (confirm(pregunta) )
     {
        si()
        let monto = Number(prompt("Ingresar el monto que desea abonar : "))
        deuda = deuda - monto
        alert("Nueva valor de la deuda es: " + deuda)
     }
    else 
 {
    no()
 }
 }

pregunta(" Quieres hacer un abono a la deuda?, Tu deuda Actual es:  " + deuda ,
function(){alert("Hacer Abono a la deuda")},
function(){alert("No hacer Abono a la deuda")}
)

seguir = prompt("Presiona C para continuar del programa o cualquier otra letra para salir")
alert("Seguir = " + seguir )


} while (seguir == "C"); 


alert("Hasta Luego, Fin ")



































































