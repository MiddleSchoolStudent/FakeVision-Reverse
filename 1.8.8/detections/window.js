// @ts-check

(async () => {
    {
        return (
            (_0x3828fd = this),
            (_0x306f61 = undefined),
            (_0x5d7fe1 = function* () {
                try {
                    ; (0, __engineInfo.__timeLogger)().start()
                    const __window = __documentInfo.__iframeWindow || window
                    let _0x2dcf00 = Object.getOwnPropertyNames(__window).filter(
                        (_0xae76e) => !/_|\d{3,}/.test(_0xae76e)
                    )
                    const _0x161abe = 'Event',
                        _0x3c2822 = ['PerformanceNavigationTiming', 'Performance']
                    if (__engineInfo.__isSpiderMonkey) {
                        const _0x92ca8f = _0x2dcf00.indexOf(_0x161abe)
                            ; -1 != _0x92ca8f &&
                                ((_0x2dcf00 = _0x2dcf00.slice(0, _0x92ca8f).concat(_0x2dcf00.slice(_0x92ca8f + 1))),
                                    (_0x2dcf00 = [..._0x2dcf00, _0x161abe])),
                                _0x3c2822.forEach((_0x37655a) => {
                                    const _0x282a1c = _0x2dcf00.indexOf(_0x37655a)
                                    return (
                                        -1 != _0x282a1c &&
                                        (_0x2dcf00 = _0x2dcf00
                                            .slice(0, _0x282a1c)
                                            .concat(_0x2dcf00.slice(_0x282a1c + 1))),
                                        _0x2dcf00
                                    )
                                })
                    }
                    const _0x290335 = _0x2dcf00.filter((_0x224348) => /moz/i.test(_0x224348)).length,
                        _0x3f739f = _0x2dcf00.filter((_0x5a0261) => /webkit/i.test(_0x5a0261)).length,
                        _0xec3bea = _0x2dcf00.filter((_0x289a2c) => /apple/i.test(_0x289a2c)).length,
                        _0x12b6a1 = {
                            keys: _0x2dcf00,
                            apple: _0xec3bea,
                            moz: _0x290335,
                            webkit: _0x3f739f,
                        }
                    return Object.assign({}, _0x12b6a1)
                } catch (_0x1d14ec) {
                    return
                }
            }),
            new ((_0x3a7096 = undefined) || (_0x3a7096 = Promise))(function (_0x3ab522, _0x2bfa6c) {
                function _0x10407e(_0x27058d) {
                    try {
                        _0x22bd83(_0x5d7fe1.next(_0x27058d))
                    } catch (_0xe1f677) {
                        _0x2bfa6c(_0xe1f677)
                    }
                }
                function _0x1d9151(_0x5d6be1) {
                    try {
                        _0x22bd83(_0x5d7fe1.throw(_0x5d6be1))
                    } catch (_0x3183b4) {
                        _0x2bfa6c(_0x3183b4)
                    }
                }
                function _0x22bd83(_0x25f6a0) {
                    var _0x12d782
                    _0x25f6a0.done
                        ? _0x3ab522(_0x25f6a0.value)
                        : ((_0x12d782 = _0x25f6a0.value),
                            _0x12d782 instanceof _0x3a7096
                                ? _0x12d782
                                : new _0x3a7096(function (_0x2496de) {
                                    _0x2496de(_0x12d782)
                                })).then(_0x10407e, _0x1d9151)
                }
                _0x22bd83((_0x5d7fe1 = _0x5d7fe1.apply(_0x3828fd, _0x306f61 || [])).next())
            })
        )
        var _0x3828fd, _0x306f61, _0x3a7096, _0x5d7fe1
    }
})().then(result => {
    console.log(result);
    debugger;
})