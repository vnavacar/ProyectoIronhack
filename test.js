
function sum100() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
      sum += i;
    }
    console.log(sum);
}

function colorMix(color1, color2) {
    if (color1 === 'red' && color2 === 'yellow') {
      return 'orange';
    } else if (color1 === 'red' && color2 === 'blue') {
        return 'purple';
        }
    else if (color1 === 'yellow' && color2 === 'blue') {
        return 'green';
    } else {
        return 'invalid';
    }
}