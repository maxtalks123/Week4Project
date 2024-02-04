const form = document.getElementById("guestForm");
const baseURL = "http://localhost:4040";
const existingFormData = document.createElement("div");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const guestData = Object.fromEntries(formData);
  const response = await fetch(`${baseURL}/reviews`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(guestData),
  });
  if (response.ok) {
    displayGuestList();
  } else {
    console.log("failed to display", response.status);
  }
});
// function test() {
//   let guestList = `${baseURL}/reviews`;
//   let result = guestList.JSON;
//   console.log(result);
// }
// test();

async function fetchGuestList() {
  const guestList = await fetch(`${baseURL}/reviews`);
  let result = await guestList.json();
  return result;
}

async function displayGuestList() {
  let guestList = await fetchGuestList();
  existingFormData.innerHTML = "";
  guestList.forEach((item) => {
    let guestUserName = document.createElement("p");
    let guestMessage = document.createElement("p");
    guestUserName.textContent = item.username;
    guestMessage.textContent = item.message;
    existingFormData.appendChild(guestUserName);
    existingFormData.appendChild(guestMessage);
  });
}
displayGuestList();
//async function to display results.
//foreach

//loop through results from local host data with for each
