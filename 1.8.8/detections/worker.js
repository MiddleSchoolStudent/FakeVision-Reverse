// @ts-check

(async () => {
    try {
        const __timeLogger = (0, __engineInfo.__timeLogger)()
        yield(0, __engineInfo.__sleep)(__timeLogger)
        const _0x55ddad = (_0x866bf8) => {
            try {
                return _0x866bf8()
            } catch (_0x669a17) {
                return
            }
        },
            _0x5c7fa1 = (_0x4aa132, _0x27a617) =>
                _0x4aa132 && _0x4aa132.__proto__.constructor.name == _0x27a617,
            _0x244f55 = ({ scriptSource: _0x89fce2 }) =>
                new Promise((_0x4dcddf) => {
                    const _0x16daac = setTimeout(() => _0x4dcddf(null), 3000),
                        _0x4e5107 = _0x55ddad(() => new Worker(_0x89fce2))
                    if (!_0x5c7fa1(_0x4e5107, 'Worker')) return _0x4dcddf(null)
                    _0x4e5107.onmessage = (_0x389290) => (
                        _0x4e5107.terminate(), clearTimeout(_0x16daac), _0x4dcddf(_0x389290.data)
                    )
                }),
            _0x4c37c9 = ({ scriptSource: _0x309bfa }) =>
                new Promise((_0x482557) => {
                    const _0xf5dbec = setTimeout(() => _0x482557(null), 3000),
                        _0x2dee69 = _0x55ddad(() => new SharedWorker(_0x309bfa))
                    if (!_0x5c7fa1(_0x2dee69, 'SharedWorker')) return _0x482557(null)
                    _0x2dee69.port.start(),
                        (_0x2dee69.port.onmessage = (_0x5b2459) => (
                            _0x2dee69.port.close(), clearTimeout(_0xf5dbec), _0x482557(_0x5b2459.data)
                        ))
                }),
            __getServiceWorkerData = ({ scriptSource: _0x486121 }) =>
                new Promise((resolve) => {
                    const _0x5d7e75 = setTimeout(() => resolve(null), 4000)
                    return _0x55ddad(() => navigator.serviceWorker.register)
                        ? navigator.serviceWorker
                            .register('/test.js', {
                                scope: '',
                            })
                            .then((_0x14c74c) =>
                                _0x5c7fa1(_0x14c74c, 'ServiceWorkerRegistration')
                                    ? navigator.serviceWorker.ready.then((reg) => {
                                        reg.active.postMessage(undefined),
                                            (navigator.serviceWorker.onmessage = (event) => (
                                                reg.unregister(),
                                                clearTimeout(_0x5d7e75),
                                                resolve(event.data)
                                            ))
                                    })
                                    : resolve(null)
                            )
                            .catch(
                                (_0x1957e4) => (
                                    console.error(_0x1957e4), clearTimeout(_0x5d7e75), resolve(null)
                                )
                            )
                        : resolve(null)
                }),
            _0x5e355f = '/test.js'
            ; (_0x5828a4 = 'ServiceWorkerGlobalScope'), (_0x310c42 = 'service')
        let _0x5a890a = yield __getServiceWorkerData({
            scriptSource: _0x5e355f,
        }).catch((_0x5a23ba) => {
            console.error(_0x5a23ba.message)
        })
        if (
            ((_0x5a890a || {}).userAgent ||
                ((_0x5828a4 = 'SharedWorkerGlobalScope'),
                    (_0x310c42 = 'shared'),
                    (_0x5a890a = yield _0x4c37c9({
                        scriptSource: _0x5e355f,
                    }).catch((_0x4b1058) => {
                        console.error(_0x4b1058.message)
                    }))),
                (_0x5a890a || {}).userAgent ||
                ((_0x5828a4 = 'DedicatedWorkerGlobalScope'),
                    (_0x310c42 = 'dedicated'),
                    (_0x5a890a = yield _0x244f55({
                        scriptSource: _0x5e355f,
                    }).catch((_0x2ff3a7) => {
                        console.error(_0x2ff3a7.message)
                    }))),
                !(_0x5a890a || {}).userAgent)
        )
            return
                ; (_0x5a890a.system = (0, __engineInfo.__getOSFromUA)(_0x5a890a.userAgent)),
                    (_0x5a890a.device = (0, __engineInfo.__getOSTypeAndName)({
                        userAgent: _0x5a890a.userAgent,
                    }))
        const {
            system: _0x4d59ed,
            userAgent: _0x1c2589,
            userAgentData: _0x556adf,
            platform: _0x5f2770,
            deviceMemory: _0x1eb411,
            hardwareConcurrency: _0x5e6811,
        } = _0x5a890a || {}
        if (
            (_0x5f2770 != navigator.platform && __detectResults.Z.setValue('worker', '8'),
                _0x1c2589 != navigator.userAgent && __detectResults.Z.setValue('worker', '7'),
                _0x5e6811 &&
                _0x5e6811 != navigator.hardwareConcurrency &&
                __detectResults.Z.setValue('worker', '6'),
                _0x1eb411 &&
                _0x1eb411 != navigator.deviceMemory &&
                __detectResults.Z.setValue('worker', '5'),
                _0x5a890a.lies.proto)
        ) {
            const { proto: _0x463704 } = _0x5a890a.lies
            Object.keys(_0x463704).forEach((_0x32be79) => {
                _0x463704[_0x32be79].forEach((_0x1fdeb1) =>
                    __detectResults.Z.setValue('worker', _0x1fdeb1)
                )
            })
        }
        const [_0x50c7db, _0x25eb67] = (0, __engineInfo.__OSTypeTextFromUserAgentAndPlatform)(
            _0x1c2589,
            _0x5f2770
        )
        _0x50c7db != _0x25eb67 &&
            ((_0x5a890a.lied = true),
                (_0x5a890a.lies.os =
                    _0x25eb67 + ' platform and ' + _0x50c7db + '\x20user\x20agent\x20do\x20not\x20match'),
                __detectResults.Z.setValue('worker', '4'))
        const _0x25cb19 = (0, __engineInfo.d$)(),
            _0x15c554 = (0, __engineInfo.__getBrowserType)({
                ua: _0x1c2589,
                os: _0x4d59ed,
                isVivaldi: _0x25cb19,
                isBrave: false,
            }),
            _0xc6af08 =
                /safari/i.test(_0x15c554) || /iphone|ipad/i.test(_0x1c2589)
                    ? 'JavaScriptCore'
                    : /firefox/i.test(_0x1c2589)
                        ? 'SpiderMonkey'
                        : /chrome/i.test(_0x1c2589)
                            ? 'V8'
                            : undefined
        _0xc6af08 != __engineInfo.__jsEngineName &&
            ((_0x5a890a.lied = true),
                (_0x5a890a.lies.engine =
                    __engineInfo.__jsEngineName +
                    ' JS runtime and ' +
                    _0xc6af08 +
                    ' user agent do not match'),
                __detectResults.Z.setValue('worker', '3'))
        const _0x73bc72 = (_0x534c07) => (/\d+/.exec(_0x534c07) || [])[0],
            _0x3c25c4 = _0x73bc72(_0x15c554),
            _0x5bea34 = _0x73bc72(_0x556adf ? _0x556adf.uaFullVersion : '')
        _0x5bea34 &&
            _0x3c25c4 &&
            _0x5bea34 != _0x3c25c4 &&
            ((_0x5a890a.lied = true),
                (_0x5a890a.lies.version =
                    'userAgentData version ' +
                    _0x5bea34 +
                    ' and user agent version ' +
                    _0x3c25c4 +
                    ' do not match'),
                __detectResults.Z.setValue('worker', '2'))
        const _0x4b30cc = __engineInfo.__isV8 && CSS.supports('accent-color: initial'),
            _0x4511c9 = (_0x3ac380, _0x583a85) => {
                if (
                    !/windows|mac/i.test(_0x3ac380) ||
                    !(null == _0x583a85 ? undefined : _0x583a85.platformVersion)
                )
                    return false
                if ('macOS' == _0x583a85.platform)
                    return !!_0x4b30cc && /_/.test(_0x583a85.platformVersion)
                const _0x320fdf = (/windows ([\d|\.]+)/i.exec(_0x3ac380) || [])[1],
                    _0x1f625f = 10 == +_0x320fdf,
                    { platformVersion: _0x555ecb } = _0x583a85,
                    _0x17285f = {
                        6.1: '7',
                        6.2: '8',
                        6.3: '8.1',
                        '10.0': '10',
                    }[_0x555ecb]
                if (!_0x4b30cc && _0x17285f) return _0x17285f != _0x320fdf
                const _0x2e0344 = _0x555ecb.split('.')
                if (3 != _0x2e0344.length) return true
                const _0x4bfa40 = +_0x2e0344[0] > 0
                return (_0x4bfa40 && !_0x1f625f) || (!_0x4bfa40 && _0x1f625f)
            }
        _0x4511c9(_0x5a890a.device, _0x556adf) &&
            ((_0x5a890a.lied = true),
                (_0x5a890a.lies.platformVersion = 'platform version is fake'),
                __detectResults.Z.setValue('worker', '1')),
            (_0x5a890a.userAgentVersion = _0x3c25c4),
            (_0x5a890a.userAgentDataVersion = _0x5bea34),
            (_0x5a890a.userAgentEngine = _0xc6af08)
        const _0x216619 = Object.assign(
            Object.assign(
                {},
                ((_0x402038) => {
                    if (_0x402038)
                        return {
                            parts: __getKnownGPUInfo(_0x402038),
                        }
                })(_0x5a890a.webglRenderer) || {}
            ),
            {
                compressedGPU: __getCompressedGPUInfo(_0x5a890a.webglRenderer),
            }
        )
        return Object.assign(Object.assign({}, _0x5a890a), {
            gpu: _0x216619,
            uaPostReduction: (0, __engineInfo.__getOSTypeAndVersionFromUserAgent)(_0x5a890a.userAgent),
        })
    } catch (_0x3eba9e) {
        return void (0, __engineInfo.__logTestResult)({
            test: 'worker',
            passed: false,
        })
    }
})().then(result => {
    debugger;
    console.log(result);
})