const menuText = {
    title: "Menu",
    appetizers: "Appetizers",
    appetizer1: "Salad",
    appetizer1Price: "$10.00",
    appetizer2: "Fancy Salad",
    appetizer2Price: "$12.00",
    appetizer3: "Mozzarella Sticks",
    appetizer3Price: "$13.00",
    appetizer4: "Chicken Wings",
    appetizer4Price: "$8.00",
    entrees: "Entrees",
    entree1: "Fancy Chicken Caesar Salad",
    entree1Price: "$35.00",
    entree2: "Grilled Salmon",
    entree2Price: "$48.00",
    entree3: "Grilled Chicken",
    entree3Price: "$46.00",
    entree4: "New York Strip Steak",
    entree4Price: "$55.00",
    entree5: "Filet Mignon",
    entree5Price: "$51.00",
    entree6: "Tomahawk Steak",
    entree6Price: "$65.00",
    desserts: "Desserts",
    dessert1: "Fancy Ice Cream",
    dessert1Price: "$15.00",
    dessert2: "Fresh, mixed berries",
    dessert2Price: "$12.00",
    dessert3: "Creme Brulee",
    dessert3Price: "$16.00",
};

const createMenuContent = () => {
    const content = document.querySelector("#content");
    //clear content before adding new elements
    content.replaceChildren();

    const title = document.createElement("h1");
    title.textContent = menuText.title;

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const appetizers = document.createElement("h2");
    appetizers.textContent = menuText.appetizers;
    const appetizerList = document.createElement("ul");
    appetizerList.classList.add("appetizer-list");
    createMenuListItem("appetizer", 4, appetizerList);

    const entrees = document.createElement("h2");
    entrees.textContent = menuText.entrees;
    const entreeList = document.createElement("ul");
    entreeList.classList.add("entree-list");
    createMenuListItem("entree", 6, entreeList);

    const desserts = document.createElement("h2");
    desserts.textContent = menuText.desserts;
    const dessertList = document.createElement("ul");
    dessertList.classList.add("dessert-list");
    createMenuListItem("dessert", 3, dessertList);

    menuContainer.append(appetizers, appetizerList, entrees, entreeList, desserts, dessertList);

    content.append(title, menuContainer);
}

const createMenuListItem = (mealType, size, list) => {
    for (let i = 1; i <= size; i++) {
        const li = document.createElement("li");
        const name = document.createElement("p");
        name.textContent = menuText[mealType + i];
        const price = document.createElement("p");
        price.textContent = menuText[mealType + i + "Price"];
        li.append(name, price);
        list.append(li);
    }
}

export default createMenuContent;