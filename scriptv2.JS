    async function getcategory() {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
            const data = await response.json();
            
            for(let i = 0; i < data.meals.length; i++) {
                document.querySelector("#category").innerHTML += `<option value="Region">${data.meals[i].strCategory}</option>`;
            }
        }
        getcategory();
        
        async function getRegion() {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
            const data = await response.json();
            for(let i = 0; i < data.meals.length; i++) {
                document.querySelector("#region").innerHTML += `<option value="Category">${data.meals[i].strArea}</option>`;
            }
        }
        getRegion()
    