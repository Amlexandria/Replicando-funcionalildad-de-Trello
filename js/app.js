var toAddAList = document.getElementById("to-add-a-list");
var divaddAListContainer = document.getElementById("add-a-list-container");

toAddAList.addEventListener("click", function(){
  toAddAList.style.display = "none";

  //Creando el form
  var form = document.createElement("form");
  form.setAttribute("id","addAList");

  var divform1 = document.createElement("div");
  var divform2 = document.createElement("div");

  //Creando el input
  var inputNameOtTheList = document.createElement("input");
  inputNameOtTheList.id = "name-list";
  inputNameOtTheList.setAttribute("class","text-list");
  inputNameOtTheList.setAttribute("placeholder","Add a list...")

  //Creando el botón
  var saveButton = document.createElement("button");
  saveButton.id = "save-button";
  saveButton.setAttribute("class","button");
  saveButton.setAttribute("type", "button");
  saveButton.innerText = "Save";
  //Añadiendo Elementos
  divform1.appendChild(inputNameOtTheList);
  divform2.appendChild(saveButton);
  form.appendChild(divform1);
  form.appendChild(divform2);
  divaddAListContainer.appendChild(form);


});
