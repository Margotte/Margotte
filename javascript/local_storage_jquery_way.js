// jQuery way

$(document).ready(function(){

  $("#delete-all").append("<button onclick=\"deleteAll()\">Delete All</button>");

  for(var i = 0; i < sessionStorage.length; i++) {

    // Retrieve key/value pairs from sessionStorage object
    var storedName = sessionStorage.key(i);
    var storedAge = sessionStorage.getItem(storedName);

    $("#output").append("<p>" + storedName + ": " + storedAge + "y.o. </p><button onclick=\"deleteObject()\">Delete</button>");
  }

})

// The storeLocally function is called when the user submits a new form

function storeLocally(){
  var formName = $("#txtName").val();
  var formAge = $("#txtAge").val();
  sessionStorage.setItem(formName, formAge);

  $("#output").append("<p>" + formName + ": " + formAge + " y.o. </p><button>Delete</button>");
}

function deleteAll(){
  sessionStorage.clear();
  $("#output").empty();
}

function deleteObject(){
  sessionStorage.removeItem();
}