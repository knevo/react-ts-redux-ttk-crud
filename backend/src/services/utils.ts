
export const makeId = (length: number = 6) => {
    let str = '',
        possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        str += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }
    return str;
}
export const removeEmptyFields = (obj: object) => {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null || v != undefined));
}
