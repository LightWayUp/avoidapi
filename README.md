# [avoidapi][NPM Package]

## Badges
[![Join our Discord](https://img.shields.io/discord/519513445721178133.svg?longCache=true&style=flat-square&logo=discord&color=7289da)](https://discord.gg/fxstudios) [![MIT License](https://img.shields.io/badge/license-MIT-0366d6.svg?longCache=true&style=flat-square)](/LICENSE) [![View package on npm](https://img.shields.io/npm/v/avoidapi.svg?longCache=true&style=flat-square&logo=npm&color=cb3837)][NPM Package] [![Star project on GitHub](https://img.shields.io/github/stars/vanishedvan/avoidapi.svg?longCache=true&style=social)](https://github.com/vanishedvan/avoidapi)

## Introduction
- This package lets you get the game user database, providing you the user ID and their game score.

## List of functions

```
- getAll()
- getUser(id)
- getCount()
```

Please note that the `id` is a Discord user snowflake.

## Installation

Install the module with your terminal/console using:
```
npm i avoidapi
```

Defining the module in your code:

* CommonJS:
  ```
  const avoid = require("avoidapi");
  ```
* ES:
  ```
  import avoid from "avoidapi/index.mjs";
  ```

## Examples

```
/**
 * Logs everything in the game database.
 */
console.log(avoid.getAll());
```

```
/**
 * Logs the user data in the game database.
 */
console.log(avoid.getUser(id));
```

```
/**
 * Logs the user count in the game database.
 */
console.log(avoid.getCount());
```

## Links

NPM: https://www.npmjs.com/package/avoidapi  
Discord: https://discord.gg/fxstudios

## License

This project is licensed under [MIT License](/LICENSE).

> Copyright (c) 2019 FX Studios
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

[NPM Package]: https://www.npmjs.com/package/avoidapi