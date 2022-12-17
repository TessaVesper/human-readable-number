module.exports = function toReadable (number) {
    const integers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let numberStr = ('' + number).split('');
    let str = [];

    if (numberStr.length === 3) {
        str.push(`${integers[parseInt(numberStr[0])]} hundred`);
        if (numberStr[1] === '1') {
            str.push(`${integers[parseInt(numberStr[2]) + 10]}`);
        } else if (numberStr[1] === '0') {
            if (numberStr[2] !== '0') {
                str.push(`${integers[parseInt(numberStr[2])]}`);
            }
        } else if (numberStr[1] !== '0') {
            str.push(`${dozens[parseInt(numberStr[1]) - 1]}`);
            if (numberStr[2] !== '0') {
                str.push(`${integers[parseInt(numberStr[2])]}`);
        }
    }
    } else if (numberStr.length === 2) {
        if (numberStr[0] === '1') {
            str.push(`${integers[parseInt(numberStr[1]) + 10]}`);          
    } else {
        str.push(`${dozens[parseInt(numberStr[0]) - 1]}`);
        if (numberStr[1] !== '0') {
            str.push(`${integers[parseInt(numberStr[1])]}`);
        }
    }
} else {
    str.push(`${integers[parseInt(numberStr[0])]}`);
}
  let newStr = str.join(' ');
  return newStr;
}
