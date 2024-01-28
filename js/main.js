let mainData = document.getElementById("mainData");
let search = document.getElementById("search");
getHome();
$('.close').on('click',function(){
    $('.sidenav').slideToggle(1000)
})
$(document).ready(function(){
    $('#loading').fadeOut(800,function(){
        $('body').css('overflow','visible')
    })
})

function displayMeals(data) {
    let col = "";

    for (let i = 0; i < arr.length; i++) {
        col += `
        <div class="col-md-3">
                <div onclick="getMealDetails('${data[i].strMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${data[i].strMealThumb}" alt="" srcset="">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h3>${data[i].strMeal}</h3>
                    </div>
                </div>
        </div>
        `
    }

    mainData.innerHTML = col;;
}

function showSearch() {
    search.innerHTML = `
    <div class="container">
        <div class="row my-4">
                <div class="col-md-6">
                        <input onkeyup="searchName(this.value) type="text" class="form-control" placeholder="Search By Name">
                </div>
                <div class="col-md-6">
                        <input type="text" onkeyup="searchLetter(this.value)" maxlength="1" class="form-control" placeholder="Search By First Later">
                </div>
        </div>
    </div>
    `
}
async function searchName(data) {
    mainData.innerHTML = ""
    
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`)
    response = await response.json()
    
    response.meals ? displayMeals(response.meals) : displayMeals([])

    
}
async function searchLetter(data) {
    mainData.innerHTML = ""

    
    data == "" ? data = "a" : "";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${data}`)
    response = await response.json()
    
    response.meals ? displayMeals(response.meals) : displayMeals([])
    
}


// show Home 
async function getHome() {
    mainData.innerHTML = ""

    search.innerHTML = "";

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
    response = await response.json()

    displayHome(response.meals)

}
function displayHome(data) {
    let cartona = "";

    for (let i = 0; i < data.length; i++) {
        cartona += `
        <div class="col-md-3">
                <div onclick="getCategoryMeals('${data[i].strMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${data[i].strMealThumb}" alt="" srcset="">
                    <div class="meal-layer position-absolute text-center text-black p-2">
                        <h3>${data[i].strMeal}</h3>
                    </div>
                </div>
        </div>
        `
    }

    mainData.innerHTML = cartona
    
}