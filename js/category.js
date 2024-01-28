async function getCategories() {
    mainData.innerHTML = ""
    search.innerHTML = "";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    response = await response.json()
    displayCategories(response.categories)
}

function displayCategories(data) {
    let col = "";

    for (let i = 0; i < data.length; i++) {
        col += `
        <div class="col-md-3">
                <div onclick="getCategoryMeals('${data[i].strCategory}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${data[i].strCategoryThumb}" alt="" srcset="">
                    <div class="meal-layer position-absolute text-center text-black p-2">
                        <h3>${data[i].strCategory}</h3>
                        <p>${data[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                    </div>
                </div>
        </div>
        `
    }

    mainData.innerHTML = col;
}
