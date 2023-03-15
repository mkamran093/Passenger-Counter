let countEl = document.getElementById("count-el");
let recordEl = document.getElementById("record-el");
let count = 0;
countEl.textContent = count;
recordEl.textContent = "Previous entries: ";

function incCount() {
  count += 1;
  countEl.textContent = count;
}

function addRecord() {
  recordEl.textContent += count + " - ";
  count = 0;
  countEl.textContent = count;
}
