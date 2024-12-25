// @ts-check

(async () => {
    try {
        const __timeLogger = (0, __engineInfo.__timeLogger)()
        __timeLogger.start()
        const _0x194269 = (function (_0x97d7f0) {
            const _0x3e7ccd = []
            let _0x41c397
            const _0x32913c = _0x97d7f0.length
            for (_0x41c397 = 0; _0x41c397 < _0x32913c; _0x41c397++)
                try {
                    _0x97d7f0[_0x41c397]()
                } catch (_0x5ab1f2) {
                    _0x3e7ccd.push(_0x5ab1f2.message)
                }
            return _0x3e7ccd
        })([
            () => new Function('alert(")')(),
            () => new Function('const foo;foo.bar')(),
            () => new Function('null.bar')(),
            () => new Function('abc.xyz = 123')(),
            () => new Function('const foo;foo.bar')(),
            () => new Function('(1).toString(1000)')(),
            () => new Function('[...undefined].length')(),
            () => new Function('var x = new Array(-1)')(),
            () => new Function('const a=1; const a=2;')(),
        ]),
            _0x280775 = {
                errors: _0x194269,
            },
            _0x4db5b5 = yield(0, _0x3c078b.__encodeText)(_0x194269)
        return (_0x280775.hash = _0x4db5b5), (_0x280775.computingTime = __timeLogger.stop()), _0x280775
    } catch (_0x1c0612) {
        return
    }
})().then(result => {
    debugger;
    console.log(result);
})