console.log("JS In The House");

axios
  .get("http://localhost:3000/api/vegetables")
  .then(response => {
    console.log(response.data.data);
  })
  .catch(function(error) {
    console.log(error);
  });
