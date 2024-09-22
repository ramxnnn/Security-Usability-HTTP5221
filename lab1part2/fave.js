// Create Friend Class below this line
class Friend {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }
}

// Don't change this code
window.onload = function () {
  const faveList = [];

  // Start typing your code below this line

  const form = document.forms["fave_form"];
  const faveBlock = document.getElementById("fave-block");
  const faveListElement = document.getElementById("fave-list");

  form.onsubmit = function (event) {
    event.preventDefault();

    for (let i = 1; i <= 3; i++) {
      const name = document.getElementById(`name_${i}`).value;
      const phone = document.getElementById(`phone_${i}`).value;
      const friend = new Friend(name, phone);
      faveList.push(friend);
    }

    faveListElement.innerHTML = "";
    faveList.forEach((friend) => {
      const listItem = document.createElement("li");
      listItem.textContent = `Name: ${friend.name} Phone: ${friend.phone}`;
      faveListElement.appendChild(listItem);
    });

    form.style.display = "none";
    faveBlock.style.display = "block";
  };

  // Do not type anything below this line
};
