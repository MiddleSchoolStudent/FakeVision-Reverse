// @ts-check

(async () => {
    {
        try {
            const _0x3b7f90 = ((_0x7965d3) => {
                try {
                    const _0x1aea15 = getComputedStyle(document.body)
                    if (!_0x1aea15) throw new TypeError('invalid argument string')
                    const _0xf7a61 = Object.getPrototypeOf(_0x1aea15),
                        _0x549d47 = Object.getOwnPropertyNames(_0xf7a61),
                        _0xb6f702 = [],
                        _0x359b99 = /^--.*$/
                    Object.keys(_0x1aea15).forEach((_0x35f8de) => {
                        const _0x187977 = !isNaN(+_0x35f8de),
                            _0x161378 = _0x1aea15[_0x35f8de],
                            _0x7ad584 = _0x359b99.test(_0x35f8de),
                            _0x22a316 = _0x359b99.test(_0x161378)
                        return _0x187977 && !_0x22a316
                            ? _0xb6f702.push(_0x161378)
                            : _0x187977 || _0x7ad584
                                ? undefined
                                : _0xb6f702.push(_0x35f8de)
                    })
                    const _0x2f655e = {},
                        _0x531b28 = (_0x2cc414) =>
                            _0x2cc414.charAt(0).toUpperCase() + _0x2cc414.slice(1),
                        _0x31d667 = (_0x4edefb) =>
                            _0x4edefb.charAt(0).toLowerCase() + _0x4edefb.slice(1),
                        _0x157544 = (_0x480868) => _0x480868.slice(1),
                        _0x1dd01c = /[A-Z]/g
                    return (
                        _0xb6f702.forEach((_0x390fb5) => {
                            if (_0x2f655e[_0x390fb5]) return
                            const _0x10f882 = _0x390fb5.indexOf('-') > -1,
                                _0x101e49 = _0x1dd01c.test(_0x390fb5),
                                _0x4b3d1a = _0x390fb5.charAt(0),
                                _0x36cc2f = _0x10f882 && '-' == _0x4b3d1a,
                                _0x1ff37d = _0x101e49 && _0x4b3d1a == _0x4b3d1a.toUpperCase()
                            if (
                                ((_0x390fb5 = _0x36cc2f
                                    ? _0x157544(_0x390fb5)
                                    : _0x1ff37d
                                        ? _0x31d667(_0x390fb5)
                                        : _0x390fb5),
                                    _0x10f882)
                            ) {
                                const _0x41aae2 = _0x390fb5
                                    .split('-')
                                    .map((_0x141266, _0x4bd423) =>
                                        0 == _0x4bd423 ? _0x141266 : _0x531b28(_0x141266)
                                    )
                                    .join('')
                                _0x41aae2 in _0x1aea15
                                    ? (_0x2f655e[_0x41aae2] = true)
                                    : _0x531b28(_0x41aae2) in _0x1aea15 &&
                                    (_0x2f655e[_0x531b28(_0x41aae2)] = true)
                            } else {
                                if (_0x101e49) {
                                    const _0xfbfe7c = _0x390fb5.replace(
                                        _0x1dd01c,
                                        (_0x6f54f9) => '-' + _0x6f54f9.toLowerCase()
                                    )
                                    _0xfbfe7c in _0x1aea15
                                        ? (_0x2f655e[_0xfbfe7c] = true)
                                        : '-' + _0xfbfe7c in _0x1aea15 &&
                                        (_0x2f655e['-' + _0xfbfe7c] = true)
                                }
                            }
                        }),
                        {
                            keys: [...new Set([..._0x549d47, ..._0xb6f702, ...Object.keys(_0x2f655e)])],
                        }
                    )
                } catch (_0x3c0d24) {
                    return
                }
            })(),
                __timeLogger = (0, __engineInfo.__timeLogger)()
            __timeLogger.start()
            const _0x43d6f9 = ((_0x4b0bfc) => {
                try {
                    const _0x5eee98 = [
                        'AccentColor',
                        'ActiveBorder',
                        'ActiveCaption',
                        'ActiveText',
                        'AppWorkspace',
                        'Background',
                        'ButtonBorder',
                        'ButtonFace',
                        'ButtonHighlight',
                        'ButtonShadow',
                        'ButtonText',
                        'Canvas',
                        'CanvasText',
                        'CaptionText',
                        'DisabledText',
                        'Divider',
                        'ErrorBackground',
                        'ErrorText',
                        'Field',
                        'FieldText',
                        'GrayText',
                        'Highlight',
                        'HighlightText',
                        'InactiveBorder',
                        'InactiveCaption',
                        'InactiveCaptionText',
                        'Info',
                        'InfoBackground',
                        'InfoBackground',
                        'InfoText',
                        'LinkText',
                        'Mark',
                        'MarkText',
                        'Menu',
                        'MenuText',
                        'Paper',
                        'Scrollbar',
                        'SecondaryText',
                        'SelectedMenuItem',
                        'SuccessBackground',
                        'SuccessText',
                        'TextSelectBackground',
                        'ThreeDDarkShadow',
                        'ThreeDFace',
                        'ThreeDHighlight',
                        'ThreeDLightShadow',
                        'ThreeDShadow',
                        'Tooltip',
                        'TooltipText',
                        'VisitedText',
                        'WarningBackground',
                        'WarningText',
                        'Window',
                        'WindowFrame',
                        'WindowText',
                    ],
                        _0x4cc5fb = [
                            'caption',
                            'desktop',
                            'dialog',
                            'dropdown',
                            'icon',
                            'list',
                            'menu',
                            'message-box',
                            'small-caption',
                            'status-bar',
                            'tooltip',
                            'web-button',
                            'web-caption',
                            'web-icon',
                            'workspace',
                        ],
                        _0x2b5901 = (_0x243e8b) => ({
                            colors: _0x5eee98.reduce(
                                (_0x367461, _0x19ee59) => (
                                    _0x243e8b.setAttribute(
                                        'style',
                                        'background-color: ' + _0x19ee59 + ' !important'
                                    ),
                                    (_0x367461[_0x19ee59] =
                                        getComputedStyle(_0x243e8b).backgroundColor),
                                    _0x367461
                                ),
                                {}
                            ),
                            fonts: _0x4cc5fb.reduce((_0x18ef12, _0x2157ca) => {
                                _0x243e8b.setAttribute('style', 'font: ' + _0x2157ca + ' !important')
                                const _0x1263e0 = getComputedStyle(_0x243e8b)
                                return (
                                    (_0x18ef12[_0x2157ca] =
                                        _0x1263e0.fontSize + '\x20' + _0x1263e0.fontFamily),
                                    _0x18ef12
                                )
                            }, {}),
                        })
                    if (!_0x4b0bfc) {
                        ; (_0x4b0bfc = document.createElement('div')), document.body.append(_0x4b0bfc)
                        const _0x28e4bb = _0x2b5901(_0x4b0bfc)
                        return _0x4b0bfc.parentNode.removeChild(_0x4b0bfc), _0x28e4bb
                    }
                    return _0x2b5901(_0x4b0bfc)
                } catch (_0xa9bf32) {
                    return {
                        colors: [],
                        fonts: [],
                    }
                }
            })(__documentInfo.__div),
                _0x596a2c = __timeLogger.stop()
            return (
                (_0x43d6f9.hash = yield(0, _0x3c078b.__encodeText)(_0x43d6f9)),
                (_0x43d6f9.computingTime = _0x596a2c),
                {
                    computedStyle: _0x3b7f90,
                    system: _0x43d6f9,
                }
            )
        } catch (_0x396562) {
            return
        }
    }
})().then(result => {
    console.log(result);
    debugger;
})