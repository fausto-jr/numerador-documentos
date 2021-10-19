<script>

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });




document.getElementById("btn").addEventListener("click",cadastrar);

function cadastrar(){

var doc = {};

doc.destino = document.getElementById("destino").value;
doc.setor = document.getElementById("setor").value;
doc.secretaria = document.getElementById("secretaria").value;
doc.obs = document.getElementById("obs").value;
doc.bdate = document.getElementById("bdate").value;
//doc.tipo = document.getElementById("tipo").value;
doc.tipo = document.querySelector('input[name="tipo"]:checked').value;

//var message = google.script.run.click(doc);
google.script.run.withSuccessHandler(showData).click(doc);

document.getElementById("destino").value = "";
document.getElementById("obs").value = "";
document.getElementById("bdate").value = "";
document.getElementById("oficios").checked = true;


var myApp = document.getElementById("setor");
myApp.selectedIndex = 0;
M.FormSelect.init(myApp);

}


function showData(data){
      var html = data;
      var tipo = "";
      if (data.tipo === "oficios"){ tipo = "Ofício"; }
      if (data.tipo === "ci"){ tipo = "C.I."; }
      if (data.tipo === "portaria"){ tipo = "Portaria"; }
      if (data.tipo === "oficiocircular"){ tipo = "Ofício Circular"; }
      if (data.tipo === "parecer"){ tipo = "Parecer"; }
      if (data.tipo === "edital"){ tipo = "Edital"; }
      //alert("Nº: "+ data);
    
  var popup = document.getElementById("myPopup");
  popup.innerHTML = '<h1>'+tipo+'</h1><h4>' + 'Número: '+ data.numero + '</h4> <button class="btn waves-effect waves-light" id = "sair" onclick="sair()">Fechar <i class="material-icons right">send</i> </button>';
  popup.classList.toggle("show");
  }

function sair(){
var popup = document.getElementById("myPopup");
popup.classList.toggle("show");
}
</script>