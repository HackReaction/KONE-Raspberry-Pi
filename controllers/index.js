const fs = require('fs');

const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

module.exports = {
  staticFigures: (req, res) => {

    const num = req.body.num;
 
    const img1 = fs.createReadStream('./before-images/0elevator.png').pipe(new PNG()).on('parsed', doneReading);
    const img2 = fs.createReadStream(`./after-images/${num}elevator.png`).pipe(new PNG()).on('parsed', doneReading);

    let filesRead = 0;
 
    function doneReading() {
        if (++filesRead < 2) { return };
        const diff = new PNG({width: img1.width, height: img1.height});
     
        const differentPixelCount = pixelmatch(img1.data, img2.data, diff.data, img1.width, img1.height, {threshold: 0.2, includeAA: true});
        const percentage = (differentPixelCount / (img1.height * img1.width)).toString().replace('0.', '').slice(0, 2);

        console.log(percentage); // yellow pixels aren't counted but should be

        let test = diff.pack().pipe(fs.createWriteStream('diff.png'));

        test.on('finish', () => {
          fs.readFile('./diff.png', (err, data) => {
            const img =  Buffer.from(data, 'base64');

            res.writeHead(200, {
               'Content-Type': 'image/png',
               'Content-Length': img.length,
               'percentage': percentage
            });

            res.end(img);
          });
        });
    }
  },
  stair: (req, res) => {

    const num = req.body.num;
    const img1 = fs.createReadStream('./before-images/0chair.png').pipe(new PNG()).on('parsed', doneReading);
    const img2 = fs.createReadStream(`./after-images/${num}chair.png`).pipe(new PNG()).on('parsed', doneReading);


    let filesRead = 0;
 
    function doneReading() {
        if (++filesRead < 2) { return };
        const diff = new PNG({width: img1.width, height: img1.height});
     
        const differentPixelCount = pixelmatch(img1.data, img2.data, diff.data, img1.width, img1.height, {threshold: 0.15, includeAA: true});
        const percentage = (differentPixelCount / (img1.height * img1.width)).toString().replace('0.', '').slice(0, 2);


        let test = diff.pack().pipe(fs.createWriteStream('diff.png'));

        test.on('finish', () => {
          fs.readFile('./diff.png', (err, data) => {
            const img =  Buffer.from(data, 'base64');

            res.writeHead(200, {
               'Content-Type': 'image/png',
               'Content-Length': img.length,
               'percentage': percentage
            });

            res.end(img);
          });
        });
    }
  },
  concrete: (req, res) => {

    const num = req.body.num;
    const img1 = fs.createReadStream('./before-images/0concrete.png').pipe(new PNG()).on('parsed', doneReading);
    const img2 = fs.createReadStream(`./after-images/${num}concrete.png`).pipe(new PNG()).on('parsed', doneReading);


    let filesRead = 0;
 
    function doneReading() {
        if (++filesRead < 2) { return };
        const diff = new PNG({width: img1.width, height: img1.height});
     
        const differentPixelCount = pixelmatch(img1.data, img2.data, diff.data, img1.width, img1.height, {threshold: 0.25, includeAA: true});
        const percentage = (differentPixelCount / (img1.height * img1.width)).toString().replace('0.', '').slice(0, 2);

        console.log(percentage); // yellow pixels aren't counted but should be

        let test = diff.pack().pipe(fs.createWriteStream('diff.png'));

        test.on('finish', () => {
          fs.readFile('./diff.png', (err, data) => {
            const img =  Buffer.from(data, 'base64');

            res.writeHead(200, {
               'Content-Type': 'image/png',
               'Content-Length': img.length,
               'percentage': percentage
            });

            res.end(img);
          });
        });
    }
  }


};



