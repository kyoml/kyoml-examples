const kyoml     = require('kyoml');
const fs        = require('fs');
const path      = require('path');

(async function () {

  const json = await kyoml.compile(
    fs.readFileSync(path.join(__dirname, 'sample.kyo')).toString()
  );

  console.log(json);
})();
