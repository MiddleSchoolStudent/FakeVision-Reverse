// @ts-check

var __detectWebdrivers = () => {
    let _0x235447
    const _0x2b87a6 = [
        'webdriver',
        '__webdriverFunc',
        '__lastWatirAlert',
        '__lastWatirConfirm',
        '__lastWatirPrompt',
        '_WEBDRIVER_ELEM_CACHE',
        'ChromeDriverw',
        'ClientUtils',
        '__utils__',
        '__nw_windows',
        '__nw_remove_all_listeners',
        '__nw_ondestruct',
        '__nw_removeOuterEventCB',
        '__nw_ondocumentcreated',
        '__nw_initwindow',
        'BrowserAutomationStudio_GetFrameIndex',
        'BrowserAutomationStudio_Open',
        'BrowserAutomationStudio_GetInternalBoundingRect',
        'BrowserAutomationStudio_ScrollToElement',
        'BrowserAutomationStudio_ScrollToCoordinates',
        'BrowserAutomationStudio_ScrollUp',
        'BrowserAutomationStudio_ScrollToCoordinatesNoResult',
        'BrowserAutomationStudio_FindElement',
        'BrowserAutomationStudio_Sleep',
        'browser_automation_studio_frame_find_result',
        'browser_automation_studio_eval',
        'browser_automation_studio_result',
        'browser_automation_studio_inspect_result',
        'BrowserAutomationStudio_RecaptchaSolved',
        'BrowserAutomationStudio_OriginalDate',
        'BrowserAutomationStudio_MatchAllIteration',
        'BrowserAutomationStudio_SetGeolocation',
        'BrowserAutomationStudio_GeolocationRestore',
    ]
    for (const _0x398340 in _0x2b87a6) if (window[_0x2b87a6[_0x398340]]) return true
    const _0xc7bb28 = [
        '__webdriver_script_fn',
        '__driver_evaluate',
        '__webdriver_evaluate',
        '__fxdriver_evaluate',
        '__driver_unwrapped',
        '__webdriver_unwrapped',
        '__fxdriver_unwrapped',
        '__webdriver_script_func',
        '__webdriver_script_function',
        '$cdc_asdjflasutopfhvcZLmcf',
        '$cdc_asdjflasutopfhvcZLmcfl_',
        '$chrome_asyncScriptInfo',
        '__$webdriverAsyncExecutor',
        'webdriver',
        'driver-evaluate',
        'webdriver-evaluate',
        'webdriverCommand',
        'webdriver-evaluate-response',
    ]
    for (const _0x22c9c4 in _0xc7bb28) {
        const _0x49fb43 = _0xc7bb28[_0x22c9c4]
        if (window.document[_0x49fb43]) return true
    }
    for (const _0x4c9bc3 in window.document)
        if (_0x4c9bc3.match(/\$[a-z]dc_/) && window.document[_0x4c9bc3].cache_) return true
    if (
        window.external &&
        window.external.toString() &&
        -1 != window.external.toString().indexOf('Sequentum')
    )
        return true
    let _0x2d3ecd
    try {
        null[0]()
    } catch (_0x330067) {
        _0x2d3ecd = _0x330067
    }
    const _0x202481 = ['phantomjs', 'selenium', 'triflejs', 'specterjs', 'slimerjs', 'casperjs']
    for (const _0x31e81b of _0x202481)
        if (
            (null == (_0x235447 = _0x2d3ecd.stack) ? undefined : _0x235447.toString().toLowerCase()).indexOf(
                _0x31e81b
            ) > -1
        )
            return true
    return false
},
    __detectWebdrivers2 = () => {
        var _0x5d6bc3, _0x2f9364, _0x549e44, _0x589e83, _0x11ebe1, _0xa3959
        for (const _0x59b14f in window)
            if (/^([a-z]){3}_.*_(Array|Promise|Symbol|Proxy|JSON|Object)$/.test(_0x59b14f)) return true
        return [
            '_Selenium_IDE_Recorder' in window,
            'callSelenium' in window,
            '_selenium' in window,
            'calledSelenium' in window,
            '__webdriver_script_fn' in document,
            '__driver_evaluate' in document,
            '__webdriver_evaluate' in document,
            '__selenium_evaluate' in document,
            '__fxdriver_evaluate' in document,
            '__driver_unwrapped' in document,
            '__webdriver_unwrapped' in document,
            '__selenium_unwrapped' in document,
            '__fxdriver_unwrapped' in document,
            '__webdriver_script_func' in document,
            'selenium-evaluate' in document,
            null !==
            (null ===
                (_0x2f9364 =
                    null === (_0x5d6bc3 = document.documentElement) || undefined === _0x5d6bc3
                        ? undefined
                        : _0x5d6bc3.getAttribute) || undefined === _0x2f9364
                ? undefined
                : _0x2f9364.call(_0x5d6bc3, 'selenium')),
            null !==
            (null ===
                (_0x589e83 =
                    null === (_0x549e44 = document.documentElement) || undefined === _0x549e44
                        ? undefined
                        : _0x549e44.getAttribute) || undefined === _0x589e83
                ? undefined
                : _0x589e83.call(_0x549e44, 'webdriver')),
            null !==
            (null ===
                (_0xa3959 =
                    null === (_0x11ebe1 = document.documentElement) || undefined === _0x11ebe1
                        ? undefined
                        : _0x11ebe1.getAttribute) || undefined === _0xa3959
                ? undefined
                : _0xa3959.call(_0x11ebe1, 'driver')),
        ].some((_0x159866) => _0x159866)
    };

(async () => {
    const tests = [
        navigator.webdriver,
        __detectWebdrivers(),
        __detectWebdrivers2(),
        ['__nightmare' in window, 'nightmare' in window].some((_0x12764c) => _0x12764c),
        [
            'callPhantom' in window,
            '_phantom' in window,
            'Buffer' in window,
            'spawn' in window,
            'PhantomEmitter' in window,
            /PhantomJS/.test(navigator.userAgent),
        ].some((_0x3eb9b5) => _0x3eb9b5),
        ['awesomium' in window].some((_0x5ee01d) => _0x5ee01d),
        ['RunPerfTest' in window].some((_0x53d9ad) => _0x53d9ad),
        ['CefSharp' in window].some((_0x58f524) => _0x58f524),
        ['emit' in window].some((_0x3a30ab) => _0x3a30ab),
        ['fmget_targets' in window].some((_0x15f754) => _0x15f754),
        ['geb' in window].some((_0x5b0fef) => _0x5b0fef),
        ['__phantomas' in window].some((_0x142c15) => _0x142c15),
        ['spawn' in window].some((_0xa4e1e) => _0xa4e1e),
        ['wdioElectron' in window].some((_0x2ba075) => _0x2ba075),
        ['domAutomation' in window, 'domAutomationController' in window].some((_0x4e4a65) => _0x4e4a65),
    ].some((e) => e)
    return tests && (0, __documentInfo.__documentLie)('misc', '2'), tests
})().then(result => {
    debugger;
    console.log(result);
})