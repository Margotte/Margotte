// JavaScript way

window.onload = function() {

  // Create a "Delete All" button
  appendObject("Delete All", "button", "delete-all");
  document.getElementById("delete-all").firstChild.setAttribute("onclick", "deleteAll()");

  // Loop through all the info in sessionStorage
  for(var i = 0; i < sessionStorage.length; i++) {

    // Retrieve key/value pairs from sessionStorage object
    var storedName = sessionStorage.key(i);
    var storedAge = sessionStorage.getItem(storedName);

    var storedOutput = storedName + ": " + storedAge + " y.o.";


    // Display the pairs thanks to the appendObject function we coded below;
    appendObject (storedOutput, "P", "output");
  }
}


// The storeLocally function is called when the user submits a new form

function storeLocally(){
  var formName = document.getElementById('txtName').value;
  var formAge = document.getElementById('txtAge').value;
  sessionStorage.setItem(formName, formAge);

  var formOutput = formName + ": " + formAge + " y.o.";

  appendObject (formOutput, "P", "output");
}


// This function "displays" info (sessionStorage objects, buttons, ...)

function appendObject(outputText, outputNode, outputId) {
  // Create node
  var node = document.createElement(outputNode);
  var txt = document.createTextNode(outputText);
  node.appendChild(txt);

  // Display node in chosen HTML element
  document.getElementById(outputId).appendChild(node);
}


// This function deletes all info

function deleteAll(){
  sessionStorage.clear();

  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = '';
}