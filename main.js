
const apiAlumnos=" https://jsonplaceholder.typicode.com/users";
const contAlumnos= document.getElementById("contAlumnos");

fetch(apiAlumnos)
  .then(respuesta=> respuesta.json())
  .then((datos)=>{
    console.log(datos);
    verAlumnos(datos);
  })
 .catch( error=> console.log(error));

 function verAlumnos(datos){
  datos.forEach(alumn=>{
    const divv =document.createElement("div");
   divv= alumn.website

   contAlumnos.appendChild(divv);
  })
 }

class Alumno {
  constructor(nombre, nota1, nota2) {
    this.nombre = nombre;
    this.nota1 = nota1;
    this.nota2 = nota2;

  }
}

let arrayAlumnos = [];
aprobados = 0;
desaprobado =0;
console.log (aprobados, desaprobado);
localStorage.setItem("arrayAlumnos",JSON.stringify(arrayAlumnos));

arrayAlumnos=localStorage.getItem("arrayAlumnos")? JSON.parse(localStorage.getItem("arrayAlumnos")) : [];

const resultadoPositivos = document.getElementById("resultadoPositivos");
const resultadoNegativo = document.getElementById("resultadoNegativo");


const formulario = document.getElementById("formulario");
const botonAlum= document.getElementById("botonAlum");

botonAlum.addEventListener("click",()=>{
  Toastify( {
    text:"Alumno agregado",
    duration: 3000,
    gravity: "bottom",
    style: {
      background: "linear-gradient(to right, #1ABC9C, #EC7063 )",
    },
   
  } ).showToast();
})

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let nota1 = document.getElementById("nota1").value;
  let nota2 = document.getElementById("nota2").value;
   debugger
    Number((nota1)) || Number((nota2)) >= 6 ? aprobados++ : desaprobado++;


   resultadoPositivos.value = aprobados;
   resultadoNegativo.value = desaprobado;


  const newAlumno = new Alumno(nombre, nota1, nota2);
  arrayAlumnos.push(newAlumno);
  localStorage.setItem("arrayAlumnos", JSON.stringify(arrayAlumnos));
  console.log(arrayAlumnos);
  formulario.reset();

})

const contenedorAlumno = document.getElementById("contenedorAlumno")
const verNotas = document.getElementById("verNotas");

verNotas.addEventListener("click", () => {
  mostrarAlumnos();
})

function mostrarAlumnos() {
  contenedorAlumno.innerHTML = ";"
  arrayAlumnos.forEach(alumnos => { 
    const div = document.createElement("div");
    div.innerHTML = `
                   <div>
                   <p>Nombre del Alumno: ${alumnos.nombre}</p>
                   <p>Nota del examen: ${alumnos.nota1}</p>
                   <p>Nota del recuperatorio: ${alumnos.nota2}</p>
                   </div>
                 `
    contenedorNotas.appendChild(div);
  })
}