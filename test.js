const test = require('ava')

const createLanguageTagRegex = require('.')

const exactLanguageTagRegex = createLanguageTagRegex()
const inexactLanguageTagRegex = createLanguageTagRegex({ exact: false })

test('when exact should match for valid language tags', t => {
  t.true(exactLanguageTagRegex.test('de'))
  t.true(exactLanguageTagRegex.test('zh-Hant'))
  t.true(exactLanguageTagRegex.test('zh-cmn-Hans-CN'))
  t.true(exactLanguageTagRegex.test('zh-Hans-CN'))
  t.true(exactLanguageTagRegex.test('sl-rozaj'))
  t.true(exactLanguageTagRegex.test('de-CH-1901'))
  t.true(exactLanguageTagRegex.test('hy-Latn-IT-arevela'))
  t.true(exactLanguageTagRegex.test('en-US'))
  t.true(exactLanguageTagRegex.test('de-CH-x-phonebk'))
  t.true(exactLanguageTagRegex.test('qaa-Qaaa-QM-x-southern'))
  t.true(exactLanguageTagRegex.test('en-US-u-islamcal'))
})

test('when exact should not match for valid language tags within strings', t => {
  t.false(exactLanguageTagRegex.test('language tag ( de ) can be found within this string'))
  t.false(exactLanguageTagRegex.test('language tag ( zh-Hant ) can be found within this string'))
  t.false(exactLanguageTagRegex.test('language tag ( zh-cmn-Hans-CN ) can be found within this string'))
  t.false(exactLanguageTagRegex.test('language tag ( zh-Hans-CN ) can be found within this string'))
  t.false(exactLanguageTagRegex.test('language tag ( sl-rozaj ) can be found within this string'))
  t.false(exactLanguageTagRegex.test('language tag ( de-CH-1901 ) can be found within this string'))
  t.false(exactLanguageTagRegex.test('language tag ( hy-Latn-IT-arevela ) can be found within this string'))
  t.false(exactLanguageTagRegex.test('language tag ( en-US ) can be found within this string'))
  t.false(exactLanguageTagRegex.test('language tag ( de-CH-x-phonebk ) can be found within this string'))
  t.false(exactLanguageTagRegex.test('language tag ( qaa-Qaaa-QM-x-southern ) can be found within this string'))
  t.false(exactLanguageTagRegex.test('language tag ( en-US-u-islamcal ) can be found within this string'))
})

test('when inexact should match for valid language tags within strings', t => {
  t.true(inexactLanguageTagRegex.test('language tag ( de ) can be found within this string'))
  t.true(inexactLanguageTagRegex.test('language tag ( zh-Hant ) can be found within this string'))
  t.true(inexactLanguageTagRegex.test('language tag ( zh-cmn-Hans-CN ) can be found within this string'))
  t.true(inexactLanguageTagRegex.test('language tag ( zh-Hans-CN ) can be found within this string'))
  t.true(inexactLanguageTagRegex.test('language tag ( sl-rozaj ) can be found within this string'))
  t.true(inexactLanguageTagRegex.test('language tag ( de-CH-1901 ) can be found within this string'))
  t.true(inexactLanguageTagRegex.test('language tag ( hy-Latn-IT-arevela ) can be found within this string'))
  t.true(inexactLanguageTagRegex.test('language tag ( en-US ) can be found within this string'))
  t.true(inexactLanguageTagRegex.test('language tag ( de-CH-x-phonebk ) can be found within this string'))
  t.true(inexactLanguageTagRegex.test('language tag ( qaa-Qaaa-QM-x-southern ) can be found within this string'))
  t.true(inexactLanguageTagRegex.test('language tag ( en-US-u-islamcal ) can be found within this string'))
})

test('should not match for invalid language tags', t => {
  t.false(exactLanguageTagRegex.test('de-419-DE'))
  t.false(exactLanguageTagRegex.test('a-DE'))
  // This should fail but doesn't:
  // ar-a-aaa-b-bbb-a-ccc (two extensions with same single-letter prefix)
  // t.false(exactLanguageTagRegex.test('ar-a-aaa-b-bbb-a-ccc'))
})
