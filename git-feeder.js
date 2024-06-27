const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const random = require('random');

const FILE_PATH = './data.json';

const makeCommits = (x, y, n) => {
  if(n===0) return;
  const DATE = moment()
    .subtract(1, 'y')
    .add(1, 'd')
    .add(x, 'w')
    .add(y, 'd')
    .format();

  const data = {
    date: DATE,
  }

  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE}, makeCommits.bind(this, random.int(0, 54), random.int(0, 6), --n));
  });
}

makeCommits(random.int(0, 54), random.int(0, 6), 1500);


