
const dictionary={
    mk:{
        titleCoffee:"Кафе",
        titleAlcoholic:"Алкохолни",
        titleNonAlcoholic:"Без алкохолни",
        titleProteins:"Протеини",
        titleAppetizers:"Апетисани"
    },
    en:{
        titleCoffee:"Coffee",
        titleAlcoholic:"Alcoholic",
        titleNonAlcoholic:"Non Alcoholic",
        titleProteins:"Proteins",
        titleAppetizers:"Appetizers"
    }
}
const products={
    coffee:[
        {
            title:{mk:"Еспресо", en:"Espresso"},
            image:"img/coffee/espressoNew.png",
            price:"80"
        },
        {
            title:{mk:"Еспресо Безкофеинско", en:"Espresso Decaf"},
            image:"img/coffee/espressoNew.png",
            price:"80"
        },
        {
            title:{mk:"Мало Макијато", en:"Small Macchiato"},
            image:"img/coffee/espMach.png",
            price:"70"
        },
        {
            title:{mk:"Макијато", en:"Macchiato"},
            image:"img/coffee/machiatto.png",
            price:"100"
        },
        {
            title:{mk:"Макијато Безкофеинско", en:"Macchiato Decaf"},
            image:"img/coffee/machiatto.png",
            price:"100"
        },
        {
            title:{mk:"Капучино", en:"Cappuccino"},
            image:"img/coffee/cappucinoNew.png",
            price:"100"
        },
        {
            title:{mk:"Капучино Безкофеинско", en:"Cappuccino Decaf"},
            image:"img/coffee/cappucinoNew.png",
            price:"100"
        },
        {
            title:{mk:"Лате", en:"Latte"},
            image:"img/coffee/latteTry.jpg",
            price:"120"
        },
        {
            title:{mk:"Фредо Еспресо", en:"Fredo Espresso"},
            image:"img/coffee/freddoEspressoNew1.png",
            price:"100"
        },
        {
            title:{mk:"Фредо Капучино", en:"Fredo Cappuccino"},
            image:"img/coffee/freddoCappuccinoNew.jpg",
            price:"130"
        },
        {
            title:{mk:"Нескафе", en:"Nescafe"},
            image:"img/coffee/nescafe.png",
            price:"110"
        },
        {
            title:{mk:"Нескафе Шејк", en:"Nescafe Shake"},
            image:"img/coffee/nescafe.png",
            price:"120"
        },
        {
            title:{mk:"Топло Чоколадо", en:"Hot Chocolate"},
            image:"img/coffee/hotChocolate.jpg",
            price:"100"
        },
        {
            title:{mk:"Топло Чоколадо Плазма", en:"Hot Chocolate Plazma"},
            image:"img/coffee/hotChocolate.jpg",
            price:"120"
        },
        {
            title:{mk:"Салеп", en:"Salep"},
            image:"img/coffee/salep.jpg",
            price:"70"
        },
        {
            title:{mk:"Чај", en:"Tea"},
            image:"img/coffee/tea.jpg",
            price:"80"
        },
        {
            title:{mk:"Чај со Рум", en:"Rum Tea"},
            image:"img/coffee/teaRum.jpg",
            price:"100/120"
        },
    ],
    alcoholic: {
        cocktails: [
            {
                title: { mk: "Amaretto Sour", en: "Amaretto Sour" },
                description: { mk:"Бурбон, Амарето, Сок од лимон", en: "Bourbon, Amaretto, Lemon juice" },
                image: "img/alcoholicDrinks/coctails/amaretoSour.jpg",
                price: "260"
            },
            {
                title: { mk: "Aperol Spritz", en: "Aperol Spritz" },
                description: { mk: "Aperol, Prosecco, портокал", en: "Aperol, Prosecco, Orange" },
                image: "img/alcoholicDrinks/coctails/aperolSpritz.jpg",
                price: "280"
            },
            {
                title: { mk: "B52", en: "B52" },
                description: { mk:"Ликер од кафе, Бејлис, Трипл сек", en: "Coffee liqueur, Baileys, Triple Sec" },
                image: "img/alcoholicDrinks/coctails/B52Shot.jpg",
                price: "260"
            },
            {
                title: { mk: "Bahama Mama", en: "Bahama Mama" },
                description: { mk:"Рум, Гренадин, сок од ананас, монин од кокос", en: "Rum, Grenadine, pineapple juice, coconut monin" },
                image: "img/alcoholicDrinks/coctails/bahamaMama.jpg",
                price: "300"
            },
            {
                title: { mk: "Blue Frog", en: "Blue Frog" },
                description: { mk: "Вотка, Рум, Џин, Текила, Трипл сек, Ликер, Ред Бул, портокал", en: "Vodka, Rum, Gin, Tequila, Triple sec, Liquor, Red Bull, orange" },
                image: "img/alcoholicDrinks/coctails/blueFrogNew.jpg",
                price: "250"
            },
            {
                title: { mk: "Bramble", en: "Bramble" },
                description: { mk: "Џин, лимон, Монин од боровинка", en: "Gin, lemon juice, blackberry monin" },
                image: "img/alcoholicDrinks/coctails/brambleNew.jpg",
                price: "250"
            },
            {
                title: { mk: "Caipiroska", en: "Caipiroska" },
                description: { mk: "Вотка, лимета, шеќер", en: "Vodka, lime, sugar" },
                image: "img/alcoholicDrinks/coctails/Caipiroska-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Cosmopolitan", en: "Cosmopolitan" },
                description: { mk: "Вотка, Ликер, сок од брусница ", en: "Vodka, cranberry juice, liqueur" },
                image: "img/alcoholicDrinks/coctails/cosmopolitan-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Cuba Libre", en: "Cuba Libre" },
                description: { mk: "Рум, лимон, кока кола", en: "Rum, lemon, coca cola" },
                image: "img/alcoholicDrinks/coctails/cubaLibreNew.png",
                price: "260"
            },
            {
                title: { mk: "Daiquiri", en: "Daiquiri" },
                description: { mk:"Рум, Сок од лимета, Шеќер", en: "Rum, lime juice, sugae" },
                image: "img/alcoholicDrinks/coctails/daiquiri.jpg",
                price: "300"
            },
            {
                title: { mk: "Espresso Martini", en: "Espresso Martini" },
                description: { mk:"Ликер од кафе, Вотка, Еспресо", en: "Coffee liqueur, Vodka, Espresso" },
                image: "img/alcoholicDrinks/coctails/espMartini.jpg",
                price: "260"
            },
            {
                title: { mk: "Hugo Spritz", en: "Hugo Spritz" },
                description: { mk:"Просеко, сируп од бозел, газирана вода, нане", en: "Prosecco, elderflower syrup, sparkling water, mint " },
                image: "img/alcoholicDrinks/coctails/hugoNew.png",
                price: "260"
            },
            {
                title: { mk: "Jungle Bird", en: "Jungle Bird" },
                description: { mk:"Кампари, Рум, сок од ананас, лимета, шеќер ", en: "Rum, Campari, Lime, pineapple juice, sugar" },
                image: "img/alcoholicDrinks/coctails/jungleBirdNew.jpg",
                price: "300"
            },
            {
                title: { mk: "Limoncello Spritz", en: "Limoncello Spritz" },
                description: { mk:"Просеко, Лимончело, Лимон", en: "Prosecco, Limoncello, Lemon" },
                image: "img/alcoholicDrinks/coctails/limoncello.jpg",
                price: "260"
            },
            {
                title: { mk: "Long Island Iced Tea", en: "Long Island Iced Tea" },
                description: { mk: "Џин, Tрипл сек, Tекила, Рум, Вотка, Лајм, кока кола", en: "Gin, Triple sec, Tequila, Rum, Vodka, lime, coca cola" },
                image: "img/alcoholicDrinks/coctails/longIsland.jpg",
                price: "300"
            },
            {
                title: { mk: "Mai Tai", en: "Mai Tai" },
                description: { mk: "Рум, Темен рум, Трипл Сек, Амарето, Лимон, ", en: "Rum, Dark Rum, Triple Sec, Amaretto, Lemon" },
                image: "img/alcoholicDrinks/coctails/maiTaiNew.jpg",
                price: "270"
            },
            {
                title: { mk: "Manhattan", en: "Manhattan" },
                description: { mk: "Виски, Вемрут, битер", en: "Whiskey, Vermouth, bitters" },
                image: "img/alcoholicDrinks/coctails/manhattan-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Margarita", en: "Margarita" },
                description: { mk:"Текила, Трипл сек, Лимон", en: "Tequila, Triple sec, Lemon" },
                image: "img/alcoholicDrinks/coctails/margarite.jpg",
                price: "260"
            },
            {
                title: { mk: "Martini", en: "Martini" },
                description: { mk: "Џин, Вермут, маслинки", en: "Gin, Vermouth, olives" },
                image: "img/alcoholicDrinks/coctails/martini-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Mimosa", en: "Mimosa" },
                description: { mk:"Просеко, Сок од портокал", en: "Prosecco, Orange juice" },
                image: "img/alcoholicDrinks/coctails/mimosaNew.jpg",
                price: "300"
            },
            {
                title: { mk: "Mojito", en: "Mojito" },
                description: { mk: "Бел рум, шеќер, лимета, нане, газирана вода", en: "White rum, sugar, lime, mint, sparkling water" },
                image: "img/alcoholicDrinks/coctails/mojito-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Negroni", en: "Negroni" },
                description: { mk: "Џин, Кампари, Вермут", en: "Gin, Campari, Sweet vermouth" },
                image: "img/alcoholicDrinks/coctails/negroni-min.jpg",
                price: "260"
            },
            {
                title: { mk: "Old Fashioned", en: "Old Fashioned" },
                description: { mk:"Бурбон, Портокал", en: "Bourbon, Orange" },
                image: "img/alcoholicDrinks/coctails/oldFashioned.jpg",
                price: "220"
            },
            {
                title: { mk: "Paloma", en: "Paloma" },
                description: { mk: "Текила, Сок од цитрон, Лимета, Сол", en: "Tequila, grapefruit soda, lime juice, salt" },
                image: "img/alcoholicDrinks/coctails/paloma-min.jpg",
                price: "250"
            },
            {
                title: { mk: "Pornstar Martini", en: "Pornstar Martini" },
                description: { mk: "Ванила вотка, Просеко, Монин од маракуја, Лимон", en: "Vanilla vodka, Prosecco, passion fruit monin, passion fruit puree, lemon " },
                image: "img/alcoholicDrinks/coctails/pornstarM-min.jpg",
                price: "300"
            },
            {
                title: { mk: "Tequila Sunrise", en: "Tequila Sunrise" },
                description: { mk: "Текила, портокал, гренадин", en: "Tequila, orange, grenadine" },
                image: "img/alcoholicDrinks/coctails/ts-min.jpg",
                price: "260"
            },
            {
                title: { mk: "Vodka Sour", en: "Vodka Sour" },
                description: { mk:"Вотка, Сок од лимон", en: "Vodka, Lemon juice" },
                image: "img/alcoholicDrinks/coctails/vodkaSourNew.jpg",
                price: "240"
            },
            {
                title: { mk: "Whiskey Sour", en: "Whiskey Sour" },
                description: { mk: "Виски, лимонов сок, шеќер, белка од јајце (опционално)", en: "Whiskey, lemon juice, sugar, egg white (optional)" },
                image: "img/alcoholicDrinks/coctails/whiskeySour.jpg",
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
                title: { mk: "Т'га за југ", en: "T'ga za jug" },
                description: { mk: "0.187", en: "0.187" },
                price: "250"
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
            {
                title: { mk: "Греено вино", en: "Warm wine" },
                price: "180"
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
                title: { mk: "Bushmills", en: "Bushmills" },
                price: "180"
            },
            {
                title: { mk: "Chivas", en: "Chivas" },
                price: "300"
            },
            {
                title: { mk: "Famous Grouse", en: "Famous Grouse" },
                price: "180"
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
            {
                title: { mk: "Jim Beam", en: "Jim Beam" },
                price: "200"
            },
            {
                title: { mk: "Johnnie Walker Black", en: "Johnnie Walker Black" },
                price: "300"
            },
            {
                title: { mk: "Johnnie Walker Red", en: "Johnnie Walker Red" },
                price: "200"
            },
        ],
        vodka: [
            {
                title: { mk: "Absolut", en: "Absolut" },
                price: "180"
            },
            {
                title: { mk: "Finlandia", en: "Finlandia" },
                price: "150"
            },
            {
                title: { mk: "Fjodor", en: "Fjodor" },
                price: "120"
            },
            {
                title: { mk: "Gray Goose", en: "Gray Goose" },
                price: "400"
            },
            {
                title: { mk: "Smirnoff", en: "Smirnoff" },
                price: "180"
            },

        ],
        gin:[
            {
                title: { mk: "Bombay", en: "Bombay" },
                price: "250"
            },
            {
                title: { mk: "Fjodor", en: "Fjodor" },
                price: "120"
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
            }
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
                title: { mk: "Captain Morgan", en:  "Captain Morgan" },
                price: "200"
            },
            {
                title: { mk: "Havana", en: "Havana" },
                price: "200"
            },
            {
                title: { mk: "Old Pascas", en: "Old Pascas" },
                price: "150"
            },

        ],
        liquor: [
            {
                title: { mk: "Amareto", en: "Amareto" },
                price: "***"
            },
            {
                title: { mk: "Aperol", en: "Aperol" },
                price: "250"
            },
            {
                title: { mk: "Baileys", en: "Baileys" },
                price: "220"
            },
            {
                title: { mk: "Campari", en: "Campari" },
                price: "220"
            },
            {
                title: { mk: "Jegermeister", en: "Jegermeister" },
                price: "200"
            },
            {
                title: { mk: "Kahlua", en: "Kahlua" },
                price: "200"
            },
            {
                title: { mk: "Pelinkovac", en: "Pelinkovac" },
                price: "180"
            }
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
                price: "1800"
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
            {
                title: { mk: "Хенеси", en: "Hennessy" },
                price: "300"
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
                title: {mk: "Lipton", en: "Lipton"},
                description:{mk:"лимон, зелен лимон, праска",en:"lemon, green lemon, peach"},
                image:"img/nonAlcoholic/fizzy/lipton.jpg",
                price: "100"
            },
            {
                title: {mk: "Цедевита", en: "Cedevita"},
                image: "img/nonAlcoholic/juices/cedevita.jpg",
                price: "80"
            },
            {
                title: {mk: "Сок од портокал", en: "Orange juice"},
                image: "img/nonAlcoholic/juices/orangeJuiceBravo.png",
                price: "80"
            },
            {
                title: {mk: "Сок од праска", en: "Peach juice"},
                image: "img/nonAlcoholic/juices/peachJuice.jpg",
                price: "80"
            },
            {
                title: {mk: "Сок од јаболко", en: "Apple juice"},
                image: "img/nonAlcoholic/juices/appleJuice.jpg",
                price: "80"
            },
            {
                title: {mk: "Сок од вишна", en: "Sour cherry juice"},
                image: "img/nonAlcoholic/juices/sourCherryJuice.jpg",
                price: "80"
            },
            {
                title: {mk: "Сок од јагода", en: "Strawberry juice"},
                image: "img/nonAlcoholic/juices/strawberryJuice.png",
                price: "80"
            },
            {
                title: {mk: "Књаз Милош", en: "Knjaz Milos"},
                description:{mk:"лимон, грозје, калинка, портокал",en:"lemon, grapes, orange, pomegranate"},
                image: "img/nonAlcoholic/juices/KM.jpg",
                price: "80"
            },
           {
                title: {mk: "Аквавива", en: "Aquaviva"},
                description:{mk:"лимон, грозје, калинка, портокал",en:"lemon, grapes, orange, pomegranate"},
                image: "img/nonAlcoholic/juices/voda.jpg",
                price: "80"
            },

        ],
        fizzyDrinks: [

            {
                title: {mk: "Pepsi", en: "Pepsi"},
                image:"img/nonAlcoholic/fizzy/pepsi.jpg",
                price: "100"
            },
            {
                title: {mk: "Pepsi Mix", en: "Pepsi Mix"},
                image:"img/nonAlcoholic/fizzy/pepsiMax.jpg",
                price: "100"
            },
            {
                title: {mk: "Mirinda", en: "Mirinda"},
                description:{mk:"лимон, танџарина",en:"lemon, tangerine"},
                image:"img/nonAlcoholic/fizzy/mirinda.jpg",
                price: "100"
            },

            {
                title: {mk: "Schweppes", en: "Schweppes"},
                description:{mk:"битер, тоник, танџарина",en:"bitter, tonic, tangerine"},
                image:"img/nonAlcoholic/fizzy/schwepped-min.jpg",
                price: "120"
            },
            {
                title: {mk: "Sanpelegrino", en: "Sanpelegrino"},
                description:{mk:"портокал, лимон, цитрон, калинка, праска, мандарина",en:"orange, lemon, grapefruit, pomegranate, peach, tangerine, "},
                image: "img/nonAlcoholic/juices/sanpelegrino-min.jpg",
                price: "160"
            },
            {
                title: {mk: "Газиран сок од портокал", en: "Soda orange juice"},
                image: "img/nonAlcoholic/fizzy/oranginaJuice.jpg",
                price: "80"
            },
            {
                title: {mk: "Газиран сок од црвен портокал ", en: "Soda red orange juice"},
                image: "img/nonAlcoholic/fizzy/oranginaRed.jpg",
                price: "80"
            },
            {
                title: {mk: "Red Bull", en: "Red bull"},
                image:"img/nonAlcoholic/fizzy/redBull.jpg",
                price: "220"
            },
        ]
    },
    proteins:[
        {
            title: {mk:"Чоколадо", en:"Chocolate flavour"},
            description:{mk:"вода, млеко",en:"water, milk"},
            price:"160/180"
        },
        {
            title: {mk:"Ванила", en:"Vanilla flavour"},
            description:{mk:"вода, млеко",en:"water, milk"},

            price:"150"
        },
        {
            title: {mk:"Јагода", en:"Strawberry flavour"},
            description:{mk:"вода, млеко",en:"water, milk"},

            price:"150"
        },
        {
            title: {mk:"Лешник", en:"Hazelnut flavour"},
            description:{mk:"вода, млеко",en:"water, milk"},

            price:"150"
        },
    ],
    appetizers:[
        {
            title: {mk:"Кикиритки", en:"Peanuts"},
            price:"150"
        },
        {
            title: {mk:"Маринирани кикиритки", en:"Marinated peanuts"},
            price:"150"
        },
        {
            title: {mk:"Индиски ореви", en:"Cashews"},
            price:"150"
        },
    ]

}
let currentCategory = null;
let currentSubcategory = null;
let currentView = "main";

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
    document.getElementById("titleProteins").textContent = i18n("titleProteins").toUpperCase();
    document.getElementById("titleAppetizers").textContent = i18n("titleAppetizers").toUpperCase();

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
    if (category === "proteins") {
        const items = products["proteins"];
        showSimpleList("proteins");
        return;
    }
    if (category === "appetizers") {
        const items = products["appetizers"];
        showSimpleList("appetizers");
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
            fizzyDrinks: "Газирани пијалоци",
            proteins:"Протеини",
            appetizers: "Апетисани"
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
            fizzyDrinks: "Fizzy Drinks",
            proteins:"Proteins",
            appetizers: "Appetizers"

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
        `

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
    "brandy", "liquor", "beers", "wines","rum","vermouth","proteins","appetizers"
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
    categoryView.innerHTML = "";
    window.scrollTo({ top: 0, behavior: 'smooth' });

    let items;

    if (subcategory === "proteins") {
        items = products.proteins;
    } else if(subcategory==="appetizers"){
        items=products.appetizers
    } else {
        items = products.alcoholic[subcategory];
    }

    items.forEach(item => {
        const div = document.createElement("div");
        div.className = "wine-item";

        div.innerHTML = `
            <div class="wine-title">${item.title[language]}</div>
            ${item.description ? `<div class="wine-description">${item.description[language]}</div>` : ""}
            <div class="wine-price">${item.price}</div>
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
        else if (currentSubcategory === "proteins" || currentSubcategory==="appetizers") {
            currentSubcategory = null;
            currentCategory = null;
            currentView = "main";
            showMain();
            return;
        }

        currentSubcategory = null;
        currentView = "category";
        showSubcategories(subs, currentCategory);
    } else if (currentView === "category") {
        showMain();
    }
};

changeLanguage(language);
