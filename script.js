function generateFlavor() {
    const imgElement = document.getElementById("displayedImage");
    const flavorOutput = document.getElementById("flavorOutput");


    const input1_letter = document.getElementById("charInput1").value.toUpperCase();
    const input2_letter = document.getElementById("charInput2").value.toUpperCase();

    const flavors = {
        "A": "Apple Pie",
        "B": "Banana Split",
        "C": "Chocolate Fudge",
        "D": "Dark Chocolate",
        "E": "Espresso Crunch",
        "F": "French Vanilla",
        "G": "Ginger Snap",
        "H": "Honey Lavender",
        "I": "Irish Cream",
        "J": "Jelly",
        "K": "Kiwi",
        "L": "Lemon",
        "M": "Mint Chocolate Chip",
        "N": "Nutella Swirl",
        "O": "Orange Sherbet",
        "P": "Peanut Butter Cup",
        "Q": "Quince Almond",
        "R": "Raspberry Ripple",
        "S": "Strawberry Shortcake",
        "T": "Toffee Crunch",
        "U": "Ube Delight",
        "V": "Vanilla Bean",
        "W": "Walnut Caramel",
        "X": "Xtra Strawberry Shortcake",
        "Y": "Yogurt Berry",
        "Z": "Zesty Lemon Lime"
    };

    // Default values if combination is not found
    let flavor1 = flavors[input1_letter] || "Mystery";
    let flavor2 = flavors[input2_letter] || "Surprise";
    let finalFlavor = `${flavor1} & ${flavor2}`;

    // Placeholder image
    let imgSrc = "https://via.placeholder.com/200?text=Delicious+Ice+Cream";

    // Display results
    flavorOutput.innerText = finalFlavor;
    imgElement.src = imgSrc;
    imgElement.style.display = "block";
}