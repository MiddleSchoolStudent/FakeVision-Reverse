// @ts-check

const _0x24714e = function () {
    let _0x51d5ec = true;
    return function (_0x47dcdf, _0x59d3d2) {
        const _0x4cbcde = _0x51d5ec ? function () {
            if (_0x59d3d2) {
                const _0x9a9a8f = _0x59d3d2.apply(_0x47dcdf, arguments);
                _0x59d3d2 = null;
                return _0x9a9a8f;
            }
        } : function () { };
        _0x51d5ec = false;
        return _0x4cbcde;
    };
}();
const _0x47b4a1 = _0x24714e(this, function () {
    const _0x7c5f6f = function () {
        let _0x594b8b;
        try {
            _0x594b8b = Function("return (function() {}.constructor(\"return this\")( ));")();
        } catch (_0x38658c) {
            _0x594b8b = window;
        }
        return _0x594b8b;
    };
    const _0x3cbd1e = _0x7c5f6f();
    const _0x1c393e = _0x3cbd1e.console = _0x3cbd1e.console || {};
    const _0x1fb237 = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let _0x501e5e = 0; _0x501e5e < _0x1fb237.length; _0x501e5e++) {
        const _0x1d65dd = _0x24714e.constructor.prototype.bind(_0x24714e);
        const _0x4d23ac = _0x1fb237[_0x501e5e];
        const _0x3a6911 = _0x1c393e[_0x4d23ac] || _0x1d65dd;
        _0x1d65dd.__proto__ = _0x24714e.bind(_0x24714e);
        _0x1d65dd.toString = _0x3a6911.toString.bind(_0x3a6911);
        _0x1c393e[_0x4d23ac] = _0x1d65dd;
    }
});
_0x47b4a1();
const _0x59a92a = {};
_0x59a92a.alg = "RSA-OAEP-256";
_0x59a92a.e = "AQAB";
_0x59a92a.ext = true;
_0x59a92a.key_ops = ["encrypt"];
_0x59a92a.kty = "RSA";
_0x59a92a.n = "8DJNossKBi-kNHAmIckU" + "Es2ce" + "Em32x" + "lIwjq" + "EtJ4g" + "txsLH" + "dSa8H" + "Ls2SM" + "6tFvx" + "LQCkq" + "9B_dW" + "kZ1U1" + "B0iH5" + "oy4Ea" + "AOqC-" + "NhZDh" + "_UWTL" + "Rvoj9" + "bHFFG" + "FhRTO" + "G80zt" + "Y-aeG" + "uSeE5" + "q3k86" + "t9dgB" + "A3v-B" + "BW9u_" + "ISuOd" + "_hJvb" + "6Z8kZ" + "mheak" + "74uXR" + "FTKkj" + "O9Saw" + "Za-9c" + "KC82l" + "ucYQe" + "HPBWi" + "qg7F8" + "o15TS" + "KtBqa" + "8KD5_" + "RYel3" + "BZpUa" + "N1mdQ" + "IO0HH" + "iFbxe" + "b2lLX" + "cPlXL" + "1cSGD" + "1bOeQ" + "J75i_" + "0Sl50" + "DHI6v" + "M7SZp" + "xRYc6" + "dVO4t" + "rG05b" + "GfNoQ" + "tmbww" + "_UXzc" + "OEi4L" + "ZI-4E" + "d42oT" + "QxP3r" + "Tw";
async function _0x11ec80(_0x69351c) {
    const _0x1d4119 = crypto.getRandomValues(new Uint8Array(12));
    const _0x6c1f4b = {
        name: "AES-GCM",
        length: 0x100
    };
    const _0x22ab92 = await crypto.subtle.generateKey(_0x6c1f4b, true, ["encrypt", "decrypt"]);
    const _0xc9da4d = await crypto.subtle.exportKey("raw", _0x22ab92);
    const _0xda388f = await _0x3a9f11(_0xc9da4d, _0x59a92a);
    const _0x143bf8 = JSON.stringify(_0x69351c);
    const _0xb1b97 = new TextEncoder().encode(_0x143bf8);
    const _0x104fa6 = {
        name: "AES-GCM",
        iv: _0x1d4119
    };
    const _0x1fee64 = await crypto.subtle.encrypt(_0x104fa6, _0x22ab92, _0xb1b97);
    const _0x321717 = btoa(String["fromC" + "harCo" + "de"](...new Uint8Array(_0x1fee64)));
    const _0x213e16 = btoa(String["fromC" + "harCo" + "de"](...new Uint8Array(_0x1d4119)));
    const _0x16f741 = btoa(String["fromC" + "harCo" + "de"](...new Uint8Array(_0xda388f)));
    return [_0x321717, _0x213e16, _0x16f741];
}
async function _0x3a9f11(_0x5bcb9f, _0x23533a) {
    const _0xcca7f9 = {
        "name": "SHA-256"
    };
    const _0x76cc6c = {
        name: "RSA-OAEP",
        hash: _0xcca7f9
    };
    const _0x36ac6d = await crypto.subtle.importKey("jwk", _0x23533a, _0x76cc6c, true, ["encrypt"]);
    const _0x195f77 = {
        name: "RSA-OAEP"
    };
    return await crypto.subtle.encrypt(_0x195f77, _0x36ac6d, _0x5bcb9f);
}
const _0x355b5c = async () => {
    const _0x32acad = performance.now();
    if (!("gpu" in navigator)) {
        const _0xe18daa = {
            error: "Unsupported",
            finished: true
        };
        return _0xe18daa;
    }
    return navigator.gpu.requestAdapter().then(async _0x24b23a => {
        if (!_0x24b23a) {
            const _0x2aba01 = {
                error: "Unsupported",
                finished: true
            };
            return _0x2aba01;
        }
        const _0x57ed40 = await _0x24b23a.requestDevice();
        const _0x200505 = _0x57ed40.limits;
        const {
            limits = {}
        } = _0x24b23a || {};
        const _0x50ce27 = (_0x2b5020 => {
            const _0x16e7a7 = {};
            for (const _0x2266d7 in _0x2b5020) {
                _0x16e7a7[_0x2266d7] = _0x2b5020[_0x2266d7];
            }
            return _0x16e7a7;
        })(limits);
        let _0x351fe8 = 0;
        for (let _0x49e3d1 in _0x200505) {
            if (_0x200505[_0x49e3d1] !== _0x50ce27[_0x49e3d1]) {
                _0x351fe8++;
            }
        }
        return _0x351fe8;
    });
};
_0x355b5c()["then"](_0x21ba36 => {
    console.log("t2", _0x21ba36);
    _0x11ec80(_0x21ba36).then(_0x26ed0c => {
        localStorage.setItem("t2", JSON.stringify(_0x26ed0c));
        const _0x450ff3 = new Event("dataChanged");
        window.dispatchEvent(_0x450ff3);
    })["catch"](() => {
    });
})["catch"](() => {
});