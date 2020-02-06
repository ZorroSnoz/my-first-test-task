export let required = (value) => {

    if (value) return undefined;
console.log(`Обов'язкове поле.`)
    return `Обов'язкове поле.`;

};

let maxLengthCreator = (maxLength) => (value) => {

    if (value.length > maxLength) return `Максимальна кількість символів ${maxLength}.`;

    return undefined;

};
let minLengthCreator = (minLength) => (value) => {

    if (value.length < minLength) return `Мінімальна кількість символів ${minLength}.`;

    return undefined;

};

export let phone = (value) => {

    if (value.length < 10 || value.length > 10) return `Зразок: 0991234567`;
    let VRegExp = new RegExp(/[^\D]{10}/);
    if(!VRegExp.test(value)) return `Зразок: 0991234567`;

    return undefined;

};


export let maxLength15 = maxLengthCreator(15);
export let maxLength3 = maxLengthCreator(3);

export let minLength2 = minLengthCreator(2);