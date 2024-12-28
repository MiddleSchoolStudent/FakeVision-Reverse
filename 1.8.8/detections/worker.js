// @ts-check

var __OSTypeText = {
    i: {
        WINDOWS: 'Windows',
        LINUX: 'Linux',
        APPLE: 'Apple',
        OTHER: 'Other',
    },
}

const __navigatorSpecificKeys = [
    'joinAdInterestGroup',
    'leaveAdInterestGroup',
    'updateAdInterestGroups',
    'clearOriginJoinedAdInterestGroups',
    'createAuctionNonce',
    'deprecatedReplaceInURN',
    'deprecatedURNToURL',
    'adAuctionComponents',
    'runAdAuction',
    'canLoadAdAuctionFencedFrame',
    'deprecatedRunAdAuctionEnforcesKAnonymity',
]

var __engineInfo = {
    __isV8AndNotChromium: false,
    __isJavaScriptCore: false,
    __testFonts:
        "\n\t'Segoe Fluent Icons',\n\t'Ink Free',\n\t'Bahnschrift',\n\t'Segoe MDL2 Assets',\n\t'HoloLens MDL2 Assets',\n\t'Leelawadee UI',\n\t'Javanese Text',\n\t'Segoe UI Emoji',\n\t'Aldhabi',\n\t'Gadugi',\n\t'Myanmar Text',\n\t'Nirmala UI',\n\t'Lucida Console',\n\t'Cambria Math',\n\t'Bai Jamjuree',\n\t'Chakra Petch',\n\t'Charmonman',\n\t'Fahkwang',\n\t'K2D',\n\t'Kodchasan',\n\t'KoHo',\n\t'Sarabun',\n\t'Srisakdi',\n\t'Galvji',\n\t'MuktaMahee Regular',\n\t'InaiMathi Bold',\n\t'American Typewriter Semibold',\n\t'Futura Bold',\n\t'SignPainter-HouseScript Semibold',\n\t'PingFang HK Light',\n\t'Kohinoor Devanagari Medium',\n\t'Luminari',\n\t'Geneva',\n\t'Helvetica Neue',\n\t'Droid Sans Mono',\n\t'Dancing Script',\n\t'Roboto',\n\t'Ubuntu',\n\t'Liberation Mono',\n\t'Source Code Pro',\n\t'DejaVu Sans',\n\t'OpenSymbol',\n\t'Chilanka',\n\t'Cousine',\n\t'Arimo',\n\t'Jomolhari',\n\t'MONO',\n\t'Noto Color Emoji',\n\tsans-serif !important\n",
    __isDesktopOrMobileType: () => 'desktop',
    __webglInfo: {},
    __jsEngineName: 'V8',
    __getOSFromUA: (userAgent) =>
        /windows phone/gi.test(userAgent)
            ? 'Windows Phone'
            : /win(dows|16|32|64|95|98|nt)|wow64/gi.test(userAgent)
                ? 'Windows'
                : /android/gi.test(userAgent)
                    ? 'Android'
                    : /cros/gi.test(userAgent)
                        ? 'Chrome\x20OS'
                        : /linux/gi.test(userAgent)
                            ? 'Linux'
                            : /ipad/gi.test(userAgent)
                                ? 'iPad'
                                : /iphone/gi.test(userAgent)
                                    ? 'iPhone'
                                    : /ipod/gi.test(userAgent)
                                        ? 'iPod'
                                        : /ios/gi.test(userAgent)
                                            ? 'iOS'
                                            : /mac/gi.test(userAgent)
                                                ? 'Mac'
                                                : 'Other',
    __getOSTypeAndName: ({ userAgent, excludeBuild = true }) => {
        if (!userAgent) return 'unknown'
        const _0x1a7515 = /\((.+)\)/,
            _0x28556d = /((android).+)/i,
            _0x392b42 =
                /^(linux|[a-z]|wv|mobile|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|windows|(rv:|trident|webview|iemobile).+/i,
            _0x48571d = /build\/.+\s|\sbuild\/.+/i,
            _0x41b49b = /android( |-)\d+/i,
            _0x1f8d01 = /((windows).+)/i,
            _0x10439a =
                /^(windows|ms(-|)office|microsoft|compatible|[a-z]|x64|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|(rv:|outlook|ms(-|)office|microsoft|trident|\.net|msie|httrack|media center|infopath|aol|opera|iemobile|webbrowser).+/i,
            _0x1a84dc = /w(ow|in)64/i,
            _0x283d45 = /cros/i,
            _0x2b2df5 = /^([a-z]|x11|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|(rv:|trident).+/i,
            _0x15d923 = /\d+\.\d+\.\d+/i,
            _0x5d7ecd = /linux|x11|ubuntu|debian/i,
            _0x5d7a8e =
                /^([a-z]|x11|unknown|compatible|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2})$|(rv:|java|oracle|\+http|http|unknown|mozilla|konqueror|valve).+/i,
            _0x2e8b85 = /(cpu iphone|cpu os|iphone os|mac os|macos|intel os|ppc mac).+/i,
            _0xa93246 =
                /^([a-z]|macintosh|compatible|mimic|[a-z]{2}(-|_)[a-z]{2}|[a-z]{2}|rv|\d+\.\d+)$|(rv:|silk|valve).+/i,
            _0x4cd1ae = /(ppc |intel |)(mac|mac |)os (x |x|)(\d{2}(_|\.)\d{1,2}|\d{2,})/i,
            _0x505167 =
                /((symbianos|nokia|blackberry|morphos|mac).+)|\/linux|freebsd|symbos|series \d+|win\d+|unix|hp-ux|bsdi|bsd|x86_64/i,
            _0x3ab34f = (_0x31289f, _0x4a07fb) => _0x31289f.filter((_0x16158d) => _0x4a07fb.test(_0x16158d)).length
        if (
            ((userAgent = userAgent
                .trim()
                .replace(/\s{2,}/, '\x20')
                .replace(
                    /\((khtml|unlike|vizio|like gec|internal dummy|org\.eclipse|openssl|ipv6|via translate|safari|cardamon).+|xt\d+\)/gi,
                    ''
                )),
                _0x1a7515.test(userAgent))
        ) {
            const _0x545de9 = userAgent
                .match(_0x1a7515)[0]
                .slice(1, -1)
                .replace(/,/g, ';')
                .split(';')
                .map((_0x4d36ac) => _0x4d36ac.trim())
            if (_0x3ab34f(_0x545de9, _0x28556d))
                return _0x545de9
                    .map((_0x552f6b) =>
                        _0x41b49b.test(_0x552f6b) ? _0x41b49b.exec(_0x552f6b)[0].replace('-', '\x20') : _0x552f6b
                    )
                    .filter((_0x3b4764) => !_0x392b42.test(_0x3b4764))
                    .join('\x20')
                    .replace(excludeBuild ? _0x48571d : '', '')
                    .trim()
                    .replace(/\s{2,}/, '\x20')
            if (_0x3ab34f(_0x545de9, _0x1f8d01))
                return _0x545de9
                    .filter((_0x1eded4) => !_0x10439a.test(_0x1eded4))
                    .join('\x20')
                    .replace(/\sNT (\d+\.\d+)/, (_0x5b7c9e, _0x47175f) =>
                        '10.0' == _0x47175f
                            ? ' 10'
                            : '6.3' == _0x47175f
                                ? ' 8.1'
                                : '6.2' == _0x47175f
                                    ? '\x208'
                                    : '6.1' == _0x47175f
                                        ? '\x207'
                                        : '6.0' == _0x47175f
                                            ? ' Vista'
                                            : '5.2' == _0x47175f
                                                ? '\x20XP\x20Pro'
                                                : '5.1' == _0x47175f
                                                    ? '\x20XP'
                                                    : '5.0' == _0x47175f
                                                        ? '\x202000'
                                                        : '4.0' == _0x47175f
                                                            ? _0x5b7c9e
                                                            : '\x20' + _0x47175f
                    )
                    .replace(_0x1a84dc, '(64-bit)')
                    .trim()
                    .replace(/\s{2,}/, '\x20')
            if (_0x3ab34f(_0x545de9, _0x283d45))
                return _0x545de9
                    .filter((_0x410671) => !_0x2b2df5.test(_0x410671))
                    .join('\x20')
                    .replace(excludeBuild ? _0x15d923 : '', '')
                    .trim()
                    .replace(/\s{2,}/, '\x20')
            if (_0x3ab34f(_0x545de9, _0x5d7ecd))
                return _0x545de9
                    .filter((_0x1ca1cb) => !_0x5d7a8e.test(_0x1ca1cb))
                    .join('\x20')
                    .trim()
                    .replace(/\s{2,}/, '\x20')
            if (_0x3ab34f(_0x545de9, _0x2e8b85))
                return _0x545de9
                    .map((_0x254d87) => {
                        if (_0x4cd1ae.test(_0x254d87)) {
                            const _0x3f865e = _0x4cd1ae.exec(_0x254d87)[0],
                                _0x33b1f9 = {
                                    '10_7': 'Lion',
                                    '10_8': 'Mountain Lion',
                                    '10_9': 'Mavericks',
                                    '10_10': 'Yosemite',
                                    '10_11': 'El Capitan',
                                    '10_12': 'Sierra',
                                    '10_13': 'High Sierra',
                                    '10_14': 'Mojave',
                                    '10_15': 'Catalina',
                                    0xb: 'Big Sur',
                                    0xc: 'Monterey',
                                    0xd: 'Ventura',
                                },
                                _0x44d5ac = ((/(\d{2}(_|\.)\d{1,2}|\d{2,})/.exec(_0x3f865e) || [])[0] || '').replace(
                                    /\./g,
                                    '_'
                                ),
                                _0x4692dd =
                                    _0x33b1f9[/^10/.test(_0x44d5ac) ? _0x44d5ac : (/^\d{2,}/.exec(_0x44d5ac) || [])[0]]
                            return _0x4692dd ? 'macOS ' + _0x4692dd : _0x3f865e
                        }
                        return _0x254d87
                    })
                    .filter((_0x9fdd3a) => !_0xa93246.test(_0x9fdd3a))
                    .join('\x20')
                    .replace(/\slike mac.+/gi, '')
                    .trim()
                    .replace(/\s{2,}/, '\x20')
            {
                const _0xff2f8 = _0x545de9.filter((_0x4398a9) => _0x505167.test(_0x4398a9))
                return _0xff2f8.length
                    ? _0xff2f8
                        .join('\x20')
                        .trim()
                        .replace(/\s{2,}/, '\x20')
                    : _0x545de9.join('\x20')
            }
        }
        return 'unknown'
    },
    __OSTypeTextFromUserAgentAndPlatform: (__userAgent, __platform) => {
        const __rgx = /win(dows|16|32|64|95|98|nt)|wow64/gi.test(__userAgent)
            ? __OSTypeText.i.WINDOWS
            : /android|linux|cros/gi.test(__userAgent)
                ? __OSTypeText.i.LINUX
                : /(i(os|p(ad|hone|od)))|mac/gi.test(__userAgent)
                    ? __OSTypeText.i.APPLE
                    : __OSTypeText.i.OTHER
        return __platform
            ? [
                __rgx,
                /win/gi.test(__platform)
                    ? __OSTypeText.i.WINDOWS
                    : /android|arm|linux/gi.test(__platform)
                        ? __OSTypeText.i.LINUX
                        : /(i(os|p(ad|hone|od)))|mac/gi.test(__platform)
                            ? __OSTypeText.i.APPLE
                            : __OSTypeText.i.OTHER,
            ]
            : [__rgx]
    },
    __navigatorHasSpecificProperty: () => {
        const __navigatorPrototypes = Object.keys(Object.getPrototypeOf(navigator))
        return __navigatorSpecificKeys.every((key) => !__navigatorPrototypes.includes(key))
    },
    __getBrowserType: ({ ua, os, isBrave, isVivaldi }) => {
        const _0x212741 = /ipad|iphone|ipod|ios|mac/gi.test(os),
            _0x4a40c3 = /OPR\//g.test(ua),
            _0x51a499 = /DuckDuckGo/g.test(ua),
            _0x589503 = /YaBrowser/g.test(ua),
            _0x127a46 = ua.match(/(palemoon)\/(\d+)./i),
            _0x50d3bd = ua.match(/(edgios|edg|edge|edga)\/(\d+)./i),
            _0x2cbb2e = _0x50d3bd && /edgios/i.test(_0x50d3bd[1]),
            _0x25453c = ua.match(/(crios|chrome)\/(\d+)./i),
            _0xbac686 = ua.match(/(fxios|firefox)\/(\d+)./i),
            _0x446fa4 =
                /AppleWebKit/g.test(ua) &&
                /Safari/g.test(ua) &&
                !_0xbac686 &&
                !_0x25453c &&
                !_0x50d3bd &&
                ua.match(/(version)\/(\d+(\.\d+)+)\s(mobile|safari)/i)
        return _0x25453c
            ? _0x25453c[1] +
            '\x20' +
            _0x25453c[2] +
            (_0x4a40c3
                ? '\x20Opera'
                : isVivaldi
                    ? '\x20Vivaldi'
                    : _0x51a499
                        ? ' DuckDuckGo'
                        : _0x589503
                            ? '\x20Yandex'
                            : _0x50d3bd
                                ? ' Edge'
                                : isBrave
                                    ? ' Brave'
                                    : '')
            : _0x2cbb2e
                ? _0x50d3bd[1] + '\x20' + _0x50d3bd[2]
                : _0xbac686
                    ? (_0x127a46 ? _0x127a46[1] : _0xbac686[1]) + '\x20' + (_0x127a46 ? _0x127a46[2] : _0xbac686[2])
                    : _0x212741 && _0x446fa4
                        ? 'Safari ' + _0x446fa4[2]
                        : 'unknown'
    },
    __getOSTypeAndVersionFromUserAgent: (__userAgent) => {
        const __osTypeAndVersion =
            (/Mozilla\/5\.0 \((Macintosh; Intel Mac OS X 10_15_7|Windows NT 10\.0; Win64; x64|(X11; (CrOS|Linux) x86_64)|(Linux; Android 10(; K|)))\) AppleWebKit\/537\.36 \(KHTML, like Gecko\) Chrome\/\d+\.0\.0\.0( Mobile|) Safari\/537\.36/.exec(
                __userAgent
            ) || [])[1]
        return !!__osTypeAndVersion
    },
}

var __detectResults = {
    Z: {
        _value: {},
        setValue: function (key, value) {
            this._value[key] = value
        },
        getValue: function (key) {
            return this._value[key]
        },
    },
}

var _0x310c42 = '',
    _0x5828a4 = ''

var __getKnownGPUInfo = (t) => {
    const _0x216493 = [
        'AMD',
        'ANGLE',
        'ASUS',
        'ATI',
        'ATI\x20Radeon',
        'ATI\x20Technologies\x20Inc',
        'Adreno',
        'Android\x20Emulator',
        'Apple',
        'Apple GPU',
        'Apple M1',
        'Chipset',
        'D3D11',
        'Direct3D',
        'Express Chipset',
        'GeForce',
        'Generation',
        'Generic Renderer',
        'Google',
        'Google SwiftShader',
        'Graphics',
        'Graphics Media Accelerator',
        'HD\x20Graphics\x20Family',
        'Intel',
        'Intel(R)\x20HD\x20Graphics',
        'Intel(R)\x20UHD\x20Graphics',
        'Iris',
        'KBL Graphics',
        'Mali',
        'Mesa',
        'Mesa\x20DRI',
        'Metal',
        'Microsoft',
        'Microsoft Basic Render Driver',
        'Microsoft Corporation',
        'NVIDIA',
        'NVIDIA Corporation',
        'NVIDIAGameReadyD3D',
        'OpenGL',
        'OpenGL Engine',
        'Open Source Technology Center',
        'Parallels',
        'Parallels Display Adapter',
        'PCIe',
        'Plus Graphics',
        'PowerVR',
        'Pro\x20Graphics',
        'Quadro',
        'Radeon',
        'Radeon\x20Pro',
        'Radeon\x20Pro\x20Vega',
        'Samsung',
        'SSE2',
        'VMware',
        'VMware\x20SVGA\x203D',
        'Vega',
        'VirtualBox',
        'VirtualBox Graphics Adapter',
        'Vulkan',
        'Xe Graphics',
        'llvmpipe',
    ].filter((_0x74cbd9) => ('' + t).includes(_0x74cbd9))
    return [...new Set(_0x216493)].sort().join(',\x20')
}

function __getCompressedGPUInfo(t) {
    if (t)
        return ('' + t)
            .replace(
                /ANGLE \(|\sDirect3D.+|\sD3D.+|\svs_.+\)|\((DRM|POLARIS|LLVM).+|Mesa.+|(ATI|INTEL)-.+|Metal\s-\s.+|NVIDIA\s[\d|\.]+/gi,
                ''
            )
            .replace(/(\s(ti|\d{1,2}GB|super)$)/gi, '')
            .replace(/\s{2,}/g, '\x20')
            .trim()
            .replace(
                /((r|g)(t|)(x|s|\d) |Graphics |GeForce |Radeon (HD |Pro |))(\d+)/i,
                (..._0x61a21b) => '' + _0x61a21b[1] + _0x61a21b[6][0] + _0x61a21b[6].slice(1).replace(/\d/g, '0') + 's'
            )
}

async function __getInfoFromWorker() {
    const _0x55ddad = (_0x866bf8) => {
        try {
            return _0x866bf8()
        } catch (_0x669a17) {
            return
        }
    },
        _0x5c7fa1 = (_0x4aa132, _0x27a617) => _0x4aa132 && _0x4aa132.__proto__.constructor.name == _0x27a617,
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
        _0x138a59 = ({ scriptSource: _0x486121 }) =>
            new Promise((_0x3ccf8b) => {
                const _0x5d7e75 = setTimeout(() => _0x3ccf8b(null), 4000)
                return _0x55ddad(() => navigator.serviceWorker.register)
                    ? navigator.serviceWorker
                        .register('/test.js', {
                            scope: '',
                        })
                        .then((_0x14c74c) =>
                            _0x5c7fa1(_0x14c74c, 'ServiceWorkerRegistration')
                                ? navigator.serviceWorker.ready.then((_0x508d0c) => {
                                    _0x508d0c.active?.postMessage(void 0),
                                        (navigator.serviceWorker.onmessage = (_0x5520a7) => (
                                            _0x508d0c.unregister(),
                                            clearTimeout(_0x5d7e75),
                                            _0x3ccf8b(_0x5520a7.data)
                                        ))
                                })
                                : _0x3ccf8b(null)
                        )
                        .catch((_0x1957e4) => (console.error(_0x1957e4), clearTimeout(_0x5d7e75), _0x3ccf8b(null)))
                    : _0x3ccf8b(null)
            }),
        _0x5e355f = '/test.js'
        ; (_0x5828a4 = 'ServiceWorkerGlobalScope'), (_0x310c42 = 'service')
    let _0x5a890a = await _0x138a59({
        scriptSource: _0x5e355f,
    }).catch((_0x5a23ba) => {
        console.error(_0x5a23ba.message)
    })
    if (
        ((_0x5a890a || {}).userAgent ||
            ((_0x5828a4 = 'SharedWorkerGlobalScope'),
                (_0x310c42 = 'shared'),
                (_0x5a890a = await _0x4c37c9({
                    scriptSource: _0x5e355f,
                }).catch((_0x4b1058) => {
                    console.error(_0x4b1058.message)
                }))),
            (_0x5a890a || {}).userAgent ||
            ((_0x5828a4 = 'DedicatedWorkerGlobalScope'),
                (_0x310c42 = 'dedicated'),
                (_0x5a890a = await _0x244f55({
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
            _0x5e6811 && _0x5e6811 != navigator.hardwareConcurrency && __detectResults.Z.setValue('worker', '6'),
            _0x1eb411 && _0x1eb411 != navigator.deviceMemory && __detectResults.Z.setValue('worker', '5'),
            _0x5a890a.lies.proto)
    ) {
        const { proto: _0x463704 } = _0x5a890a.lies
        Object.keys(_0x463704).forEach((_0x32be79) => {
            _0x463704[_0x32be79].forEach((_0x1fdeb1) => __detectResults.Z.setValue('worker', _0x1fdeb1))
        })
    }
    const [_0x50c7db, _0x25eb67] = (0, __engineInfo.__OSTypeTextFromUserAgentAndPlatform)(_0x1c2589, _0x5f2770)
    _0x50c7db != _0x25eb67 &&
        ((_0x5a890a.lied = true),
            (_0x5a890a.lies.os = _0x25eb67 + ' platform and ' + _0x50c7db + '\x20user\x20agent\x20do\x20not\x20match'),
            __detectResults.Z.setValue('worker', '4'))
    const _0x25cb19 = (0, __engineInfo.__navigatorHasSpecificProperty)(),
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
                        : void 0
    _0xc6af08 != __engineInfo.__jsEngineName &&
        ((_0x5a890a.lied = true),
            (_0x5a890a.lies.engine =
                __engineInfo.__jsEngineName + ' JS runtime and ' + _0xc6af08 + ' user agent do not match'),
            __detectResults.Z.setValue('worker', '3'))
    const _0x73bc72 = (_0x534c07) => (/\d+/.exec(_0x534c07) || [])[0],
        _0x3c25c4 = _0x73bc72(_0x15c554),
        _0x5bea34 = _0x73bc72(_0x556adf ? _0x556adf.uaFullVersion : '')
    _0x5bea34 &&
        _0x3c25c4 &&
        _0x5bea34 != _0x3c25c4 &&
        ((_0x5a890a.lied = true),
            (_0x5a890a.lies.version =
                'userAgentData version ' + _0x5bea34 + ' and user agent version ' + _0x3c25c4 + ' do not match'),
            __detectResults.Z.setValue('worker', '2'))
    const _0x4b30cc = __engineInfo.__isV8 && CSS.supports('accent-color: initial'),
        _0x4511c9 = (_0x3ac380, _0x583a85) => {
            if (!/windows|mac/i.test(_0x3ac380) || !(null == _0x583a85 ? void 0 : _0x583a85.platformVersion))
                return false
            if ('macOS' == _0x583a85.platform) return !!_0x4b30cc && /_/.test(_0x583a85.platformVersion)
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
}

await __getInfoFromWorker();