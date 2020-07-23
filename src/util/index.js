function keyBy(arr, key, pickProp = '') {
    return arr.reduce((prev, curr) => {
        return Object.assign(prev, { [curr[key]]: pickProp ? curr[pickProp] : curr });
    }, {});
}

export {
    keyBy
}