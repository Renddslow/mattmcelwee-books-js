const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const files = fs.readdirSync(path.join(__dirname, 'books'));

let read;
let reading;

try {
  read = fs.readFileSync(path.join(__dirname, 'read.csv')).toString();
} catch (e) {
  read = '';
}

try {
  reading = fs.readFileSync(path.join(__dirname, 'reading.csv')).toString();
} catch (e) {
  reading = '';
}

const books = {};
const readList = read.split('\n');
const readingList = reading.split('\n');

files
  .filter((file) => file !== 'README.md')
  .forEach((file) => {
    const book = fs.readFileSync(path.join(__dirname, 'books', file));
    const id = file.replace('.json', '');
    books[id] = JSON.parse(book.toString());

    if (readList.includes(id)) {
      books[id].read = true;
    }

    if (readingList.includes(id)) {
      books[id].reading = true;
    }
  });

try {
  fs.mkdirSync(path.join(__dirname, 'dist'));
} catch (e) {
  rimraf.sync(path.join(__dirname, 'dist'));
  fs.mkdirSync(path.join(__dirname, 'dist'));
}

fs.writeFileSync(path.join(__dirname, 'dist', 'books.json'), JSON.stringify(books));
