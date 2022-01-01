module.exports = function toReadable (number) {
  const arrNumber = number.toString().split('')

  const oneToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

  const elevenToNineteen = ['','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']

  const tensToNinety = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  if (arrNumber.length == 1) {
    return '' + oneToNine[arrNumber]
  }
  if (arrNumber.length == 2) {
    if (number % 10 == 0) {
      return '' + tensToNinety[parseInt(arrNumber[0])]
    }
    if (number < 20) {
      return '' + elevenToNineteen[number - 10]
    }
    if (number >= 20) {
      return '' + tensToNinety[parseInt(arrNumber[0])] + ' ' + oneToNine[parseInt(arrNumber[1])]
    } 
  }
  if (arrNumber.length == 3) {
    if (number % 100 == 0){
      return oneToNine[parseInt(arrNumber[0])] + ' ' + 'hundred'
    }
    if (number % 10 == 0){
        return oneToNine[parseInt(arrNumber[0])] + ' ' + 'hundred' + ' ' + tensToNinety[parseInt(arrNumber[1])]
    }
    if (number % 100 < 10 ) {
      return oneToNine[parseInt(arrNumber[0])] + ' ' + 'hundred' + ' ' + oneToNine[parseInt(arrNumber[2])] 
    }
    if (number % 100 > 10 && number % 100 < 20) {
      return oneToNine[parseInt(arrNumber[0])] + ' ' + 'hundred' + ' ' + elevenToNineteen[parseInt(arrNumber[1] + arrNumber[2]) - 10]
    } 
    if (number % 100 > 20) {
      return oneToNine[parseInt(arrNumber[0])] + ' ' + 'hundred' + ' ' + tensToNinety[parseInt(arrNumber[1])] + ' ' + oneToNine[parseInt(arrNumber[2])]
    }
  }
}

