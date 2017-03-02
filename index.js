const createRegExp = require('xregexp')

const regular = '(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang)'
const irregular = '(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)'
const grandfathered = '(?<grandfathered>' + irregular + '|' + regular + ')'
const privateUse = '(?<privateUse>x(-[A-Za-z0-9]{1,8})+)'
const privateUse2 = '(?<privateUse2>x(-[A-Za-z0-9]{1,8})+)'
const singleton = '[0-9A-WY-Za-wy-z]'
const extension = '(?<extension>' + singleton + '(-[A-Za-z0-9]{2,8})+)'
const variant = '(?<variant>[A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3})'
const region = '(?<region>[A-Za-z]{2}|[0-9]{3})'
const script = '(?<script>[A-Za-z]{4})'
const extlang = '(?<extlang>[A-Za-z]{3}(-[A-Za-z]{3}){0,2})'
const language = '(?<language>([A-Za-z]{2,3}(-' + extlang + ')?)|[A-Za-z]{4}|[A-Za-z]{5,8})'
const langtag = '(' + language + '(-' + script + ')?' + '(-' + region + ')?' + '(-' + variant + ')*' + '(-' + extension + ')*' + '(-' + privateUse + ')?' + ')'
const languageTag = '(' + grandfathered + '|' + langtag + '|' + privateUse2 + ')'

const createLanguageTagRegex = ({ exact = true } = {}) =>
  exact ? createRegExp('^' + languageTag + '$') : createRegExp(languageTag, 'g')

module.exports = createLanguageTagRegex
