import keys from '../secure/keys';

const url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${keys.GOOGLEGEO_KEY}`;

const fetchGeoData = async () => {
	const res = await fetch(url, {
		method: 'POST',
	});
	const data = await res.json();
	return data;
};

fetchGeoData()
	.then((data) => {
		const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${data.location.lat},${data.location.lng}&key=${keys.GOOGLEGEO_KEY}`;
		return url;
	})
	.then(async (url) => {
		const res = await fetch(url);
		const data = await res.json();
		console.log(data);
	});

export { fetchGeoData };
