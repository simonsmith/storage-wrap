# Storage wrap

Nothing fancy, just a simple wrapper for local/sessionStorage that removes the need to keep parsing and stringifying objects.

## Installation

Bower ftw

	bower install storage-wrap --save

## Usage

It uses exactly the same API as the native Storage objects except it will try to `JSON.parse` objects and arrays.

```js
// Saves as - "{"foo":"bar"}"
storageWrap.setItem('test', {
	foo: 'bar'	
});

// Returns an object
storageWrap.getItem('test');
```

Use it as a global or as an AMD module.

## Tests

	npm install
	grunt test
