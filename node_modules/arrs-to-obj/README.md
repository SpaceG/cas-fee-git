
# arrs-to-obj [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/arrs-to-obj.svg)](https://www.npmjs.com/package/arrs-to-obj) [![Downloads](https://img.shields.io/npm/dt/arrs-to-obj.svg)](https://www.npmjs.com/package/arrs-to-obj) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Converts two arrays into an object.

## :cloud: Installation

```sh
$ npm i --save arrs-to-obj
```


## :clipboard: Example



```js
const arrsToObj = require("arrs-to-obj");

let names = [
      "location"
    , "age"
    , "name"
    ]
  , values = [
      "Earth"
    , 42
    , "Alice"
    ]
  ;

console.log(arrsToObj(names, values));
// => {
//    location: 'Earth'
//  , age: 42
//  , name: 'Alice'
// }
```

## :memo: Documentation


### `arrsToObj(names, values)`
Converts two arrays into an object.

#### Params
- **Array** `names`: The names array.
- **Array** `values`: The values array.

#### Return
- **Object** The result object.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`find-file-in-dirs`](https://github.com/IonicaBizau/find-file-in-dirs#readme)—Find a file in different directories.
 - [`tilda`](https://github.com/IonicaBizau/tilda)—Tiny module for building command line tools.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
