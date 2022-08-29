window.addEventListener("load", () => {
  document.querySelector("#action").addEventListener("click", (evt) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.querySelector("#resultat").innerHTML = xhttp.responseText;
      }
    };
    xhttp.open("GET", "js/fichier.txt", true);
    xhttp.send();
  });
});
