module.exports = function toReadable(number) {
    const numbersList = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    switch (true) {
        case number in numbersList:
            return numbersList[number];
            break;
        case number < 100:
            return `${toReadable(Math.floor(number / 10) * 10)} ${toReadable(
                number % 10
            )}`;
            break;
        case number % 100 === 0:
            return `${toReadable(Math.floor(number / 100))} hundred`;
            break;
        case number > 100:
            return `${toReadable(
                Math.floor(number / 100)
            )} hundred ${toReadable(number % 100)}`;
            break;
    }
};
