async function getJSON() {
  let url = "https://api.github.com/users/ruanyf";
  try {
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("Request Failed", error);
  }
}

getJSON();
