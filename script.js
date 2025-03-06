function generateFlavor() {
    let flavorOutput = document.getElementById("flavorOutput");
    let body = document.body;


    let flavor1 = document.getElementById("flavorSelect1").value;
    let flavor2 = document.getElementById("flavorSelect2").value;


    let flavorCombinations = {
        "cheesecake-chocolate": ["Chocolate Cheesecake Swirl", "images/chocolate_vanilla.jpg", "/core-2-interaction-project-2/assets/chocolate-cheesecake.png"],
        "chocolate-sorbet": ["Chocolate Shortcake Swirl", "images/strawberry_mint.jpg", "/core-2-interaction-project-2/assets/chocolate-sorbet.png"],
        "chip-chocolate": ["EXTRA Chocolate Chocolate Chip Swirl", "images/caramel_chocolate.jpg", "/core-2-interaction-project-2/assets/chocolate-chip.png"],
        "chocolate-white": ["CHOCOLATE BOMB!", "images/caramel_chocolate.jpg", "/core-2-interaction-project-2/assets/chocolate-white.png"],
        "chocolate-hazelnut": ["Chocolate Hazelnut Swirl", "images/strawberry_caramel.jpg", "/core-2-interaction-project-2/assets/chocolate-hazel.png"],
        "cheesecake-vanilla": ["Vanilla Cheesecake Swirl", "images/chocolate_vanilla.jpg", "/core-2-interaction-project-2/assets/vanilla-cheesecake.png"],
        "sorbet-vanilla": ["Vanilla Shortcake Swirl", "images/strawberry_mint.jpg", "/core-2-interaction-project-2/assets/vanilla-sorbet.png"],
        "chip-vanilla": ["Vanilla Chocolate Chip Swirl", "images/caramel_chocolate.jpg", "/core-2-interaction-project-2/assets/vanilla-chip.png"],
        "vanilla-white": ["Sorry but this is just a White Chocolate Swirl (try harder)", "images/vanilla_mint.jpg", "/core-2-interaction-project-2/assets/vanilla-white.png"],
        "hazelnut-vanilla": ["Vanilla Hazelnut Swirl", "images/strawberry_caramel.jpg", "/core-2-interaction-project-2/assets/vanilla-hazelnut.png"],
        "cheesecake-strawberry": ["Strawberry Cheesecake Swirl", "images/chocolate_vanilla.jpg", "/core-2-interaction-project-2/assets/strawberry-cheescake.png"],
        "sorbet-strawberry": ["FRESH STRAWBERRY SORBET (the best)", "images/chocolate_vanilla.jpg", "/core-2-interaction-project-2/assets/strawberry-sorbet.png"],
        "chip-strawberry": ["Strawberry Chocolate Chip Swirl", "images/caramel_chocolate.jpg", "/core-2-interaction-project-2/assets/strawberry-chip.png"],
        "strawberry-white": ["White Chocolate Strawberry Swirl", "images/vanilla_mint.jpg", "/core-2-interaction-project-2/assets/strawberyy-white.png"],
        "hazelnut-strawberry": ["No sorry this is a crime", "images/strawberry_caramel.jpg", "images/bg_strawberry_caramel.jpg"],
        "cheesecake-mint": ["Mint Cheesecake Swirl (pls go with another one) ","images/strawberry_caramel.jpg", "/core-2-interaction-project-2/assets/mint-cheesecake.png"],
        "mint-sorbet": ["Mint Shortcake Swirl", "images/strawberry_mint.jpg", "images/bg_strawberry_mint.jpg"],
        "chip-mint": ["Mint Chocolate Chip Swirl", "images/caramel_chocolate.jpg", "/core-2-interaction-project-2/assets/mint-chip.png"],
        "mint-white": ["Mint & White Chocolate Swirl", "images/vanilla_mint.jpg", "/core-2-interaction-project-2/assets/mint-whute.png"],
        "hazelnut-mint": ["No sorry this is a crime", "images/strawberry_caramel.jpg", "images/bg_strawberry_caramel.jpg"],
        "caramel-cheesecake": ["Caramel Cheesecake Swirl", "images/chocolate_vanilla.jpg", "/core-2-interaction-project-2/assets/caramel-cheesecake.png"],
        "caramel-sorbet": ["Caramel Sorbet Swirl", "images/strawberry_mint.jpg", "/core-2-interaction-project-2/assets/caramel-sorbet.png"],
        "caramel-chip": ["Caramel Chocolate Chip Swirl", "images/caramel_chocolate.jpg", "/core-2-interaction-project-2/assets/caramel-chip.png"],
        "caramel-white": ["Caramel White Chocolate Swirl", "images/vanilla_mint.jpg", "/core-2-interaction-project-2/assets/caramel-white.png"],
        "caramel-hazelnut": ["Caramel Hazelnut Swirl but no image cuz its not pleasant", "images/strawberry_caramel.jpg", "images/bg_strawberry_caramel.jpg"]
    };
    
    const comboKey = [flavor1, flavor2].sort().join("-");
    

    let finalFlavor = "Mystery Flavor! Try again!";
    let bgSrc = "";

    if (flavorCombinations[comboKey]) {
        finalFlavor = flavorCombinations[comboKey][0];
        bgSrc = flavorCombinations[comboKey][2];
    }


    flavorOutput.innerText = finalFlavor;
    

    let bgElement = document.createElement("div");
    bgElement.style.position = "fixed";
    bgElement.style.top = "0";
    bgElement.style.left = "0";
    bgElement.style.width = "100%";
    bgElement.style.height = "100%";
    bgElement.style.backgroundImage = `url('${bgSrc}')`;
    bgElement.style.backgroundSize = "cover";
    bgElement.style.backgroundPosition = "center center";
    bgElement.style.opacity = "0";
    bgElement.style.zIndex = "-1";
    bgElement.style.animation = "fadeInBackground 1s ease-in-out forwards";
    
    document.body.appendChild(bgElement);
}