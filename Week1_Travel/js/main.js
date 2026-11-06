const places = new Map();

const placeInput = document.getElementById("placeInput");
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");
const placeList = document.getElementById("placeList");
const message = document.getElementById("message");

function addPlace() {
  const name = placeInput.value.trim();
  const key = name.toLowerCase();

  if (name === "") {
    message.textContent = "Please enter a place.";
    return;
  }

  if (places.has(key)) {
    message.textContent = name + " is already on your list!";
  } else {
    places.set(key, name);
    message.textContent = "";
    showList();
  }

  placeInput.value = "";
}

function showList() {
  placeList.innerHTML = "";
  places.forEach(function (displayName) {
    const li = document.createElement("li");
    li.textContent = displayName;
    placeList.appendChild(li);
  });
}

addButton.addEventListener("click", addPlace);

function clearAll() {
  places.clear();
  placeList.innerHTML = "";
  message.textContent = "";
}

clearButton.addEventListener("click", clearAll);