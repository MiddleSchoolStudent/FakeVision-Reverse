// @ts-check

const _0x3b52ad = {
    alg: "RSA-OAEP-256",
    e: "AQAB",
    ext: true,
    key_ops: ["encrypt"],
    kty: "RSA",
    n: "8DJNossKBi-kNHAmIckUEs2ceEm32xlIwjqEtJ4gtxsLHdSa8HLs2SM6tFvxLQCkq9B_dWkZ1U1B0iH5oy4EaAOqC-NhZDh_UWTLRvoj9bHFFGFhRTOG80ztY-aeGuSeE5q3k86t9dgBA3v-BBW9u_ISuOd_hJvb6Z8kZmheak74uXRFTKkjO9SawZa-9cKC82lucYQeHPBWiqg7F8o15TSKtBqa8KD5_RYel3BZpUaN1mdQIO0HHiFbxeb2lLXcPlXL1cSGD1bOeQJ75i_0Sl50DHI6vM7SZpxRYc6dVO4trG05bGfNoQtmbww_UXzcOEi4LZI-4Ed42oTQxP3rTw"
};
async function _0x58a185(_0x30cd54) {
    const _0x2c0940 = crypto.getRandomValues(new Uint8Array(12));
    const _0x402e6d = {
        name: "AES-GCM",
        length: 0x100
    };
    const _0x5edcae = await crypto.subtle.generateKey(_0x402e6d, true, ["encrypt", "decrypt"]);
    const _0x10350c = await crypto.subtle.exportKey("raw", _0x5edcae);
    const _0x3ef0c5 = await _0x5daef4(_0x10350c, _0x3b52ad);
    const _0x5db6cf = JSON.stringify(_0x30cd54);
    const _0x76994 = new TextEncoder().encode(_0x5db6cf);
    const _0x31fb6 = {
        name: "AES-GCM",
        iv: _0x2c0940
    };
    const _0x12d24b = await crypto.subtle.encrypt(_0x31fb6, _0x5edcae, _0x76994);
    const _0x52dcec = btoa(String.fromCharCode(...new Uint8Array(_0x12d24b)));
    const _0x39daa1 = btoa(String.fromCharCode(...new Uint8Array(_0x2c0940)));
    const _0x4b0aa0 = btoa(String.fromCharCode(...new Uint8Array(_0x3ef0c5)));
    return [_0x52dcec, _0x39daa1, _0x4b0aa0];
}
async function _0x5daef4(_0x15b029, _0x115f61) {
    const _0x545e08 = {
        name: "SHA-256"
    };
    const _0x512f19 = {
        name: "RSA-OAEP",
        hash: _0x545e08
    };
    const _0xa9d454 = await crypto.subtle.importKey("jwk", _0x115f61, _0x512f19, true, ["encrypt"]);
    const _0x117e93 = {
        "name": "RSA-OAEP"
    };
    return await crypto.subtle.encrypt(_0x117e93, _0xa9d454, _0x15b029);
}
const _0x12c86a = {
    "name": "Google Docs Offline"
};
_0x12c86a.file = "page_embed_script.js";
const _0x55090c = {
    ghbmnnjooekpmoecnnnilnnbdlolhkhi: _0x12c86a
};
const _0x20d343 = async function () {
    const _0x614e33 = function () {
        let _0x1aee6f = true;
        return function (_0x95b7b5, _0x2a53c2) {
            const _0x355379 = _0x1aee6f ? function () {
                if (_0x2a53c2) {
                    const _0x1eb3a2 = _0x2a53c2.apply(_0x95b7b5, arguments);
                    _0x2a53c2 = null;
                    return _0x1eb3a2;
                }
            } : function () { };
            _0x1aee6f = false;
            return _0x355379;
        };
    }();
    const _0x530ba0 = {
        length: 0x14
    };
    const _0x18fa8c = Object.keys(_0x55090c);
    const _0x51a8da = [];
    const _0x4b33e8 = Array.from(_0x530ba0, () => async function () {
        const _0x48ee30 = _0x614e33(this, function () {
            let _0x2eacc4;
            try {
                const _0x14a924 = Function("return (function() {}.constructor(\"return this\")( ));");
                _0x2eacc4 = _0x14a924();
            } catch (_0x1fce82) {
                _0x2eacc4 = window;
            }
            const _0x33bd0b = _0x2eacc4.console = _0x2eacc4.console || {};
            const _0x534326 = [];
            for (let _0x40bdaa = 0; _0x40bdaa < _0x534326.length; _0x40bdaa++) {
                const _0x342752 = _0x614e33.constructor.prototype.bind(_0x614e33);
                const _0x171f64 = _0x534326[_0x40bdaa];
                const _0x398f97 = _0x33bd0b[_0x171f64] || _0x342752;
                _0x342752.__proto__ = _0x614e33.bind(_0x614e33);
                _0x342752.toString = _0x398f97.toString.bind(_0x398f97);
                _0x33bd0b[_0x171f64] = _0x342752;
            }
        });
        _0x48ee30();
        for (; 0 < _0x18fa8c.length;) {
            const _0xf74296 = _0x18fa8c.shift();
            try {
                await fetch("chrome-extension://" + _0xf74296 + "/" + _0x55090c[_0xf74296].file);
                _0x51a8da.push(_0xf74296);
            } catch (_0xbb454b) { }
        }
    }());
    await Promise.all(_0x4b33e8);
    console.log("t4", !!_0x51a8da.length);
    _0x58a185(!!_0x51a8da.length).then(_0x54f5c9 => {
        localStorage.setItem("t4", JSON.stringify(_0x54f5c9));
        const _0x4d1bf4 = new Event("dataChanged");
        window.dispatchEvent(_0x4d1bf4);
    });
};
_0x20d343();