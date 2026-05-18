let searchbtn = document.querySelector(".searchbtn");

let viewRecipe_Container = document.querySelector(".viewRecipe-Container");

// let URL = "https://api.spoonacular.com/recipes/complexSearch?";

// let apikey = "da7daf5af015463c831fa834d3ecff0c";


let getData = async (query) => {
    // console.log(query);
    let container = document.querySelector(".container");
    container.innerHTML = "<h1>Fetching reult...</h1>";

    const data = await fetch(`http://35.154.226.221:5000/api/recipes?query=${query}`);
    const responce = await data.json();

    console.log(responce["results"]);
    container.innerHTML = "";
    responce.results.forEach(result => {
        const showrecipe = document.createElement("div");
        showrecipe.classList.add("recipe");
        showrecipe.innerHTML = `
       <img src="${result.image}" alt="Not found">
       <h3>${result.title}</h3>
      `

        let a = `<button onclick="viewRecipe(${result.id})">View Recipe</button>`;

        const button = document.createElement("div");
        button.innerHTML = a;



        showrecipe.appendChild(button);
        container.appendChild(showrecipe);


    });

}


try {
    searchbtn.addEventListener('click', (e) => {
        // let searchBox = document.getElementById("searchBox").innerText;
        let searchBox = document.getElementById("searchBox").value;
        e.preventDefault();
        // console.log(searchBox);

        getData(searchBox);

    })
} catch {
    console.log(200);
}

let viewRecipe = async (recipeid) => {
    console.log(recipeid);
    // `https://api.spoonacular.com/recipes/${id}/information`
    const recipeData = await fetch(`http://35.154.226.221:5000/api/recipe/${recipeid}`);
    const Reciperesponce = await recipeData.json();
    console.log(Reciperesponce);
    // location.href("View Recipe.html");
    sessionStorage.setItem("recipe", JSON.stringify(Reciperesponce));
    window.location.href = "View Recipe.html";
}

