const recipe = sessionStorage.getItem("recipe");
console.log(JSON.parse(recipe));
const showData = JSON.parse(recipe);

let viewRecipe_Container = document.querySelector(".viewRecipe-Container");

console.log(showData.instructions);

viewRecipe_Container.innerHTML = `<h3>${showData.title}</h3>
                                  <h3>(${showData.dishTypes})</h3>
                                  <img src="${showData.image}" alt="Not found">
                                  <h3><b>HealthScore</b> : ${showData.healthScore}</h3>
                                  <b>Instructions</b> : ${showData.instructions}
                                  <p><b>Summary</b> : ${showData.summary}</p>
  
                                  `;