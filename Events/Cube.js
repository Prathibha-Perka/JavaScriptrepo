function abCube()
            {
                let a=eval(document.getElementById('t1').value)
                let b=eval(document.getElementById('t1').value)
                let result = ( a*a*a) + (b*b*b)+ (3*a*a*b)+(3*a*b*b)
                document.getElementById('t3').value=result
            }
            function eraseDate(){
                document.getElementById('t1').value=""
                document.getElementById('t2').value=""
                document.getElementById('t3').value=""
            }