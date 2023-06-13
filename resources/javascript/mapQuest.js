// Don't steal my map quest key please ;D
const apiKey = 'cUtdvQPAvijPZuYKdT2kGWdp91V7DdP9';
const url = `https://www.mapquestapi.com/staticmap/v5/map?key=${apiKey}&locations=Everett,WA&size=400,300&defaultMarker=marker-sm&zoom=8`;
const img = document.getElementById('map');

fetch(url)
    .then(function (response) {
        if (!response.ok) {
            console.log('error');
        }
        return response.blob();
    })
    .then(function (data) {
        let objectURL = URL.createObjectURL(data);
        img.src = objectURL;
    });
