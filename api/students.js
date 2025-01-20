

const axios = require('axios');

export default async function handler(req, res) {
    try {
        // Make the API request to the third-party API
        const response = await axios.get('https://freetestapi.com/api/v1/students?limit=20');
        res.status(200).json(response.data);  // Send the data back to the client
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}
