var theirLodash = require('lodash')
var ourLodash = require('../lib/ucdd-lodash.part2.js')

var debug = require('debug')('test')
var chalk = require('chalk')

// test data
var users = [{
    user: 'barney',
    age: 36,
    admin: false,
    gender: 'm'
}, {
    user: 'fred',
    age: 40,
    admin: true,
    gender: 'm'
}, {
    user: 'helen',
    age: 33,
    admin: true,
    gender: 'f'
}]

var book = {
    title: 'Javascript Revealed',
    author: 'John Smith',
    pages: 140,
    publisher: 'Random House'
}

// helper function to test a given expression using our implementation and their implementation
// of lodash library methods, and show the results as debug messages
function test(expression) {
    var _, ourResult, theirResult

    // bind the variable _ to our implementation
    _ = ourLodash
    ourResult = eval(expression)

    // bind the variable _ to their implementation
    _ = theirLodash
    theirResult = eval(expression)

    debug(chalk.green(expression))
    debug("\tTheirs: " + JSON.stringify(theirResult))
    debug("\tOurs  : " + JSON.stringify(ourResult))
}

function test_range() {
    test('_.range(4)')
    test('_.range(1,5)')
    test('_.range(0)')
}

function test_pick() {
    test('_.pick(book,["author","pages"])')
    test('_.pick(book,["publisher"])')
    test('_.pick(book,["badpropertyname"])')
    test('_.pick(book)')
}

function test_some() {
    test('_.some(users, function(x) { return x.age > 50 })')
    test('_.some(users, function(x) { return x.age < 38 })')
    test('_.some(users, function(x) { return x.admin })')
}

function test_every() {
    test('_.every(users, function(x) { return x.age > 50 })')
    test('_.every(users, function(x) { return x.age < 38 })')
    test('_.every(users, function(x) { return x.admin })')
}

function test_find() {
    test('_.find(users, {admin: true, gender: "m"})')
    test('_.find(users, {gender: "m"})')
}


test_range()
test_pick()
test_some()
test_every()
test_find()