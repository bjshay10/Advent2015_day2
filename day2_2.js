//requireds
var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./puzzleInput.txt')
});
//variables
var area, lgh, wdt, hdt, sSide, ttl = 0, ribbonttl = 0, rib, bow;

//calcuate surface area 2*l*w + 2*w*h + 2*h*l add area of smallest side for extra paper


function ribbon(l,w,h) {
    var side1 = 0, side2 = 0, side3 = 0;
    side1 = parseInt(l) + parseInt(w);
    side2 = parseInt(w) + parseInt(h);
    side3 = parseInt(h) + parseInt(l);
    return 2 * Math.min(side1,side2,side3);
};


lineReader.on('line', (line) => {
    var sides = line.split('x');
    rib = ribbon(sides[0],sides[1],sides[2]);
    bow = sides[0] * sides[1] * sides[2];
    ribbonttl += rib + bow;
    console.log(ribbonttl);
    // console.log(sSide);
    // var ribbon = 0;
    // var bow = (sides[0]*sides[1]*sides[2]);
    // var ttl = ribbon + bow;
    // ribbonttl += ttl;
    // console.log(`r = ${ribbon}, b = ${bow}, ttl = ${ttl}, overall = ${ribbonttl}, ${sides[0]}, ${sides[1]}, ${sides[2]}`);
});