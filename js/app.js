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
  var inputNameOfTheList = document.createElement("input");
  inputNameOfTheList.id = "name-list";
  inputNameOfTheList.setAttribute("class","text-list");
  inputNameOfTheList.setAttribute("placeholder","Add a list...");
  inputNameOfTheList.setAttribute("autofocus", "");


  //Creando el botón
  var saveButton = document.createElement("button");
  saveButton.id = "save-button";
  saveButton.setAttribute("class","button");
  saveButton.setAttribute("type", "button");
  saveButton.innerText = "Save";
  //Añadiendo Elementos
  divform1.appendChild(inputNameOfTheList);
  divform2.appendChild(saveButton);
  form.appendChild(divform1);
  form.appendChild(divform2);
  divaddAListContainer.appendChild(form);





  saveButton.addEventListener('click', function(){
    //Creando el Div de la Lista creada
    var divList = document.createElement("div");
    divList.id = "div-of-the-List";
    divList.className = "container width-list-elements text-list";

    var innerdivList1 = document.createElement("div");
    innerdivList1.id = "div1ofTheList";
    var innerdivList2 = document.createElement("div");

    //Creando el parrafo que con el nombre de la Lista
    var nameOfTheList = document.createElement("p");
    nameOfTheList.textContent= inputNameOfTheList.value;
    document.getElementById("name-list").value = "";


    //Creando en enlace Add a Card...
    var linkAddACard = document.createElement("a");
    linkAddACard.innerText = "Add a card..."
    linkAddACard.classList.add("text-list","width-list-elements");


    var contenedorDeVersiones = document.getElementById("contenedor-de-versiones");
    //Agregando elementos
    innerdivList1.appendChild(nameOfTheList);
    innerdivList2.appendChild(linkAddACard);
    divList.appendChild(innerdivList1);
    divList.appendChild(innerdivList2);
    contenedorDeVersiones.appendChild(divList);
    //Insertando a divList antes de divaddAListContainer
    contenedorDeVersiones.insertBefore(divList, divaddAListContainer);

  });

});
