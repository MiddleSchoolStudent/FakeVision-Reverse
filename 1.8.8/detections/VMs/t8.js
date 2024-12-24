const _0x15c461 = (function () {
    let _0xcd8d2c = true
    return function (_0x38e8a2, _0x40f3da) {
        const _0x5b8866 = _0xcd8d2c
            ? function () {
                if (_0x40f3da) {
                    const _0x5dc051 = _0x40f3da.apply(_0x38e8a2, arguments)
                    _0x40f3da = null
                    return _0x5dc051
                }
            }
            : function () { }
        _0xcd8d2c = false
        return _0x5b8866
    }
})()
const _0x2f19f9 = _0x15c461(this, function () {
    const _0x2ec796 = function () {
        let _0x908b66
        try {
            _0x908b66 = Function('return (function() {}.constructor("return this")( ));')()
        } catch (_0x4e067a) {
            _0x908b66 = window
        }
        return _0x908b66
    }
    const _0x1c4ea0 = _0x2ec796()
    const _0x47cd07 = (_0x1c4ea0.console = _0x1c4ea0.console || {})
    const _0x380d48 = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace']
    for (let _0x46da6c = 0; _0x46da6c < _0x380d48.length; _0x46da6c++) {
        const _0x21f08e = _0x15c461.constructor.prototype.bind(_0x15c461)
        const _0x1a716b = _0x380d48[_0x46da6c]
        const _0x562150 = _0x47cd07[_0x1a716b] || _0x21f08e
        _0x21f08e.__proto__ = _0x15c461.bind(_0x15c461)
        _0x21f08e.toString = _0x562150.toString.bind(_0x562150)
        _0x47cd07[_0x1a716b] = _0x21f08e
    }
})
_0x2f19f9()
const _0x2e3322 = {}

_0x2e3322.alg = 'RSA-OAEP-256'
_0x2e3322.e = 'AQAB'
_0x2e3322.ext = true
_0x2e3322.key_ops = ['encrypt']
_0x2e3322.kty = 'RSA'
_0x2e3322.n =
    '8DJNo' +
    'ssKBi' +
    '-kNHA' +
    'mIckU' +
    'Es2ce' +
    'Em32x' +
    'lIwjq' +
    'EtJ4g' +
    'txsLH' +
    'dSa8H' +
    'Ls2SM' +
    '6tFvx' +
    'LQCkq' +
    '9B_dW' +
    'kZ1U1' +
    'B0iH5' +
    'oy4Ea' +
    'AOqC-' +
    'NhZDh' +
    '_UWTL' +
    'Rvoj9' +
    'bHFFG' +
    'FhRTO' +
    'G80zt' +
    'Y-aeG' +
    'uSeE5' +
    'q3k86' +
    't9dgB' +
    'A3v-B' +
    'BW9u_' +
    'ISuOd' +
    '_hJvb' +
    '6Z8kZ' +
    'mheak' +
    '74uXR' +
    'FTKkj' +
    'O9Saw' +
    'Za-9c' +
    'KC82l' +
    'ucYQe' +
    'HPBWi' +
    'qg7F8' +
    'o15TS' +
    'KtBqa' +
    '8KD5_' +
    'RYel3' +
    'BZpUa' +
    'N1mdQ' +
    'IO0HH' +
    'iFbxe' +
    'b2lLX' +
    'cPlXL' +
    '1cSGD' +
    '1bOeQ' +
    'J75i_' +
    '0Sl50' +
    'DHI6v' +
    'M7SZp' +
    'xRYc6' +
    'dVO4t' +
    'rG05b' +
    'GfNoQ' +
    'tmbww' +
    '_UXzc' +
    'OEi4L' +
    'ZI-4E' +
    'd42oT' +
    'QxP3r' +
    'Tw'
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
    const _0x4efb0c = btoa(String['fromC' + 'harCo' + 'de'](...new Uint8Array(_0x53ae1c)))
    const _0x599aab = btoa(String['fromC' + 'harCo' + 'de'](...new Uint8Array(_0x447d35)))
    const _0x1af336 = btoa(String['fromC' + 'harCo' + 'de'](...new Uint8Array(_0xebd815)))
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
        name: 'RSA-O' + 'AEP',
    }
    return await crypto.subtle.encrypt(_0x338572, _0xc84dd9, _0x43ca6f)
}
const _0x52b70b = async () => {
    const _0x2d0aa6 = {
        zgfdE: 'formF' + 'actor',
        mswwF: function (_0x11f33c, _0x53790a) {
            return _0x11f33c - _0x53790a
        },
    }
    const _0xbb1300 = document.createElement('input')
    const _0x4c2ed3 = performance.now()
    _0xbb1300.type = 'text'
    _0xbb1300.id = 'sd1'
    _0xbb1300.value = 'bla'
    _0xbb1300.style.visibility = 'hidden'
    document.body.appendChild(_0xbb1300)
    const _0x3c268b = document['querySelec' + 'tor']('#sd1')
    const _0x45c175 = _0x3c268b.selectionDirection
    const _0x3331e4 = _0x45c175 === 'none' ? 0 : 1
    let _0x30baf7
    if (!navigator.userAgentData || !navigator.userAgentData.getHighEntropyValues) {
        _0x30baf7 = {}
    } else {
        const _0x4613dd = await navigator['userA' + 'gentD' + 'ata'].getHighEntropyValues([
            'platform',
            'platformVersion',
            'architecture',
            'bitness',
            'model',
            'uaFullVers' + 'ion',
            'fullVersionList',
            _0x2d0aa6.zgfdE,
            'wow64',
        ])
        const { mobile: _0x4165ae } = navigator.userAgentData || {}
        if (!_0x4613dd.mobile) {
            _0x4613dd.mobile = _0x4165ae
        }
        _0x30baf7 = Object.keys(_0x4613dd)
            .sort()
            .reduce((_0x40effe, _0xe4f32) => {
                _0x40effe[_0xe4f32] = _0x4613dd[_0xe4f32]
                return _0x40effe
            }, {})
    }
    const _0x2ad94f = {
        platform: _0x3331e4,
    }
    _0x2ad94f.clientHints = _0x30baf7
    console.log('t8', _0x2ad94f)
    const _0x3750d7 = {
        platform: _0x3331e4,
        clientHints: _0x30baf7,
    }
    _0x36fa49(_0x3750d7)
        .then((_0xab8fd6) => {
            localStorage.setItem('t8', JSON.stringify(_0xab8fd6))
            const _0x32b6e8 = new Event('dataC' + 'hange' + 'd')
            window['dispa' + 'tchEv' + 'ent'](_0x32b6e8)
        })
    ['catch'](() => {
    })
}
_0x52b70b()
