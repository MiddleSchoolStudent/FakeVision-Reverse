// @ts-check

var __detectAntiDetect = (info) =>
    new Promise((resolve) => {
        const __requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem
        if (!__requestFileSystem) return resolve(null)
        const _0x2af78c = (_0xd0409b) => (
            console.error('Filesystem error: ', _0xd0409b), resolve(null)
        ),
            _0x825d18 = (_0x2e73e9) => () => {
                _0x2e73e9(null)
            },
            _0x25dd9c = () =>
                new Promise((resolve) => {
                    __requestFileSystem(
                        window.TEMPORARY,
                        5242880,
                        function (_0x272968) {
                            _0x272968.root.getFile(
                                'some1.ini',
                                {},
                                function (fileSysObj) {
                                    fileSysObj.file(function (_0x544d01) {
                                        const _0x1c74c7 = new FileReader()
                                            ; (_0x1c74c7.onloadend = function () {
                                                const _0x3152f0 = ((_0x2aa125) => {
                                                    const _0x562cf2 = this.result.split('=')
                                                    return _0x562cf2[1] ? _0x562cf2[1] : null
                                                })()
                                                resolve(_0x3152f0)
                                            }),
                                                _0x1c74c7.readAsText(_0x544d01)
                                    }, _0x825d18(resolve))
                                },
                                _0x825d18(resolve)
                            )
                        },
                        _0x825d18(resolve)
                    )
                });

        (function () {
            var _0x550cdb, _0x3d66eb, _0x2769c5, _0x126049
                ; (_0x550cdb = this),
                    (_0x3d66eb = void 0),
                    (_0x126049 = function* () {
                        __requestFileSystem(
                            window.TEMPORARY,
                            5242880,
                            function (_0x3007da) {
                                console.log('Filesystem opened:', _0x3007da.name)
                            },
                            _0x2af78c
                        )
                        const _0x216ed5 = yield _0x25dd9c()
                        if (_0x216ed5) resolve(_0x216ed5)
                        else {
                            if (info) {
                                const _0x231823 = yield ((_0x4c87ac) =>
                                    new Promise((_0x523983) => {
                                        __requestFileSystem(
                                            window.TEMPORARY,
                                            5242880,
                                            function (_0x381773) {
                                                _0x381773.root.getFile(
                                                    'some1.ini',
                                                    {
                                                        create: true,
                                                    },
                                                    function (_0x5625cd) {
                                                        _0x5625cd.createWriter(function (_0x175898) {
                                                            ; (_0x175898.onwriteend = function (_0x1c7fb1) {
                                                                if (0 === _0x1c7fb1.total) {
                                                                    console.log('Truncate completed.')
                                                                    const _0x3d69d9 = new Blob(
                                                                        ['ID=' + _0x4c87ac],
                                                                        {
                                                                            type: 'text/plain',
                                                                        }
                                                                    )
                                                                    _0x175898.write(_0x3d69d9)
                                                                } else _0x523983(_0x4c87ac)
                                                            }),
                                                                (_0x175898.onerror = function (_0xb13e02) {
                                                                    console.log(
                                                                        'File write failed: ',
                                                                        _0xb13e02.toString()
                                                                    )
                                                                }),
                                                                _0x175898.truncate(0)
                                                        }, _0x2af78c)
                                                    },
                                                    _0x2af78c
                                                )
                                            },
                                            _0x2af78c
                                        )
                                    }))(info)
                                resolve(_0x231823)
                            } else resolve(null)
                        }
                    }),
                    new ((_0x2769c5 = void 0) || (_0x2769c5 = Promise))(function (_0xa616f5, _0x1d2d8a) {
                        function _0x2dae6a(_0x24b9bc) {
                            try {
                                _0x1cfe28(_0x126049.next(_0x24b9bc))
                            } catch (_0x120c69) {
                                _0x1d2d8a(_0x120c69)
                            }
                        }
                        function _0x58832a(_0x405a10) {
                            try {
                                _0x1cfe28(_0x126049.throw(_0x405a10))
                            } catch (_0x37833a) {
                                _0x1d2d8a(_0x37833a)
                            }
                        }
                        function _0x1cfe28(_0x3d9839) {
                            var _0xd0174a
                            _0x3d9839.done
                                ? _0xa616f5(_0x3d9839.value)
                                : ((_0xd0174a = _0x3d9839.value),
                                    _0xd0174a instanceof _0x2769c5
                                        ? _0xd0174a
                                        : new _0x2769c5(function (_0x57c7b7) {
                                            _0x57c7b7(_0xd0174a)
                                        })).then(_0x2dae6a, _0x58832a)
                        }
                        _0x1cfe28((_0x126049 = _0x126049.apply(_0x550cdb, _0x3d66eb || [])).next())
                    })
        })()
    })