// @ts-check

function __getEnvironmentInfo(__workerData) {
    return (
        (_0x58c415 = this),
        (_0xf4f919 = undefined),
        (_0x56cae9 = function* () {
            __workerData || (__workerData = {})
            try {
                const __timeLogger = (0, __engineInfo.__timeLogger)()
                __timeLogger.start()
                let __lied = false
                const _0xdc15a4 = {
                    platform: (0, __logAndSafeCall.__safeCallFunction)(() => {
                        const { platform: _0x41611e } = navigator
                        return (
                            'string' == typeof _0x41611e &&
                            [
                                'win',
                                'linux',
                                'mac',
                                'arm',
                                'pike',
                                'linux',
                                'iphone',
                                'ipad',
                                'ipod',
                                'android',
                                'x11',
                            ].filter((_0x901731) => _0x41611e.toLowerCase().includes(_0x901731))[0],
                            __engineInfo.JG !== __engineInfo.Px &&
                            ((__lied = true), __detectResults.Z.setValue('environment', '1')),
                            _0x41611e != __workerData.platform && (__lied = true),
                            _0x41611e
                        )
                    }),
                    system: (0, __logAndSafeCall.__safeCallFunction)(
                        () => (0, __engineInfo.__getOSFromUA)(navigator.userAgent),
                        'userAgent system failed'
                    ),
                    platformByUA: (0, __logAndSafeCall.__safeCallFunction)(
                        () =>
                            (0, __engineInfo.__getOSTypeAndName)({
                                userAgent: navigator.userAgent,
                            }),
                        'userAgent device failed'
                    ),
                    userAgent: (0, __logAndSafeCall.__safeCallFunction)(() => {
                        const { userAgent: _0x3a4fee } = navigator
                        return (
                            _0x3a4fee != __workerData.userAgent && (__lied = true),
                            _0x3a4fee.trim().replace(/\s{2,}/, '\x20')
                        )
                    }, 'userAgent\x20failed'),
                    uaPostReduction: (0, __engineInfo.__getOSTypeAndVersionFromUserAgent)(
                        (navigator || {}).userAgent
                    ),
                    appVersion: (0, __logAndSafeCall.__safeCallFunction)(() => {
                        const { appVersion: _0x205284 } = navigator
                        return _0x205284.trim().replace(/\s{2,}/, '\x20')
                    }, 'appVersion\x20failed'),
                    deviceMemory: (0, __logAndSafeCall.__safeCallFunction)(() => {
                        if (!('deviceMemory' in navigator)) return
                        const { deviceMemory: _0x25126b } = navigator
                        return _0x25126b !== __workerData.deviceMemory && (__lied = true), _0x25126b
                    }, 'deviceMemory\x20failed'),
                    doNotTrack: (0, __logAndSafeCall.__safeCallFunction)(() => {
                        const { doNotTrack: _0x21b0af } = navigator
                        return _0x21b0af
                    }, 'doNotTrack failed'),
                    globalPrivacyControl: (0, __logAndSafeCall.__safeCallFunction)(() => {
                        if (!('globalPrivacyControl' in navigator)) return
                        const { globalPrivacyControl: _0xc05da } = navigator
                        return _0xc05da
                    }, 'globalPrivacyControl failed'),
                    hardwareConcurrency: (0, __logAndSafeCall.__safeCallFunction)(() => {
                        if (!('hardwareConcurrency' in navigator)) return
                        const { hardwareConcurrency: _0x4f1987 } = navigator
                        return _0x4f1987 !== __workerData.hardwareConcurrency && (__lied = true), _0x4f1987
                    }, 'hardwareConcurrency\x20failed'),
                    language: (0, __logAndSafeCall.__safeCallFunction)(() => {
                        const { language: _0x411a32, languages: _0x2bb8b1 } = navigator
                        return _0x411a32 && _0x2bb8b1
                            ? _0x2bb8b1.join(',\x20') + '\x20(' + _0x411a32 + ')'
                            : (_0x411a32 != __workerData.language &&
                                ((__lied = true), __detectResults.Z.setValue('environment', '2')),
                                _0x2bb8b1 !== __workerData.languages &&
                                ((__lied = true), __detectResults.Z.setValue('environment', '3')),
                                _0x411a32 + '\x20' + _0x2bb8b1)
                    }, 'language(s) failed'),
                    maxTouchPoints: (0, __logAndSafeCall.__safeCallFunction)(
                        () => ('maxTouchPoints' in navigator ? navigator.maxTouchPoints : null),
                        'maxTouchPoints failed'
                    ),
                    vendor: (0, __logAndSafeCall.__safeCallFunction)(
                        () => navigator.vendor,
                        'vendor\x20failed'
                    ),
                    mimeTypes: (0, __logAndSafeCall.__safeCallFunction)(() => {
                        const { mimeTypes: _0x519f67 } = navigator
                        return _0x519f67 ? [..._0x519f67].map((_0x2a99e6) => _0x2a99e6.type) : []
                    }, 'mimeTypes failed'),
                    oscpu: (0, __logAndSafeCall.__safeCallFunction)(() => navigator.oscpu, 'oscpu failed'),
                    plugins: (0, __logAndSafeCall.__safeCallFunction)(() => {
                        const { plugins: __plugins } = navigator
                        if (!(__plugins instanceof PluginArray)) return
                        const __pluginInfo = __plugins
                            ? [...__plugins].map((__plugin) => ({
                                name: __plugin.name,
                                description: __plugin.description,
                                filename: __plugin.filename,
                                version: __plugin.version,
                            }))
                            : [],
                            { lies: __lies } = (0, __documentInfo.__detectPluginsAndMimetypesLies)(
                                __plugins,
                                navigator.mimeTypes
                            )
                        return (
                            __lies.length &&
                            ((__lied = true), // _0x2f9219
                                __lies.forEach((__lie) =>
                                    __detectResults.Z.setValue('environment', __lie)
                                )),
                            __pluginInfo.length ? undefined : __pluginInfo
                        )
                    }, 'plugins failed'),
                    properties: (0, __logAndSafeCall.__safeCallFunction)(
                        () => Object.keys(Object.getPrototypeOf(navigator)),
                        'navigator keys failed'
                    ),
                },
                    _0x497aa3 = () =>
                        (0, __logAndSafeCall.__safeCallFunction)(() => {
                            if (navigator.userAgentData && navigator.userAgentData.getHighEntropyValues)
                                return navigator.userAgentData
                                    .getHighEntropyValues([
                                        'platform',
                                        'platformVersion',
                                        'architecture',
                                        'bitness',
                                        'model',
                                        'uaFullVersion',
                                        'fullVersionList',
                                        'formFactor',
                                        'wow64',
                                    ])
                                    .then((_0x33a6c4) => {
                                        const { mobile: _0x4ee6b4 } = navigator.userAgentData || {}
                                        _0x33a6c4.mobile || (_0x33a6c4.mobile = _0x4ee6b4)
                                        const _0x4680d9 = Object.keys(_0x33a6c4)
                                            .sort()
                                            .reduce(
                                                (_0x2fc879, _0x5d26ec) => (
                                                    (_0x2fc879[_0x5d26ec] = _0x33a6c4[_0x5d26ec]), _0x2fc879
                                                ),
                                                {}
                                            )
                                        return _0x4680d9
                                    })
                        }, 'userAgentData\x20failed'),
                    _0x9c1c70 = () =>
                        (0, __logAndSafeCall.__safeCallFunction)(() => {
                            if (
                                'bluetooth' in navigator &&
                                navigator.bluetooth &&
                                navigator.bluetooth.getAvailability
                            )
                                return navigator.bluetooth.getAvailability()
                        }, 'bluetoothAvailability\x20failed'),
                    _0x175fe8 = () =>
                        (0, __logAndSafeCall.__safeCallFunction)(() => {
                            const _0x2146f5 = (_0x2ebfc9) =>
                                navigator.permissions
                                    .query({
                                        name: _0x2ebfc9,
                                    })
                                    .then((_0x75a4d7) => ({
                                        name: _0x2ebfc9,
                                        state: _0x75a4d7.state,
                                    }))
                                    .catch(() => ({
                                        name: _0x2ebfc9,
                                        state: 'unknown',
                                    }))
                            return 'permissions' in navigator
                                ? Promise.all([
                                    _0x2146f5('accelerometer'),
                                    _0x2146f5('ambient-light-sensor'),
                                    _0x2146f5('background-fetch'),
                                    _0x2146f5('background-sync'),
                                    _0x2146f5('bluetooth'),
                                    _0x2146f5('camera'),
                                    _0x2146f5('clipboard'),
                                    _0x2146f5('device-info'),
                                    _0x2146f5('display-capture'),
                                    _0x2146f5('gamepad'),
                                    _0x2146f5('geolocation'),
                                    _0x2146f5('gyroscope'),
                                    _0x2146f5('magnetometer'),
                                    _0x2146f5('microphone'),
                                    _0x2146f5('midi'),
                                    _0x2146f5('nfc'),
                                    _0x2146f5('notifications'),
                                    _0x2146f5('persistent-storage'),
                                    _0x2146f5('push'),
                                    _0x2146f5('screen-wake-lock'),
                                    _0x2146f5('speaker'),
                                    _0x2146f5('speaker-selection'),
                                ])
                                    .then((_0x1a522c) =>
                                        _0x1a522c.reduce((_0x294f51, _0x160133) => {
                                            const { state: _0x1ff236, name: _0x29db1b } = _0x160133 || {}
                                            return _0x294f51[_0x1ff236]
                                                ? (_0x294f51[_0x1ff236].push(_0x29db1b), _0x294f51)
                                                : ((_0x294f51[_0x1ff236] = [_0x29db1b]), _0x294f51)
                                        }, {})
                                    )
                                    .catch((_0x25492b) => console.error(_0x25492b))
                                : undefined
                        }, 'permissions failed')
                return (
                    yield (0, __engineInfo.__sleep)(__timeLogger),
                    Promise.all([_0x497aa3(), _0x9c1c70(), _0x175fe8()])
                        .then(([_0x51401b, _0x56903a, _0x86392]) => {
                            let _0x5807b9 = _0xdc15a4.platformByUA
                            if ((0, __browserInfo.__isChromium)()) {
                                if ('Windows' === _0x51401b.platform) {
                                    const _0x40d63d = {
                                        '14.0.0': 'Windows 11',
                                        '10.0.0': 'Windows 10',
                                        '15.0.0': 'Windows 11',
                                    }
                                        ;['14.0.0', '10.0.0', '15.0.0'].includes(_0x51401b.platformVersion) &&
                                            (_0x5807b9 = _0x40d63d[_0x51401b.platformVersion])
                                }
                                if ('macOS' === _0x51401b.platform && 'x86' === _0x51401b.architecture) {
                                    const _0x5b9a79 = {
                                        0x0: 'macOS\x20High\x20Sierra',
                                        0x1: 'macOS Mojave',
                                        0x2: 'macOS Catalina',
                                        0x3: 'macOS Big Sur',
                                        0x4: 'macOS Monterey',
                                        0x5: 'macOS\x20Ventura',
                                        0x6: 'macOS Sonoma',
                                    },
                                        _0x53bd04 = [
                                            [
                                                '10.13.0',
                                                '10.13.1',
                                                '10.13.2',
                                                '10.13.3',
                                                '10.13.4',
                                                '10.13.5',
                                                '10.13.6',
                                            ],
                                            [
                                                '10.14.0',
                                                '10.14.1',
                                                '10.14.2',
                                                '10.14.3',
                                                '10.14.4',
                                                '10.14.5',
                                                '10.14.6',
                                            ],
                                            [
                                                '10.15.0',
                                                '10.15.1',
                                                '10.15.2',
                                                '10.15.3',
                                                '10.15.4',
                                                '10.15.5',
                                                '10.15.6',
                                                '10.15.7',
                                            ],
                                            [
                                                '11.0.0',
                                                '11.0.1',
                                                '11.1.0',
                                                '11.2.0',
                                                '11.2.1',
                                                '11.2.2',
                                                '11.2.3',
                                                '11.3.0',
                                                '11.3.1',
                                                '11.4.0',
                                                '11.5.0',
                                                '11.5.1',
                                                '11.5.2',
                                                '11.6.0',
                                                '11.6.1',
                                                '11.6.2',
                                                '11.6.3',
                                                '11.6.4',
                                                '11.6.5',
                                                '11.6.6',
                                                '11.6.7',
                                                '11.6.8',
                                                '11.7.0',
                                                '11.7.1',
                                                '11.7.2',
                                                '11.7.3',
                                                '11.7.4',
                                                '11.7.5',
                                                '11.7.6',
                                                '11.7.7',
                                                '11.7.8',
                                                '11.7.9',
                                                '11.7.10',
                                            ],
                                            [
                                                '12.0.0',
                                                '12.0.1',
                                                '12.1.0',
                                                '12.2.0',
                                                '12.2.1',
                                                '12.3.0',
                                                '12.3.1',
                                                '12.4.0',
                                                '12.5.0',
                                                '12.5.1',
                                                '12.6.0',
                                                '12.6.1',
                                                '12.6.2',
                                                '12.6.3',
                                                '12.6.4',
                                                '12.6.5',
                                                '12.6.6',
                                                '12.6.7',
                                                '12.6.8',
                                                '12.6.9',
                                                '12.7.0',
                                                '12.7.1',
                                                '12.7.2',
                                                '12.7.3',
                                                '12.7.4',
                                            ],
                                            [
                                                '13.0.0',
                                                '13.0.1',
                                                '13.1.0',
                                                '13.2.0',
                                                '13.2.1',
                                                '13.3.0',
                                                '13.3.1',
                                                '13.4.0',
                                                '13.4.1',
                                                '13.5.0',
                                                '13.5.1',
                                                '13.5.2',
                                                '13.6.0',
                                                '13.6.1',
                                                '13.6.2',
                                                '13.6.3',
                                                '13.6.4',
                                                '13.6.5',
                                                '13.6.6',
                                            ],
                                            [
                                                '14.0.0',
                                                '14.1.0',
                                                '14.1.1',
                                                '14.1.2',
                                                '14.2.0',
                                                '14.2.1',
                                                '14.3.0',
                                                '14.3.1',
                                                '14.4.0',
                                                '14.4.1',
                                                '14.5.0',
                                            ],
                                        ]
                                    for (let _0x20b738 = 0; _0x20b738 < _0x53bd04.length; _0x20b738++)
                                        if (_0x53bd04[_0x20b738].includes(_0x51401b.platformVersion)) {
                                            _0x5807b9 = _0x5b9a79[_0x20b738]
                                            break
                                        }
                                }
                                if ('macOS' === _0x51401b.platform && 'arm' === _0x51401b.architecture) {
                                    const _0x1f380c = {
                                        0x0: 'macOS Big Sur',
                                        0x1: 'macOS Monterey',
                                        0x2: 'macOS Ventura',
                                        0x3: 'macOS Sonoma',
                                    },
                                        _0x240593 = [
                                            [
                                                '11.0.0',
                                                '11.0.1',
                                                '11.1.0',
                                                '11.2.0',
                                                '11.2.1',
                                                '11.2.2',
                                                '11.2.3',
                                                '11.3.0',
                                                '11.3.1',
                                                '11.4.0',
                                                '11.5.0',
                                                '11.5.1',
                                                '11.5.2',
                                                '11.6.0',
                                                '11.6.1',
                                                '11.6.2',
                                                '11.6.3',
                                                '11.6.4',
                                                '11.6.5',
                                                '11.6.6',
                                                '11.6.7',
                                                '11.6.8',
                                                '11.7.0',
                                                '11.7.1',
                                                '11.7.2',
                                                '11.7.3',
                                                '11.7.4',
                                                '11.7.5',
                                                '11.7.6',
                                                '11.7.7',
                                                '11.7.8',
                                                '11.7.9',
                                                '11.7.10',
                                            ],
                                            [
                                                '12.0.0',
                                                '12.0.1',
                                                '12.1.0',
                                                '12.2.0',
                                                '12.2.1',
                                                '12.3.0',
                                                '12.3.1',
                                                '12.4.0',
                                                '12.5.0',
                                                '12.5.1',
                                                '12.6.0',
                                                '12.6.1',
                                                '12.6.2',
                                                '12.6.3',
                                                '12.6.4',
                                                '12.6.5',
                                                '12.6.6',
                                                '12.6.7',
                                                '12.6.8',
                                                '12.6.9',
                                                '12.7.0',
                                                '12.7.1',
                                                '12.7.2',
                                                '12.7.3',
                                                '12.7.4',
                                            ],
                                            [
                                                '13.0.0',
                                                '13.0.1',
                                                '13.1.0',
                                                '13.2.0',
                                                '13.2.1',
                                                '13.3.0',
                                                '13.3.1',
                                                '13.4.0',
                                                '13.4.1',
                                                '13.5.0',
                                                '13.5.1',
                                                '13.5.2',
                                                '13.6.0',
                                                '13.6.1',
                                                '13.6.2',
                                                '13.6.3',
                                                '13.6.4',
                                                '13.6.5',
                                                '13.6.6',
                                            ],
                                            [
                                                '14.0.0',
                                                '14.1.0',
                                                '14.1.1',
                                                '14.1.2',
                                                '14.2.0',
                                                '14.2.1',
                                                '14.3.0',
                                                '14.3.1',
                                                '14.4.0',
                                                '14.4.1',
                                                '14.5.0',
                                            ],
                                        ]
                                    for (let _0x1757dc = 0; _0x1757dc < _0x240593.length; _0x1757dc++)
                                        if (_0x240593[_0x1757dc].includes(_0x51401b.platformVersion)) {
                                            _0x5807b9 = _0x1f380c[_0x1757dc]
                                            break
                                        }
                                }
                            }
                            return Object.assign(Object.assign({}, _0xdc15a4), {
                                platformByUA: _0x5807b9,
                                userAgentData: _0x51401b,
                                bluetoothAvailability: _0x56903a,
                                permissions: _0x86392,
                                lied: __lied,
                            })
                        })
                        .catch(
                            (_0x578c5a) => (
                                console.error(_0x578c5a),
                                Object.assign(Object.assign({}, _0xdc15a4), {
                                    lied: __lied,
                                })
                            )
                        )
                )
            } catch (_0x1fbf8b) {
                return
            }
        }),
        new ((_0x5ceea1 = undefined) || (_0x5ceea1 = Promise))(function (_0xab1283, _0x267e52) {
            function _0x5d09f6(_0x58be80) {
                try {
                    _0x27c7a4(_0x56cae9.next(_0x58be80))
                } catch (_0x3c1617) {
                    _0x267e52(_0x3c1617)
                }
            }
            function _0x55041c(_0x4f7377) {
                try {
                    _0x27c7a4(_0x56cae9.throw(_0x4f7377))
                } catch (_0x5100dd) {
                    _0x267e52(_0x5100dd)
                }
            }
            function _0x27c7a4(_0x137c80) {
                var _0x31e137
                _0x137c80.done
                    ? _0xab1283(_0x137c80.value)
                    : ((_0x31e137 = _0x137c80.value),
                        _0x31e137 instanceof _0x5ceea1
                            ? _0x31e137
                            : new _0x5ceea1(function (_0x39e746) {
                                _0x39e746(_0x31e137)
                            })).then(_0x5d09f6, _0x55041c)
            }
            _0x27c7a4((_0x56cae9 = _0x56cae9.apply(_0x58c415, _0xf4f919 || [])).next())
        })
    )
    var _0x58c415, _0xf4f919, _0x5ceea1, _0x56cae9
}