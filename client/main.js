const form = document.getElementById("guestForm");
const baseURL = "http://localhost:4040";
const existingFormData = document.createElement("ul");
const previousGuests = document.getElementById("PreviousGuests");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const guestData = Object.fromEntries(formData);
  const response = await fetch(`${baseURL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
  const guestList = await fetch(`${baseURL}`);
  let result = await guestList.json();
  return result;
}

async function displayGuestList() {
  let guestList = await fetchGuestList();
  existingFormData.innerHTML = "";
  guestList.forEach((item) => {
    const guestReaction = document.createElement("li");
    guestReaction.innerHTML = `${item.username}${item.message}${item.reaction}`;
    existingFormData.appendChild(guestReaction);
    previousGuests.appendChild(existingFormData);
    return existingFormData;
  });
}
displayGuestList();

// function testBook() {
//   let list = fetch("http://localhost:4040/reviews");
//   let parent = document.createElement("div");
//   let result = list.json;
//   console.log(result);
//   return result;
//   parent.appendChild(result);
// }
// testBook();

//async function to display results.
//foreach

//WHAT TO CHECK LATER:
//1 - LABELS ON INDEX.HTML MATCH WITH WHAT I HAVE IN DATABASE AND MAIN.JS
