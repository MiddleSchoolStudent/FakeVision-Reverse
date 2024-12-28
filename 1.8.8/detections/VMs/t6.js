// @ts-check

const _0x506c4e = {
    alg: 'RSA-OAEP-256',
    e: 'AQAB',
    ext: true,
    key_ops: ['encrypt'],
    kty: 'RSA',
    n: '8DJNossKBi-kNHAmIckUEs2ceEm32xlIwjqEtJ4gtxsLHdSa8HLs2SM6tFvxLQCkq9B_dWkZ1U1B0iH5oy4EaAOqC-NhZDh_UWTLRvoj9bHFFGFhRTOG80ztY-aeGuSeE5q3k86t9dgBA3v-BBW9u_ISuOd_hJvb6Z8kZmheak74uXRFTKkjO9SawZa-9cKC82lucYQeHPBWiqg7F8o15TSKtBqa8KD5_RYel3BZpUaN1mdQIO0HHiFbxeb2lLXcPlXL1cSGD1bOeQJ75i_0Sl50DHI6vM7SZpxRYc6dVO4trG05bGfNoQtmbww_UXzcOEi4LZI-4Ed42oTQxP3rTw',
};
async function _0x5844c6(_0x3c96e6) {
    const _0x1ac7bf = crypto.getRandomValues(new Uint8Array(12));
    const _0x4b3e1d = {
        name: 'AES-GCM',
    };
    _0x4b3e1d.length = 0x100;
    const _0xe80a48 = await crypto.subtle.generateKey(_0x4b3e1d, true, ['encrypt', 'decrypt']);
    const _0x2f1e22 = await crypto.subtle.exportKey('raw', _0xe80a48);
    const _0x6176b4 = await _0x5229af(_0x2f1e22, _0x506c4e);
    const _0x39ce3f = JSON.stringify(_0x3c96e6);
    const _0x4c4fad = new TextEncoder().encode(_0x39ce3f);
    const _0x2bdd13 = {
        name: 'AES-GCM',
        iv: _0x1ac7bf,
    };
    const _0x2a446b = await crypto.subtle.encrypt(_0x2bdd13, _0xe80a48, _0x4c4fad);
    const _0x10a921 = btoa(String.fromCharCode(...new Uint8Array(_0x2a446b)));
    const _0x5d8165 = btoa(String.fromCharCode(...new Uint8Array(_0x1ac7bf)));
    const _0x10c3ce = btoa(String.fromCharCode(...new Uint8Array(_0x6176b4)));
    return [_0x10a921, _0x5d8165, _0x10c3ce];
}
async function _0x5229af(_0x3d7c37, _0x5d2479) {
    const _0x532568 = {
        name: 'SHA-256',
    };
    const _0x180aef = {
        name: 'RSA-OAEP',
        hash: _0x532568,
    };
    const _0x151f5b = await crypto.subtle.importKey('jwk', _0x5d2479, _0x180aef, true, ['encrypt']);
    const _0x3b98cb = {
        name: 'RSA-OAEP',
    };
    return await crypto.subtle.encrypt(_0x3b98cb, _0x151f5b, _0x3d7c37);
}
const __classTypes = [Navigator, CSSPageRule, GamepadHapticActuator, HTMLAnchorElement, GPUAdapter, ArrayBuffer];
const result = {};
__classTypes.forEach((__classType) => {
    const __className = __classType?.['name'] || __classType?.['name']?.['toString']() || 'mockname';
    const __classPrototype = __classType?.['prototype'] || __classType;
    try {
        const __classPropInfo = Object.getOwnPropertyNames(__classPrototype).map((propertyName) => {
            try {
                const __descriptor = Object.getOwnPropertyDescriptor(__classPrototype, propertyName);
                const __classProperty = __classPrototype?.[propertyName];
                const __classInfo = {
                    methodName: propertyName,
                    type: typeof __classProperty,
                    isFunction: typeof __classProperty === 'function',
                    enumerable: __descriptor ? __descriptor.enumerable : false,
                    configurable: __descriptor ? __descriptor.configurable : false,
                    writable: __descriptor ? __descriptor.writable : false,
                    hasGetter: __descriptor && typeof __descriptor.get === 'function',
                    hasSetter: __descriptor && typeof __descriptor.set === 'function',
                    symbols: Object.getOwnPropertySymbols(__classPrototype),
                    protoToString: Object.prototype.toString.call(__classPrototype),
                    prototypeChain: [],
                };
                let __classPrototype1 = __classPrototype;
                while ((__classPrototype1 = Object.getPrototypeOf(__classPrototype1))) {
                    __classInfo.prototypeChain.push(
                        __classPrototype1.constructor ? __classPrototype1.constructor.name : 'Anonymous'
                    );
                }
                if (__classInfo.isFunction) {
                    __classInfo.toString = __classProperty.toString ? __classProperty.toString() : 'No toString method';
                    __classInfo.valueOf = __classProperty.valueOf ? __classProperty.valueOf() : 'No valueOf method';
                    __classInfo.arguments = __classInfo.toString.match(/\(.*?\)/)[0];
                } else {
                    try {
                        __classInfo.value = __classProperty;
                    } catch (_0x284aaf) {
                        __classInfo.value = 'Unable to retrieve value: ' + _0x284aaf.message;
                    }
                }
                if (__classInfo.hasGetter) {
                    try {
                        let __obj = new __classType();
                        __classInfo.getterValue = __descriptor.get.call(__obj);
                    } catch (err) {
                        __classInfo.getterValue = 'Getter invocation failed: ' + err.message;
                    }
                }
                return __classInfo;
            } catch (err) {
                const result = {
                    methodName: propertyName,
                    error: err.message,
                };
                return result;
            }
        });
        result[__className] = __classPropInfo;
    } catch (err) {
        result[__className] = err.message;
    }
});
console.log('t6', result);
_0x5844c6(result)
    .then((_0x4a161a) => {
        debugger;
        localStorage.setItem('t6', JSON.stringify(_0x4a161a));
        const _0x1055be = new Event('dataChanged');
        window.dispatchEvent(_0x1055be);
    })
['catch'](() => { });
