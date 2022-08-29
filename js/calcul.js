window.addEventListener("load", () => {
  document.querySelector("form").addEventListener("submit", (evt) => {
    evt.preventDefault();
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.querySelector("#resultat").value = xhttp.responseText;
      }
    };

    nb1 = document.querySelector("[name='nb1']").value;
    nb2 = document.querySelector("[name='nb2']").value;
    let url = "resultat_calcul.php?nb1=" + nb1 + "&nb2=" + nb2;
    xhttp.open("GET", url, true);
    xhttp.send();

    // nb1 = document.querySelector("[name='nb1']").value;
    // nb2 = document.querySelector("[name='nb2']").value;
    // let parametres = "nb1=" + nb1 + "&nb2=" + nb2;
    // let url = "resultat_calcul.php";
    // xhttp.open("GET", url, true);
    // xhttp.send(parametres);
  });
});
