function rad() {
    let r = eval(document.getElementById('p1').value);
        let result = Math.PI * r * r;
        document.getElementById('p2').value = result; // Display the result rounded to 2 decimal places
    }