// @ts-check

const _0x36daa1 = {
    alg: 'RSA-OAEP-256',
    e: 'AQAB',
    ext: true,
    key_ops: ['encrypt'],
    kty: 'RSA',
    n: '8DJNossKBi-kNHAmIckUEs2ceEm32xlIwjqEtJ4gtxsLHdSa8HLs2SM6tFvxLQCkq9B_dWkZ1U1B0iH5oy4EaAOqC-NhZDh_UWTLRvoj9bHFFGFhRTOG80ztY-aeGuSeE5q3k86t9dgBA3v-BBW9u_ISuOd_hJvb6Z8kZmheak74uXRFTKkjO9SawZa-9cKC82lucYQeHPBWiqg7F8o15TSKtBqa8KD5_RYel3BZpUaN1mdQIO0HHiFbxeb2lLXcPlXL1cSGD1bOeQJ75i_0Sl50DHI6vM7SZpxRYc6dVO4trG05bGfNoQtmbww_UXzcOEi4LZI-4Ed42oTQxP3rTw',
}
async function _0x4dc979(_0x320e1f) {
    const _0x51af79 = crypto.getRandomValues(new Uint8Array(12))
    const _0x43ecbe = {
        name: 'AES-GCM',
        length: 0x100,
    }
    const _0x248f16 = await crypto.subtle.generateKey(_0x43ecbe, true, ['encrypt', 'decrypt'])
    const _0x28a5d8 = await crypto.subtle.exportKey('raw', _0x248f16)
    const _0x2ac056 = await _0x3a0d9f(_0x28a5d8, _0x36daa1)
    const _0xb15ea2 = JSON.stringify(_0x320e1f)
    const _0x3157cb = new TextEncoder().encode(_0xb15ea2)
    const _0x2201b2 = {
        name: 'AES-GCM',
        iv: _0x51af79,
    }
    const _0x530cff = await crypto.subtle.encrypt(_0x2201b2, _0x248f16, _0x3157cb)
    const _0x49cdde = btoa(String.fromCharCode(...new Uint8Array(_0x530cff)))
    const _0x18f45b = btoa(String.fromCharCode(...new Uint8Array(_0x51af79)))
    const _0x4db5ae = btoa(String.fromCharCode(...new Uint8Array(_0x2ac056)))
    return [_0x49cdde, _0x18f45b, _0x4db5ae]
}
async function _0x3a0d9f(_0x4cd735, _0x2a3f96) {
    const _0x28fa55 = {
        name: 'SHA-256',
    }
    const _0x15ec17 = {
        name: 'RSA-OAEP',
    }
    _0x15ec17.hash = _0x28fa55
    const _0x2358ee = await crypto.subtle.importKey('jwk', _0x2a3f96, _0x15ec17, true, ['encrypt'])
    const _0x7b1865 = {
        name: 'RSA-OAEP',
    }
    return await crypto.subtle.encrypt(_0x7b1865, _0x2358ee, _0x4cd735)
}
const __canvas = document.createElement('canvas')
if (typeof __canvas.getContext !== 'function') {
}
const __webglContext = __canvas.getContext('webgl')
if (__webglContext === null) {
}
if (typeof __webglContext.getParameter !== 'function') {
}
const __gpuVendor = __webglContext.getParameter(__webglContext.VENDOR)
const __gpuRenderer = __webglContext.getParameter(__webglContext.RENDERER)
const __WEBGL_debug_renderer_info = __webglContext ? __webglContext.getExtension('WEBGL_debug_renderer_info') : null
let __unmaskedRenderer = null
if (__WEBGL_debug_renderer_info) {
    __unmaskedRenderer = __webglContext.getParameter(__WEBGL_debug_renderer_info.UNMASKED_RENDERER_WEBGL)
}
const result = {
    vendor: __gpuVendor,
    renderer: __gpuRenderer,
    unmaskedRenderer: __unmaskedRenderer,
}
_0x4dc979(result)
    .then((_0x4d3de6) => {
        localStorage.setItem('t10', JSON.stringify(_0x4d3de6))
        const _0x5f32d8 = new Event('dataChanged')
        window.dispatchEvent(_0x5f32d8)
    })
['catch'](() => { })
