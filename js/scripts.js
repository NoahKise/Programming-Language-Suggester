function hideResults() {
  document.getElementById("javascript").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("csharp").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("error").setAttribute("class", "hidden");
  document.getElementById("friends").setAttribute("class", "hidden");
  document.getElementById("girlfriend").setAttribute("class", "hidden");
  document.getElementById("typescript").setAttribute("class", "hidden");
}

window.onload = function() {
  let form = document.querySelector("form#joke");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    hideResults();

    const color = document.getElementById("inputAlienTree").value;
    const topping1 = document.querySelector("select#topping1").value;
    const topping2 = document.querySelector("select#topping2").value;
    const topping3 = document.querySelector("select#topping3").value;
    const ranch = document.querySelector("select#ranch").value;
    const crisisAge = parseInt(document.getElementById("inputCrisis").value)
    const matthew = document.querySelector("input#matthew:checked").value;
    const joke = document.getElementById("inputJoke").value;
    const jokeLetter = joke.charAt(0);

    if (topping1 === "char-and-cup-pepperoni" && topping2 === "hot-pickled-peppers" && topping3 === "green-olives") {
      friends.removeAttribute("class");
    } else if (topping1 === "bacon" && topping2 === "red-onions" && topping3 === "pineapple") {
      girlfriend.removeAttribute("class");
    } else if (matthew === "manic") {
      javascript.removeAttribute("class");
    } else if (ranch === "false") {
      ruby.removeAttribute("class");
    } else if (crisisAge <= 33) {
      csharp.removeAttribute("class");
    } else if (jokeLetter === "k") {
      python.removeAttribute("class");
    } else if (joke === "") {
      error.removeAttribute("class");
    } else {
      typescript.removeAttribute("class");
    }
  });
};

