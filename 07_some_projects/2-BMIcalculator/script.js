const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();         //prevents submission to server
    
    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const result = document.querySelector('#result_val');

    if (isNaN(height) || height <= 0) {  //if height='' on parseInt it gives NaN
        // result.appendChild(document.createTextNode(`Invalid height: ${height}`)) //cause have to empty it also
        result.textContent = `Invalid height: ${height}`;
        result.style.color='red';
        
    } else if (weight<=0 || isNaN(weight)) {
        // result.appendChild(document.createTextNode(`Invalid weight: ${weight}`))
        result.textContent = `Invalid weight: ${weight}`;
        result.style.color='red';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        
        if (bmi<18.6) {
            result.textContent = `Under Weight (BMI: ${bmi})`;
            result.style.color='yellow';
        } else if (bmi>24.9) {
            result.textContent = `Over Weight (BMI: ${bmi})`;
            result.style.color='yellow';
        } else {
            result.textContent = `Normal Weight (BMI: ${bmi})`;
            result.style.color='lime';
        }
        
    }
})

const reset = document.querySelector('#rst');
reset.addEventListener('click', function(e) {
    document.querySelector('#result_val').textContent = '';
})
