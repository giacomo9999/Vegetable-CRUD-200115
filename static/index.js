console.log("JS In The House");

axios
  .get("http://localhost:3000/api/vegetables")
  .then(response => {
    const oneVeg = response.data.data[0].name;
    const twoVeg = response.data.data[1].name;
    console.log(oneVeg, twoVeg);
    const vegList = document.createElement("ul");
    document.querySelector(".container-outer").appendChild(vegList);
    const vegetable = document.createElement("li");
    const vegetable2 = document.createElement("li");
    vegetable.innerHTML = oneVeg;
    vegetable2.innerHTML = twoVeg;
    vegList.appendChild(vegetable);
    vegList.appendChild(vegetable2);
  })
  .catch(function(error) {
    console.log(error);
  });
