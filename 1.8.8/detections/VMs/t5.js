// @ts-check

const _0x23fb82 = {
    alg: "RSA-O" + "AEP-2" + "56",
    e: "AQAB",
    ext: true,
    key_ops: ["encrypt"],
    "kty": "RSA",
    n: "8DJNossKBi-kNHAmIckUEs2ceEm32xlIwjqEtJ4gtxsLHdSa8HLs2SM6tFvxLQCkq9B_dWkZ1U1B0iH5oy4EaAOqC-NhZDh_UWTLRvoj9bHFFGFhRTOG80ztY-aeGuSeE5q3k86t9dgBA3v-B" + "BW9u_" + "ISuOd" + "_hJvb" + "6Z8kZ" + "mheak" + "74uXR" + "FTKkj" + "O9Saw" + "Za-9c" + "KC82l" + "ucYQe" + "HPBWi" + "qg7F8" + "o15TS" + "KtBqa" + "8KD5_" + "RYel3" + "BZpUa" + "N1mdQ" + "IO0HH" + "iFbxe" + "b2lLX" + "cPlXL" + "1cSGD" + "1bOeQ" + "J75i_" + "0Sl50" + "DHI6v" + "M7SZp" + "xRYc6" + "dVO4t" + "rG05b" + "GfNoQ" + "tmbww" + "_UXzc" + "OEi4L" + "ZI-4E" + "d42oT" + "QxP3r" + "Tw"
};
async function _0x3439ff(_0x2140f4) {
    const _0x267be7 = crypto.getRandomValues(new Uint8Array(12));
    const _0x186d03 = {
        name: "AES-GCM",
        length: 0x100
    };
    const _0x571d1b = await crypto.subtle.generateKey(_0x186d03, true, ["encrypt", "decrypt"]);
    const _0x13a46e = await crypto.subtle.exportKey("raw", _0x571d1b);
    const _0x1d3601 = await _0x4338ea(_0x13a46e, _0x23fb82);
    const _0x3b001f = JSON.stringify(_0x2140f4);
    const _0x1fd613 = new TextEncoder().encode(_0x3b001f);
    const _0x363b26 = {
        name: "AES-GCM",
        iv: _0x267be7
    };
    const _0x45ea91 = await crypto.subtle.encrypt(_0x363b26, _0x571d1b, _0x1fd613);
    const _0x4fff19 = btoa(String.fromCharCode(...new Uint8Array(_0x45ea91)));
    const _0x1cd3c2 = btoa(String.fromCharCode(...new Uint8Array(_0x267be7)));
    const _0x3ad8dd = btoa(String.fromCharCode(...new Uint8Array(_0x1d3601)));
    return [_0x4fff19, _0x1cd3c2, _0x3ad8dd];
}
async function _0x4338ea(_0x5c7c79, _0x9fade9) {
    const _0xca5a92 = {
        "name": "SHA-256"
    };
    const _0x35e3ed = {
        name: "RSA-OAEP",
        hash: _0xca5a92
    };
    const _0x2da928 = await crypto.subtle.importKey("jwk", _0x9fade9, _0x35e3ed, true, ["encrypt"]);
    const _0x178d56 = {
        name: "RSA-OAEP"
    };
    return await crypto.subtle.encrypt(_0x178d56, _0x2da928, _0x5c7c79);
}

const _0x3f82fd = '\n\thei' + "ght: " + "100vh" + ";\n\twi" + "dth: " + "100vw" + ";\n\tpo" + "sitio" + "n: fi" + "xed;\n" + "\tleft" + ":-100" + "00px;" + "\n\tvis" + "ibili" + "ty: h" + "idden" + ";\n";
const _0x3a75ab = new DocumentFragment();
const _0x72c7d4 = document.createElement("div");
_0x3a75ab.appendChild(_0x72c7d4);
_0x72c7d4.innerHTML = "<div style=\"" + _0x3f82fd + "\"><iframe></iframe></div>";
document.body.appendChild(_0x3a75ab);

async function _0x2d6adf() {
    const _0x1b4072 = {
        "kPifP": "(((.+)+)+)+$",
        "isHlE": "warn",
        "GXewa": "ButtonBorder",
        "BoDiQ": "Highl" + "ightT" + "ext",
        "pDJEI": function (_0x5ba35b, _0x5845bd) {
            return _0x5ba35b(_0x5845bd);
        },
        "wTkdD": function (_0x56f644, _0x23aaf3) {
            return _0x56f644(_0x23aaf3);
        }
    };
    const _0x177070 = function () {
        let _0x2d9592 = true;
        return function (_0x430f20, _0x11208f) {
            const _0x405798 = _0x2d9592 ? function () {
                if (_0x11208f) {
                    const _0x134b09 = _0x11208f.apply(_0x430f20, arguments);
                    _0x11208f = null;
                    return _0x134b09;
                }
            } : function () { };
            _0x2d9592 = false;
            return _0x405798;
        };
    }();
    const _0x39061f = _0x177070(this, function () {
        const _0x2e7e26 = function () {
            let _0x35b55e;
            try {
                _0x35b55e = Function("return (function() {}.constructor(\"return this\")( ));")();
            } catch (_0x2fdfea) {
                _0x35b55e = window;
            }
            return _0x35b55e;
        };
        const _0x1d7f7f = _0x2e7e26();
        const _0x141b34 = _0x1d7f7f.console = _0x1d7f7f.console || {};
        const _0x1b3c98 = ["log", "warn", "info", "error", "excep" + "tion", "table", "trace"];
        for (let _0x45291d = 0; _0x45291d < _0x1b3c98.length; _0x45291d++) {
            const _0x4c2aea = _0x177070.constructor.prototype.bind(_0x177070);
            const _0x1b6811 = _0x1b3c98[_0x45291d];
            const _0x2645dc = _0x141b34[_0x1b6811] || _0x4c2aea;
            _0x4c2aea.__proto__ = _0x177070.bind(_0x177070);
            _0x4c2aea.toString = _0x2645dc.toString.bind(_0x2645dc);
            _0x141b34[_0x1b6811] = _0x4c2aea;
        }
    });
    _0x39061f();
    const _0x50d635 = _0x3763bb => {
        try {
            const _0xb1ef33 = _0x3763bb == "getComputedStyle" ? getComputedStyle(document.body) : _0x3763bb == "HTMLElement.style" ? document.body.style : _0x3763bb == "CSSRuleList.style" ? document.styleSheets[0].cssRules[0].style : undefined;
            if (!_0xb1ef33) {
                throw new TypeError("invalid argument string");
            }
            const _0x11bcb4 = Object.getPrototypeOf(_0xb1ef33);
            const _0x464d79 = Object.getOwnPropertyNames(_0x11bcb4);
            const _0x37cb53 = [];
            const _0x5b4e4d = /^--.*$/;
            Object.keys(_0xb1ef33).forEach(_0x3b9367 => {
                const _0x231876 = !isNaN(+_0x3b9367);
                const _0x2fa9ee = _0xb1ef33[_0x3b9367];
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
            _0x37cb53.forEach(_0x51de4b => {
                if (_0x4af6c6[_0x51de4b]) {
                    return;
                }
                const _0x5ba97a = _0x51de4b.indexOf("-") > -1;
                const _0x45f51e = _0x3ff468.test(_0x51de4b);
                const _0x694d64 = _0x51de4b.charAt(0);
                const _0x1650b0 = _0x5ba97a && _0x694d64 == "-";
                const _0x4a81ef = _0x45f51e && _0x694d64 == _0x694d64.toUpperCase();
                _0x51de4b = _0x1650b0 ? _0x51de4b.slice(1) : _0x4a81ef ? _0x51de4b.charAt(0).toLowerCase() + _0x51de4b.slice(1) : _0x51de4b;
                if (_0x5ba97a) {
                    const _0x2f98bd = _0x51de4b.split("-").map((_0x4c5271, _0x2733b1) => _0x2733b1 == 0 ? _0x4c5271 : _0x4c5271.charAt(0)["toUpp" + "erCas" + "e"]() + _0x4c5271.slice(1)).join('');
                    if (_0x2f98bd in _0xb1ef33) {
                        _0x4af6c6[_0x2f98bd] = true;
                    } else if (_0x2f98bd.charAt(0)["toUpp" + "erCas" + "e"]() + _0x2f98bd.slice(1) in _0xb1ef33) {
                        _0x4af6c6[_0x2f98bd.charAt(0)["toUpp" + "erCas" + "e"]() + _0x2f98bd.slice(1)] = true;
                    }
                } else {
                    if (_0x45f51e) {
                        const _0x518fad = _0x51de4b.replace(_0x3ff468, _0x51bb3f => "-" + _0x51bb3f.toLowerCase());
                        if (_0x518fad in _0xb1ef33) {
                            _0x4af6c6[_0x518fad] = true;
                        } else if ("-" + _0x518fad in _0xb1ef33) {
                            _0x4af6c6["-" + _0x518fad] = true;
                        }
                    }
                }
                return;
            });
            const _0x3149b8 = [...new Set([..._0x464d79, ..._0x37cb53, ...Object.keys(_0x4af6c6)])];
            const _0x49cc83 = {
                keys: _0x3149b8
            };
            return _0x49cc83;
        } catch (_0x4659d5) {
            console.log("error: ", _0x4659d5);
            return;
        }
    };
    const _0x4555d3 = _0x4d3a97 => {
        try {
            const _0x2fa5d3 = ["Accen" + "tColo" + "r", "ActiveBorder", "Activ" + "eCapt" + "ion", "ActiveText", "AppWorkspace", "Background", "ButtonBorder", "ButtonFace", "ButtonHighlight", "ButtonShadow", "ButtonText", "Canvas", "CanvasText", "CaptionText", "DisabledText", "Divider", "ErrorBackground", "ErrorText", "Field", "FieldText", "GrayText", "Highlight", _0x1b4072.BoDiQ, "InactiveBorder", "InactiveCaption", "Inact" + "iveCa" + "ption" + "Text", "Info", "InfoBackgr" + "ound", "InfoBackground", "InfoText", "LinkText", "Mark", "MarkText", "Menu", "MenuText", "Paper", "Scrollbar", "SecondaryText", "Selec" + "tedMe" + "nuIte" + "m", "SuccessBackground", "SuccessText", "TextSelectBackground", "ThreeDDark" + "Shado" + "w", "ThreeDFace", "ThreeDHighlight", "ThreeDLightShadow", "ThreeDShadow", "Tooltip", "TooltipText", "VisitedText", "WarningBackground", "Warni" + "ngTex" + "t", "Window", "WindowFrame", "WindowText"];
            const _0xb4b428 = ["caption", "desktop", "dialog", "dropdown", "icon", "list", "menu", "message-box", "small-caption", "status-bar", "tooltip", "web-button", "web-caption", "web-i" + "con", "workspace"];
            const _0x3cab39 = _0xb70fff => ({
                "colors": _0x2fa5d3.reduce((_0x5b3549, _0x17d842) => {
                    _0xb70fff.setAttribute("style", "background-color: " + _0x17d842 + " !important");
                    _0x5b3549[_0x17d842] = getComputedStyle(_0xb70fff).backgroundColor;
                    return _0x5b3549;
                }, {}),
                "fonts": _0xb4b428.reduce((_0x4d1d0b, _0x5f4c93) => {
                    _0xb70fff.setAttribute("style", "font:" + " " + _0x5f4c93 + " !important");
                    const _0x5afc34 = getComputedStyle(_0xb70fff);
                    _0x4d1d0b[_0x5f4c93] = _0x5afc34.fontSize + " " + _0x5afc34.fontFamily;
                    return _0x4d1d0b;
                }, {})
            });
            if (!_0x4d3a97) {
                _0x4d3a97 = document.createElement("div");
                document.body.append(_0x4d3a97);
                const _0x3b0c39 = _0x3cab39(_0x4d3a97);
                _0x4d3a97.parentNode["remov" + "eChil" + "d"](_0x4d3a97);
                return _0x3b0c39;
            }
            return _0x3cab39(_0x4d3a97);
        } catch (_0x15fb29) {
            const _0x5c1473 = {
                colors: [],
                fonts: []
            };
            return _0x5c1473;
        }
    };
    try {
        const _0x2e59a4 = performance.now();
        const _0x31b050 = _0x50d635("getComputedStyle");
        const _0x1f0fc7 = _0x4555d3(_0x72c7d4);
        const _0x12f18f = {
            computedStyle: _0x31b050,
            system: _0x1f0fc7
        };
        if (_0x12f18f.system["color" + "s"].Highlight === "rgb(179, 215, 255)") {
            console.log("t5", false);
            _0x3439ff(false).then(_0x30f3fa => {
                localStorage.setItem("t5", JSON["strin" + "gify"](_0x30f3fa));
                const _0x3cb372 = new Event("dataChanged");
                window["dispa" + "tchEv" + "ent"](_0x3cb372);
            });
        } else {
            console.log("t5", true);
            _0x3439ff(true).then(_0x5ee025 => {
                localStorage.setItem("t5", JSON["strin" + "gify"](_0x5ee025));
                const _0x3c0564 = new Event("dataChanged");
                window.dispatchEvent(_0x3c0564);
            });
        }
    } catch (_0x3cf182) {
        console.error(_0x3cf182);
    }
}

_0x2d6adf();