function calculateTaxes(income) {
  if (!Number.isFinite(income)) {
    throw new Error("Invalid income!");
  }
  if (income > 30000) {
    return income * 0.25;
  } else {
    return income * 0.15;
  }
}

function removeDupes(values) {
  if (typeof values === "string") return arr.join("");
  return [...new Set(values)];
}

function remove(arr, val) {
  return arr.filter((el) => {
    el !== val;
  });
}

let usernames = [];
let input = document.getElementById("username");

function submitform() {
  names.push(nameInput.value);
}
