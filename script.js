

// its fetch meals from api and return it
async function fetchMealsFromApi(url,value) {
    const response=await fetch(`${url+value}`);
    const meals=await response.json();
    return meals;
}



// its show's all meals card in main acording to search input value
function showMealList(){
    let inputValue = document.getElementById("my-search").value;
    let url="https://www.themealdb.com/api/json/v1/1/search.php?s=";
    let html = "";
    let meals=fetchMealsFromApi(url,inputValue);
    meals.then(data=>{
        if (data.meals) {
            data.meals.forEach((element) => {
                let isFav=false;
                if (isFav) {
                    html += `
                <div id="card" class="card mb-3" style="width: 20rem;">
                    <img src="${element.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.strMeal}</h5>
                        <div class="d-flex justify-content-between mt-5">
                            <button type="button" class="btn btn-outline-light" onclick="showMealDetails(${element.idMeal})">Details</button>
                            
                        </div>
                    </div>
                </div>
                `;
                } else {
                    html += `
                <div id="card" class="card mb-3" style="width: 20rem;">
                    <img src="${element.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.strMeal}</h5>
                        <div class="d-flex justify-content-between mt-5">
                            <button type="button" class="btn btn-outline-light" onclick="showMealDetails(${element.idMeal})">Details</button>
                            
                        </div>
                    </div>
                </div>
                `;
                }  
            });
        } else {
            html += `
            <div class="page-wrap d-flex flex-row align-items-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-12 text-center">
                            <div class="mb-4 lead" style=">
                            Le repas que vous recherchez n'a pas été trouvé.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
        document.getElementById("main").innerHTML = html;
    });
}



    //its shows full meal details in main
    async function showMealDetails(id) {
        let url="https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
        let html="";

        await fetchMealsFromApi(url,id).then(data=>{
            html += `
            
            <button type="button "  onclick="clospopu()" id='btn_close' class="btn-close"></button>
                <div id="meal-header" class="d-flex justify-content-around flex-wrap">
                <div id="meal-thumbail">
                    <img class="mb-2" src="${data.meals[0].strMealThumb}" alt="" srcset="">
                </div>
                <div id="details">
                    <h3>${data.meals[0].strMeal}</h3>
                    <h6>Category : ${data.meals[0].strCategory}</h6>
                    <h6>Area : ${data.meals[0].strArea}</h6>
                </div>
                </div>
                <div id="meal-instruction" class="mt-3">
                <h5 class="text-center">Instruction :</h5>
                <p>${data.meals[0].strInstructions}</p>
                </div>
                <div class="text-center">
                <a href="${data.meals[0].strYoutube}" target="_blank" class="btn btn-outline-light mt-3">Watch Video</a>
                </div>
            
            `;
        });
        document.getElementById("meal-details").innerHTML=html;
        document.getElementById("meal-details").style.display = 'block';
    }

    // document.querySelector('.btn-close').

        // // Fetch data from rest api
    async function getData() {
        for(let i = 0; i < 6; i++) {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            const data = await response.json();
            dataList = data.meals[0];

            if (data.meals) {
                html = `
                <div id="card" class="card mb-3" style="width: 20rem;">
                <img src="${dataList.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${dataList.strMeal}</h5>
                    <div class="d-flex justify-content-between mt-5">
                        <button type="button" class="btn btn-outline-light" onclick="showMealDetails(${dataList.idMeal})">Details</button>
                        
                    </div>
                </div>
            </div>
                `
            ;
            }else {
                html += `
                <div class="page-wrap d-flex flex-row align-items-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-12 text-center">
                                <div class="mb-4 lead" style=">
                                Le repas que vous recherchez n'a pas été trouvé.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            }
            document.getElementById("main").innerHTML += html
        }}
        getData();
        var btn_close = document.getElementById('btn-close');
        function clospopu(){
            document.getElementById("meal-details").style.display = 'none';
        };