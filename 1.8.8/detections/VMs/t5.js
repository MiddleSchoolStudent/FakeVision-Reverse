// @ts-check

const _0x23fb82 = {
    alg: 'RSA-OAEP-256',
    e: 'AQAB',
    ext: true,
    key_ops: ['encrypt'],
    kty: 'RSA',
    n: '8DJNossKBi-kNHAmIckUEs2ceEm32xlIwjqEtJ4gtxsLHdSa8HLs2SM6tFvxLQCkq9B_dWkZ1U1B0iH5oy4EaAOqC-NhZDh_UWTLRvoj9bHFFGFhRTOG80ztY-aeGuSeE5q3k86t9dgBA3v-BBW9u_ISuOd_hJvb6Z8kZmheak74uXRFTKkjO9SawZa-9cKC82lucYQeHPBWiqg7F8o15TSKtBqa8KD5_RYel3BZpUaN1mdQIO0HHiFbxeb2lLXcPlXL1cSGD1bOeQJ75i_0Sl50DHI6vM7SZpxRYc6dVO4trG05bGfNoQtmbww_UXzcOEi4LZI-4Ed42oTQxP3rTw',
};
async function _0x3439ff(_0x2140f4) {
    const _0x267be7 = crypto.getRandomValues(new Uint8Array(12));
    const _0x186d03 = {
        name: 'AES-GCM',
        length: 0x100,
    };
    const _0x571d1b = await crypto.subtle.generateKey(_0x186d03, true, ['encrypt', 'decrypt']);
    const _0x13a46e = await crypto.subtle.exportKey('raw', _0x571d1b);
    const _0x1d3601 = await _0x4338ea(_0x13a46e, _0x23fb82);
    const _0x3b001f = JSON.stringify(_0x2140f4);
    const _0x1fd613 = new TextEncoder().encode(_0x3b001f);
    const _0x363b26 = {
        name: 'AES-GCM',
        iv: _0x267be7,
    };
    const _0x45ea91 = await crypto.subtle.encrypt(_0x363b26, _0x571d1b, _0x1fd613);
    const _0x4fff19 = btoa(String.fromCharCode(...new Uint8Array(_0x45ea91)));
    const _0x1cd3c2 = btoa(String.fromCharCode(...new Uint8Array(_0x267be7)));
    const _0x3ad8dd = btoa(String.fromCharCode(...new Uint8Array(_0x1d3601)));
    return [_0x4fff19, _0x1cd3c2, _0x3ad8dd];
}
async function _0x4338ea(_0x5c7c79, _0x9fade9) {
    const _0xca5a92 = {
        name: 'SHA-256',
    };
    const _0x35e3ed = {
        name: 'RSA-OAEP',
        hash: _0xca5a92,
    };
    const _0x2da928 = await crypto.subtle.importKey('jwk', _0x9fade9, _0x35e3ed, true, ['encrypt']);
    const _0x178d56 = {
        name: 'RSA-OAEP',
    };
    return await crypto.subtle.encrypt(_0x178d56, _0x2da928, _0x5c7c79);
}
const documentFragment = new DocumentFragment();
const divElem = document.createElement('div');
documentFragment.appendChild(divElem);
divElem.innerHTML =
    '<div style="\n\theight: 100vh;\n\twidth: 100vw;\n\tposition: fixed;\n\tleft:-10000px;\n\tvisibility: hidden;\n"><iframe></iframe></div>';
document.body.appendChild(documentFragment);
async function _0x2d6adf() {
    const __getComputedStyle = (key) => {
        try {
            const styleResult =
                key == 'getComputedStyle'
                    ? getComputedStyle(document.body)
                    : key == 'HTMLElement.style'
                        ? document.body.style
                        : key == 'CSSRuleList.style'
                            ? document.styleSheets[0].cssRules[0].style
                            : undefined;
            if (!styleResult) {
                throw new TypeError('invalid argument string');
            }
            const styleResultPrototype = Object.getPrototypeOf(styleResult);
            const stylePropNames = Object.getOwnPropertyNames(styleResultPrototype);
            const _0x37cb53 = [];
            const _0x5b4e4d = /^--.*$/;
            Object.keys(styleResult).forEach((_0x3b9367) => {
                const _0x231876 = !isNaN(+_0x3b9367);
                const _0x2fa9ee = styleResult[_0x3b9367];
                const _0x1687e9 = _0x5b4e4d.test(_0x3b9367);
                const _0x4e09f7 = _0x5b4e4d.test(_0x2fa9ee);
                if (_0x231876 && !_0x4e09f7) {
                    return _0x37cb53.push(_0x2fa9ee);
                } else {
                    if (!_0x231876 && !_0x1687e9) {
                        return _0x37cb53.push(_0x3b9367);
                    }
                }
                return;
            });
            const _0x4af6c6 = {};
            const _0x3ff468 = /[A-Z]/g;
            _0x37cb53.forEach((_0x51de4b) => {
                if (_0x4af6c6[_0x51de4b]) {
                    return;
                }
                const _0x5ba97a = _0x51de4b.indexOf('-') > -1;
                const _0x45f51e = _0x3ff468.test(_0x51de4b);
                const _0x694d64 = _0x51de4b.charAt(0);
                const _0x1650b0 = _0x5ba97a && _0x694d64 == '-';
                const _0x4a81ef = _0x45f51e && _0x694d64 == _0x694d64.toUpperCase();
                _0x51de4b = _0x1650b0
                    ? _0x51de4b.slice(1)
                    : _0x4a81ef
                        ? _0x51de4b.charAt(0).toLowerCase() + _0x51de4b.slice(1)
                        : _0x51de4b;
                if (_0x5ba97a) {
                    const _0x2f98bd = _0x51de4b
                        .split('-')
                        .map((_0x4c5271, _0x2733b1) =>
                            _0x2733b1 == 0 ? _0x4c5271 : _0x4c5271.charAt(0).toUpperCase() + _0x4c5271.slice(1)
                        )
                        .join('');
                    if (_0x2f98bd in styleResult) {
                        _0x4af6c6[_0x2f98bd] = true;
                    } else if (_0x2f98bd.charAt(0).toUpperCase() + _0x2f98bd.slice(1) in styleResult) {
                        _0x4af6c6[_0x2f98bd.charAt(0).toUpperCase() + _0x2f98bd.slice(1)] = true;
                    }
                } else {
                    if (_0x45f51e) {
                        const _0x518fad = _0x51de4b.replace(_0x3ff468, (_0x51bb3f) => '-' + _0x51bb3f.toLowerCase());
                        if (_0x518fad in styleResult) {
                            _0x4af6c6[_0x518fad] = true;
                        } else if ('-' + _0x518fad in styleResult) {
                            _0x4af6c6['-' + _0x518fad] = true;
                        }
                    }
                }
                return;
            });
            const _0x3149b8 = [...new Set([...stylePropNames, ..._0x37cb53, ...Object.keys(_0x4af6c6)])];
            const _0x49cc83 = {
                keys: _0x3149b8,
            };
            return _0x49cc83;
        } catch (_0x4659d5) {
            console.log('error: ', _0x4659d5);
            return;
        }
    };
    const __getSystemStyle = (elem) => {
        try {
            const _0x2fa5d3 = [
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
            ];
            const systemUINames = [
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
            ];
            const __getElemStyle = (elem) => ({
                colors: _0x2fa5d3.reduce((_0x5b3549, _0x17d842) => {
                    elem.setAttribute('style', 'background-color: ' + _0x17d842 + ' !important');
                    _0x5b3549[_0x17d842] = getComputedStyle(elem).backgroundColor;
                    return _0x5b3549;
                }, {}),
                fonts: systemUINames.reduce((acc, curr) => {
                    elem.setAttribute('style', 'font: ' + curr + ' !important');
                    const style = getComputedStyle(elem);
                    acc[curr] = style.fontSize + ' ' + style.fontFamily;
                    return acc;
                }, {}),
            });
            if (!elem) {
                elem = document.createElement('div');
                document.body.append(elem);
                const elemStyle = __getElemStyle(elem);
                elem.parentNode.removeChild(elem);
                return elemStyle;
            }
            return __getElemStyle(elem);
        } catch (_0x15fb29) {
            const _0x5c1473 = {
                colors: [],
                fonts: [],
            };
            return _0x5c1473;
        }
    };
    try {
        const computedStyle = __getComputedStyle('getComputedStyle');
        const systemStyle = __getSystemStyle(divElem);
        const result = {
            computedStyle: computedStyle,
            system: systemStyle,
        };
        debugger;
        if (result.system.colors.Highlight === 'rgb(179, 215, 255)') {
            console.log('t5', false);
            _0x3439ff(false).then((_0x30f3fa) => {
                localStorage.setItem('t5', JSON.stringify(_0x30f3fa));
                const _0x3cb372 = new Event('dataChanged');
                window.dispatchEvent(_0x3cb372);
            });
        } else {
            console.log('t5', true);
            _0x3439ff(true).then((_0x5ee025) => {
                localStorage.setItem('t5', JSON.stringify(_0x5ee025));
                const _0x3c0564 = new Event('dataChanged');
                window.dispatchEvent(_0x3c0564);
            });
        }
    } catch (_0x3cf182) {
        console.error(_0x3cf182);
    }
}
_0x2d6adf();
