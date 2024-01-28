async function getIngred() {
    mainData.innerHTML = ""
    search.innerHTML = "";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    response = await response.json()
    displayIngred(response.meals)

}

function displayIngred(data) {
    let col = "";

    for (let i = 0; i < data.length; i++) {
        col += `
        <div class="col-md-3">
                <div onclick="getMealsArea('${data[i].strIngredient}')" class="rounded-2 text-center cursor-pointer">
                        <i class="fa-solid fa-burger" style="font-size: 30px;"></i>
                        <h3>${data[i].strIngredient}</h3>
                </div>
        </div>
        `
    }

    mainData.innerHTML = col;
}
