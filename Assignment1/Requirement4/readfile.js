const fs = require('fs');
const { promisify } = require('util');

// Promisified version of fs.readFile sync function
const readFileAsync = promisify(fs.readFile);

// Attach 'exit' and 'unhandledRejection' events to the 'process' object
process.on('exit', (code) => {
  console.log(`'exit' event called with code: ${code}`);
});

process.on('unhandledRejection', (reason, promise) => {
  console.log("'unhandledRejection' event called");
  throw reason;
});

// Function to simulate reading a file with a promise
const readFileSyncPromise = async (filename) => {
  try {
    const data = await readFileAsync(filename);
    return data;
  } catch (error) {
    throw error;
  }
};

// Usage of the new function with incorrect filename
readFileSyncPromise('nonexistentfile.txt')
  .then((data) => {
    console.log('File content:', data.toString());
  })
  .catch((error) => {
    console.error('Error:', error.message);
    throw new Error('Custom error from catch handler');
  });
