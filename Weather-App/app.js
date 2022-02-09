window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                long = position.coords.longitude;
                lat = position.coords.latitude;

                const api = `http://api.weatherapi.com/v1/current.json?key=daea8663335f4c2e944161520220902&q=Jaipur&aqi=no`;
                fetch(api)
                .then(response => {
                    return response.json();
                }) 
                .then(data => {
                    console.log(data);
                });
            }
        );

       
          
    } else {
        h1.textContent = "Enable Location"
    }
});