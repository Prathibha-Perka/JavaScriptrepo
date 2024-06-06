
            function dosum(){
            let x=document.getElementById('t1').value
            let y=document.getElementById('t2').value
            let sum=eval(x)+eval(y);
            document.getElementById('t3').value=sum
            }
            function eraseDate(){
                document.getElementById('t1').value=""
                document.getElementById('t2').value=""
                document.getElementById('t3').value=""
            }
    