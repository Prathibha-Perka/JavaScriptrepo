function Average(){
    let a=eval(document.getElementById('p1').value)
    let b=eval(document.getElementById('p2').value)
    let c=eval(document.getElementById('p3').value)
    let d=eval(document.getElementById('p4').value)
    let e=eval(document.getElementById('p5').value)
    let f=eval(document.getElementById('p6').value)
    let result=(a+b+c+d+e+f)/6;
    document.getElementById('p7').value=result

}
function eraseDate(){
    document.getElementById('p1').value=""
    document.getElementById('p2').value=""
    document.getElementById('p3').value=""
        document.getElementById('p4').value=""
        document.getElementById('p5').value=""
        document.getElementById('p6').value=""
        document.getElementById('p7').value=""
}