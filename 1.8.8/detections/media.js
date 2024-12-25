// @ts-check

(async () => {
    {
        try {
            const __timeLogger = (0, __engineInfo.__timeLogger)()
            __timeLogger.start()
            const _0x1ef82c = (() => {
                try {
                    const _0x9ba6db = [
                        'audio/ogg; codecs="vorbis"',
                        'audio/mpeg',
                        'audio/mpegurl',
                        'audio/wav; codecs="1"',
                        'audio/x-m4a',
                        'audio/aac',
                        'video/ogg;\x20codecs=\x22theora\x22',
                        'video/quicktime',
                        'video/mp4;\x20codecs=\x22avc1.42E01E\x22',
                        'video/webm;\x20codecs=\x22vp8\x22',
                        'video/webm; codecs="vp9"',
                        'video/x-matroska',
                    ].sort(),
                        _0x3f434a = document.createElement('video'),
                        _0x4b87fe = new Audio(),
                        _0x11651f = 'MediaRecorder' in window,
                        _0x136e02 = _0x9ba6db.reduce((_0x370d15, _0x14d311) => {
                            const _0x32dec1 = {
                                mimeType: _0x14d311,
                                audioPlayType: _0x4b87fe.canPlayType(_0x14d311),
                                videoPlayType: _0x3f434a.canPlayType(_0x14d311),
                                mediaSource: MediaSource.isTypeSupported(_0x14d311),
                                mediaRecorder: !!_0x11651f && MediaRecorder.isTypeSupported(_0x14d311),
                            }
                            return _0x32dec1.audioPlayType ||
                                _0x32dec1.videoPlayType ||
                                _0x32dec1.mediaSource ||
                                _0x32dec1.mediaRecorder
                                ? (_0x370d15.push(_0x32dec1), _0x370d15)
                                : _0x370d15
                        }, [])
                    return _0x136e02
                } catch (_0x38d76d) {
                    return
                }
            })(),
                _0x268680 = __timeLogger.stop(),
                _0x34f072 = {
                    mimeTypes: _0x1ef82c,
                },
                _0xe3b395 = yield(0, _0x3c078b.__encodeText)(_0x34f072)
            return (_0x34f072.hash = _0xe3b395), (_0x34f072.computingTime = _0x268680), _0x34f072
        } catch (_0x366034) {
            return
        }
    }
})().then(result => {
    debugger;
    console.log(result);
})