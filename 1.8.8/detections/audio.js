// @ts-check

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
};

var __engineInfo = {
    __isSpiderMonkey: false,
    __isJavaScriptCore: false,
    _w: {
        AUDIO: false
    }
}

var __audioSamples = [138.82776178733704, 57.62998059540383, 36.69901647402482, 26.998815175840335];

var _0x913e37 = {
    isChromium: function () {
        return true;
    }
}

var __logAndSafeCall = {
    __safeCallFunction: function (fn) {
        try {
            return fn();
        } catch (err) {
            console.error(err);
            return;
        }
    }
}

function _0x3b07d0(_0x20fd81) {
    for (var _0x51bc61 = 0, _0xbe35 = 0; _0xbe35 < _0x20fd81.length; ++_0xbe35)
        _0x51bc61 += Math.abs(_0x20fd81[_0xbe35])
    return _0x51bc61
}


var __OfflineAudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContex,
    __getOfflineAudioContextResult4 = function (_0x17ae7a) {
        var _0x101ba6, _0x5cde26, _0x3888a6
        return (
            (_0x101ba6 = new __OfflineAudioContext(1, _0x17ae7a, 44100)),
            ((_0x5cde26 = _0x101ba6.createOscillator()).type = 'triangle'),
            (_0x5cde26.frequency.value = 1000),
            ((_0x3888a6 = _0x101ba6.createDynamicsCompressor()).threshold.value =
                -50),
            (_0x3888a6.knee.value = 40),
            (_0x3888a6.ratio.value = 12),
            (_0x3888a6.attack.value = 0),
            (_0x3888a6.release.value = 0.2),
            _0x5cde26.connect(_0x3888a6),
            _0x3888a6.connect(_0x101ba6.destination),
            _0x5cde26.start(),
            new Promise(function (_0x41d937) {
                ; (_0x101ba6.oncomplete = function (_0x45a0c4) {
                    var _0x439749 = _0x3b07d0(
                        _0x45a0c4.renderedBuffer.getChannelData(0)
                    )
                    _0x41d937(_0x439749)
                }),
                    _0x101ba6.startRendering()
            }).finally(function () {
                return _0x5cde26.disconnect()
            })
        )
    };

const __randomNum = Math.random();
async function __getOfflineAudioContextResult2() {
    const _0x33c092 = new OfflineAudioContext(1, 100, 44100),
        _0x123c3e = _0x33c092.createOscillator()
    return (
        (_0x123c3e.frequency.value = 0),
        _0x123c3e.start(0),
        _0x33c092.startRendering(),
        new Promise((_0x480354) => {
            _0x33c092.oncomplete = (_0x1bfec7) => {
                var _0x52a908, _0x112473
                const _0x3c4d69 =
                    null === (_0x112473 = (_0x52a908 = _0x1bfec7.renderedBuffer).getChannelData) ||
                        void 0 === _0x112473
                        ? void 0
                        : _0x112473.call(_0x52a908, 0)
                _0x3c4d69 || _0x480354(false), _0x480354('' + [...new Set(_0x3c4d69)] != '0')
            }
        }).finally(() => _0x123c3e.disconnect())
    )
}

async function __getOfflineAudioContextResult3() {
    function _0x4504a7(_0x2a76a2) {
        for (var _0x13341d = 0, _0x4f4e0e = 0; _0x4f4e0e < _0x2a76a2.length; ++_0x4f4e0e)
            _0x13341d += Math.abs(_0x2a76a2[_0x4f4e0e])
        return _0x13341d
    }

    var _0x41db81, _0x2f388f, _0x208c38;
    return (
        (_0x41db81 = window.OfflineAudioContext || window.webkitOfflineAudioContex),
        (_0x2f388f = new _0x41db81(1, 1000, 44100)),
        (_0x208c38 = _0x2f388f.createOscillator()),

        new Promise(function (_0xaf8dc4) {
            ; (_0x208c38.type = 'square'), (_0x208c38.frequency.value = 0)
            var _0x58e28c = _0x2f388f.createDynamicsCompressor()
                ; (_0x58e28c.threshold.value = -50),
                    (_0x58e28c.knee.value = 40),
                    (_0x58e28c.ratio.value = 12),
                    (_0x58e28c.attack.value = 0),
                    (_0x58e28c.release.value = 0.2),
                    _0x208c38.connect(_0x58e28c),
                    _0x58e28c.connect(_0x2f388f.destination),
                    _0x208c38.start(),
                    (_0x2f388f.oncomplete = function (_0x3a50b4) {
                        var _0x12d926 = _0x4504a7(
                            _0x3a50b4.renderedBuffer.getChannelData(0)
                        ),
                            _0x401ddc = 0 === Math.floor(_0x12d926)
                        _0xaf8dc4(_0x401ddc)
                    }),
                    _0x2f388f.startRendering()
        })
            .catch(function (_0x47cde1) {
                return console.log('e', _0x47cde1)
            })
            .finally(function () {
                return _0x208c38.disconnect()
            })
    )
}

async function __getOfflineAudioContextResult() {
    var __getFloatFrequencyData, _0x1ec79b, _0xd3f0d6
    try {
        try {
            window.OfflineAudioContext = OfflineAudioContext || webkitOfflineAudioContext
        } catch (err) { }
        if (!window.OfflineAudioContext) return
        let _0x78ae56 = false
        const __audioLength = 5000,
            __offlineAudioContext = new OfflineAudioContext(1, __audioLength, 44100),
            __createAnalyser = __offlineAudioContext.createAnalyser(),
            __createOscillator = __offlineAudioContext.createOscillator(),
            __createDynamicsCompressor = __offlineAudioContext.createDynamicsCompressor(),
            __createBiquadFilter = __offlineAudioContext.createBiquadFilter(),
            __frequencyBinCount = new Float32Array(__createAnalyser.frequencyBinCount)
        if (
            (null === (__getFloatFrequencyData = __createAnalyser.getFloatFrequencyData) ||
                void 0 === __getFloatFrequencyData ||
                __getFloatFrequencyData.call(__createAnalyser, __frequencyBinCount),
                new Set(__frequencyBinCount).size > 1)
        ) {
            _0x78ae56 = true
            const _0x4f7898 = '3'
            __detectResults.Z.setValue('audio', _0x4f7898)
        }
        const __info = {
            'AnalyserNode.channelCount': (0, __logAndSafeCall.__safeCallFunction)(() => __createAnalyser.channelCount),
            'AnalyserNode.channelCountMode': (0, __logAndSafeCall.__safeCallFunction)(() => __createAnalyser.channelCountMode),
            'AnalyserNode.channelInterpretation': (0, __logAndSafeCall.__safeCallFunction)(
                () => __createAnalyser.channelInterpretation
            ),
            'AnalyserNode.context.sampleRate': (0, __logAndSafeCall.__safeCallFunction)(
                () => __createAnalyser.context.sampleRate
            ),
            'AnalyserNode.fftSize': (0, __logAndSafeCall.__safeCallFunction)(() => __createAnalyser.fftSize),
            'AnalyserNode.frequencyBinCount': (0, __logAndSafeCall.__safeCallFunction)(() => __createAnalyser.frequencyBinCount),
            'AnalyserNode.maxDecibels': (0, __logAndSafeCall.__safeCallFunction)(() => __createAnalyser.maxDecibels),
            'AnalyserNode.minDecibels': (0, __logAndSafeCall.__safeCallFunction)(() => __createAnalyser.minDecibels),
            'AnalyserNode.numberOfInputs': (0, __logAndSafeCall.__safeCallFunction)(() => __createAnalyser.numberOfInputs),
            'AnalyserNode.numberOfOutputs': (0, __logAndSafeCall.__safeCallFunction)(() => __createAnalyser.numberOfOutputs),
            'AnalyserNode.smoothingTimeConstant': (0, __logAndSafeCall.__safeCallFunction)(
                () => __createAnalyser.smoothingTimeConstant
            ),
            'AnalyserNode.context.listener.forwardX.maxValue': (0, __logAndSafeCall.__safeCallFunction)(() =>
                (0, __logAndSafeCall.YU)(() => __createAnalyser.context.listener.forwardX.maxValue)
            ),
            'BiquadFilterNode.gain.maxValue': (0, __logAndSafeCall.__safeCallFunction)(() => __createBiquadFilter.gain.maxValue),
            'BiquadFilterNode.frequency.defaultValue': (0, __logAndSafeCall.__safeCallFunction)(
                () => __createBiquadFilter.frequency.defaultValue
            ),
            'BiquadFilterNode.frequency.maxValue': (0, __logAndSafeCall.__safeCallFunction)(
                () => __createBiquadFilter.frequency.maxValue
            ),
            'DynamicsCompressorNode.attack.defaultValue': (0, __logAndSafeCall.__safeCallFunction)(
                () => __createDynamicsCompressor.attack.defaultValue
            ),
            'DynamicsCompressorNode.knee.defaultValue': (0, __logAndSafeCall.__safeCallFunction)(
                () => __createDynamicsCompressor.knee.defaultValue
            ),
            'DynamicsCompressorNode.knee.maxValue': (0, __logAndSafeCall.__safeCallFunction)(
                () => __createDynamicsCompressor.knee.maxValue
            ),
            'DynamicsCompressorNode.ratio.defaultValue': (0, __logAndSafeCall.__safeCallFunction)(
                () => __createDynamicsCompressor.ratio.defaultValue
            ),
            'DynamicsCompressorNode.ratio.maxValue': (0, __logAndSafeCall.__safeCallFunction)(
                () => __createDynamicsCompressor.ratio.maxValue
            ),
            'DynamicsCompressorNode.release.defaultValue': (0, __logAndSafeCall.__safeCallFunction)(
                () => __createDynamicsCompressor.release.defaultValue
            ),
            'DynamicsCompressorNode.release.maxValue': (0, __logAndSafeCall.__safeCallFunction)(
                () => __createDynamicsCompressor.release.maxValue
            ),
            'DynamicsCompressorNode.threshold.defaultValue': (0, __logAndSafeCall.__safeCallFunction)(
                () => __createDynamicsCompressor.threshold.defaultValue
            ),
            'DynamicsCompressorNode.threshold.minValue': (0, __logAndSafeCall.__safeCallFunction)(
                () => __createDynamicsCompressor.threshold.minValue
            ),
            'OscillatorNode.detune.maxValue': (0, __logAndSafeCall.__safeCallFunction)(() => __createOscillator.detune.maxValue),
            'OscillatorNode.detune.minValue': (0, __logAndSafeCall.__safeCallFunction)(() => __createOscillator.detune.minValue),
            'OscillatorNode.frequency.defaultValue': (0, __logAndSafeCall.__safeCallFunction)(
                () => __createOscillator.frequency.defaultValue
            ),
            'OscillatorNode.frequency.maxValue': (0, __logAndSafeCall.__safeCallFunction)(
                () => __createOscillator.frequency.maxValue
            ),
            'OscillatorNode.frequency.minValue': (0, __logAndSafeCall.__safeCallFunction)(
                () => __createOscillator.frequency.minValue
            ),
        },
            _0x44418b = (offlineAudioContext) =>
                new Promise((resolve) => {
                    const _0xf394dc = offlineAudioContext.createAnalyser(),
                        _0x1c0f3f = offlineAudioContext.createOscillator(),
                        _0x42aae4 = offlineAudioContext.createDynamicsCompressor()
                    try {
                        ; (_0x1c0f3f.type = 'triangle'),
                            (_0x1c0f3f.frequency.value = 10000),
                            (_0x42aae4.threshold.value = -50),
                            (_0x42aae4.knee.value = 40),
                            (_0x42aae4.attack.value = 0)
                    } catch (_0x4bd655) { }
                    return (
                        _0x1c0f3f.connect(_0x42aae4),
                        _0x42aae4.connect(_0xf394dc),
                        _0x42aae4.connect(offlineAudioContext.destination),
                        _0x1c0f3f.start(0),
                        offlineAudioContext.startRendering(),
                        offlineAudioContext.addEventListener('complete', (_0x321650) => {
                            var _0x1aac8b
                            try {
                                _0x42aae4.disconnect(), _0x1c0f3f.disconnect()
                                const _0x87c786 = new Float32Array(_0xf394dc.frequencyBinCount)
                                null === (_0x1aac8b = _0xf394dc.getFloatFrequencyData) ||
                                    void 0 === _0x1aac8b ||
                                    _0x1aac8b.call(_0xf394dc, _0x87c786)
                                const _0x481a4c = new Float32Array(_0xf394dc.fftSize)
                                return (
                                    'getFloatTimeDomainData' in _0xf394dc &&
                                    _0xf394dc.getFloatTimeDomainData(_0x481a4c),
                                    resolve({
                                        floatFrequencyData: _0x87c786,
                                        floatTimeDomainData: _0x481a4c,
                                        buffer: _0x321650.renderedBuffer,
                                        compressorGainReduction:
                                            _0x42aae4.reduction.value || _0x42aae4.reduction,
                                    })
                                )
                            } catch (_0x3d3fdc) {
                                return resolve(null)
                            }
                        })
                    )
                })
        const [_0x4d8061, _0x56d66a] = await Promise.all([
            _0x44418b(new OfflineAudioContext(1, __audioLength, 44100)),
            __getOfflineAudioContextResult2().catch(() => false),
        ]),
            {
                floatFrequencyData: _0x7cca35,
                floatTimeDomainData: _0x392d0b,
                buffer: _0x435ed7,
                compressorGainReduction: _0x5554f9,
            } = _0x4d8061 || {},
            _0x1d5314 = (_0x4e5986, _0x16edb2, _0x241741) => {
                const _0x3bd46f = []
                for (let _0x5a8f7d = _0x16edb2; _0x5a8f7d < _0x241741; _0x5a8f7d++)
                    _0x3bd46f.push(_0x4e5986[_0x5a8f7d])
                return _0x3bd46f
            },
            _0x3c4b1f = (_0x879f88) =>
                _0x879f88
                    ? [..._0x879f88].reduce(
                        (_0xaf438a, _0x52b4f4) => _0xaf438a + Math.abs(_0x52b4f4),
                        0
                    )
                    : 0,
            _0x35bd06 = _0x3c4b1f(_0x7cca35),
            _0x5d10b5 = _0x3c4b1f(_0x392d0b)
        const _0x28d0a5 = new Float32Array(__audioLength)
        let _0x13711b = new Float32Array()
        _0x435ed7 &&
            (null === (_0x1ec79b = _0x435ed7.copyFromChannel) ||
                void 0 === _0x1ec79b ||
                _0x1ec79b.call(_0x435ed7, _0x28d0a5, 0),
                (_0x13711b =
                    (null === (_0xd3f0d6 = _0x435ed7.getChannelData) || void 0 === _0xd3f0d6
                        ? void 0
                        : _0xd3f0d6.call(_0x435ed7, 0)) || []))
        const _0x31afa6 = _0x1d5314([..._0x28d0a5], 4500, 4600),
            _0x5edce6 = _0x1d5314([..._0x13711b], 4500, 4600),
            _0xb7b766 = _0x3c4b1f(_0x1d5314([..._0x13711b], 4500, __audioLength))
        _0x56d66a && ((_0x78ae56 = true), __detectResults.Z.setValue('audio', '1'))
        const _0x1a83da = '' + _0x5edce6 == '' + _0x31afa6,
            _0x1c91b8 = 'copyFromChannel' in AudioBuffer.prototype
        if (_0x1c91b8 && !_0x1a83da) {
            _0x78ae56 = true
            const _0x58bcbc = '2'
            __detectResults.Z.setValue('audio', _0x58bcbc)
        }
        const _0x2a8a7a = new Set([..._0x13711b]).size
        const _0x5edf2a = (_0x43ad55, _0x40b7b8) =>
            Math.floor(Math.random() * (_0x40b7b8 - _0x43ad55 + 1)) + _0x43ad55,
            _0x3eadf2 = (_0x5d1c33, _0x59d36f, _0xb32d3b) => {
                const { length: _0x8da1a9 } = _0x59d36f,
                    _0x5e0a94 = _0x5edf2a(275, _0x8da1a9 - 21),
                    _0x372d6c = _0x5e0a94 + 10,
                    _0x515c01 = _0x5e0a94 + 20
                    ; (_0x59d36f.getChannelData(0)[_0x5e0a94] = _0x5d1c33),
                        (_0x59d36f.getChannelData(0)[_0x372d6c] = _0x5d1c33),
                        (_0x59d36f.getChannelData(0)[_0x515c01] = _0x5d1c33),
                        _0x59d36f.copyFromChannel(_0xb32d3b, 0)
                const _0x9516b = [
                    0 === _0x59d36f.getChannelData(0)[_0x5e0a94] ? Math.random() : 0,
                    0 === _0x59d36f.getChannelData(0)[_0x372d6c] ? Math.random() : 0,
                    0 === _0x59d36f.getChannelData(0)[_0x515c01] ? Math.random() : 0,
                ]
                return [...new Set([..._0x59d36f.getChannelData(0), ..._0xb32d3b, ..._0x9516b])].filter(
                    (_0x5dacbe) => 0 !== _0x5dacbe
                )
            },
            _0xfef025 = (_0x250dfb, _0x477081, _0x2bb853) => {
                _0x477081.copyToChannel(
                    _0x2bb853.map(() => _0x250dfb),
                    0
                )
                const _0x2a2758 = _0x477081.getChannelData(0)[0],
                    _0x57f6c0 = [..._0x477081.getChannelData(0)].map((_0x334f11) =>
                        _0x334f11 === _0x2a2758 && _0x334f11 ? _0x334f11 : Math.random()
                    )
                return _0x57f6c0.filter((_0x250a59) => _0x250a59 !== _0x2a2758)
            },
            _0x1ebc61 = () => {
                const _0x11a846 = 2000
                try {
                    const _0x36cc28 = [
                        ...new Set([
                            ..._0x3eadf2(
                                __randomNum,
                                new AudioBuffer({
                                    length: _0x11a846,
                                    sampleRate: 0xac44,
                                }),
                                new Float32Array(_0x11a846)
                            ),
                            ..._0xfef025(
                                __randomNum,
                                new AudioBuffer({
                                    length: _0x11a846,
                                    sampleRate: 0xac44,
                                }),
                                new Float32Array(_0x11a846)
                            ),
                        ]),
                    ]
                    return +(
                        1 !== _0x36cc28.length &&
                        _0x36cc28.reduce((_0x5ca673, _0x4f2d73) => _0x5ca673 + +_0x4f2d73, 0)
                    )
                } catch (_0x5d665a) {
                    return console.error(_0x5d665a), 0
                }
            },
            _0x8b54d1 =
                _0x1ebc61() ||
                [...new Set(_0x13711b.slice(0, 100))].reduce(
                    (_0x4ce1e5, _0x1c99ef) => _0x4ce1e5 + _0x1c99ef,
                    0
                )
        const _0x1b881e = {
            '-20.538286209106445,164537.64796829224,502.5999283068122': [124.04347527516074],
            '-20.538288116455078,164537.64796829224,502.5999283068122': [124.04347527516074],
            '-20.538288116455078,164537.64795303345,502.5999283068122': [
                124.04347527516074, 124.04347518575378, 124.04347519320436, 124.04347523045726,
            ],
            '-20.538286209106445,164537.64805984497,502.5999283068122': [124.04347527516074],
            '-20.538288116455078,164537.64805984497,502.5999283068122': [
                124.04347527516074, 124.04347518575378, 124.04347520065494, 124.04347523790784,
                124.043475252809, 124.04347526025958, 124.04347522300668, 124.04347523045726,
                124.04347524535842,
            ],
            '-20.538288116455078,164881.9727935791,502.59990317908887': [124.04344884395687],
            '-20.538288116455078,164881.9729309082,502.59990317908887': [124.04344884395687],
            '-20.538286209106445,164882.2082748413,502.59990317911434': [124.0434488439787],
            '-20.538288116455078,164882.20836639404,502.59990317911434': [124.0434488439787],
            '-20.538286209106445,164863.45319366455,502.5999033495791': [124.04344968475198],
            '-20.538288116455078,164863.45319366455,502.5999033495791': [
                124.04344968475198, 124.04375314689969, 124.04341541208123,
            ],
            '-20.538288116455078,164531.82670593262,502.59992767886797': [
                124.04347503720783, 124.04347494780086, 124.04347495525144, 124.04347499250434,
                124.0434750074055,
            ],
            '-20.538286209106445,164540.1567993164,502.59992209258417': [124.04347657808103],
            '-20.538288116455078,164540.1567993164,502.59992209258417': [
                124.04347657808103, 124.0434765110258, 124.04347656317987, 124.04347657063045,
                124.04378004022874,
            ],
            '-20.538288116455078,164540.1580810547,502.59992209258417': [124.04347657808103],
            '-20.535268783569336,164940.360786438,502.69695458233764': [124.080722568091],
            '-20.538288116455078,164538.55073928833,502.5999307175407': [124.04347730590962],
            '-20.535268783569336,164948.14596557617,502.6969545823631': [124.08072256811283],
            '-20.535268783569336,164926.65912628174,502.6969610930064': [124.08072766105033],
            '-20.535268783569336,164932.96168518066,502.69696179985476': [124.08072787802666],
            '-20.535268783569336,164931.54252624512,502.6969617998802': [124.08072787804849],
            '-20.535268783569336,164591.9659729004,502.6969925059784': [124.08074500028306],
            '-20.535268783569336,164590.4111480713,502.6969947774742': [124.0807470110085],
            '-20.535268783569336,164590.41115570068,502.6969947774742': [124.0807470110085],
            '-20.535268783569336,164593.64263916016,502.69700490119067': [124.08075528279005],
            '-20.535268783569336,164595.0285797119,502.69700578315314': [124.08075643483608],
            '-20.538288116455078,164860.96576690674,502.6075748118915': [124.0434496279413],
            '-20.538288116455078,164860.9938583374,502.6073723861407': [124.04344962817413],
            '-20.538288116455078,164862.14078521729,502.59991004130643': [124.04345734833623],
            '-20.538288116455078,164534.50047683716,502.61542110471055': [124.04347520368174],
            '-20.538288116455078,164535.1324043274,502.6079200572931': [124.04347521997988],
            '-20.538288116455078,164535.51135635376,502.60633126448374': [124.04347522952594],
            '-31.509262084960938,167722.6894454956,148.42717787250876': [35.7383295930922],
            '-31.509262084960938,167728.72756958008,148.427184343338': [35.73833402246237],
            '-31.50218963623047,167721.27517700195,148.47537828609347': [35.74996031448245],
            '-31.502185821533203,167727.52931976318,148.47542023658752': [35.7499681673944],
            '-31.502185821533203,167700.7530517578,148.475412953645': [35.749968223273754],
            '-31.502187728881836,167697.23177337646,148.47541113197803': [35.74996626004577],
            '-20.538288116455078,164873.80361557007,502.59989904452596': [124.0434485301812],
            '-20.538288116455078,164863.47760391235,502.5999033453372': [124.0434496849557],
            '-20.538288116455078,164876.62466049194,502.5998911961724': [124.043453265891],
            '-20.538288116455078,164862.14879989624,502.59991004130643': [124.04345734833623],
            '-20.538288116455078,164896.54167175293,502.5999054916465': [124.04345808873768],
            '-29.837873458862305,163206.43050384521,0': [35.10892717540264],
            '-29.837873458862305,163224.69785308838,0': [35.10892752557993],
            '-29.83786964416504,163209.17245483398,0': [35.10893232002854],
            '-29.83786964416504,163202.77336883545,0': [35.10893253237009],
        }
        _0x8b54d1 && ((_0x78ae56 = true), __detectResults.Z.setValue('audio', '4'))
        const _0x58578f = _0x1b881e['' + [_0x5554f9, _0x35bd06, _0x5d10b5]]
        _0x58578f && !_0x58578f.includes(_0xb7b766) && (__engineInfo._w.AUDIO = true)
        const _0x23eee0 = await __getOfflineAudioContextResult3(),
            _0x38fecf = await new Promise(function (_0x2e8163) {
                var _0x2c8274 = [1000, 2000, 3000, 4000, 5000].map(function (_0x3d744f) {
                    return __getOfflineAudioContextResult4(_0x3d744f)
                })
                Promise.all(_0x2c8274).then(function (_0x283e3e) {
                    var _0x3c57d5 = (function (_0x1aa6e0) {
                        for (
                            var _0x4c2e44 = [], _0x491e4c = 1;
                            _0x491e4c < _0x1aa6e0.length;
                            _0x491e4c++
                        ) {
                            var _0x557dd4 =
                                ((_0x1aa6e0[_0x491e4c] - _0x1aa6e0[_0x491e4c - 1]) /
                                    _0x1aa6e0[_0x491e4c - 1]) *
                                100
                            _0x4c2e44.push(_0x557dd4)
                        }
                        return _0x4c2e44
                    })(_0x283e3e),
                        _0x5543d6 = true
                    __audioSamples.forEach(function (_0x23da86, _0x51c0af) {
                        var _0x480e15 = _0x23da86 - 1,
                            _0x229130 = _0x23da86 + 1
                            ; (_0x3c57d5[_0x51c0af] >= _0x480e15 && _0x3c57d5[_0x51c0af] <= _0x229130) ||
                                (_0x5543d6 = false)
                    }),
                        _0x2e8163(_0x5543d6)
                })
            })
            ; (_0x23eee0 && _0x38fecf) ||
                !(0, _0x913e37.__isChromium)() ||
                (__detectResults.Z.setValue('audio', '5'), (_0x78ae56 = true))
        const _0x1197df = {
            totalUniqueSamples: _0x2a8a7a,
            compressorGainReduction: _0x5554f9,
            floatFrequencyDataSum: _0x35bd06,
            floatTimeDomainDataSum: _0x5d10b5,
            sampleSum: _0xb7b766,
            binsSample: _0x5edce6,
            copySample: _0x1c91b8 ? _0x31afa6 : [void 0],
            values: __info,
            noise: _0x8b54d1,
            lied: _0x78ae56,
        };

        return _0x1197df;
    } catch (_0xb88f9d) {
        return
    }
}