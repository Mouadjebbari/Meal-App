        // document.querySelector("#category").addEventListener("change", async function() {
        //     let selectedCategory = this.value;
        //     console.log("Selected category: ", selectedCategory);
        //     // Perform an API call to retrieve meals that match the selected category
        //     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`);
        //     const data = await response.json();
        //     console.log(data);
        //     // create an empty string to hold the HTML
        //     let html = "";
        //     // check if data has meals
        //     if (data.meals) {
        //         // loop through the meals
        //         for (let i = 0; i < data.meals.length; i++) {
        //             let dataList = data.meals[i];
        //             html += `
        //             <div id="card" class="card mb-3" style="width: 20rem;">
        //             <img src="${dataList.strMealThumb}" class="card-img-top" alt="...">
        //             <div class="card-body">
        //                 <h5 class="card-title">${dataList.strMeal}</h5>
        //                 <div class="d-flex justify-content-between mt-5">
        //                     <button type="button" class="btn btn-outline-light" onclick="showMealDetails(${dataList.idMeal})">Details</button>
        //                 </div>
        //             </div>
        //         </div>
        //             `
        //         }
        //     }
        //     document.getElementById("main").innerHTML = html;
        //     // Perform any other logic necessary for this selection
        // });


        async function getSelect() {
            let selectedCategory = this.value;
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`);
            const data = await response.json();
            
            for(let i = 0; i < data.meals.length; i++) {
                document.querySelector("#category").innerHTML += `<option value="Region">${data.meals[i].strCategory}</option>`;
            }
            let html = "";
            // check if data has meals
            if (data.meals) {
                // loop through the meals
                for (let i = 0; i < data.meals.length; i++) {
                    let dataList = data.meals[0];
                    html += `
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
                }
            }
            document.getElementById("select").innerHTML = html;
        }
        getSelect();

// document.querySelector("#region").addEventListener("change", async function() {
//     let selectedRegion = this.value;
//     console.log("Selected region: ", selectedRegion);
//     // Perform an API call to retrieve meals that match the selected region
//     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedRegion}`);
//     const data = await response.json();
//     console.log(data);
//     // create an empty string to hold the HTML
//     let html = "";
//     // check if data has meals
//     if (data.meals) {
//         // loop through the meals
//         for (let i = 0; i < data.meals.length; i++) {
//             let dataList = data.meals[i];
//             html += `
//             <div id="card" class="card mb-3" style="width: 20rem;">
//             <img src="${dataList.strMealThumb}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${dataList.strMeal}</h5>
//                 <div class="d-flex justify-content-between mt-5">
//                     <button type="button" class="btn btn-outline-light" onclick="showMealDetails(${dataList.idMeal})">Details</button>
//                     </div>
//                     </div>
//                 </div>
//                 `
//             }
//         }
//         document.getElementById("main").innerHTML = html;
//         // Perform any other logic necessary for this selection
//     });



    // teeesst
    // async function getSelect() {
    //     const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
    //     const data = await response.json();
           
    //     for(let i = 0; i < data.meals.length; i++) {
    //         document.querySelector("#select").innerHTML += `<option value="Region">${data.meals[i].strCategory}</option>`;
    //     }
    // }
    // getSelect();
    
    // async function getRegion() {
    //     const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    //     const data = await response.json();
           
    //     for(let i = 0; i < data.meals.length; i++) {
    //         document.querySelector("#region").innerHTML += `<option value="Category">${data.meals[i].strArea}</option>`;
    //     }
    // }
    // getRegion();
        