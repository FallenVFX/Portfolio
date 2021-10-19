const apiKey = 'cUtdvQPAvijPZuYKdT2kGWdp91V7DdP9';
const url = `https://www.mapquestapi.com/staticmap/v5/map?key=${apiKey}
&size=400,300&center=Edmonds,WA&zoom=7&
shape=border:ff0000|fill:ff0000|47.850,-122.400|47.850,-122.250|47.700,-122.325|47.850,-122.400`;
const img = document.querySelector('.maps');

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
