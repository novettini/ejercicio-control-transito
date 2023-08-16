input_fecha = document.querySelector("#input-date");
input_vehiculo = document.querySelector("#input-vehiculo");
input_test = document.querySelector("#input-test");
input_excusa = document.querySelector("#input-excusa");
input_submit = document.querySelector("#input-submit");
label_test = document.querySelector("#test-alcoholemia");
div_formulario = document.querySelector(".formulario");

gramos_por_litro = Math.random() * 3;
gramos_por_litro = gramos_por_litro.toFixed(2);

function test_alcoholemia() {
  input_test.remove(); //borramos el boton
  parrafo_gramos_por_litro = document.createElement("p"); //creamos un parrafo y lo guardamos en una variable
  parrafo_gramos_por_litro.innerHTML =
    "El test dió: " + gramos_por_litro + " g/l de alcohol en sangre"; //le agregamos contenido
  label_test.appendChild(parrafo_gramos_por_litro); //metemos el elemento en el documento
}

function mostrar_resultado(aprobado) {
  resultado = document.createElement("h2");
  if (aprobado) {
    resultado.innerHTML = "Podes manejar";
    div_formulario.classList.add("aprobado");
  } else {
    resultado.innerHTML = "No podes manejar";
    div_formulario.classList.add("desaprobado");
  }
  div_formulario.appendChild(resultado);
}

function chequear_idoneidad(año) {
  input_submit.remove();
  resultado = document.createElement("h2");
  año = input_fecha.value.split("-")[0];
  vehiculo = input_vehiculo.selectedOptions[0].value;             //vehiculo muestra que opcion está seleccionada en el select

  switch (vehiculo) {                                             //hago un switch para poder aplicar la funcion de los gramos y el año especificamente a cada vehiculo.
    case "0":
      if (año >= 2022 && gramos_por_litro > 0) {
        resultado.innerHTML = "No podes manejar";
        div_formulario.classList.add("desaprobado");
      } else if (año < 1997) {
        resultado.innerHTML = "Podes manejar";
        div_formulario.classList.add("aprobado");
      } else if (año > 1997 && año < 2022 && gramos_por_litro <= 0.5) {
        resultado.innerHTML = "Podes manejar";
        div_formulario.classList.add("aprobado");
      }
      div_formulario.appendChild(resultado);

      break;

    case "1":
      if (año >= 2022 && gramos_por_litro > 0) {
        resultado.innerHTML = "No podes manejar";
        div_formulario.classList.add("desaprobado");
      }
      if (año < 1997) {
        resultado.innerHTML = "Podes manejar";
        div_formulario.classList.add("aprobado");
      }
      if (año > 1997 && año < 2022 && gramos_por_litro <= 0.2) {
        resultado.innerHTML = "Podes manejar";
        div_formulario.classList.add("aprobado");
      }
      div_formulario.appendChild(resultado);

      break;

    case "2":
      if (año >= 1997 && gramos_por_litro > 0) {
        resultado.innerHTML = "No podes manejar";
        div_formulario.classList.add("desaprobado");
      }
      if (año < 1997) {
        resultado.innerHTML = "Podes manejar";
        div_formulario.classList.add("aprobado");
      }
      div_formulario.appendChild(resultado);

      break;

    case "3":
      {
        resultado.innerHTML = "Podes manejar";
        div_formulario.classList.add("aprobado");
      }
      div_formulario.appendChild(resultado);                      //no se si debía poner appendChild antes de cada break, pero bueno, equipo que gana no se toca

      break;
  }
}

input_test.addEventListener("click", test_alcoholemia);
input_submit.addEventListener("click", chequear_idoneidad);

// Esta funcion es solo para el test y la fecha.
// function chequear_idoneidad(año){
//     input_submit.remove()
//     resultado = document.createElement("h2")
//     año = input_fecha.value.split("-")[0]

//     if(año >= 2022 && gramos_por_litro >0){
//       resultado.innerHTML = "No podes manejar"
//       div_formulario.classList.add("desaprobado")
//   }
//     if(año < 1997)
//     {resultado.innerHTML = "Podes manejar"
//     div_formulario.classList.add("aprobado")
//     }
//     if(año>1997 && año <2022 && gramos_por_litro <=0.5){
//       resultado.innerHTML = "Podes manejar"
//       div_formulario.classList.add("aprobado")}

//        div_formulario.appendChild(resultado)
//     }

// input_test.addEventListener("click", test_alcoholemia);
// input_submit.addEventListener("click", chequear_idoneidad);
