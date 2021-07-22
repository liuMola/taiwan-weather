import keys from '../secure/keys';

const getLongAndLatGoogle = async () => {
	try {
		console.log('fire get location');
		let url = `https://www.googleapis.com/geolocation/v1/geolocate?key=${keys.GOOGLE_KEY}`;
		let res = await fetch(url, {
			method: 'POST',
		});
		let data = await res.json();
		return data;
	} catch (e) {
		console.log('get latitude and longitude fail: ' + e.message);
	}
};

navigator.geolocation.getCurrentPosition((data) => console.log(data.coords));

const fetchCityName = async () => {
	try {
		let pos = await getLongAndLatGoogle();
		console.log(pos.location.lat);
		let url = `https://maps.googleapis.com/maps/api/geocode/json?language=zh-TW&latlng=${pos.location.lat},${pos.location.lng}&location_type=ROOFTOP&result_type=street_address&key=${keys.GOOGLE_KEY}`;
		let res = await fetch(url);
		let data = await res.json();
		return data.results[0].address_components[4].long_name;
	} catch (e) {
		console.log('fetch city from GPS fail: ' + e.message);
	}
};

export { fetchCityName };
