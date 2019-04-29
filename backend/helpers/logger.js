const fs = require('fs');
const path = require('path');

module.exports = resultData => {
  const rootDir = path.dirname(require.main.filename);
  const date = new Date();
  const timestamp = date.getTime();
  fs.appendFileSync(
    rootDir + '/tmp/access.log',
    `${timestamp} - ${resultData.long_url}  ${resultData.url}\r\n`
  );
  return;
};
