const express = require('express');
const { Storage } = require('@google-cloud/storage');

const app = express();
const port = 3000;

// Instantiate a storage client
const storage = new Storage();

// Define a route for fetching data from the bucket
app.get('/api/fetchDataFromBucket', async (req, res) => {
  try {
    const bucketName = 'ashaubree-images';
    const fileName = 'quickstart-folder/Float.jpg'; // Replace with your desired file path

    // Get the bucket object
    const bucket = storage.bucket(bucketName);

    // Get the file object
    const file = bucket.file(fileName);

    // Read the contents of the file
    const data = await file.download();

    // Send the data as a response
    res.send(data[0]);
  } catch (error) {
    console.error('Error fetching data from bucket:', error);
    res.status(500).send('Error fetching data from bucket');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
