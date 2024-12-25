// @ts-check

(async () => {
    const __timeLogger = (0, __engineInfo.__timeLogger)()
    let _0x108872 = ''
    yield(0, __engineInfo.__sleep)(__timeLogger)
    let _0x86b1dc = {}
    if (null === navigator || undefined === navigator ? undefined : navigator.getBattery) {
        yield(0, __engineInfo.__sleep)(__timeLogger)
        const {
            charging: __charging,
            chargingTime: __chargingTime,
            dischargingTime: __dischargingTime,
            level: __level,
        } = (yield null === navigator || undefined === navigator ? undefined : navigator.getBattery()) || {}
            ; (_0x108872 = __timeLogger.stop()),
                (_0x86b1dc = {
                    charging: __charging,
                    chargingTime: __chargingTime,
                    dischargingTime: __dischargingTime,
                    level: __level,
                })
    }
    return (
        (_0x86b1dc.hash = yield(0, _0x3c078b.__encodeText)(_0x86b1dc)),
        (_0x86b1dc.computingTime = _0x108872),
        _0x86b1dc
    )
})().then(result => {
    debugger;
    console.log(result);
})