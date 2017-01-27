function folleHistoire(){
  var txtGars = document.getElementById("txtGars");
  var txtFille = document.getElementById("txtFille");
  var txtGeo = document.getElementById("txtGeo");
  var txtVerbe = document.getElementById("txtVerbe");
  var txtObjet = document.getElementById("txtObjet");
  var txtLiq = document.getElementById("txtLiq");
  var txtCorps = document.getElementById("txtCorps");
  var txtGerondif = document.getElementById("txtGerondif");
  var txtReflechi = document.getElementById("txtReflechi");
  var output = document.getElementById("output")

  var gars = txtGars.value;
  var fille = txtFille.value;
  var geo = txtGeo.value;
  var verbe = txtVerbe.value;
  var objet = txtObjet.value;
  var liq = txtLiq.value;
  var corps = txtCorps.value;
  var gerondif = txtGerondif.value;
  var reflechi = txtReflechi.value;

  var histoire = gars + " et " + fille + " faisaient une belle excursion à ";
  histoire += geo + " pour " + verbe + " " + objet + " rempli de " + liq;
  histoire += " . <br />";
  histoire += gars + " tomba et se fracassa " + corps;
  histoire += " tandis que " + fille + " arrivait en " + gerondif + " pour l'aider à " + reflechi + "."

  output.innerHTML = histoire;
}
