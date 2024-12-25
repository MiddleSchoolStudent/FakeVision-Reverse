// @ts-check

(async () => {
    const _0x2f4bda = (_0x17dafb, _0x282411) =>
        0 == _0x282411 ? _0x17dafb : _0x2f4bda(_0x282411, _0x17dafb % _0x282411),
        _0xa9f5cd = ({
            body: _0x5b7206,
            type: _0xddd3a1,
            rangeStart: _0x5932e4,
            rangeLen: _0x3d58fc,
        }) => {
            const _0x48337c = [...Array(_0x3d58fc)]
                .map(
                    (_0x436013, _0x332cc5) =>
                        '@media(device-' +
                        _0xddd3a1 +
                        ':' +
                        (_0x332cc5 += _0x5932e4) +
                        'px){body{--device-' +
                        _0xddd3a1 +
                        ':' +
                        _0x332cc5 +
                        ';}}'
                )
                .join('')
            return (
                (_0x5b7206.innerHTML = '<style>' + _0x48337c + '</style>'),
                getComputedStyle(_0x5b7206)
                    .getPropertyValue('--device-' + _0xddd3a1)
                    .trim()
            )
        }
    try {
        const __timeLogger = (0, __engineInfo.__timeLogger)()
        __timeLogger.start()
        const _0x28e8cd = __documentInfo.__iframeWindow.window,
            { body: _0x544f32 } = _0x28e8cd.document,
            {
                width: _0x2251d9,
                availWidth: _0x43f829,
                height: _0x4cdaf9,
                availHeight: _0x1e386b,
            } = _0x28e8cd.screen,
            _0x54ec85 = !(_0x2251d9 - _0x43f829 || _0x4cdaf9 - _0x1e386b)
            ; (screen.width !== _0x2251d9 || (_0x2251d9 > 800 && _0x54ec85)) &&
                (__engineInfo._w.IFRAME_SCREEN = true)
        const _0x5c7591 = ((_0x281bdb, _0x351caa) => {
            const _0xceb76e = _0x2f4bda(_0x281bdb, _0x351caa)
            return _0x281bdb / _0xceb76e + '/' + _0x351caa / _0xceb76e
        })(_0x2251d9, _0x4cdaf9),
            _0x180dc1 = {
                'prefers-reduced-motion': _0x28e8cd.matchMedia(
                    '(prefers-reduced-motion: no-preference)'
                ).matches
                    ? 'no-preference'
                    : _0x28e8cd.matchMedia('(prefers-reduced-motion: reduce)').matches
                        ? 'reduce'
                        : undefined,
                'prefers-color-scheme': _0x28e8cd.matchMedia('(prefers-color-scheme:\x20light)').matches
                    ? 'light'
                    : _0x28e8cd.matchMedia('(prefers-color-scheme:\x20dark)').matches
                        ? 'dark'
                        : undefined,
                monochrome: _0x28e8cd.matchMedia('(monochrome)').matches
                    ? 'monochrome'
                    : _0x28e8cd.matchMedia('(monochrome: 0)').matches
                        ? 'non-monochrome'
                        : undefined,
                'inverted-colors': _0x28e8cd.matchMedia('(inverted-colors:\x20inverted)').matches
                    ? 'inverted'
                    : _0x28e8cd.matchMedia('(inverted-colors: none)').matches
                        ? 'none'
                        : undefined,
                'forced-colors': _0x28e8cd.matchMedia('(forced-colors: none)').matches
                    ? 'none'
                    : _0x28e8cd.matchMedia('(forced-colors:\x20active)').matches
                        ? 'active'
                        : undefined,
                'any-hover': _0x28e8cd.matchMedia('(any-hover: hover)').matches
                    ? 'hover'
                    : _0x28e8cd.matchMedia('(any-hover: none)').matches
                        ? 'none'
                        : undefined,
                hover: _0x28e8cd.matchMedia('(hover: hover)').matches
                    ? 'hover'
                    : _0x28e8cd.matchMedia('(hover:\x20none)').matches
                        ? 'none'
                        : undefined,
                'any-pointer': _0x28e8cd.matchMedia('(any-pointer: fine)').matches
                    ? 'fine'
                    : _0x28e8cd.matchMedia('(any-pointer: coarse)').matches
                        ? 'coarse'
                        : _0x28e8cd.matchMedia('(any-pointer: none)').matches
                            ? 'none'
                            : undefined,
                pointer: _0x28e8cd.matchMedia('(pointer:\x20fine)').matches
                    ? 'fine'
                    : _0x28e8cd.matchMedia('(pointer:\x20coarse)').matches
                        ? 'coarse'
                        : _0x28e8cd.matchMedia('(pointer: none)').matches
                            ? 'none'
                            : undefined,
                'device-aspect-ratio': _0x28e8cd.matchMedia('(device-aspect-ratio: ' + _0x5c7591 + ')')
                    .matches
                    ? _0x5c7591
                    : undefined,
                'device-screen': _0x28e8cd.matchMedia(
                    '(device-width: ' + _0x2251d9 + 'px) and (device-height: ' + _0x4cdaf9 + 'px)'
                ).matches
                    ? _0x2251d9 + ' x ' + _0x4cdaf9
                    : undefined,
                'display-mode': _0x28e8cd.matchMedia('(display-mode: fullscreen)').matches
                    ? 'fullscreen'
                    : _0x28e8cd.matchMedia('(display-mode: standalone)').matches
                        ? 'standalone'
                        : _0x28e8cd.matchMedia('(display-mode: minimal-ui)').matches
                            ? 'minimal-ui'
                            : _0x28e8cd.matchMedia('(display-mode: browser)').matches
                                ? 'browser'
                                : undefined,
                'color-gamut': _0x28e8cd.matchMedia('(color-gamut: srgb)').matches
                    ? 'srgb'
                    : _0x28e8cd.matchMedia('(color-gamut: p3)').matches
                        ? 'p3'
                        : _0x28e8cd.matchMedia('(color-gamut: rec2020)').matches
                            ? 'rec2020'
                            : undefined,
                orientation: _0x28e8cd.matchMedia('(orientation: landscape)').matches
                    ? 'landscape'
                    : _0x28e8cd.matchMedia('(orientation: portrait)').matches
                        ? 'portrait'
                        : undefined,
            }
        yield(0, __engineInfo.__sleep)(__timeLogger),
            (_0x544f32.innerHTML =
                '\n\t\t<style>\n\t\t@media (prefers-reduced-motion: no-preference) {body {--prefers-reduced-motion: no-preference}}\n\t\t@media (prefers-reduced-motion: reduce) {body {--prefers-reduced-motion: reduce}}\n\t\t@media (prefers-color-scheme: light) {body {--prefers-color-scheme: light}}\n\t\t@media (prefers-color-scheme: dark) {body {--prefers-color-scheme: dark}}\n\t\t@media (monochrome) {body {--monochrome: monochrome}}\n\t\t@media (monochrome: 0) {body {--monochrome: non-monochrome}}\n\t\t@media (inverted-colors: inverted) {body {--inverted-colors: inverted}}\n\t\t@media (inverted-colors: none) {body {--inverted-colors: none}}\n\t\t@media (forced-colors: none) {body {--forced-colors: none}}\n\t\t@media (forced-colors: active) {body {--forced-colors: active}}\n\t\t@media (any-hover: hover) {body {--any-hover: hover}}\n\t\t@media (any-hover: none) {body {--any-hover: none}}\n\t\t@media (hover: hover) {body {--hover: hover}}\n\t\t@media (hover: none) {body {--hover: none}}\n\t\t@media (any-pointer: fine) {body {--any-pointer: fine}}\n\t\t@media (any-pointer: coarse) {body {--any-pointer: coarse}}\n\t\t@media (any-pointer: none) {body {--any-pointer: none}}\n\t\t@media (pointer: fine) {body {--pointer: fine}}\n\t\t@media (pointer: coarse) {body {--pointer: coarse}}\n\t\t@media (pointer: none) {body {--pointer: none}}\n\t\t@media (device-aspect-ratio: ' +
                _0x5c7591 +
                ') {body {--device-aspect-ratio: ' +
                _0x5c7591 +
                '}}\n\t\t@media (device-width: ' +
                (_0x2251d9 + 'px') +
                ') and (device-height: ' +
                (_0x4cdaf9 + 'px') +
                ') {body {--device-screen: ' +
                _0x2251d9 +
                '\x20x\x20' +
                _0x4cdaf9 +
                '}}\n\t\t@media (display-mode: fullscreen) {body {--display-mode: fullscreen}}\n\t\t@media (display-mode: standalone) {body {--display-mode: standalone}}\n\t\t@media (display-mode: minimal-ui) {body {--display-mode: minimal-ui}}\n\t\t@media (display-mode: browser) {body {--display-mode: browser}}\n\t\t@media (color-gamut: srgb) {body {--color-gamut: srgb}}\n\t\t@media (color-gamut: p3) {body {--color-gamut: p3}}\n\t\t@media (color-gamut: rec2020) {body {--color-gamut: rec2020}}\n\t\t@media (orientation: landscape) {body {--orientation: landscape}}\n\t\t@media (orientation: portrait) {body {--orientation: portrait}}\n\t\t</style>\n\t\t')
        const _0x433094 = getComputedStyle(_0x544f32),
            _0x5b631b = {
                'prefers-reduced-motion':
                    _0x433094.getPropertyValue('--prefers-reduced-motion').trim() || undefined,
                'prefers-color-scheme':
                    _0x433094.getPropertyValue('--prefers-color-scheme').trim() || undefined,
                monochrome: _0x433094.getPropertyValue('--monochrome').trim() || undefined,
                'inverted-colors': _0x433094.getPropertyValue('--inverted-colors').trim() || undefined,
                'forced-colors': _0x433094.getPropertyValue('--forced-colors').trim() || undefined,
                'any-hover': _0x433094.getPropertyValue('--any-hover').trim() || undefined,
                hover: _0x433094.getPropertyValue('--hover').trim() || undefined,
                'any-pointer': _0x433094.getPropertyValue('--any-pointer').trim() || undefined,
                pointer: _0x433094.getPropertyValue('--pointer').trim() || undefined,
                'device-aspect-ratio':
                    _0x433094.getPropertyValue('--device-aspect-ratio').trim() || undefined,
                'device-screen': _0x433094.getPropertyValue('--device-screen').trim() || undefined,
                'display-mode': _0x433094.getPropertyValue('--display-mode').trim() || undefined,
                'color-gamut': _0x433094.getPropertyValue('--color-gamut').trim() || undefined,
                orientation: _0x433094.getPropertyValue('--orientation').trim() || undefined,
            }
        yield(0, __engineInfo.__sleep)(__timeLogger)
        const _0x3d2e36 = (({ body: _0x2a097e, width: _0x379220, height: _0x30b141 }) => {
            let _0x56fe0c = _0xa9f5cd({
                body: _0x2a097e,
                type: 'width',
                rangeStart: _0x379220,
                rangeLen: 0x1,
            }),
                _0x73d081 = _0xa9f5cd({
                    body: _0x2a097e,
                    type: 'height',
                    rangeStart: _0x30b141,
                    rangeLen: 0x1,
                })
            if (_0x56fe0c && _0x73d081)
                return {
                    width: _0x379220,
                    height: _0x30b141,
                }
            const _0x46f1ba = 1000
            return (
                [...Array(10)].find(
                    (_0x130666, _0x5378fc) => (
                        _0x56fe0c ||
                        (_0x56fe0c = _0xa9f5cd({
                            body: _0x2a097e,
                            type: 'width',
                            rangeStart: _0x5378fc * _0x46f1ba,
                            rangeLen: _0x46f1ba,
                        })),
                        _0x73d081 ||
                        (_0x73d081 = _0xa9f5cd({
                            body: _0x2a097e,
                            type: 'height',
                            rangeStart: _0x5378fc * _0x46f1ba,
                            rangeLen: _0x46f1ba,
                        })),
                        _0x56fe0c && _0x73d081
                    )
                ),
                {
                    width: +_0x56fe0c,
                    height: +_0x73d081,
                }
            )
        })({
            body: _0x544f32,
            width: _0x2251d9,
            height: _0x4cdaf9,
        }),
            _0x59f5a2 = {
                mediaCSS: _0x5b631b,
                matchMediaCSS: _0x180dc1,
                screenQuery: _0x3d2e36,
            },
            _0x3fe81e = yield(0, _0x3c078b.__encodeText)(_0x59f5a2)
        return (_0x59f5a2.hash = _0x3fe81e), (_0x59f5a2.computingTime = __timeLogger.stop()), _0x59f5a2
    } catch (_0x5af01b) {
        return
    }
})().then(result => {
    console.log(result);
    debugger;
})