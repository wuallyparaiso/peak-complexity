document.getElementById("bmiForm").addEventListener('submit',function(e){

    e.preventDefault();
    
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightFeet = parseInt(document.getElementById('height-feet').value);
    const heightInches = parseInt(document.getElementById('height-inches').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if(gender && age && heightFeet && heightInches && weight) {
        /* convert to meter because there are two units in height
        and the formula for BMI is BMI = weight (kg) / [height (m]^2 */
        const heightInMeters = ((heightFeet * 12) + heightInches) * 0.0254;
        const bmi = weight / (heightInMeters * heightInMeters);
        const resultElement = document.getElementById('result');

        let category = '';
        if (bmi < 18.5){
            category = 'Underweight';
        }else if (bmi >= 18.5 && bmi < 24.9){
            category = 'Normal Weight';
        }else if (bmi > 24.9 && bmi < 29.9){
            category = 'Overweight';
        }else {
            category = 'Obese';
        }

        let resultMessage = 'Your BMI ' + bmi.toFixed(2) + '<br>';
        resultMessage += 'Category: ' + category;

        resultElement.innerHTML = resultMessage;
    }    
});