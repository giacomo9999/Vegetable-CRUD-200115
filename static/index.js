console.log("JS In The House");

axios
  .get("http://localhost:3000/api/vegetables")
  .then(response => {
    const vegList = document.createElement("ul");
    document.querySelector(".container-outer").appendChild(vegList);
    const vegetable = document.createElement("li");
    const oneVeg = response.data.data[0].name;
    vegetable.innerHTML = oneVeg;
    vegList.appendChild(vegetable);
  })
  .catch(function(error) {
    console.log(error);
  });
