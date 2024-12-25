// @ts-check

(async () => {
    const __timeLogger = (0, __engineInfo.__timeLogger)()
    __timeLogger.start()
    const {
        downlink: __downlink,
        effectiveType: __effectiveType,
        rtt: __rtt,
        saveData: __saveData,
    } = (null === (__navigator = window.navigator) || undefined === __navigator
        ? undefined
        : __navigator.connection) || {},
        _0x43fc6b = {
            downlink: __downlink,
            effectiveType: __effectiveType,
            rtt: __rtt,
            saveData: __saveData,
        }
    return (
        (_0x43fc6b.hash = yield(0, _0x3c078b.__encodeText)(_0x43fc6b)),
        (_0x43fc6b.computingTime = __timeLogger.stop()),
        _0x43fc6b
    )
})().then(result => {
    debugger;
    console.log(result);
})