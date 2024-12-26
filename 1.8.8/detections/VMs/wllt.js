// @ts-check

; (() => {
    'use strict'

    var _0xf0a29d = {
        0x2c: (_0x4b46f1, _0x11cc79, _0x320202) => {
            _0x320202.a(
                _0x4b46f1,
                async (_0x8cfb8b, _0x2a32f5) => {
                    const _0x4549ec = {
                        eJRVZ: 'jwk',
                    }
                    _0x4549ec.__orCondition = function (value1, value2) {
                        return value1 || value2
                    }
                    try {
                        var _0x2e2c4b = _0x320202(0x39)
                        var _0x233cc9 = _0x320202(0xde)
                        var _0x505fa5 = _0x320202(0x19d)
                        const _0x3caecf = {
                            alg: 'RSA-OAEP-256',
                            e: 'AQAB',
                            ext: true,
                            key_ops: ['encrypt'],
                            kty: 'RSA',
                            n: '8DJNossKBi-kNHAmIckUEs2ceEm32xlIwjqEtJ4gtxsLHdSa8HLs2SM6tFvxLQCkq9B_dWkZ1U1B0iH5oy4EaAOqC-NhZDh_UWTLRvoj9bHFFGFhRTOG80ztY-aeGuSeE5q3k86t9dgBA3v-BBW9u_ISuOd_hJvb6Z8kZmheak74uXRFTKkjO9SawZa-9cKC82lucYQeHPBWiqg7F8o15TSKtBqa8KD5_RYel3BZpUaN1mdQIO0HHiFbxeb2lLXcPlXL1cSGD1bOeQJ75i_0Sl50DHI6vM7SZpxRYc6dVO4trG05bGfNoQtmbww_UXzcOEi4LZI-4Ed42oTQxP3rTw',
                        }
                        async function _0x4ce75b(_0x70baae) {
                            const _0x5a0b23 = {
                                name: 'AES-GCM',
                            }
                            _0x5a0b23.length = 0x100
                            const _0x24fb4f = crypto.getRandomValues(new Uint8Array(12))
                            const _0x5c2fb6 = await crypto.subtle.generateKey(_0x5a0b23, true, ['encrypt', 'decrypt'])
                            const _0x243c11 = await crypto.subtle.exportKey('raw', _0x5c2fb6)
                            const _0x16aed5 = await _0x198385(_0x243c11, _0x3caecf)
                            const _0x5b753e = JSON.stringify(_0x70baae)
                            const _0x788b13 = new TextEncoder().encode(_0x5b753e)
                            const _0x458c5b = {
                                name: 'AES-GCM',
                                iv: _0x24fb4f,
                            }
                            return [
                                btoa(
                                    String.fromCharCode(
                                        ...new Uint8Array(await crypto.subtle.encrypt(_0x458c5b, _0x5c2fb6, _0x788b13))
                                    )
                                ),
                                btoa(String.fromCharCode(...new Uint8Array(_0x24fb4f))),
                                btoa(String.fromCharCode(...new Uint8Array(_0x16aed5))),
                            ]
                        }
                        async function _0x198385(_0x40786c, _0x5e297f) {
                            const _0x5ba554 = {
                                name: 'SHA-256',
                            }
                            const _0x456a7a = {
                                name: 'RSA-OAEP',
                                hash: _0x5ba554,
                            }
                            const _0x5e14e2 = await crypto.subtle.importKey('jwk', _0x5e297f, _0x456a7a, true, [
                                'encrypt',
                            ])
                            const _0x392b30 = {
                                name: 'RSA-OAEP',
                            }
                            return await crypto.subtle.encrypt(_0x392b30, _0x5e14e2, _0x40786c)
                        }
                        const _0x417c85 = async () => {
                            const webglHasError = await _0x233cc9.__webglHasError()
                            const hasParameterLies = await _0x2e2c4b.__hasParameterLies()
                            const _0x104d50 = _0x4549ec.__orCondition(webglHasError, hasParameterLies)
                            const _0x4dbd2b = (_0x104d50 ? 'false' : 'true') + '&' + (hasParameterLies ? 'false' : 'true')
                            _0x4ce75b(_0x4dbd2b)
                                .then((_0x16aeb8) => {
                                    _0x505fa5.__localStorage().setItem('wllt', JSON.stringify(_0x16aeb8))
                                    const _0x539ba6 = new Event('dataChanged')
                                    window.dispatchEvent(_0x539ba6)
                                })
                            ['catch'](() => { })
                        }
                        await _0x417c85()
                        _0x2a32f5()
                    } catch (_0x477860) {
                        _0x2a32f5(_0x477860)
                    }
                },
                1
            )
        },
        0x39: (_0x40b7b7, _0x259881, _0x4f218) => {
            const _0x2ce0c5 = {
                __hasParameterLies: () => __hasParameterLies,
            }
            _0x4f218.d(_0x259881, _0x2ce0c5)
            var _0x4ccfdb = _0x4f218(0x36e)
            const _0x5acccf = () => {
                0
                const webglContext = _0x4ccfdb.__getWebgl2ContextWithOptions()
                const _0x2fadc5 = webglContext.getParameter(webglContext.ACTIVE_TEXTURE)
                webglContext.activeTexture(webglContext.TEXTURE1)
                return _0x2fadc5 !== webglContext.getParameter(webglContext.ACTIVE_TEXTURE)
            }
            const _0x210532 = () => {
                0
                const webglContext = _0x4ccfdb.__getWebgl2ContextWithOptions()
                const _0x435fe7 = webglContext.getParameter(webglContext.BLEND_SRC_ALPHA)
                webglContext.blendFunc(webglContext.SRC_ALPHA, webglContext.DST_ALPHA)
                return _0x435fe7 !== webglContext.getParameter(webglContext.BLEND_SRC_ALPHA)
            }
            const _0x25e3e0 = () => {
                0
                const webglContext = _0x4ccfdb.__getWebgl2ContextWithOptions()
                const _0x59e773 = webglContext.getParameter(webglContext.BLEND_EQUATION_ALPHA)
                webglContext.blendEquationSeparate(webglContext.FUNC_ADD, webglContext.FUNC_SUBTRACT)
                return _0x59e773 !== webglContext.getParameter(webglContext.BLEND_EQUATION_ALPHA)
            }
            const _0x29ea95 = () => {
                0
                const webglContext = _0x4ccfdb.__getWebgl2ContextWithOptions()
                const _0x2f8c3d = webglContext.getParameter(webglContext.BLEND_SRC_RGB)
                webglContext.blendFuncSeparate(
                    webglContext.SRC_ALPHA,
                    webglContext.ONE_MINUS_SRC_ALPHA,
                    webglContext.ONE,
                    webglContext.ZERO
                )
                return _0x2f8c3d !== webglContext.getParameter(webglContext.BLEND_SRC_RGB)
            }
            const _0x506296 = () => {
                const _0x40ec65 = {
                    alpha: false,
                    depth: true,
                    stencil: false,
                    antialias: true,
                    premultipliedAlpha: false,
                    preserveDrawingBuffer: false,
                    failIfMajorPerformanceCaveat: true,
                }
                const _0x320465 = document.createElement('canvas')
                const _0x12816f = _0x320465.getContext('webgl', _0x40ec65)
                const _0x4169ba = _0x12816f.getParameter(_0x12816f.BLUE_BITS)
                const _0x4f89d1 = _0x12816f.createFramebuffer()
                _0x12816f.bindFramebuffer(_0x12816f.FRAMEBUFFER, _0x4f89d1)
                const _0x1a80d3 = _0x12816f.createRenderbuffer()
                _0x12816f.bindRenderbuffer(_0x12816f.RENDERBUFFER, _0x1a80d3)
                _0x12816f.renderbufferStorage(
                    _0x12816f.RENDERBUFFER,
                    _0x12816f.RGBA4,
                    _0x320465.width,
                    _0x320465.height
                )
                _0x12816f.framebufferRenderbuffer(
                    _0x12816f.FRAMEBUFFER,
                    _0x12816f.COLOR_ATTACHMENT0,
                    _0x12816f.RENDERBUFFER,
                    _0x1a80d3
                )
                return _0x4169ba !== _0x12816f.getParameter(_0x12816f.BLUE_BITS)
            }
            const _0x8bc871 = () => {
                0
                const webglContext = _0x4ccfdb.__getWebgl2ContextWithOptions()
                const _0x378c9b = webglContext.getParameter(webglContext.COLOR_CLEAR_VALUE)
                webglContext.clearColor(0.5, 0.5, 0.5, 1)
                return _0x378c9b !== webglContext.getParameter(webglContext.COLOR_CLEAR_VALUE)
            }
            const _0x3bcc1c = () => {
                0
                const webglContext = _0x4ccfdb.__getWebgl2ContextWithOptions()
                const _0x2dfd57 = webglContext.getParameter(webglContext.COLOR_WRITEMASK)
                webglContext.colorMask(true, false, true, false)
                return _0x2dfd57 !== webglContext.getParameter(webglContext.COLOR_WRITEMASK)
            }
            const _0x1dfe53 = () => {
                0
                const webglContext = _0x4ccfdb.__getWebgl2ContextWithOptions()
                webglContext.enable(webglContext.CULL_FACE)
                const _0x305579 = webglContext.getParameter(webglContext.CULL_FACE_MODE)
                webglContext.cullFace(webglContext.BACK)
                webglContext.cullFace(webglContext.FRONT)
                webglContext.cullFace(webglContext.FRONT_AND_BACK)
                return _0x305579 !== webglContext.getParameter(webglContext.CULL_FACE_MODE)
            }
            const _0x480535 = () => {
                0
                const webglContext = _0x4ccfdb.__getWebgl2ContextWithOptions()
                const _0x4cd523 = webglContext.getParameter(webglContext.DEPTH_CLEAR_VALUE)
                webglContext.clearDepth(0.5)
                return _0x4cd523 !== webglContext.getParameter(webglContext.DEPTH_CLEAR_VALUE)
            }
            const _0x337dd1 = () => {
                0
                const webglContext = _0x4ccfdb.__getWebgl2ContextWithOptions()
                webglContext.enable(webglContext.DEPTH_TEST)
                const _0x286ae8 = webglContext.getParameter(webglContext.DEPTH_FUNC)
                webglContext.depthFunc(webglContext.LEQUAL)
                return _0x286ae8 !== webglContext.getParameter(webglContext.DEPTH_FUNC)
            }
            const _0x2d1320 = () => {
                0
                const webglContext = _0x4ccfdb.__getWebgl2ContextWithOptions()
                const _0x36dfd8 = webglContext.getParameter(webglContext.DEPTH_RANGE)
                webglContext.depthRange(0.5, 0.5)
                return _0x36dfd8 !== webglContext.getParameter(webglContext.DEPTH_RANGE)
            }
            const _0xe652ae = () => {
                0
                const webglContext = _0x4ccfdb.__getWebgl2ContextWithOptions()
                webglContext.enable(webglContext.DEPTH_TEST)
                const _0x4b4ed6 = webglContext.getParameter(webglContext.DEPTH_WRITEMASK)
                webglContext.depthMask(false)
                return _0x4b4ed6 !== webglContext.getParameter(webglContext.DEPTH_WRITEMASK)
            }
            const _0x41a47a = () => {
                0
                const webglContext = _0x4ccfdb.__getWebgl2ContextWithOptions()
                const _0x4ace5c = webglContext.getParameter(webglContext.FRONT_FACE)
                webglContext.frontFace(webglContext.CW)
                return _0x4ace5c !== webglContext.getParameter(webglContext.FRONT_FACE)
            }
            const _0x15e8d2 = () => {
                0
                const webglContext = _0x4ccfdb.__getWebgl2ContextWithOptions()
                const _0x4bc4bf = webglContext.getParameter(webglContext.GENERATE_MIPMAP_HINT)
                let _0x9992fa
                _0x9992fa =
                    _0x4bc4bf === webglContext.DONT_CARE
                        ? 'DONT_CARE'
                        : _0x4bc4bf === webglContext.FASTEST
                            ? 'FASTEST'
                            : 'NICEST'
                webglContext.hint(webglContext.GENERATE_MIPMAP_HINT, webglContext.FASTEST)
                const _0x5a03bb = webglContext.getParameter(webglContext.GENERATE_MIPMAP_HINT)
                let _0x53d114
                _0x53d114 =
                    _0x5a03bb === webglContext.DONT_CARE
                        ? 'DONT_CARE'
                        : _0x5a03bb === webglContext.FASTEST
                            ? 'FASTEST'
                            : 'NICEST'
                return _0x9992fa !== _0x53d114
            }
            const _0x424f1d = () => {
                0
                const webglContext = _0x4ccfdb.__getWebgl2ContextWithOptions()
                const _0x357f72 = webglContext.getParameter(webglContext.PACK_ALIGNMENT)
                webglContext.pixelStorei(webglContext.PACK_ALIGNMENT, 8)
                return _0x357f72 !== webglContext.getParameter(webglContext.PACK_ALIGNMENT)
            }
            const _0x228a14 = () => {
                0
                const webglContext = _0x4ccfdb.__getWebgl2ContextWithOptions()
                const _0x63ac1 = webglContext.getParameter(webglContext.SAMPLE_COVERAGE_VALUE)
                webglContext.sampleCoverage(0.5, false)
                return _0x63ac1 !== webglContext.getParameter(webglContext.SAMPLE_COVERAGE_VALUE)
            }
            const _0x2a0ea6 = () => {
                0
                const webglContext = _0x4ccfdb.__getWebgl2ContextWithOptions()
                webglContext.enable(webglContext.STENCIL_TEST)
                const _0x989fec = webglContext.getParameter(webglContext.STENCIL_WRITEMASK)
                webglContext.stencilMask(255)
                return _0x989fec !== webglContext.getParameter(webglContext.STENCIL_WRITEMASK)
            }
            const _0x570d07 = () => {
                0
                const _0x536b75 = _0x4ccfdb.__getWebgl2Context()
                const _0x45300b = _0x536b75.getParameter(_0x536b75.READ_BUFFER)
                const _0x2204fb = _0x536b75.createFramebuffer()
                _0x536b75.bindFramebuffer(_0x536b75.FRAMEBUFFER, _0x2204fb)
                const _0x30659b = _0x536b75.createTexture()
                _0x536b75.bindTexture(_0x536b75.TEXTURE_2D, _0x30659b)
                _0x536b75.texImage2D(
                    _0x536b75.TEXTURE_2D,
                    0,
                    _0x536b75.RGBA,
                    256,
                    256,
                    0,
                    _0x536b75.RGBA,
                    _0x536b75.UNSIGNED_BYTE,
                    null
                )
                _0x536b75.framebufferTexture2D(
                    _0x536b75.FRAMEBUFFER,
                    _0x536b75.COLOR_ATTACHMENT0,
                    _0x536b75.TEXTURE_2D,
                    _0x30659b,
                    0
                )
                let _0x47dc01 = 0
                if (_0x536b75.checkFramebufferStatus(_0x536b75.FRAMEBUFFER) == _0x536b75.FRAMEBUFFER_COMPLETE) {
                    _0x536b75.readBuffer(_0x536b75.COLOR_ATTACHMENT0)
                    _0x47dc01 = _0x536b75.getParameter(_0x536b75.READ_BUFFER)
                }
                _0x536b75.bindFramebuffer(_0x536b75.FRAMEBUFFER, null)
                return _0x45300b !== _0x47dc01
            }
            const _0x24c47d = () => {
                0
                const _0x138965 = _0x4ccfdb.__getWebgl2Context()
                const _0x11e3a1 = _0x138965.getParameter(_0x138965.DRAW_BUFFER0)
                const _0x48faed = _0x138965.createFramebuffer()
                _0x138965.bindFramebuffer(_0x138965.FRAMEBUFFER, _0x48faed)
                const _0x45b46a = _0x138965.createTexture()
                _0x138965.bindTexture(_0x138965.TEXTURE_2D, _0x45b46a)
                _0x138965.texImage2D(
                    _0x138965.TEXTURE_2D,
                    0,
                    _0x138965.RGBA,
                    256,
                    256,
                    0,
                    _0x138965.RGBA,
                    _0x138965.UNSIGNED_BYTE,
                    null
                )
                _0x138965.framebufferTexture2D(
                    _0x138965.FRAMEBUFFER,
                    _0x138965.COLOR_ATTACHMENT0,
                    _0x138965.TEXTURE_2D,
                    _0x45b46a,
                    0
                )
                let _0x23d7f3 = 0
                if (_0x138965.checkFramebufferStatus(_0x138965.FRAMEBUFFER) == _0x138965.FRAMEBUFFER_COMPLETE) {
                    _0x138965.drawBuffers([_0x138965.COLOR_ATTACHMENT0])
                    _0x138965.drawBuffers([_0x138965.NONE])
                    _0x23d7f3 = _0x138965.getParameter(_0x138965.DRAW_BUFFER0)
                }
                _0x138965.bindFramebuffer(_0x138965.FRAMEBUFFER, null)
                return _0x11e3a1 !== _0x23d7f3
            }
            const _0x366d54 = () => {
                0
                const webglContext = _0x4ccfdb.__getWebgl2ContextWithOptions()
                const _0x1f2c3e = webglContext.getParameter(webglContext.UNPACK_COLORSPACE_CONVERSION_WEBGL)
                webglContext.pixelStorei(webglContext.UNPACK_COLORSPACE_CONVERSION_WEBGL, webglContext.NONE)
                return _0x1f2c3e !== webglContext.getParameter(webglContext.UNPACK_COLORSPACE_CONVERSION_WEBGL)
            }
            const _0x14bd2d = () => {
                0
                const webglContext = _0x4ccfdb.__getWebgl2ContextWithOptions()
                const _0x1bcbc6 = webglContext.getParameter(webglContext.BLEND_COLOR)
                webglContext.blendColor(0.5, 0.5, 0.5, 1)
                return _0x1bcbc6 !== webglContext.getParameter(webglContext.BLEND_COLOR)
            }
            const _0x2968f2 = () => {
                0
                const webglContext = _0x4ccfdb.__getWebgl2ContextWithOptions()
                webglContext.enable(webglContext.STENCIL_TEST)
                const _0x2a4e3e = webglContext.getParameter(webglContext.STENCIL_BACK_WRITEMASK)
                webglContext.stencilMaskSeparate(webglContext.BACK, 255)
                return _0x2a4e3e !== webglContext.getParameter(webglContext.STENCIL_BACK_WRITEMASK)
            }
            const _0x459166 = () => {
                0
                const webglContext = _0x4ccfdb.__getWebgl2ContextWithOptions()
                webglContext.enable(webglContext.STENCIL_TEST)
                const _0x4c50b9 = webglContext.getParameter(webglContext.STENCIL_BACK_VALUE_MASK)
                webglContext.stencilFuncSeparate(webglContext.BACK, webglContext.ALWAYS, 1, 255)
                return _0x4c50b9 !== webglContext.getParameter(webglContext.STENCIL_BACK_VALUE_MASK)
            }
            const _0x45108d = () => {
                0
                const webglContext = _0x4ccfdb.__getWebgl2ContextWithOptions()
                webglContext.enable(webglContext.STENCIL_TEST)
                const _0x5a5444 = webglContext.getParameter(webglContext.STENCIL_VALUE_MASK)
                webglContext.stencilFunc(webglContext.ALWAYS, 1, 255)
                return _0x5a5444 !== webglContext.getParameter(webglContext.STENCIL_VALUE_MASK)
            }
            const _0x4fb295 = () => {
                0
                const webglContext = _0x4ccfdb.__getWebgl2ContextWithOptions()
                webglContext.enable(webglContext.STENCIL_TEST)
                const testParamValue = webglContext.getParameter(webglContext.STENCIL_FAIL)
                webglContext.stencilOp(webglContext.INCR, webglContext.KEEP, webglContext.KEEP)
                return testParamValue !== webglContext.getParameter(webglContext.STENCIL_FAIL)
            }
            const _0x18e8b5 = () => {
                0
                const webglContext = _0x4ccfdb.__getWebgl2ContextWithOptions()
                webglContext.enable(webglContext.STENCIL_TEST)
                const _0x5e18b9 = webglContext.getParameter(webglContext.STENCIL_FUNC)
                webglContext.stencilFunc(webglContext.LESS, 1, 255)
                return _0x5e18b9 !== webglContext.getParameter(webglContext.STENCIL_FUNC)
            }
            const __hasParameterLies = async () =>
                new Promise((resolve) => {
                    resolve(
                        [
                            _0x5acccf,
                            _0x210532,
                            _0x25e3e0,
                            _0x29ea95,
                            _0x506296,
                            _0x8bc871,
                            _0x3bcc1c,
                            _0x1dfe53,
                            _0x480535,
                            _0x337dd1,
                            _0x2d1320,
                            _0xe652ae,
                            _0x41a47a,
                            _0x15e8d2,
                            _0x424f1d,
                            _0x228a14,
                            _0x2a0ea6,
                            _0x570d07,
                            _0x24c47d,
                            _0x366d54,
                            _0x14bd2d,
                            _0x2968f2,
                            _0x459166,
                            _0x45108d,
                            _0x4fb295,
                            _0x18e8b5,
                        ]
                            .sort(() => 0.5 - Math.random())
                            .slice(0, 5)
                            .map((e) => e())
                            .some((e) => !e)
                    )
                })
        },
        0xde: (_0x19682a, _0x503510, _0x3632b5) => {
            const _0x5b52d5 = {
                __webglHasError: () => __webglHasError,
            }
            _0x3632b5.d(_0x503510, _0x5b52d5)
            var _0x1eb4ea = _0x3632b5(0x36e)
            const __webgl2Context_1 = document.createElement('canvas').getContext('webgl2')
            const __webgl2Context_2 = document.createElement('canvas').getContext('webgl2')
            const __webgl2Context_3 = document.createElement('canvas').getContext('webgl2')
            const _0x4aa6af = (_0x5159f0) => {
                let _0x11fdfa = []
                for (let i = 0; i < _0x5159f0; i++) {
                    _0x11fdfa.push('out vec4 vColor' + i + ';')
                }
                return (
                    '#version 300 es\n    in vec4 position;\n    ' +
                    _0x11fdfa.join('\n') +
                    '\n    void main() {\n        gl_Position = position;\n        ' +
                    _0x11fdfa
                        .map(
                            (_0x369e8a, _0x36d736) => 'vColor' + _0x36d736 + ' = vec4(0.1 * float(' + _0x36d736 + '));'
                        )
                        .join('\n') +
                    '\n    }'
                )
            }
            const _0x422690 = (_0x20833c) => {
                let _0x505e9f = []
                for (let i = 0; i < _0x20833c; i++) {
                    _0x505e9f.push('in vec4 vColor' + i + ';')
                }
                return (
                    '#version 300 es\n    precision highp float;\n    ' +
                    _0x505e9f.map((_0x38568f, _0x1075b3) => 'in vec4 vColor' + _0x1075b3 + ';').join('\n') +
                    '\n    out vec4 outColor;\n    void main() {\n        outColor = ' +
                    _0x505e9f.map((_0x4aab1a, _0xc2ede0) => 'vColor' + _0xc2ede0).join(' + ') +
                    ' / float(' +
                    _0x20833c +
                    ');\n    }'
                )
            }
            const __createWebglContextProgram = (webglContext, _0x4414a3, _0x45980a) => {
                const _0x3c3774 = webglContext.createShader(webglContext.VERTEX_SHADER)
                webglContext.shaderSource(_0x3c3774, _0x4414a3)
                webglContext.compileShader(_0x3c3774)
                if (!webglContext.getShaderParameter(_0x3c3774, webglContext.COMPILE_STATUS)) {
                    console.error('Vertex Shader Compilation Error: ' + webglContext.getShaderInfoLog(_0x3c3774))
                    return null
                }
                const _0x1631f1 = webglContext.createShader(webglContext.FRAGMENT_SHADER)
                webglContext.shaderSource(_0x1631f1, _0x45980a)
                webglContext.compileShader(_0x1631f1)
                if (!webglContext.getShaderParameter(_0x1631f1, webglContext.COMPILE_STATUS)) {
                    console.error('Fragment Shader Compilation Error: ' + webglContext.getShaderInfoLog(_0x1631f1))
                    return null
                }
                const program = webglContext.createProgram()
                webglContext.attachShader(program, _0x3c3774)
                webglContext.attachShader(program, _0x1631f1)
                webglContext.linkProgram(program)
                return webglContext.getProgramParameter(program, webglContext.LINK_STATUS) ? program : null
            }
            const __webgl2Context_4 = document.createElement('canvas').getContext('webgl2')
            const __webgl2Context_5 = document.createElement('canvas').getContext('webgl2')
            const __webglHasError = async () =>
                new Promise((resolve) => {
                    const _0x58f275 = {
                        ArUgz: function (a, b) {
                            return a < b
                        },
                    }
                    _0x58f275.iXwCK = 'Shader program linked successfully.'
                    resolve(
                        [
                            ((webglContext) => {
                                try {
                                    const max_uniform_buffer_bindings = webglContext.getParameter(
                                        webglContext.MAX_UNIFORM_BUFFER_BINDINGS
                                    )
                                    const max_uniform_block_size = webglContext.getParameter(
                                        webglContext.MAX_UNIFORM_BLOCK_SIZE
                                    )
                                    console.log(
                                        'Maximum uniform buffer bindings: ' +
                                        max_uniform_buffer_bindings +
                                        ', Maximum block size: ' +
                                        max_uniform_block_size
                                    )
                                    for (let i = 0; i < max_uniform_buffer_bindings; i++) {
                                        const buffer = webglContext.createBuffer()
                                        webglContext.bindBuffer(webglContext.UNIFORM_BUFFER, buffer)
                                        webglContext.bufferData(
                                            webglContext.UNIFORM_BUFFER,
                                            new Float32Array(256),
                                            webglContext.STATIC_DRAW
                                        )
                                        webglContext.bindBufferBase(webglContext.UNIFORM_BUFFER, i, buffer)
                                        0
                                        if (_0x1eb4ea.__hasError(webglContext)) {
                                            throw new Error('fake')
                                        }
                                    }
                                    const _0x5364a3 = webglContext.createShader(webglContext.VERTEX_SHADER)
                                    webglContext.shaderSource(
                                        _0x5364a3,
                                        '#version 300 es\n    in vec4 position;\n    void main() {\n        gl_Position = position;\n    }'
                                    )
                                    webglContext.compileShader(_0x5364a3)
                                    const _0x5dbd18 = webglContext.createShader(webglContext.FRAGMENT_SHADER)
                                    webglContext.shaderSource(
                                        _0x5dbd18,
                                        '#version 300 es\n    precision highp float;\n    out vec4 outColor;\n    void main() {\n        outColor = vec4(1.0, 0.0, 0.0, 1.0);\n    }'
                                    )
                                    webglContext.compileShader(_0x5dbd18)
                                    const _0x45f8ad = webglContext.createProgram()
                                    const _0x5e8743 = {
                                        error: false,
                                    }
                                    webglContext.attachShader(_0x45f8ad, _0x5364a3)
                                    webglContext.attachShader(_0x45f8ad, _0x5dbd18)
                                    webglContext.linkProgram(_0x45f8ad)
                                    webglContext.useProgram(_0x45f8ad)
                                    webglContext.drawArrays(webglContext.TRIANGLES, 0, 3)
                                    webglContext.deleteProgram(_0x45f8ad)
                                    return _0x5e8743
                                } catch (_0x3b3f4d) {
                                    const _0x5130b9 = {
                                        error: true,
                                    }
                                    const _0x2d3648 = {
                                        error: false,
                                    }
                                    console.log('error: ', _0x3b3f4d.message)
                                    return 'fake' === _0x3b3f4d.message ? _0x5130b9 : _0x2d3648
                                }
                            })(__webgl2Context_1),
                            ((webglContext) => {
                                try {
                                    const max_fragment_uniform_blocks = webglContext.getParameter(
                                        webglContext.MAX_FRAGMENT_UNIFORM_BLOCKS
                                    )
                                    console.log('Reported maximum fragment uniform blocks: ' + max_fragment_uniform_blocks)
                                    let _0x555347 = ''
                                    let _0x659bd6 = 'vec4 color = vec4(0.0);'
                                    for (let i = 0; i < max_fragment_uniform_blocks; i++) {
                                        _0x555347 +=
                                            '\n        layout(std140) uniform FragBlock' +
                                            i +
                                            ' {\n            vec4 data' +
                                            i +
                                            ';\n        };\n        '
                                        _0x659bd6 += 'color += data' + i + ' * 0.1;\n'
                                    }
                                    const _0x1799dc =
                                        '#version 300 es\n    precision highp float;\n    ' +
                                        _0x555347 +
                                        '\n    out vec4 outColor;\n\n    void main() {\n        ' +
                                        _0x659bd6 +
                                        '\n        outColor = color; // Output color affected by uniform blocks\n    }'
                                    0
                                    const program = _0x1eb4ea.__setupWebglContextProgram(
                                        webglContext,
                                        '#version 300 es\n    void main() {\n        gl_Position = vec4(0.0, 0.0, 0.0, 1.0); // Simple vertex shader\n    }',
                                        _0x1799dc
                                    )
                                    if (!program) {
                                        throw new Error('fake')
                                    }
                                    console.log('Fragment shader with uniform blocks linked successfully.')
                                    0
                                    const error = _0x1eb4ea.__hasError(webglContext)
                                    const result = {
                                        error: error,
                                    }
                                    webglContext.deleteProgram(program)
                                    return result
                                } catch (_0x39275e) {
                                    const _0xee1451 = {
                                        error: true,
                                    }
                                    const _0x180c4b = {
                                        error: false,
                                    }
                                    console.log('error: ', _0x39275e.message)
                                    return 'fake' === _0x39275e.message ? _0xee1451 : _0x180c4b
                                }
                            })(__webgl2Context_2),
                            (function (webglContext) {
                                try {
                                    const max_varying_components = webglContext.getParameter(webglContext.MAX_VARYING_COMPONENTS)
                                    console.log('Reported maximum varying components: ' + max_varying_components)
                                    let _0xf22ea2 = ''
                                    let _0x401af3 = ''
                                    let _0x26a5a3 = ''
                                    for (let i = 0; i < max_varying_components; i++) {
                                        _0xf22ea2 += 'out float vComponent' + i + ';\n'
                                        _0x401af3 += 'vComponent' + i + ' = float(' + i + ');\n'
                                        _0x26a5a3 += 'color += vComponent' + i + ' * 0.001;\n'
                                    }
                                    const _0x28acdf =
                                        '#version 300 es\n    ' +
                                        _0xf22ea2 +
                                        '\n    void main() {\n        ' +
                                        _0x401af3 +
                                        '\n        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n    }'
                                    const _0x25dafb =
                                        '#version 300 es\n    precision highp float;\n    ' +
                                        _0xf22ea2.replace(/out/g, 'in') +
                                        '\n    out vec4 outColor;\n    void main() {\n        float color = 0.0;\n        ' +
                                        _0x26a5a3 +
                                        '\n        outColor = vec4(color, color, color, 1.0);\n    }'
                                    0
                                    const program = _0x1eb4ea.__setupWebglContextProgram(webglContext, _0x28acdf, _0x25dafb)
                                    if (!program) {
                                        throw new Error('fake')
                                    }
                                    console.log(_0x58f275.iXwCK)
                                    webglContext.useProgram(program)
                                    webglContext.drawArrays(webglContext.POINTS, 0, 1)
                                    0
                                    const _0x42be11 = _0x1eb4ea.__hasError(webglContext)
                                    const _0x32c1d0 = {
                                        error: _0x42be11,
                                    }
                                    webglContext.deleteProgram(program)
                                    return _0x32c1d0
                                } catch (_0x164a8e) {
                                    const _0x2e8a58 = {
                                        error: true,
                                    }
                                    const _0x3f903f = {
                                        error: false,
                                    }
                                    console.log('error: ', _0x164a8e.message)
                                    return 'fake' === _0x164a8e.message ? _0x2e8a58 : _0x3f903f
                                }
                            })(__webgl2Context_3),
                            ((webglContext) => {
                                try {
                                    const max_varying_vectors = webglContext.getParameter(webglContext.MAX_VARYING_VECTORS)
                                    console.log('Reported maximum varying vectors: ' + max_varying_vectors)
                                    let _0x2b99bf = 0
                                    for (let i = 1; i <= max_varying_vectors + 1; i++) {
                                        const _0x13b9cf = _0x4aa6af(i)
                                        const _0x4213f0 = _0x422690(i)
                                        if (!__createWebglContextProgram(webglContext, _0x13b9cf, _0x4213f0)) {
                                            _0x2b99bf = i - 1
                                            break
                                        }
                                        _0x2b99bf = i
                                    }
                                    if (_0x2b99bf !== max_varying_vectors) {
                                        throw new Error('fake')
                                    }
                                    const _0x3c9d4c = {
                                        error: false,
                                    }
                                    console.log('Detected maximum usable varying vectors: ' + _0x2b99bf)
                                    return _0x3c9d4c
                                } catch (_0x37940f) {
                                    const _0x5a48bf = {
                                        error: true,
                                    }
                                    const _0x166400 = {
                                        error: false,
                                    }
                                    console.log('error: ', _0x37940f.message)
                                    return 'fake' === _0x37940f.message ? _0x5a48bf : _0x166400
                                }
                            })(__webgl2Context_4),
                            ((webglContext) => {
                                try {
                                    const max_vertex_uniform_blocks = webglContext.getParameter(webglContext.MAX_VERTEX_UNIFORM_BLOCKS)
                                    console.log('Reported maximum vertex uniform blocks: ' + max_vertex_uniform_blocks)
                                    let _0x46e65c = ''
                                    let _0x7377e8 = 'vec4 sum = vec4(0.0);'
                                    for (let i = 0; i < max_vertex_uniform_blocks; i++) {
                                        _0x46e65c +=
                                            '\n        layout(std140) uniform Block' +
                                            i +
                                            ' {\n            vec4 data' +
                                            i +
                                            ';\n        };\n        '
                                        _0x7377e8 += 'sum += data' + i + ';\n'
                                    }
                                    const _0x376780 =
                                        '#version 300 es\n    ' +
                                        _0x46e65c +
                                        '\n    out vec4 feedbackOut;\n\n    void main() {\n        ' +
                                        _0x7377e8 +
                                        '\n        feedbackOut = sum;\n        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n    }'
                                    0
                                    const program = _0x1eb4ea.__setupWebglContextProgram(
                                        webglContext,
                                        _0x376780,
                                        '#version 300 es\n    precision highp float;\n    out vec4 outColor;\n\n    void main() {\n        outColor = vec4(1.0, 0.0, 0.0, 1.0);\n    }'
                                    )
                                    0
                                    const hasError = _0x1eb4ea.__hasError(webglContext)
                                    const result = {
                                        error: hasError,
                                    }
                                    webglContext.deleteProgram(program)
                                    return result
                                } catch (_0x3d82a6) {
                                    const _0x13f614 = {
                                        error: true,
                                    }
                                    const _0x27d014 = {
                                        error: false,
                                    }
                                    console.log('error: ', _0x3d82a6.message)
                                    return 'fake' === _0x3d82a6.message ? _0x13f614 : _0x27d014
                                }
                            })(__webgl2Context_5),
                        ].some((e) => e.error)
                    )
                })
        },
        0x36e: (_0x5eb6c0, _0x55b670, _0x328177) => {
            const result = {
                __setupWebglContextProgram: () => __setupWebglContextProgram,
                __hasError: () => __hasError,
                __getWebgl2ContextWithOptions: () => __getWebgl2ContextWithOptions,
                __getWebgl2Context: () => __getWebgl2Context,
            }
            _0x328177.d(_0x55b670, result)
            const __hasError = (e) => e.getError() !== e.NO_ERROR
            const __setupWebglContextProgram = (webglContext, _0x22d85b, _0x1df30d) => {
                const shader = webglContext.createShader(webglContext.VERTEX_SHADER)
                webglContext.shaderSource(shader, _0x22d85b)
                webglContext.compileShader(shader)
                if (!webglContext.getShaderParameter(shader, webglContext.COMPILE_STATUS)) {
                    throw new Error('fake')
                }
                const _0x595514 = webglContext.createShader(webglContext.FRAGMENT_SHADER)
                webglContext.shaderSource(_0x595514, _0x1df30d)
                webglContext.compileShader(_0x595514)
                if (!webglContext.getShaderParameter(_0x595514, webglContext.COMPILE_STATUS)) {
                    throw new Error('fake')
                }
                const program = webglContext.createProgram()
                webglContext.attachShader(program, shader)
                webglContext.attachShader(program, _0x595514)
                webglContext.linkProgram(program)
                if (!webglContext.getProgramParameter(program, webglContext.LINK_STATUS)) {
                    throw new Error('fake')
                }
                return program
            }
            const __getWebgl2ContextWithOptions = (options = {}) =>
                document.createElement('canvas').getContext('webgl', options)
            const __getWebgl2Context = () => document.createElement('canvas').getContext('webgl2');
            return result;
        },
        0x19d: (_0x52cedf, _0x514f6c, _0x416e14) => {
            const _0x4466ff = {
                d: () => __localStorage,
            }
            _0x416e14.d(_0x514f6c, _0x4466ff)
            const __localStorage = () => {
                const localStorageStr = btoa('localStorage')
                return window[atob(localStorageStr)]
            }
        },
    }
    var _0x868b71 = {}
    var _0x9c34ab
    var _0x473b57
    var _0x46e4f4
    var _0x3ec5f9
    function _0x5c11aa(_0x529676) {
        var _0x203b95 = _0x868b71[_0x529676]
        if (undefined !== _0x203b95) {
            return _0x203b95.exports
        }
        const _0x1ed7c4 = {
            exports: {},
        }
        var _0x519093 = (_0x868b71[_0x529676] = _0x1ed7c4)
        _0xf0a29d[_0x529676](_0x519093, _0x519093.exports, _0x5c11aa)
        return _0x519093.exports
    }
    _0x9c34ab = 'function' == typeof Symbol ? Symbol('webpack queues') : '__webpack_queues__'
    _0x473b57 = 'function' == typeof Symbol ? Symbol('webpack exports') : '__webpack_exports__'
    _0x46e4f4 = 'function' == typeof Symbol ? Symbol('webpack error') : '__webpack_error__'
    _0x3ec5f9 = (_0x2f9019) => {
        if (_0x2f9019 && _0x2f9019.d < 1) {
            _0x2f9019.d = 1
            _0x2f9019.forEach((_0x9da270) => _0x9da270.r--)
            _0x2f9019.forEach((_0x43fb94) => (_0x43fb94.r-- ? _0x43fb94.r++ : _0x43fb94()))
        }
    }
    _0x5c11aa.a = (_0x52f2f2, _0x40f8f3, _0x1b74b8) => {
        var _0x5f4dd5
        if (_0x1b74b8) {
            ; (_0x5f4dd5 = []).d = -1
        }
        var _0x1ffe88
        var _0x50f084
        var _0x35029c
        var _0x36bb9f = new Set()
        var _0x4fafc8 = _0x52f2f2.exports
        var _0x58d4ab = new Promise((_0x405f39, _0x1d3723) => {
            _0x35029c = _0x1d3723
            _0x50f084 = _0x405f39
        })
        _0x58d4ab[_0x473b57] = _0x4fafc8
        _0x58d4ab[_0x9c34ab] = (_0x14328b) => (
            _0x5f4dd5 && _0x14328b(_0x5f4dd5), _0x36bb9f.forEach(_0x14328b), _0x58d4ab['catch']((_0x3c1c72) => { })
        )
        _0x52f2f2.exports = _0x58d4ab
        _0x40f8f3(
            (_0x2c6ed2) => {
                var _0x3d4591
                _0x1ffe88 = ((_0x9bf565) =>
                    _0x9bf565.map((_0x1ad6ba) => {
                        if (null !== _0x1ad6ba && 'object' == typeof _0x1ad6ba) {
                            if (_0x1ad6ba[_0x9c34ab]) {
                                return _0x1ad6ba
                            }
                            if (_0x1ad6ba.then) {
                                var _0x5d7242 = []
                                _0x5d7242.d = 0
                                _0x1ad6ba.then(
                                    (_0x36f1db) => {
                                        _0x2a72fa[_0x473b57] = _0x36f1db
                                        _0x3ec5f9(_0x5d7242)
                                    },
                                    (_0x57ac4c) => {
                                        _0x2a72fa[_0x46e4f4] = _0x57ac4c
                                        _0x3ec5f9(_0x5d7242)
                                    }
                                )
                                var _0x2a72fa = {
                                    _0x9c34ab: (_0x22b185) => _0x22b185(_0x5d7242),
                                }
                                return _0x2a72fa
                            }
                        }
                        var _0x4cfafa = {
                            _0x9c34ab: (_0x125aee) => { },
                            _0x473b57: _0x1ad6ba,
                        }
                        return _0x4cfafa
                    }))(_0x2c6ed2)
                var _0x37a049 = () =>
                    _0x1ffe88.map((_0x5d4d0a) => {
                        if (_0x5d4d0a[_0x46e4f4]) {
                            throw _0x5d4d0a[_0x46e4f4]
                        }
                        return _0x5d4d0a[_0x473b57]
                    })
                var _0x42f8a1 = new Promise((_0x586bb3) => {
                    ; (_0x3d4591 = () => _0x586bb3(_0x37a049)).r = 0
                    var _0x212e14 = (_0x188e0d) =>
                        _0x188e0d !== _0x5f4dd5 &&
                        !_0x36bb9f.has(_0x188e0d) &&
                        (_0x36bb9f.add(_0x188e0d),
                            _0x188e0d && !_0x188e0d.d && (_0x3d4591.r++, _0x188e0d.push(_0x3d4591)))
                    _0x1ffe88.map((_0x5a69a9) => _0x5a69a9[_0x9c34ab](_0x212e14))
                })
                return _0x3d4591.r ? _0x42f8a1 : _0x37a049()
            },
            (_0x2e2d93) => (
                _0x2e2d93 ? _0x35029c((_0x58d4ab[_0x46e4f4] = _0x2e2d93)) : _0x50f084(_0x4fafc8), _0x3ec5f9(_0x5f4dd5)
            )
        )
        if (_0x5f4dd5 && _0x5f4dd5.d < 0) {
            _0x5f4dd5.d = 0
        }
    }
    _0x5c11aa.d = (_0xb85010, _0x14e506) => {
        for (var _0x2d9622 in _0x14e506)
            if (_0x5c11aa.o(_0x14e506, _0x2d9622) && !_0x5c11aa.o(_0xb85010, _0x2d9622)) {
                Object.defineProperty(_0xb85010, _0x2d9622, {
                    enumerable: true,
                    get: _0x14e506[_0x2d9622],
                })
            }
    }
    _0x5c11aa.o = (_0x41ab84, _0x5455be) => Object.prototype.hasOwnProperty.call(_0x41ab84, _0x5455be)
})()
