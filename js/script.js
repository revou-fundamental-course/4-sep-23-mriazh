document.addEventListener('DOMContentLoaded', function () {
    const squareForm = document.getElementById('squareForm');
    const sideLengthInput = document.getElementById('sideLength');
    const calculateButton = document.getElementById('calculateButton');
    const resultSection = document.getElementById('resultSection');
    const areaResult = document.getElementById('areaResult');
    const perimeterResult = document.getElementById('perimeterResult');
    const menuSection = document.getElementById('menuSection');

    squareForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const sideLength = parseFloat(sideLengthInput.value);
        const selectedOperation = document.querySelector('input[name="operation"]:checked').value;

        if (!isNaN(sideLength)) {
            if (selectedOperation === 'area') {
                const area = sideLength * sideLength;
                areaResult.textContent = area.toFixed(2);
                perimeterResult.textContent = ''; // Clear the perimeter result
            } else if (selectedOperation === 'perimeter') {
                const perimeter = 4 * sideLength;
                perimeterResult.textContent = perimeter.toFixed(2);
                areaResult.textContent = ''; // Clear the area result
            }

            resultSection.style.display = 'block';
        }
    });

    // Show/hide the appropriate result based on the selected operation
    menuSection.addEventListener('change', function () {
        const selectedOperation = document.querySelector('input[name="operation"]:checked').value;
        if (selectedOperation === 'area') {
            areaResult.style.display = 'block';
            perimeterResult.style.display = 'none';
        } else if (selectedOperation === 'perimeter') {
            areaResult.style.display = 'none';
            perimeterResult.style.display = 'block';
        }
    });
});