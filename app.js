'use strict'
const a=()=>{

    let b=document.getElementById('txt').value;
    let a=b.toUpperCase();
    fetch('/text.json')
    .then(res => res.json())
    .then(tt => {

        for (let i = 0; i < tt.length; i++) {

            if(tt[i].name.includes(a))
            {
                document.getElementById('t1').innerHTML=tt[i].Details;
            }
        }
    })
    .catch(error => console.log(error));
            
}


document.getElementById('ck').addEventListener('click',a);