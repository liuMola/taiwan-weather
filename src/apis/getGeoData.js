import keys from '../secure/keys';

function getLongAndLat() {
	return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
}

const fetchCityName = async () => {
	try {
		let pos = await getLongAndLat();
		let url = `https://maps.googleapis.com/maps/api/geocode/json?language=zh-TW&latlng=${pos.coords.latitude},${pos.coords.longitude}&location_type=ROOFTOP&result_type=street_address&key=${keys.GOOGLE_KEY}`;
		await fetch(url);
		let res = await fetch(url);
		let data = await res.json();
		return data.results[0].address_components[4].long_name;
	} catch (e) {
		alert('Error: ' + e.message);
	}
};

export { fetchCityName };
