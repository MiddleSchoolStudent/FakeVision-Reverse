// @ts-check

(async () => {
    let result = false
    const err = new Error()
    return (
        Object.defineProperty(err, 'stack', {
            configurable: false,
            enumerable: false,
            get: function () {
                return (result = true), ''
            },
        }),
        console.debug(err),
        result && __detectResults.Z.setValue('misc', '1'),
        result
    )
})().then(result => {
    debugger;
    console.log(result);
})