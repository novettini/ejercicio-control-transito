input_fecha = document.querySelector("#input-date");
input_vehiculo = document.querySelector("#input-vehiculo");
input_test = document.querySelector("#input-test");
input_excusa = document.querySelector("#input-excusa");
input_submit = document.querySelector("#input-submit");
label_test = document.querySelector("#test-alcoholemia");

gramos_por_litro = Math.random() * 3;
gramos_por_litro = gramos_por_litro.toFixed(2);

function test_alcoholemia() {
  input_test.remove(); //borramos el boton
  parrafo_gramos_por_litro = document.createElement("p"); //creamos un parrafo y lo guardamos en una variable
  parrafo_gramos_por_litro.innerHTML =
    "El test dió: " + gramos_por_litro + " g/l de alcohol en sangre"; //le agregamos contenido
  label_test.appendChild(parrafo_gramos_por_litro); //metemos el elemento en el documento
}

function chequear_idoneidad(){
    
}

input_test.addEventListener("click", test_alcoholemia);
input_submit.addEventListener("click", chequear_idoneidad);