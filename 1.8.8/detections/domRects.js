// @ts-check

(async () => {
    const __timeLogger = (0, __engineInfo.__timeLogger)()
    __timeLogger.start()
    const _0x1fc052 = 'dom-rect-tests',
        __document = document,
        __div = document.createElement('div')
    function _0x3b802c(_0x260057) {
        const _0x14bd3a = []
        return (
            new Uint32Array(_0x260057).forEach(function (_0x15ff1f) {
                _0x14bd3a.push(_0x15ff1f.toString(16))
            }),
            _0x14bd3a
                .map(function (_0x25c916) {
                    return '0'.repeat(8 - _0x25c916.length) + _0x25c916
                })
                .join('')
        )
    }
    __div.setAttribute('id', _0x1fc052),
        __document.body.appendChild(__div),
        (0, _0x4e7621.r$)(
            __div,
            _0x4e7621.dy`
  <div id="${_0x1fc052}">
      <style>

          #iframe, #svg {
              position: fixed;
              top: -2000%;
          }

          #noIframe {
              position: fixed;
              top: 0;
              left: 0;
              opacity: 0;
              z-index: -1;
          }

          #noIframe, #iframeBody {
              margin: 0px;
              padding: 8px;
          }

          .template {
              display: none;
          }

          .test {
              display: inline-block;
              margin: 1em;
          }

          .test .data table {
              border-collapse: collapse;
          }

          .test .data th {
              padding: 0.4em;
          }

          .test .data td {
              border: 1px solid #c7c7c7;
              padding: 0.4em;
          }

          .test .data td.value {
              text-align: right;
          }

          .small {
              font-size: 0.8em;
              color: gray;
          }

          .rectHash {
              font-size: 4px;
          }

          .rectHash:hover {
              font-size: 100%;
          }

          /*measured elements*/

          #inside {
              white-space: nowrap;

              color: #5B5B5B;
              position: absolute;
              padding: 1.3333px;
              left: 10.5555px;
              top: 28.4444px;
              font-size: 24.5555px;

              -ms-transform: scale(1.31123) matrix3d(0.373513, -0.0440105, 0, -0.000202461, -0.0851682, 0.616234, 0, -0.00123197, 2.17, 0.21, 1, 0.02, 13.81, 2.11, 0, 0.98);
              -moz-transform: scale(1.31123) matrix3d(0.373513, -0.0440105, 0, -0.000202461, -0.0851682, 0.616234, 0, -0.00123197, 2.17, 0.21, 1, 0.02, 13.81, 2.11, 0, 0.98);
              -webkit-transform: scale(1.31123) matrix3d(0.373513, -0.0440105, 0, -0.000202461, -0.0851682, 0.616234, 0, -0.00123197, 2.17, 0.21, 1, 0.02, 13.81, 2.11, 0, 0.98);
              transform: scale(1.31123) matrix3d(0.373513, -0.0440105, 0, -0.000202461, -0.0851682, 0.616234, 0, -0.00123197, 2.17, 0.21, 1, 0.02, 13.81, 2.11, 0, 0.98);

              -ms-transform-origin: 0.1111px 0.2222px 0.3333px;
              -moz-transform-origin: 0.1111px 0.2222px 0.3333px;
              -webkit-transform-origin: 0.1111px 0.2222px 0.3333px;
              transform-origin: 0.1111px 0.2222px 0.3333px;
          }

          #select {
              transform: rotate(1.23deg);
          }

          #progress {
              transform: scale(3.14);
              position: absolute;
              top: 300px;
              left: 200px;
          }

          #button {
              padding: 4.937px;
              margin: 9.876px;
          }

          .testRect {
              outline: 2px dotted lightblue;
          }

          .content-hidable.content-hidden .content, .content-hidable .anti-content {
              display: none;
          }

          .content-hidable .content, .content-hidable.content-hidden .anti-content {
              display: initial;
          }

          .content-hidable .toggle {
              cursor: pointer;
          }
      </style>
      <div id="noIframe">
          <div id="content">
              <div id="inside">
                  <h1 data-name="rect 0" class="testRect">https://www.example.com<i>/rects</i></h1>
                  <span data-name="rect 1"
                        class="testRect"><strong>Element.getClientRects (̿▀̿&thinsp;̿Ĺ̯̿̿▀̿ ̿)̄ </strong></span><br/>
                  <span data-name="rect 2" class="testRect"></span>
              </div>
              <select id="select" data-name="select" class="testRect">
                  <option>&minus;&#1726;-</option>
              </select>
              <progress id="progress" data-name="progress bar" class="testRect">test</progress>
              <button id="button" data-name="empty button" class="testRect"></button>
          </div>
      </div>
      <div id="tests">
          <div class="test" style="position: absolute; bottom: -10000px">
              <h3 class="title"></h3>
              Hash: <span class="hash"></span><br>
              <span class="content-hidable content-hidden">Data: <span class="toggle"><span class="anti-content">&plus;</span><span
                  class="content">&minus;</span></span><span class="data content"></span></span><br>
              <button class="refresh">refresh</button>
              <button class="performance">measure performance</button>
          </div>
      </div>
  </div>
`
        ),
        yield(0, __engineInfo.__sleep)(__timeLogger)
    const _0x2b09b8 = document.getElementById('tests'),
        _0x2adca2 = document.getElementById('svg-domrect'),
        _0x39a9f3 = document.getElementById('noIframe'),
        _0x4a52ed = document.querySelector('.test')
    _0x4a52ed && _0x4a52ed.parentElement.removeChild(_0x4a52ed),
        yield(0, __engineInfo.__sleep)(__timeLogger)
    const _0xe68d8a = ['x', 'y', 'width', 'height', 'top', 'left', 'right', 'bottom']
    function _0x5a2fd7(_0x2be1dc, _0x1f9ec5, _0x34783e) {
        return _0x13a8c3(this, undefined, undefined, function* () {
            return new Promise((_0x11f8f6) => {
                const _0x404b69 = _0x4a52ed.cloneNode(true)
                _0x2b09b8.appendChild(_0x404b69),
                    (function (_0x2987c3, _0x376966, _0x512895, _0xcd5b6e = true, _0xcc7a1b) {
                        var _0x5cbc0b
                        _0x13a8c3(this, undefined, undefined, function* () {
                            const _0x18ca2d = (yield Promise.all(
                                (function (_0x4fa64a = true) {
                                    const _0x3671cf = _0x4fa64a
                                        ? 'svg' === _0x4fa64a
                                            ? _0x2adca2.contentDocument
                                            : null
                                        : _0x39a9f3
                                    return Array.from(_0x3671cf.querySelectorAll('.testRect'))
                                })(_0xcd5b6e).map(function (_0x241b64) {
                                    return _0x13a8c3(this, undefined, undefined, function* () {
                                        return {
                                            name: _0x241b64.dataset.name,
                                            data: yield _0x512895(_0x241b64),
                                        }
                                    })
                                })
                            )).filter(function (_0x3043be) {
                                return _0x3043be.data
                            }),
                                _0x4a9726 = new Float64Array(_0x18ca2d.length * _0xe68d8a.length)
                            _0x18ca2d.forEach(function (_0x4657e0, _0x208d8c) {
                                _0xe68d8a.forEach(function (_0x191d51, _0x56da4b) {
                                    _0x4a9726[_0x208d8c * _0xe68d8a.length + _0x56da4b] =
                                        _0x4657e0.data[_0x191d51]
                                })
                            })
                            const _0x5162db = {
                                hash: _0x3b802c(
                                    yield null ===
                                        (_0x5cbc0b =
                                            null === crypto || undefined === crypto
                                                ? undefined
                                                : crypto.subtle) || undefined === _0x5cbc0b
                                        ? undefined
                                        : _0x5cbc0b.digest('SHA-256', _0x4a9726)
                                ),
                                data: _0x4a9726,
                                title: _0x2987c3,
                            }
                            _0xcc7a1b(_0x5162db)
                        })
                    })(_0x2be1dc, 0, _0x1f9ec5, _0x34783e, _0x11f8f6)
            })
        })
    }
    function _0x1c7318(_0x5c6cee, _0x4276d2, _0x3c06a8) {
        return _0x13a8c3(this, undefined, undefined, function* () {
            return _0x4276d2 instanceof Element
                ? new Promise(function (_0xeb2d99) {
                    const _0x2b172c = window.setTimeout(function () {
                        _0xeb2d99(null)
                    }, 1000)
                    new IntersectionObserver(
                        function (_0x3b2412) {
                            window.clearTimeout(_0x2b172c), _0xeb2d99(_0x3b2412[0][_0x3c06a8])
                        },
                        {
                            root: _0x5c6cee,
                            rootMargin: '1000px',
                        }
                    ).observe(_0x4276d2)
                })
                : null
        })
    }
    yield(0, __engineInfo.__sleep)(__timeLogger)
    const _0x1b19f6 = false,
        _0x5255cf = yield _0x5a2fd7(
            'Element.getClientRects',
            function (_0x2e8a1b) {
                return _0x2e8a1b.getClientRects()[0]
            },
            _0x1b19f6
        ),
        _0x5a1fb2 = yield _0x5a2fd7(
            'Element.getBoundingClientRect',
            function (_0x2dcdf8) {
                return _0x2dcdf8.getBoundingClientRect()
            },
            _0x1b19f6
        ),
        _0x284d30 = yield _0x5a2fd7(
            'IntersectionObserverEntry.intersectionRect',
            function (_0x5b0739) {
                return _0x1c7318(_0x5b0739.parentElement, _0x5b0739, 'intersectionRect')
            },
            _0x1b19f6
        ),
        _0x591595 = yield _0x5a2fd7(
            'IntersectionObserverEntry.boundingClientRect',
            function (_0x37daef) {
                return _0x1c7318(_0x37daef.parentElement, _0x37daef, 'boundingClientRect')
            },
            _0x1b19f6
        ),
        _0x381aa2 = yield _0x5a2fd7(
            'IntersectionObserverEntry.rootBounds',
            function (_0x3ed3de) {
                return _0x1c7318(_0x3ed3de, _0x3ed3de.firstChild, 'rootBounds')
            },
            _0x1b19f6
        )
    yield(0, __engineInfo.__sleep)(__timeLogger)
    const _0x500965 = yield _0x5a2fd7(
        'Range.getClientRects',
        function (_0x3e9bdf) {
            const _0x3ba85b = document.createRange()
            return _0x3ba85b.selectNode(_0x3e9bdf), _0x3ba85b.getClientRects()[0]
        },
        _0x1b19f6
    ),
        _0x3616a1 = yield _0x5a2fd7(
            'Range.getBoundingClientRect',
            function (_0x53b941) {
                const _0x3064d0 = document.createRange()
                return _0x3064d0.selectNode(_0x53b941), _0x3064d0.getBoundingClientRect()
            },
            _0x1b19f6
        ),
        _0x5796f7 = yield _0x5a2fd7(
            'SVGGraphicsElement.getBBox',
            function (_0x59fc47) {
                return _0x59fc47.getBBox()
            },
            'svg'
        ),
        _0x44ab82 = yield _0x5a2fd7(
            'SVGTextContentElement.getExtentOfChar',
            function (_0x4707db) {
                return _0x4707db.getEndPositionOfChar
                    ? _0x4707db.getExtentOfChar(_0x4707db.textContent.length - 1)
                    : null
            },
            'svg'
        ),
        _0x716ecf = yield _0x5a2fd7(
            'SVGTextContentElement.get(Start|End)OfChar',
            function (_0x5f1127) {
                if (!_0x5f1127.getStartPositionOfChar) return null
                const _0x18bcdf = _0x5f1127.getStartPositionOfChar(_0x5f1127.textContent.length - 1),
                    _0x39e54a = _0x5f1127.getEndPositionOfChar(_0x5f1127.textContent.length - 1)
                return new DOMRect(
                    _0x18bcdf.x,
                    _0x18bcdf.y,
                    _0x39e54a.x - _0x18bcdf.x,
                    _0x39e54a.y - _0x18bcdf.y
                )
            },
            'svg'
        ),
        _0x4c4743 = yield _0x5a2fd7(
            'SVGGeometryElement.getPointAtLength',
            function (_0xe267c9) {
                if (!_0xe267c9.getPointAtLength) return null
                const _0x50589f = _0xe267c9.getPointAtLength(Math.E),
                    _0x2cf721 = _0xe267c9.getPointAtLength(Math.PI)
                return new DOMRect(
                    _0x50589f.x,
                    _0x50589f.y,
                    _0x2cf721.x - _0x50589f.x,
                    _0x2cf721.y - _0x50589f.y
                )
            },
            'svg'
        ),
        _0xc3e9c7 = {
            [_0x5255cf.title]: {
                hash: _0x5255cf.hash,
            },
            [_0x5a1fb2.title]: {
                hash: _0x5a1fb2.hash,
            },
            [_0x284d30.title]: {
                hash: _0x284d30.hash,
            },
            [_0x591595.title]: {
                hash: _0x591595.hash,
            },
            [_0x381aa2.title]: {
                hash: _0x381aa2.hash,
            },
            [_0x500965.title]: {
                hash: _0x500965.hash,
            },
            [_0x3616a1.title]: {
                hash: _0x3616a1.hash,
            },
            [_0x5796f7.title]: {
                hash: _0x5796f7.hash,
            },
            [_0x44ab82.title]: {
                hash: _0x44ab82.hash,
            },
            [_0x716ecf.title]: {
                hash: _0x716ecf.hash,
            },
            [_0x4c4743.title]: {
                hash: _0x4c4743.hash,
            },
        }
    return (
        (_0xc3e9c7.hash = yield(0, _0x3c078b.__encodeText)(_0xc3e9c7)),
        (_0xc3e9c7.computingTime = __timeLogger.stop()),
        __document.body.removeChild(__document.getElementById(_0x1fc052)),
        __document.body.removeChild(__document.getElementById('svg-domrect')),
        _0xc3e9c7
    )
})().then(result => {
    debugger;
    console.log(result);
})