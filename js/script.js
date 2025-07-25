
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
            title:{mk:"Еспресо", en:"Espresso"},
            description:{mk:"Дозерка кафе/ Две дозерки кафе",en:"Shot of espresso/ Double shot of espresso"},
            image:"img/coffee/espressoNew.png",
            price:"80"
        },
        {
            title:{mk:"Еспресо Безкофеинско", en:"Espresso Decaf"},
            description:{mk:"Дозерка кафе/ Две дозерки кафе",en:"Shot of espresso/ Double shot of espresso"},
            image:"img/coffee/espressoNew.png",
            price:"80"
        },
        {
            title:{mk:"Мало Макијато", en:"Small Macchiato"},
            description:{mk:"Дозерка еспресо со малку млеко",en:"Shot espresso with regular milk"},
            image:"img/coffee/espressoMachiatto.jpg",
            price:"70"
        },
        {
            title:{mk:"Макијато", en:"Macchiato"},
            description:{mk:"Дозерка еспресо со малку млеко",en:"Shot espresso with regular milk"},
            image:"img/coffee/machiattoNew.png",
            price:"100"
        },
        {
            title:{mk:"Макијато Безкофеинско", en:"Macchiato Decaf"},
            description:{mk:"Дозерка еспресо со малку млеко",en:"Shot espresso with regular milk"},
            image:"img/coffee/machiattoNew.png",
            price:"100"
        },
        {
            title:{mk:"Капучино", en:"Cappuccino"},
            description:{mk:"Дозерка еспресо со малку млеко",en:"Shot espresso with regular milk"},
            image:"img/coffee/cappucinoNew.png",
            price:"100"
        },
        {
            title:{mk:"Капучино Безкофеинско", en:"Cappuccino Decaf"},
            description:{mk:"Дозерка еспресо со малку млеко",en:"Shot espresso with regular milk"},
            image:"img/coffee/cappucinoNew.png",
            price:"100"
        },
        {
            title:{mk:"Лате", en:"Latte"},
            description:{mk:"Дозерка еспресо со матено млеко",en:"Shot espresso with foamed milk"},
            image:"img/coffee/latteTry.jpg",
            price:"120"
        },
        {
            title:{mk:"Фредо Еспресо", en:"Fredo Espresso"},
            description:{mk:"Дозерка еспресо со матено млеко",en:"Shot espresso with foamed milk"},
            image:"img/coffee/freddoEspressoNew1.png",
            price:"100"
        },
        {
            title:{mk:"Фредо Капучино", en:"Fredo Cappuccino"},
            description:{mk:"Дозерка еспресо со матено млеко",en:"Shot espresso with foamed milk"},
            image:"img/coffee/freddoCappuccinoNew.jpg",
            price:"130"
        },
        {
            title:{mk:"Нескафе", en:"Nescafe"},
            description:{mk:"Дозерка еспресо со матено млеко",en:"Shot espresso with foamed milk"},
            image:"img/coffee/nescafe.png",
            price:"110"
        },
        {
            title:{mk:"Нескафе Шејк", en:"Nescafe Shake"},
            description:{mk:"Дозерка еспресо со матено млеко",en:"Shot espresso with foamed milk"},
            image:"img/coffee/nescafe.png",
            price:"120"
        },
        {
            title:{mk:"Топло Чоколадо", en:"Hot Chocolate"},
            description:{mk:"Дозерка еспресо со матено млеко",en:"Shot espresso with foamed milk"},
            image:"img/coffee/hotChocolate.jpg",
            price:"100"
        },
        {
            title:{mk:"Топло Чоколадо Плазма", en:"Hot Chocolate Plazma"},
            description:{mk:"Дозерка еспресо со матено млеко",en:"Shot espresso with foamed milk"},
            image:"img/coffee/hotChocolate.jpg",
            price:"120"
        },
        {
            title:{mk:"Салеп", en:"Salep"},
            description:{mk:"Дозерка еспресо со матено млеко",en:"Shot espresso with foamed milk"},
            image:"img/coffee/salep.jpg",
            price:"70"
        },
        {
            title:{mk:"Чај", en:"Tea"},
            description:{mk:"Дозерка еспресо со матено млеко",en:"Shot espresso with foamed milk"},
            image:"img/coffee/tea.jpg",
            price:"80"
        },
        {
            title:{mk:"Чај со Рум", en:"Rum Tea"},
            description:{mk:"Дозерка еспресо со матено млеко",en:"Shot espresso with foamed milk"},
            image:"img/coffee/teaRum.jpg",
            price:"100/120"
        },
    ],
    alcoholic: {
        cocktails: [
            {
                title: { mk: "Cosmopolitan", en: "Cosmopolitan" },
                description: { mk: "Вотка, сок од брусница, ликер", en: "Vodka, cranberry juice, liqueur" },
                image: "img/alcoholicDrinks/coctails/cosmopolitan-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Mai Tai", en: "Mai Tai" },
                description: { mk: "Ром, лимонов сок, оргеат сируп, портокалов ликер", en: "Rum, lime juice, orgeat syrup, orange liqueur" },
                image: "img/alcoholicDrinks/coctails/maiTai-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Bramble", en: "Bramble" },
                description: { mk: "Џин, лимонов сок, шеќерен сируп, ликер од боровинка", en: "Gin, lemon juice, sugar syrup, blackberry liqueur" },
                image: "img/alcoholicDrinks/coctails/brumble.jpg",
                price: "250"
            },
            {
                title: { mk: "Blue Frog", en: "Blue Frog" },
                description: { mk: "Вотка, сино курaсо, лимонов сок, шеќерен сируп", en: "Vodka, blue curaçao, lemon juice, sugar syrup" },
                image: "img/alcoholicDrinks/coctails/blueFrog-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Tequila Sunrise", en: "Tequila Sunrise" },
                description: { mk: "Текила, портокалов сок, гренадин", en: "Tequila, orange juice, grenadine" },
                image: "img/alcoholicDrinks/coctails/ts-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Sex on the Beach", en: "Sex on the Beach" },
                description: { mk: "Вотка, ликер од праска, портокалов и сок од брусница", en: "Vodka, peach schnapps, orange juice, cranberry juice" },
                image: "img/alcoholicDrinks/coctails/ts-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Mojito", en: "Mojito" },
                description: { mk: "Белен ром, шеќер, лимета, нане, сода вода", en: "White rum, sugar, lime, mint, soda water" },
                image: "img/alcoholicDrinks/coctails/mojito-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Negroni", en: "Negroni" },
                description: { mk: "Џин, Кампари, слатко вермут", en: "Gin, Campari, sweet vermouth" },
                image: "img/alcoholicDrinks/coctails/negroni-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Martini", en: "Martini" },
                description: { mk: "Џин и сув вермут, гарнирано со маслинка или кора од лимон", en: "Gin and dry vermouth, garnished with olive or lemon twist" },
                image: "img/alcoholicDrinks/coctails/martini-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Manhattan", en: "Manhattan" },
                description: { mk: "Виски, слатко вермут, битери", en: "Whiskey, sweet vermouth, bitters" },
                image: "img/alcoholicDrinks/coctails/manhattan-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Whiskey Sour", en: "Whiskey Sour" },
                description: { mk: "Виски, лимонов сок, шеќер, белка од јајце (опционално)", en: "Whiskey, lemon juice, sugar, egg white (optional)" },
                image: "img/alcoholicDrinks/coctails/ts-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Paloma", en: "Paloma" },
                description: { mk: "Текила, сода од грејпфрут, лимонов сок, сол", en: "Tequila, grapefruit soda, lime juice, salt" },
                image: "img/alcoholicDrinks/coctails/paloma-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Pornstar Martini", en: "Pornstar Martini" },
                description: { mk: "Ванила вотка, ликер од пасионско овошје, пире од пасионско овошје, просеко", en: "Vanilla vodka, passion fruit liqueur, passion fruit puree, prosecco" },
                image: "img/alcoholicDrinks/coctails/pornstarM-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Caipiroska", en: "Caipiroska" },
                description: { mk: "Вотка, лимета, шеќер", en: "Vodka, lime, sugar" },
                image: "img/alcoholicDrinks/coctails/Caipiroska-min.jpg",
                price: "250"
            }
        ],
        wines: [
            {
                title: { mk: "Александрија", en: "Alexandria" },
                description: { mk: "0.187", en: "0.187" },
                price: "250"
            },
            {
                title: { mk: "Александрија Розе", en: "Alexandria Rose" },
                description: { mk: "0.187", en: "0.187" },
                price: "250"
            },
            {
                title: { mk: "Александрија Црвено", en: "Alexandria Red" },
                description: { mk: "0.187", en: "0.187" },
                price: "250"
            },
            {
                title: { mk: "Александрија Куве", en: "Alexandria Cuve" },
                description: { mk: "0.187", en: "0.187" },
                price: "320"
            },
            {
                title: { mk: "Александрија Розе куве", en: "Alexandria Rose Cuve" },
                description: { mk: "0.187", en: "0.187" },
                price: "320"
            },
            {
                title: { mk: "Александрија Црвено куве", en: "Alexandria Red Cuve" },
                description: { mk: "0.187", en: "0.187" },
                price: "320"
            },
            {
                title: { mk: "Темјаника", en: "Temjanika" },
                description: { mk: "0.187", en: "0.187" },
                price: "250"
            },
            {
                title: { mk: "Траминец", en: "Traminec" },
                description: { mk: "0.187", en: "0.187" },
                price: "250"
            },
        ],
        beers: [
            {
                title: { mk: "Туборг", en: "Tuborg" },
                description: { mk: "0.33", en: "0.33" },
                price: "190"
            },
            {
                title: { mk: "Карлсберг", en: "Karlsberg" },
                description: { mk: "0.33", en: "0.33" },
                price: "210"
            },
            {
                title: { mk: "Златен Даб", en: "Zlaten Dab" },
                description: { mk: "0.33", en: "0.33" },
                price: "160"
            },
            {
                title: { mk: "Златен Даб Амбер", en: "Zlaten Dab Amber" },
                description: { mk: "0.33", en: "0.33" },
                price: "160"
            },
            {
                title: { mk: "Златен Даб Темно", en: "Zlaten Dab Dark" },
                description: { mk: "0.33", en: "0.33" },
                price: "160"
            },
            {
                title: { mk: "Корона", en: "Corona" },
                description: { mk: "0.33", en: "0.33" },
                price: "220"
            },
        ],
        whiskey: [
            {
                title: { mk: "Ballantines", en: "Ballantines" },
                price: "220"
            },
            {
                title: { mk: "Chivas", en: "Chivas" },
                price: "300"
            },
            {
                title: { mk: "Bushmills", en: "Bushmills" },
                price: "180"
            },
            {
                title: { mk: "Famous Grouse", en: "Famous Grouse" },
                price: "180"
            },
            {
                title: { mk: "Jim Beam", en: "Jim Beam" },
                price: "200"
            },
            {
                title: { mk: "Johnnie Walker Red", en: "Johnnie Walker Red" },
                price: "200"
            },
            {
                title: { mk: "Johnnie Walker Black", en: "Johnnie Walker Black" },
                price: "300"
            },
            {
                title: { mk: "Jack Daniels", en: "Jack Daniels" },
                price: "270"
            },
            {
                title: { mk: "Jack Daniels Apple", en: "Jack Daniels Apple" },
                price: "290"
            },
            {
                title: { mk: "Jameson", en: "Jameson" },
                price: "220"
            },
        ],
        vodka: [
            {
                title: { mk: "Absolut", en: "Absolut" },
                price: "180"
            },
            {
                title: { mk: "Smirnoff", en: "Smirnoff" },
                price: "180"
            },
            {
                title: { mk: "Finlandia", en: "Finlandia" },
                price: "150"
            },
            {
                title: { mk: "Gray Goose", en: "Gray Goose" },
                price: "400"
            },
            {
                title: { mk: "Fjodor", en: "Fjodor" },
                price: "120"
            },

        ],
        gin: [
            {
                title: { mk: "Bombay", en: "Bombay" },
                price: "250"
            },
            {
                title: { mk: "Gordons", en: "Gordons" },
                price: "180"
            },
            {
                title: { mk: "Gordons Pink", en: "Gordons Pink" },
                price: "200"
            },
            {
                title: { mk: "Hendrick's", en: "Hendrick's" },
                price: "350"
            },
            {
                title: { mk: "Fjodor", en: "Fjodor" },
                price: "120"
            },

        ],
        vermouth: [
            {
                title: { mk: "Martini Bianco", en: "Martini Bianco" },
                price: "120"
            },
            {
                title: { mk: "Martini Rosso", en: "Martini Rosso" },
                price: "120"
            },
            {
                title: { mk: "Martini Fiero", en: "Martini Fiero" },
                price: "150"
            },
        ],
        rum: [
            {
                title: { mk: "Bacardi White", en: "Bacardi White" },
                price: "180"
            },
            {
                title: { mk: "Havana", en: "Havana" },
                price: "200"
            },
            {
                title: { mk: "Old Pascas", en: "Old Pascas" },
                price: "150"
            },
            {
                title: { mk: "Captain Morgan", en:  "Captain Morgan" },
                price: "200"
            },
        ],
        liquor: [
            {
                title: { mk: "Kahlua", en: "Kahlua" },
                price: "200"
            },
            {
                title: { mk: "Baileys ", en: "Baileys " },
                price: "220"
            },
            {
                title: { mk: "Amareto", en: "Amareto" },
                price: "***"
            },
            {
                title: { mk: "Aperol", en:  "Aperol" },
                price: "250"
            },
            {
                title: { mk: "Campari", en:  "Campari" },
                price: "220"
            },
            {
                title: { mk: "Jegermeister", en:  "Jegermeister" },
                price: "200"
            },
            {
                title: { mk: "Pelinkovac", en:  "Pelinkovac" },
                price: "180"
            },
        ],
        tequila: [
            {
                title: { mk: "Mendoza White", en: "Mendoza White" },
                price: "120"
            },
            {
                title: { mk: "Mendoza Yellow", en: "Mendoza Yellow" },
                price: "220"
            },

        ],
        champagne: [
            {
                title: { mk: "Prosecco", en: "Prosecco" },
                price: "***"
            },
        ],
        brandy: [
            {
                title: { mk: "Napoleon", en: "Napoleon" },
                price: "120"
            },
            {
                title: { mk: "Stock", en: "Stock" },
                price: "180"
            },
        ]
    },
    nonAlcoholic: {
        softDrinks: [
            {
                title: {mk: "Цеден микс", en: "Juice mix"},
                image: "img/nonAlcoholic/juices/mix.jpg",
                price: "200"
            },
            {
                title: {mk: "Цеден портокал", en: "Orange juice - squeezed"},
                image: "img/nonAlcoholic/juices/orangeJuice.jpg",
                price: "170"
            },
            {
                title: {mk: "Цеден лимон", en: "Orange lemon - squeezed"},
                image: "img/nonAlcoholic/juices/lemonJuice.jpg",
                price: "150"
            },
            {
                title: {mk: "Цедевита", en: "Cedevita"},
                image: "img/nonAlcoholic/juices/cedevita.jpg",
                price: "80"
            },
            {
                title: {mk: "Sanpelegrino ", en: "Sanpelegrino"},
                description:{mk:"лимон, грозје, калинка, портокал",en:"lemon, grapes, orange, pomegranate"},
                image: "img/nonAlcoholic/juices/sanpelegrino-min.jpg",
                price: "160"
            },
            {
                title: {mk: "Књаз Милош ", en: "Knjaz Milos"},
                description:{mk:"лимон, грозје, калинка, портокал",en:"lemon, grapes, orange, pomegranate"},
                image: "img/nonAlcoholic/juices/KM.jpg",
                price: "80"
            },
           {
                title: {mk: "Аквавива ", en: "Aquaviva"},
                description:{mk:"лимон, грозје, калинка, портокал",en:"lemon, grapes, orange, pomegranate"},
                image: "img/nonAlcoholic/juices/voda.jpg",
                price: "80"
            },

        ],
        fizzyDrinks: [

            {
                title: {mk: "Pepsi", en: "Pepsi"},
                image:"img/nonAlcoholic/fizzy/pepsi-min.jpg",
                price: "100"
            },
            {
                title: {mk: "Pepsi Mix", en: "Pepsi Mix"},
                image:"img/nonAlcoholic/fizzy/pepsi-min.jpg",
                price: "100"
            },
            {
                title: {mk: "Mirinda", en: "Mirinda"},
                description:{mk:"лимон, танџарина",en:"lemon, tangerine"},
                image:"img/nonAlcoholic/fizzy/mirinda.jpg",
                price: "100"
            },
            {
                title: {mk: "Lipton", en: "Lipton"},
                description:{mk:"лимон, праска",en:"lemon, peach"},
                image:"img/nonAlcoholic/fizzy/lipton.jpg",
                price: "100"
            },
            {
                title: {mk: "Schweppes ", en: "Schweppes"},
                description:{mk:"bitter, tonic",en:"bitter, tonic"},
                image:"img/nonAlcoholic/fizzy/schwepped-min.jpg",
                price: "120"
            },
            {
                title: {mk: "Red Bull", en: "Red bull"},
                image:"img/nonAlcoholic/fizzy/redBull.jpg",
                price: "220"
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
        showSubcategories(["cocktails", "wines", "beers","vodka","whiskey","gin","rum","vermouth","tequila","liquor","champagne","brandy"],"alcoholic");
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
            wines: "Вино",
            beers: "Пиво",
            vodka:"Вотка",
            whiskey:"Виски",
            gin:"Џин",
            rum:"Рум",
            vermouth:"Вермут",
            tequila:"Текила",
            liquor:"Ликер",
            champagne:"Шампањ",
            brandy: "Коњак",
            softDrinks: "Негазирани пијалоци",
            fizzyDrinks: "Газирани пијалоци"
        },
        en: {
            cocktails: "Cocktails",
            wines: "Wines",
            beers: "Beers",
            vodka:"Vodka",
            whiskey:"Whiskey",
            gin:"Gin",
            rum:"Rum",
            vermouth:"Vermouth",
            tequila:"Tequila",
            liquor:"liquor",
            champagne:"champagne",
            brandy:"brandy",
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
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const subcategoryImages = {
        cocktails: "img/alcoholicDrinks/coctails/coctail.jpg",
        wines: "img/alcoholicDrinks/wines/wine.png",
        beers: "img/alcoholicDrinks/beers/beer.png",
        vodka:"img/alcoholicDrinks/vodka/vodka.jpg",
        whiskey:"img/alcoholicDrinks/whiskey/whiskey.jpg",
        vermouth:"img/alcoholicDrinks/vermouth/vermouth.jpg",
        tequila:"img/alcoholicDrinks/tequila/tequila.jpg",
        rum:"img/alcoholicDrinks/rum/rum.jpg",
        liquor:"img/alcoholicDrinks/liquor/liquor.jpg",
        gin:"img/alcoholicDrinks/gin/ginNew.jpg",
        champagne:"img/alcoholicDrinks/champagne/champagne.jpg",
        brandy:"img/alcoholicDrinks/brandy/brandy.jpg",
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

const noImageSubcategories = [
    "vodka", "whiskey", "gin", "tequila", "champagne",
    "brandy", "liquor", "beers", "wines","rum","vermouth"
];

function showProductsOfSubcategory(subcategory) {
    currentSubcategory = subcategory;
    currentView = "subcategory";

    const sourceCategory = ["cocktails", "wines", "beers","vodka","whiskey","gin","rum","vermouth","tequila","liquor","champagne","brandy"].includes(subcategory)
        ? "alcoholic"
        : "nonAlcoholic";


    const categoryView = document.getElementById("categoryView");
    categoryView.innerHTML = "";
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const items = products[sourceCategory][subcategory];


    if (noImageSubcategories.includes(subcategory)) {
        showSimpleList(subcategory);
    } else {
        renderProducts(items);
    }
}

function showSimpleList(subcategory) {
    currentSubcategory = subcategory;
    currentView = "subcategory";

    const categoryView = document.getElementById("categoryView");
    categoryView.innerHTML = ""; // чисти
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const items = products.alcoholic[subcategory];

    items.forEach(item => {
        const div = document.createElement("div");
        div.className = "wine-item";  // или некоја друга за стил

        div.innerHTML = `
            <div class="wine-title">${item.title[language]}</div>
            ${item.description ? `<div class="wine-description">${item.description[language]}</div>` : ""}
            <div class="wine-price">${item.price} ден.</div>
        `;

        categoryView.appendChild(div);
    });
}


function renderProducts(items) {
    const categoryView = document.getElementById("categoryView");
    categoryView.innerHTML = "";
    window.scrollTo({ top: 0, behavior: 'smooth' });

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

        if (["cocktails", "wines", "beers","vodka","whiskey","gin","rum","vermouth","tequila","liquor","champagne","brandy"].includes(currentSubcategory)) {
            currentCategory = "alcoholic";
            subs = ["cocktails", "wines", "beers","vodka","whiskey","gin","rum","vermouth","tequila","liquor","champagne","brandy"];
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
