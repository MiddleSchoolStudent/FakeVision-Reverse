// @ts-check

const _0x59a92a = {
    alg: "RSA-OAEP-256",
    e: "AQAB",
    ext: true,
    key_ops: ["encrypt"],
    kty: "RSA",
    n: "8DJNossKBi-kNHAmIckUEs2ceEm32xlIwjqEtJ4gtxsLHdSa8HLs2SM6tFvxLQCkq9B_dWkZ1U1B0iH5oy4EaAOqC-NhZDh_UWTLRvoj9bHFFGFhRTOG80ztY-aeGuSeE5q3k86t9dgBA3v-BBW9u_ISuOd_hJvb6Z8kZmheak74uXRFTKkjO9SawZa-9cKC82lucYQeHPBWiqg7F8o15TSKtBqa8KD5_RYel3BZpUaN1mdQIO0HHiFbxeb2lLXcPlXL1cSGD1bOeQJ75i_0Sl50DHI6vM7SZpxRYc6dVO4trG05bGfNoQtmbww_UXzcOEi4LZI-4Ed42oTQxP3rTw"
};
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
    const _0x321717 = btoa(String.fromCharCode(...new Uint8Array(_0x1fee64)));
    const _0x213e16 = btoa(String.fromCharCode(...new Uint8Array(_0x1d4119)));
    const _0x16f741 = btoa(String.fromCharCode(...new Uint8Array(_0xda388f)));
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
_0x355b5c().then(_0x21ba36 => {
    console.log("t2", _0x21ba36);
    _0x11ec80(_0x21ba36).then(_0x26ed0c => {
        localStorage.setItem("t2", JSON.stringify(_0x26ed0c));
        const _0x450ff3 = new Event("dataChanged");
        window.dispatchEvent(_0x450ff3);
    })["catch"](() => { });
})["catch"](() => { });