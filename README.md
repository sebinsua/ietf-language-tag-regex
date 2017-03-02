# `ietf-language-tag-regex`
> Regular expressions for matching IETF language tags (BCP 47)

Based on this [Stack Overflow comment](http://stackoverflow.com/a/7036171) by George Pollard.

## Install

## Usage

```js

const languageTagRegex = require('ietf-language-tag-regex')

languageTagRegex().test('en-GB')   // true
languageTagRegex().test('a-DE')    // false
languageTagRegex().test('zh-Hant') // true

```

## API

### languageTagRegex(options)

Returns a regex for matching IETF language tags.

#### options

##### exact

Type: `boolean`<br>
Default: `true`

Only match an exact string. Useful with `RegExp#test` to check if a string is a language tag.
