// @ts-check

(async () => {
    return (
        (_0x284979 = this),
        (_0x4b59f0 = undefined),
        (_0x3ab861 = function* () {
            try {
                const keys = []
                for (const el in document.documentElement) keys.push(el)
                return {
                    keys: keys,
                }
            } catch (error) {
                return (
                    (0, __engineInfo.__logTestResult)({
                        test: 'html element',
                        passed: false,
                    }),
                    void (0, __logAndSafeCall.captureError)(error)
                )
            }
        }),
        new ((_0x150186 = undefined) || (_0x150186 = Promise))(function (_0x13b386, _0x562401) {
            function _0x35d592(_0x40f662) {
                try {
                    _0x1dac2e(_0x3ab861.next(_0x40f662))
                } catch (_0x23954a) {
                    _0x562401(_0x23954a)
                }
            }
            function _0x508619(_0x13057c) {
                try {
                    _0x1dac2e(_0x3ab861.throw(_0x13057c))
                } catch (_0x41bdad) {
                    _0x562401(_0x41bdad)
                }
            }
            function _0x1dac2e(_0x109b23) {
                var _0x40bd6e
                _0x109b23.done
                    ? _0x13b386(_0x109b23.value)
                    : ((_0x40bd6e = _0x109b23.value),
                        _0x40bd6e instanceof _0x150186
                            ? _0x40bd6e
                            : new _0x150186(function (_0x3fcda4) {
                                _0x3fcda4(_0x40bd6e)
                            })).then(_0x35d592, _0x508619)
            }
            _0x1dac2e((_0x3ab861 = _0x3ab861.apply(_0x284979, _0x4b59f0 || [])).next())
        })
    )
    var _0x284979, _0x4b59f0, _0x150186, _0x3ab861
})().then(result => {
    debugger;
    console.log(result);
})