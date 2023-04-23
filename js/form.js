function proveraForme(forma) {
    let ime = forma.ime.value;
    let prezime = forma.prezime.value;

    if(ime == "" || prezime == "") {
        alert("Popunite sva polja");
        return false
    }
  
    return true;
}

function checkboxTicked(promena) {
 
   let check = document.getElementById("exampleFormControlSelect1");

  if(promena.checked) {
      check.disabled = false;
  } else {
      check.disabled = true;
  }

}

function setSubmitBtnColor() {
    let select = document.getElementById("exampleFormControlSelect1");
    let btn  = document.getElementById("btn");

    if (select.disabled) {
		btn.style.backgroundColor = "white";
	} else {
		if (select.value == 1) {
			btn.style.backgroundColor = "silver";
		} else if (select.value == 2) {
			btn.style.backgroundColor = "gold";
		} else {
			btn.style.backgroundColor = "skyblue";
		}
	}
}