var paragrafi = document.querySelectorAll("p");
if (paragrafi) {
  for (var i = 0; i < paragrafi.length; i++) {
    paragrafi[i].addEventListener("mouseover", function () {
      this.style.backgroundColor = "rgb(127, 219, 255)";
    });

    paragrafi[i].addEventListener("mouseout", function () {
      this.style.backgroundColor = "rgba(255, 255, 255, 0)";
    });
  }
}

function proveriGodine() {
  var godine = prompt("Ova stranica ima neprikladan sadržaj, molim vas potvrdite svoje godine");

  if (parseInt(godine) < 18) {
    window.location.href = "index.html";
  }
}

var emailArray = [];

var form = document.getElementById("email-form");
var emailInput = document.getElementById("email-input");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  emailArray.push(emailInput.value);
  console.log(emailArray);
});

function menjajTemu(tema) {
  const body = document.querySelector('body');
  const textElements = document.querySelectorAll('.text');

  if (tema === 'tamna') {
    body.style.backgroundColor = '#222';
    body.style.color = '#fff';

    textElements.forEach(element => {
      element.style.color = '#fff';
    });
  } else {
    body.style.backgroundColor = '#fff';
    body.style.color = '#222';

    textElements.forEach(element => {
      element.style.color = '#222';
    });
  }
}




function posaljiPodatke(event) {
  event.preventDefault();

  let podaciForme = new FormData(document.getElementById("kontaktForma"));
  let poruka = podaciForme.get("poruka");

  console.log("Poruka: " + poruka);

  document.getElementById("uspesnaPoruka").innerText = "Poruka je uspešno poslata.";
  document.getElementById("kontaktForma").reset();

  return false;
}

function pretraziPesme() {
  let pesma = document.getElementById("pesma").value.toLowerCase();
  let rezultat = "";

  if (pesma === "moscow death brigade") {
    window.location.href = "mdb.html";
  } else if (pesma === "beast in black") {
    window.location.href = "bib.html";
  } else if (pesma === "apocalyptica") {
    window.location.href = "idc.html";
  } else {
    rezultat = "Nije pronađena pesma.";
  }
  return false;
}

function link(pesma) {
  switch (pesma) {
    case "mdb":
      alert("link ka ovoj pesmi je https://www.youtube.com/watch?v=7NKU27R2OSc");
      break;
    case "idc":
      alert("link ka ovoj pesmi je https://www.youtube.com/watch?v=kwZ-y3NoLng");
      break;
    case "bib":
      alert("link ka ovoj pesmi je https://www.youtube.com/watch?v=9tgJX7zD5eM");
      break;
    default:
      alert("Nepoznata opcija");
      break;
  }

}

