module.exports.star = (args) => {

    if (args.length === 2) {

        // Number convert a string in a number if it a number or in a NaN if it is not

        const number = Number(args[0]);
        const word = Number(args[1]);
        
        if (typeof number === "number" && !isNaN(number) && isNaN(word)) {
            return "*".repeat(number) + args[1] + "*".repeat(number);
        }
        return "Remember please, first argument must be a number and second a string!"
    }
    return "*".repeat(3) + "hi" + "*".repeat(3);
}