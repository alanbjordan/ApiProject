`use scrict`;

const apiKey = `f218c55bc041494885c415afbc00faaa`
const restuarants = [];

function getMenuItems() {
    const apiUrl = `https://api.spoonacular.com/food/menuItems/search?query=Hooters&number=60&apiKey=f218c55bc041494885c415afbc00faaa`;
    const l = get(apiUrl).then(function(response) {
        const restaurantMenuList = response.menuItems.filter(function(menuItem) {
            console.log(response.menuItems[0].restaurantChain)
            if(menuItem.restaurantChain === "Hooters") {
                return menuItem
            }
        });
        console.log(restaurantMenuList);
        return restaurantMenuList;
    });
    return l;
}

function getSingleMenuItem(itemName) {
    const menuItemId = 0;
    restaurantMenu.forEach(menuItem => {
        if(menuItem.title === itemName) {
            menuItemId = menuItem.id;
        }
    });
    return menuItemId;
}

const btn = document.getElementById("myBtn");
const closeModalButton = document.getElementsByClassName("close")[0];
const logos = document.getElementById("logoButtons");


document.cookie = "";

btn.addEventListener("click", function(e) {
    const weightCheck = document.getElementById("weightInput").value;
    const weight = document.getElementById("weightInput");
    if(weightCheck.trim() === "" ) {
        const alertArea = document.getElementById(`alertArea`);
        alertArea.innerHTML = "You must enter your weight"
        
    } else {
        const exerciseInput = document.querySelector(`#workoutSelector`);
        const modal = document.getElementById("myModal");
        sessionStorage.weight = parseInt(weight.value);
        sessionStorage.exerciseInput = exerciseInput.value;

        modal.style.display = "block";
        console.log(document.cookie);
    }
});

closeModalButton.addEventListener("click", function(e) {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
});

logos.addEventListener("click", function(e){
    document.cookie = e.target.value;
    if (e.target.value != undefined) {
        location.assign(`page2.html`);   
    }
    return e.target.value;   
});
