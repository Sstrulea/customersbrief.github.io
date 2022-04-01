const filterBtn = document.querySelector(".filters");
const sort = document.querySelector(".sort");
const orderBox = document.querySelector("#order-box");
const filterInputs = document.querySelector(".filter-inputs");
const industryBox = document.querySelector("#industry-box");
const countryBox = document.querySelector("#country-box");
const customers = document
  .querySelector(".customers")
  .getElementsByTagName("li");

//FILTER BUTTON

filterBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (filterInputs.style.display == "none") {
    filterInputs.style.display = "block";
  } else {
    filterInputs.style.display = "none";
  }
});

//INDUSTRY BUTTON

industryBox.addEventListener("change", (e) => {
  e.preventDefault();
  let aux = industryBox.options[industryBox.selectedIndex].text;
  for (let i = 0; i < customers.length; i++) {
    if (aux == "All industries") {
      customers[i].style.display = "block";
    } else if (customers[i].dataset.industry != aux) {
      customers[i].style.display = "none";
    } else {
      customers[i].style.display = "block";
    }
  }
});

//COUNTRY BUTTON

countryBox.addEventListener("change", (e) => {
  e.preventDefault();
  let aux = countryBox.options[countryBox.selectedIndex].text;
  for (let i = 0; i < customers.length; i++) {
    if (aux == "All countries") {
      customers[i].style.display = "block";
    } else if (customers[i].dataset.country != aux) {
      customers[i].style.display = "none";
    } else {
      customers[i].style.display = "block";
    }
  }
});

//ORDER BUTTON

sort.addEventListener("click", (e) => {
  if (orderBox.value == "Alphabetical") {
    let i, switching, b, shouldSwitch;
    switching = true;
    while (switching) {
      switching = false;
      b = customers;
      for (i = 0; i < b.length - 1; i++) {
        shouldSwitch = false;
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  } else if (orderBox.value == "Relevance") {
    let i, switching, b, shouldSwitch;
    switching = true;
    while (switching) {
      switching = false;
      b = customers;
      for (i = 0; i < b.length - 1; i++) {
        shouldSwitch = false;
        if (
          parseInt(b[i].dataset.relevance) <
          parseInt(b[i + 1].dataset.relevance)
        ) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
      }
    }
  }
});
