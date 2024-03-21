
function sum100() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
      sum += i;
    }
    console.log(sum);
}

function colorMix() {
    let color1 = prompt("Color 1:")
    let color2 = prompt("Color 2:")

    switch(color1,color2) {


        case 'red' && 'yellow':
            return 'orange';
            break;

        case 'red' && 'blue':
            return 'purple';
            break;

        case 'yellow' && 'blue':

            return 'green';
            break;

        default:
            return 'Invalid color';
            break;
    }


  }
  
  console.log(colorMix())