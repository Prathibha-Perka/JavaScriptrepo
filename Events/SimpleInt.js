function Interest(){
    let p=eval(document.getElementById('p1').value)
    let t=eval(document.getElementById('p2').value)
    let r=eval(document.getElementById('p3').value)
    let result=(p*t*r)/100;
    document.getElementById('p4').value=result
}
function eraseDate(){
    document.getElementById('t1').value=""
    document.getElementById('t2').value=""
    document.getElementById('t3').value=""
}