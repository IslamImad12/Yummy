async function getArea() {
    mainData.innerHTML = ""

    search.innerHTML = "";

    let respone = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    respone = await respone.json()

    displayArea(respone.meals)
}

function displayArea(data) {
    let col = "";

    for (let i = 0; i < data.length; i++) {
        col += `
        <div class="col-md-3">
                <div onclick="getMealsArea('${data[i].strArea}')" class="rounded-2 text-center cursor-pointer">
                        <i class="fa-solid fa-location-dot" style="font-size: 30px;"></i>
                        <h3>${data[i].strArea}</h3>
                </div>
        </div>
        `
    }
    mainData.innerHTML = col;
    
}



