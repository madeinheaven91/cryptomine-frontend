export { NumToFormattedStr }

function NumToFormattedStr(num: number) {
  if (num >= 10 ** 12) return FormatNumStr(num, 12) + 'T'
  if (num >= 10 ** 9) return FormatNumStr(num, 9) + 'B'
  if (num >= 10 ** 6) return FormatNumStr(num, 6) + 'M'
  if (num >= 10 ** 3) return FormatNumStr(num, 3) + 'k'
  return num
}
function FormatNumStr(num: number, order: number) {
  let whole = Math.floor(num / 10 ** order)
  let decimal = Math.round((num / 10 ** (order - 1)) % 10)
  if (decimal == 10) {
    decimal = 0
    whole++
  }
  return (whole + '.' + decimal) as string
}
