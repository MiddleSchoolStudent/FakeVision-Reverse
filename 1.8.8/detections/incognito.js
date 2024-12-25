// @ts-check

(async () => {
    return yield new Promise(function (_0x4f23da, _0xe1ec8) {
        function _0xd4fa63(_0xb88d1a) {
            _0x4f23da({
                isPrivate: _0xb88d1a,
            })
        }
        function _0x403677(_0x4cdc8b) {
            return _0x4cdc8b === eval.toString().length
        }
        !(function () {
            const _0x1f1a4a = navigator.vendor
            return undefined !== _0x1f1a4a && 0 === _0x1f1a4a.indexOf('Apple') && _0x403677(37)
        })()
            ? (function () {
                const _0x5cbad3 = navigator.vendor
                return undefined !== _0x5cbad3 && 0 === _0x5cbad3.indexOf('Google') && _0x403677(33)
            })()
                ? undefined !== self.Promise && undefined !== self.Promise.allSettled
                    ? navigator.webkitTemporaryStorage.queryUsageAndQuota(
                        function (_0x40359f, _0x78774) {
                            const _0xb20e9e = Math.round(_0x78774 / 1048576),
                                _0x4be6ea =
                                    2 *
                                    Math.round(
                                        (function () {
                                            const _0x18b131 = window
                                            return undefined !== _0x18b131.performance &&
                                                undefined !== _0x18b131.performance.memory &&
                                                undefined !==
                                                _0x18b131.performance.memory.jsHeapSizeLimit
                                                ? performance.memory.jsHeapSizeLimit
                                                : 1073741824
                                        })() / 1048576
                                    )
                            _0xd4fa63(_0xb20e9e < _0x4be6ea)
                        },
                        function () {
                            console.error('failed to query quota')
                        }
                    )
                    : (0, window.webkitRequestFileSystem)(
                        0,
                        1,
                        function () {
                            _0xd4fa63(false)
                        },
                        function () {
                            _0xd4fa63(true)
                        }
                    )
                : undefined !== document.documentElement &&
                    undefined !== document.documentElement.style.MozAppearance &&
                    _0x403677(37)
                    ? _0xd4fa63(undefined === navigator.serviceWorker)
                    : undefined !== navigator.msSaveBlob && _0x403677(39)
                        ? _0xd4fa63(undefined === window.indexedDB)
                        : _0xe1ec8(new Error('cannot determine'))
            : undefined !== navigator.maxTouchPoints
                ? (function () {
                    const _0x6298e8 = String(Math.random())
                    try {
                        window.indexedDB.open(_0x6298e8, 1).onupgradeneeded = function (_0x2c6c64) {
                            var _0x4df0d8, _0x3baead
                            const _0x29660d =
                                null === (_0x4df0d8 = _0x2c6c64.target) || undefined === _0x4df0d8
                                    ? undefined
                                    : _0x4df0d8.result
                            try {
                                _0x29660d
                                    .createObjectStore('test', {
                                        autoIncrement: true,
                                    })
                                    .put(new Blob()),
                                    _0xd4fa63(false)
                            } catch (_0x46bc9a) {
                                let _0xa9fee1 = _0x46bc9a
                                return (
                                    _0x46bc9a instanceof Error &&
                                    (_0xa9fee1 =
                                        null !== (_0x3baead = _0x46bc9a.message) &&
                                            undefined !== _0x3baead
                                            ? _0x3baead
                                            : _0x46bc9a),
                                    'string' != typeof _0xa9fee1
                                        ? void _0xd4fa63(false)
                                        : void _0xd4fa63(
                                            _0xa9fee1.includes('BlobURLs are not yet supported')
                                        )
                                )
                            } finally {
                                _0x29660d.close(), window.indexedDB.deleteDatabase(_0x6298e8)
                            }
                        }
                    } catch (_0x5de379) {
                        _0xd4fa63(false)
                    }
                })()
                : (function () {
                    const __openDatabase = window.openDatabase,
                        __localStorage = window.localStorage
                    try {
                        __openDatabase(null, null, null, null)
                    } catch (_0x120524) {
                        return void _0xd4fa63(true)
                    }
                    try {
                        __localStorage.setItem('test', '1'), __localStorage.removeItem('test')
                    } catch (_0x1822bc) {
                        return void _0xd4fa63(true)
                    }
                    _0xd4fa63(false)
                })()
    })
})().then(result => {
    debugger;
    console.log(result);
})