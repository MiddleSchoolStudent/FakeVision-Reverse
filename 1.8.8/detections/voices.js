// @ts-check

(async () => {
    return (
        yield new Promise((_0x1974f0) => setTimeout(() => _0x1974f0(undefined), 50)),
        new Promise((_0x122c3c) =>
            _0x4c404e(this, undefined, undefined, function* () {
                try {
                    const __timeLogger = (0, __engineInfo.__timeLogger)()
                    yield (0, __engineInfo.__sleep)(__timeLogger)
                    const _0x29b01d = 'speechSynthesis' in window
                    if ((_0x29b01d && speechSynthesis.getVoices(), !_0x29b01d)) return _0x122c3c(null)
                    const _0x4d519e = setTimeout(() => _0x122c3c(null), 300),
                        _0x496039 = () => {
                            const _0x3cf1f8 = speechSynthesis.getVoices(),
                                _0x5aaa0c = (_0x3cf1f8 || []).find((_0x57b6f5) => _0x57b6f5.localService)
                            if (!_0x3cf1f8 || !_0x3cf1f8.length || (__engineInfo.__isV8 && !_0x5aaa0c))
                                return
                            clearTimeout(_0x4d519e)
                            const _0x570591 = ((_0x184955, _0x2dbf00) =>
                                _0x184955.filter((_0x5480c0) => {
                                    const { voiceURI: _0x280265 } = _0x5480c0
                                    return !_0x2dbf00.has(_0x280265) && (_0x2dbf00.add(_0x280265), true)
                                }))(_0x3cf1f8, new Set()),
                                _0x446280 = _0x570591
                                    .filter((_0x2ae005) => _0x2ae005.localService)
                                    .map((_0x5b62ac) => _0x5b62ac.name),
                                _0x1e07b8 = _0x570591
                                    .filter((_0x505186) => !_0x505186.localService)
                                    .map((_0x438d36) => _0x438d36.name),
                                _0x357bbb = [...new Set(_0x570591.map((_0x13079f) => _0x13079f.lang))],
                                _0x510fe2 = _0x570591.filter(
                                    (_0x5c00c3) => _0x5c00c3.default && _0x5c00c3.localService
                                )
                            let _0x19e502 = '',
                                _0xd6af5d = ''
                            if (1 === _0x510fe2.length) {
                                const { name: _0x35b5d1, lang: _0x3ef1a6 } = _0x510fe2[0]
                                    ; (_0x19e502 = _0x35b5d1), (_0xd6af5d = (_0x3ef1a6 || '').replace(/_/, '-'))
                            }
                            const { locale: _0x35d888 } = Intl.DateTimeFormat().resolvedOptions()
                            return (
                                _0xd6af5d &&
                                _0xd6af5d.split('-')[0] !== _0x35d888.split('-')[0] &&
                                ((__engineInfo.__webglInfo.voiceLangMismatch = true),
                                    (__engineInfo._w.TIME_ZONE = true)),
                                _0x122c3c({
                                    local: _0x446280,
                                    remote: _0x1e07b8,
                                    languages: _0x357bbb,
                                    defaultVoiceName: _0x19e502,
                                    defaultVoiceLang: _0xd6af5d,
                                    lied: false,
                                })
                            )
                        }
                    if ((_0x496039(), speechSynthesis.addEventListener))
                        return speechSynthesis.addEventListener('voiceschanged', _0x496039)
                    speechSynthesis.onvoiceschanged = _0x496039
                } catch (_0x3c6ea0) {
                    return _0x122c3c(null)
                }
            })
        )
    )
})().then(result => {
    debugger;
    console.log(result);
})