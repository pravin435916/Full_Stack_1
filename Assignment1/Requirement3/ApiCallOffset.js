function fetchPincodeData(offset) {
    return fetch(`https://api.data.gov.in/resource/6176ee09-3d56-4a3b-8115-21841576b2f6?offset=${offset}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch pincode data');
            }
            return response.json();
        })
        .then(data => data.results)
        .catch(error => {
            console.error('Error in data:', error);
            return []; // Return an empty array to ensure Promise.all continues
        });
}

const promises = [
    fetchPincodeData(31),
    fetchPincodeData(51),
    fetchPincodeData(61)
];

Promise.all(promises)
    .then(results => {
        const combinedData = [].concat(...results);
        console.log(combinedData);
    })
    .catch(error => console.error('Error fetching pincode data:', error));
