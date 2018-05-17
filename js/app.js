var toAddAList = document.getElementById("to-add-a-list");
var divaddAListContainer = document.getElementById("add-a-list-container");

//CREANDO EL FORM A PARTIR DEL EVENTO QUE DESENCADENA EL ENLACE ¨Add a List..."

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


  //Creando el botón SAVE
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



    //CREANDO LA LISTA A PARTIR DEL EVENTO QUE DESENCADENA EL BOTÓN "Save"

      saveButton.addEventListener('click', function(){

      //Creando elementos:
        //Creando el Div de la Lista creada
        var divList = document.createElement("div");
        divList.id = "div-of-the-List";
        divList.className = "container width-list-elements text-list margin1rem";
        divList.style.marginTop = "0";

        var innerdivList1 = document.createElement("div");
        innerdivList1.id = "div1ofTheList";
        var innerdivList2 = document.createElement("div");

        //Creando el parrafo que con el nombre de la Lista
        var nameOfTheList = document.createElement("p");
        nameOfTheList.textContent= inputNameOfTheList.value;

        //Creando en enlace Add a Card...
        var linkAddACard = document.createElement("a");
        linkAddACard.innerText = "Add a card...";
        linkAddACard.id = "add-a-card";
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
        divList.style.float = "left";
        document.getElementById("name-list").value = "";




        //CREANDO LA TAREA A PARTIR DEL EVENTO QUE DESENCADENA EL LINK "Add a card..."

          linkAddACard.addEventListener("click",function(){

            divList.style.paddingBottom = "1rem";

        //Creando elementos:
            //Creando text tarea
            var textArea = document.createElement("textarea");
            textArea.id = "card-text-area";
            textArea.classList.add("text-list", "text-area");
            textArea.cols = "100";
            textArea.rows = "3";

            //Creando boton ADD
            var addButton = document.createElement("button");
            addButton.id = "add-button";
            addButton.setAttribute("class","button");
            addButton.setAttribute("type", "button");
            addButton.innerText = "Add";

        //Anadiendo Elementos:
            divList.appendChild(textArea);
            divList.appendChild(addButton);

        //Remplazando elementos
            divList.replaceChild(textArea,innerdivList2);


            var focusTextArea = document.getElementsByClassName("text-area")[0];
            focusTextArea.focus();




            //AGREGANDO LA TAREA A PARTIR DEL EVENTO QUE DESENCADENA EL BOTÓN "Add"

              addButton.addEventListener("click", function(){
                //Obteniendo el value del área de texto
                var valueOfTheTextArea = textArea.value;

              //Creando elementos:
                //Creando el nodo de textContent
                var cardOfTheTextArea = document.createTextNode(valueOfTheTextArea);

                //Creando el div que contendrá el card agregado
                var divCard = document.createElement("div");
                divCard.classList.add("text-area","div-card-text-area");

                //Agregando Elementos
                divCard.appendChild(cardOfTheTextArea);
                divList.insertBefore(divCard,textArea);
                document.getElementById("card-text-area").value = "";
                focusTextArea.focus();


              });//cierra lo que desencadena el evento ADD BUTTON (div of the card)

          });//cierra lo que desencadena el evento LINK ADD A CARD (add tarea)

      });//cierra lo que desencadena el evento SAVE BUTTON (DIVLIST)

});//cierra Lo que desencadena el evento ADD A LIST (FORM)
