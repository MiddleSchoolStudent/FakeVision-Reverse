const _0x421026 = function () {
    let _0x5c6f2f = true;
    return function (_0x2b2fdd, _0x28eae6) {
        const _0xeb36a1 = _0x5c6f2f ? function () {
            if (_0x28eae6) {
                const _0x152df7 = _0x28eae6.apply(_0x2b2fdd, arguments);
                _0x28eae6 = null;
                return _0x152df7;
            }
        } : function () { };
        _0x5c6f2f = false;
        return _0xeb36a1;
    };
}();
const _0x1c2b30 = _0x421026(this, function () {
    const _0x54eb85 = function () {
        let _0x281456;
        try {
            _0x281456 = Function("return (function() {}.constructor(\"return this\")( ));")();
        } catch (_0x56b517) {
            _0x281456 = window;
        }
        return _0x281456;
    };
    const _0x278864 = _0x54eb85();
    const _0x44f329 = _0x278864.console = _0x278864.console || {};
    const _0x30c9f1 = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let _0x15b11b = 0; _0x15b11b < _0x30c9f1.length; _0x15b11b++) {
        const _0x420e2f = _0x421026.constructor.prototype.bind(_0x421026);
        const _0x34afed = _0x30c9f1[_0x15b11b];
        const _0x40bb0e = _0x44f329[_0x34afed] || _0x420e2f;
        _0x420e2f.__proto__ = _0x421026.bind(_0x421026);
        _0x420e2f.toString = _0x40bb0e.toString.bind(_0x40bb0e);
        _0x44f329[_0x34afed] = _0x420e2f;
    }
});
_0x1c2b30();
const _0x4d3fb8 = {
    alg: "RSA-OAEP-256",
    e: "AQAB",
    ext: true,
    key_ops: ["encrypt"],
    kty: "RSA",
    n: "8DJNossKBi-kNHAmIckUEs2ceEm32xlIwjqEtJ4gtxsLHdSa8HLs2SM6tFvxLQCkq9B_dWkZ1U1B0iH5oy4EaAOqC-NhZDh_UWTLRvoj9bHFFGFhRTOG80ztY-aeGuSeE5q3k86t9dgBA3v-BBW9u_ISuOd_hJvb6Z8kZmheak74uXRFTKkjO9SawZa-9cKC82lucYQeHPBWiqg7F8o15TSKtBqa8KD5_RYel3BZpUaN1mdQIO0HHiFbxeb2lLXcPlXL1cSGD1bOeQJ75i_" + "0Sl50" + "DHI6v" + "M7SZp" + "xRYc6" + "dVO4t" + "rG05b" + "GfNoQ" + "tmbww" + "_UXzc" + "OEi4L" + "ZI-4E" + "d42oT" + "QxP3r" + "Tw"
};
async function _0x4361b0(_0x2176cb) {
    const _0x4d2183 = crypto.getRandomValues(new Uint8Array(12));
    const _0x403cc4 = {
        name: "AES-GCM",
        length: 0x100
    };
    const _0x5513c7 = await crypto.subtle.generateKey(_0x403cc4, true, ["encrypt", "decrypt"]);
    const _0x1a337c = await crypto.subtle.exportKey("raw", _0x5513c7);
    const _0x1e7f0c = await _0x3ef07e(_0x1a337c, _0x4d3fb8);
    const _0x57b7de = JSON.stringify(_0x2176cb);
    const _0xb1e7fe = new TextEncoder().encode(_0x57b7de);
    const _0x399887 = {
        "name": "AES-GCM",
        iv: _0x4d2183
    };
    const _0x52299f = await crypto["subtl" + "e"].encrypt(_0x399887, _0x5513c7, _0xb1e7fe);
    const _0x19879e = btoa(String.fromCharCode(...new Uint8Array(_0x52299f)));
    const _0x28e579 = btoa(String.fromCharCode(...new Uint8Array(_0x4d2183)));
    const _0x3adf95 = btoa(String.fromCharCode(...new Uint8Array(_0x1e7f0c)));
    return [_0x19879e, _0x28e579, _0x3adf95];
}
async function _0x3ef07e(_0x279e1a, _0x18815a) {
    const _0x18614b = {
        "name": "SHA-256"
    };
    const _0x2ebe47 = {
        name: "RSA-OAEP",
        hash: _0x18614b
    };
    const _0x2acd95 = await crypto.subtle.importKey("jwk", _0x18815a, _0x2ebe47, true, ["encrypt"]);
    const _0x28f3b6 = {
        name: "RSA-OAEP"
    };
    return await crypto.subtle.encrypt(_0x28f3b6, _0x2acd95, _0x279e1a);
}
const _0x498514 = async (_0x2c8afb = "high-" + "perfo" + "rmanc" + "e") => {
    const _0x542539 = {
        "QOglc": "Unsupported"
    };
    const _0x55d4a1 = performance.now();
    if (!("gpu" in navigator)) {
        const _0x63a1fc = {
            "error": _0x542539["QOglc"]
        };
        return _0x63a1fc;
    }
    const _0x480f6a = {
        powerPreference: _0x2c8afb
    };
    return navigator.gpu.requestAdapter(_0x480f6a).then(async _0x5ad276 => {
        if (!_0x5ad276) {
            const _0x4a4d68 = {
                error: "Unsupported"
            };
            return _0x4a4d68;
        }
        const _0x1d7d15 = [..._0x5ad276.features.values()];
        const _0x1acc68 = performance.now() - _0x55d4a1;
        if (_0x1acc68 > 5000) {
            while (true) {
                3;
            }
        }
        return _0x1d7d15;
    });
};
_0x498514("high-performance").then(_0x435c25 => {
    console.log("t9", _0x435c25);
    _0x4361b0(_0x435c25)["then"](_0x1486cb => {
        localStorage.setItem("t9", JSON.stringify(_0x1486cb));
        const _0x259c55 = new Event("dataChanged");
        window.dispatchEvent(_0x259c55);
    })["catch"](() => {
    });
});