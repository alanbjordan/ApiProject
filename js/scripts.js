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

function getNutritionInfo(restaurantChain) {
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
