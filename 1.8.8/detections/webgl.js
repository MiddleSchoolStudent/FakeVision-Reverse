// @ts-check

var __logAndSafeCall = {
    __safeCallFunction: function (fn) {
        try {
            return fn()
        } catch (err) {
            console.error(err)
            return
        }
    },
}

var __detectResults = {
    Z: {
        _value: {},
        setValue: function (key, value) {
            this._value[key] = value
        },
        getValue: function (key) {
            return this._value[key]
        },
    },
}

var __objHasOwnProperties = (properties) => {
    for (const property in properties) if (properties.hasOwnProperty(property)) return false
    return true
}

var __textHash = (text) => {
    const _0xd80752 = '' + JSON.stringify(text)
    return (
        '0000000' +
        (
            _0xd80752
                .split('')
                .reduce(
                    (acc, curr, index) => (Math.imul(31, acc) + _0xd80752.charCodeAt(index)) | 0,
                    2166136261
                ) >>> 0
        ).toString(16)
    ).substr(-8)
},
    __encodeText =
        (String.fromCharCode(26 * Math.random() + 97),
            Math.random().toString(36).slice(-7),
            (str, __cryptoMethod = 'SHA-256') => {
                const _0x16b612 = '' + JSON.stringify(str),
                    _0x162787 = new TextEncoder().encode(_0x16b612)
                return crypto.subtle
                    ? crypto.subtle.digest(__cryptoMethod, _0x162787).then((_0x590fb5) =>
                        Array.from(new Uint8Array(_0x590fb5))
                            .map((_0x5c3537) => ('00' + _0x5c3537.toString(16)).slice(-2))
                            .join('')
                    )
                    : ''
            }),
    _0x3963a0 = (_0x4bb007) => {
        const _0x19444f = /\(0x0000(.*?)\)/,
            _0x2db210 = _0x4bb007.match(_0x19444f),
            _0x3bdbd4 = _0x2db210 ? _0x2db210[1] : '',
            _0x4b87ab = _0x4bb007.replace(_0x19444f, '').trim()
        return _0x3bdbd4 ? [_0x4b87ab, _0x3bdbd4] : [_0x4b87ab]
    }

var __isDesktopOrMobileType = () => {
    let _0x4bb2a5
        ; (_0x4bb2a5 = 'ontouchstart' in window || navigator.maxTouchPoints > 0 ? 'mobile' : 'desktop'),
            (_0x4bb2a5 = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                ? 'mobile'
                : 'desktop'),
            (_0x4bb2a5 = undefined !== window.orientation ? 'mobile' : 'desktop')
    const _0x236ff7 = null === matchMedia || undefined === matchMedia ? undefined : matchMedia('(pointer: coarse)')
    return (
        '(pointer: coarse)' === (null == _0x236ff7 ? undefined : _0x236ff7.media) &&
        (_0x4bb2a5 = _0x236ff7?.matches ? 'mobile' : 'desktop'),
        _0x4bb2a5
    )
}

var __engineInfo = {
    __getGpuVendorFromRenderer: (__renderer) => {
        var __result
        return __renderer
            ? /radeon/i.test(__renderer)
                ? 'AMD'
                : /geforce/i.test(__renderer)
                    ? 'NVIDIA'
                    : (
                        (null ===
                            (__result =
                                /(adreno|amd|apple|intel|llvm|mali|microsoft|nvidia|parallels|powervr|samsung|swiftshader|virtualbox|vmware)/i.exec(
                                    __renderer
                                )) || undefined === __result
                            ? undefined
                            : __result[0]) || 'other'
                    ).toLocaleUpperCase()
            : null
    },
    __webglInfo: {},
    _w: {},
    __getWebglBrandAndVideocardName: (text) => {
        if (!text) return {}
        const result = {}
        function testBrand(brand, regex, text) {
            var _0x50d37a
            for (const rgx of regex) {
                const _0x2e9820 = new RegExp(rgx).exec(text)
                if (_0x2e9820)
                    return (
                        (result.brand = brand),
                        void (result.name = _0x3963a0(
                            (null === (_0x50d37a = null == _0x2e9820 ? undefined : _0x2e9820.groups) ||
                                undefined === _0x50d37a
                                ? undefined
                                : _0x50d37a.videocard_name) || _0x2e9820[0]
                        ))
                    )
            }
        }
        return (
            testBrand(
                'Intel',
                [
                    '^ANGLE \\(Intel Inc\\., Intel\\(R\\)\\s*(?<videocard_name>.+?)\\s*OpenGL Engine',
                    '^ANGLE \\(Intel Inc\\., Intel\\(R\\)\\s*(?<videocard_name>.+?),\\s*OpenGL',
                    '^ANGLE\x20\x5c(Intel\x20Inc\x5c.,\x20Intel\x20(?<videocard_name>.+?)\x5cs*OpenGL\x20Engine,\x20OpenGL',
                    '^(ANGLE \\(Intel, Intel\\(R\\)|ANGLE \\(Intel, Mobile Intel\\(R\\)|ANGLE \\(Mobile Intel\\(R\\)|ANGLE \\(Intel\\(R\\)|ANGLE \\(Intel|Intel)\\s*(?<videocard_name>.+?)\\s*Direct',
                    '^(ANGLE \\(Intel, Intel\\(R\\)|ANGLE \\(Intel, Mobile Intel\\(R\\)|ANGLE \\(Mobile Intel\\(R\\)|ANGLE \\(Intel\\(R\\)|ANGLE \\(Intel|Intel)\\s*(?<videocard_name>.+?)$',
                ],
                text
            ),
            testBrand(
                'Nvidia',
                [
                    '^(ANGLE \\(NVIDIA, NVIDIA|ANGLE \\(NVIDIA)\\s*(?<videocard_name>.+?)\\s*Direct',
                    '^ANGLE\x20\x5c(NVIDIA\x20Corporation,\x20NVIDIA\x5cs*(?<videocard_name>.+?)\x5cs*OpenGL\x20Engine,\x20OpenGL',
                    '^ANGLE \\(NVIDIA Corporation, NVIDIA\\s*(?<videocard_name>.+?)\\s*, OpenGL',
                ],
                text
            ),
            testBrand(
                'ATI',
                [
                    '^ANGLE\x20\x5c(ATI\x20Radeon|ANGLE\x20\x5c(ATI\x20Mobility\x5cs*(?<videocard_name>.+?)\x5cs*Direct',
                    '^ANGLE \\(ATI Technologies Inc., ATI\\s*(?<videocard_name>.+?)\\s*OpenGL Engine, OpenGL',
                ],
                text
            ),
            testBrand(
                'AMD',
                [
                    '^ANGLE \\(AMD, AMD\\s*(?<videocard_name>Radeon\\(TM\\)\\s*.+?)\\s*Direct',
                    "^ANGLE \\(AMD, AMD\\s*(?<videocard_name>Radeon\\s*.+?)\\s*Direct'",
                    '^ANGLE\x20\x5c(AMD\x5cs*(?<videocard_name>Radeon\x5c(TM\x5c)\x5cs*.+?)\x5cs*Direct',
                    '^ANGLE \\(AMD,?\\s*(?<videocard_name>Radeon\\s*.+?)\\s*Direct',
                    '^ANGLE \\((?<videocard_name>Radeon\\s*.+?)\\s*Direct',
                    '^ANGLE \\(AMD\\s*(?<videocard_name>.+?)\\s*Direct',
                    '^ANGLE\x20\x5c(ATI\x20Technologies\x20Inc.,\x20AMD\x5cs*(?<videocard_name>.+?)\x5cs*OpenGL\x20Engine,\x20OpenGL',
                ],
                text
            ),
            text.includes('Google') &&
            text.includes('SwiftShader') &&
            ((result.webgl_brand = 'Google'), (result.webgl_videocard_name = 'Google SwiftShader')),
            testBrand('Microsoft', ['^ANGLE\x20\x5c(Microsoft\x5cs*(?<videocard_name>.+?)\x5cs*Direct'], text),
            testBrand(
                'Apple',
                [
                    '^ANGLE \\(Apple,\\s*(?<videocard_name>.+?),\\s*OpenGL',
                    '^ANGLE \\(Apple,\\s*ANGLE Metal Renderer:\\s*(?<videocard_name>.+?),\\s*Unspecified Version',
                    '\\bApple GPU\\b',
                ],
                text
            ),
            testBrand('Qualcomm', ['^ANGLE \\(Qualcomm,\\s*(?<videocard_name>.+?),\\s*OpenGL'], text),
            testBrand(
                'Imagination Technologies',
                ['^ANGLE \\(Imagination Technologies,\\s*(?<videocard_name>.+?),\\s*OpenGL'],
                text
            ),
            testBrand('ARM', ['^ANGLE \\(ARM,\\s*(?<videocard_name>.+?),\\s*OpenGL'], text),
            __objHasOwnProperties(result)
                ? 'mobile' === __isDesktopOrMobileType()
                    ? {
                        name: [text],
                    }
                    : (__detectResults.Z.setValue('videocard', '1'), null)
                : result
        )
    },
}

    ; (async () => {
        var __webglParameters

        const __drawingOnWebglContext = (__webglContext) => {
            if (!__webglContext) return
            const _0x5dc32a = new Float32Array([0, 0.5, -0.5, 0, 0.5, 0, 0, -0.5]),
                _0x5a695a = __webglContext.createBuffer()
            __webglContext.bindBuffer(__webglContext.ARRAY_BUFFER, _0x5a695a),
                __webglContext.bufferData(__webglContext.ARRAY_BUFFER, _0x5dc32a, __webglContext.STATIC_DRAW)
            const _0x1a0526 = __webglContext.createShader(__webglContext.VERTEX_SHADER)
            __webglContext.shaderSource(
                _0x1a0526,
                '\n        attribute vec2 attrVertex;\n        void main() {\n            gl_Position = vec4(attrVertex, 0, 1);\n        }\n    '
            ),
                __webglContext.compileShader(_0x1a0526)
            const _0x419b3c = __webglContext.createShader(__webglContext.FRAGMENT_SHADER)
            __webglContext.shaderSource(
                _0x419b3c,
                '\n        precision mediump float;\n        uniform vec4 color;\n        void main() {\n            gl_FragColor = color;\n        }\n    '
            ),
                __webglContext.compileShader(_0x419b3c)
            const _0x547495 = __webglContext.createProgram()
            __webglContext.attachShader(_0x547495, _0x1a0526),
                __webglContext.attachShader(_0x547495, _0x419b3c),
                __webglContext.linkProgram(_0x547495),
                __webglContext.useProgram(_0x547495)
            const _0x52e5a7 = __webglContext.getUniformLocation(_0x547495, 'color')
            __webglContext.uniform4f(_0x52e5a7, 0.396078431372549, 0.6745098039215687, 0.984313725490196, 1)
            const _0x2d3f4b = __webglContext.getAttribLocation(_0x547495, 'attrVertex')
            return (
                __webglContext.enableVertexAttribArray(_0x2d3f4b),
                __webglContext.vertexAttribPointer(_0x2d3f4b, 2, __webglContext.FLOAT, false, 0, 0),
                __webglContext.drawArrays(__webglContext.TRIANGLE_STRIP, 0, 4),
                __webglContext
            )
        }
        try {
            const __window = window,
                __document = __window.document
            let __canvas1, __canvas2
            'OffscreenCanvas' in window
                ? ((__canvas1 = new __window.OffscreenCanvas(256, 256)),
                    (__canvas2 = new __window.OffscreenCanvas(256, 256)))
                : ((__canvas1 = __document.createElement('canvas')), (__canvas2 = __document.createElement('canvas')))
            const getCanvasContext = (canvas, contextType) => {
                try {
                    return 'webgl2' == contextType
                        ? canvas.getContext('webgl2') || canvas.getContext('experimental-webgl2')
                        : canvas.getContext('webgl') ||
                        canvas.getContext('experimental-webgl') ||
                        canvas.getContext('moz-webgl') ||
                        canvas.getContext('webkit-3d')
                } catch (_0x2c5b07) {
                    return
                }
            },
                __webglContext = getCanvasContext(__canvas1, 'webgl'),
                __webgl2Context = getCanvasContext(__canvas2, 'webgl2')
            if (!__webglContext) return
            const __getWebglParameterValue = (webglContext) => {
                if (!webglContext) return {}
                const paramName = new Set(
                    [
                        'BLEND_EQUATION',
                        'BLEND_EQUATION_RGB',
                        'BLEND_EQUATION_ALPHA',
                        'BLEND_DST_RGB',
                        'BLEND_SRC_RGB',
                        'BLEND_DST_ALPHA',
                        'BLEND_SRC_ALPHA',
                        'BLEND_COLOR',
                        'CULL_FACE',
                        'BLEND',
                        'DITHER',
                        'STENCIL_TEST',
                        'DEPTH_TEST',
                        'SCISSOR_TEST',
                        'POLYGON_OFFSET_FILL',
                        'SAMPLE_ALPHA_TO_COVERAGE',
                        'SAMPLE_COVERAGE',
                        'LINE_WIDTH',
                        'ALIASED_POINT_SIZE_RANGE',
                        'ALIASED_LINE_WIDTH_RANGE',
                        'CULL_FACE_MODE',
                        'FRONT_FACE',
                        'DEPTH_RANGE',
                        'DEPTH_WRITEMASK',
                        'DEPTH_CLEAR_VALUE',
                        'DEPTH_FUNC',
                        'STENCIL_CLEAR_VALUE',
                        'STENCIL_FUNC',
                        'STENCIL_FAIL',
                        'STENCIL_PASS_DEPTH_FAIL',
                        'STENCIL_PASS_DEPTH_PASS',
                        'STENCIL_REF',
                        'STENCIL_VALUE_MASK',
                        'STENCIL_WRITEMASK',
                        'STENCIL_BACK_FUNC',
                        'STENCIL_BACK_FAIL',
                        'STENCIL_BACK_PASS_DEPTH_FAIL',
                        'STENCIL_BACK_PASS_DEPTH_PASS',
                        'STENCIL_BACK_REF',
                        'STENCIL_BACK_VALUE_MASK',
                        'STENCIL_BACK_WRITEMASK',
                        'VIEWPORT',
                        'SCISSOR_BOX',
                        'COLOR_CLEAR_VALUE',
                        'COLOR_WRITEMASK',
                        'UNPACK_ALIGNMENT',
                        'PACK_ALIGNMENT',
                        'MAX_TEXTURE_SIZE',
                        'MAX_VIEWPORT_DIMS',
                        'SUBPIXEL_BITS',
                        'RED_BITS',
                        'GREEN_BITS',
                        'BLUE_BITS',
                        'ALPHA_BITS',
                        'DEPTH_BITS',
                        'STENCIL_BITS',
                        'POLYGON_OFFSET_UNITS',
                        'POLYGON_OFFSET_FACTOR',
                        'SAMPLE_BUFFERS',
                        'SAMPLES',
                        'SAMPLE_COVERAGE_VALUE',
                        'SAMPLE_COVERAGE_INVERT',
                        'COMPRESSED_TEXTURE_FORMATS',
                        'GENERATE_MIPMAP_HINT',
                        'MAX_VERTEX_ATTRIBS',
                        'MAX_VERTEX_UNIFORM_VECTORS',
                        'MAX_VARYING_VECTORS',
                        'MAX_COMBINED_TEXTURE_IMAGE_UNITS',
                        'MAX_VERTEX_TEXTURE_IMAGE_UNITS',
                        'MAX_TEXTURE_IMAGE_UNITS',
                        'MAX_FRAGMENT_UNIFORM_VECTORS',
                        'SHADING_LANGUAGE_VERSION',
                        'VENDOR',
                        'RENDERER',
                        'VERSION',
                        'MAX_CUBE_MAP_TEXTURE_SIZE',
                        'ACTIVE_TEXTURE',
                        'IMPLEMENTATION_COLOR_READ_TYPE',
                        'IMPLEMENTATION_COLOR_READ_FORMAT',
                        'MAX_RENDERBUFFER_SIZE',
                        'UNPACK_FLIP_Y_WEBGL',
                        'UNPACK_PREMULTIPLY_ALPHA_WEBGL',
                        'UNPACK_COLORSPACE_CONVERSION_WEBGL',
                        'UNMASKED_VENDOR_WEBGL',
                        'UNMASKED_RENDERER_WEBGL',
                        'READ_BUFFER',
                        'UNPACK_ROW_LENGTH',
                        'UNPACK_SKIP_ROWS',
                        'UNPACK_SKIP_PIXELS',
                        'PACK_ROW_LENGTH',
                        'PACK_SKIP_ROWS',
                        'PACK_SKIP_PIXELS',
                        'UNPACK_SKIP_IMAGES',
                        'UNPACK_IMAGE_HEIGHT',
                        'MAX_3D_TEXTURE_SIZE',
                        'MAX_ELEMENTS_VERTICES',
                        'MAX_ELEMENTS_INDICES',
                        'MAX_TEXTURE_LOD_BIAS',
                        'MAX_DRAW_BUFFERS',
                        'DRAW_BUFFER0',
                        'DRAW_BUFFER1',
                        'DRAW_BUFFER2',
                        'DRAW_BUFFER3',
                        'DRAW_BUFFER4',
                        'DRAW_BUFFER5',
                        'DRAW_BUFFER6',
                        'DRAW_BUFFER7',
                        'MAX_FRAGMENT_UNIFORM_COMPONENTS',
                        'MAX_VERTEX_UNIFORM_COMPONENTS',
                        'FRAGMENT_SHADER_DERIVATIVE_HINT',
                        'MAX_ARRAY_TEXTURE_LAYERS',
                        'MIN_PROGRAM_TEXEL_OFFSET',
                        'MAX_PROGRAM_TEXEL_OFFSET',
                        'MAX_VARYING_COMPONENTS',
                        'MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS',
                        'RASTERIZER_DISCARD',
                        'MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS',
                        'MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS',
                        'MAX_COLOR_ATTACHMENTS',
                        'MAX_SAMPLES',
                        'MAX_VERTEX_UNIFORM_BLOCKS',
                        'MAX_FRAGMENT_UNIFORM_BLOCKS',
                        'MAX_COMBINED_UNIFORM_BLOCKS',
                        'MAX_UNIFORM_BUFFER_BINDINGS',
                        'MAX_UNIFORM_BLOCK_SIZE',
                        'MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS',
                        'MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS',
                        'UNIFORM_BUFFER_OFFSET_ALIGNMENT',
                        'MAX_VERTEX_OUTPUT_COMPONENTS',
                        'MAX_FRAGMENT_INPUT_COMPONENTS',
                        'MAX_SERVER_WAIT_TIMEOUT',
                        'TRANSFORM_FEEDBACK_PAUSED',
                        'TRANSFORM_FEEDBACK_ACTIVE',
                        'MAX_ELEMENT_INDEX',
                        'MAX_CLIENT_WAIT_TIMEOUT_WEBGL',
                        'antialias',
                        'MAX_TEXTURE_MAX_ANISOTROPY_EXT',
                        'VERTEX_SHADER.LOW_FLOAT.precision',
                        'VERTEX_SHADER.LOW_FLOAT.rangeMax',
                        'VERTEX_SHADER.LOW_FLOAT.rangeMin',
                        'VERTEX_SHADER.MEDIUM_FLOAT.precision',
                        'VERTEX_SHADER.MEDIUM_FLOAT.rangeMax',
                        'VERTEX_SHADER.MEDIUM_FLOAT.rangeMin',
                        'VERTEX_SHADER.HIGH_FLOAT.precision',
                        'VERTEX_SHADER.HIGH_FLOAT.rangeMax',
                        'VERTEX_SHADER.HIGH_FLOAT.rangeMin',
                        'VERTEX_SHADER.HIGH_INT.precision',
                        'VERTEX_SHADER.HIGH_INT.rangeMax',
                        'VERTEX_SHADER.HIGH_INT.rangeMin',
                        'FRAGMENT_SHADER.LOW_FLOAT.precision',
                        'FRAGMENT_SHADER.LOW_FLOAT.rangeMax',
                        'FRAGMENT_SHADER.LOW_FLOAT.rangeMin',
                        'FRAGMENT_SHADER.MEDIUM_FLOAT.precision',
                        'FRAGMENT_SHADER.MEDIUM_FLOAT.rangeMax',
                        'FRAGMENT_SHADER.MEDIUM_FLOAT.rangeMin',
                        'FRAGMENT_SHADER.HIGH_FLOAT.precision',
                        'FRAGMENT_SHADER.HIGH_FLOAT.rangeMax',
                        'FRAGMENT_SHADER.HIGH_FLOAT.rangeMin',
                        'FRAGMENT_SHADER.HIGH_INT.precision',
                        'FRAGMENT_SHADER.HIGH_INT.rangeMax',
                        'FRAGMENT_SHADER.HIGH_INT.rangeMin',
                        'MAX_DRAW_BUFFERS_WEBGL',
                    ].sort()
                )
                return Object.getOwnPropertyNames(Object.getPrototypeOf(webglContext))
                    .filter((propertyName) => paramName.has(propertyName))
                    .reduce((acc, curr) => {
                        const parameterValue = webglContext.getParameter(webglContext[curr])
                        return (
                            parameterValue && 'buffer' in Object.getPrototypeOf(parameterValue)
                                ? (acc[curr] = [...parameterValue])
                                : (acc[curr] = parameterValue),
                            acc
                        )
                    }, {})
            }
            const __getDebugRendererInfo = (__webglContext) => {
                const debugRendererInfo = __webglContext
                    ? __webglContext.getExtension('WEBGL_debug_renderer_info')
                    : null
                return debugRendererInfo
                    ? {
                        UNMASKED_VENDOR_WEBGL: __webglContext.getParameter(debugRendererInfo.UNMASKED_VENDOR_WEBGL),
                        UNMASKED_RENDERER_WEBGL: __webglContext.getParameter(
                            debugRendererInfo.UNMASKED_RENDERER_WEBGL
                        ),
                    }
                    : {}
            },
                __getSupportedExtensions = (webglContext) =>
                    (webglContext &&
                        (0, __logAndSafeCall.__safeCallFunction)(() => webglContext.getSupportedExtensions())) ||
                    [],
                __getWebglPixels = (webglContext, contextType) => {
                    if (!webglContext)
                        return {
                            dataURI: undefined,
                            pixels: undefined,
                        }
                    try {
                        __drawingOnWebglContext(webglContext)
                        const { drawingBufferWidth: __drawingBufferWidth, drawingBufferHeight: __drawingBufferHeight } =
                            webglContext
                        let __dataUrl = ''
                        if ('OffscreenCanvas' === webglContext.canvas.constructor.name) {
                            const __canvas = document.createElement('canvas')
                            __drawingOnWebglContext(getCanvasContext(__canvas, contextType)),
                                (__dataUrl = __canvas.toDataURL())
                        } else __dataUrl = webglContext.canvas.toDataURL()
                        const bufferWidth = __drawingBufferWidth / 15,
                            bufferHeight = __drawingBufferHeight / 6,
                            buffer = new Uint8Array(bufferWidth * bufferHeight * 4)
                        try {
                            webglContext.readPixels(
                                0,
                                0,
                                bufferWidth,
                                bufferHeight,
                                webglContext.RGBA,
                                webglContext.UNSIGNED_BYTE,
                                buffer
                            )
                        } catch (err) {
                            return {
                                dataURI: __dataUrl,
                                pixels: undefined,
                            }
                        }
                        return {
                            dataURI: __dataUrl,
                            pixels: [...buffer],
                        }
                    } catch (err) { }
                },
                __webglContextData = Object.assign(
                    Object.assign({}, __getWebglParameterValue(__webglContext)),
                    __getDebugRendererInfo(__webglContext)
                ),
                __webgl2ContextData = Object.assign(
                    Object.assign({}, __getWebglParameterValue(__webgl2Context)),
                    __getDebugRendererInfo(__webgl2Context)
                ),
                __webglContextKeys = {
                    ALIASED_LINE_WIDTH_RANGE: true,
                    SHADING_LANGUAGE_VERSION: true,
                    VERSION: true,
                }

            const _0x589dc8 = Object.keys(__webgl2ContextData).filter(
                (webgl2ContextKey) =>
                    !!__webglContextData[webgl2ContextKey] &&
                    !__webglContextKeys[webgl2ContextKey] &&
                    '' + __webglContextData[webgl2ContextKey] != '' + __webgl2ContextData[webgl2ContextKey]
            )
            _0x589dc8.length
            const { dataURI: __webglDataURI } = __getWebglPixels(__webglContext, 'webgl') || {},
                { dataURI: __webgl2DataURI } = __getWebglPixels(__webgl2Context, 'webgl2') || {}

            const __webglData = {
                extensions: [...__getSupportedExtensions(__webglContext), ...__getSupportedExtensions(__webgl2Context)],
                webgl: __webglDataURI,
                webgl2: __webgl2DataURI,
                parameters: Object.assign(
                    {},
                    Object.assign(Object.assign({}, __webglContextData), __webgl2ContextData)
                ),
            },
                __knownHashs = [
                    'fca66520',
                    'b62321c3',
                    'b362c2f5',
                    '0eb2fc19',
                    '55e821f7',
                    '6951838b',
                    '08847ba5',
                    'c00582e9',
                    '6edf1720',
                    '2b80fd96',
                    '6346cf49',
                    '2259b706',
                    'e796b84e',
                    '5a5658f1',
                    '58871380',
                    '5a90a5f8',
                    'cfd20274',
                    '5582debe',
                    'e4569a5b',
                    'f2293447',
                    'c04889b1',
                    '1b251fd7',
                    'ea59b343',
                    'b8ea6e7f',
                    '16c481a6',
                    '58fdc720',
                    'bf06317e',
                    '6294d84e',
                    'e6464c9f',
                    'a397a568',
                    '81b9cd29',
                    '1bfd326c',
                    '70859bdb',
                    '70a095b1',
                    '230d6a0d',
                    '3bf321b8',
                    'c04e374a',
                    'be2dfaea',
                    'f9714b3d',
                    '461f97e1',
                    'd09c1c07',
                    'a1c808d5',
                    '0b2d4333',
                    '5ddb9237',
                    '39ead506',
                    '802e2547',
                    '49bf7358',
                    'c026469d',
                    '581f3282',
                    'f0d5a3c7',
                    '6357365c',
                    'ae2c4777',
                    '849ccb64',
                    'e965d541',
                    '794f8929',
                    '2402c3d2',
                    'e15afab0',
                    '696e1548',
                    'afa583bc',
                    'ea54d525',
                    '5ca55292',
                    'f51cab9a',
                    '087d5759',
                    '8d371161',
                    'd860ff42',
                    '1453d59a',
                    '12e92e62',
                    'b504662d',
                    'cf9643e6',
                    'dd67b076',
                    'a581f55e',
                    'b224cc7c',
                    '2f014c41',
                    '33bc5492',
                    '0fc123c7',
                    'dbdbe7a4',
                    'd2172943',
                    '6864dcb0',
                    '3fea1100',
                    'd913dafa',
                    'd6bf35ad',
                    'a26e9aa9',
                    '171831c5',
                    '534002ab',
                    '12f8ac14',
                    '3ff82303',
                    '99b1a1c6',
                    '74daf866',
                    'fc37fe1f',
                    '6aa1ff7e',
                    'ec928655',
                    '8428fc8e',
                    'd8bd9e5a',
                    '8bd0b91b',
                    '52e348ba',
                    'c2bce496',
                    'e142d1f9',
                    '2f582ed9',
                    '4065cd69',
                    '66628310',
                    '903c8847',
                    '1ff7c7e7',
                    '402e1064',
                    'eb799d34',
                    'ef8f5db1',
                    'e155c47e',
                    '177cc258',
                    '6f81cbe7',
                    '6b290cd4',
                    'f1077334',
                    'd1e76c89',
                    '5d786cef',
                    'eaa13804',
                    'fafa14c0',
                    '2c04c2eb',
                    'c93b5366',
                    '4962ada1',
                    '25a760b8',
                    'bf610cdb',
                    'bcf7315f',
                    '801d73af',
                    '00fe1ec9',
                    '0f39d057',
                    'f8e65486',
                    '3999a5e1',
                    'ad01a422',
                    'dc271c35',
                    'b50edd99',
                    'e68b5c4e',
                    '82a9a2f1',
                    '0cdb985d',
                    'a2383001',
                    'ce2e3d16',
                    'c9bc4ffd',
                    'eed2e5e1',
                    'e10339b3',
                    'f7451c92',
                    '43038e3d',
                    '8541aa4c',
                    'fa994f33',
                    'b2d6fc98',
                    '6a75ae3b',
                    '67995996',
                    '0f840379',
                    'e574bef6',
                    'b5494027',
                    '3660b71f',
                    'a22788f8',
                    'e16bb1bb',
                    'e5962ba3',
                    'c5e9a883',
                    '5ee41456',
                    '3a91d0d6',
                    'c05f7596',
                    'ded74044',
                    'f5d19934',
                    'c79634c2',
                    '18579e83',
                    '1e8a9a79',
                    '508d1625',
                    'd05a66eb',
                    '34270469',
                    'f3c6ea11',
                    '55d3aa56',
                    '7b2e5242',
                    'e965d180',
                    '258789d0',
                    'd2dc2474',
                    'd498797d',
                    'ea7f90ea',
                    'a4d34176',
                    'c04b0635',
                    '02b3eea3',
                    '6b07d4f8',
                    '6c168801',
                    'ab40bece',
                    'a4b988da',
                    '4c9e8f5d',
                    '5aea1af1',
                    '795e5c95',
                    '27db292c',
                    '057857ac',
                    '23d1ce20',
                    '917871e7',
                    'beffda26',
                    '482c81b2',
                    'c092fdf8',
                    '6248d9e3',
                    'e316e4c0',
                    'ade75c4f',
                    '7360ebd1',
                    '300ee927',
                    '5bef9a39',
                    '3740c4c7',
                    '668f0f93',
                    '6dfae3cb',
                    '9b67b7dc',
                    'de793ead',
                    '149a1efa',
                    '79a57aa9',
                    'bfe1c212',
                    '62bf7ef1',
                    '25f9385d',
                    '4027d193',
                    'e9dbb8d5',
                    'cba1878b',
                    '4503e771',
                    'cbeade8c',
                    'c07307c6',
                    'cefb72ca',
                    '623c3bfd',
                    '00b72507',
                    '8219e1a4',
                    '61d9464e',
                    '7238c5dd',
                    'b4d40dcc',
                    '0463627d',
                    '5831d5fd',
                    '0586e20b',
                    '467b99a5',
                    'b10c2a85',
                    'f221fef5',
                    '7b811cdd',
                    '99ef2c3b',
                    '5b6a17aa',
                    'a5a477ae',
                    '19594666',
                    '464d51ac',
                    'a97d3858',
                    '2048bc5a',
                    '6e806ffc',
                    '698c5c2e',
                    '27938830',
                    '66d992e8',
                    'c7e37ca0',
                    '78640859',
                    '502c402c',
                    'd970d345',
                    'ec050bb6',
                    '741688e4',
                    '61178f2a',
                    '9c814c1b',
                    '79284c47',
                    'd734ea08',
                    '101e0582',
                    'ea8f5ad0',
                    '61eecaae',
                    'dcd9a29e',
                    '48af038f',
                    'bb77a469',
                    '85479b99',
                    '0639a81a',
                    'df9daeb6',
                    '9fd76352',
                    '3b724916',
                    '2bb488da',
                    'fe0997b6',
                    '9e2b5e94',
                    'f33d918e',
                    'b8961d15',
                    'a3f9ee34',
                    'a9640880',
                    'bc0f9686',
                    '2d15287f',
                    'aa73f3a4',
                    '00c1b42d',
                ],
                __knownNumbers = [
                    -2147287810, -2147382251, -2147361769, -2147382272, -2147361792, -2145974612, -2145974598, -2147287834,
                    -2147133749, -2146384027, -2147295822, -2146384003, -1147451901, -2147383246, -2145966545, -2147447137,
                    -1147160553, 349912, -2147429201, -2147459031, -2146384011, -1147464177, -2145966535, -2147440422,
                    -1148326739, 1229835, -2147362760, -2147337003, -2147333118, -2147407821, -2147447161, -2147316383,
                    -2146251641, -1147451883, 999156922, -2146286438, -2146286463, -1147464169, -1147168724, -2147136328,
                    -2147382221, -2147447149, -2147287854, -2130659912, -2146253693, -1148678631, -2147387335, -2147361775,
                    -1147602934, -2147365863, -1147419775, -1962919974, -2147466972, -2145966529, -1164279890, -2147385825,
                    -2147361774, 1147714426, -2147287820, -2147336998, -2147461169, -2147475352, -1148572354, -2146384281,
                    -2147361731, -2147304193, -2147389930, -2147386292, -1962928178, -2147344686, -2147447111, -2147447122,
                    998804992, -134823971, -2147447873, -2147346747, -2146286583, -2147389951, -2130164388, 184555483,
                    -2147394188, 1610618841, -1332029332, 2147440438, 351513, -2146400384, -2146187766, -1147160399,
                    1197075, 998911268, -2147295849, -2130164162, -2147385849, -2130164546, -1147765274, -1073719331,
                    -2146417027, -2147365760, 999148597, -1878111124, -677558160, -133757475, -2147128275, -2147453701,
                    -2130172573, -1147419751, -2146526795, -2146236703, -2147410941, -2147415037, -2145974657, -2147306321,
                    -2147378146, -2146237020, -2145966414, -2147453768, -2147291820, -2147470173, -638494755, -1342154787,
                    -2147467172, -2145974489, -1147643759, -2147447892, 83625, -2146232503, -2147295857, -2146253671,
                    -2147316382, -2147429223, -2147390461, -2147291718, -2146526934, -2147447126, -2146384120, 21667,
                    -2145974729, -2147293058, -2146251619, 1099536, -2147142429, -2146379955, -2147365827, -2146400556,
                    -2147295768, -2146251681, -1878102921, -2145974343, 2147475085, -2147394251, -2146232723, -2147400057,
                    -2147414956, -2147439020, -2146319268, -2147406798, -1148680509, -2146277218, 2146590728, -2146400620,
                    -2147414733, -2146376065, -2147387364, -2147386326, -1962893370, -2130164382, -2145933648, -2147447928,
                    -2147448592, -2145974380, -2147133747, -2145941977, -2147407643, -2147447157, -2147300019, 2147479181,
                    -1164800478, -2146232338, -2145974637, -2147453767, -2146401928, -2147365730, -2146384034, -2147475351,
                    -2146232480, -2146236588, -2147447896, -2147295823, -999987216, -2145966441, -2147134974, -1147419753,
                    -2147394484, -16746546, -2146232724, -1148335070, -2146232590, -2146398568, -1164800191, -2147466956,
                    -1147643872, -1148713259, -1147427826, -2147365759, -2147337012, -2145970658, -2147125544, -2147414987,
                    -2147373914, -2147373984, -1147488144, -671082546, -2147361652, -2147374080, -2147287835, -2145974596,
                    1508998, -2147378041, -2147374032, -2147410938, -2145958228, -2147337022, -2147382130, -2147287811,
                ],
                __sortedWebglParameters = __webglData.parameters
                    ? [
                        ...new Set(
                            Object.values(__webglData.parameters)
                                .filter((parameterValue) => parameterValue && 'string' != typeof parameterValue)
                                .flat()
                                .map((parameterValue) => Number(parameterValue))
                        ),
                    ].sort((a, b) => a - b)
                    : undefined

            const __gpuVendorFromRenderer = (0, __engineInfo.__getGpuVendorFromRenderer)(
                null === (__webglParameters = __webglData.parameters) || undefined === __webglParameters
                    ? undefined
                    : __webglParameters.UNMASKED_RENDERER_WEBGL
            ),
                __sortedWebglParametersText = '' + __sortedWebglParameters,
                __webglParametersHash =
                    __gpuVendorFromRenderer && __sortedWebglParametersText
                        ? __textHash([__gpuVendorFromRenderer, __sortedWebglParametersText])
                        : undefined,
                __webglParameterNumber = __sortedWebglParameters
                    ? __sortedWebglParameters.reduce((acc, curr, index) => acc ^ (+curr + index), 0)
                    : undefined
                ; (__engineInfo.__webglInfo.webglParams = __sortedWebglParametersText),
                    (__engineInfo.__webglInfo.webglBrandCapabilities = __webglParametersHash),
                    (__engineInfo.__webglInfo.webglCapabilities = __webglParameterNumber)
            const webglHashOutOfScope = __webglParametersHash && !__knownHashs.includes(__webglParametersHash),
                webglNumberOutOfScope = __webglParameterNumber && !__knownNumbers.includes(__webglParameterNumber)
            webglHashOutOfScope && (__engineInfo._w.WEBGL = true), webglNumberOutOfScope && (__engineInfo._w.WEBGL = true)

            const __gpuInfo = (0, __engineInfo.__getWebglBrandAndVideocardName)(
                __webglData.parameters.UNMASKED_RENDERER_WEBGL
            ),
                result = Object.assign(Object.assign({}, __webglData), {
                    'Unmasked\x20Renderer': __webglData.parameters.UNMASKED_RENDERER_WEBGL,
                    'Unmasked\x20Vendor': __webglData.parameters.UNMASKED_VENDOR_WEBGL,
                    Version: __webglData.parameters.VERSION,
                    videoCard: __gpuInfo,
                    hash: '',
                    lied: !__gpuInfo,
                }),
                resultHash = await __encodeText(result)

            debugger
            return (result.hash = resultHash), result
        } catch (err) {
            debugger
            return void console.log('_webgl error', err)
        }
    })().then((result) => {
        console.log(result)
        debugger
    })
