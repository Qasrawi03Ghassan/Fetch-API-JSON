const getData = async () => {
  try {
    let cName = document.getElementById("cName").value;
    if (!cName) cName = "Palestine";
    const endP = `https://api.restcountries.com/countries/v5/names.common/${cName}`; //changing the endpoint would result in an error message shown instead of data
    const request = await fetch(endP, {
      headers: {
        Authorization: "Bearer rc_live_bb06a63cf31b4c12baaa8cfee2f64c98",
      },
    });

    const data = await request.json();
    console.log(data);
    alert(`Country: ${data.data.objects[0].descriptions.long}`);
  } catch (error) {
    console.log("Error getting data from API: " + error);
  }
};

document
  .getElementById("btn")
  .addEventListener("click", async () => await getData());
