//requireds
var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./puzzleInput.txt')
});
//variables
var area, lgh, wdt, hdt, sSide, ttl = 0, ribbonttl = 0;

//calcuate surface area 2*l*w + 2*w*h + 2*h*l add area of smallest side for extra paper
function boxArea(l,w,h) {
    var bxArea = 0;
    bxArea += 2 * l * w;
    bxArea += 2 * w * h;
    bxArea += 2 * h * l;

    return bxArea;
};

function smallSide(l,w,h) {
    var side1 = l * w;
    var side2 = w * h;
    var side3 = h * l;
    return Math.min(side1, side2, side3);
};

lineReader.on('line', (line) => {
    var sides = line.split('x');
    // console.log(`${sides[0]}, ${sides[1]}, ${sides[2]}`);
    area = boxArea(sides[0],sides[1],sides[2]);
    sside = smallSide(sides[0],sides[1],sides[2]);
    ttl += area + sside;
    console.log(`Area = ${area}, sside = ${sside}, total = ${ttl}, ribbon = ${ribbonttl}`);
});


