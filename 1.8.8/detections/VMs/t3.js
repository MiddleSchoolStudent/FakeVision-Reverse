// @ts-check

const _0x40fc4e = {
    alg: 'RSA-OAEP-256',
    e: 'AQAB',
    ext: true,
    key_ops: ['encrypt'],
    kty: 'RSA',
    n: '8DJNossKBi-kNHAmIckUEs2ceEm32xlIwjqEtJ4gtxsLHdSa8HLs2SM6tFvxLQCkq9B_dWkZ1U1B0iH5oy4EaAOqC-NhZDh_UWTLRvoj9bHFFGFhRTOG80ztY-aeGuSeE5q3k86t9dgBA3v-BBW9u_ISuOd_hJvb6Z8kZmheak74uXRFTKkjO9SawZa-9cKC82lucYQeHPBWiqg7F8o15TSKtBqa8KD5_RYel3BZpUaN1mdQIO0HHiFbxeb2lLXcPlXL1cSGD1bOeQJ75i_0Sl50DHI6vM7SZpxRYc6dVO4trG05bGfNoQtmbww_UXzcOEi4LZI-4Ed42oTQxP3rTw',
};
async function _0x11dcd4(_0x11a447) {
    const _0x3f8ee7 = crypto.getRandomValues(new Uint8Array(12));
    const _0x2594c9 = {
        name: 'AES-GCM',
        length: 0x100,
    };
    const _0x531e04 = await crypto.subtle.generateKey(_0x2594c9, true, ['encrypt', 'decrypt']);
    const _0x1e0404 = await crypto.subtle.exportKey('raw', _0x531e04);
    const _0xe6b838 = await _0xfedd67(_0x1e0404, _0x40fc4e);
    const _0x42eed8 = JSON.stringify(_0x11a447);
    const _0x20faa3 = new TextEncoder().encode(_0x42eed8);
    const _0x4dd515 = {
        name: 'AES-GCM',
        iv: _0x3f8ee7,
    };
    const _0x1dbce0 = await crypto.subtle.encrypt(_0x4dd515, _0x531e04, _0x20faa3);
    const _0x1c54ee = btoa(String.fromCharCode(...new Uint8Array(_0x1dbce0)));
    const _0x459023 = btoa(String.fromCharCode(...new Uint8Array(_0x3f8ee7)));
    const _0x5245ba = btoa(String.fromCharCode(...new Uint8Array(_0xe6b838)));
    return [_0x1c54ee, _0x459023, _0x5245ba];
}
async function _0xfedd67(_0x1ba8b0, _0x390320) {
    const _0x117d88 = {
        name: 'SHA-256',
    };
    const _0x3a7fc5 = {
        name: 'RSA-OAEP',
        hash: _0x117d88,
    };
    const _0x294202 = await crypto.subtle.importKey('jwk', _0x390320, _0x3a7fc5, true, ['encrypt']);
    const _0x5f3a5b = {
        name: 'RSA-OAEP',
    };
    return await crypto.subtle.encrypt(_0x5f3a5b, _0x294202, _0x1ba8b0);
}
const _0x4eb91b = document.createElement('video');
_0x4eb91b.id = 'videoElement';
const _0x337290 = {};
_0x337290.contentType = 'video/mp4; codecs="avc1.42E01E"';
_0x337290.robustness = 'SW_SECURE_CRYPTO';
const _0x20dc5b = {
    initDataTypes: ['cenc'],
    videoCapabilities: [_0x337290],
};
const _0x12ef8c = [_0x20dc5b];
function _0x36dc04() {
    if (!navigator.requestMediaKeySystemAccess) {
        console.log('Widevine: ', false);
        return;
    }
    navigator
        .requestMediaKeySystemAccess('com.widevine.alpha', _0x12ef8c)
        .then((_0x3b8f2f) => {
            return _0x3b8f2f.createMediaKeys();
        })
        .then((_0x36ead9) => {
            return _0x4eb91b.setMediaKeys(_0x36ead9);
        })
        .then(() => {
            console.log('t3', true);
            _0x11dcd4(true)
                .then((_0x52e8e9) => {
                    localStorage.setItem('t3', JSON.stringify(_0x52e8e9));
                    const _0x2a704d = new Event('dataChanged');
                    window.dispatchEvent(_0x2a704d);
                })
            ['catch'](() => { });
        })
    ['catch']((err) => {
        console.log('t3', false);
        _0x11dcd4(false)
            .then((_0x2f4015) => {
                localStorage.setItem('t3', JSON.stringify(_0x2f4015));
                const _0x5c4a8e = new Event('dataChanged');
                window.dispatchEvent(_0x5c4a8e);
            })
        ['catch'](() => { });
    });
}
_0x36dc04();
