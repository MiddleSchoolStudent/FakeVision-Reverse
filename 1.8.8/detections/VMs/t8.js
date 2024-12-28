// @ts-check

const _0x2e3322 = {
    alg: 'RSA-OAEP-256',
    e: 'AQAB',
    ext: true,
    key_ops: ['encrypt'],
    kty: 'RSA',
    n: '8DJNossKBi-kNHAmIckUEs2ceEm32xlIwjqEtJ4gtxsLHdSa8HLs2SM6tFvxLQCkq9B_dWkZ1U1B0iH5oy4EaAOqC-NhZDh_UWTLRvoj9bHFFGFhRTOG80ztY-aeGuSeE5q3k86t9dgBA3v-BBW9u_ISuOd_hJvb6Z8kZmheak74uXRFTKkjO9SawZa-9cKC82lucYQeHPBWiqg7F8o15TSKtBqa8KD5_RYel3BZpUaN1mdQIO0HHiFbxeb2lLXcPlXL1cSGD1bOeQJ75i_0Sl50DHI6vM7SZpxRYc6dVO4trG05bGfNoQtmbww_UXzcOEi4LZI-4Ed42oTQxP3rTw',
}
async function _0x36fa49(_0x98d040) {
    const _0x447d35 = crypto.getRandomValues(new Uint8Array(12))
    const _0x4f819d = {
        name: 'AES-GCM',
        length: 0x100,
    }
    const _0x2c4203 = await crypto.subtle.generateKey(_0x4f819d, true, ['encrypt', 'decrypt'])
    const _0x42083c = await crypto.subtle.exportKey('raw', _0x2c4203)
    const _0xebd815 = await _0x34f1c8(_0x42083c, _0x2e3322)
    const _0x222c54 = JSON.stringify(_0x98d040)
    const _0x162a94 = new TextEncoder().encode(_0x222c54)
    const _0x53d363 = {
        name: 'AES-GCM',
        iv: _0x447d35,
    }
    const _0x53ae1c = await crypto.subtle.encrypt(_0x53d363, _0x2c4203, _0x162a94)
    const _0x4efb0c = btoa(String.fromCharCode(...new Uint8Array(_0x53ae1c)))
    const _0x599aab = btoa(String.fromCharCode(...new Uint8Array(_0x447d35)))
    const _0x1af336 = btoa(String.fromCharCode(...new Uint8Array(_0xebd815)))
    return [_0x4efb0c, _0x599aab, _0x1af336]
}
async function _0x34f1c8(_0x43ca6f, _0x261bad) {
    const _0x5be6e8 = {
        name: 'SHA-256',
    }
    const _0x184595 = {
        name: 'RSA-OAEP',
        hash: _0x5be6e8,
    }
    const _0xc84dd9 = await crypto.subtle.importKey('jwk', _0x261bad, _0x184595, true, ['encrypt'])
    const _0x338572 = {
        name: 'RSA-OAEP',
    }
    return await crypto.subtle.encrypt(_0x338572, _0xc84dd9, _0x43ca6f)
}
const _0x52b70b = async () => {
    const __inputElem = document.createElement('input')
    __inputElem.type = 'text'
    __inputElem.id = 'sd1'
    __inputElem.value = 'bla'
    __inputElem.style.visibility = 'hidden'
    document.body.appendChild(__inputElem)
    const __inputElemRef = document.querySelector('#sd1')
    const __selectionDirection = __inputElemRef.selectionDirection
    const __platform = __selectionDirection === 'none' ? 0 : 1
    let __clientHints
    if (!navigator.userAgentData || !navigator.userAgentData.getHighEntropyValues) {
        __clientHints = {}
    } else {
        const _0x4613dd = await navigator.userAgentData.getHighEntropyValues([
            'platform',
            'platformVersion',
            'architecture',
            'bitness',
            'model',
            'uaFullVersion',
            'fullVersionList',
            'formFactor',
            'wow64',
        ])
        const { mobile: _0x4165ae } = navigator.userAgentData || {}
        if (!_0x4613dd.mobile) {
            _0x4613dd.mobile = _0x4165ae
        }
        __clientHints = Object.keys(_0x4613dd)
            .sort()
            .reduce((_0x40effe, _0xe4f32) => {
                _0x40effe[_0xe4f32] = _0x4613dd[_0xe4f32]
                return _0x40effe
            }, {})
    }
    const result = {
        platform: __platform,
    }
    result.clientHints = __clientHints
    console.log('t8', result)
    const _0x3750d7 = {
        platform: __platform,
        clientHints: __clientHints,
    }
    _0x36fa49(_0x3750d7)
        .then((_0xab8fd6) => {
            localStorage.setItem('t8', JSON.stringify(_0xab8fd6))
            const _0x32b6e8 = new Event('dataChanged')
            window.dispatchEvent(_0x32b6e8)
        })
    ['catch'](() => { })
}
_0x52b70b()
