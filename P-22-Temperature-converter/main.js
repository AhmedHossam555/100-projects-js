const cel = document.querySelector(".cel");
const fah = document.querySelector(".fah");
const kel = document.querySelector(".kel");

function calcfah(event) {
    const currentvalue = +event.target.value;
    switch (event.target.name){
        case "celsius":
            fah.value = (currentvalue + 273.32).toFixed(2);
            kel.value = (currentvalue * 1.8 + 32).toFixed(2);
            break;
        case "fahrenheit":
            cel.value = ((currentvalue - 32) / 1.8).toFixed(2);
            kel.value = ((currentvalue - 32) / 1.8 + 273.32).toFixed(2);
            break;
        case "kelvin":
            cel.value = (currentvalue - 273.32).toFixed();
            fah.value = ((currentvalue - 273.32) * 1.8 + 32).toFixed();
            break;
        default:
            break;
    }
}
