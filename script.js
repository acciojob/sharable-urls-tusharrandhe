// your code here
let form = document.querySelector("form");
let h3 = document.querySelector("h3");
let nameELement = document.querySelector("#name");
let yearElement = document.querySelector("#year");
let btn = document.querySelector("#button");

function handleSubmit(event) {
  event.preventDefault();
  let h3Value = "https://localhost:8080/";
  let name = nameELement.value;
  let year = yearElement.value;

  if (name && year) 
  {
    h3Value += "?name=" + name + "&year=" + year;
  } else if (name && !year) {
    h3Value += "?name=" + name;
  } else if (!name && year) {
    h3Value += "?year=" + year;
  }
  h3.textContent = h3Value;
}

form.addEventListener("submit", handleSubmit);