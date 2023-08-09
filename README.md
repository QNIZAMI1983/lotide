# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

```sh
npm install @qnizami1983/lotide
```


**Require it:**

```sh
const _ = require('@qnizami1983/lotide');`
```
## Functions and Documentation
**`head(array`** </br></br> 
Returns the first element of the array.

<b>Example:</b>

```javascript
const firstElement = _.head([1, 2, 3]); // Returns 1
```
**`tail(array`** </br></br>
Returns a new array with all elements except the first one.

<b>Example:</b>

```javascript
const remainingElements = _.tail([1, 2, 3]); // Returns [2, 3]
```
**`middle(array`** </br></br>
Returns an array containing the middle elements of the input array.

<b>Example:</b>

```javascript
const middleElements = _.middle([1, 2, 3, 4, 5]); // Returns [2, 3]
```
**`assertArraysEqual(actual, expected`** </br></br>
Compares two arrays for equality and logs the result.

<b>Example:</b>

```javascript
_.assertArraysEqual([1, 2, 3], [1, 2, 3]); // Logs "✅ Assertion Passed: [1, 2, 3] === [1, 2, 3]"
```
**`assertEqual(actual, expected`** </br></br>
Compares two values for equality and logs the result.

<b>Example:</b>

```javascript
_.assertEqual(5, 5); // Logs "✅ Assertion Passed: 5 === 5"
```
**`assertObjectsEqual(actual, expected`** </br></br>
Compares two objects for equality and logs the result.

<b>Example:</b>

```javascript
_.assertObjectsEqual({ a: 1, b: 2 }, { b: 2, a: 1 }); // Logs "✅ Assertion Passed: [object Object] === [object Object]"
```
**`without(source, itemsToRemove`** </br></br>
Returns a new array with elements from the source array without the specified items.

<b>Example:</b>

```javascript
const filteredArray = _.without([1, 2, 3, 4, 5], [3, 4]); // Returns [1, 2, 5]
```
**`countLetters(sentence`** </br></br>
Returns an object containing the count of each letter in the input sentence.

<b>Example:</b>

```javascript
const letterCounts = _.countLetters("Hello, World!"); // Returns an object with letter counts
```
**`countOnly(allItems, itemsToCount`** </br></br>
Returns an object with the counts of specified items in the input array.

<b>Example:</b>

```javascript
const countResult = _.countOnly(["a", "b", "c", "a", "b"], { a: true, b: true }); // Returns an object with counts
```
**`findKey(object, callback`** </br></br>
Returns the first key in the object that satisfies the given callback.

<b>Example:</b>

```javascript
const foundKey = _.findKey({ a: 1, b: 2, c: 3 }, x => x === 2); // Returns "b"
```
**`findKeyByValue(object, value`** </br></br>
Returns the key in the object with the specified value.

<b>Example:</b>

```javascript
const foundKeyByValue = _.findKeyByValue({ a: 1, b: 2, c: 3 }, 2); // Returns "b"
```
**`flatten(arr`** </br></br>
Returns a new array with all nested arrays flattened.

<b>Example:</b>

```javascript
const flattenedArray = _.flatten([[1, 2], [3, 4], [5, 6]]); // Returns [1, 2, 3, 4, 5, 6]
```
**`letterPositions(sentence`** </br></br>
Returns an object containing arrays of indices for each letter in the input sentence.

<b>Example:</b>

```javascript
const letterPositionObj = _.letterPositions("Hello, World!"); // Returns an object with arrays of indices
```
**`map(array, callback`** </br></br>
Returns a new array with the results of applying the callback function to each element.

<b>Example:</b>

```javascript
const mappedArray = _.map([1, 2, 3], x => x * 2); // Returns [2, 4, 6]
```
**`takeUntil(array, callback`** </br></br>
Returns a new array containing elements from the input array until the callback returns a truthy value.

<b>Example:</b>

```javascript
const takenArray = _.takeUntil([1, 2, 3, 4, 5], x => x === 3); // Returns [1, 2]
```