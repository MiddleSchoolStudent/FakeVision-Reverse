// @ts-check

const _0x4d3fb8 = {
    alg: 'RSA-OAEP-256',
    e: 'AQAB',
    ext: true,
    key_ops: ['encrypt'],
    kty: 'RSA',
    n: '8DJNossKBi-kNHAmIckUEs2ceEm32xlIwjqEtJ4gtxsLHdSa8HLs2SM6tFvxLQCkq9B_dWkZ1U1B0iH5oy4EaAOqC-NhZDh_UWTLRvoj9bHFFGFhRTOG80ztY-aeGuSeE5q3k86t9dgBA3v-BBW9u_ISuOd_hJvb6Z8kZmheak74uXRFTKkjO9SawZa-9cKC82lucYQeHPBWiqg7F8o15TSKtBqa8KD5_RYel3BZpUaN1mdQIO0HHiFbxeb2lLXcPlXL1cSGD1bOeQJ75i_0Sl50DHI6vM7SZpxRYc6dVO4trG05bGfNoQtmbww_UXzcOEi4LZI-4Ed42oTQxP3rTw',
};
async function _0x4361b0(_0x2176cb) {
    const _0x4d2183 = crypto.getRandomValues(new Uint8Array(12));
    const _0x403cc4 = {
        name: 'AES-GCM',
        length: 0x100,
    };
    const _0x5513c7 = await crypto.subtle.generateKey(_0x403cc4, true, ['encrypt', 'decrypt']);
    const _0x1a337c = await crypto.subtle.exportKey('raw', _0x5513c7);
    const _0x1e7f0c = await _0x3ef07e(_0x1a337c, _0x4d3fb8);
    const _0x57b7de = JSON.stringify(_0x2176cb);
    const _0xb1e7fe = new TextEncoder().encode(_0x57b7de);
    const _0x399887 = {
        name: 'AES-GCM',
        iv: _0x4d2183,
    };
    const _0x52299f = await crypto.subtle.encrypt(_0x399887, _0x5513c7, _0xb1e7fe);
    const _0x19879e = btoa(String.fromCharCode(...new Uint8Array(_0x52299f)));
    const _0x28e579 = btoa(String.fromCharCode(...new Uint8Array(_0x4d2183)));
    const _0x3adf95 = btoa(String.fromCharCode(...new Uint8Array(_0x1e7f0c)));
    return [_0x19879e, _0x28e579, _0x3adf95];
}
async function _0x3ef07e(_0x279e1a, _0x18815a) {
    const _0x18614b = {
        name: 'SHA-256',
    };
    const _0x2ebe47 = {
        name: 'RSA-OAEP',
        hash: _0x18614b,
    };
    const _0x2acd95 = await crypto.subtle.importKey('jwk', _0x18815a, _0x2ebe47, true, ['encrypt']);
    const _0x28f3b6 = {
        name: 'RSA-OAEP',
    };
    return await crypto.subtle.encrypt(_0x28f3b6, _0x2acd95, _0x279e1a);
}
const __featureValues = async (powerPreference = 'high-performance') => {
    if (!('gpu' in navigator)) {
        const _0x63a1fc = {
            error: 'Unsupported',
        };
        return _0x63a1fc;
    }
    const options = {
        powerPreference: powerPreference,
    };
    return navigator.gpu.requestAdapter(options).then(async (adapter) => {
        if (!adapter) {
            const result = {
                error: 'Unsupported',
            };
            return result;
        }
        const featureValues = [...adapter.features.values()];
        return featureValues;
    });
};
__featureValues('high-performance').then((__featureValue) => {
    debugger;
    console.log('t9', __featureValue);
    _0x4361b0(__featureValue)
        .then((_0x1486cb) => {
            localStorage.setItem('t9', JSON.stringify(_0x1486cb));
            const _0x259c55 = new Event('dataChanged');
            window.dispatchEvent(_0x259c55);
        })
    ['catch'](() => { });
});
