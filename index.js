function generate(array, type) {
    const get_length = array.length;
    const randomMath = Math.floor(Math.random() * get_length + 0)
    if (type === 'return') {
        return array[randomMath]
    } else if (type === 'console') {
        console.log(array[randomMath])
    } else {
        return 'invalid usage. Type must be \'return\' or \'console\'\nFor more information check out: [This link](https://www.npmjs.com/package/random-message-generator)';
    }
}

module.exports.generate = generate;