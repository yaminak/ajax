window.addEventListener("load", () => {
  document.querySelector("#btSaluer").addEventListener("click", (evt) => {
    evt.preventDefault();
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.querySelector("#resultat").innerHTML = xhttp.responseText;
      }
    };

    prenom = document.querySelector("#prenom").value;
    let parametres = "prenom=" + prenom;
    let url = "salut.php";
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(parametres);
  });
});
