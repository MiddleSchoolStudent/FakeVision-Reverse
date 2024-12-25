// @ts-check

(async () => {
    const __timeLogger = (0, __engineInfo.__timeLogger)()
    if (
        (__timeLogger.start(),
            !(null ===
                (_0x54fb98 =
                    null === navigator || undefined === navigator ? undefined : navigator.mediaDevices) ||
                undefined === _0x54fb98
                ? undefined
                : _0x54fb98.enumerateDevices))
    )
        return null
    const _0x1f8f83 = yield null === (_0x170859 = navigator.mediaDevices.enumerateDevices()) ||
        undefined === _0x170859
        ? undefined
        : _0x170859.then((_0x441ddc) => _0x441ddc.map((_0x2443db) => _0x2443db.kind).sort()),
        _0x2ebaa4 = __timeLogger.stop(),
        _0x5bd5bf = {
            data: _0x1f8f83,
        }
    return (
        (_0x5bd5bf.hash = yield(0, _0xd4bf76.__encodeText)(_0x1f8f83)),
        (_0x5bd5bf.computingTime = _0x2ebaa4),
        _0x5bd5bf
    )
})().then(result => {
    debugger;
    console.log(result);
})