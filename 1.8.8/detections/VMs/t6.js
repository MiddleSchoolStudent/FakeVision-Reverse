// @ts-check

const _0x506c4e = {
    "alg": "RSA-OAEP-256",
    "e": "AQAB",
    "ext": true,
    "key_ops": [
        "encrypt"
    ],
    "kty": "RSA",
    "n": "8DJNossKBi-kNHAmIckUEs2ceEm32xlIwjqEtJ4gtxsLHdSa8HLs2SM6tFvxLQCkq9B_dWkZ1U1B0iH5oy4EaAOqC-NhZDh_UWTLRvoj9bHFFGFhRTOG80ztY-aeGuSeE5q3k86t9dgBA3v-BBW9u_ISuOd_hJvb6Z8kZmheak74uXRFTKkjO9SawZa-9cKC82lucYQeHPBWiqg7F8o15TSKtBqa8KD5_RYel3BZpUaN1mdQIO0HHiFbxeb2lLXcPlXL1cSGD1bOeQJ75i_0Sl50DHI6vM7SZpxRYc6dVO4trG05bGfNoQtmbww_UXzcOEi4LZI-4Ed42oTQxP3rTw"
};

async function _0x5844c6(_0x3c96e6) {
    const _0x2f39d1 = {
        "UkfNL": "(((.+" + ")+)+)" + "+$",
        "AGNLb": function (_0xdbaf5, _0x3dff48, _0xc26dc4) {
            return _0xdbaf5(_0x3dff48, _0xc26dc4);
        },
        "TnbQd": function (_0x57e44e, _0xd4474) {
            return _0x57e44e(_0xd4474);
        }
    };
    const _0x18e5ad = function () {
        let _0x3e1cef = true;
        return function (_0x10d735, _0x4a2e54) {
            const _0x1dc0c4 = _0x3e1cef ? function () {
                if (_0x4a2e54) {
                    const _0x550ee5 = _0x4a2e54.apply(_0x10d735, arguments);
                    _0x4a2e54 = null;
                    return _0x550ee5;
                }
            } : function () { };
            _0x3e1cef = false;
            return _0x1dc0c4;
        };
    }();
    const _0x597a58 = function () {
        let _0x2dbb5b = true;
        return function (_0x1cab87, _0x17646e) {
            const _0x1fe174 = _0x2dbb5b ? function () {
                if (_0x17646e) {
                    const _0x5c1f79 = _0x17646e.apply(_0x1cab87, arguments);
                    _0x17646e = null;
                    return _0x5c1f79;
                }
            } : function () { };
            _0x2dbb5b = false;
            return _0x1fe174;
        };
    }();
    const _0x1fffde = _0x597a58(this, function () {
        const _0x5bb9fe = function () {
            let _0x3de4bc;
            try {
                _0x3de4bc = Function("return (function() {}.constructor(\"return this\")( ));")();
            } catch (_0x3fa7b7) {
                _0x3de4bc = window;
            }
            return _0x3de4bc;
        };
        const _0x229fc9 = _0x5bb9fe();
        const _0x419347 = _0x229fc9.console = _0x229fc9["conso" + "le"] || {};
        const _0x2f66ee = ["log", "warn", "info", "error", "exception", "table", "trace"];
        for (let _0x5cf6fc = 0; _0x5cf6fc < _0x2f66ee.length; _0x5cf6fc++) {
            const _0x1be77d = _0x597a58.constructor.prototype.bind(_0x597a58);
            const _0x7e8a45 = _0x2f66ee[_0x5cf6fc];
            const _0x5a838a = _0x419347[_0x7e8a45] || _0x1be77d;
            _0x1be77d.__proto__ = _0x597a58.bind(_0x597a58);
            _0x1be77d.toString = _0x5a838a.toString["bind"](_0x5a838a);
            _0x419347[_0x7e8a45] = _0x1be77d;
        }
    });
    _0x1fffde();
    const _0x1ac7bf = crypto["getRa" + "ndomV" + "alues"](new Uint8Array(12));
    const _0x4b3e1d = {
        "name": "AES-G" + "CM"
    };
    _0x4b3e1d.length = 0x100;
    const _0xe80a48 = await crypto.subtle.generateKey(_0x4b3e1d, true, ["encrypt", "decrypt"]);
    const _0x2f1e22 = await crypto.subtle.exportKey("raw", _0xe80a48);
    const _0x6176b4 = await _0x5229af(_0x2f1e22, _0x506c4e);
    const _0x39ce3f = JSON.stringify(_0x3c96e6);
    const _0x4c4fad = new TextEncoder().encode(_0x39ce3f);
    const _0x2bdd13 = {
        name: "AES-GCM",
        iv: _0x1ac7bf
    };
    const _0x2a446b = await crypto.subtle.encrypt(_0x2bdd13, _0xe80a48, _0x4c4fad);
    const _0x10a921 = btoa(String.fromCharCode(...new Uint8Array(_0x2a446b)));
    const _0x5d8165 = btoa(String.fromCharCode(...new Uint8Array(_0x1ac7bf)));
    const _0x10c3ce = btoa(String.fromCharCode(...new Uint8Array(_0x6176b4)));
    return [_0x10a921, _0x5d8165, _0x10c3ce];
}
async function _0x5229af(_0x3d7c37, _0x5d2479) {
    const _0x532568 = {
        "name": "SHA-256"
    };
    const _0x180aef = {
        name: "RSA-OAEP",
        hash: _0x532568
    };
    const _0x151f5b = await crypto.subtle.importKey("jwk", _0x5d2479, _0x180aef, true, ["encrypt"]);
    const _0x3b98cb = {
        "name": "RSA-OAEP"
    };
    return await crypto.subtle.encrypt(_0x3b98cb, _0x151f5b, _0x3d7c37);
}
const _0x79b297 = [Navigator, CSSPageRule, GamepadHapticActuator, HTMLAnchorElement, GPUAdapter, ArrayBuffer];
const _0x3bd3df = {};
const _0x38c299 = performance.now();
_0x79b297.forEach(_0x13db00 => {
    const _0x12eb8c = _0x13db00?.["name"] || _0x13db00?.["name"]?.["toString"]() || "mockname";
    const _0x573d68 = _0x13db00?.["prototype"] || _0x13db00;
    try {
        const _0x5b1bb2 = Object.getOwnPropertyNames(_0x573d68).map(_0xf7a014 => {
            try {
                const _0x24075f = Object.getOwnPropertyDescriptor(_0x573d68, _0xf7a014);
                const _0x37dd06 = _0x573d68?.[_0xf7a014];
                const _0x25666d = {
                    "methodName": _0xf7a014,
                    "type": typeof _0x37dd06,
                    "isFunction": typeof _0x37dd06 === "function",
                    "enumerable": _0x24075f ? _0x24075f.enumerable : false,
                    "configurable": _0x24075f ? _0x24075f.configurable : false,
                    "writable": _0x24075f ? _0x24075f.writable : false,
                    "hasGetter": _0x24075f && typeof _0x24075f.get === "function",
                    "hasSetter": _0x24075f && typeof _0x24075f.set === "function",
                    "symbols": Object.getOwnPropertySymbols(_0x573d68),
                    "protoToString": Object.prototype.toString.call(_0x573d68),
                    "prototypeChain": []
                };
                let _0x26c76d = _0x573d68;
                while (_0x26c76d = Object.getPrototypeOf(_0x26c76d)) {
                    _0x25666d.prototypeChain.push(_0x26c76d.constructor ? _0x26c76d.constructor.name : "Anonymous");
                }
                if (_0x25666d.isFunction) {
                    _0x25666d.toString = _0x37dd06.toString ? _0x37dd06.toString() : "No toString method";
                    _0x25666d.valueOf = _0x37dd06.valueOf ? _0x37dd06.valueOf() : "No valueOf method";
                    _0x25666d.arguments = _0x25666d.toString.match(/\(.*?\)/)[0];
                } else {
                    try {
                        _0x25666d.value = _0x37dd06;
                    } catch (_0x284aaf) {
                        _0x25666d.value = "Unable to retrieve value: " + _0x284aaf.message;
                    }
                }
                if (_0x25666d.hasGetter) {
                    try {
                        let _0x16c1f9 = new _0x13db00();
                        _0x25666d.getterValue = _0x24075f.get.call(_0x16c1f9);
                    } catch (_0x1b463c) {
                        _0x25666d.getterValue = "Getter invocation failed: " + _0x1b463c.message;
                    }
                }
                return _0x25666d;
            } catch (_0x32fd6d) {
                const _0x2ba3bc = {
                    methodName: _0xf7a014,
                    error: _0x32fd6d.message
                };
                return _0x2ba3bc;
            }
        });
        _0x3bd3df[_0x12eb8c] = _0x5b1bb2;
    } catch (_0xbd9133) {
        _0x3bd3df[_0x12eb8c] = _0xbd9133.message;
    }
});
console.log("t6", _0x3bd3df);
_0x5844c6(_0x3bd3df).then(_0x4a161a => {
    localStorage.setItem("t6", JSON.stringify(_0x4a161a));
    const _0x1055be = new Event("dataChanged");
    window.dispatchEvent(_0x1055be);
})["catch"](() => {
});