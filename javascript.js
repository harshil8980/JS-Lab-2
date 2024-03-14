// JavaScript Constructor for Toy Car
function ToyCar(brand, model, color, material, scale, dimensions, features, price, recommendedAge, packageContents) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.material = material;
    this.scale = scale;
    this.dimensions = dimensions;
    this.features = features;
    this.price = price;
    this.recommendedAge = recommendedAge;
    this.packageContents = packageContents;
}
// Create an instance of the toy car
var ferrariToyCar = new ToyCar("McLaren 720S", "720S w/Display Base", "Blue", "Window Box", "1/24 Scale", {length: 7.5, width: 3.25, height: 2.25}, ["Opening doors", "Detailed interior", "Rubber tires", "Movable wheels"], 22.58, "14+", ["McLaren 720S w/Display Base", "34850 Jada Toys Model Vehicle"]);
// JavaScript to interact with HTML
function displayToyCarDetails() {
    var detailsDiv = document.getElementById("toyCarDetails");
    detailsDiv.innerHTML = `
        <h2>Toy Car Details</h2>
        <img src="Mc.jpg" style="width:90vh">
        <p><strong>Brand:</strong> ${ferrariToyCar.brand}</p>
        <p><strong>Model:</strong> ${ferrariToyCar.model}</p>
        <p><strong>Color:</strong> ${ferrariToyCar.color}</p>
        <p><strong>Material:</strong> ${ferrariToyCar.material}</p>
        <p><strong>Scale:</strong> ${ferrariToyCar.scale}</p>
        <p><strong>Dimensions:</strong> ${ferrariToyCar.dimensions.length} inches (length), ${ferrariToyCar.dimensions.width} inches (width), ${ferrariToyCar.dimensions.height} inches (height)</p>
        <p><strong>Features:</strong> ${ferrariToyCar.features.join(", ")}</p>
        <p><strong>Price:</strong> $${ferrariToyCar.price}</p>
        <p><strong>Recommended Age:</strong> ${ferrariToyCar.recommendedAge}</p>
        <p><strong>Package Contents:</strong> ${ferrariToyCar.packageContents.join(", ")}</p>
    `;
}
