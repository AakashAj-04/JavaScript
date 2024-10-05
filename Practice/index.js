console.log("Welcome Aakash Aj");
const titleEement = document.getElementById("title");
const newTitle = "Welcome AakashAj ";
titleEement.textContent = newTitle;

// generator function
function* sum() {
  let count = 0;
  for (let i = 0; i < 2; i++) {
    count++;
    yield i;
  }
  return count;
}
console.log(sum().next());
