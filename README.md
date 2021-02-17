# Random message generator
An api to generate random messages from an array!

## Usage

### Example:
```js
const {generate} = require('random-message-generator');
// The array
const messages = ['Hello world', 'Hello npm', 'Hello javascript'];
generate(messages, console)
```
### Explained:
```js
// require the package
const {<function>} = require('random-message-generator');

// Make an array with all messages
const <Array_name> = [<As>, <much>, <strings>, <you>, <would>, <like>];

// Execute the function with parameters
<function>(<Array>, <Type>)

// Type can be 'return' which returns the answer (can be used in other api's like discord.js)
// It can also be 'console' which returns the answer in the console
```