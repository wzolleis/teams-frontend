/**
 * Chek if email is valid
 * @prop String email
 * @returns Boolean
 */
export const isEmail = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

/**
 * Chek if vatiable is empty
 * @prop String thing
 * @returns Boolean
 */
export const isEmpty = (thing: object | string): boolean => {
    let empty = false;
    if (typeof thing === "string" && thing.trim().length === 0) {
        empty = true;
    }
    switch (typeof thing) {
        case "undefined":
            empty = true;
            break;
        case "object":
            if (thing === null) {
                empty = true;
            } else if (Object.keys(thing).length === 0) {
                empty = true;
            }
    }

    return empty;
};

/**
 * Check length of the string greater than
 * @prop boolean|options.trim Trim input before validating
 * @prop number|options.lt Check if length less than lt
 * @prop number|options.lte Check if length is less than or equals to lte
 * @prop number|options.gt Check if length is greater than gt
 * @prop number|options.gte Check if length is greater than or equals to gte
 */
export const isLength = (str: string | number, options: any): boolean => {

    if (isEmpty(options)) {
        throw "Who will provide the options for you?";
    }

    let isValid = true;

    if (["string", "number"].indexOf(typeof str) === -1) {
        isValid = false;
    }

    return isValid;
};

/**
 * Check if string contains whitespaces
 * @prop String str
 * @returns Boolean
 */
export const isContainWhiteSpace = (str: string): boolean => {
    return str.toString().trim().indexOf(" ") !== -1;
};