// @ts-check

(async () => {
    {
        try {
            const __timeLogger = (0, __engineInfo.__timeLogger)()
            __timeLogger.start()
            let _0x3e616c = false
            const _0x4ab0df =
                __documentInfo.__iframeWindow &&
                    __documentInfo.__iframeWindow.document &&
                    __documentInfo.__iframeWindow.document.body
                    ? __documentInfo.__iframeWindow.document
                    : document,
                _0x585ded = document.createElement('div')
            _0x4ab0df.body.appendChild(_0x585ded),
                (0, _0x4e7621.r$)(
                    _0x585ded,
                    _0x4e7621.dy`
        <div id="svg-container">
            <style>
                #svg-container {
                    position: absolute;
                    left: -9999px;
                    height: auto;
                }

                #svg-container .shift-svg {
                    transform: scale(1.000999) !important;
                }

                .svgrect-emoji {
                    font-family: ${__engineInfo.__testFonts};
                    font-size: 200px !important;
                    height: auto;
                    position: absolute !important;
                    transform: scale(1.000999);
                }
            </style>
            <svg>
                <g id="svgBox">
                    ${__engineInfo.V6.map((_0x4ee03e) => '<text\x20x=\x2232\x22\x20y=\x2232\x22\x20class=\x22svgrect-emoji\x22>' + _0x4ee03e + '</text>').join('')}
                </g>
            </svg>
        </div>
    `
                ),
                yield(0, __engineInfo.__sleep)(__timeLogger)
            const _0x461d16 = (_0x269283) =>
                Object.keys(_0x269283.__proto__).reduce((_0x135900, _0x7fbb2e) => {
                    const _0x41cdcf = _0x269283[_0x7fbb2e]
                    return 'function' == typeof _0x41cdcf
                        ? _0x135900
                        : Object.assign(Object.assign({}, _0x135900), {
                            [_0x7fbb2e]: _0x41cdcf,
                        })
                }, {}),
                _0x29e633 = (_0xeae1eb) =>
                    Object.keys(_0xeae1eb.__proto__).reduce((_0x4d3a5d, _0x2299ca) => {
                        const _0x29cc08 = _0xeae1eb[_0x2299ca]
                        return isNaN(_0x29cc08) ? _0x4d3a5d : (_0x4d3a5d += _0x29cc08)
                    }, 0),
                _0x55a509 = (_0x5d701c) =>
                    _0x5d701c
                        ? Object.keys(_0x5d701c).reduce(
                            (_0x1de9f6, _0x14e559) => _0x1de9f6 + Math.abs(_0x5d701c[_0x14e559]),
                            0
                        )
                        : 0,
                _0x375ef7 = _0x4ab0df.getElementById('svgBox'),
                _0x48199b = _0x461d16(_0x375ef7.getBBox()),
                _0x3de1ab = new Set(),
                _0x13f8db = [..._0x375ef7.getElementsByClassName('svgrect-emoji')],
                _0x4c5b47 = _0x13f8db.reduce((_0x4a4815, _0x3b88b0, _0x16423d) => {
                    const _0x22e6ba = __engineInfo.V6[_0x16423d],
                        _0x515898 = '' + _0x3b88b0.getComputedTextLength()
                    return (
                        _0x3de1ab.has(_0x515898) || (_0x3de1ab.add(_0x515898), _0x4a4815.add(_0x22e6ba)),
                        _0x4a4815
                    )
                }, new Set()),
                _0x5ecbc6 =
                    0.00001 *
                    [..._0x3de1ab]
                        .map((_0x12316e) =>
                            _0x12316e
                                .split(',')
                                .reduce((_0x1021ac, _0x26ad9b) => _0x1021ac + (+_0x26ad9b || 0), 0)
                        )
                        .reduce((_0x41b855, _0x22aa06) => _0x41b855 + _0x22aa06, 0),
                _0x1cb388 = _0x13f8db[0],
                _0x415e0d = _0x1cb388.getComputedTextLength()
            _0x1cb388.classList.add('shift-svg')
            const _0x1d2bf6 = _0x1cb388.getComputedTextLength()
            _0x1cb388.classList.remove('shift-svg'),
                _0x415e0d - _0x1d2bf6 != _0x1cb388.getComputedTextLength() - _0x1d2bf6 &&
                ((_0x3e616c = true), __detectResults.Z.setValue('svgRects', '1')),
                yield(0, __engineInfo.__sleep)(__timeLogger)
            const _0x28abd5 = {
                bBox: _0x55a509(_0x48199b),
                extentOfChar: _0x29e633(_0x13f8db[0].getExtentOfChar(__engineInfo.V6[0])),
                subStringLength: _0x13f8db[0].getSubStringLength(0, 10),
                computedTextLength: _0x13f8db[0].getComputedTextLength(),
                emojiSet: [..._0x4c5b47],
                svgrectSystemSum: _0x5ecbc6,
                lied: _0x3e616c,
            }
            _0x4ab0df.body.removeChild(_0x4ab0df.getElementById('svg-container'))
            const _0x90aa87 = _0x28abd5
            return (
                (_0x90aa87.hash = yield(0, _0x3c078b.__encodeText)(_0x28abd5)),
                (_0x90aa87.computingTime = __timeLogger.stop()),
                _0x90aa87
            )
        } catch (_0x4530e1) {
            return
        }
    }
})().then(result => {
    console.log(result);
    debugger;
})