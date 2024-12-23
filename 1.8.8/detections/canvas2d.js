// @ts-check

var __engineInfo = {
    __isV8AndNotChromium: false,
    __isJavaScriptCore: false,
    __testFonts: "\n\t'Segoe Fluent Icons',\n\t'Ink Free',\n\t'Bahnschrift',\n\t'Segoe MDL2 Assets',\n\t'HoloLens MDL2 Assets',\n\t'Leelawadee UI',\n\t'Javanese Text',\n\t'Segoe UI Emoji',\n\t'Aldhabi',\n\t'Gadugi',\n\t'Myanmar Text',\n\t'Nirmala UI',\n\t'Lucida Console',\n\t'Cambria Math',\n\t'Bai Jamjuree',\n\t'Chakra Petch',\n\t'Charmonman',\n\t'Fahkwang',\n\t'K2D',\n\t'Kodchasan',\n\t'KoHo',\n\t'Sarabun',\n\t'Srisakdi',\n\t'Galvji',\n\t'MuktaMahee Regular',\n\t'InaiMathi Bold',\n\t'American Typewriter Semibold',\n\t'Futura Bold',\n\t'SignPainter-HouseScript Semibold',\n\t'PingFang HK Light',\n\t'Kohinoor Devanagari Medium',\n\t'Luminari',\n\t'Geneva',\n\t'Helvetica Neue',\n\t'Droid Sans Mono',\n\t'Dancing Script',\n\t'Roboto',\n\t'Ubuntu',\n\t'Liberation Mono',\n\t'Source Code Pro',\n\t'DejaVu Sans',\n\t'OpenSymbol',\n\t'Chilanka',\n\t'Cousine',\n\t'Arimo',\n\t'Jomolhari',\n\t'MONO',\n\t'Noto Color Emoji',\n\tsans-serif !important\n",
    __isDesktopOrMobileType: () => 'desktop',
    __webglInfo: {},
}

var __documentInfo = {
    __iframeWindow: false,
}

var __browserInfo = {
    __isChromium: () => true,
}

var __window = window;

var __encodeText =
    (String.fromCharCode(26 * Math.random() + 97),
        Math.random().toString(36).slice(-7),
        (str, __cryptoMethod = 'SHA-256') => {
            const _0x16b612 = '' + JSON.stringify(str),
                _0x162787 = new TextEncoder().encode(_0x16b612)
            return crypto.subtle
                ? crypto.subtle.digest(__cryptoMethod, _0x162787).then((_0x590fb5) =>
                    Array.from(new Uint8Array(_0x590fb5))
                        .map((_0x5c3537) => ('00' + _0x5c3537.toString(16)).slice(-2))
                        .join('')
                )
                : ''
        });

const __paintSomethingInCanvas = ({
    canvas: __canvas,
    context: __context,
    strokeText: __strokeText = false,
    cssFontFamily: __cssFontFamily = '',
    area: __area = {
        width: 0x32,
        height: 0x32,
    },
    rounds: __rounds = 10,
    maxShadowBlur: __maxShadowBlur = 50,
    seed: _seed = 500,
    offset: __offset = 2001000001,
    multiplier: __multiplier = 15000,
}) => {
    if (!__context) return
    __context.clearRect(0, 0, __canvas.width, __canvas.height),
        (__canvas.width = __area.width),
        (__canvas.height = __area.height),
        __canvas.style && (__canvas.style.display = 'none')
    const _0x283fec = (({ seed: _0x2ed62f, offset: _0x5b150f, multiplier: _0x436176 }) => {
        let _0x31ca39 = Number(_0x2ed62f) % Number(_0x5b150f)
        return {
            getNextSeed: () => (
                (_0x31ca39 = (Number(_0x436176) * _0x31ca39) % Number(_0x5b150f)), _0x31ca39
            ),
        }
    })({
        seed: _seed,
        offset: __offset,
        multiplier: __multiplier,
    }),
        { getNextSeed: _0xc08c06 } = _0x283fec,
        _0x19c797 = (_0x240d35, _0x48e37c, _0x3fedb4, _0x74d04d) => {
            const _0x116b8f = ((_0x240d35 - 1) / _0x48e37c) * (_0x3fedb4 || 1) || 0
            return _0x74d04d ? _0x116b8f : Math.floor(_0x116b8f)
        },
        _0x2ee46b = [
            '#FF6633',
            '#FFB399',
            '#FF33FF',
            '#FFFF99',
            '#00B3E6',
            '#E6B333',
            '#3366E6',
            '#999966',
            '#99FF99',
            '#B34D4D',
            '#80B300',
            '#809900',
            '#E6B3B3',
            '#6680B3',
            '#66991A',
            '#FF99E6',
            '#CCFF1A',
            '#FF1A66',
            '#E6331A',
            '#33FFCC',
            '#66994D',
            '#B366CC',
            '#4D8000',
            '#B33300',
            '#CC80CC',
            '#66664D',
            '#991AFF',
            '#E666FF',
            '#4DB3FF',
            '#1AB399',
            '#E666B3',
            '#33991A',
            '#CC9999',
            '#B3B31A',
            '#00E680',
            '#4D8066',
            '#809980',
            '#E6FF80',
            '#1AFF33',
            '#999933',
            '#FF3380',
            '#CCCC00',
            '#66E64D',
            '#4D80CC',
            '#9900B3',
            '#E64D66',
            '#4DB380',
            '#FF4D4D',
            '#99E6E6',
            '#6666FF',
        ],
        _0x2c5ca9 = [
            (_0x53637f, _0x5f1254, _0x26038b, _0x54274) => {
                const { width: _0x3c6a92, height: _0x5a1455 } = _0x26038b
                _0x53637f.beginPath(),
                    _0x53637f.arc(
                        _0x19c797(_0x54274(), _0x5f1254, _0x3c6a92),
                        _0x19c797(_0x54274(), _0x5f1254, _0x5a1455),
                        _0x19c797(_0x54274(), _0x5f1254, Math.min(_0x3c6a92, _0x5a1455)),
                        _0x19c797(_0x54274(), _0x5f1254, 2 * Math.PI, true),
                        _0x19c797(_0x54274(), _0x5f1254, 2 * Math.PI, true)
                    ),
                    _0x53637f.stroke()
            },
            (_0x4072ea, _0x23bf0d, _0x1b0dba, _0x59f319) => {
                const { width: _0x51d3bb, height: _0x607ded } = _0x1b0dba
                _0x4072ea.beginPath(),
                    _0x4072ea.moveTo(
                        _0x19c797(_0x59f319(), _0x23bf0d, _0x51d3bb),
                        _0x19c797(_0x59f319(), _0x23bf0d, _0x607ded)
                    ),
                    _0x4072ea.bezierCurveTo(
                        _0x19c797(_0x59f319(), _0x23bf0d, _0x51d3bb),
                        _0x19c797(_0x59f319(), _0x23bf0d, _0x607ded),
                        _0x19c797(_0x59f319(), _0x23bf0d, _0x51d3bb),
                        _0x19c797(_0x59f319(), _0x23bf0d, _0x607ded),
                        _0x19c797(_0x59f319(), _0x23bf0d, _0x51d3bb),
                        _0x19c797(_0x59f319(), _0x23bf0d, _0x607ded)
                    ),
                    _0x4072ea.stroke()
            },
            (_0x836045, _0x42a30a, _0x1ec9a6, _0x4ed5c0) => {
                const { width: _0x1ac981, height: _0x28444b } = _0x1ec9a6
                _0x836045.beginPath(),
                    _0x836045.moveTo(
                        _0x19c797(_0x4ed5c0(), _0x42a30a, _0x1ac981),
                        _0x19c797(_0x4ed5c0(), _0x42a30a, _0x28444b)
                    ),
                    _0x836045.quadraticCurveTo(
                        _0x19c797(_0x4ed5c0(), _0x42a30a, _0x1ac981),
                        _0x19c797(_0x4ed5c0(), _0x42a30a, _0x28444b),
                        _0x19c797(_0x4ed5c0(), _0x42a30a, _0x1ac981),
                        _0x19c797(_0x4ed5c0(), _0x42a30a, _0x28444b)
                    ),
                    _0x836045.stroke()
            },
        ]
    __engineInfo.__isJavaScriptCore ||
        _0x2c5ca9.push((_0x4e505f, _0x3524cf, _0x5b9ea2, _0x230da5) => {
            if (!('ellipse' in _0x4e505f)) return
            const { width: _0x18b167, height: _0x415e87 } = _0x5b9ea2
            _0x4e505f.beginPath(),
                _0x4e505f.ellipse(
                    _0x19c797(_0x230da5(), _0x3524cf, _0x18b167),
                    _0x19c797(_0x230da5(), _0x3524cf, _0x415e87),
                    _0x19c797(_0x230da5(), _0x3524cf, Math.floor(_0x18b167 / 2)),
                    _0x19c797(_0x230da5(), _0x3524cf, Math.floor(_0x415e87 / 2)),
                    _0x19c797(_0x230da5(), _0x3524cf, 2 * Math.PI, true),
                    _0x19c797(_0x230da5(), _0x3524cf, 2 * Math.PI, true),
                    _0x19c797(_0x230da5(), _0x3524cf, 2 * Math.PI, true)
                ),
                _0x4e505f.stroke()
        }),
        __strokeText &&
        _0x2c5ca9.push((_0x2a8e57, _0x745b3f, _0xd54e3d, _0x5b63dc) => {
            const { width: _0x167d0a, height: _0x5d5531 } = _0xd54e3d
                ; (_0x2a8e57.font = _0x5d5531 / 2.99 + 'px ' + __cssFontFamily.replace(/!important/gm, '')),
                    _0x2a8e57.strokeText(
                        '👾A',
                        _0x19c797(_0x5b63dc(), _0x745b3f, _0x167d0a),
                        _0x19c797(_0x5b63dc(), _0x745b3f, _0x5d5531),
                        _0x19c797(_0x5b63dc(), _0x745b3f, _0x167d0a)
                    )
        }),
        [...Array(__rounds)].forEach(() => {
            ; ((_0x189ef0, _0x239625, _0x1e0d35, _0x41c7d3, _0x5d464a) => {
                const { width: _0x382634, height: _0x56816b } = _0x1e0d35,
                    _0x1507f1 = _0x189ef0.createRadialGradient(
                        _0x19c797(_0x5d464a(), _0x239625, _0x382634),
                        _0x19c797(_0x5d464a(), _0x239625, _0x56816b),
                        _0x19c797(_0x5d464a(), _0x239625, _0x382634),
                        _0x19c797(_0x5d464a(), _0x239625, _0x382634),
                        _0x19c797(_0x5d464a(), _0x239625, _0x56816b),
                        _0x19c797(_0x5d464a(), _0x239625, _0x382634)
                    )
                _0x1507f1.addColorStop(0, _0x41c7d3[_0x19c797(_0x5d464a(), _0x239625, _0x41c7d3.length)]),
                    _0x1507f1.addColorStop(
                        1,
                        _0x41c7d3[_0x19c797(_0x5d464a(), _0x239625, _0x41c7d3.length)]
                    ),
                    (_0x189ef0.fillStyle = _0x1507f1)
            })(__context, __offset, __area, _0x2ee46b, _0xc08c06),
                (__context.shadowBlur = _0x19c797(_0xc08c06(), __offset, __maxShadowBlur, true)),
                (__context.shadowColor = _0x2ee46b[_0x19c797(_0xc08c06(), __offset, _0x2ee46b.length)]),
                (0, _0x2c5ca9[_0x19c797(_0xc08c06(), __offset, _0x2c5ca9.length)])(
                    __context,
                    __offset,
                    __area,
                    _0xc08c06
                ),
                __context.fill()
        })
}

async function __getCanvas2dInfo() {
    var textMetricsLie = false;
    let __canvasLied = false,
        __window = window
    !__engineInfo.__isV8AndNotChromium && __documentInfo.__iframeWindow && (__window = __documentInfo.__iframeWindow)
    const __document = __window.document,
        __canvas = __document.createElement('canvas'),
        __context2d = __canvas.getContext('2d'),
        __linearGradient = __context2d.createLinearGradient(0, 0, 0, __canvas.height)
    __linearGradient.addColorStop(0, 'rgb(101, 172, 251)'),
        __linearGradient.addColorStop(1, 'rgba(76, 78, 78, 0.5)'),
        (__context2d.fillStyle = __linearGradient),
        __context2d.fillRect(0, 0, __canvas.width, __canvas.height),
        (__context2d.fillStyle = 'rgba(101,172,251,0.7)'),
        (__context2d.font = '30px Arial'),
        __context2d.fillText('Fake Vision', 20, 40),
        (__context2d.globalAlpha = 0.05),
        (__context2d.font = '20px Arial'),
        __context2d.fillText('fv', 10, __canvas.height - 10),
        (__context2d.globalAlpha = 1)
    const __canvas2 = __document.createElement('canvas'),
        __context2d2 = __canvas2.getContext('2d', {
            desynchronized: true,
            willReadFrequently: true,
        })
    if (!__context2d)
        throw new Error('canvas\x20context\x20blocked')
    const _0x2e612d = __canvas.toDataURL(),
        _0x17cfeb = __context2d.getImageData(0, 0, __canvas.width, __canvas.height),
        _0x3b7365 = await new Promise((resolve) => {
            __canvas.toBlob(async (_0x55fd08) => {
                const _0x232c89 = await _0x55fd08.arrayBuffer(),
                    _0xd098eb = new Uint8Array(_0x232c89)
                resolve(_0xd098eb)
            }
            )
        }),
        _0x102832 = (() => {
            const _0x5327e0 = [],
                _0x59caf0 = []
            try {
                const _0x2cd7ac = {
                    willReadFrequently: true,
                    desynchronized: true,
                },
                    _0x569d0b = document.createElement('canvas'),
                    _0x59759c = document.createElement('canvas'),
                    _0x5e6d8a = document.createElement('canvas'),
                    _0x5bca03 = document.createElement('canvas'),
                    _0x3b5a10 = _0x569d0b.getContext('2d', _0x2cd7ac),
                    _0x1b1504 = _0x59759c.getContext('2d', _0x2cd7ac),
                    _0x295650 = _0x5e6d8a.getContext('2d', _0x2cd7ac),
                    _0x2162ee = _0x5bca03.getContext('2d', _0x2cd7ac)
                if (!(_0x3b5a10 && _0x1b1504 && _0x295650 && _0x2162ee))
                    throw new Error('canvas\x20context\x20blocked')
                    ; (_0x569d0b.width = 40),
                        (_0x569d0b.height = 40),
                        (_0x59759c.width = 40),
                        (_0x59759c.height = 40),
                        (_0x5e6d8a.width = 8),
                        (_0x5e6d8a.height = 8),
                        (_0x5bca03.width = 8),
                        (_0x5bca03.height = 8),
                        [...Array(8)].forEach((_0x170835, _0x250712) =>
                            [...Array(8)].forEach((_0x29030b, _0x235432) => {
                                const _0xa56bd4 =
                                    ~~(256 * Math.random()) +
                                    ',\x20' +
                                    ~~(256 * Math.random()) +
                                    ',\x20' +
                                    ~~(256 * Math.random()) +
                                    ',\x20255'
                                return (
                                    (_0x295650.fillStyle = 'rgba(' + _0xa56bd4 + ')'),
                                    _0x295650.fillRect(_0x250712, _0x235432, 1, 1),
                                    (_0x3b5a10.fillStyle = 'rgba(' + _0xa56bd4 + ')'),
                                    _0x3b5a10.fillRect(5 * _0x250712, 5 * _0x235432, 5, 5),
                                    _0x5327e0.push(_0xa56bd4)
                                )
                            })
                        ),
                        [...Array(8)].forEach((_0xaf0690, _0x44d6b1) =>
                            [...Array(8)].forEach((_0x1627ca, _0x407861) => {
                                const {
                                    data: [_0x8d4d88, _0x17aaef, _0x42ceec, _0xdc4207],
                                } = _0x295650.getImageData(_0x44d6b1, _0x407861, 1, 1) || {},
                                    _0x493f07 =
                                        _0x8d4d88 +
                                        ',\x20' +
                                        _0x17aaef +
                                        ',\x20' +
                                        _0x42ceec +
                                        ',\x20' +
                                        _0xdc4207
                                    ; (_0x2162ee.fillStyle = 'rgba(' + _0x493f07 + ')'),
                                        _0x2162ee.fillRect(_0x44d6b1, _0x407861, 1, 1)
                                const {
                                    data: [_0x24fe75, _0x13a80c, _0x375888, _0x4f6b3a],
                                } = _0x2162ee.getImageData(_0x44d6b1, _0x407861, 1, 1) || {},
                                    _0x208cff =
                                        '\n\t\t\t\t' +
                                        (_0x8d4d88 != _0x24fe75 ? _0x24fe75 : 255) +
                                        ',\n\t\t\t\t' +
                                        (_0x17aaef != _0x13a80c ? _0x13a80c : 255) +
                                        ',\n\t\t\t\t' +
                                        (_0x42ceec != _0x375888 ? _0x375888 : 255) +
                                        ',\x0a\x09\x09\x09\x09' +
                                        (_0xdc4207 != _0x4f6b3a ? _0x4f6b3a : 1) +
                                        '\x0a\x09\x09\x09'
                                return (
                                    (_0x1b1504.fillStyle = 'rgba(' + _0x208cff + ')'),
                                    _0x1b1504.fillRect(5 * _0x44d6b1, 5 * _0x407861, 5, 5),
                                    _0x59caf0.push(_0x493f07)
                                )
                            })
                        )
                const _0xc921db = [],
                    _0x205615 = new Set()
                    ;[...Array(_0x5327e0.length)].forEach((_0x3e70f8, _0x496c49) => {
                        const _0x302ad1 = _0x5327e0[_0x496c49],
                            _0x58384f = _0x59caf0[_0x496c49]
                        if (_0x302ad1 != _0x58384f) {
                            const _0x1a5582 = _0x302ad1.split(','),
                                _0x384cdd = _0x58384f.split(','),
                                _0x59e828 = [
                                    _0x1a5582[0] != _0x384cdd[0] ? 'r' : '',
                                    _0x1a5582[1] != _0x384cdd[1] ? 'g' : '',
                                    _0x1a5582[2] != _0x384cdd[2] ? 'b' : '',
                                    _0x1a5582[3] != _0x384cdd[3] ? 'a' : '',
                                ].join('')
                            _0x205615.add(_0x59e828), _0xc921db.push([_0x496c49, _0x59e828])
                        }
                    })
                const _0x3ad7ac = _0x59759c.toDataURL()
                return {
                    rgba: _0x205615.size ? [..._0x205615].sort().join(',\x20') : void 0,
                    pixels: _0xc921db.length || void 0,
                    pixelImage: _0x3ad7ac,
                }
            } catch (_0x20d4a7) {
                return console.error(_0x20d4a7)
            }
        })();

    (__context2d.font = '10px\x20' + __engineInfo.__testFonts.replace(/!important/gm, ''))
    const _0x1e33e9 = 75
    __paintSomethingInCanvas({
        canvas: __canvas,
        context: __context2d,
        area: {
            width: _0x1e33e9,
            height: _0x1e33e9,
        },
    }),
        __paintSomethingInCanvas({
            canvas: __canvas2,
            context: __context2d2,
            area: {
                width: _0x1e33e9,
                height: _0x1e33e9,
            },
        }),
        __context2d.restore(),
        __context2d.clearRect(0, 0, __canvas.width, __canvas.height),
        (__canvas.width = 50),
        (__canvas.height = 50),
        (__context2d.font = '50px\x20' + __engineInfo.__testFonts.replace(/!important/gm, '')),
        __context2d.fillText('A', 7, 37),
        __context2d.restore(),
        __context2d.clearRect(0, 0, __canvas.width, __canvas.height),
        (__canvas.width = 50),
        (__canvas.height = 50),
        (__context2d.font = '35px\x20' + __engineInfo.__testFonts.replace(/!important/gm, '')),
        __context2d.fillText('👾', 0, 37),
        __context2d.clearRect(0, 0, __canvas.width, __canvas.height),
        (0, __browserInfo.__isChromium)() &&
        'mobile' !== (0, __engineInfo.__isDesktopOrMobileType)() &&
        ((_0x102832 && _0x102832.pixels) ||
            Math.max(...__context2d.getImageData(0, 0, 8, 8).data)) &&
        ((__canvasLied = true), __detectResults.Z.setValue('canvas2d', '1')),
        (__canvas.width = 2),
        (__canvas.height = 2),
        (__context2d.fillStyle = '#000'),
        __context2d.fillRect(0, 0, __canvas.width, __canvas.height),
        (__context2d.fillStyle = '#fff'),
        __context2d.fillRect(2, 2, 1, 1),
        __context2d.beginPath(),
        __context2d.arc(0, 0, 2, 0, 1, true),
        __context2d.closePath(),
        __context2d.fill()
    const _0xed49f8 = __context2d.getImageData(0, 0, 2, 2).data.join(''),
        _0x4a9230 = {
            BLINK: [
                '255255255255178178178255246246246255555555255',
                '255255255255192192192255240240240255484848255',
                '255255255255177177177255246246246255535353255',
                '255255255255128128128255191191191255646464255',
                '255255255255178178178255247247247255565656255',
                '255255255255174174174255242242242255474747255',
                '255255255255229229229255127127127255686868255',
                '255255255255192192192255244244244255535353255',
            ],
            GECKO: [
                '255255255255191191191255207207207255646464255',
                '255255255255192192192255240240240255484848255',
                '255255255255191191191255239239239255646464255',
                '255255255255191191191255223223223255606060255',
                '255255255255171171171255223223223255606060255',
            ],
            WEBKIT: [
                '255255255255185185185255233233233255474747255',
                '255255255255185185185255229229229255474747255',
                '255255255255185185185255218218218255474747255',
                '255255255255192192192255240240240255484848255',
                '255255255255178178178255247247247255565656255',
                '255255255255178178178255247247247255565656255',
                '255255255255192192192255240240240255484848255',
                '255255255255186186186255218218218255464646255',
            ],
        }
        ; (__engineInfo.__webglInfo.imageDataLowEntropy = _0xed49f8),
            ((__engineInfo.__isV8 && !_0x4a9230.BLINK.includes(_0xed49f8)) ||
                (__engineInfo.__isSpiderMonkey && !_0x4a9230.GECKO.includes(_0xed49f8)) ||
                (__engineInfo.__isJavaScriptCore && !_0x4a9230.WEBKIT.includes(_0xed49f8))) &&
            (__engineInfo._w.CANVAS = true)
    const _0x4e475a = (_0x16ff1f) => {
        const {
            actualBoundingBoxAscent: _0x28b114,
            actualBoundingBoxDescent: _0x4aa8f5,
            actualBoundingBoxLeft: _0x2dd515,
            actualBoundingBoxRight: _0x29a933,
            fontBoundingBoxAscent: _0x2fa6c7,
            fontBoundingBoxDescent: _0x324414,
        } = _0x16ff1f.measureText('') || {},
            _0x1d4a90 = [_0x28b114, _0x4aa8f5, _0x2dd515, _0x29a933, _0x2fa6c7, _0x324414].find(
                (_0x46eed0) => ((_0x2b0414) => _0x2b0414 % 1 != 0)(_0x46eed0 || 0)
            )
        return _0x1d4a90
    }
        ; (0, __browserInfo.__isChromium)() &&
            'mobile' !== (0, __engineInfo.__isDesktopOrMobileType)() &&
            _0x4e475a(__context2d) &&
            (console.error('getTextMetricsFloatLie'),
                (textMetricsLie = true),
                (__canvasLied = true),
                __detectResults.Z.setValue('canvas2d', '3'))
    const _0xb2473e = await __encodeText(_0x2e612d),
        _0x3ee757 = {
            dataURI: _0x2e612d,
            toDataURL: _0xb2473e,
            getImageData: await __encodeText(_0x17cfeb),
            toBlob: await __encodeText(_0x3b7365),
            lied: __canvasLied,
            textMetricsLie: textMetricsLie,
        };
    return _0x3ee757;
}
