const fs = require('fs').promises;

process.on('exit', (code) => {
  console.log(`'exit' event called with code: ${code}`);
});

process.on('unhandledRejection', (reason, promise) => {
  console.log("'unhandledRejection' event called");
  throw reason;
});

const readFileSyncPromise = async (filename) => {
  try {
    const data = await fs.readFile(filename);
    return data.toString();
  } catch (error) {
    console.error('Error reading file:', error.message);
    throw error;
  }
};

readFileSyncPromise('pom.txt')
  .then((content) => {
    console.log('File content:', content);
  })
  .catch((error) => {
    console.error('Error:', error.message);
    throw new Error('Custom error from catch handler');
  });
