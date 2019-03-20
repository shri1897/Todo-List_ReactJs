import { isDate } from 'util';

export function deepCopy(element) {
    if (Array.isArray(element)) {
        return element.map(el => {
            return deepCopy(el);
        });
    } else if (isDate(element)) {
        return new Date(element);
    } else if (element !== null && typeof element === 'object') {
        let newObect = {};
        for (let key in element) {
            newObect[key] = deepCopy(element[key])
        };
        return newObect;
    } else {
        return element;
    }
}
window.deepCopy = deepCopy;