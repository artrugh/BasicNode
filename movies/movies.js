module.exports = (name) => {
    const favMovie = {
        Vassia: "The Hours",
        Dennis: "Jocker",
        Trine: "Interstelar",
        Benjamin: "Titanic",
        Nizar: "Casino"
    };
    
    // if this name doesn't exist in the object as a key
    if (!favMovie[name]) {
        // if it's empty
        if (name.length === 0) {
            name = "empty string"
        }
        return `Sorry, "${name}" is not in the list. Please try with another name.`
    }
    return favMovie[name];
}