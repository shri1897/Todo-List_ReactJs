import { isArray, isObject, isDate } from 'util';

export function deepCopy(element) {
    if (isArray(element)) {
        return element.map(el => {
            return deepCopy(el);
        });
    } else if (isDate(element)) {
        return new Date(element);
    } else if (isObject(element)) {
        let newObect = {};
        for (let key in element) {
            newObect[key] = deepCopy(element[key])
        };
        return newObect;
    } else {
        return element;
    }
}
