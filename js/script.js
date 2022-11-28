let name_user;
let km_user;
let age_user;
let price_km;
let button_Get_Data = document.getElementById('get-data');
let button_Cancel_Data = document.getElementById('cancel-data');

button_Get_Data.addEventListener('click', function(){
    name_user = document.getElementById('name-user').value;
    console.log('Nome utente: ' + name_user);

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

    document.getElementById('ticket').classList.add('block');
    document.getElementById('ticket').classList.remove('none');

    document.getElementById('name-user-text').innerHTML = name_user;
    document.getElementById('price-km-text').innerHTML = price_km + '€';
})

button_Cancel_Data.addEventListener('click', function(){
    window.location.reload(true);
})


