// @ts-check

(async () => {
    try {
        const __timeLogger = (0, __engineInfo.__timeLogger)()
        __timeLogger.start()
        const _0x55d198 = false,
            _0x3756fd = (0, __logAndSafeCall.YU)(() =>
                new Intl.DateTimeFormat(undefined, {
                    month: 'long',
                    timeZoneName: 'long',
                }).format(963644400000)
            ),
            _0x5721df = (0, __logAndSafeCall.YU)(() =>
                new Intl.DisplayNames(undefined, {
                    type: 'language',
                }).of('en-US')
            ),
            _0x5533aa = (0, __logAndSafeCall.YU)(() =>
                new Intl.ListFormat(undefined, {
                    style: 'long',
                    type: 'disjunction',
                }).format(['0', '1'])
            ),
            _0x3539df = (0, __logAndSafeCall.YU)(() =>
                new Intl.NumberFormat(undefined, {
                    notation: 'compact',
                    compactDisplay: 'long',
                }).format(21000000)
            ),
            _0x47da3e = (0, __logAndSafeCall.YU)(() => new Intl.PluralRules().select(1)),
            _0x17298e = {
                dateTimeFormat: _0x3756fd,
                displayNames: _0x5721df,
                listFormat: _0x5533aa,
                numberFormat: _0x3539df,
                pluralRules: _0x47da3e,
                relativeTimeFormat: (0, __logAndSafeCall.YU)(() =>
                    new Intl.RelativeTimeFormat(undefined, {
                        localeMatcher: 'best\x20fit',
                        numeric: 'auto',
                        style: 'long',
                    }).format(1, 'year')
                ),
                locale:
                    '' +
                    ((_0x1beba0) => {
                        const _0x50faa7 = [
                            'Collator',
                            'DateTimeFormat',
                            'DisplayNames',
                            'ListFormat',
                            'NumberFormat',
                            'PluralRules',
                            'RelativeTimeFormat',
                        ].reduce((_0x23dac8, _0x3c8ede) => {
                            try {
                                const _0x4b78bf = new _0x1beba0[_0x3c8ede]()
                                if (!_0x4b78bf) return _0x23dac8
                                const { locale: _0x1c9544 } = _0x4b78bf.resolvedOptions() || {}
                                return [..._0x23dac8, _0x1c9544]
                            } catch (_0x23b792) {
                                return _0x23dac8
                            }
                        }, [])
                        return [...new Set(_0x50faa7)]
                    })(Intl),
                lied: _0x55d198,
            },
            _0x4d90d1 = yield(0, _0x3c078b.__encodeText)(_0x17298e)
        return (_0x17298e.hash = _0x4d90d1), (_0x17298e.computingTime = __timeLogger.stop()), _0x17298e
    } catch (_0x2f7413) {
        return void (0, __logAndSafeCall.O7)(_0x2f7413)
    }
})().then(result => { debugger; console.log(result); })