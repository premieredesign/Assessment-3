document.getElementById("toggleButton").addEventListener("click", () => {
  let currentBackgroundColor = document.body.style.backgroundColor;

  if (currentBackgroundColor === "") {
    document.body.style.backgroundColor = "black";
  } else if (currentBackgroundColor === "black") {
    document.body.style.backgroundColor = "white";
  } else if (currentBackgroundColor === "white") {
    document.body.style.backgroundColor = "black";
  }
});

document.getElementById("addBox").addEventListener("click", () => {
  // 1. Create the div with 'box'
  const div = document.createElement("div");
  // 2. add class of 'box'
  div.className = "box";
  // 3. add title attribute of 'im a box'
  div.setAttribute("title", "I'm a box!");



  // 4. Get the children from the parent: -> this will return an empty Array to begin
  const NumberCounter = document.getElementById("numberBox").childNodes;

  // 5. Create the number which will represent the counter and turn it into a string
  const divNumber = document.createTextNode(`${NumberCounter.length + 1}`);
  // 6. make the id the array index so that when you need to remove it, you can remove it by id
  div.id = NumberCounter.length;
  // 7. Append number to the div
  div.appendChild(divNumber);




  // 7. Create div to append
  const numberBoxContainer = document.getElementById("numberBox");
  // 8. append div
  numberBoxContainer.appendChild(div);




  /*
Remove Box Logic
*/

  div.addEventListener("click", (e) => {
      numberBoxContainer.removeChild(NumberCounter[e.target.id]);
  });
});
