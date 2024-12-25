// @ts-check

; (async () => {
    const __timeLogger = (0, __engineInfo.__timeLogger)()
    __timeLogger.start()
    const __document = document
    yield(0, __engineInfo.__sleep)(__timeLogger)
    const __context2d = document.createElement('canvas').getContext('2d')
    if (((__context2d.globalAlpha = 1), !__context2d)) throw new Error('canvas context blocked')
    __context2d.font = '10px ' + __engineInfo.__testFonts.replace(/!important/gm, '')
    const _0x4e3261 = new Set(),
        _0x2206d5 = _0xfe63b7.reduce((_0x1d441a, _0x171f99) => {
            const {
                actualBoundingBoxAscent: __actualBoundingBoxAscent,
                actualBoundingBoxDescent: __actualBoundingBoxDescent,
                actualBoundingBoxLeft: __actualBoundingBoxLeft,
                actualBoundingBoxRight: __actualBoundingBoxRight,
                fontBoundingBoxAscent: __fontBoundingBoxAscent,
                fontBoundingBoxDescent: __fontBoundingBoxDescent,
                width: __width,
            } = __context2d.measureText(_0x171f99) || {},
                _0x1fde24 = [
                    __actualBoundingBoxAscent,
                    __actualBoundingBoxDescent,
                    __actualBoundingBoxLeft,
                    __actualBoundingBoxRight,
                    __fontBoundingBoxAscent,
                    __fontBoundingBoxDescent,
                    __width,
                ].join(',')
            return _0x4e3261.has(_0x1fde24) || (_0x4e3261.add(_0x1fde24), _0x1d441a.add(_0x171f99)), _0x1d441a
        }, new Set())
    yield(0, __engineInfo.__sleep)(__timeLogger)
    const _0x371c26 = 'font-fingerprint',
        _0x5292e7 = __document.createElement('div')
    _0x5292e7.setAttribute('id', _0x371c26), __document.body.appendChild(_0x5292e7)
    const {
        emojiSet: _0xdc65d2,
        emojiSetDomRect: _0x5e38e1,
        emojiSetSvg: _0x116fe0,
    } = (({ doc: _0x24de38, id: _0x288959, emojis: _0x2557e3 }) => {
        try {
            ; (0, _0x4e7621.r$)(
                _0x24de38.getElementById(_0x288959),
                _0x4e7621.dy`
      <div id="pixel-emoji-container">
          <style>
              .pixel-emoji {
                  font-family: ${__engineInfo.__testFonts};
                  font-size: 200px !important;
                  height: auto;
                  position: absolute !important;
                  transform: scale(1.000999);
              }
          </style>
          ${_0x2557e3.map((_0x56d7e5) => '<div class="pixel-emoji">' + _0x56d7e5 + '</div>').join('')}
      </div>
      <svg id="svg-emoji-container">
          <g id="svgBox">
              ${_0x2557e3.map((_0x3f8a1b) => '<text\x20x=\x2232\x22\x20y=\x2232\x22\x20class=\x22svgrect-emoji\x22>' + _0x3f8a1b + '</text>').join('')}
          </g>
      </svg>
  `
            )
            const _0x1149e8 = _0x24de38.getElementById('svgBox'),
                _0x5a38cd = new Set(),
                _0x43b33d = [..._0x1149e8.getElementsByClassName('svgrect-emoji')].reduce(
                    (_0x1a0cfe, _0x16fbc0, _0x45d41d) => {
                        const _0x523b74 = _0x2557e3[_0x45d41d],
                            _0x5ed69b = '' + _0x16fbc0.getComputedTextLength()
                        return (
                            _0x5a38cd.has(_0x5ed69b) || (_0x5a38cd.add(_0x5ed69b), _0x1a0cfe.add(_0x523b74)),
                            _0x1a0cfe
                        )
                    },
                    new Set()
                ),
                _0x5ed0cb = (_0x14dd54) => ({
                    width: _0x14dd54.inlineSize,
                    height: _0x14dd54.blockSize,
                }),
                _0x2c2ea6 = new Set(),
                _0x4fd858 = [..._0x24de38.getElementsByClassName('pixel-emoji')],
                _0x2ff974 = _0x4fd858.reduce((_0xcf2ef1, _0x23e4eb, _0x24400f) => {
                    const _0x1c95fd = getComputedStyle(_0x23e4eb),
                        _0x1ed957 = _0x2557e3[_0x24400f],
                        { height: _0x330d54, width: _0x5d2997 } = _0x5ed0cb(_0x1c95fd),
                        _0x4ee480 = _0x5d2997 + ',' + _0x330d54
                    return (
                        _0x2c2ea6.has(_0x4ee480) || (_0x2c2ea6.add(_0x4ee480), _0xcf2ef1.add(_0x1ed957)), _0xcf2ef1
                    )
                }, new Set()),
                _0x41b1f2 = new Set(),
                _0xc28fe0 = _0x4fd858.reduce((_0x1e49ff, _0x281449, _0x522846) => {
                    const _0x5bf8bf = _0x2557e3[_0x522846],
                        { height: _0x39f446, width: _0x3bc65d } = ((_0x39fccd) => {
                            const _0x38ba2e = document.createRange()
                            return _0x38ba2e.selectNode(_0x39fccd), _0x38ba2e.getBoundingClientRect()
                        })(_0x281449),
                        _0x2518fb = _0x3bc65d + ',' + _0x39f446
                    return (
                        _0x41b1f2.has(_0x2518fb) || (_0x41b1f2.add(_0x2518fb), _0x1e49ff.add(_0x5bf8bf)), _0x1e49ff
                    )
                }, new Set())
            return (
                _0x24de38.getElementById('pixel-emoji-container').remove(),
                _0x24de38.getElementById('svg-emoji-container').remove(),
                {
                    emojiSet: [..._0x2ff974],
                    emojiSetDomRect: [..._0xc28fe0],
                    emojiSetSvg: [..._0x43b33d],
                }
            )
        } catch (_0x42bd39) {
            return (
                _0x24de38.getElementById('pixel-emoji-container').remove(),
                _0x24de38.getElementById('svg-emoji-container').remove(),
                console.error(_0x42bd39),
                {
                    emojiSet: [],
                    emojiSetDomRect: [],
                    emojiSetSvg: [],
                    pixelSizeSystemSum: 0x0,
                }
            )
        }
    })({
        doc: __document,
        id: _0x371c26,
        emojis: _0xfe63b7,
    }) || {},
        _0x47c97e = {
            canvas: [..._0x2206d5],
            fonts: [..._0xdc65d2],
            domRect: [..._0x5e38e1],
            svg: [..._0x116fe0],
        }
    return (
        (_0x47c97e.hash = yield(0, _0x3c078b.__encodeText)(_0x47c97e)),
        (_0x47c97e.computingTime = __timeLogger.stop()),
        _0x47c97e
    )
})().then((result) => {
    debugger
    console.log(result)
})
