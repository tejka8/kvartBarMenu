
const dictionary={
    mk:{
        titleCoffee:"Кафе",
        titleAlcoholic:"Алкохолни",
        titleNonAlcoholic:"Без алкохолни",
    },
    en:{
        titleCoffee:"Coffee",
        titleAlcoholic:"Alcoholic",
        titleNonAlcoholic:"Non Alcoholic"
    }
}
const products={
    coffee:[
        {
            title:{mk:"Еспресо/Дупло еспресо ", en:"Espresso/Double Espresso"},
            description:{mk:"Дозерка кафе/ Две дозерки кафе",en:"Shot of espresso/ Double shot of espresso"},
            image:"img/coffee/espresso.jpg",
            price:"70/90"
        },
        {
            title:{mk:"Макијато", en:"Macchiato"},
            description:{mk:"Дозерка еспресо со малку млеко",en:"Shot espresso with regular milk"},
            image:"img/coffee/espresso.jpg",
            price:"120"
        },
        {
            title:{mk:"Лате Макијато", en:"Latte macchiato"},
            description:{mk:"Дозерка еспресо со матено млеко",en:"Shot espresso with foamed milk"},
            image:"img/coffee/espresso.jpg",
            price:"140"
        },
        {
            title:{mk:"Фредо Еспресо", en:"Fredo Espresso"},
            description:{mk:"Дозерка еспресо со матено млеко",en:"Shot espresso with foamed milk"},
            image:"img/coffee/espresso.jpg",
            price:"160"
        },
        {
            title:{mk:"Фредо Капучино", en:"Fredo Cappuccino"},
            description:{mk:"Дозерка еспресо со матено млеко",en:"Shot espresso with foamed milk"},
            image:"img/coffee/espresso.jpg",
            price:"160"
        },
        {
            title:{mk:"Нескафе", en:"Nescafe"},
            description:{mk:"Дозерка еспресо со матено млеко",en:"Shot espresso with foamed milk"},
            image:"img/coffee/espresso.jpg",
            price:"160"
        },
        {
            title:{mk:"Чај", en:"Tea"},
            description:{mk:"Дозерка еспресо со матено млеко",en:"Shot espresso with foamed milk"},
            image:"img/coffee/espresso.jpg",
            price:"160"
        },
    ],
    alcoholic: {
        cocktails: [
            {
                title: { mk: "Cosmopolitan", en: "Cosmopolitan" },
                description: { mk: "Вотка, сок од брусница, ликер", en: "Vodka, cranberry juice, liqueur" },
                image: "img/coctails/cosmopolitan-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Mai Tai", en: "Mai Tai" },
                description: { mk: "Ром, лимонов сок, оргеат сируп, портокалов ликер", en: "Rum, lime juice, orgeat syrup, orange liqueur" },
                image: "img/coctails/maiTai-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Bramble", en: "Bramble" },
                description: { mk: "Џин, лимонов сок, шеќерен сируп, ликер од боровинка", en: "Gin, lemon juice, sugar syrup, blackberry liqueur" },
                image: "img/coctails/brumble.jpg",
                price: "250"
            },
            {
                title: { mk: "Blue Frog", en: "Blue Frog" },
                description: { mk: "Вотка, сино курaсо, лимонов сок, шеќерен сируп", en: "Vodka, blue curaçao, lemon juice, sugar syrup" },
                image: "img/coctails/blueFrog-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Tequila Sunrise", en: "Tequila Sunrise" },
                description: { mk: "Текила, портокалов сок, гренадин", en: "Tequila, orange juice, grenadine" },
                image: "img/coctails/ts-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Sex on the Beach", en: "Sex on the Beach" },
                description: { mk: "Вотка, ликер од праска, портокалов и сок од брусница", en: "Vodka, peach schnapps, orange juice, cranberry juice" },
                image: "img/coctails/ts-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Mojito", en: "Mojito" },
                description: { mk: "Белен ром, шеќер, лимета, нане, сода вода", en: "White rum, sugar, lime, mint, soda water" },
                image: "img/coctails/mojito-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Negroni", en: "Negroni" },
                description: { mk: "Џин, Кампари, слатко вермут", en: "Gin, Campari, sweet vermouth" },
                image: "img/coctails/negroni-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Martini", en: "Martini" },
                description: { mk: "Џин и сув вермут, гарнирано со маслинка или кора од лимон", en: "Gin and dry vermouth, garnished with olive or lemon twist" },
                image: "img/coctails/martini-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Manhattan", en: "Manhattan" },
                description: { mk: "Виски, слатко вермут, битери", en: "Whiskey, sweet vermouth, bitters" },
                image: "img/coctails/manhattan-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Whiskey Sour", en: "Whiskey Sour" },
                description: { mk: "Виски, лимонов сок, шеќер, белка од јајце (опционално)", en: "Whiskey, lemon juice, sugar, egg white (optional)" },
                image: "img/coctails/ts-min.jpg",
                price: "250"
            },

            {
                title: { mk: "Paloma", en: "Paloma" },
                description: { mk: "Текила, сода од грејпфрут, лимонов сок, сол", en: "Tequila, grapefruit soda, lime juice, salt" },
                image: "img/coctails/paloma-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Pornstar Martini", en: "Pornstar Martini" },
                description: { mk: "Ванила вотка, ликер од пасионско овошје, пире од пасионско овошје, просеко", en: "Vanilla vodka, passion fruit liqueur, passion fruit puree, prosecco" },
                image: "img/coctails/pornstarM-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Caipiroska", en: "Caipiroska" },
                description: { mk: "Вотка, лимета, шеќер", en: "Vodka, lime, sugar" },
                image: "img/coctails/Caipiroska-min.jpg",
                price: "250"
            }
        ],
        wines: [
            {
                title: { mk: "Т'га за југ", en: "T'ga za jug" },
                description: { mk: "Македонско црвено вино", en: "Macedonian red wine" },
                image:"img/wines/tga_black_bg-min.jpg",
                price: "180"
            },
            {
                title: { mk: "Шардоне", en: "Chardonnay" },
                description: { mk: "Белo вино со ноти на тропско овошје и путер", en: "White wine with notes of tropical fruit and butter" },
                image:"img/wines/chardonnay-min.jpg",
                price: "230"
            },
            {
                title: { mk: "Александрија", en: "Alexandria" },
                description: { mk: "Белo вино со свеж вкус и арома на цвеќе", en: "White wine with fresh taste and floral aroma" },
                image:"img/wines/alexadria_black_bg-min.jpg",
                price: "210"
            },
        ],
        beers: [
            {
                title: { mk: "Скопско", en: "Skopsko" },
                description: { mk: "Лесно пиво", en: "Light beer" },
                image:"img/beers/skopsko-min.jpg",
                price: "100"
            },
            {
                title: { mk: "Скопско смут", en: "Skopsko smooth" },
                description: { mk: "Лесно пиво", en: "Light beer" },
                image:"img/beers/smooth-min.jpg",

                price: "100"
            },
            {
                title: { mk: "Златен Даб", en: "Zlaten Dab" },
                description: { mk: "Лесно пиво", en: "Light beer" },
                image:"img/beers/zlatenDab-min.jpg",

                price: "100"
            },
            {
                title: { mk: "Хајнекен", en: "Heineken" },
                description: { mk: "Лесно пиво", en: "Light beer" },
                image:"img/beers/heineken-min.jpg",
                price: "100"
            }
        ]
    },
    nonAlcoholic: {
        softDrinks: [
            {
                title: {mk: "Флаширан Џус", en: "Bottled juice"},
                image: "img/nonAlcoholic/juices/bottledJuice-min.jpg",
                price: "100"
            },

            {
                title: {mk: "Цеден микс", en: "Juice mix"},
                image: "img/nonAlcoholic/juices/bottledJuice-min.jpg",
                price: "250"
            },
            {
                title: {mk: "Цеден портокал", en: "Orange juice - squeezed"},
                image: "img/nonAlcoholic/juices/orange_juice-min.jpg",
                price: "250"
            },
            {
                title: {mk: "Цедевита", en: "Cedevita"},
                image: "img/nonAlcoholic/juices/bottledJuice-min.jpg",
                price: "250"
            },
            {
                title: {mk: "Sanpelegrino ", en: "Sanpelegrino"},
                image: "img/nonAlcoholic/juices/sanpelegrino-min.jpg",
                price: "120"
            },
            {
                title: {mk: "Монин", en: "Monin"},
                image: "img/nonAlcoholic/juices/monin-min.jpg",
                price: "250"
            },


        ],
        fizzyDrinks: [
            {
                title: {mk: "Coca cola", en: "Coca cola"},
                image:"img/nonAlcoholic/fizzy/cocaCola-min.jpg",
                price: "100"
            },
            {
                title: {mk: "Pepsi", en: "Pepsi"},
                image:"img/nonAlcoholic/fizzy/pepsi-min.jpg",
                price: "100"
            },
            {
                title: {mk: "Fanta", en: "Fanta"},
                price: "100"
            },
            {
                title: {mk: "Schweppes ", en: "Schweppes"},
                image:"img/nonAlcoholic/fizzy/schwepped-min.jpg",
                price: "120"
            },
            {
                title: {mk: "Sprite", en: "Sprite"},
                image:"img/nonAlcoholic/fizzy/sprite-min.jpg",
                price: "250"
            },


        ]
    }


}
let currentCategory = null;      // Пр. "coffee", "alcoholic"
let currentSubcategory = null;   // Пр. "cocktails", "wines", "beers"
let currentView = "main";// "main", "category", "subcategory"

let language = localStorage.getItem("language") || "mk";

function i18n(key) {
    return dictionary[language][key];
}


function showMain() {
    currentCategory = null;
    currentSubcategory = null;
    currentView = "main";

    document.getElementById("mainDiv").classList.remove("d-none");
    document.getElementById("categoryView").classList.add("d-none");
}

function changeLanguage(lang) {
    language = lang;
    localStorage.setItem("language", lang);

    document.getElementById("currLang").textContent = lang.toUpperCase();

    document.getElementById("titleCoffee").textContent = i18n("titleCoffee").toUpperCase();
    document.getElementById("titleAlcoholic").textContent = i18n("titleAlcoholic").toUpperCase();
    document.getElementById("titleNonAlcoholic").textContent = i18n("titleNonAlcoholic").toUpperCase();

    if (currentView === "category" && currentCategory) {
        showCategory(currentCategory);
    } else if (currentView === "subcategory" && currentSubcategory) {
        showProductsOfSubcategory(currentSubcategory);
    }
}

function showCategory(category) {
    currentCategory = category;
    currentSubcategory = null;
    currentView = "category";

    const mainDiv = document.getElementById("mainDiv");
    const categoryView = document.getElementById("categoryView");
    categoryView.innerHTML = "";
    mainDiv.classList.add("d-none");
    categoryView.classList.remove("d-none");

    if (category === "alcoholic" ) {
        showSubcategories(["cocktails", "wines", "beers"],"alcoholic");
        return;
    }
    if (category === "nonAlcoholic" ) {
        showSubcategories(["softDrinks", "fizzyDrinks"],"nonAlcoholic");
        return;
    }
    const items = products[category];
    renderProducts(items);
}
function getSubcategoryTitle(sub) {
    const translations = {
        mk: {
            cocktails: "Коктели",
            wines: "Вина",
            beers: "Пива",
            softDrinks: "Негазирани пијалоци",
            fizzyDrinks: "Газирани пијалоци"
        },
        en: {
            cocktails: "Cocktails",
            wines: "Wines",
            beers: "Beers",
            softDrinks: "Soft Drinks",
            fizzyDrinks: "Fizzy Drinks"
        }
    };

    return translations[language]?.[sub] || sub;
}

function showSubcategories(subcategories, parentCategory) {
    currentSubcategory = null;
    currentCategory = parentCategory;
    currentView = "category";

    const categoryView = document.getElementById("categoryView");
    categoryView.innerHTML = "";

    const subcategoryImages = {
        cocktails: "img/coctail.jpg",
        wines: "img/img_1.png",
        beers: "img/img.png",
        fizzyDrinks: "img/fz.jpg",
        softDrinks: "img/juices.jpg"
    };

    subcategories.forEach(sub => {
        const card = document.createElement("div");
        card.className = "card mb-3 card-small"; // користи CSS класа, не style

        const titleText = getSubcategoryTitle(sub).toUpperCase(); // сите букви големи

        card.innerHTML = `
            <img class="card-img-top" src="${subcategoryImages[sub]}" alt="${titleText}" loading="lazy" />
            <div class="card-body d-flex justify-content-center align-items-center" style="height: 5rem;">
                <h5 class="card-title fw-bold text-center">${titleText}</h5>
            </div>
        `;

        card.onclick = () => {
            currentSubcategory = sub;
            currentView = "subcategory";
            showProductsOfSubcategory(sub);
        };

        categoryView.appendChild(card);
    });
}


function showProductsOfSubcategory(subcategory) {
    currentSubcategory = subcategory;
    currentView = "subcategory";

    const sourceCategory = ["cocktails", "wines", "beers"].includes(subcategory)
        ? "alcoholic"
        : "nonAlcoholic";


    const categoryView = document.getElementById("categoryView");
    categoryView.innerHTML = "";

    const items = products[sourceCategory][subcategory];
    renderProducts(items);
}

function renderProducts(items) {
    const categoryView = document.getElementById("categoryView");
    categoryView.innerHTML = "";

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "card mb-3";

        card.innerHTML = `
            <img class="card-img-top" src="${item.image}" alt="${item.title[language]}" loading="lazy" />
            <div class="card-body">
                <h5 class="card-title fw-bold">${item.title[language]}</h5>
                ${item.description ? `<p class="card-text">${item.description[language]}</p>` : ""}
                <p class="price card-text">${item.price}</p>
            </div>
        `;
        categoryView.appendChild(card);
    });
}


document.getElementById("backBtn").onclick = () => {
    if (currentView === "subcategory" && currentSubcategory) {
        let subs = [];

        if (["cocktails", "wines", "beers"].includes(currentSubcategory)) {
            currentCategory = "alcoholic";
            subs = ["cocktails", "wines", "beers"];
        } else if (["softDrinks", "fizzyDrinks"].includes(currentSubcategory)) {
            currentCategory = "nonAlcoholic";
            subs = ["softDrinks", "fizzyDrinks"];
        }

        currentSubcategory = null;
        currentView = "category";
        showSubcategories(subs, currentCategory);
    } else if (currentView === "category") {
        showMain();
    }
};

changeLanguage(language);
