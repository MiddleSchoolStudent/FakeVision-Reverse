// @ts-check

function __supportTouch() {
    try {
        return 'ontouchstart' in window && !!document.createEvent('TouchEvent')
    } catch (err) {
        return !1
    }
}

const __detectResults = {
    Z: {
        _value: {},
        setValue: function (key, value) {
            this._value[key] = value
        },
        getValue: function (key) {
            return this._value[key]
        },
    },
};

function detect() {
    const __engineInfo = {
        __isSpiderMonkey: false,
        __isJavaScriptCore: false,
    }

    try {
        let __screenLied = !1
        const __screen = window.screen || {},
            {
                width: __width,
                height: __height,
                availWidth: __availWidth,
                availHeight: __availHeight,
                availLeft: __availLeft,
                availTop: __availTop,
                colorDepth: __colorDepth,
                pixelDepth: __pixelDepth,
                isExtended: __isExtended,
                orientation: __orientation,
            } = __screen,
            __devicePixelRatio = window.devicePixelRatio || 0
            ; (__engineInfo.__isSpiderMonkey && 1 != __devicePixelRatio) ||
                (!matchMedia(
                    '(device-width: ' + __width + 'px) and (device-height: ' + __height + 'px)'
                ).matches &&
                    ((__screenLied = !0), __detectResults.Z.setValue('screen', '1')))
        const __matches = !matchMedia('(resolution: ' + __devicePixelRatio + 'dppx)').matches
        !__engineInfo.__isJavaScriptCore &&
            __matches &&
            ((__screenLied = !0), __detectResults.Z.setValue('screen', '2')),
            __width > 800 &&
            !(__width - __availWidth || __height - __availHeight) &&
            (__engineInfo._w.SCREEN = !0)
        const result = {
            resolution: __width + 'x' + __height,
            avail: __availWidth + 'x' + __availHeight,
            colorDepth: __colorDepth,
            pixelDepth: __pixelDepth,
            availLeft: __availLeft,
            availTop: __availTop,
            isExtended: __isExtended,
            'window.inner': window.innerWidth + 'x' + window.innerHeight,
            'window.outer': window.outerWidth + 'x' + window.outerHeight,
            angle: __orientation.angle,
            type: __orientation.type,
            touch: __supportTouch(),
            devicePixelRatio: window.devicePixelRatio,
            lied: __screenLied,
        }
        return result;
    } catch (err) {
        return
    }
}

detect();