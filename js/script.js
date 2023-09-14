document.addEventListener("DOMContentLoaded", function () {
    const squareForm = document.getElementById("squareForm");
    const sideLength = document.getElementById("sideLength");
    const calc = document.getElementById("calc");
    const result = document.getElementById("result");
    const perimeterResult = document.getElementById("perimeterResult");
    const areaResult = document.getElementById("areaResult");
    const option = document.getElementById("option");

    squareForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const side = parseFloat(sideLength.value);
        const checkedOption = document.querySelector("input[name='operation']:checked").value;

        if (isNaN(side)) {
            if (checkedOption === "perimeter") {
                const perimeter = 4 * side;
                perimeterResult.textContent = perimeter.toFixed(2);
                areaResult.textContent = "";
            }
            else if (checkedOption === "area") {
                const area = side * side;
                areaResult.textContent = area.toFixed(2);
                perimeterResult.textContent = "";
            }

            result.style.display = "block";
        }
    });

    option.addEventListener("change", function (){
        const checkedOption = document.querySelector("input[name='operation']:checked").value;
        if (checkedOption === "perimeter"){
            perimeterResult.style.display = "block";
            areaResult.style.display = "none";
        }
        else if (checkedOption === "area"){
            areaResult.style.display = "block";
            perimeterResult.style.display = "none";
        }
    })
})