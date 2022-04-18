var botaoAdiconar = document.querySelector("#buscar-pacientes");

botaoAdiconar.addEventListener("click", function(){
  console.log("Buscar Pacientes");

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  var erroAjax = document.querySelector("#error-ajax");
  xhr.addEventListener("load", function(){

    if (xhr.status == 200) {
      erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function (paciente){
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
      erroAjax.classList.remove("invisivel");
    }

  });

  xhr.send();
});
