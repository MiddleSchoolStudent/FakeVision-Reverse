// @ts-check

// results: "true&true"

const _0x581939 = function () {
    let _0x5db87f = true;
    return function (_0x292aac, _0x3ef0e9) {
        const _0x52602e = _0x5db87f ? function () {
            if (_0x3ef0e9) {
                const _0x5493ed = _0x3ef0e9.apply(_0x292aac, arguments);
                _0x3ef0e9 = null;
                return _0x5493ed;
            }
        } : function () { };
        _0x5db87f = false;
        return _0x52602e;
    };
}();
const _0x1ced03 = _0x581939(this, function () {
    let _0x2a3b54;
    try {
        const _0x379bea = Function("return (function() {}.constructor(\"return this\")( ));");
        _0x2a3b54 = _0x379bea();
    } catch (_0x4447be) {
        _0x2a3b54 = window;
    }
    const _0xb8b0a5 = _0x2a3b54.console = _0x2a3b54.console || {};
    const _0x16f163 = [];
    for (let _0x4899e6 = 0; _0x4899e6 < _0x16f163.length; _0x4899e6++) {
        const _0x26ed81 = _0x581939.constructor.prototype.bind(_0x581939);
        const _0x29eabc = _0x16f163[_0x4899e6];
        const _0x53c5ef = _0xb8b0a5[_0x29eabc] || _0x26ed81;
        _0x26ed81.__proto__ = _0x581939.bind(_0x581939);
        _0x26ed81.toString = _0x53c5ef.toString.bind(_0x53c5ef);
        _0xb8b0a5[_0x29eabc] = _0x26ed81;
    }
});
_0x1ced03();
(() => {
    'use strict';

    var _0xf0a29d = {
        0x2c: (_0x4b46f1, _0x11cc79, _0x320202) => {
            _0x320202.a(_0x4b46f1, async (_0x8cfb8b, _0x2a32f5) => {
                const _0x4549ec = {
                    "eJRVZ": "jwk"
                };
                _0x4549ec.lCVqV = function (_0x310e36, _0x4c7986) {
                    return _0x310e36 || _0x4c7986;
                };
                try {
                    var _0x2e2c4b = _0x320202(57);
                    var _0x233cc9 = _0x320202(222);
                    var _0x505fa5 = _0x320202(413);
                    const _0x3caecf = {
                        "alg": "RSA-OAEP-256",
                        e: "AQAB",
                        ext: true,
                        key_ops: ["encrypt"],
                        kty: "RSA",
                        n: "8DJNossKBi-kNHAmIckUEs2ceEm32xlIwjqEtJ4gtxsLHdSa8HLs2SM6tFvxLQCkq9B_dWkZ1U1B0iH5oy4EaAOqC-NhZDh_UWTLRvoj9bHFFGFhRTOG80ztY-aeGuSeE5q3k86t9dgBA3v-BBW9u_ISuOd_hJvb6Z8kZmheak74uXRFTKkjO9SawZa-9cKC82lucYQeHPBWiqg7F8o15TSKtBqa8KD5_RYel3BZpUaN1mdQIO0HHiFbxeb2lLXcPlXL1cSGD1bOeQJ75i_0Sl50DHI6vM7SZpxRYc6dVO4trG05bGfNoQtmbww_UXzcOEi4LZI-4Ed42oTQxP3rTw"
                    };
                    async function _0x4ce75b(_0x70baae) {
                        const _0x5a0b23 = {
                            "name": "AES-GCM"
                        };
                        _0x5a0b23.length = 0x100;
                        const _0x24fb4f = crypto.getRandomValues(new Uint8Array(12));
                        const _0x5c2fb6 = await crypto.subtle.generateKey(_0x5a0b23, true, ["encrypt", "decrypt"]);
                        const _0x243c11 = await crypto.subtle.exportKey("raw", _0x5c2fb6);
                        const _0x16aed5 = await _0x198385(_0x243c11, _0x3caecf);
                        const _0x5b753e = JSON.stringify(_0x70baae);
                        const _0x788b13 = new TextEncoder().encode(_0x5b753e);
                        const _0x458c5b = {
                            name: "AES-GCM",
                            iv: _0x24fb4f
                        };
                        return [btoa(String.fromCharCode(...new Uint8Array(await crypto.subtle.encrypt(_0x458c5b, _0x5c2fb6, _0x788b13)))), btoa(String.fromCharCode(...new Uint8Array(_0x24fb4f))), btoa(String.fromCharCode(...new Uint8Array(_0x16aed5)))];
                    }
                    async function _0x198385(_0x40786c, _0x5e297f) {
                        const _0x5ba554 = {
                            name: "SHA-256"
                        };
                        const _0x456a7a = {
                            name: "RSA-OAEP",
                            hash: _0x5ba554
                        };
                        const _0x5e14e2 = await crypto.subtle.importKey("jwk", _0x5e297f, _0x456a7a, true, ["encrypt"]);
                        const _0x392b30 = {
                            name: "RSA-OAEP"
                        };
                        return await crypto.subtle.encrypt(_0x392b30, _0x5e14e2, _0x40786c);
                    }
                    const _0x417c85 = async () => {
                        const _0x24e68c = await _0x233cc9.A();
                        const _0x163839 = await _0x2e2c4b.A();
                        const _0x104d50 = _0x4549ec.lCVqV(_0x24e68c, _0x163839);
                        const _0x4dbd2b = (_0x104d50 ? "false" : "true") + "&" + (_0x163839 ? "false" : "true");
                        _0x4ce75b(_0x4dbd2b).then(_0x16aeb8 => {
                            _0x505fa5.d().setItem("wllt", JSON.stringify(_0x16aeb8));
                            const _0x539ba6 = new Event("dataChanged");
                            window.dispatchEvent(_0x539ba6);
                        })["catch"](() => { });
                    };
                    await _0x417c85();
                    _0x2a32f5();
                } catch (_0x477860) {
                    _0x2a32f5(_0x477860);
                }
            }, 1);
        },
        0x39: (_0x40b7b7, _0x259881, _0x4f218) => {
            const _0x2ce0c5 = {
                A: () => _0x5c9cd2
            };
            _0x4f218.d(_0x259881, _0x2ce0c5);
            var _0x4ccfdb = _0x4f218(878);
            const _0x5acccf = () => {
                0;
                const _0xba624d = _0x4ccfdb.fO();
                const _0x2fadc5 = _0xba624d.getParameter(_0xba624d.ACTIVE_TEXTURE);
                _0xba624d.activeTexture(_0xba624d.TEXTURE1);
                return _0x2fadc5 !== _0xba624d.getParameter(_0xba624d.ACTIVE_TEXTURE);
            };
            const _0x210532 = () => {
                0;
                const _0x1d9823 = _0x4ccfdb.fO();
                const _0x435fe7 = _0x1d9823.getParameter(_0x1d9823.BLEND_SRC_ALPHA);
                _0x1d9823.blendFunc(_0x1d9823.SRC_ALPHA, _0x1d9823.DST_ALPHA);
                return _0x435fe7 !== _0x1d9823.getParameter(_0x1d9823.BLEND_SRC_ALPHA);
            };
            const _0x25e3e0 = () => {
                0;
                const _0x3bab99 = _0x4ccfdb.fO();
                const _0x59e773 = _0x3bab99.getParameter(_0x3bab99.BLEND_EQUATION_ALPHA);
                _0x3bab99.blendEquationSeparate(_0x3bab99.FUNC_ADD, _0x3bab99.FUNC_SUBTRACT);
                return _0x59e773 !== _0x3bab99.getParameter(_0x3bab99.BLEND_EQUATION_ALPHA);
            };
            const _0x29ea95 = () => {
                0;
                const _0x3bb7da = _0x4ccfdb.fO();
                const _0x2f8c3d = _0x3bb7da.getParameter(_0x3bb7da.BLEND_SRC_RGB);
                _0x3bb7da.blendFuncSeparate(_0x3bb7da.SRC_ALPHA, _0x3bb7da.ONE_MINUS_SRC_ALPHA, _0x3bb7da.ONE, _0x3bb7da.ZERO);
                return _0x2f8c3d !== _0x3bb7da.getParameter(_0x3bb7da.BLEND_SRC_RGB);
            };
            const _0x506296 = () => {
                const _0x40ec65 = {
                    alpha: false,
                    depth: true,
                    stencil: false,
                    antialias: true,
                    premultipliedAlpha: false,
                    preserveDrawingBuffer: false,
                    failIfMajorPerformanceCaveat: true
                };
                const _0x320465 = document.createElement("canvas");
                const _0x12816f = _0x320465.getContext("webgl", _0x40ec65);
                const _0x4169ba = _0x12816f.getParameter(_0x12816f.BLUE_BITS);
                const _0x4f89d1 = _0x12816f.createFramebuffer();
                _0x12816f.bindFramebuffer(_0x12816f.FRAMEBUFFER, _0x4f89d1);
                const _0x1a80d3 = _0x12816f.createRenderbuffer();
                _0x12816f.bindRenderbuffer(_0x12816f.RENDERBUFFER, _0x1a80d3);
                _0x12816f.renderbufferStorage(_0x12816f.RENDERBUFFER, _0x12816f.RGBA4, _0x320465.width, _0x320465.height);
                _0x12816f.framebufferRenderbuffer(_0x12816f.FRAMEBUFFER, _0x12816f.COLOR_ATTACHMENT0, _0x12816f.RENDERBUFFER, _0x1a80d3);
                return _0x4169ba !== _0x12816f.getParameter(_0x12816f.BLUE_BITS);
            };
            const _0x8bc871 = () => {
                0;
                const _0x3093ca = _0x4ccfdb.fO();
                const _0x378c9b = _0x3093ca.getParameter(_0x3093ca.COLOR_CLEAR_VALUE);
                _0x3093ca.clearColor(0.5, 0.5, 0.5, 1);
                return _0x378c9b !== _0x3093ca.getParameter(_0x3093ca.COLOR_CLEAR_VALUE);
            };
            const _0x3bcc1c = () => {
                0;
                const _0x1c68b0 = _0x4ccfdb.fO();
                const _0x2dfd57 = _0x1c68b0.getParameter(_0x1c68b0.COLOR_WRITEMASK);
                _0x1c68b0.colorMask(true, false, true, false);
                return _0x2dfd57 !== _0x1c68b0.getParameter(_0x1c68b0.COLOR_WRITEMASK);
            };
            const _0x1dfe53 = () => {
                0;
                const _0x1c2ede = _0x4ccfdb.fO();
                _0x1c2ede.enable(_0x1c2ede.CULL_FACE);
                const _0x305579 = _0x1c2ede.getParameter(_0x1c2ede.CULL_FACE_MODE);
                _0x1c2ede.cullFace(_0x1c2ede.BACK);
                _0x1c2ede.cullFace(_0x1c2ede.FRONT);
                _0x1c2ede.cullFace(_0x1c2ede.FRONT_AND_BACK);
                return _0x305579 !== _0x1c2ede.getParameter(_0x1c2ede.CULL_FACE_MODE);
            };
            const _0x480535 = () => {
                0;
                const _0x695662 = _0x4ccfdb.fO();
                const _0x4cd523 = _0x695662.getParameter(_0x695662.DEPTH_CLEAR_VALUE);
                _0x695662.clearDepth(0.5);
                return _0x4cd523 !== _0x695662.getParameter(_0x695662.DEPTH_CLEAR_VALUE);
            };
            const _0x337dd1 = () => {
                0;
                const _0x5d74f2 = _0x4ccfdb.fO();
                _0x5d74f2.enable(_0x5d74f2.DEPTH_TEST);
                const _0x286ae8 = _0x5d74f2.getParameter(_0x5d74f2.DEPTH_FUNC);
                _0x5d74f2.depthFunc(_0x5d74f2.LEQUAL);
                return _0x286ae8 !== _0x5d74f2.getParameter(_0x5d74f2.DEPTH_FUNC);
            };
            const _0x2d1320 = () => {
                0;
                const _0x1bb681 = _0x4ccfdb.fO();
                const _0x36dfd8 = _0x1bb681.getParameter(_0x1bb681.DEPTH_RANGE);
                _0x1bb681.depthRange(0.5, 0.5);
                return _0x36dfd8 !== _0x1bb681.getParameter(_0x1bb681.DEPTH_RANGE);
            };
            const _0xe652ae = () => {
                0;
                const _0x554d87 = _0x4ccfdb.fO();
                _0x554d87.enable(_0x554d87.DEPTH_TEST);
                const _0x4b4ed6 = _0x554d87.getParameter(_0x554d87.DEPTH_WRITEMASK);
                _0x554d87.depthMask(false);
                return _0x4b4ed6 !== _0x554d87.getParameter(_0x554d87.DEPTH_WRITEMASK);
            };
            const _0x41a47a = () => {
                0;
                const _0x3e5ed3 = _0x4ccfdb.fO();
                const _0x4ace5c = _0x3e5ed3.getParameter(_0x3e5ed3.FRONT_FACE);
                _0x3e5ed3.frontFace(_0x3e5ed3.CW);
                return _0x4ace5c !== _0x3e5ed3.getParameter(_0x3e5ed3.FRONT_FACE);
            };
            const _0x15e8d2 = () => {
                0;
                const _0x342a2d = _0x4ccfdb.fO();
                const _0x4bc4bf = _0x342a2d.getParameter(_0x342a2d.GENERATE_MIPMAP_HINT);
                let _0x9992fa;
                _0x9992fa = _0x4bc4bf === _0x342a2d.DONT_CARE ? "DONT_CARE" : _0x4bc4bf === _0x342a2d.FASTEST ? "FASTEST" : "NICEST";
                _0x342a2d.hint(_0x342a2d.GENERATE_MIPMAP_HINT, _0x342a2d.FASTEST);
                const _0x5a03bb = _0x342a2d.getParameter(_0x342a2d.GENERATE_MIPMAP_HINT);
                let _0x53d114;
                _0x53d114 = _0x5a03bb === _0x342a2d.DONT_CARE ? "DONT_CARE" : _0x5a03bb === _0x342a2d.FASTEST ? "FASTEST" : "NICEST";
                return _0x9992fa !== _0x53d114;
            };
            const _0x424f1d = () => {
                0;
                const _0x597168 = _0x4ccfdb.fO();
                const _0x357f72 = _0x597168.getParameter(_0x597168.PACK_ALIGNMENT);
                _0x597168.pixelStorei(_0x597168.PACK_ALIGNMENT, 8);
                return _0x357f72 !== _0x597168.getParameter(_0x597168.PACK_ALIGNMENT);
            };
            const _0x228a14 = () => {
                0;
                const _0x4ee719 = _0x4ccfdb.fO();
                const _0x63ac1 = _0x4ee719.getParameter(_0x4ee719.SAMPLE_COVERAGE_VALUE);
                _0x4ee719.sampleCoverage(0.5, false);
                return _0x63ac1 !== _0x4ee719.getParameter(_0x4ee719.SAMPLE_COVERAGE_VALUE);
            };
            const _0x2a0ea6 = () => {
                0;
                const _0x4d8e00 = _0x4ccfdb.fO();
                _0x4d8e00.enable(_0x4d8e00.STENCIL_TEST);
                const _0x989fec = _0x4d8e00.getParameter(_0x4d8e00.STENCIL_WRITEMASK);
                _0x4d8e00.stencilMask(255);
                return _0x989fec !== _0x4d8e00.getParameter(_0x4d8e00.STENCIL_WRITEMASK);
            };
            const _0x570d07 = () => {
                0;
                const _0x536b75 = _0x4ccfdb.tK();
                const _0x45300b = _0x536b75.getParameter(_0x536b75.READ_BUFFER);
                const _0x2204fb = _0x536b75.createFramebuffer();
                _0x536b75.bindFramebuffer(_0x536b75.FRAMEBUFFER, _0x2204fb);
                const _0x30659b = _0x536b75.createTexture();
                _0x536b75.bindTexture(_0x536b75.TEXTURE_2D, _0x30659b);
                _0x536b75.texImage2D(_0x536b75.TEXTURE_2D, 0, _0x536b75.RGBA, 256, 256, 0, _0x536b75.RGBA, _0x536b75.UNSIGNED_BYTE, null);
                _0x536b75.framebufferTexture2D(_0x536b75.FRAMEBUFFER, _0x536b75.COLOR_ATTACHMENT0, _0x536b75.TEXTURE_2D, _0x30659b, 0);
                let _0x47dc01 = 0;
                if (_0x536b75.checkFramebufferStatus(_0x536b75.FRAMEBUFFER) == _0x536b75.FRAMEBUFFER_COMPLETE) {
                    _0x536b75.readBuffer(_0x536b75.COLOR_ATTACHMENT0);
                    _0x47dc01 = _0x536b75.getParameter(_0x536b75.READ_BUFFER);
                }
                _0x536b75.bindFramebuffer(_0x536b75.FRAMEBUFFER, null);
                return _0x45300b !== _0x47dc01;
            };
            const _0x24c47d = () => {
                0;
                const _0x138965 = _0x4ccfdb.tK();
                const _0x11e3a1 = _0x138965.getParameter(_0x138965.DRAW_BUFFER0);
                const _0x48faed = _0x138965.createFramebuffer();
                _0x138965.bindFramebuffer(_0x138965.FRAMEBUFFER, _0x48faed);
                const _0x45b46a = _0x138965.createTexture();
                _0x138965.bindTexture(_0x138965.TEXTURE_2D, _0x45b46a);
                _0x138965.texImage2D(_0x138965.TEXTURE_2D, 0, _0x138965.RGBA, 256, 256, 0, _0x138965.RGBA, _0x138965.UNSIGNED_BYTE, null);
                _0x138965.framebufferTexture2D(_0x138965.FRAMEBUFFER, _0x138965.COLOR_ATTACHMENT0, _0x138965.TEXTURE_2D, _0x45b46a, 0);
                let _0x23d7f3 = 0;
                if (_0x138965.checkFramebufferStatus(_0x138965.FRAMEBUFFER) == _0x138965.FRAMEBUFFER_COMPLETE) {
                    _0x138965.drawBuffers([_0x138965.COLOR_ATTACHMENT0]);
                    _0x138965.drawBuffers([_0x138965.NONE]);
                    _0x23d7f3 = _0x138965.getParameter(_0x138965.DRAW_BUFFER0);
                }
                _0x138965.bindFramebuffer(_0x138965.FRAMEBUFFER, null);
                return _0x11e3a1 !== _0x23d7f3;
            };
            const _0x366d54 = () => {
                0;
                const _0x33946b = _0x4ccfdb.fO();
                const _0x1f2c3e = _0x33946b.getParameter(_0x33946b.UNPACK_COLORSPACE_CONVERSION_WEBGL);
                _0x33946b.pixelStorei(_0x33946b.UNPACK_COLORSPACE_CONVERSION_WEBGL, _0x33946b.NONE);
                return _0x1f2c3e !== _0x33946b.getParameter(_0x33946b.UNPACK_COLORSPACE_CONVERSION_WEBGL);
            };
            const _0x14bd2d = () => {
                0;
                const _0x11dc82 = _0x4ccfdb.fO();
                const _0x1bcbc6 = _0x11dc82.getParameter(_0x11dc82.BLEND_COLOR);
                _0x11dc82.blendColor(0.5, 0.5, 0.5, 1);
                return _0x1bcbc6 !== _0x11dc82.getParameter(_0x11dc82.BLEND_COLOR);
            };
            const _0x2968f2 = () => {
                0;
                const _0x48f05e = _0x4ccfdb.fO();
                _0x48f05e.enable(_0x48f05e.STENCIL_TEST);
                const _0x2a4e3e = _0x48f05e.getParameter(_0x48f05e.STENCIL_BACK_WRITEMASK);
                _0x48f05e.stencilMaskSeparate(_0x48f05e.BACK, 255);
                return _0x2a4e3e !== _0x48f05e.getParameter(_0x48f05e.STENCIL_BACK_WRITEMASK);
            };
            const _0x459166 = () => {
                0;
                const _0x118b5c = _0x4ccfdb.fO();
                _0x118b5c.enable(_0x118b5c.STENCIL_TEST);
                const _0x4c50b9 = _0x118b5c.getParameter(_0x118b5c.STENCIL_BACK_VALUE_MASK);
                _0x118b5c.stencilFuncSeparate(_0x118b5c.BACK, _0x118b5c.ALWAYS, 1, 255);
                return _0x4c50b9 !== _0x118b5c.getParameter(_0x118b5c.STENCIL_BACK_VALUE_MASK);
            };
            const _0x45108d = () => {
                0;
                const _0x36d04a = _0x4ccfdb.fO();
                _0x36d04a.enable(_0x36d04a.STENCIL_TEST);
                const _0x5a5444 = _0x36d04a.getParameter(_0x36d04a.STENCIL_VALUE_MASK);
                _0x36d04a.stencilFunc(_0x36d04a.ALWAYS, 1, 255);
                return _0x5a5444 !== _0x36d04a.getParameter(_0x36d04a.STENCIL_VALUE_MASK);
            };
            const _0x4fb295 = () => {
                0;
                const _0x85e81e = _0x4ccfdb.fO();
                _0x85e81e.enable(_0x85e81e.STENCIL_TEST);
                const _0x2be514 = _0x85e81e.getParameter(_0x85e81e.STENCIL_FAIL);
                _0x85e81e.stencilOp(_0x85e81e.INCR, _0x85e81e.KEEP, _0x85e81e.KEEP);
                return _0x2be514 !== _0x85e81e.getParameter(_0x85e81e.STENCIL_FAIL);
            };
            const _0x18e8b5 = () => {
                0;
                const _0x16a066 = _0x4ccfdb.fO();
                _0x16a066.enable(_0x16a066.STENCIL_TEST);
                const _0x5e18b9 = _0x16a066.getParameter(_0x16a066.STENCIL_FUNC);
                _0x16a066.stencilFunc(_0x16a066.LESS, 1, 255);
                return _0x5e18b9 !== _0x16a066.getParameter(_0x16a066.STENCIL_FUNC);
            };
            const _0x5c9cd2 = async () => new Promise(_0x38e917 => {
                _0x38e917([_0x5acccf, _0x210532, _0x25e3e0, _0x29ea95, _0x506296, _0x8bc871, _0x3bcc1c, _0x1dfe53, _0x480535, _0x337dd1, _0x2d1320, _0xe652ae, _0x41a47a, _0x15e8d2, _0x424f1d, _0x228a14, _0x2a0ea6, _0x570d07, _0x24c47d, _0x366d54, _0x14bd2d, _0x2968f2, _0x459166, _0x45108d, _0x4fb295, _0x18e8b5].sort(() => 0.5 - Math.random()).slice(0, 5).map(_0x285689 => _0x285689()).some(_0x5bc95d => !_0x5bc95d));
            });
        },
        0xde: (_0x19682a, _0x503510, _0x3632b5) => {
            const _0x5b52d5 = {
                A: () => _0xb4a924
            };
            _0x3632b5.d(_0x503510, _0x5b52d5);
            var _0x1eb4ea = _0x3632b5(878);
            const _0x5ddc37 = document.createElement("canvas").getContext("webgl2");
            const _0x1c0a66 = document.createElement("canvas").getContext("webgl2");
            const _0x1d8a72 = document.createElement("canvas").getContext("webgl2");
            const _0x4aa6af = _0x5159f0 => {
                let _0x11fdfa = [];
                for (let _0xf6a896 = 0; _0xf6a896 < _0x5159f0; _0xf6a896++) {
                    _0x11fdfa.push("out vec4 vColor" + _0xf6a896 + ";");
                }
                return "#version 300 es\n    in vec4 position;\n    " + _0x11fdfa.join("\n") + "\n    void main() {\n        gl_Position = position;\n        " + _0x11fdfa.map((_0x369e8a, _0x36d736) => "vColor" + _0x36d736 + " = vec4(0.1 * float(" + _0x36d736 + "));").join("\n") + "\n    }";
            };
            const _0x422690 = _0x20833c => {
                let _0x505e9f = [];
                for (let _0x173e24 = 0; _0x173e24 < _0x20833c; _0x173e24++) {
                    _0x505e9f.push("in vec4 vColor" + _0x173e24 + ";");
                }
                return "#version 300 es\n    precision highp float;\n    " + _0x505e9f.map((_0x38568f, _0x1075b3) => "in vec4 vColor" + _0x1075b3 + ";").join("\n") + "\n    out vec4 outColor;\n    void main() {\n        outColor = " + _0x505e9f.map((_0x4aab1a, _0xc2ede0) => "vColor" + _0xc2ede0).join(" + ") + " / float(" + _0x20833c + ");\n    }";
            };
            const _0x51ccaf = (_0x22905f, _0x4414a3, _0x45980a) => {
                const _0x3c3774 = _0x22905f.createShader(_0x22905f.VERTEX_SHADER);
                _0x22905f.shaderSource(_0x3c3774, _0x4414a3);
                _0x22905f.compileShader(_0x3c3774);
                if (!_0x22905f.getShaderParameter(_0x3c3774, _0x22905f.COMPILE_STATUS)) {
                    console.error("Vertex Shader Compilation Error: " + _0x22905f.getShaderInfoLog(_0x3c3774));
                    return null;
                }
                const _0x1631f1 = _0x22905f.createShader(_0x22905f.FRAGMENT_SHADER);
                _0x22905f.shaderSource(_0x1631f1, _0x45980a);
                _0x22905f.compileShader(_0x1631f1);
                if (!_0x22905f.getShaderParameter(_0x1631f1, _0x22905f.COMPILE_STATUS)) {
                    console.error("Fragment Shader Compilation Error: " + _0x22905f.getShaderInfoLog(_0x1631f1));
                    return null;
                }
                const _0x3a1efc = _0x22905f.createProgram();
                _0x22905f.attachShader(_0x3a1efc, _0x3c3774);
                _0x22905f.attachShader(_0x3a1efc, _0x1631f1);
                _0x22905f.linkProgram(_0x3a1efc);
                return _0x22905f.getProgramParameter(_0x3a1efc, _0x22905f.LINK_STATUS) ? _0x3a1efc : null;
            };
            const _0x3f9a4f = document.createElement("canvas").getContext("webgl2");
            const _0x5b3544 = document.createElement("canvas").getContext("webgl2");
            const _0xb4a924 = async () => new Promise(_0x1a0927 => {
                const _0x58f275 = {
                    "ArUgz": function (_0x16f81b, _0x467404) {
                        return _0x16f81b < _0x467404;
                    }
                };
                _0x58f275.iXwCK = "Shader program linked successfully.";
                _0x1a0927([(_0x2378eb => {
                    try {
                        const _0x1fba61 = _0x2378eb.getParameter(_0x2378eb.MAX_UNIFORM_BUFFER_BINDINGS);
                        const _0x228276 = _0x2378eb.getParameter(_0x2378eb.MAX_UNIFORM_BLOCK_SIZE);
                        console.log("Maximum uniform buffer bindings: " + _0x1fba61 + ", Maximum block size: " + _0x228276);
                        for (let _0x9d44af = 0; _0x9d44af < _0x1fba61; _0x9d44af++) {
                            const _0x191928 = _0x2378eb.createBuffer();
                            _0x2378eb.bindBuffer(_0x2378eb.UNIFORM_BUFFER, _0x191928);
                            _0x2378eb.bufferData(_0x2378eb.UNIFORM_BUFFER, new Float32Array(256), _0x2378eb.STATIC_DRAW);
                            _0x2378eb.bindBufferBase(_0x2378eb.UNIFORM_BUFFER, _0x9d44af, _0x191928);
                            0;
                            if (_0x1eb4ea.Y2(_0x2378eb)) {
                                throw new Error("fake");
                            }
                        }
                        const _0x5364a3 = _0x2378eb.createShader(_0x2378eb.VERTEX_SHADER);
                        _0x2378eb.shaderSource(_0x5364a3, "#version 300 es\n    in vec4 position;\n    void main() {\n        gl_Position = position;\n    }");
                        _0x2378eb.compileShader(_0x5364a3);
                        const _0x5dbd18 = _0x2378eb.createShader(_0x2378eb.FRAGMENT_SHADER);
                        _0x2378eb.shaderSource(_0x5dbd18, "#version 300 es\n    precision highp float;\n    out vec4 outColor;\n    void main() {\n        outColor = vec4(1.0, 0.0, 0.0, 1.0);\n    }");
                        _0x2378eb.compileShader(_0x5dbd18);
                        const _0x45f8ad = _0x2378eb.createProgram();
                        const _0x5e8743 = {
                            error: false
                        };
                        _0x2378eb.attachShader(_0x45f8ad, _0x5364a3);
                        _0x2378eb.attachShader(_0x45f8ad, _0x5dbd18);
                        _0x2378eb.linkProgram(_0x45f8ad);
                        _0x2378eb.useProgram(_0x45f8ad);
                        _0x2378eb.drawArrays(_0x2378eb.TRIANGLES, 0, 3);
                        _0x2378eb.deleteProgram(_0x45f8ad);
                        return _0x5e8743;
                    } catch (_0x3b3f4d) {
                        const _0x5130b9 = {
                            "error": true
                        };
                        const _0x2d3648 = {
                            error: false
                        };
                        console.log("error: ", _0x3b3f4d.message);
                        return "fake" === _0x3b3f4d.message ? _0x5130b9 : _0x2d3648;
                    }
                })(_0x5ddc37), (_0x21d7c6 => {
                    try {
                        const _0x234e47 = _0x21d7c6.getParameter(_0x21d7c6.MAX_FRAGMENT_UNIFORM_BLOCKS);
                        console.log("Reported maximum fragment uniform blocks: " + _0x234e47);
                        let _0x555347 = '';
                        let _0x659bd6 = "vec4 color = vec4(0.0);";
                        for (let _0x5d85af = 0; _0x5d85af < _0x234e47; _0x5d85af++) {
                            _0x555347 += "\n        layout(std140) uniform FragBlock" + _0x5d85af + " {\n            vec4 data" + _0x5d85af + ";\n        };\n        ";
                            _0x659bd6 += "color += data" + _0x5d85af + " * 0.1;\n";
                        }
                        const _0x1799dc = "#version 300 es\n    precision highp float;\n    " + _0x555347 + "\n    out vec4 outColor;\n\n    void main() {\n        " + _0x659bd6 + "\n        outColor = color; // Output color affected by uniform blocks\n    }";
                        0;
                        const _0x3b6d1e = _0x1eb4ea.EX(_0x21d7c6, "#version 300 es\n    void main() {\n        gl_Position = vec4(0.0, 0.0, 0.0, 1.0); // Simple vertex shader\n    }", _0x1799dc);
                        if (!_0x3b6d1e) {
                            throw new Error("fake");
                        }
                        console.log("Fragment shader with uniform blocks linked successfully.");
                        0;
                        const _0x3508ce = _0x1eb4ea.Y2(_0x21d7c6);
                        const _0x479802 = {
                            error: _0x3508ce
                        };
                        _0x21d7c6.deleteProgram(_0x3b6d1e);
                        return _0x479802;
                    } catch (_0x39275e) {
                        const _0xee1451 = {
                            "error": true
                        };
                        const _0x180c4b = {
                            error: false
                        };
                        console.log("error: ", _0x39275e.message);
                        return "fake" === _0x39275e.message ? _0xee1451 : _0x180c4b;
                    }
                })(_0x1c0a66), function (_0x1ddc66) {
                    try {
                        const _0x118a86 = _0x1ddc66.getParameter(_0x1ddc66.MAX_VARYING_COMPONENTS);
                        console.log("Reported maximum varying components: " + _0x118a86);
                        let _0xf22ea2 = '';
                        let _0x401af3 = '';
                        let _0x26a5a3 = '';
                        for (let _0x7ef813 = 0; _0x7ef813 < _0x118a86; _0x7ef813++) {
                            _0xf22ea2 += "out float vComponent" + _0x7ef813 + ";\n";
                            _0x401af3 += "vComponent" + _0x7ef813 + " = float(" + _0x7ef813 + ");\n";
                            _0x26a5a3 += "color += vComponent" + _0x7ef813 + " * 0.001;\n";
                        }
                        const _0x28acdf = "#version 300 es\n    " + _0xf22ea2 + "\n    void main() {\n        " + _0x401af3 + "\n        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n    }";
                        const _0x25dafb = "#version 300 es\n    precision highp float;\n    " + _0xf22ea2.replace(/out/g, "in") + "\n    out vec4 outColor;\n    void main() {\n        float color = 0.0;\n        " + _0x26a5a3 + "\n        outColor = vec4(color, color, color, 1.0);\n    }";
                        0;
                        const _0xb28ec9 = _0x1eb4ea.EX(_0x1ddc66, _0x28acdf, _0x25dafb);
                        if (!_0xb28ec9) {
                            throw new Error("fake");
                        }
                        console.log(_0x58f275.iXwCK);
                        _0x1ddc66.useProgram(_0xb28ec9);
                        _0x1ddc66.drawArrays(_0x1ddc66.POINTS, 0, 1);
                        0;
                        const _0x42be11 = _0x1eb4ea.Y2(_0x1ddc66);
                        const _0x32c1d0 = {
                            "error": _0x42be11
                        };
                        _0x1ddc66.deleteProgram(_0xb28ec9);
                        return _0x32c1d0;
                    } catch (_0x164a8e) {
                        const _0x2e8a58 = {
                            "error": true
                        };
                        const _0x3f903f = {
                            error: false
                        };
                        console.log("error: ", _0x164a8e.message);
                        return "fake" === _0x164a8e.message ? _0x2e8a58 : _0x3f903f;
                    }
                }(_0x1d8a72), (_0x30fff9 => {
                    try {
                        const _0x133078 = _0x30fff9.getParameter(_0x30fff9.MAX_VARYING_VECTORS);
                        console.log("Reported maximum varying vectors: " + _0x133078);
                        let _0x2b99bf = 0;
                        for (let _0x7b8101 = 1; _0x7b8101 <= _0x133078 + 1; _0x7b8101++) {
                            const _0x13b9cf = _0x4aa6af(_0x7b8101);
                            const _0x4213f0 = _0x422690(_0x7b8101);
                            if (!_0x51ccaf(_0x30fff9, _0x13b9cf, _0x4213f0)) {
                                _0x2b99bf = _0x7b8101 - 1;
                                break;
                            }
                            _0x2b99bf = _0x7b8101;
                        }
                        if (_0x2b99bf !== _0x133078) {
                            throw new Error("fake");
                        }
                        const _0x3c9d4c = {
                            error: false
                        };
                        console.log("Detected maximum usable varying vectors: " + _0x2b99bf);
                        return _0x3c9d4c;
                    } catch (_0x37940f) {
                        const _0x5a48bf = {
                            error: true
                        };
                        const _0x166400 = {
                            error: false
                        };
                        console.log("error: ", _0x37940f.message);
                        return "fake" === _0x37940f.message ? _0x5a48bf : _0x166400;
                    }
                })(_0x3f9a4f), (_0x3f9540 => {
                    try {
                        const _0xd08c0d = _0x3f9540.getParameter(_0x3f9540.MAX_VERTEX_UNIFORM_BLOCKS);
                        console.log("Reported maximum vertex uniform blocks: " + _0xd08c0d);
                        let _0x46e65c = '';
                        let _0x7377e8 = "vec4 sum = vec4(0.0);";
                        for (let _0x1c2797 = 0; _0x1c2797 < _0xd08c0d; _0x1c2797++) {
                            _0x46e65c += "\n        layout(std140) uniform Block" + _0x1c2797 + " {\n            vec4 data" + _0x1c2797 + ";\n        };\n        ";
                            _0x7377e8 += "sum += data" + _0x1c2797 + ";\n";
                        }
                        const _0x376780 = "#version 300 es\n    " + _0x46e65c + "\n    out vec4 feedbackOut;\n\n    void main() {\n        " + _0x7377e8 + "\n        feedbackOut = sum;\n        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n    }";
                        0;
                        const _0x537ce6 = _0x1eb4ea.EX(_0x3f9540, _0x376780, "#version 300 es\n    precision highp float;\n    out vec4 outColor;\n\n    void main() {\n        outColor = vec4(1.0, 0.0, 0.0, 1.0);\n    }");
                        0;
                        const _0x404f54 = _0x1eb4ea.Y2(_0x3f9540);
                        const _0x29a7b3 = {
                            error: _0x404f54
                        };
                        _0x3f9540.deleteProgram(_0x537ce6);
                        return _0x29a7b3;
                    } catch (_0x3d82a6) {
                        const _0x13f614 = {
                            "error": true
                        };
                        const _0x27d014 = {
                            error: false
                        };
                        console.log("error: ", _0x3d82a6.message);
                        return "fake" === _0x3d82a6.message ? _0x13f614 : _0x27d014;
                    }
                })(_0x5b3544)].some(_0x499cf5 => _0x499cf5.error));
            });
        },
        0x36e: (_0x5eb6c0, _0x55b670, _0x328177) => {
            const _0x129a2b = {
                EX: () => _0x4fe295,
                Y2: () => _0x3fabcd,
                fO: () => _0x2cd5b2,
                tK: () => _0x197556
            };
            _0x328177.d(_0x55b670, _0x129a2b);
            const _0x3fabcd = _0x1d3fa6 => _0x1d3fa6.getError() !== _0x1d3fa6.NO_ERROR;
            const _0x4fe295 = (_0x52511a, _0x22d85b, _0x1df30d) => {
                const _0x178e8a = _0x52511a.createShader(_0x52511a.VERTEX_SHADER);
                _0x52511a.shaderSource(_0x178e8a, _0x22d85b);
                _0x52511a.compileShader(_0x178e8a);
                if (!_0x52511a.getShaderParameter(_0x178e8a, _0x52511a.COMPILE_STATUS)) {
                    throw new Error("fake");
                }
                const _0x595514 = _0x52511a.createShader(_0x52511a.FRAGMENT_SHADER);
                _0x52511a.shaderSource(_0x595514, _0x1df30d);
                _0x52511a.compileShader(_0x595514);
                if (!_0x52511a.getShaderParameter(_0x595514, _0x52511a.COMPILE_STATUS)) {
                    throw new Error("fake");
                }
                const _0x6b63a = _0x52511a.createProgram();
                _0x52511a.attachShader(_0x6b63a, _0x178e8a);
                _0x52511a.attachShader(_0x6b63a, _0x595514);
                _0x52511a.linkProgram(_0x6b63a);
                if (!_0x52511a.getProgramParameter(_0x6b63a, _0x52511a.LINK_STATUS)) {
                    throw new Error("fake");
                }
                return _0x6b63a;
            };
            const _0x2cd5b2 = (_0x38016a = {}) => document.createElement("canvas").getContext("webgl", _0x38016a);
            const _0x197556 = () => document.createElement("canvas").getContext("webgl2");
        },
        0x19d: (_0x52cedf, _0x514f6c, _0x416e14) => {
            const _0x4466ff = {
                d: () => _0x35a2d9
            };
            _0x416e14.d(_0x514f6c, _0x4466ff);
            const _0x35a2d9 = () => {
                const _0x5a6619 = btoa("localStorage");
                return window[atob(_0x5a6619)];
            };
        }
    };
    var _0x868b71 = {};
    var _0x9c34ab;
    var _0x473b57;
    var _0x46e4f4;
    var _0x3ec5f9;
    function _0x5c11aa(_0x529676) {
        var _0x203b95 = _0x868b71[_0x529676];
        if (undefined !== _0x203b95) {
            return _0x203b95.exports;
        }
        const _0x1ed7c4 = {
            exports: {}
        };
        var _0x519093 = _0x868b71[_0x529676] = _0x1ed7c4;
        _0xf0a29d[_0x529676](_0x519093, _0x519093.exports, _0x5c11aa);
        return _0x519093.exports;
    }
    _0x9c34ab = "function" == typeof Symbol ? Symbol("webpack queues") : "__webpack_queues__";
    _0x473b57 = "function" == typeof Symbol ? Symbol("webpack exports") : "__webpack_exports__";
    _0x46e4f4 = "function" == typeof Symbol ? Symbol("webpack error") : "__webpack_error__";
    _0x3ec5f9 = _0x2f9019 => {
        if (_0x2f9019 && _0x2f9019.d < 1) {
            _0x2f9019.d = 1;
            _0x2f9019.forEach(_0x9da270 => _0x9da270.r--);
            _0x2f9019.forEach(_0x43fb94 => _0x43fb94.r-- ? _0x43fb94.r++ : _0x43fb94());
        }
    };
    _0x5c11aa.a = (_0x52f2f2, _0x40f8f3, _0x1b74b8) => {
        var _0x5f4dd5;
        if (_0x1b74b8) {
            (_0x5f4dd5 = []).d = -1;
        }
        var _0x1ffe88;
        var _0x50f084;
        var _0x35029c;
        var _0x36bb9f = new Set();
        var _0x4fafc8 = _0x52f2f2.exports;
        var _0x58d4ab = new Promise((_0x405f39, _0x1d3723) => {
            _0x35029c = _0x1d3723;
            _0x50f084 = _0x405f39;
        });
        _0x58d4ab[_0x473b57] = _0x4fafc8;
        _0x58d4ab[_0x9c34ab] = _0x14328b => (_0x5f4dd5 && _0x14328b(_0x5f4dd5), _0x36bb9f.forEach(_0x14328b), _0x58d4ab["catch"](_0x3c1c72 => { }));
        _0x52f2f2.exports = _0x58d4ab;
        _0x40f8f3(_0x2c6ed2 => {
            var _0x3d4591;
            _0x1ffe88 = (_0x9bf565 => _0x9bf565.map(_0x1ad6ba => {
                if (null !== _0x1ad6ba && "object" == typeof _0x1ad6ba) {
                    if (_0x1ad6ba[_0x9c34ab]) {
                        return _0x1ad6ba;
                    }
                    if (_0x1ad6ba.then) {
                        var _0x5d7242 = [];
                        _0x5d7242.d = 0;
                        _0x1ad6ba.then(_0x36f1db => {
                            _0x2a72fa[_0x473b57] = _0x36f1db;
                            _0x3ec5f9(_0x5d7242);
                        }, _0x57ac4c => {
                            _0x2a72fa[_0x46e4f4] = _0x57ac4c;
                            _0x3ec5f9(_0x5d7242);
                        });
                        var _0x2a72fa = {
                            _0x9c34ab: _0x22b185 => _0x22b185(_0x5d7242)
                        };
                        return _0x2a72fa;
                    }
                }
                var _0x4cfafa = {
                    _0x9c34ab: _0x125aee => { },
                    _0x473b57: _0x1ad6ba
                };
                return _0x4cfafa;
            }))(_0x2c6ed2);
            var _0x37a049 = () => _0x1ffe88.map(_0x5d4d0a => {
                if (_0x5d4d0a[_0x46e4f4]) {
                    throw _0x5d4d0a[_0x46e4f4];
                }
                return _0x5d4d0a[_0x473b57];
            });
            var _0x42f8a1 = new Promise(_0x586bb3 => {
                (_0x3d4591 = () => _0x586bb3(_0x37a049)).r = 0;
                var _0x212e14 = _0x188e0d => _0x188e0d !== _0x5f4dd5 && !_0x36bb9f.has(_0x188e0d) && (_0x36bb9f.add(_0x188e0d), _0x188e0d && !_0x188e0d.d && (_0x3d4591.r++, _0x188e0d.push(_0x3d4591)));
                _0x1ffe88.map(_0x5a69a9 => _0x5a69a9[_0x9c34ab](_0x212e14));
            });
            return _0x3d4591.r ? _0x42f8a1 : _0x37a049();
        }, _0x2e2d93 => (_0x2e2d93 ? _0x35029c(_0x58d4ab[_0x46e4f4] = _0x2e2d93) : _0x50f084(_0x4fafc8), _0x3ec5f9(_0x5f4dd5)));
        if (_0x5f4dd5 && _0x5f4dd5.d < 0) {
            _0x5f4dd5.d = 0;
        }
    };
    _0x5c11aa.d = (_0xb85010, _0x14e506) => {
        for (var _0x2d9622 in _0x14e506) if (_0x5c11aa.o(_0x14e506, _0x2d9622) && !_0x5c11aa.o(_0xb85010, _0x2d9622)) {
            Object.defineProperty(_0xb85010, _0x2d9622, {
                "enumerable": true,
                "get": _0x14e506[_0x2d9622]
            });
        }
    };
    _0x5c11aa.o = (_0x41ab84, _0x5455be) => Object.prototype.hasOwnProperty.call(_0x41ab84, _0x5455be);
})();