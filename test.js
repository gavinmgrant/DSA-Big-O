const data = ['A', 'B', 'C'];
const out = [];

const looping = (input, output) => {
    for (let i = 0; i < input.length; i++) {
        output[i] = [];
        for (let j = 0; j < input.length; j++) {
            output[i][j] = data[i];
        }
    }
    return output;
}

console.log(looping(data, out));