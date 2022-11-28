function resultat(){
  document.calculette.afficher.value = eval(document.calculette.afficher.value);
}

function ajouter(signe){
  var chaine = document.calculette.afficher.value;
  var operateurs = "+-*/";
  if (operateurs.indexOf(signe) > -1){
    switch (chaine.substring(chaine.length -1)){
      case "+":
      case "-":
      case "*":
      case "/":
        chaine = chaine.substring(0,chaine.length -1);
        break;
    }
  }
  document.calculette.afficher.value = chaine + signe;
}

function fontionSpe(fonction){
  switch (fonction) {
    case "sqrt":
      document.calculette.afficher.value = Math.sqrt(eval(document.calculette.afficher.value));
    case "pow":
      document.calculette.afficher.value = Math.pow(eval(document.calculette.afficher.value));
    case "log":
      document.calculette.afficher.value = Math.log(eval(document.calculette.afficher.value),2);

  }
  }



