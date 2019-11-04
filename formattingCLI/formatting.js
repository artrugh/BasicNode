module.exports.prepareString = input => {

    let result = input.map( cur => removeWhitespace(cur) )

    //let result = removeWhitespace(input);
    let tmpArray = result.map(cur => cur.split(" "));
    // The split() method splits a string into an array of strings;

    tmpArray = tmpArray.map(array => array.map(cur =>  capitalizeInitial(cur)))
    // the map() method creates a NEW array with the results of calling a provided
    //function on every element
    result = tmpArray.map(array => array.join(" "));
    return result;
}

const removeWhitespace = input => {
    let result = input.trim();
    // .trim() detele spaces at the beggining and end "     jasd    " = "jasd"
    return result
}

const capitalizeInitial = input => {
    let result = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    return result
}