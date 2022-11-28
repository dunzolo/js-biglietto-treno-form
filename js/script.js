let km_user;
let age_user;
let price_km;
let button = document.getElementById('get-data');

button.addEventListener('click', function(){
    km_user = document.getElementById('km-user').value;
    console.log('Km: ' + km_user);

    age_user = document.getElementById('age-user').value;
    console.log('Età: ' + age_user);

    price_km = (km_user * 0.21).toFixed(2);
    console.log("Prezzo al km:" + price_km);

    if(age_user === 'Minorenne'){
        price_km = (price_km * 0.8).toFixed(2);
        console.log('Prezzo scontato: ' + price_km);
    }
    else if(age_user === 'Over 65'){
        price_km = (price_km * 0.6).toFixed(2);
        console.log('Prezzo scontato: ' + price_km);
    }
    else{
        console.log('Prezzo scontato: ' + price_km);
    }
    
})


