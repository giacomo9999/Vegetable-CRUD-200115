console.log("JS In The House");

axios
  .get("http://localhost:3000/api/vegetables")
  .then(response => {
    const vegList = document.createElement("ul");
    document.querySelector(".container-outer").appendChild(vegList);
    response.data.data.forEach((el, index) => {
      let vegLI = document.createElement("li");
      vegLI.innerHTML = el.name;
      vegLI.idNum = index;
      vegList.appendChild(vegLI);
      let deleteButton = document.createElement("button");
      deleteButton.innerHTML = "DELETE";
      deleteButton.addEventListener("click", function(e) {
        console.log("Button clicked ", vegLI.idNum);
      });
      vegList.appendChild(deleteButton);
      console.log(vegLI.innerHTML, vegLI.idNum);
    });
    // const oneVeg = response.data.data[0].name;
  })
  .catch(function(error) {
    console.log(error);
  });
