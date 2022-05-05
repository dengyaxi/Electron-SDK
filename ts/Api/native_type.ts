import { PluginInfo } from './plugin';

export interface RendererOptions {
  append: boolean;
}

/** screencapture filter window err.
 *
 *
 */
export enum FILT_WINDOW_ERROR {
  /** negative : fail to filter window.
   */
  FILT_WINDOW_ERROR_FAIL = -1,
  /** 0: none define.
   */
  FILT_WINDOW_ERROR_NONE = 0,
}
export interface ScreenCaptureInfo {
  cardType: string;
  errCode: FILT_WINDOW_ERROR;
}

export interface SIZE {
  width: number;
  height: number;
}

/** @zh-cn
 * 网络质量：
 * - 0：质量未知
 * - 1：质量极好
 * - 2：主观感觉和极好差不多，但码率可能略低于极好
 * - 3：主观感受有瑕疵但不影响沟通
 * - 4：勉强能沟通但不顺畅
 * - 5：网络质量非常差，基本不能沟通
 * - 6：网络连接已断开，完全无法沟通
 * - 7：暂时无法检测网络质量
 * - 8：网络质量检测已开始还没完成
 */
/**
 * Network quality types:
 *
 * - 0: The network quality is unknown.
 * - 1: The network quality is excellent.
 * - 2: The network quality is quite good, but the bitrate may be slightly
 * lower than excellent.
 * - 3: Users can feel the communication slightly impaired.
 * - 4: Users cannot communicate smoothly.
 * - 5: The network is so bad that users can barely communicate.
 * - 6: The network is down and users cannot communicate at all.
 * - 7: Users cannot detect the network quality.
 * - 8: Detecting the network quality.
 */
export enum AgoraNetworkQuality {
  /** The network quality is unknown. */
  AgoraNetworkQualityUnknown = 0,
  /** The network quality is excellent. */
  AgoraNetworkQualityExcellent = 1,
  /** The network quality is quite good, but the bitrate may be slightly lower than excellent. */
  AgoraNetworkQualityGood = 2,
  /** Users can feel the communication slightly impaired. */
  AgoraNetworkQualityPoor = 3,
  /** Users can communicate only not very smoothly. */
  AgoraNetworkQualityBad = 4,
  /** The network quality is so bad that users can hardly communicate. */
  AgoraNetworkQualityVBad = 5,
  /** The network is disconnected and users cannot communicate at all. */
  AgoraNetworkQualityDown = 6,
  /** Users cannot detect the network quality. (Not in use.) */
  AgoraNetworkQualityUnsupported = 7,
  /** Detecting the network quality. */
  AgoraNetworkQualityDetecting = 8,
}
/**
 * The codec type of the local video：
 * - 0: VP8
 * - 1: (Default) H.264
 */
export enum VIDEO_CODEC_TYPE {
  /** 1: VP8 */
  VIDEO_CODEC_VP8 = 1,
  /** 2: (Default) H.264 */
  VIDEO_CODEC_H264 = 2,
  /** 3: Enhanced VP8 */
  VIDEO_CODEC_EVP = 3,
  /** 4: Enhanced H.264 */
  VIDEO_CODEC_E264 = 4,
}

/** @zh-cn
 * 用户角色类型：
 * - 1：主播
 * - 2：观众
 */
/**
 * Client roles in the live streaming.
 *
 * - 1: Host.
 * - 2: Audience.
 */
export enum CLIENT_ROLE_TYPE {
  /** 1: Host. A host can both send and receive streams. */
  CLIENT_ROLE_BROADCASTER = 1,
  /** 2: (Default) Audience. An `audience` member can only receive streams. */
  CLIENT_ROLE_AUDIENCE = 2,
}

/**
 * The reason for a user role switch failure.
 *
 * @since v3.7.0
 */
export enum CLIENT_ROLE_CHANGE_FAILED_REASON {
  /** 1: The number of hosts in the channel is already at the upper limit.
   *
   * @note This enumerator is reported only when the support for 128 users is enabled. The maximum number of hosts is based on the actual number of hosts configured when you enable the 128-user feature.
   */
  CLIENT_ROLE_CHANGE_FAILED_BY_TOO_MANY_BROADCASTERS = 1,

  /** 2: The request is rejected by the Agora server. Agora recommends you prompt the user to try to switch their user role again.
   */
  CLIENT_ROLE_CHANGE_FAILED_BY_NOT_AUTHORIZED = 2,

  /** 3: The request is timed out. Agora recommends you prompt the user to check the network connection and try to switch their user role again.
   */
  CLIENT_ROLE_CHANGE_FAILED_BY_REQUEST_TIME_OUT = 3,

  /** 4: The SDK connection fails. You can use `reason` reported in the `connectionStateChanged` callback to troubleshoot the failure.
   */
  CLIENT_ROLE_CHANGE_FAILED_BY_CONNECTION_FAILED = 4,
}

/** @zh-cn
 * 视频流类型：
 * - 0：视频大流，即高分辨率、高码率视频流
 * - 1：视频小流，即低分辨率、低码率视频流
 */
/** Video stream types.
 *
 * - 0: High-stream video.
 * - 1: Low-stream video.
 */
export enum StreamType {
  /** 0: High-stream video. */
  REMOTE_VIDEO_STREAM_HIGH = 0,
  /** 1: Low-stream video. */
  REMOTE_VIDEO_STREAM_LOW = 1,
}
/** Media Device Type.
 * - -1: Unknown device type.
 * - 0: Audio playback device.
 * - 1: Audio recording device.
 * - 2: Video renderer.
 * - 3: Video capturer.
 * - 4: Application audio playback device.
 */
export enum MediaDeviceType {
  /** -1: Unknown device type.
   */
  UNKNOWN_AUDIO_DEVICE = -1,
  /** 0: Audio playback device.
   */
  AUDIO_PLAYOUT_DEVICE = 0,
  /** 1: Audio capturing device.
   */
  AUDIO_RECORDING_DEVICE = 1,
  /** 2: Video renderer.
   */
  VIDEO_RENDER_DEVICE = 2,
  /** 3: Video capturer.
   */
  VIDEO_CAPTURE_DEVICE = 3,
  /** 4: Application audio playback device.
   */
  AUDIO_APPLICATION_PLAYOUT_DEVICE = 4,
}
/**
 * The TranscodingUser class.
 */
export interface TranscodingUser {
  /** @zh-cn
   * 旁路推流的主播用户 ID
   *
   */
  /** User ID of the user displaying the video in the CDN live. */
  uid: number;
  /** @zh-cn
   * 直播视频上用户视频在布局中的横坐标绝对值
   *
   */
  /** Horizontal position from the top left corner of the video frame. */
  x: number;
  /** @zh-cn
   * 直播视频上用户视频在布局中的纵坐标绝对值
   *
   */
  /** Vertical position from the top left corner of the video frame. */
  y: number;
  /** @zh-cn
   * 直播视频上用户视频的宽度，默认值为 360
   *
   */
  /** Width of the video frame. The default value is 360. */
  width: number;
  /** @zh-cn
   * 直播视频上用户视频的高度，默认值为 640
   *
   */
  /** Height of the video frame. The default value is 640. */
  height: number;

  /** @zh-cn
   * 直播视频上用户视频帧的图层编号。取值范围为 [0, 100] 中的整型：
   * - 最小值为 0（默认值），表示该区域图像位于最下层
   * - 最大值为 100，表示该区域图像位于最上层
   */
  /**
   * Layer position of the video frame. The value ranges between 0 and 100.
   *
   * - 0: (Default) Lowest.
   * - 100: Highest.
   */
  zOrder: number;
  /** @zh-cn
   * 直播视频上用户视频的透明度。取值范围为 [0.0, 1.0]。0.0 表示该区域图像完全透
   * 明，而 1.0 表示该区域图像完全不透明。默认值为 1.0。
   */
  /**
   * Transparency of the video frame in CDN live.
   * The value ranges between 0 and 1:
   *
   * - 0: Completely transparent.
   * - 1: (Default) Opaque.
   */
  alpha: number;
  /** @zh-cn
   * 直播音频所在声道。取值范围为 [0, 5]，默认值为 0。选项不为 0 时，需要特殊的播放器支持。
   * - 0：（推荐）默认混音设置，最多支持双声道，与主播端上行音频相关
   * - 1：对应主播的音频，推流中位于 FL 声道。如果主播上行为双声道，会先把多声道混音成单声道
   * - 2：对应主播的音频，推流中位于 FC 声道。如果主播上行为双声道，会先把多声道混音成单声道
   * - 3：对应主播的音频，推流中位于 FR 声道。如果主播上行为双声道，会先把多声道混音成单声道
   * - 4：对应主播的音频，推流中位于 BL 声道。如果主播上行为双声道，会先把多声道混音成单声道
   * - 5：对应主播的音频，推流中位于 BR 声道。如果主播上行为双声道，会先把多声道混音成单声道
   */
  /** The audio channel of the sound.
   * - 0: (Default) Supports dual channels at most, depending on the upstream
   * of the host.
   * - 1: The audio stream of the host uses the FL audio channel.
   * If the upstream of the host uses multiple audio channels,
   * these channels will be mixed into mono first.
   * - 2: The audio stream of the host uses the FC audio channel.
   * If the upstream of the host uses multiple audio channels,
   * these channels will be mixed into mono first.
   * - 3: The audio stream of the host uses the FR audio channel.
   * If the upstream of the host uses multiple audio channels,
   * these channels will be mixed into mono first.
   * - 4: The audio stream of the host uses the BL audio channel.
   * If the upstream of the host uses multiple audio channels,
   * these channels will be mixed into mono first.
   * - 5: The audio stream of the host uses the BR audio channel.
   * If the upstream of the host uses multiple audio channels,
   * these channels will be mixed into mono first.
   */
  audioChannel: number;
}

/** @zh-cn
 * 图像属性。
 * 用于设置直播视频的水印和背景图片的属性。
 */
export interface RtcImage {
  /** @zh-cn
   * 直播视频上图片的 HTTP/HTTPS 地址。字符长度不得超过 1024 字节。
   */
  /**
   * HTTP/HTTPS URL address of the image on the broadcasting video.
   *
   * The maximum length of this parameter is 1024 bytes.
   */
  url: string;
  /** @zh-cn
   * 水印或背景图片在视频帧左上角的横轴坐标。
   */
  /** Horizontal position of the image from the upper left of the
   * broadcasting video.
   */
  x: number;
  /** @zh-cn
   * 水印或背景图片在视频帧左上角的纵轴坐标。
   */
  /** Vertical position of the image from the upper left of the broadcasting
   * video.
   */
  y: number;
  /** @zh-cn
   * 水印或背景图片在视频帧上的宽度。
   */
  /** Width of the image on the broadcasting video. */
  width: number;
  /** @zh-cn
   * 水印或背景图片在视频帧上的高度。
   */
  /** Height of the image on the broadcasting video. */
  height: number;
  /** @zh-cn
   * 水印或背景图片的图层编号。取值范围为 [0,255]：
   * - `0`:（默认）图层的最下层。
   * - `255`: 图层的最上层。
   *
   * @since v3.6.1.4
   */
  /**
   * The layer number of the watermark or background image. The value range is
   * [0,255]:
   * - `0`: (Default) The bottom layer.
   * - `255`: The top layer.
   *
   * @since v3.6.1.4
   */
  zOrder: number;
  /** @zh-cn
   * 水印或背景图片的透明度。取值范围为 [0.0,1.0]：
   * - `0.0`: 完全透明。
   * - `1.0`:（默认）完全不透明。
   *
   * @since v3.6.1.4
   */
  /** The transparency of the watermark or background image. The value range is [0.0,1.0]:
   * - `0.0`: Completely transparent.
   * - `1.0`: (Default) Opaque.
   *
   * @since v3.6.1.4
   */
  alpha: number;
}
/** @zh-cn
 * 直播转码的相关配置。
 */
/**
 * Sets the CDN live audio/video transcoding settings.
 */
export interface TranscodingConfig {
  /** @zh-cn
   * 用于旁路直播的输出视频的总宽度，默认值为 360，单位为像素。
   *
   * - 如果推视频流，`width` 取值范围为 [64,1920]。如果取值低于 64，Agora 服务器会自动
   * 调整为 64；如果取值高于 1920，Agora 服务器会自动调整为 1920。
   * - 如果推音频流，请将 width 和 height 都设为 0。
   */
  /**
   * Width of the video. The default value is 360.
   *
   * When pushing video streams to the CDN, the value range of `width` is
   * [64,1920]. If the value is less than 64, Agora server automatically adjusts
   * it to 64; if the value is greater than 1920, Agora server automatically
   * adjusts it to 1920.
   *
   * When pushing audio streams to the CDN, set the value of width x height to
   * 0 x 0 (px).
   */
  width: number;
  /** @zh-cn
   * 用于旁路直播的输出视频的总高度，默认值为 640，单位为像素。
   *
   * - 如果推视频流，`height` 取值范围为 [64,1080]。如果取值低于 64，Agora 服务器会自动
   * 调整为 64；如果取值高于 1080，Agora 服务器会自动调整为 1080。
   * - 如果推音频流，请将 width 和 height 都设为 0。
   */
  /**
   * Height of the video. The default value is 640.
   *
   * When pushing video streams to the CDN, the value range of `height` is
   * [64,1080]. If the value is less than 64, Agora server automatically adjusts
   * it to 64; if the value is greater than 1080, Agora server automatically
   * adjusts it to 1080.
   *
   * When pushing audio streams to the CDN, set the value of width x height to
   * 0 x 0 (px).
   */
  height: number;
  /** @zh-cn
   * 用于旁路直播的输出视频的码率，单位为 Kbps，默认值为 400 Kbps。
   *
   * 用户可以根据码率参考表中的码率值进行设置；如果设置的码率超出合理范围，
   * Agora 服务器会在合理区间内自动调整码率值。
   */
  /**
   * Bitrate of the CDN live output video stream.
   * The default value is 400 Kbps.
   *
   * Set this parameter according to the Video Bitrate Table.
   *
   * If you set a bitrate beyond the proper range, the SDK automatically
   * adapts it to a value within the range.
   */
  videoBitrate: number;
  /** @zh-cn
   * 用于旁路直播的输出视频的帧率，单位为帧每秒，取值范围为 (0, 30]，
   * 默认值为 15 fps。
   *
   * 服务器会将将高于 30 的帧率设置改为 30。
   */
  /**
   * Frame rate (fps) of the CDN live output video stream.
   * The value range is (0, 30]. The default value is 15.
   *
   * **Note**: Agora adjusts all values over 30 to 30.
   */
  videoFrameRate: number;
  /** @zh-cn
   * @deprecated 从 v2.8.0 起废弃。
   *
   * 是否启用低延时模式：
   * - true：低延时，不保证画质
   * - false：（默认值）高延时，保证画质
   */
  /**
   * Latency mode.
   * - true: Low latency with unassured quality.
   * - false: (Default) High latency with assured quality.
   */
  lowLatency: boolean;
  /** @zh-cn
   * 用于旁路直播的输出视频的 GOP，单位为帧。默认值为 30 帧
   *
   */
  /**
   * Video GOP in frames. The default value is 30 fps.
   */
  videoGop: number;
  /** @zh-cn
   * 用于旁路直播的输出视频的编解码规格。可以设置为 BASELINE、MAIN 或 HIGH；如果设置其他值，服务端会统一设为默认值 HIGH。
   * - VIDEO_CODEC_PROFILE_BASELINE = 66：Baseline 级别的视频编码规格，一般用于视频通话、手机视频等。
   * - VIDEO_CODEC_PROFILE_MAIN = 77：Main 级别的视频编码规格，一般用于主流消费类电子产品，如 mp4、便携的视频播放器、PSP 和 iPad 等
   * - VIDEO_CODEC_PROFILE_HIGH = 100：（默认）High 级别的视频编码规格，一般用于广播及视频碟片存储，高清电视
   */
  /** Self-defined video codec profile.
   * - VIDEO_CODEC_PROFILE_BASELINE = 66: Baseline video codec profile.
   * Generally used in video calls on mobile phones.
   * - VIDEO_CODEC_PROFILE_MAIN = 77: Main video codec profile.
   * Generally used in mainstream electronics, such as MP4 players, portable
   * video players, PSP, and iPads.
   * - VIDEO_CODEC_PROFILE_HIGH = 100: (Default) High video codec profile.
   * Generally used in high-resolution broadcasts or television.
   */
  videoCodecProfile: number;

  /** @zh-cn
   * 用于旁路直播的输出视频的背景色，格式为 RGB 定义下的十六进制整数（不要带 # 号），
   * 如 0xFFB6C1 表示浅粉色。默认0x000000，黑色。
   */
  /**
   * The background color in RGB hex value. Value only, do not include a #.
   * For example, 0xFFB6C1 (light pink). The default value is 0x000000 (black).
   */
  backgroundColor: number;
  /** @zh-cn
   * 用于旁路直播的输出视频的编解码类型。详见 {@link VIDEO_CODEC_TYPE_FOR_STREAM}
   */
  /**
   * The video codec type of the output video stream. See {@link VIDEO_CODEC_TYPE_FOR_STREAM}.
   */
  videoCodecType?: VIDEO_CODEC_TYPE_FOR_STREAM;
   /** @zh-cn
   * 获取旁路直播中的用户人数
   *
   */
  /** The number of users in the live streaming. */
  userCount: number;
  /** @zh-cn
   * 用于旁路直播的输出音频的采样率：
   * - AUDIO_SAMPLE_RATE_32000 = 32000
   * - AUDIO_SAMPLE_RATE_44100 = 44100（默认）
   * - AUDIO_SAMPLE_RATE_48000 = 48000
   */
  /** Self-defined audio-sample rate:
   * - AUDIO_SAMPLE_RATE_32000 = 32000 Hz
   * - AUDIO_SAMPLE_RATE_44100 = (Default)44100 Hz
   * - AUDIO_SAMPLE_RATE_48000 = 48000 Hz
   */
  audioSampleRate: number;
  /** @zh-cn
   * 用于旁路直播的输出音频的声道数，取值范围为 [1, 5] 中的整型，默认值为 1。建议取 1 或 2，其余三个选项需要特殊播放器支持：
   * - 1：单声道
   * - 2：双声道
   * - 3：三声道
   * - 4：四声道
   * - 5：五声道
   */
  /**
   * Agora's self-defined audio-channel types.
   *
   * We recommend choosing option 1 or 2.
   *
   * A special player is required if you choose option 3, 4, or 5:
   * - 1: (Default) Mono.
   * - 2: Two-channel stereo.
   * - 3: Three-channel stereo.
   * - 4: Four-channel stereo.
   * - 5: Five-channel stereo.
   */
  audioChannels: number;
  /** Bitrate of the CDN live audio output stream. The default value is 48
   * Kbps, and the highest value is 128.
   */
  audioBitrate: number;
  /** @zh-cn
   * 预留属性。
   *
   * CDN 推流时，用户自定义发送的信息，可用于填充 H.264 或 H.265 流中 SEI 帧内容。最大长度
   * 不能超过 4096 字节。
   *
   * 详见 [SEI 帧相关问题](https://docs.agora.io/cn/faq/sei)。
   */
  /**
   * The reserved property.
   *
   * Extra user-defined information to send SEI for the H.264 or H.265 stream
   * to the CDN streaming client. The maximum length is 4096 bytes.
   *
   * See [SEI-related FAQ](https://docs.agora.io/en/faq/sei) for more details.
   */
  transcodingExtraInfo: string;
  /** @zh-cn
   * 直播视频上的水印图片。
   *
   * 添加后，所有旁路直播的观众都可以看到水印。
   *
   */
  /** The watermark image added to the CDN live publishing stream. */
  watermark: RtcImage[];
  /**
   * @since v3.2.0
   *
   * The background image added to the CDN live publishing stream.
   *
   * Once a background image is added, the audience of the CDN live publishing
   * stream can see the background image.
   */
  backgroundImage: RtcImage[];

  /** The TranscodingUsers Array. */
  transcodingUsers: TranscodingUser[];

  /** Self-defined audio codec profile: #AUDIO_CODEC_PROFILE_TYPE.
   */
  audioCodecProfile?: AUDIO_CODEC_PROFILE_TYPE;
  /** Advanced features of Media Push with transcoding. See
   * LiveStreamAdvancedFeature.
   *
   * @since v3.1.0
   */
  advancedFeatures?: LiveStreamAdvancedFeature[];
}
/** @zh-cn
 * Last-mile 网络质量探测配置。
 */
/**
 * Configurations of the last-mile network probe test.
 */
export interface LastmileProbeConfig {
  /** @zh-cn
   * 是否探测上行网络。有些用户，如直播频道中的普通观众，不需要进行网络探测：
   * - true：探测
   * - false：不探测
   */
  /**
   * Sets whether or not to test the uplink network. Some users, for example,
   * the audience in a Live-broadcast channel, do not need such a test.
   *
   * - true: test
   * - false: do not test
   */
  probeUplink: boolean;
  /** @zh-cn
   * 是否探测下行网络：
   * - true：探测
   * - false：不探测
   */
  /**
   * Sets whether or not to test the downlink network.
   *
   * - true: test
   * - false: do not test
   */
  probeDownlink: boolean;
  /** @zh-cn
   * 用户期望的最高发送码率，单位为 bps，范围为 [100000, 5000000]。
   */
  /**
   * The expected maximum sending bitrate (bps) of the local user.
   * The value ranges between 100000 and 5000000.
   */
  expectedUplinkBitrate: number;
  /** @zh-cn
   * 用户期望的最高接收码率，单位为 bps，范围为 [100000, 5000000]。
   */
  /**
   * The expected maximum receiving bitrate (bps) of the local user.
   * The value ranges between 100000 and 5000000.
   */
  expectedDownlinkBitrate: number;
}
/** @zh-cn
 * 单向 Last-mile 质量探测结果。
 */
/** The one-way last-mile probe result. */
export interface LastmileProbeOneWayResult {
  /** @zh-cn
   * 丢包率。
   *
   */
  /** The packet loss rate (%). */
  packetLossRate: number;
  /** @zh-cn
   * 网络抖动，单位为毫秒。
   *
   */
  /** The network jitter (ms). */
  jitter: number;
  /** @zh-cn
   * 可用网络带宽预计，单位为 Kbps。
   *
   */
  /** The estimated available bandwidth (Kbps). */
  availableBandwidth: number;
}
/** @zh-cn
 * 上下行 Last-mile 质量探测结果。
 */
/** The uplink and downlink last-mile network probe test result. */
export interface LastmileProbeResult {
  /** @zh-cn
   * Last-mile 质量探测结果的状态，有如下几种：
   * - 1：表示本次 Last-mile 质量探测是完整的
   * - 2：表示本次 Last-mile 质量探测未进行带宽预测，因此结果不完整。一个可能的原因是测试资源暂时受限
   * - 3：未进行 Last-mile 质量探测。一个可能的原因是网络连接中断
   */
  /** States of the last-mile network probe test.
   *
   * - 1: The last-mile network probe test is complete.
   * - 2: The last-mile network probe test is incomplete and the bandwidth
   * estimation is not available, probably due to limited test resources.
   * - 3: The last-mile network probe test is not carried out, probably due
   * to poor network conditions.
   */
  state: number;
  /** @zh-cn
   * 上行网络质量报告，详见 {@link LastmileProbeOneWayResult}。
   */
  /** The uplink last-mile network probe test result.
   * See {@link LastmileProbeOneWayResult}.
   */
  uplinkReport: LastmileProbeOneWayResult;
  /** @zh-cn
   * 下行网络质量报告，详见 {@link LastmileProbeOneWayResult}。
   */
  /** @en-us
   * The downlink last-mile network probe test result.
   * See {@link LastmileProbeOneWayResult}.
   */
  downlinkReport: LastmileProbeOneWayResult;
  /** @zh-cn
   * 往返时延，单位为毫秒。
   */
  /** The round-trip delay time (ms). */
  rtt: number;
}

/** @zh-cn
 * UserInfo 对象。
 */
/** The user information. */
export interface UserInfo {
  /** @zh-cn
   * 用户 ID。
   */
   /** The user ID. */
  uid: number;
  /** @zh-cn
   * 用户 User account。
   */
  /** The user account.
   *
   * The maximum length of this parameter is 255 bytes.
   *
   * Ensure that you set this parameter and do not set it as null.
   */
  userAccount: string;
}
/** @zh-cn
 * 本地语音的变声效果选项。
 *
 * @deprecated 自 v3.2.0 废弃。
 */
/**
 * @deprecated Deprecated from v3.2.0.
 *
 * Local voice changer options.
 */
export enum VoiceChangerPreset {
  /** @zh-cn
   * 原声，即关闭语音变声。
   */
  /**
   * The original voice (no local voice change).
   */
  VOICE_CHANGER_OFF = 0x00000000, //Turn off the voice changer
  /** @zh-cn
   * 变声：老男人。
   */
  /**
   * The voice of an old man.
   */
  VOICE_CHANGER_OLDMAN = 0x00000001,
  /** @zh-cn
   * 变声：小男孩。
   */
  /**
   * The voice of a little boy.
   */
  VOICE_CHANGER_BABYBOY = 0x00000002,
  /** @zh-cn
   * 变声：小女孩。
   */
  /**
   * The voice of a little girl.
   */
  VOICE_CHANGER_BABYGIRL = 0x00000003,
  /** @zh-cn
   * 变声：猪八戒。
   */
  /**
   * The voice of Zhu Bajie, a character in Journey to the West who has a voice like that of a growling bear.
   */
  VOICE_CHANGER_ZHUBAJIE = 0x00000004,
  /** @zh-cn
   * 变声：空灵。
   */
  /**
   * The ethereal voice.
   */
  VOICE_CHANGER_ETHEREAL = 0x00000005,
  /** @zh-cn
   * 变声：绿巨人。
   */
  /**
   * The voice of Hulk.
   */
  VOICE_CHANGER_HULK = 0x00000006,
  /** @zh-cn
   * 美音：浑厚。
   */
  /**
   * A more vigorous voice.
   */
  VOICE_BEAUTY_VIGOROUS = 0x00100001, //7,
  /** @zh-cn
   * 美音：低沉。
   */
  /**
   * A deeper voice.
   */
  VOICE_BEAUTY_DEEP = 0x00100002,
  /** @zh-cn
   * 美音：圆润。
   */
  /**
   * A mellower voice.
   */
  VOICE_BEAUTY_MELLOW = 0x00100003,
  /** @zh-cn
   * 美音：假音。
   */
  /**
   * Falsetto.
   */
  VOICE_BEAUTY_FALSETTO = 0x00100004,
  /** @zh-cn
   * 美音：饱满。
   */
  /**
   * A fuller voice.
   */
  VOICE_BEAUTY_FULL = 0x00100005,
  /** @zh-cn
   * 美音：清澈。
   */
  /**
   * A clearer voice.
   */
  VOICE_BEAUTY_CLEAR = 0x00100006,
  /** @zh-cn
   * 美音：高亢。
   */
  /**
   * A more resounding voice.
   */
  VOICE_BEAUTY_RESOUNDING = 0x00100007,
  /** @zh-cn
   * 美音：嘹亮。
   */
  /**
   * A more ringing voice.
   */
  VOICE_BEAUTY_RINGING = 0x00100008,
  /** @zh-cn
   * 美音：空旷。
   */
  /**
   * A more spatially resonant voice.
   */
  VOICE_BEAUTY_SPACIAL = 0x00100009,
  /** @zh-cn
   * 语聊美声：磁性（男）。此枚举为男声定制化效果，不适用于女声。若女声使用此音效设置，则音频可能会产生失真。
   */
  /**
   * (For male only) A more magnetic voice. Do not use it when the speaker is a female; otherwise, voice distortion occurs.
   */
  GENERAL_BEAUTY_VOICE_MALE_MAGNETIC = 0x00200001,
  /** @zh-cn
   * 语聊美声：清新（女）。此枚举为女声定制化效果，不适用于男声。若男声使用此音效设置，则音频可能会产生失真。
   */
  /**
   * (For female only) A fresher voice. Do not use it when the speaker is a male; otherwise, voice distortion occurs.
   */
  GENERAL_BEAUTY_VOICE_FEMALE_FRESH = 0x00200002,
  /** @zh-cn
   * 语聊美声：活力（女）。此枚举为女声定制化效果，不适用于男声。若男声使用此音效设置，则音频可能会产生失真。
   */
  /**
   * (For female only) A more vital voice. Do not use it when the speaker is a male; otherwise, voice distortion occurs.
   */
  GENERAL_BEAUTY_VOICE_FEMALE_VITALITY = 0x00200003,
}
/** @zh-cn
 * 用于旁路直播的输出视频的编解码类型。
 */
/** The video codec type of the output video stream. */
export enum VIDEO_CODEC_TYPE_FOR_STREAM {
  /** @zh-cn
   * 1:（默认）H.264
   */
  /**
   * 1: (Default) H.264
   */
  VIDEO_CODEC_H264_FOR_STREAM = 1,
  /** @zh-cn
   * 2: H.265
   */
  /**
   * 2: H.265
   */
  VIDEO_CODEC_H265_FOR_STREAM = 2,
}

/** @zh-cn
 * 预设的本地语音混响效果选项。
 *
 * @deprecated 自 v3.2.0 废弃。
 */
/** @deprecated Deprecated from v3.2.0.
 *
 *  Local voice reverberation presets.
 */
export enum AudioReverbPreset {
  /** @zh-cn
   * 原声，即关闭本地语音混响。
   */
  /**
   * Turn off local voice reverberation, that is, to use the original voice.
   */
  AUDIO_REVERB_OFF = 0x00000000, // Turn off audio reverb
  /** @zh-cn
   * KTV（增强版）。
   */
  /**
   * The reverberation style typical of a KTV venue (enhanced).
   */
  AUDIO_REVERB_FX_KTV = 0x00100001,
  /** @zh-cn
   * 演唱会（增强版）。
   */
  /**
   * The reverberation style typical of a concert hall (enhanced).
   */
  AUDIO_REVERB_FX_VOCAL_CONCERT = 0x00100002,
  /** @zh-cn
   * 大叔。
   */
  /**
   * The reverberation style typical of an uncle's voice.
   */
  AUDIO_REVERB_FX_UNCLE = 0x00100003,
  /** @zh-cn
   * 小姐姐。
   */
  /**
   * The reverberation style typical of a little sister's voice.
   */
  AUDIO_REVERB_FX_SISTER = 0x00100004,
  /** @zh-cn
   * 录音棚（增强版）。
   */
  /**
   * The reverberation style typical of a recording studio (enhanced).
   */
  AUDIO_REVERB_FX_STUDIO = 0x00100005,
  /** @zh-cn
   * 流行（增强版）。
   */
  /**
   * The reverberation style typical of popular music (enhanced).
   */
  AUDIO_REVERB_FX_POPULAR = 0x00100006,
  /** @zh-cn
   * R&B（增强版）。
   */
  /**
   * The reverberation style typical of R&B music (enhanced).
   */
  AUDIO_REVERB_FX_RNB = 0x00100007,
  /** @zh-cn
   * 留声机。
   */
  /**
   * The reverberation style typical of the vintage phonograph.
   */
  AUDIO_REVERB_FX_PHONOGRAPH = 0x00100008,
  /** @zh-cn
   * 流行。
   */
  /**
   * The reverberation style typical of popular music.
   */
  AUDIO_REVERB_POPULAR = 0x00000001,
  /** @zh-cn
   * R&B。
   */
  /**
   * The reverberation style typical of R&B music.
   */
  AUDIO_REVERB_RNB = 0x00000002,
  /** @zh-cn
   * 摇滚。
   */
  /**
   * The reverberation style typical of rock music.
   */
  AUDIO_REVERB_ROCK = 0x00000003,
  /** @zh-cn
   * 嘻哈。
   */
  /**
   * The reverberation style typical of hip-hop music.
   */
   AUDIO_REVERB_HIPHOP = 0x00000004,
  /** @zh-cn
   * 演唱会。
   */
  /**
   * The reverberation style typical of a concert hall.
   */
  AUDIO_REVERB_VOCAL_CONCERT = 0x00000005,
  /** @zh-cn
   * KTV。
   */
  /**
   * The reverberation style typical of a KTV venue.
   */
  AUDIO_REVERB_KTV = 0x00000006,
  /** @zh-cn
   * 录音棚。
   */
  /**
   * The reverberation style typical of a recording studio.
   */
  AUDIO_REVERB_STUDIO = 0x00000007,
  /** @zh-cn
   * 虚拟立体声。虚拟立体声是指将单声道的音轨渲染出立体声的效果，使频道内所有用户听到有空间感的声音 效果。
   * 为达到更好的虚拟立体声效果，Agora 推荐在调用该方法前将 `setAudioProfile` 的 `profile` 参数设置为 `5` 。
   */
  /**
   * The reverberation of the virtual stereo. The virtual stereo is an effect that renders the monophonic
   * audio as the stereo audio, so that all users in the channel can hear the stereo voice effect.
   * To achieve better virtual stereo reverberation, Agora recommends setting `profile` in `setAudioProfile`
   * as `5`.
   */
  AUDIO_VIRTUAL_STEREO = 0x00200001,
}
/** @zh-cn
 *
 * 本地采集的画质亮度级别
 *
 * @since v3.3.1
 */
/** The brightness level of the video image captured by the local camera.
 *
 * @since v3.3.1
 */
 export enum CAPTURE_BRIGHTNESS_LEVEL_TYPE {
  /** @zh-cn
   *
   * -1: SDK 未检测出本地采集的画质亮度级别。请等待几秒，通过下一次回调的 `captureBrightnessLevel` 获取亮度级别。
   */
  /** -1: The SDK does not detect the brightness level of the video image.
   * Wait a few seconds to get the brightness level from
   * `CAPTURE_BRIGHTNESS_LEVEL_TYPE` in the next callback.
   */
  CAPTURE_BRIGHTNESS_LEVEL_INVALID = -1,
  /** @zh-cn
   *
   * 0: 本地采集的画质亮度正常。
   */
  /** 0: The brightness level of the video image is normal.
   */
  CAPTURE_BRIGHTNESS_LEVEL_NORMAL = 0,
  /** @zh-cn
   *
   * 1: 本地采集的画质亮度偏亮。
   */
  /** 1: The brightness level of the video image is too bright.
   */
  CAPTURE_BRIGHTNESS_LEVEL_BRIGHT = 1,
  /** @zh-cn
   *
   * 2: 本地采集的画质亮度偏暗。
   */
  /** 2: The brightness level of the video image is too dark.
   */
  CAPTURE_BRIGHTNESS_LEVEL_DARK = 2,
}
/** @zh-cn
 * 外部导入音视频流定义。
 */
/**
 * Configuration of the imported live streaming voice or video stream.
 */
export interface InjectStreamConfig {

  /** @zh-cn
   * 添加进入直播的外部视频源宽度。默认值为 0，即保留视频源原始宽度。
   */
  /**
   * Width of the added stream in the live streaming.
   *
   * The default value is 0 pixel (same width as the original stream).
   */
  width: number;
  /** @zh-cn
   * 添加进入直播的外部视频源高度。默认值为 0，即保留视频源原始高度。
   */
  /**
   * Height of the added stream in the live streaming.
   *
   * The default value is 0 pixel (same height as the original stream).
   */
  height: number;
  /** @zh-cn
   * 添加进入直播的外部视频源码率。默认设置为 400 Kbps。
   */
  /**
   * Video bitrate of the added stream in the live streaming.
   *
   * The default value is 400 Kbps.
   */
  videoBitrate: number;
  /** @zh-cn
   * 添加进入直播的外部视频源帧率。默认值为 15 fps。
   */
  /** Video frame rate of the added stream in the live streaming.
   *
   * The default value is 15 fps.
   */
  videoFramerate: number;
  /** @zh-cn
   * 添加进入直播的外部视频源 GOP。默认值为 30 帧。
   */
  /** Video GOP of the added stream in the live streaming in frames.
   *
   * The default value is 30 fps.
   */
  videoGop: number;
  /** @zh-cn
   * 添加进入直播的外部音频采样率。默认值为 44100。
   * **Note**：声网建议目前采用默认值，不要自行设置。
   * - AUDIO_SAMPLE_RATE_32000 = 32000
   * - AUDIO_SAMPLE_RATE_44100 = 44100（默认）
   * - AUDIO_SAMPLE_RATE_48000 = 48000
   */
  /**
   * Audio-sampling rate of the added stream in the live streaming.
   *
   * The default value is 44100 Hz.
   *
   * **Note**: Agora recommends setting the default value.
   * - AUDIO_SAMPLE_RATE_32000 = 32000 Hz
   * - AUDIO_SAMPLE_RATE_44100 = 44100 Hz
   * - AUDIO_SAMPLE_RATE_48000 = 48000 Hz
   */
  audioSampleRate: number;
  /** @zh-cn
   * 添加进入直播的外部音频码率。单位为 Kbps，默认值为 48。
   * **Note**：声网建议目前采用默认值，不要自行设置。
   */
  /**
   * Audio bitrate of the added stream in the live streaming.
   *
   * The default value is 48 Kbps.
   *
   * **Note**: Agora recommends setting the default value.
   */
  audioBitrate: number;
  /** @zh-cn
   * **Note**：添加进入直播的外部音频频道数。取值范围 [1, 2]，默认值为 1。
   * - 1：单声道（默认）
   * - 2：双声道立体声
   */
  /** Audio channels in the live streaming.
   * - 1: (Default) Mono
   * - 2: Two-channel stereo
   *
   * **Note**: Agora recommends setting the default value.
   */
  audioChannels: number;
}
/** @zh-cn
 * 远端用户媒体流的优先级。
 */
/**
 * The priority of the remote user.
 */
export enum Priority {
  /** @zh-cn
   * 50：用户媒体流的优先级为高。
   */
  /** 50: The user's priority is high. */
  PRIORITY_HIGH = 50,
  /** @zh-cn
   * 100：（默认）用户媒体流的优先级正常。
   */
  /** 100: (Default) The user's priority is normal. */
  PRIORITY_NORMAL = 100,
}
/** @zh-cn
 * 通话相关的统计信息。
 */
/**
 * Statistics of the channel.
 */
export interface RtcStats {
  /** @zh-cn
   * 通话时长，单位为秒，累计值。
   */
  /** Call duration (s), represented by an aggregate value. */
  duration: number;
  /** @zh-cn
   * 发送字节数（bytes），累计值。
   */
  /** Total number of bytes transmitted, represented by an aggregate value. */
  txBytes: number;
  /** @zh-cn
   * 接收字节数（bytes），累计值。
   */
  /** Total number of bytes received, represented by an aggregate value. */
  rxBytes: number;
  /** @zh-cn
   * 发送码率（Kbps），瞬时值。
   */
  /** Transmission bitrate (Kbps), represented by an instantaneous value. */
  txKBitRate: number;
  /** @zh-cn
   * 接收码率（Kbps），瞬时值。
   */
  /** Receive bitrate (Kbps), represented by an instantaneous value. */
  rxKBitRate: number;
  /** @zh-cn
   * 音频接收码率（Kbps），瞬时值。
   */
  /** Audio receive bitrate (Kbps), represented by an instantaneous value. */
  rxAudioKBitRate: number;
  /** @zh-cn
   * 音频包的发送码率（Kbps），瞬时值。
   */
  /** Audio transmission bitrate (Kbps), represented by an instantaneous
   * value.
   */
  txAudioKBitRate: number;
  /** @zh-cn
   * 视频接收码率（Kbps），瞬时值。
   */
  /** Video receive bitrate (Kbps), represented by an instantaneous value. */
  rxVideoKBitRate: number;
  /** @zh-cn
   * 视频发送码率（Kbps），瞬时值。
   */
  /** Video transmission bitrate (Kbps), represented by an instantaneous
   * value.
   */
  txVideoKBitRate: number;
  /** @zh-cn
   * 接收音频字节数（bytes），累计值。
   */
  /**
   * @since 2.9.0
   *
   * Total number of audio bytes received (bytes), represented by an aggregate
   * value.
   */
  rxAudioKBytes: number;
  /** @zh-cn
   * 发送音频字节数（bytes），累计值。
   */
  /**
   * @since 2.9.0
   *
   * Total number of audio bytes sent (bytes), represented by an aggregate
   * value.
   */
  txAudioKBytes: number;
  /** @zh-cn
   * 接收视频字节数（bytes），累计值。
   */
  /**
   * @since 2.9.0
   *
   * Total number of video bytes received (bytes), represented by an aggregate
   * value.
   */
  rxVideoKBytes: number;
  /** @zh-cn
   * 发送视频字节数（bytes），累计值。
   */
  /**
   * @since 2.9.0
   *
   * Total number of video bytes sent (bytes), represented by an aggregate
   * value.
   */
  txVideoKBytes: number;
  /** @zh-cn
   * 客户端到边缘服务器的网络延迟（毫秒）。
   */
  /** Client-server latency(ms). */
  lastmileDelay: number;
  /** @zh-cn
   * 使用抗丢包技术前，客户端到 Agora 边缘服务器的丢包率(%)。
   */
  /** The packet loss rate (%) from the local client to Agora's edge server,
   * before using the anti-packet-loss method.
   */
  txPacketLossRate: number;
  /** @zh-cn
   * 使用抗丢包技术前，Agora 边缘服务器到客户端的丢包率(%)。
   */
  /** The packet loss rate (%) from Agora's edge server to the local client,
   * before using the anti-packet-loss method.
   */
  rxPacketLossRate: number;
  /** @zh-cn
   * 当前频道内的人数。
   */
  /** Number of users in the channel. */
  userCount: number;
  /** @zh-cn
   * 当前应用的 CPU 使用率 (%)。
   */
  /** Application CPU usage (%). */
  cpuAppUsage: number;
  /** @zh-cn
   * 当前系统的 CPU 使用率 (%)。
   */
  /** System CPU usage (%). */
  cpuTotalUsage: number;
  /** @zh-cn
   * @since v3.0.0
   *
   * 客户端到本地路由器的往返时延 (ms)
   */
  /**
   * @since v3.0.0
   *
   * The round-trip time delay from the client to the local router.
   */
  gatewayRtt: number;
  /** @zh-cn
   * @since v3.0.0
   *
   * 当前 App 的内存占比 (%)
   *
   * 该值仅作参考。受系统限制可能无法获取。
   */
  /**
   * @since v3.0.0
   *
   * The memory usage ratio of the app (%).
   *
   * This value is for reference only. Due to system limitations, you may not
   * get the value of this member.
   */
  memoryAppUsageRatio: number;
  /** @zh-cn
   * @since v3.0.0
   *
   * 当前系统的内存占比 (%)
   *
   * 值仅作参考。受系统限制可能无法获取。
   */
  /**
   * @since v3.0.0
   *
   * The memory usage ratio of the system (%).
   *
   * This value is for reference only. Due to system limitations, you may not
   * get the value of this member.
   */
  memoryTotalUsageRatio: number;
  /** @zh-cn
   * @since v3.0.0
   *
   * 当前 App 的内存大小 (KB)
   *
   * 该值仅作参考。受系统限制可能无法获取。
   */
  /**
   * @since v3.0.0
   *
   * The memory usage of the app (KB).
   *
   * This value is for reference only. Due to system limitations, you may not
   * get the value of this member.
   */
  memoryAppUsageInKbytes: number;
}
/** @zh-cn
 * 本地视频自适应情况：
 */
/** Quality change of the local video. */
export enum QualityAdaptIndication {
  /** @zh-cn
   * 0：本地视频质量不变。
   */
  /** 0: The quality of the local video stays the same. */
  ADAPT_NONE = 0,
  /** @zh-cn
   * 1：因网络带宽增加，本地视频质量改善。
   */
  /** 1: The quality improves because the network bandwidth increases. */
  ADAPT_UP_BANDWIDTH = 1,
  /** @zh-cn
   * 2：因网络带宽减少，本地视频质量变差。
   */
  /** 2: The quality worsens because the network bandwidth decreases. */
  ADAPT_DOWN_BANDWIDTH = 2,
}
/** @zh-cn
 * 本地视频相关的统计信息。
 */
/** Statistics of the local video. */
export interface LocalVideoStats {
  /** @zh-cn
   * 实际发送码率 (Kbps)。 （Note: 不包含丢包后重传视频等的发送码率）
   */
  /** Bitrate (Kbps) sent in the reported interval, which does not include
   * the bitrate of the re-transmission video after packet loss.
   */
  sentBitrate: number;
  /** @zh-cn
   * 实际发送帧率 (fps)。 （Note: 不包含丢包后重传视频等的发送帧率）
   */
  /** Frame rate (fps) sent in the reported interval, which does not include
   * the frame rate of the re-transmission video after packet loss.
   */
  sentFrameRate: number;
  /** @zh-cn
   * 本地编码器的输出帧率，单位为 fps。
   */
  /** The encoder output frame rate (fps) of the local video. */
  encoderOutputFrameRate: number;
  /** @zh-cn
   * 本地渲染器的输出帧率，单位为 fps。
   */
  /** The renderer output frame rate (fps) of the local video. */
  rendererOutputFrameRate: number;
  /** @zh-cn
   * 当前编码器的目标编码码率，单位为 Kbps，该码率为 SDK 根据当前网络状况预估的一个值。
   */
  /** The target bitrate (Kbps) of the current encoder.
   *
   * This value is estimated by the SDK based on the current network
   * conditions.
   */
  targetBitrate: number;
  /** @zh-cn
   * 当前编码器的目标编码帧率，单位为 fps。
   */
  /** The target frame rate (fps) of the current encoder. */
  targetFrameRate: number;
  /** @zh-cn
   * 统计周期内本地视频质量（基于目标帧率和目标码率）的自适应情况。
   * 详见 {@link QualityAdaptIndication}。
   */
  /** Quality change of the local video in terms of target frame rate and
   * target bit rate in this reported interval.
   * See {@link QualityAdaptIndication}.
   */
  qualityAdaptIndication: QualityAdaptIndication;

  /** @zh-cn
   * 视频编码码率（Kbps）。
   *
   * **Note**:
   *
   * 不包含丢包后重传视频等的编码码率。
   */
  /**
   * @since 2.9.0
   *
   * The encoding bitrate (Kbps), which does not include the bitrate of the
   * retransmission video after packet loss.
   */
  encodedBitrate: number;
  /** @zh-cn
   * 视频编码宽度（px）。
   */
  /**
   * @since 2.9.0
   *
   * The width of the encoding frame (px).
   */
  encodedFrameWidth: number;
  /** @zh-cn
   * 视频编码高度（px）。
   */
  /**
   * @since 2.9.0
   *
   * The height of the encoding frame (px).
   */
  encodedFrameHeight: number;
  /** @zh-cn
   * 视频发送的帧数，累计值。
   */
  /**
   * @since 2.9.0
   *
   * The value of the sent frames, represented by an aggregate value.
   */
  encodedFrameCount: number;
  /** @zh-cn
   * 视频的编码类型，详见 {@link VIDEO_CODEC_TYPE}
   */
  /**
   * @since 2.9.0
   *
   * The codec type of the local video. See {@link VIDEO_CODEC_TYPE}.
   */
  codecType: number;
  /** @zh-cn
   * 使用抗丢包技术前，客户端到 Agora 边缘服务器的视频丢包率 (%)。
   *
   * @since v3.2.0
   */
  /** The video packet loss rate (%) from the local client to the Agora edge
   * server before applying the anti-packet loss strategies.
   *
   * @since v3.2.0
   */
  txPacketLossRate: number;
  /** @zh-cn
   * 本地视频采集帧率 (fps)。
   *
   * @since v3.2.0
   */
  /** The capture frame rate (fps) of the local video.
   *
   * @since v3.2.0
   */
  captureFrameRate: number;
  /** @zh-cn
   * 本地采集的画质亮度级别。详见 {@link CAPTURE_BRIGHTNESS_LEVEL_TYPE}
   *
   * @since v3.3.1
   */
  /** The brightness level of the video image captured by the local camera.
   * See {@link CAPTURE_BRIGHTNESS_LEVEL_TYPE}.
   *
   * @since v3.3.1
   */
  captureBrightnessLevel: CAPTURE_BRIGHTNESS_LEVEL_TYPE;
}
/** @zh-ch
 * 本地音频统计数据。
 */
/**
 * The statistics of the local audio stream
 */
export interface LocalAudioStats {
  /** @zh-ch
   * 声道数。
   */
  /**
   * The number of channels.
   */
  numChannels: number;
  /** @zh-ch
   * 发送的采样率，单位为 Hz。
   */
  /**
   * The sample rate (Hz).
   */
  sentSampleRate: number;
  /** @zh-ch
   * 发送码率的平均值，单位为 Kbps。
   */
  /**
   * The average sending bitrate (Kbps).
   */
  sentBitrate: number;
  /** @zh-cn
   * 使用抗丢包技术前，客户端到 Agora 边缘服务器的音频丢包率 (%)。
   *
   * @since v3.2.0
   */
  /**
   * The audio packet loss rate (%) from the local client to the Agora edge
   * server before applying the anti-packet loss strategies.
   *
   * @since v3.2.0
   */
  txPacketLossRate: number;
}
/** @zh-cn
 * 视频编码属性定义。
 */
/** VideoEncoderConfiguration */
export interface VideoEncoderConfiguration {
  /** @zh-cn
   * 视频帧在横轴上的宽(px)。视频编码宽 x 高默认为 640 x 360。
   */
  /** Width (pixels) of the video.
   *
   * The default value is 640(width) x 360(hight).
   */
  width: number;
  /** @zh-cn
   * 视频帧在纵轴上的高(px)。视频编码宽 x 高默认为 640 x 360。
   */
  /** Height (pixels) of the video.
   *
   * The default value is 640(width) x 360(hight).
   */
  height: number;
  /** @zh-cn
   * 视频编码的帧率（fps）。
   *
   * 默认值为 15 ，建议不要超过 30。
   */
  /**
   * The frame rate (fps) of the video.
   *
   * The default value is 15 fps.
   *
   * **Noete**:
   * We do not recommend setting this to a value greater than 30 fps.
   */
  frameRate: number;
  /** @zh-cn
   * 最低视频编码帧率（fps）。
   *
   * 默认值为 -1。
   */
  /**
   * The minimum frame rate of the video.
   *
   * The default value is -1.
   */
  minFrameRate: number;

  /** @zh-cn
   * 视频编码的码率，单位为 Kbps。
   *
   * 你可以根据场景需要，参照下表手动设置你想要的码率。若设置的视频码率超出合理范围，SDK 会自动按照合理区间处理码率。
   *
   * 你也可以选择如下一种模式进行设置：
   * - `STANDARD_BITRATE (0)`：（推荐）标准模式
   *  - 通信场景码率：与基准码率一致
   *  - 直播场景码率：基准码率的两倍
   * - `COMPATIBLE_BITRATE (1)`：适配模式
   *  - 通信场景码率：与基准码率一致
   *  - 直播场景码率：与基准码率一致
   *
   *
   * | 分辨率 (宽 x 高) | 帧率 (fps) | 基准码率 (Kbps) |
     | :--------------- | :--------- | :-------------- |
     | 160 × 120        | 15         | 65              |
     | 120 × 120        | 15         | 50              |
     | 180 × 180        | 15         | 100             |
     | 240 × 180        | 15         | 120             |
     | 320 × 180        | 15         | 140             |
     | 240 × 240        | 15         | 140             |
     | 320 × 240        | 15         | 200             |
     | 424 × 240        | 15         | 220             |
     | 360 × 360        | 15         | 260             |
     | 360 × 360        | 30         | 400             |
     | 480 × 360        | 15         | 320             |
     | 480 × 360        | 30         | 490             |
     | 640 × 360        | 15         | 400             |
     | 640 × 360        | 30         | 600             |
     | 480 × 480        | 15         | 400             |
     | 480 × 480        | 30         | 600             |
     | 640 × 480        | 10         | 400             |
     | 640 × 480        | 15         | 500             |
     | 640 × 480        | 30         | 750             |
     | 848 × 480        | 15         | 610             |
     | 848 × 480        | 30         | 930             |
     | 960 × 720        | 15         | 910             |
     | 960 × 720        | 30         | 1380            |
     | 1280 × 720       | 15         | 1130            |
     | 1280 × 720       | 30         | 1710            |
     | 1920 × 1080      | 15         | 2080            |
     | 1920 × 1080      | 30         | 3150            |
     | 1920 × 1080      | 60         | 4780            |
   */
  /** The video encoding bitrate (Kbps).
   *
   * Set your bitrate based on the following table. If you set a bitrate
   * beyond the proper range, the SDK automatically sets it to within the
   * range.
   *
   * You can also choose one of the following bitrate options:
   * - `0`: (Recommended) The standard bitrate.
   *  - The communication(`0`) profile: the encoding bitrate equals the base
   * bitrate.
   *  - The `1` (live streaming) profile: the encoding bitrate is twice the base
   * bitrate.
   * - `-1`: The compatible bitrate.
   *  - The communication(`0`) profile: the encoding bitrate equals the base
   * bitrate.
   *  - The `1` (live streaming) profile: the encoding bitrate equals the base
   * bitrate.
   *
   * The communication(`0`) profile prioritizes smoothness, while the
   * `1` (live streaming) profile prioritizes video quality
   * (requiring a higher bitrate). We recommend setting the bitrate mode as
   * `0` to address this difference.
   *
   * The following table lists the recommended video encoder configurations.
   *
   * | Resolution             | Frame Rate (fps) | Base Bitrate (Kbps)   |
   * |------------------------|------------------|-----------------------|
   * | 160 * 120              | 15               | 65                    |
   * | 120 * 120              | 15               | 50                    |
   * | 320 * 180              | 15               | 140                   |
   * | 180 * 180              | 15               | 100                   |
   * | 240 * 180              | 15               | 120                   |
   * | 320 * 240              | 15               | 200                   |
   * | 240 * 240              | 15               | 140                   |
   * | 424 * 240              | 15               | 220                   |
   * | 640 * 360              | 15               | 400                   |
   * | 360 * 360              | 15               | 260                   |
   * | 640 * 360              | 30               | 600                   |
   * | 360 * 360              | 30               | 400                   |
   * | 480 * 360              | 15               | 320                   |
   * | 480 * 360              | 30               | 490                   |
   * | 640 * 480              | 15               | 500                   |
   * | 480 * 480              | 15               | 400                   |
   * | 640 * 480              | 30               | 750                   |
   * | 480 * 480              | 30               | 600                   |
   * | 848 * 480              | 15               | 610                   |
   * | 848 * 480              | 30               | 930                   |
   * | 640 * 480              | 10               | 400                   |
   * | 1280 * 720             | 15               | 1130                  |
   * | 1280 * 720             | 30               | 1710                  |
   * | 960 * 720              | 15               | 910                   |
   * | 960 * 720              | 30               | 1380                  |
   * | 1920 * 1080            | 15               | 2080                  |
   * | 1920 * 1080            | 30               | 3150                  |
   * | 1920 * 1080            | 60               | 4780                  |
   *
   */
  bitrate: number;
  /** @zh-cn
   * 最低视频编码码率。单位为 Kbps，默认值为 -1。
   * 该参数强制视频编码器输出高质量图片。如果将参数设为高于默认值，在网络状况不佳情况下可能会导致网络丢包，并影响视频播放的流畅度。因此如非对画质有特殊需求，Agora 建议不要修改该参数的值。
   */
  /**
   * The minimum encoding bitrate (Kbps).
   *
   * The default value is 1 kbps.
   *
   * Using a value greater than the default value
   * forces the video encoder to output high-quality images but may cause more
   * packet loss and hence sacrifice the smoothness of the video transmission.
   * That said, unless you have special requirements for image quality,
   * Agora does not recommend changing this value.
   *
   */
  minBitrate: number;
  /** @zh-cn
   * 视频编码的旋转模式
   */
  /** The orientation mode. See {@link OrientationMode}.*/
  orientationMode: OrientationMode;
  /** @zh-cn
   * 带宽受限时。视频编码的降低偏好。
   */
  /**
   * The video encoding degradation preference under limited bandwidth.
   * See {@link DegradationPreference}.
   */
  degradationPreference: DegradationPreference;
  /** @zh-cn
   * @since v3.0.0
   *
   * 本地视频编码镜像模式，仅影响远端用户所见。详见 {@link VideoMirrorModeType}
   *
   * @note SDK 默认关闭镜像。
   */
  /**
   * @since v3.0.0
   *
   * Sets the mirror mode of the published local video stream. It only affects
   * the video that the remote user sees. See {@link VideoMirrorModeType}
   *
   * @note The SDK disables the mirror mode by default.
   */
  mirrorMode: VideoMirrorModeType;
}
/** @zh-cn
 * 镜像模式的类型
 */
/**
 * The type of video mirror mode.
 */
export enum VideoMirrorModeType {
  /** @zh-cn
   * `0`: (默认) SDK 确定是否开启镜像模式
   */
  /**
   * `0`: (Default) The SDK determines whether enable the mirror mode.
   */
  AUTO = 0,
  /** @zh-cn
   * `1`: 开启镜像模式
   */
  /**
   * `1`: Enable mirror mode.
   */
  ENABLED = 1,
  /** @zh-cn
   * `2`: 关闭镜像模式
   */
  /**
   * `2`: Disable mirror mode.
   */
  DISABLED = 2,
}
/** @zh-cn
 * 带宽受限时视频编码的降级偏好。
 */
/** Video degradation preferences under limited bandwidth. */
export enum DegradationPreference {
  /** @zh-cn
   * 0：（默认）带宽受限时，视频编码时优先降低视频帧率，维持视频质量不变。该降级偏好适用于画质优先的场景。
   *
   * @note 通信（`COMMUNICATION`）场景下，本地发送的视频分辨率可能改变，远端用户需能处理这种情况，
   * 详见 `videoSizeChanged`。
   */
  /** 0: (Default) Prefers to reduce the video frame rate while maintaining
   * video quality during video encoding under limited bandwidth. This
   * degradation preference is suitable for scenarios where video quality is
   * prioritized.
   *
   * @note In the `COMMUNICATION` channel profile, the resolution of the video
   * sent may change, so remote users need to handle this issue.
   * See `videoSizeChanged`.
   */
  MAINTAIN_QUALITY = 0,
  /** @zh-cn
   * 1：带宽受限时，视频编码时优先降低视频质量，维持视频帧率不变。该降级偏好适用于流畅性优先且允许画质降低的场景。
   */
  /** 1: Prefers to reduce the video quality while maintaining the video frame
   * rate during video encoding under limited bandwidth. This degradation
   * preference is suitable for scenarios where smoothness is prioritized and
   * video quality is allowed to be reduced.
   */
  MAINTAIN_FRAMERATE = 1,
  /** @zh-cn
   * @since v3.4.2
   *
   * 2: 带宽受限时，视频编码时同时降低视频帧率和视频质量。
   * `MAINTAIN_BALANCED` 降幅比 `MAINTAIN_QUALITY` 和 `MAINTAIN_FRAMERATE` 降幅更低，
   * 适用于流畅性和画质均优先的场景。
   *
   * @note 本地发送的视频分辨率可能改变，远端用户需能处理这种情况，详见 `videoSizeChanged`。
   */
  /** 2: Reduces the video frame rate and video quality simultaneously during
   * video encoding under limited bandwidth. `MAINTAIN_BALANCED` has a lower
   * reduction than `MAINTAIN_QUALITY` and `MAINTAIN_FRAMERATE`, and this
   * preference is suitable for scenarios where both smoothness and video
   * quality are a priority.
   *
   * @note The resolution of the video sent may change, so remote users need
   * to handle this issue.
   * See `videoSizeChanged`.
   */
  MAINTAIN_BALANCED = 2,
}
/** @zh-cn
 * 视频编码的方向模式。
 */
/** The orientation mode. */
export enum OrientationMode {
  /** @zh-cn
   * 0：（默认）该模式下 SDK 输出的视频方向与采集到的视频方向一致。
   * 接收端会根据收到的视频旋转信息对视频进行旋转。该模式适用于接收端可以调整视频方向的场景：
   * - 如果采集的视频是横屏模式，则输出的视频也是横屏模式
   * - 如果采集的视频是竖屏模式，则输出的视频也是竖屏模式
   */
 /**
  * 0: (Default) The output video always follows the orientation of the
  * captured video, because the receiver takes the rotational information
  * passed on from the video encoder.
  *
  * Mainly used between Agora SDK.
  * - If the captured video is in landscape mode, the output video is in
  * landscape mode.
  * - If the captured video is in portrait mode, the output video is in
  * portrait mode.
  */
  ORIENTATION_MODE_ADAPTIVE = 0,
  /** @zh-cn
   * 1：该模式下 SDK 固定输出风景（横屏）模式的视频。如果采集到的视频是竖屏模式，
   * 则视频编码器会对其进行裁剪。该模式适用于当接收端无法调整视频方向时，
   * 如使用 CDN 推流场景下。
   */
  /**
   * 1: The output video is always in landscape mode.
   *
   * If the captured video is
   * in portrait mode, the video encoder crops it to fit the output. Applies to
   * situations where the receiving end cannot process the rotational
   * information.
   *
   * For example, Media Push.
   */
  ORIENTATION_MODE_FIXED_LANDSCAPE = 1,
 /** @zh-cn
  * 2：该模式下 SDK 固定输出人像（竖屏）模式的视频，如果采集到的视频是横屏模式，
  * 则视频编码器会对其进行裁剪。该模式适用于当接收端无法调整视频方向时，
  * 如使用 CDN 推流场景下。
  */
 /**
  * 2: The output video is always in portrait mode.
  *
  * If the captured video is in landscape mode, the video encoder crops it to
  * fit the output. Applies to situations where the receiving end cannot process
  * the rotational information.
  *
  * For example, Media Push.
  */
  ORIENTATION_MODE_FIXED_PORTRAIT = 2,
}
/** @zh-cn
 * 远端视频相关的统计信息。
 */
/**
 * Video statistics of the remote stream.
 */
export interface RemoteVideoStats {
  /** @zh-cn
   * 用户 ID，指定是哪个用户的视频流。
   */
  /** User ID of the user sending the video streams. */
  uid: number;
  /** @zh-cn
   * @deprecated 该参数已废弃。
   *
   * 延迟 (毫秒)。
   */
  /**
   * @deprecated This parameter is deprecated.
   * Time delay (ms).
   */
  delay: number;
  /** @zh-cn
   * 视频宽度 (像素)。
   */
  /** Width (pixels) of the remote video. */
  width: number;
  /** @zh-cn
   * 视频高度 (像素)。
   */
  /** Height (pixels) of the remote video. */
  height: number;
  /** @zh-cn
   * （上次统计后）接收到的码率 (Kbps)。
   */
  /** Bitrate (Kbps) received in the reported interval. */
  receivedBitrate: number;
  /** @zh-cn
   * 远端视频解码器的输出帧率 (fps)。
   */
  /** The decoder output frame rate (fps) of the remote video. */
  decoderOutputFrameRate: number;
  /** @zh-cn
   * 远端视频渲染器的输出帧率 (fps)。
   */
  /** The renderer output frame rate (fps) of the remote video. */
  rendererOutputFrameRate: number;
  /** @zh-cn
   * 视频流类型。
   * - 0：大流
   * - 1：小流
   */
  /**
   * Video stream type:
   * - 0: High-stream
   * - 1: Low-stream
   */
  rxStreamType: StreamType;
  /** @zh-cn
   * 远端用户在加入频道后发生视频卡顿的累计时长 (ms)。
   *
   * 通话过程中，视频帧率设置不低于 5 fps 时，连续渲染的两帧视频之间间隔超过 500 ms，则记为一次视频卡顿。
   */
  /**
   * The total freeze time (ms) of the remote video stream after the
   * remote user joins the channel.
   *
   * In a video session where the frame rate is set to no less than 5 fps,
   * video freeze occurs when the time interval between two adjacent renderable
   * video frames is more than 500 ms.
   */
  totalFrozenTime: number;
  /** @zh-cn
   * 远端用户在加入频道后发生视频卡顿的累计时长占视频总有效时长的百分比  (%)。
   *
   * 视频有效时长指远端用户加入频道后视频未被停止发送或禁用的时长。
   */
  /**
   * The total video freeze time as a percentage (%) of the total time when
   * the video is available.
   */
  frozenRate: number;
  /** @zh-cn
   * 远端视频在使用抗丢包技术之前的丢包率(%)。
   */
  /**
   * @since v2.9.0
   *
   * Packet loss rate (%) of the remote video stream after using the
   * anti-packet-loss method.
   */
  packetLossRate: number;
  /** @zh-cn
   * 视频有效时长（毫秒），即远端用户/主播加入频道后，既没有停止发送视频流，也没有禁用视频模块的通话时长。
   *
   * @since v3.2.0
   */
  /**
   * The total time (ms) when the remote user in the `0` (communication)
   * profile or the remote host in the `1` (live streaming) profile neither
   * stops sending the video stream nor
   * disables the video module after joining the channel.
   *
   * @since v3.2.0
   *
   */
  totalActiveTime: number;
  /** @zh-cn
   * 远端视频流的累计发布时长（毫秒）。
   *
   * @since v3.2.0
   */
  /**
   * The total publish duration (ms) of the remote video stream.
   *
   * @since v3.2.0
   */
  publishDuration: number;
}
/** @zh-cn
 * 摄像头采集偏好。
 */
/** Sets the camera capturer preference. */
export enum CaptureOutPreference {

  /** @zh-cn
   * 0：（默认）自动调整采集参数。SDK 根据实际的采集设备性能及网络情况，
   * 选择合适的摄像头输出参数，在设备性能及视频预览质量之间，维持平衡
   */
  /** 0: (Default) self-adapts the camera output parameters to the system
   * performance and network conditions to balance CPU consumption and video
   * preview quality.
   */
  CAPTURER_OUTPUT_PREFERENCE_AUTO = 0,
  /** @zh-cn
   * 1：优先保证设备性能。SDK 根据用户在
   * {@link AgoraRtcEngine.setVideoEncoderConfiguration setVideoEncoderConfiguration}
   * 中设置编码器的分辨率和帧率，选择最接近的摄像头输出参数，从而保证设备性能。
   * 在这种情况下，预览质量接近于编码器的输出质量。
   */
  /** 1: Prioritizes the system performance.
   *
   * The SDK chooses the dimension
   * and frame rate of the local camera capture closest to those set
   * by the {@link setVideoEncoderConfiguration} method.
   */
  CAPTURER_OUTPUT_PREFERENCE_PERFORMANCE = 1,
  /** @zh-cn
   * 2：优先保证视频预览质量。SDK 选择较高的摄像头输出参数，从而提高预览视频的质量。
   * 在这种情况下，会消耗更多的 CPU 及内存做视频前处理。
   */
  /** 2: Prioritizes the local preview quality.
   *
   * The SDK chooses higher camera output parameters to improve the local
   * video preview quality. This option requires extra CPU and RAM usage for
   * video pre-processing.
   */
  CAPTURER_OUTPUT_PREFERENCE_PREVIEW = 2,
  /** @zh-cn
   * 3：允许用户设置本地摄像头采集的视频宽高。
   *
   * @since v3.3.1
   */
  /** 3: Allows you to customize the width and height of the video image
   * captured by the local camera.
   *
   * @since v3.3.1
   */
  CAPTURER_OUTPUT_PREFERENCE_MANUAL = 3,
}
/** @zh-cn
 * 摄像头采集偏好设置。
 */
/** Camera capturer configuration. */
export interface CameraCapturerConfiguration {
  /** @zh-cn
   * 摄像头采集输出偏好设置。
   */
  /** The output preference of camera capturer. */
  preference: CaptureOutPreference;
  /** @zh-cn
   * 本地采集的视频宽度 (px)。如果你需要自定义本地采集的视频宽度，请先将 `preference`
   * 设为 `CAPTURER_OUTPUT_PREFERENCE_MANUAL(3)`，再通过 `captureWidth` 设置采集的视频宽度。
   *
   * @since v3.3.1
   */
  /** The width (px) of the video image captured by the local camera.
   * To customize the width of the video image, set `preference`
   * as `CAPTURER_OUTPUT_PREFERENCE_MANUAL(3)` first,
   * and then use `captureWidth`.
   *
   * @since v3.3.1
   */
  captureWidth: number;
  /** @zh-cn
   * 本地采集的视频高度 (px)。如果你需要自定义本地采集的视频高度，请先将 `preference`
   * 设为 `CAPTURER_OUTPUT_PREFERENCE_MANUAL(3)`，再通过 `captureHeight` 设置采集的视频高度。
   *
   * @since v3.3.1
   */
  /** The height (px) of the video image captured by the local camera.
   * To customize the height of the video image, set `preference` as
   * `CAPTURER_OUTPUT_PREFERENCE_MANUAL(3)` first,
   * and then use `captureHeight`.
   *
   * @since v3.3.1
   */
  captureHeight: number;
}
/** @zh-cn
 * 待共享区域相对于整个屏幕或窗口的位置，如不填，则表示共享这个屏幕或窗口。
 */
/** The relative location of the region to the screen or window. */
export interface Rectangle {
  /** @zh-cn
   * 左上角的横向偏移。
   */
  /** The horizontal offset from the top-left corner. */
  x: number; // The horizontal offset from the top-left corner.
  /** @zh-cn
   * 左上角的纵向偏移。
   */
  /** The vertical offset from the top-left corner. */
  y: number; // The vertical offset from the top-left corner.
  /** @zh-cn
   * 待共享区域的宽。
   */
  /** The width of the region. */
  width: number; // The width of the region.
  /** @zh-cn
   * 待共享区域的高。
   */
  /** The height of the region. */
  height: number; // The height of the region.
}

/** @zh-cn
 * 屏幕标识：
 * - macOS 系统中，屏幕ID
 * - Windows 系统中，屏幕位置
 */
/**
 * The screen symbol:
 * - The screen symbol on the macOS platform, see {@link MacScreenSymbol}
 * - The screen symbol on the Windows platform, see {@link WindowsScreenSymbol}
 */
export type ScreenSymbol = MacScreenSymbol | WindowsScreenSymbol;

export type MacScreenSymbol = number;

export type WindowsScreenSymbol = Rectangle;

export type CaptureRect = Rectangle;

/** @zh-cn
 * 屏幕共享的编码参数配置。
 */
/**
 * The video source encoding parameters.
 */
export interface CaptureParam {
  /** @zh-cn
   * 屏幕共享区域的宽。
   */
  /** Width (pixels) of the video. */
  width: number; // Width (pixels) of the video
  /** @zh-cn
   * 屏幕共享区域的高。
   */
  /** Height (pixels) of the video. */
  height: number; // Height (pixels) of the video
  /** @zh-cn
   * 共享视频的帧率，单位为 fps；默认值为 5，建议不要超过 15.
   */
  /** The frame rate (fps) of the shared region.
   *
   * The default value is 5.
   *
   * We do not recommend setting this to a value greater than 15.
   */
  frameRate: number; // The frame rate (fps) of the shared region. The default value is 5. We do not recommend setting this to a value greater than 15.
  /** @zh-cn
   * 共享视频的码率，单位为 Kbps；默认值为 0，表示 SDK 根据当前共享屏幕的分辨率计算出一个合理的值。
   */
  /**
   * The bitrate (Kbps) of the shared region.
   *
   * The default value is 0 (the SDK works out a bitrate according to the
   * dimensions of the current screen).
   */
  bitrate: number; //  The bitrate (Kbps) of the shared region. The default value is 0 (the SDK works out a bitrate according to the dimensions of the current screen).
  /** @zh-cn
   * 是否采集鼠标用于屏幕共享：
   * - true:（默认）采集鼠标
   * - false: 不采集鼠标
   *
   * @since v3.2.0
   */
  /** Sets whether or not to capture the mouse for screen sharing:
   * - true: (Default) Capture the mouse.
   * - false: Do not capture the mouse.
   *
   * @since v3.2.0
   */
  captureMouseCursor: boolean;
  /** @zh-cn
   * 调用 {@link startScreenCaptureByWindow} 方法共享窗口时，是否将该窗口前置。
   * - true: 前置窗口。
   * - false:（默认）不前置窗口。
   *
   * @since v3.2.0
   */
  /** Whether to bring the window to the front when calling
   * {@link startScreenCaptureByWindow} to share the window:
   * - true: Bring the window to the front.
   * - false: (Default) Do not bring the window to the front.
   *
   * @since v3.2.0
   */
  windowFocus: boolean;
  /** @zh-cn
   * 待屏蔽窗口的 ID 列表。
   *
   * 调用 {@link startScreenCaptureByScreen} 开启屏幕共享时，你可以通过该参数屏蔽指定的窗口。
   * 开启屏幕共享后，你可以在调用 {@link updateScreenCaptureParameters} 更新屏幕共享的配置参数时，
   * 通过该参数动态屏蔽指定的窗口。
   *
   * @since v3.2.0
   */
  /** A list of IDs of windows to be blocked.
   *
   * When calling {@link startScreenCaptureByScreen} to start screen
   * sharing, you can use this parameter to block the specified windows.
   * When calling {@link updateScreenCaptureParameters} to update the
   * configuration for screen sharing, you can use this parameter to
   * dynamically block the specified windows during screen sharing.
   *
   * @since v3.2.0
   */
  excludeWindowList: Array<number>;
  /** @zh-cn
   * 待屏蔽窗口的数量。
   *
   * @since v3.2.0
   */
  /** The number of windows to be blocked.
   *
   * @since v3.2.0
   */
  excludeWindowCount: number;
}
/** @zh-cn
 * 屏幕共享的内容类型。
 */
/**
 * Content hints for screen sharing.
 */
export enum VideoContentHint {
  /** @zh-cn
   * 0：（默认）无指定的内容类型。
   */
  /**
   * 0: (Default) No content hint.
   */
  CONTENT_HINT_NONE = 0,
  /** @zh-cn
   * 1：内容类型为动画。当共享的内容是视频、电影或视频游戏时，推荐选择该内容类型。
   */
  /**
   * 1: Motion-intensive content.
   *
   * Choose this option if you prefer smoothness or when you are sharing a
   * video clip, movie, or video game.
   */
  CONTENT_HINT_MOTION = 1,
  /** @zh-cn
   * 2：内容类型为细节。当共享的内容是图片或文字时，推荐选择该内容类型。
   */
  /**
   * 2: Motionless content.
   *
   * Choose this option if you prefer sharpness or when you are sharing a
   * picture, PowerPoint slide, or text.
   */
  CONTENT_HINT_DETAILS = 2,
}

/** @zh-cn
 * @deprecated 该回调已经被废弃，请改用 remoteVideoStats 回调。
 * 远端视频流传输的统计信息。
 */
/**
 * @deprecated This callback is deprecated. Use the remoteVideoStats callback
 * instead.
 *
 * Reports the transport-layer statistics of each remote video stream.
 */
export interface RemoteVideoTransportStats {
  /** @zh-cn
   * 用户 ID，指定是哪个用户/主播的视频包。
   */
  /** User ID of the remote user sending the video packet. */
  uid: number;
  /** @zh-cn
   * 视频包从发送端到接收端的延时（毫秒）。
   */
  /** Network time delay (ms) from the remote user sending the video packet to
   * the local user.
   */
  delay: number;
  /** @zh-cn
   * 视频包从发送端到接收端的丢包率 (%)。
   */
  /** Packet loss rate (%) of the video packet sent from the remote user. */
  lost: number;
  /** @zh-cn
   * 远端视频包的接收码率（Kbps）。
   */
  /** Received bitrate (Kbps) of the video packet sent from the remote user. */
  rxKBitRate: number;
}
/** @zh-cn
 * 该回调已被废弃，请改用 remoteAudioStats 回调。
 * 远端音频流传输的统计信息。
 */
/**
 * @deprecated This callback is deprecated. Use the remoteAudioStats callback
 * instead.
 *
 * Reports the transport-layer statistics of each remote audio stream.
 */
export interface RemoteAudioTransportStats {
  /** @zh-cn
   * 用户 ID，指定是哪个用户/主播的音频包。
   */
  /** User ID of the remote user sending the audio packet. */
  uid: number;
  /** @zh-cn
   * 音频包从发送端到接收端的延时（毫秒）。
   */
  /** Network time delay (ms) from the remote user sending the audio packet to
   * the local user.
   */
  delay: number;
  /** @zh-cn
   * 音频包从发送端到接收端的丢包率 (%)。
   */
  /** Packet loss rate (%) of the audio packet sent from the remote user. */
  lost: number;
  /** @zh-cn
   * 远端音频包的接收码率（Kbps）。
   */
  /** Received bitrate (Kbps) of the audio packet sent from the remote user. */
  rxKBitRate: number;
}
/** @zh-cn
 * 远端音频统计信息。
 */
/**
 * Reports the statistics of the remote audio.
 */
export interface RemoteAudioStats {
  /** @zh-cn
   * 用户 ID，指定是哪个用户/主播的音频流。
   */
  /** User ID of the remote user sending the audio streams. */
  uid: number;
  /** @zh-cn
   * 远端用户发送的音频流质量，详见 {@link AgoraNetworkQuality}。
   */
  /** Audio quality received by the user. See {@link AgoraNetworkQuality}. */
  quality: AgoraNetworkQuality;
  /** @zh-cn
   * 音频发送端到接收端的网络延迟（毫秒）。
   */
  /** Network delay (ms) from the sender to the receiver. */
  networkTransportDelay: number;
  /** @zh-cn
   * 接收端到网络抖动缓冲的网络延迟（毫秒）。
   */
  /** Network delay (ms) from the receiver to the jitter buffer. */
  jitterBufferDelay: number;
  /** @zh-cn
   * 统计周期内的远端音频流的丢帧率(%)。
   */
  /** Packet loss rate in the reported interval. */
  audioLossRate: number;
  /** @zh-cn
   * 声道数。
   */
  /** The number of the channels. */
  numChannels: number;
  /** @zh-cn
   * 统计周期内接收到的远端音频采样率（Hz）。
   */
  /**
   * The sample rate (Hz) of the received audio stream in the reported
   * interval.
   */
  receivedSampleRate: number;
  /** @zh-cn
   * 接收流在统计周期内的平均码率（Kbps）。
   */
  /** The average bitrate (Kbps) of the received audio stream in the reported
   * interval.
   */
  receivedBitrate: number;
  /** @zh-cn
   * 远端用户在加入频道后发生音频卡顿的累计时长 (ms)。
   *
   * 一个统计周期（2 秒）内，音频丢帧率达到 4% 即记为一次音频卡顿。
   *
   * Agora 使用 2 秒为时间切片统计音频卡顿时间，因此音频卡顿时长 = `totalFrozenTime` = 音频卡顿次数 x 2 x 1000 (ms)。
   */
  /**
   * The total freeze time (ms) of the remote audio stream after the remote
   * user joins the channel.
   *
   * In the reported interval, audio freeze occurs when the audio frame loss
   * rate reaches 4%. Agora uses 2 seconds as an audio piece unit to calculate
   * the audio freeze time. The total audio freeze time = The audio freeze
   * number × 2000 ms.
   */
  totalFrozenTime: number;
  /** @zh-cn
   * 远端用户在加入频道后发生音频卡顿的累计时长占音频总有效时长的百分比 (%)。
   *
   * 音频有效时长是指远端用户加入频道后音频未被停止发送或禁用的时长。
   */
  /**
   * The total audio freeze time as a percentage (%) of the total time
   * when the audio is available.
   */
  frozenRate: number;
  /** @zh-cn
   * 音频有效时长（毫秒），即远端用户/主播加入频道后，既没有停止发送音频流，也没有禁用音频模块的通话时长。
   *
   * @since v3.2.0
   */
  /**
   * The total time (ms) when the remote user in the `0` (communication)
   * profile or the remote host in the `1` (live streaming) profile neither
   * stops sending the audio stream nor
   * disables the audio module after joining the channel.
   *
   * @since v3.2.0
   *
   */
  totalActiveTime: number;
  /** @zh-cn
   * 远端音频流的累计发布时长（毫秒）。
   *
   * @since v3.2.0
   */
  /**
   * The total publish duration (ms) of the remote audio stream.
   *
   * @since v3.2.0
   */
  publishDuration: number;
  /** @zh-cn
   * 接收远端音频时，本地用户的主观体验质量：
   * - `0`: 主观体验质量较好。
   * - `1`: 主观体验质量较差。
   *
   * @since v3.3.1
   */
  /**
   * Quality of experience (QoE) of the local user when receiving a remote
   * audio stream:
   * - `0`: QoE of the local user is good.
   * - `1`: QoE of the local user is poor.
   *
   * @since v3.3.1
   */
  qoeQuality: number;
  /** @zh-cn
   * 接收远端音频时，本地用户主观体验质量较差的原因：
   * - `0`: 无原因，说明主观体验质量较好。
   * - `1`: 远端用户的网络较差。
   * - `2`: 本地用户的网络较差。
   * - `4`: 本地用户的 Wi-Fi 或者移动数据网络信号弱。
   * - `8`: 本地用户同时开启 Wi-Fi 和蓝牙，二者信号互相干扰，导致音频传输质量下降。
   *
   * @since v3.3.1
   */
  /**
   * The reason for poor QoE of the local user when receiving a remote audio
   * stream:
   * - `0`: No reason, indicating good QoE of the local user.
   * - `1`: The remote user's network quality is poor.
   * - `2`: The local user's network quality is poor.
   * - `4`: The local user's Wi-Fi or mobile network signal is weak.
   * - `8`: The local user enables both Wi-Fi and bluetooth, and their signals
   * interfere with each other. As a result, audio transmission quality is
   * undermined.
   *
   * @since v3.3.1
   */
  qualityChangedReason: number;
  /**
   * 统计周期内，Agora 实时音频 MOS（平均主观意见分）评估方法对接收到的远端音频流的质量评分。
   * 返回值范围为 [0,500]。返回值除以 100 即可得到 MOS 分数，范围为 [0,5] 分，分数越高，音频质量越好。
   *
   * @since v3.3.1
   *
   * Agora 实时音频 MOS 评分对应的主观音质感受如下：
   *
   * | MOS 分数   | 音质感受                                             |
   * |------------|----------------------------------------------------|
   * | 大于 4 分  | 音频质量佳，清晰流畅。                            |
   * | 3.5 - 4 分 | 音频质量较好，偶有音质损伤，但依然清晰。                       |
   * | 3 - 3.5 分 | 音频质量一般，偶有卡顿，不是非常流畅，需要一点注意力才能听清。 |
   * | 2.5 - 3 分 | 音频质量较差，卡顿频繁，需要集中精力才能听清。                 |
   * | 2 - 2.5 分 | 音频质量很差，偶有杂音，部分语义丢失，难以交流。               |
   * | 小于 2 分  | 音频质量非常差，杂音频现，大量语义丢失，完全无法交流。         |
   */
  /**
   * The quality of the remote audio stream as determined by the Agora
   * real-time audio MOS (Mean Opinion Score) measurement method in the
   * reported interval. The return value ranges from 0 to 500. Dividing the
   * return value by 100 gets the MOS score, which ranges from 0 to 5. The
   * higher the score, the better the audio quality.
   *
   * @since v3.3.1
   *
   * The subjective perception of audio quality corresponding to the Agora
   * real-time audio MOS scores is as follows:
   *
   * <table>
   * <thead>
   *   <tr>
   *     <th>MOS score</th>
   *     <th>Perception of audio quality</th>
   *   </tr>
   * </thead>
   * <tbody>
   *   <tr>
   *     <td>Greater than 4</td>
   *     <td>Excellent. The audio sounds clear and smooth.</td>
   *   </tr>
   *   <tr>
   *     <td>From 3.5 to 4</td>
   *     <td>Good. The audio has some perceptible impairment, but still
   * sounds clear.</td>
   *   </tr>
   *   <tr>
   *     <td>From 3 to 3.5</td>
   *     <td>Fair. The audio freezes occasionally and requires attentive
   * listening.</td>
   *   </tr>
   *   <tr>
   *     <td>From 2.5 to 3</td>
   *     <td>Poor. The audio sounds choppy and requires considerable effort
   * to understand.</td>
   *   </tr>
   *   <tr>
   *     <td>From 2 to 2.5</td>
   *     <td>Bad. The audio has occasional noise. Consecutive audio dropouts
   * occur, resulting in some information loss. The users can communicate
   * only with difficulty.</td>
   *   </tr>
   *   <tr>
   *     <td>Less than 2</td>
   *     <td>Very bad. The audio has persistent noise. Consecutive audio
   * dropouts are frequent, resulting in severe information loss.
   * Communication is nearly impossible.</td>
   *   </tr>
   * </tbody>
   * </table>
   */
  mosValue: number;
}
/** @zh-cn
 * 远端视频状态：
 * - 0 远端视频默认初始状态。
 * - 1 本地用户已接收远端视频首包。
 * - 2 远端视频流正在解码，正常播放。
 * - 3 远端视频流卡顿。
 * - 4 远端视频流播放失败。
 */
/**
 * State of the remote video:
 *
 * - 0: The remote video is in the default state.
 * - 1: The first remote video packet is received.
 * - 2: The remote video stream is decoded and plays normally.
 * - 3: The remote video is frozen.
 * - 4: The remote video fails to start.
 */
export enum RemoteVideoState {
  /** 0: The remote video is in the default state, probably due to #REMOTE_VIDEO_STATE_REASON_LOCAL_MUTED (3), #REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED (5), or #REMOTE_VIDEO_STATE_REASON_REMOTE_OFFLINE (7).
   */
  REMOTE_VIDEO_STATE_STOPPED = 0,

  /** 1: The first remote video packet is received.
   */
  REMOTE_VIDEO_STATE_STARTING = 1,

  /** 2: The remote video stream is decoded and plays normally, probably due to #REMOTE_VIDEO_STATE_REASON_NETWORK_RECOVERY (2), #REMOTE_VIDEO_STATE_REASON_LOCAL_UNMUTED (4), #REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED (6), or #REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK_RECOVERY (9).
   */
  REMOTE_VIDEO_STATE_DECODING = 2,

  /** 3: The remote video is frozen, probably due to #REMOTE_VIDEO_STATE_REASON_NETWORK_CONGESTION (1) or #REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK (8).
   */
  REMOTE_VIDEO_STATE_FROZEN = 3,

  /** 4: The remote video fails to start, probably due to #REMOTE_VIDEO_STATE_REASON_INTERNAL (0).
   */
  REMOTE_VIDEO_STATE_FAILED = 4,
}
/** @zh-cn
 * 远端视频流状态改变的具体原因：
 * - 0 内部原因。
 * - 1 网络阻塞。
 * - 2 网络恢复正常。
 * - 3 本地用户停止接收远端视频流或本地用户禁用视频模块。
 * - 4 本地用户恢复接收远端视频流或本地用户启动视频模块。
 * - 5 远端用户停止发送视频流或远端用户禁用视频模块。
 * - 6 远端用户恢复发送视频流或远端用户启用视频模块。
 * - 7 远端用户离开频道。
 * - 8 远端视频流已回退为音频流。
 * - 9 回退的远端音频流恢复为视频流。
 */
/**
 * The reason of the remote video state change:
 * - 0: Internal reasons.
 * - 1: Network congestion.
 * - 2: Network recovery.
 * - 3: The local user stops receiving the remote video stream or disables the
 * video module.
 * - 4: The local user resumes receiving the remote video stream or enables the
 * video module.
 * - 5: The remote user stops sending the video stream or disables the video
 * module.
 * - 6: The remote user resumes sending the video stream or enables the video
 * module.
 * - 7: The remote user leaves the channel.
 * - 8: The remote media stream falls back to the audio-only stream due to poor
 * network conditions.
 * - 9: The remote media stream switches back to the video stream after the
 * network conditions improve.
 */
export enum RemoteVideoStateReason {
  /** 0: The SDK reports this reason when the video state changes.
   */
  REMOTE_VIDEO_STATE_REASON_INTERNAL = 0,

  /** 1: Network congestion.
   */
  REMOTE_VIDEO_STATE_REASON_NETWORK_CONGESTION = 1,

  /** 2: Network recovery.
   */
  REMOTE_VIDEO_STATE_REASON_NETWORK_RECOVERY = 2,

  /** 3: The local user stops receiving the remote video stream or disables the video module.
   */
  REMOTE_VIDEO_STATE_REASON_LOCAL_MUTED = 3,

  /** 4: The local user resumes receiving the remote video stream or enables the video module.
   */
  REMOTE_VIDEO_STATE_REASON_LOCAL_UNMUTED = 4,

  /** 5: The remote user stops sending the video stream or disables the video module.
   */
  REMOTE_VIDEO_STATE_REASON_REMOTE_MUTED = 5,

  /** 6: The remote user resumes sending the video stream or enables the video module.
   */
  REMOTE_VIDEO_STATE_REASON_REMOTE_UNMUTED = 6,

  /** 7: The remote user leaves the channel.
   */
  REMOTE_VIDEO_STATE_REASON_REMOTE_OFFLINE = 7,

  /** 8: The remote audio-and-video stream falls back to the audio-only stream due to poor network conditions.
   */
  REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK = 8,

  /** 9: The remote audio-only stream switches back to the audio-and-video stream after the network conditions improve.
   */
  REMOTE_VIDEO_STATE_REASON_AUDIO_FALLBACK_RECOVERY = 9,
}

/** @zh-cn
 * 远端音频流状态码：
 * - 0: 远端音频流默认初始状态，在原因码 3、5 或 7 的情况下，会报告该状态。
 * - 1: 本地用户已接收远端音频首包。
 * - 2: 远端音频流正在解码，正常播放。在原因码 2、4 或 6 的情况下，会报告该状态。
 * - 3: 远端音频流卡顿。在原因码 1 的情况下，会报告该状态。
 * - 4: 远端音频流播放失败。在 原因码 0 的情况下，会报告该状态。
 */
/**
 * State of the remote audio stream.
 * - 0: The remote audio is in the default state.
 * - 1: The first remote audio packet is received.
 * - 2: The remote audio stream is decoded and plays normally.
 * - 3: The remote audio is frozen.
 * - 4: The remote audio fails to start.
 */
export enum RemoteAudioState {
  /** 0: The remote audio is in the default state, probably due to
   * #REMOTE_AUDIO_REASON_LOCAL_MUTED (3),
   * #REMOTE_AUDIO_REASON_REMOTE_MUTED (5), or
   * #REMOTE_AUDIO_REASON_REMOTE_OFFLINE (7).
   */
  REMOTE_AUDIO_STATE_STOPPED = 0, // Default state, audio is started or remote user disabled/muted audio stream
  /** 1: The first remote audio packet is received.
   */
  REMOTE_AUDIO_STATE_STARTING = 1, // The first audio frame packet has been received
  /** 2: The remote audio stream is decoded and plays normally, probably
   * due to #REMOTE_AUDIO_REASON_NETWORK_RECOVERY (2),
   * #REMOTE_AUDIO_REASON_LOCAL_UNMUTED (4), or
   * #REMOTE_AUDIO_REASON_REMOTE_UNMUTED (6).
   */
  REMOTE_AUDIO_STATE_DECODING = 2, // The first remote audio frame has been decoded or fronzen state ends
  /** 3: The remote audio is frozen, probably due to
   * #REMOTE_AUDIO_REASON_NETWORK_CONGESTION (1).
   */
  REMOTE_AUDIO_STATE_FROZEN = 3, // Remote audio is frozen, probably due to network issue
  /** 4: The remote audio fails to start, probably due to
   * #REMOTE_AUDIO_REASON_INTERNAL (0).
   */
  REMOTE_AUDIO_STATE_FAILED = 4, // Remote audio play failed
}

/** @zh-cn
 * 远端音频流状态改变的原因码：
 * - 0: 内部原因。
 * - 1: 网络阻塞。
 * - 2: 网络恢复正常。
 * - 3: 本地用户停止接收远端音频流或本地用户禁用音频模块。
 * - 4: 本地用户恢复接收远端音频流或本地用户启用音频模块。
 * - 5: 远端用户停止发送音频流或远端用户禁用音频模块。
 * - 6: 用户恢复发送音频流或远端用户启用音频模块。
 * - 7: 远端用户离开频道。
 */
/**
 * The reason of the remote audio state change.
 * - 0: Internal reasons.
 * - 1: Network congestion.
 * - 2: Network recovery.
 * - 3: The local user stops receiving the remote audio stream or disables the
 * audio module.
 * - 4: The local user resumes receiving the remote audio stream or enables the
 * audio module.
 * - 5: The remote user stops sending the audio stream or disables the audio
 * module.
 * - 6: The remote user resumes sending the audio stream or enables the audio
 * module.
 * - 7: The remote user leaves the channel.
 */
export enum RemoteAudioStateReason {
  /** 0: The SDK reports this reason when the audio state changes.
   */
  REMOTE_AUDIO_REASON_INTERNAL = 0,
  /** 1: Network congestion.
   */
  REMOTE_AUDIO_REASON_NETWORK_CONGESTION = 1,
  /** 2: Network recovery.
   */
  REMOTE_AUDIO_REASON_NETWORK_RECOVERY = 2,
  /** 3: The local user stops receiving the remote audio stream or
   * disables the audio module.
   */
  REMOTE_AUDIO_REASON_LOCAL_MUTED = 3,
  /** 4: The local user resumes receiving the remote audio stream or
   * enables the audio module.
   */
  REMOTE_AUDIO_REASON_LOCAL_UNMUTED = 4,
  /** 5: The remote user stops sending the audio stream or disables the
   * audio module.
   */
  REMOTE_AUDIO_REASON_REMOTE_MUTED = 5,
  /** 6: The remote user resumes sending the audio stream or enables the
   * audio module.
   */
  REMOTE_AUDIO_REASON_REMOTE_UNMUTED = 6,
  /** 7: The remote user leaves the channel.
   */
  REMOTE_AUDIO_REASON_REMOTE_OFFLINE = 7,
}
/** @zh-cn
 * 网络连接状态。
 *
 * 1：网络连接断开。该状态表示 SDK 处于：
 * - 调用 {@link AgoraRtcEngine.joinChannel} 加入频道前的初始化阶段
 * - 或调用 {@link AgoraRtcEngine.leaveChannel} 后的离开频道阶段
 *
 * 2：建立网络连接中。该状态表示 SDK 在调用 {@link AgoraRtcEngine.joinChannel joinChannel} 后正在与指定的频道建立连接。
 * - 如果成功加入频道，App 会收到 connectionStateChanged 回调，通知当前网络状态变成 3：网络已连接
 * - 建立连接后，SDK 还会处理媒体初始化，一切就绪后会回调 joinedChannel
 *
 * 3：网络已连接。该状态表示用户已经加入频道，可以在频道内发布或订阅媒体流。如果因网络断开或切换而导致 SDK 与频道的连接中断，SDK 会自动重连，此时 App 会收到：
 * - connectionStateChanged 回调，通知网络状态变成 4：重新建立网络连接中
 *
 * 4：重新建立网络连接中。该状态表示 SDK 之前曾加入过频道，但因网络等原因连接中断了，此时 SDK 会自动尝试重新接入频道。
 * - 如果 SDK 无法在 10 秒内重新接入频道，则 connectionLost 会被触发，SDK 会一致保留该状态，并不断尝试重新加入频道
 * - 如果 SDK 在断开连接后，20 分钟内还是没能重新加入频道，App 会收到 connectionStateChanged 回调，通知当前网络状态进入 5：网络连接失败，SDK 停止尝试重连
 *
 * 5：网络连接失败。该状态表示 SDK 已不再尝试重新加入频道，用户必须要调用 {@link AgoraRtcEngine.leaveChannel leaveChannel} 离开频道。
 * - 如果用户还想重新加入频道，则需要再次调用 {@link AgoraRtcEngine.joinChannel joinChannel}
 * - 如果 SDK 因服务器端使用 RESTful API 禁止加入频道，则 App 会收到 connectionStateChanged 回调。
 */
/**
 * Connection states.
 * - 1: The SDK is disconnected from Agora's edge server.
 *  - This is the initial state before calling the
 * {@link AgoraRtcEngine.joinChannel} method.
 *  - The SDK also enters this state when the application calls the
 * {@link AgoraRtcEngine.leaveChannel} method.
 * - 2: The SDK is connecting to Agora's edge server. When the application
 * calls the {@link AgoraRtcEngine.joinChannel} method, the SDK starts to
 * establish a connection to the specified channel.
 *  - When the SDK successfully joins the channel, it triggers the
 * connectionStateChanged callback and switches to the 3 state.
 *  - After the SDK joins the channel and when it finishes initializing the
 * media engine, the SDK triggers the joinedChannel callback.
 * - 3: The SDK is connected to Agora's edge server and has joined a channel.
 * You can now publish or subscribe to a media stream in the channel.If the
 * connection to the channel is lost because, for example,
 * if the network is down or switched, the SDK automatically tries to reconnect
 * and triggers:
 *  - The connectionStateChanged callback and switches to the 4 state.
 * - 4: The SDK keeps rejoining the channel after being disconnected from a
 * joined channel because of network issues.
 *  - If the SDK cannot rejoin the channel within 10 seconds after being
 * disconnected from Agora's edge server, the SDK triggers the connectionLost
 * callback, stays in this state, and keeps rejoining the channel.
 *  - If the SDK fails to rejoin the channel 20 minutes after being
 * disconnected from Agora's edge server, the SDK triggers the
 * connectionStateChanged callback, switches to the 5 state, and stops
 * rejoining the channel.
 * - 5: The SDK fails to connect to Agora's edge server or join the channel.
 * You must call the {@link AgoraRtcEngine.leaveChannel leaveChannel} method
 * to leave this state.
 *  - Calls the {@link AgoraRtcEngine.joinChannel joinChannel} method again to
 * rejoin the channel.
 *  - If the SDK is banned from joining the channel by Agora's edge server
 * (through the RESTful API), the SDK triggers connectionStateChanged
 * callbacks.
 */
export enum CONNECTION_STATE_TYPE {
  /** 1: The SDK is disconnected from Agora's edge server.
   - This is the initial state before calling the {@link joinChannel} method.
   - The SDK also enters this state when the application calls the {@link leaveChannel} method.
   */
  CONNECTION_STATE_DISCONNECTED = 1,
  /** 2: The SDK is connecting to Agora's edge server.

   - When the application calls the {@link joinChannel} method, the SDK starts to establish a connection to the specified channel, triggers the `connectionStateChanged` callback, and switches to the #CONNECTION_STATE_CONNECTING state.
   - When the SDK successfully joins the channel, it triggers the `connectionStateChanged` callback and switches to the #CONNECTION_STATE_CONNECTED state.
   - After the SDK joins the channel and when it finishes initializing the media engine, the SDK triggers the `joinChannelSuccess` callback.
   */
  CONNECTION_STATE_CONNECTING = 2,
  /** 3: The SDK is connected to Agora's edge server and has joined a channel. You can now publish or subscribe to a media stream in the channel.

   If the connection to the channel is lost because, for example, if the network is down or switched, the SDK automatically tries to reconnect and triggers:
   - The \ref agora::rtc::IRtcEngineEventHandler::onConnectionInterrupted "onConnectionInterrupted" callback (deprecated).
   - The `connectionStateChanged` callback and switches to the #CONNECTION_STATE_RECONNECTING state.
   */
  CONNECTION_STATE_CONNECTED = 3,
  /** 4: The SDK keeps rejoining the channel after being disconnected from a joined channel because of network issues.

   - If the SDK cannot rejoin the channel within 10 seconds after being disconnected from Agora's edge server, the SDK triggers the \ref agora::rtc::IRtcEngineEventHandler::onConnectionLost "onConnectionLost" callback, stays in the #CONNECTION_STATE_RECONNECTING state, and keeps rejoining the channel.
   - If the SDK fails to rejoin the channel 20 minutes after being disconnected from Agora's edge server, the SDK triggers the `connectionStateChanged` callback, switches to the #CONNECTION_STATE_FAILED state, and stops rejoining the channel.
   */
  CONNECTION_STATE_RECONNECTING = 4,
  /** 5: The SDK fails to connect to Agora's edge server or join the channel.

   You must call the {@link leaveChannel} method to leave this state, and call the {@link joinChannel} method again to rejoin the channel.

   If the SDK is banned from joining the channel by Agora's edge server (through the RESTful API), the SDK triggers the \ref agora::rtc::IRtcEngineEventHandler::onConnectionBanned "onConnectionBanned" (deprecated) and `connectionStateChanged` callbacks.
   */
  CONNECTION_STATE_FAILED = 5,
}

/** @zh-cn
 * 引起当前网络状态发生改变的原因：
 * - 0：建立网络连接中
 * - 1：成功加入频道
 * - 2：网络连接中断
 * - 3：网络连接被服务器禁止
 * - 4：加入频道失败。SDK 在尝试加入频道 20 分钟后还是没能加入频道，会返回该状态，并停止尝试重连
 * - 5：离开频道
 * - 6：不是有效的 APP ID。请更换有效的 APP ID 重新加入频道
 * - 7：不是有效的频道名。请更换有效的频道名重新加入频道
 * - 8：生成的 Token 无效
 * - 9：当前使用的 Token 过期，不再有效，需要重新在你的服务端申请生成 Token
 * - 10：此用户被服务器禁止
 * - 11：由于设置了代理服务器，SDK 尝试重连
 * - 12：更新 Token 引起网络连接状态改变
 * - 13：客户端 IP 地址变更，可能是由于网络类型，或网络运营商的 IP 或端口发生改变引起
 */
/**
 * Reasons for a connection state change.
 *
 * - 0: The SDK is connecting to Agora's edge server.
 * - 1: The SDK has joined the channel successfully.
 * - 2: The connection between the SDK and Agora's edge server is
 * interrupted.
 * - 3: The connection between the SDK and Agora's edge server is banned by
 * Agora's edge server.
 * - 4: The SDK fails to join the channel for more than 20 minutes and stops
 * reconnecting to the channel.
 * - 5: The SDK has left the channel.
 * - 6: Invalid App ID.
 * - 7: Invalid Channel Name.
 * - 8: Invalid Token.
 * - 9: Token Expired.
 * - 10: This user has been banned by server.
 * - 11: SDK reconnects for setting proxy server.
 * - 12: Network status change for renew token.
 * - 13: Client IP Address changed.
 * - 19: The user joins the same channel from different devices using the same user ID.
 * - 20: The number of hosts in the channel is already at the upper limit.
 */
export enum CONNECTION_CHANGED_REASON_TYPE {
  /** 0: The SDK is connecting to Agora's edge server. */
  CONNECTION_CHANGED_CONNECTING = 0,
  /** 1: The SDK has joined the channel successfully. */
  CONNECTION_CHANGED_JOIN_SUCCESS = 1,
  /** 2: The connection between the SDK and Agora's edge server is interrupted. */
  CONNECTION_CHANGED_INTERRUPTED = 2,
  /** 3: The user is banned by the server. This error occurs when the user is kicked out the channel from the server. */
  CONNECTION_CHANGED_BANNED_BY_SERVER = 3,
  /** 4: The SDK fails to join the channel for more than 20 minutes and stops reconnecting to the channel. */
  CONNECTION_CHANGED_JOIN_FAILED = 4,
  /** 5: The SDK has left the channel. */
  CONNECTION_CHANGED_LEAVE_CHANNEL = 5,
  /**
   * 6: The specified App ID is invalid. Try to rejoin the channel with a valid App ID.
   */
  CONNECTION_CHANGED_INVALID_APP_ID = 6,
  /** 7: The connection failed since channel name is not valid. */
  CONNECTION_CHANGED_INVALID_CHANNEL_NAME = 7,
  /** 8: The connection failed since token is not valid, possibly because:

   - The App Certificate for the project is enabled in Console, but you do not use Token when joining the channel. If you enable the App Certificate, you must use a token to join the channel.
   - The uid that you specify in the {@link joinChannel} method is different from the uid that you pass for generating the token.
   */
  CONNECTION_CHANGED_INVALID_TOKEN = 8,
  /** 9: The connection failed since token is expired. */
  CONNECTION_CHANGED_TOKEN_EXPIRED = 9,
  /** 10: The connection is rejected by server. This error usually occurs in the following situations:
   * - When the user is already in the channel, and still calls the method to join the channel, for example,
   * {@link joinChannel}.
   * - When the user tries to join a channel during {@link startEchoTest}. Once you
   * call `startEchoTest`, you need to call {@link stopEchoTest} before joining a channel.
   *
   */
  CONNECTION_CHANGED_REJECTED_BY_SERVER = 10,
  /** 11: The connection changed to reconnecting since SDK has set a proxy server. */
  CONNECTION_CHANGED_SETTING_PROXY_SERVER = 11,
  /** 12: When SDK is in connection failed, the renew token operation will make it connecting. */
  CONNECTION_CHANGED_RENEW_TOKEN = 12,
  /** 13: The IP Address of SDK client has changed. i.e., Network type or IP/Port changed by network operator might change client IP address. */
  CONNECTION_CHANGED_CLIENT_IP_ADDRESS_CHANGED = 13,
  /** 14: Timeout for the keep-alive of the connection between the SDK and Agora's edge server. The connection state changes to CONNECTION_STATE_RECONNECTING(4). */
  CONNECTION_CHANGED_KEEP_ALIVE_TIMEOUT = 14,
  /** 19: Join the same channel from different devices using the same user ID.
   *
   * @since v3.7.0
   */
  CONNECTION_CHANGED_SAME_UID_LOGIN = 19,
  /** 20: The number of hosts in the channel is already at the upper limit.
   *
   * @note This enumerator is reported only when the support for 128 users is enabled. The maximum number of hosts is based on the actual number of hosts configured when you enable the 128-user feature.
   *
   * @since v3.7.0
   */
  CONNECTION_CHANGED_TOO_MANY_BROADCASTERS = 20,
}

/** @zh-cn
 * 内置加密模式。Agora 推荐使用 `AES_128_GCM2` 或 `AES_256_GCM2` 加密模式。
 * 这两种模式支持使用盐，安全性更高。
 */
/** Encryption mode. Agora recommends using either the `AES_128_GCM2` or
 * `AES_256_GCM2` encryption mode, both of which support adding a salt and
 * are more secure.
 */
export enum ENCRYPTION_MODE {
     /** @zh-cn
      * 1: 128 位 AES 加密，XTS 模式。
      */
     /** 1: 128-bit AES encryption, XTS mode.
       */
      AES_128_XTS = 1,
     /** @zh-cn
      * 2: 128 位 AES 加密，ECB 模式。
      */
      /** 2: 128-bit AES encryption, ECB mode.
       */
      AES_128_ECB = 2,
     /** @zh-cn
      * 3: 256 位 AES 加密，XTS 模式。
      */
      /** 3: 256-bit AES encryption, XTS mode.
       */
      AES_256_XTS = 3,
     /** @zh-cn
      * 4: 128 位 SM4 加密，ECB 模式。
      */
     /** 4: 128-bit SM4 encryption, ECB mode.
       */
      SM4_128_ECB = 4,
     /** @zh-cn
      * 5: 128 位 AES 加密，GCM 模式。
      *
      * @since v3.3.1
      */
      /** 5: 128-bit AES encryption, GCM mode.
       *
       * @since v3.3.1
       */
      AES_128_GCM = 5,
     /** @zh-cn
      * 6: 256 位 AES 加密，GCM 模式。
      *
      * @since v3.3.1
      */
      /** 6: 256-bit AES encryption, GCM mode.
       *
       * @since v3.3.1
       */
      AES_256_GCM = 6,
      /** @zh-cn
      * 7:（默认）128 位 AES 加密，GCM 模式。该模式安全性更高且需要设置盐（`encryptionKdfSalt`）。
      *
      * @since v3.4.5
      */
      /** 7: (Default) 128-bit AES encryption, GCM mode. This mode requires
       * you to set the salt (`encryptionKdfSalt`).
       *
       * @since v3.4.5
       */
      AES_128_GCM2 = 7,
      /** @zh-cn
      * 8: 256 位 AES 加密，GCM 模式。该模式安全性更高且需要设置盐（`encryptionKdfSalt`）。
      *
      * @since v3.3.1
      */
      /** 8: 256-bit AES encryption, GCM mode. This mode requires
       * you to set the salt (`encryptionKdfSalt`).
       *
       * @since v3.4.5
       */
      AES_256_GCM2 = 8,
      /** @zh-cn
        * @ignore
        * Enumerator boundary.
        */
      /**
        * @ignore
        * Enumerator boundary.
        */
      MODE_END,
}

type Uint8ArrayBuffer = ArrayBuffer;

/** @zh-cn
 * 配置内置加密模式和密钥。
 */
/**
 * Configurations of built-in encryption schemas.
 */
export interface EncryptionConfig {
  /** @zh-cn
   * 内置加密模式，默认为 `AES_128_GCM2` 加密模式
   */
   /**
    * Encryption mode. The default encryption mode is `AES_128_GCM2`.
    */
    encryptionMode: ENCRYPTION_MODE;
    /** @zh-cn
     * 内置加密密钥，字符串类型。
     *
     * @note 如果未指定该参数或将该参数设置为空，则无法启用内置加密，且 SDK 会返回错误码 `-2`。
     */
    /**
     * Encryption key in string type.
     *
     * @note If you do not set an encryption key or set it as NULL, you
     * cannot use the built-in encryption, and the SDK returns the error code
     * `-2`.
     */
    encryptionKey: string;
    /** @zh-cn
     * 盐，长度为 32 字节。Agora 推荐你在服务端使用 OpenSSL 生成盐，详见《媒体流加密》。
     *
     * @note 只有在 #ENCRYPTION_MODE 设为 `AES_128_GCM2` 或 `AES_256_GCM2` 时，该参数才生效。此时，
     * 需确保填入该参数的值不全为 `0`。
     *
     * @since v3.4.5
     */
    /**
     * @since v3.4.5
     *
     * The salt with the length of 32 bytes. Agora recommends using OpenSSL to
     * generate the salt on your server.
     *
     * For details, see *Media Stream Encryption*.
     *
     * @note This parameter is only valid when you set the encryption mode as
     * `AES_128_GCM2` or `AES_256_GCM2`. In this case, ensure that this parameter
     * is not `0`.
     *
     */
    encryptionKdfSalt: Uint8ArrayBuffer;
}

/** @zh-cn
 * @deprecated 该枚举已废弃。
 * 视频属性。
 */
/**
 * @deprecated Video profile.
 */
export enum VIDEO_PROFILE_TYPE {
  /** @zh-cn
   * 0：分辨率 160 × 120，帧率 15 fps，码率 65 Kbps。
   */
  /** 0: 160 &times; 120, frame rate 15 fps, bitrate 65 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_120P = 0,
  /** @zh-cn
   * 2：分辨率 120 × 120，帧率 15 fps，码率 50 Kbps。
   */
  /** 2: 120 &times; 120, frame rate 15 fps, bitrate 50 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_120P_3 = 2,
  /** @zh-cn
   * 10：分辨率 320 × 180，帧率 15 fps，码率 140 Kbps。
   */
  /** 10: 320&times;180, frame rate 15 fps, bitrate 140 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_180P = 10,
  /** @zh-cn
   * 12：分辨率 180 × 180，帧率 15 fps，码率 100 Kbps。
   */
  /** 12: 180 &times; 180, frame rate 15 fps, bitrate 100 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_180P_3 = 12,
  /** @zh-cn
   * 13：分辨率 240 × 180，帧率 15 fps，码率 120 Kbps。
   */
  /** 13: 240 &times; 180, frame rate 15 fps, bitrate 120 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_180P_4 = 13,
  /** @zh-cn
   * 20：分辨率 320 × 240，帧率 15 fps，码率 200 Kbps。
   */
  /** 20: 320 &times; 240, frame rate 15 fps, bitrate 200 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_240P = 20,
  /** @zh-cn
   * 22：分辨率 240 × 240，帧率 15 fps，码率 140 Kbps。
   */
  /** 22: 240 &times; 240, frame rate 15 fps, bitrate 140 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_240P_3 = 22,
  /** @zh-cn
   * 23：分辨率 424 × 240，帧率 15 fps，码率 220 Kbps。
   */
  /** 23: 424 &times; 240, frame rate 15 fps, bitrate 220 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_240P_4 = 23,
  /** @zh-cn
   * 30：分辨率 640 × 360，帧率 15 fps，码率 400 Kbps。
   */
  /** 30: 640 &times; 360, frame rate 15 fps, bitrate 400 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_360P = 30,
  /** @zh-cn
   * 32：分辨率 360 × 360，帧率 15 fps，码率 260 Kbps。
   */
  /** 32: 360 &times; 360, frame rate 15 fps, bitrate 260 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_360P_3 = 32,
  /** @zh-cn
   * 33：分辨率 640 × 360，帧率 30 fps，码率 600 Kbps。
   */
  /** 33: 640 &times; 360, frame rate 30 fps, bitrate 600 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_360P_4 = 33,
  /** @zh-cn
   * 35：分辨率 360 × 360，帧率 30 fps，码率 400 Kbps。
   */
  /** 35: 360 &times; 360, frame rate 30 fps, bitrate 400 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_360P_6 = 35,
  /** @zh-cn
   * 36：分辨率 480 × 360，帧率 15 fps，码率 320 Kbps。
   */
  /** 36: 480 &times; 360, frame rate 15 fps, bitrate 320 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_360P_7 = 36,
  /** @zh-cn
   * 37：分辨率 480 × 360，帧率 30 fps，码率 490 Kbps。
   */
  /** 37: 480 &times; 360, frame rate 30 fps, bitrate 490 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_360P_8 = 37,
  /** @zh-cn
   * 38：分辨率 640 × 360，帧率 15 fps，码率 800 Kbps。
   * **Note**：该视频属性仅适用于直播频道场景。
   */
  /** 38: 640 &times; 360, frame rate 15 fps, bitrate 800 Kbps.
   * **Note**: `1` (live streaming) profile only.
   */
  VIDEO_PROFILE_LANDSCAPE_360P_9 = 38,
  /** @zh-cn
   * 39：分辨率 640 × 360，帧率 24 fps，码率 800 Kbps。
   * **Note**：该视频属性仅适用于直播频道场景。
   */
  /** 39: 640 &times; 360, frame rate 24 fps, bitrate 800 Kbps.
   * **Note**: `1` (live streaming) profile only.
   */
  VIDEO_PROFILE_LANDSCAPE_360P_10 = 39,
  /** @zh-cn
   * 100：分辨率 640 × 360，帧率 24 fps，码率 1000 Kbps。
   * **Note**：该视频属性仅适用于直播频道场景。
   */
  /** 100: 640 &times; 360, frame rate 24 fps, bitrate 1000 Kbps.
   * **Note**: `1` (live streaming) profile only.
   */
  VIDEO_PROFILE_LANDSCAPE_360P_11 = 100,
  /** @zh-cn
   * 40：分辨率 640 × 480，帧率 15 fps，码率 500 Kbps。
   */
  /** 40: 640 &times; 480, frame rate 15 fps, bitrate 500 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_480P = 40,
  /** @zh-cn
   * 42：分辨率 480 × 480，帧率 15 fps，码率 400 Kbps。
   */
  /** 42: 480 &times; 480, frame rate 15 fps, bitrate 400 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_480P_3 = 42,
  /** @zh-cn
   * 43：分辨率 640 × 480，帧率 30 fps，码率 750 Kbps。
   */
  /** 43: 640 &times; 480, frame rate 30 fps, bitrate 750 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_480P_4 = 43,
  /** @zh-cn
   * 45：分辨率 480 × 480，帧率 30 fps，码率 600 Kbps。
   */
  /** 45: 480 &times; 480, frame rate 30 fps, bitrate 600 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_480P_6 = 45,
  /** @zh-cn
   * 47：分辨率 848 × 480，帧率 15 fps，码率 610 Kbps。
   */
  /** 47: 848 &times; 480, frame rate 15 fps, bitrate 610 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_480P_8 = 47,
  /** @zh-cn
   * 48：分辨率 848 × 480，帧率 30 fps，码率 930 Kbps。
   */
  /** 48: 848 &times; 480, frame rate 30 fps, bitrate 930 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_480P_9 = 48,
  /** @zh-cn
   * 49：分辨率 640 × 480，帧率 10 fps，码率 400 Kbps。
   */
  /** 49: 640 &times; 480, frame rate 10 fps, bitrate 400 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_480P_10 = 49,
  /** @zh-cn
   * 50：分辨率 1280 × 720，帧率 15 fps，码率 1130 Kbps。
   */
  /** 50: 1280 &times; 720, frame rate 15 fps, bitrate 1130 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_720P = 50,
  /** @zh-cn
   * 52：分辨率 1280 × 720，帧率 30 fps，码率 1710 Kbps。
   */
  /** 52: 1280 &times; 720, frame rate 30 fps, bitrate 1710 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_720P_3 = 52,
  /** @zh-cn
   * 54：分辨率 960 × 720，帧率 15 fps，码率 910 Kbps。
   */
  /** 54: 960 &times; 720, frame rate 15 fps, bitrate 910 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_720P_5 = 54,
  /** @zh-cn
   * 55：分辨率 960 × 720，帧率 30 fps，码率 1380 Kbps。
   */
  /** 55: 960 &times; 720, frame rate 30 fps, bitrate 1380 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_720P_6 = 55,
  /** @zh-cn
   * 60：分辨率 1920 × 1080，帧率 15 fps，码率 2080 Kbps。
   */
  /** 60: 1920 &times; 1080, frame rate 15 fps, bitrate 2080 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_1080P = 60,
  /** @zh-cn
   * 62：分辨率 1920 × 1080，帧率 30 fps，码率 3150 Kbps。
   */
  /** 62: 1920 &times; 1080, frame rate 30 fps, bitrate 3150 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_1080P_3 = 62,
  /** @zh-cn
   * 64：分辨率 1920 × 1080，帧率 60 fps，码率 4780 Kbps。
   */
  /** 64: 1920 &times; 1080, frame rate 60 fps, bitrate 4780 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_1080P_5 = 64,
  /** @zh-cn
   * 66：分辨率 2560 × 1440，帧率 30 fps，码率 4850 Kbps。
   */
  /** 66: 2560 &times; 1440, frame rate 30 fps, bitrate 4850 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_1440P = 66,
  /** @zh-cn
   * 67：分辨率 2560 × 1440，帧率 60 fps，
   * 码率 7350 Kbps。
   */
  /** 67: 2560 &times; 1440, frame rate 60 fps, bitrate 6500 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_1440P_2 = 67,
  /** @zh-cn
   * 70：分辨率 3840 × 2160，分辨率 30 fps，码率 8910 Kbps。
   */
  /** 70: 3840 &times; 2160, frame rate 30 fps, bitrate 6500 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_4K = 70,
  /** @zh-cn
   * 72：分辨率 3840 × 2160，帧率 60 fps，码率 13500 Kbps。
   */
  /** 72: 3840 &times; 2160, frame rate 60 fps, bitrate 6500 Kbps. */
  VIDEO_PROFILE_LANDSCAPE_4K_3 = 72,
  /** @zh-cn
   * 1000：分辨率 120 × 160，帧率 15 fps，码率 65 Kbps。
   */
  /** 1000: 120 &times; 160, frame rate 15 fps, bitrate 65 Kbps. */
  VIDEO_PROFILE_PORTRAIT_120P = 1000,
  /** @zh-cn
   * 1002：分辨率 120 × 120，帧率 15 fps，码率 50 Kbps。
   */
  /** 1002: 120 &times; 120, frame rate 15 fps, bitrate 50 Kbps. */
  VIDEO_PROFILE_PORTRAIT_120P_3 = 1002,
  /** @zh-cn
   * 1010：分辨率 180 × 320，帧率 15 fps，码率 140 Kbps。 */
  /** 1010: 180 &times; 320, frame rate 15 fps, bitrate 140 Kbps. */
  VIDEO_PROFILE_PORTRAIT_180P = 1010,
  /** @zh-cn
   * 1012：分辨率 180 × 180，帧率 15 fps，码率 100 Kbps。 */
  /** 1012: 180 &times; 180, frame rate 15 fps, bitrate 100 Kbps. */
  VIDEO_PROFILE_PORTRAIT_180P_3 = 1012,
  /** @zh-cn
   * 1013：分辨率 180 × 240，帧率 15 fps，码率 120 Kbps。 */
  /** 1013: 180 &times; 240, frame rate 15 fps, bitrate 120 Kbps. */
  VIDEO_PROFILE_PORTRAIT_180P_4 = 1013,
  /** @zh-cn
   * 1020：分辨率 240 × 320，帧率 15 fps，码率 200 Kbps。 */
  /** 1020: 240 &times; 320, frame rate 15 fps, bitrate 200 Kbps. */
  VIDEO_PROFILE_PORTRAIT_240P = 1020,
  /** @zh-cn
   * 1022：分辨率 240 × 240，帧率 15 fps，码率 140 Kbps。 */
  /** 1022: 240 &times; 240, frame rate 15 fps, bitrate 140 Kbps. */
  VIDEO_PROFILE_PORTRAIT_240P_3 = 1022,
  /** @zh-cn
   * 1023：分辨率 240 × 424，帧率 15 fps，码率 220 Kbps */
  /** 1023: 240 &times; 424, frame rate 15 fps, bitrate 220 Kbps. */
  VIDEO_PROFILE_PORTRAIT_240P_4 = 1023,
  /** @zh-cn
   * 1030：分辨率 360 × 640，帧率 15 fps，码率 400 Kbps */
  /** 1030: 360 &times; 640, frame rate 15 fps, bitrate 400 Kbps. */
  VIDEO_PROFILE_PORTRAIT_360P = 1030,
  /** @zh-cn
   * 1032：分辨率 360 × 360，帧率 15 fps，码率 260 Kbps。 */
  /** 1032: 360 &times; 360, frame rate 15 fps, bitrate 260 Kbps. */
  VIDEO_PROFILE_PORTRAIT_360P_3 = 1032,
  /** @zh-cn
   * 1033：分辨率 360 × 640，帧率 30 fps，码率 600 Kbps。 */
  /** 1033: 360 &times; 640, frame rate 30 fps, bitrate 600 Kbps. */
  VIDEO_PROFILE_PORTRAIT_360P_4 = 1033,
  /** @zh-cn
   * 1035：分辨率 360 × 360，帧率 30 fps，码率 400 Kbps。 */
  /** 1035: 360 &times; 360, frame rate 30 fps, bitrate 400 Kbps. */
  VIDEO_PROFILE_PORTRAIT_360P_6 = 1035,
  /** @zh-cn
   * 1036：分辨率 360 × 480，帧率 15 fps，码率 320 Kbps。 */
  /** 1036: 360 &times; 480, frame rate 15 fps, bitrate 320 Kbps. */
  VIDEO_PROFILE_PORTRAIT_360P_7 = 1036,
  /** @zh-cn
   * 1037：分辨率 360 × 480，帧率 30 fps，码率 490 Kbps。 */
  /** 1037: 360 &times; 480, frame rate 30 fps, bitrate 490 Kbps. */
  VIDEO_PROFILE_PORTRAIT_360P_8 = 1037,
  /** @zh-cn
   * 1038：分辨率 360 × 640，帧率 15 fps，码率 800 Kbps。
   * **Note**：该视频属性仅适用于直播频道场景。
   */
  /** 1038: 360 &times; 640, frame rate 15 fps, bitrate 800 Kbps.
   * **Note**: `1` (live streaming) profile only.
   */
  VIDEO_PROFILE_PORTRAIT_360P_9 = 1038,
  /** @zh-cn
   * 1039：分辨率 360 × 640，帧率 24 fps，码率 800 Kbps。
   * **Note**：该视频属性仅适用于直播频道场景。
   */
  /** 1039: 360 &times; 640, frame rate 24 fps, bitrate 800 Kbps.
   * **Note**: `1` (live streaming) profile only.
   */
  VIDEO_PROFILE_PORTRAIT_360P_10 = 1039,
  /** @zh-cn
   * 1100：分辨率 360 × 640，帧率 24 fps，码率 1000 Kbps。
   * **Note**： 该视频属性仅适用于直播频道场景。
   */
  /** 1100: 360 &times; 640, frame rate 24 fps, bitrate 1000 Kbps.
   * **Note**: `1` (live streaming) profile only.
   */
  VIDEO_PROFILE_PORTRAIT_360P_11 = 1100,
  /** @zh-cn
   * 1040：分辨率 480 × 640，帧率 15 fps，码率 500 Kbps。
   */
  /** 1040: 480 &times; 640, frame rate 15 fps, bitrate 500 Kbps. */
  VIDEO_PROFILE_PORTRAIT_480P = 1040,
  /** @zh-cn
   * 1042：分辨率 480 × 480，帧率 15 fps，码率 400 Kbps。
   */
  /** 1042: 480 &times; 480, frame rate 15 fps, bitrate 400 Kbps. */
  VIDEO_PROFILE_PORTRAIT_480P_3 = 1042,
  /** @zh-cn
   * 1043：分辨率 480 × 640，帧率 30 fps，码率 750 Kbps。
   */
  /** 1043: 480 &times; 640, frame rate 30 fps, bitrate 750 Kbps. */
  VIDEO_PROFILE_PORTRAIT_480P_4 = 1043,
  /** @zh-cn
   * 1045：分辨率 480 × 480，帧率 30 fps，码率 600 Kbps。
   */
  /** 1045: 480 &times; 480, frame rate 30 fps, bitrate 600 Kbps. */
  VIDEO_PROFILE_PORTRAIT_480P_6 = 1045,
  /** @zh-cn
   * 1047：分辨率 480 × 848，帧率 15 fps，码率 610 Kbps。
   */
  /** 1047: 480 &times; 848, frame rate 15 fps, bitrate 610 Kbps. */
  VIDEO_PROFILE_PORTRAIT_480P_8 = 1047,
  /** @zh-cn
   * 1048：分辨率 480 × 848，帧率 30 fps，码率 930 Kbps。
   */
  /** 1048: 480 &times; 848, frame rate 30 fps, bitrate 930 Kbps. */
  VIDEO_PROFILE_PORTRAIT_480P_9 = 1048,
  /** @zh-cn
   * 1049：分辨率 480 × 640，帧率 10 fps，码率 400 Kbps。
   */
  /** 1049: 480 &times; 640, frame rate 10 fps, bitrate 400 Kbps. */
  VIDEO_PROFILE_PORTRAIT_480P_10 = 1049,
  /** @zh-cn
   * 1050：分辨率 720 × 1280，帧率 15 fps，码率 1130 Kbps。
   */
  /** 1050: 720 &times; 1280, frame rate 15 fps, bitrate 1130 Kbps. */
  VIDEO_PROFILE_PORTRAIT_720P = 1050,
  /** @zh-cn
   * 1052：分辨率 720 × 1280，帧率 30 fps，码率 1710 Kbps。
   */
  /** 1052: 720 &times; 1280, frame rate 30 fps, bitrate 1710 Kbps. */
  VIDEO_PROFILE_PORTRAIT_720P_3 = 1052,
  /** @zh-cn
   * 1054：分辨率 720 × 960，帧率 15 fps，码率 910 Kbps。
   */
  /** 1054: 720 &times; 960, frame rate 15 fps, bitrate 910 Kbps. */
  VIDEO_PROFILE_PORTRAIT_720P_5 = 1054,
  /** @zh-cn
   * 1055：分辨率 720 × 960，帧率 30 fps，码率 1380 Kbps。
   */
  /** 1055: 720 &times; 960, frame rate 30 fps, bitrate 1380 Kbps. */
  VIDEO_PROFILE_PORTRAIT_720P_6 = 1055,
  /** @zh-cn
   * 1060：分辨率 1080 × 1920，帧率 15 fps，码率 2080 Kbps。
   */
  /** 1060: 1080 &times; 1920, frame rate 15 fps, bitrate 2080 Kbps. */
  VIDEO_PROFILE_PORTRAIT_1080P = 1060,
  /** @zh-cn
   * 1062：分辨率 1080 × 1920，帧率 30 fps，码率 3150 Kbps。
   */
  /** 1062: 1080 &times; 1920, frame rate 30 fps, bitrate 3150 Kbps. */
  VIDEO_PROFILE_PORTRAIT_1080P_3 = 1062,
  /** @zh-cn
   * 1064：分辨率 1080 × 1920，帧率 60 fps，码率 4780 Kbps。
   */
  /** 1064: 1080 &times; 1920, frame rate 60 fps, bitrate 4780 Kbps. */
  VIDEO_PROFILE_PORTRAIT_1080P_5 = 1064,
  /** @zh-cn
   * 1066：分辨率 1440 × 2560，帧率 30 fps，码率 4850 Kbps。
   */
  /** 1066: 1440 &times; 2560, frame rate 30 fps, bitrate 4850 Kbps. */
  VIDEO_PROFILE_PORTRAIT_1440P = 1066,
  /** @zh-cn
   * 1067：分辨率 1440 × 2560，帧率 60 fps，码率 6500 Kbps。
   */
  /** 1067: 1440 &times; 2560, frame rate 60 fps, bitrate 6500 Kbps. */
  VIDEO_PROFILE_PORTRAIT_1440P_2 = 1067,
  /** @zh-cn
   * 1070：分辨率 2160 × 3840，分辨率 30 fps，码率 6500 Kbps。
   */
  /** 1070: 2160 &times; 3840, frame rate 30 fps, bitrate 6500 Kbps. */
  VIDEO_PROFILE_PORTRAIT_4K = 1070,
  /** @zh-cn
   * 1072：分辨率 2160 × 3840，帧率 60 fps，码率 6500 Kbps。
   */
  /** 1072: 2160 &times; 3840, frame rate 60 fps, bitrate 6500 Kbps. */
  VIDEO_PROFILE_PORTRAIT_4K_3 = 1072,
  /** @zh-cn
   * 默认视频属性：分辨率 640 × 360，帧率 15 fps，码率 400 Kbps。
   */
  /** Default 640 &times; 360, frame rate 15 fps, bitrate 400 Kbps. */
  VIDEO_PROFILE_DEFAULT = VIDEO_PROFILE_LANDSCAPE_360P,
}
/** @zh-cn
 * RTMP/RTMPS 推流时发生的事件。
 *
 * @since v3.2.0
 */
/** Events during the RTMP or RTMPS streaming.
 *
 * @since v3.2.0
 */
export enum RTMP_STREAMING_EVENT {
  /** @zh-cn
   * 1: RTMP/RTMPS 推流时，添加背景图或水印出错。
   *
   * @since v3.2.0
   */
  /** 1: An error occurs when you add a background image or a watermark image to
   * the RTMP or RTMPS stream.
   *
   * @since v3.2.0
   */
  RTMP_STREAMING_EVENT_FAILED_LOAD_IMAGE = 1,
  /** @zh-cn
   * 2: 该推流 URL 已用于推流。如果你想开始新的推流，请使用新的推流 URL。
   *
   * @since v3.4.5
   */
  /** 2: The streaming URL is already being used for Media Push. If you
   * want to start new streaming, use a new streaming URL.
   *
   * @since v3.4.5
   */
  RTMP_STREAMING_EVENT_URL_ALREADY_IN_USE = 2,
  /** @zh-cn
   * 3: 功能不支持。
   *
   * @since v3.6.1.4
   */
  /** 3: The feature is not supported.
   *
   * @since v3.6.1.4
   */
  RTMP_STREAMING_EVENT_ADVANCED_FEATURE_NOT_SUPPORT = 3,
  /** @zh-cn
   * 4: 预留参数。
   *
   * @since v3.6.1.4
   */
  /** 4: Reserved.
   *
   * @since v3.6.1.4
   */
  RTMP_STREAMING_EVENT_REQUEST_TOO_OFTEN = 4,
}
/** @zh-cn
 * 预设的音效选项。
 *
 * @since v3.2.0
 */
/** The options for SDK preset audio effects.
 *
 * @since v3.2.0
 */
export enum AUDIO_EFFECT_PRESET {
    /** @zh-cn
     * 原声，即关闭人声音效。
     */
    /** Turn off audio effects and use the original voice.
     */
    AUDIO_EFFECT_OFF = 0x00000000,
    /** @zh-cn
     * KTV。
     *
     * @note 为获取更好的人声效果，Agora 建议你在使用该枚举前将 {@link setAudioProfile}
     * 的 `profile` 参数设置为 `4` 或 `5`。
     *
     */
    /** An audio effect typical of a KTV venue.
     *
     * @note To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    ROOM_ACOUSTICS_KTV = 0x02010100,
    /** @zh-cn
     * 演唱会。
     *
     * @note 为获取更好的人声效果，Agora 建议你在使用该枚举前将 {@link setAudioProfile}
     * 的 `profile` 参数设置为 `4` 或 `5`。
     */
    /** An audio effect typical of a concert hall.
     *
     * @note To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    ROOM_ACOUSTICS_VOCAL_CONCERT = 0x02010200,
    /** @zh-cn
     * 录音棚。
     *
     * @note 为获取更好的人声效果，Agora 建议你在使用该枚举前将 {@link setAudioProfile}
     * 的 `profile` 参数设置为 `4` 或 `5`。
     */
    /** An audio effect typical of a recording studio.
     *
     * @note To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    ROOM_ACOUSTICS_STUDIO = 0x02010300,
    /** @zh-cn
     * 留声机。
     *
     * @note 为获取更好的人声效果，Agora 建议你在使用该枚举前将 {@link setAudioProfile}
     * 的 `profile` 参数设置为 `4` 或 `5`。
     */
    /** An audio effect typical of a vintage phonograph.
     *
     * @note To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    ROOM_ACOUSTICS_PHONOGRAPH = 0x02010400,
    /** @zh-cn
     * 虚拟立体声，即 SDK 将单声道的音频渲染出双声道的音效。
     *
     * @note 你需要在使用该枚举前将 {@link setAudioProfile}
     * 的 `profile` 参数设置 `3` 或 `5`，否则该枚举设置无效。
     */
    /** A virtual stereo effect that renders monophonic audio as stereo audio.
     *
     * @note Call {@link setAudioProfile} and set the `profile` parameter to
     * `3` or `5` before setting this
     * enumerator; otherwise, the enumerator setting does not take effect.
     */
    ROOM_ACOUSTICS_VIRTUAL_STEREO = 0x02010500,
    /** @zh-cn
     * 空旷。
     *
     * @note 为获取更好的人声效果，Agora 建议你在使用该枚举前将 {@link setAudioProfile}
     * 的 `profile` 参数设置为 `4` 或 `5`。
     */
    /** A more spatial audio effect.
     *
     * @note To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    ROOM_ACOUSTICS_SPACIAL = 0x02010600,
    /** @zh-cn
     * 空灵。
     *
     * @note 为获取更好的人声效果，Agora 建议你在使用该枚举前将 {@link setAudioProfile}
     * 的 `profile` 参数设置为 `4` 或 `5`。
     */
    /** A more ethereal audio effect.
     *
     * @note To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    ROOM_ACOUSTICS_ETHEREAL = 0x02010700,
    /** @zh-cn
     * 3D 人声，即 SDK 将音频渲染出在用户周围环绕的效果，环绕周期为 10 秒。设置该音效后，你还可以
     * 调用 {@link setAudioEffectParameters} 修改环绕周期。
     *
     * **Note**:
     * - 你需要在使用该枚举前将 {@link setAudioProfile} 的 `profile` 参数设置
     * 为 `3` 或 `5`，否则该枚举设置无效。
     * - 启用 3D 人声后，用户需要使用支持双声道的音频播放设备才能听到预期效果。
     */
    /** A 3D voice effect that makes the voice appear to be moving around
     * the user. The default cycle period of the 3D
     * voice effect is 10 seconds. To change the cycle period,
     * call {@link setAudioEffectParameters}
     * after this method.
     *
     * @note
     * - Call {@link setAudioProfile} and set the `profile` parameter to `3`
     * or `5` before setting this enumerator; otherwise, the enumerator
     * setting does not take effect.
     * - If the 3D voice effect is enabled, users need to use stereo audio
     * playback devices to hear the anticipated voice effect.
     */
    ROOM_ACOUSTICS_3D_VOICE = 0x02010800,
    /** @zh-cn
     * 大叔。
     *
     * **Note**:
     * - 建议用于处理男声，否则无法达到预期效果。
     * - 为获取更好的人声效果，Agora 建议你在使用该枚举前将 {@link setAudioProfile}
     * 的 `profile` 参数设置为 `4` 或 `5`。
     */
    /** The voice of an uncle.
     *
     * @note
     * - Agora recommends using this enumerator to process a male-sounding
     * voice; otherwise, you may not hear the anticipated voice effect.
     * - To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    VOICE_CHANGER_EFFECT_UNCLE = 0x02020100,
    /** @zh-cn
     * 老年男性。
     *
     * **Note**:
     * - 建议用于处理男声，否则无法达到预期效果。
     * - 为获取更好的人声效果，Agora 建议你在使用该枚举前将 {@link setAudioProfile}
     * 的 `profile` 参数设置为 `4` 或 `5`。
     */
    /** The voice of an old man.
     *
     * @note
     * - Agora recommends using this enumerator to process a male-sounding
     * voice; otherwise, you may not hear the anticipated voice effect.
     * - To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    VOICE_CHANGER_EFFECT_OLDMAN = 0x02020200,
    /** @zh-cn
     * 男孩。
     *
     * **Note**:
     * - 建议用于处理男声，否则无法达到预期效果。
     * - 为获取更好的人声效果，Agora 建议你在使用该枚举前将 {@link setAudioProfile}
     * 的 `profile` 参数设置为 `4` 或 `5`。
     */
    /** The voice of a boy.
     *
     * @note
     * - Agora recommends using this enumerator to process a male-sounding
     * voice; otherwise, you may not hear the anticipated voice effect.
     * - To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    VOICE_CHANGER_EFFECT_BOY = 0x02020300,
    /** @zh-cn
     * 少女。
     *
     * **Note**:
     * - 建议用于处理女声，否则无法达到预期效果。
     * - 为获取更好的人声效果，Agora 建议你在使用该枚举前将 {@link setAudioProfile}
     * 的 `profile` 参数设置为 `4` 或 `5`。
     */
    /** The voice of a young woman.
     *
     * @note
     * - Agora recommends using this enumerator to process a female-sounding
     * voice; otherwise, you may not hear the anticipated voice effect.
     * - To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    VOICE_CHANGER_EFFECT_SISTER = 0x02020400,
    /** @zh-cn
     * 女孩。
     *
     * **Note**:
     * - 建议用于处理女声，否则无法达到预期效果。
     * - 为获取更好的人声效果，Agora 建议你在使用该枚举前将 {@link setAudioProfile}
     * 的 `profile` 参数设置为 `4` 或 `5`。
     */
    /** The voice of a girl.
     *
     * @note
     * - Agora recommends using this enumerator to process a female-sounding
     * voice; otherwise, you may not hear the anticipated voice effect.
     * - To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    VOICE_CHANGER_EFFECT_GIRL = 0x02020500,
    /** @zh-cn
     * 猪八戒。
     *
     * @note 为获取更好的人声效果，Agora 建议你在使用该枚举前将 {@link setAudioProfile}
     * 的 `profile` 参数设置为 `4` 或 `5`。
     */
    /** The voice of Pig King, a character in Journey to the West who has a
     * voice like a growling bear.
     *
     * @note To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    VOICE_CHANGER_EFFECT_PIGKING = 0x02020600,
    /** @zh-cn
     * 绿巨人。
     *
     * @note 为获取更好的人声效果，Agora 建议你在使用该枚举前将 {@link setAudioProfile}
     * 的 `profile` 参数设置为 `4` 或 `5`。
     */
    /** The voice of Hulk.
     *
     * @note To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    VOICE_CHANGER_EFFECT_HULK = 0x02020700,
    /** @zh-cn
     * R&B。
     *
     * @note 你需要在使用该枚举前将 {@link setAudioProfile}
     * 的 `profile` 参数设置 `4` 或 `5`，否则该枚举设置无效。
     */
    /** An audio effect typical of R&B music.
     *
     * @note Call {@link setAudioProfile} and set the `profile` parameter
     * to `4` or `5` before setting this enumerator; otherwise, the enumerator
     * setting does not take effect.
     */
    STYLE_TRANSFORMATION_RNB = 0x02030100,
    /** @zh-cn
     * 流行。
     *
     * @note 你需要在使用该枚举前将 {@link setAudioProfile}
     * 的 `profile` 参数设置 `4` 或 `5`，否则该枚举设置无效。
     */
    /** An audio effect typical of popular music.
     *
     * @note Call {@link setAudioProfile} and set the `profile` parameter
     * to `4` or `5` before setting this enumerator; otherwise, the enumerator
     * setting does not take effect.
     */
    STYLE_TRANSFORMATION_POPULAR = 0x02030200,
    /** @zh-cn
     * 电音，即 SDK 以主音音高为 C 的自然大调为基础修正音频的实际音高。设置该音效后，你还可以
     * 调用 {@link setAudioEffectParameters} 调整修音的基础调式和主音音高。
     *
     * @note 为获取更好的人声效果，Agora 建议你在使用该枚举前将 {@link setAudioProfile}
     * 的 `profile` 参数设置为 `4` 或 `5`。
     */
    /** A pitch correction effect that corrects the user's pitch based on
     * the pitch of the natural C major scale.
     * To change the basic mode and tonic pitch,
     * call {@link setAudioEffectParameters} after this method.
     *
     * @note To achieve better audio effect quality, Agora recommends
     * calling {@link setAudioProfile}
     * and setting the `profile` parameter to `4` or `5`
     * before setting this enumerator.
     */
    PITCH_CORRECTION = 0x02040100,
};
/** @zh-cn
 * 预设的美声效果选项。
 *
 * @since v3.2.0
 */
/** The options for SDK preset voice beautifier effects.
 */
export enum VOICE_BEAUTIFIER_PRESET {
    /** @zh-cn
     * 原声，即关闭美声效果。
     */
    /** Turn off voice beautifier effects and use the original voice.
     */
    VOICE_BEAUTIFIER_OFF = 0x00000000,
    /** @zh-cn
     * 磁性（男）。
     *
     * @note 该设置仅对男声有效。**请勿**用于设置女声，否则音频会失真。
     */
    /** A more magnetic voice.
     *
     * @note Agora recommends using this enumerator to process a male-sounding
     * voice; otherwise, you may experience vocal distortion.
     */
    CHAT_BEAUTIFIER_MAGNETIC = 0x01010100,
    /** @zh-cn
     * 清新（女）。
     *
     * @note 该设置仅对女声有效。**请勿**用于设置男声，否则音频会失真。
     */
    /** A fresher voice.
     *
     * @note Agora recommends using this enumerator to process a
     * female-sounding voice; otherwise, you may experience vocal distortion.
     */
    CHAT_BEAUTIFIER_FRESH = 0x01010200,
    /** @zh-cn
     * 活力（女）。
     *
     * @note 该设置仅对女声有效。**请勿**用于设置男声，否则音频会失真。
     */
    /** A more vital voice.
     *
     * @note Agora recommends using this enumerator to process a
     * female-sounding voice; otherwise, you may experience vocal distortion.
     */
    CHAT_BEAUTIFIER_VITALITY = 0x01010300,
    /** @zh-cn
     * 歌唱美声。
     * - 如果调用 {@link setVoiceBeautifierPreset}(SINGING_BEAUTIFIER)，
     * 你可以美化男声并添加歌声在小房间的混响效果。请勿用于设置女声，否则音频会失真。
     * - 如果调用 {@link setVoiceBeautifierParameters}(SINGING_BEAUTIFIER, param1, param2)，
     * 你可以美化男声或女声并添加混响效果。
     *
     * @since v3.3.1
     */
    /**
     * @since v3.3.1
     *
     * Singing beautifier effect.
     * - If you call {@link setVoiceBeautifierPreset}(SINGING_BEAUTIFIER),
     * you can beautify a male-sounding voice and add a reverberation
     * effect that sounds like singing in a small room. Agora recommends not
     * using {@link setVoiceBeautifierPreset}(SINGING_BEAUTIFIER)
     * to process a female-sounding voice; otherwise, you may experience vocal
     * distortion.
     * - If you call {@link setVoiceBeautifierParameters}(SINGING_BEAUTIFIER,
     * param1, param2), you can beautify a male- or female-sounding voice and
     * add a reverberation effect.
     */
     SINGING_BEAUTIFIER = 0x01020100,
    /** @zh-cn
     * 浑厚。
     */
    /** A more vigorous voice.
     */
    TIMBRE_TRANSFORMATION_VIGOROUS = 0x01030100,
    /** @zh-cn
     * 低沉。
     */
    /** A deeper voice.
     */
    TIMBRE_TRANSFORMATION_DEEP = 0x01030200,
    /** @zh-cn
     * 圆润。
     */
    /** A mellower voice.
     */
    TIMBRE_TRANSFORMATION_MELLOW = 0x01030300,
    /** @zh-cn
     * 假音。
     */
    /** A falsetto voice.
     */
    TIMBRE_TRANSFORMATION_FALSETTO = 0x01030400,
    /** @zh-cn
     * 饱满。
     */
    /** A fuller voice.
     */
    TIMBRE_TRANSFORMATION_FULL = 0x01030500,
    /** @zh-cn
     * 清澈。
     */
    /** A clearer voice.
     */
    TIMBRE_TRANSFORMATION_CLEAR = 0x01030600,
    /** @zh-cn
     * 高亢。
     */
    /** A more resounding voice.
     */
    TIMBRE_TRANSFORMATION_RESOUNDING = 0x01030700,
    /** @zh-cn
     * 嘹亮。
     */
    /** A more ringing voice.
     */
    TIMBRE_TRANSFORMATION_RINGING = 0x01030800,
}
/** @zh-cn
 * 直播频道中观众端（用户角色为观众的客户端）的延时级别。仅在用户角色设为 audience 时才生效。
 */
/** The latency level of an audience member in interactive live streaming.
 *
 * @note Takes effect only when the user role is audience.
 */
export enum AUDIENCE_LATENCY_LEVEL_TYPE {
    /** @zh-cn
     * 1: 低延时。
     */
    /** 1: Low latency. */
    AUDIENCE_LATENCY_LEVEL_LOW_LATENCY = 1,
    /** @zh-cn
     * 2:（默认）超低延时。
     */
    /** 2: (Default) Ultra low latency. */
    AUDIENCE_LATENCY_LEVEL_ULTRA_LOW_LATENCY = 2,
}
/** @zh-cn
 * 订阅状态。
 *
 * @since v3.2.0
 *
 * - 0: 加入频道后的初始订阅状态。
 * - 1: 订阅失败。可能是因为：
 *   - 远端用户：
 *     - 调用 {@link muteLocalAudioStream muteLocalAudioStream(true)} 或
 * {@link muteLocalVideoStream muteLocalVideoStream(true)} 停止发送本地媒体流。
 *     - 调用 {@link disableAudio} 或 {@link disableVideo} 关闭本地音频或视频模块。
 *     - 调用 {@link enableLocalAudio enableLocalAudio(false)} 或
 * {@link enableLocalVideo enableLocalVideo(false)} 关闭本地音频或视频采集。
 *     - 用户角色为观众。
 *   - 本地用户调用以下方法停止接收远端媒体流：
 *     - 调用 {@link muteRemoteAudioStream muteRemoteAudioStream(true)}、
 * {@link muteAllRemoteAudioStreams muteAllRemoteAudioStreams(true)} 或
 * {@link setDefaultMuteAllRemoteAudioStreams setDefaultMuteAllRemoteAudioStreams(true)}
 * 停止接收远端音频流。
 *     - 调用 {@link muteRemoteVideoStream muteRemoteVideoStream(true)}、
 * {@link muteAllRemoteVideoStreams muteAllRemoteVideoStreams(true)} 或
 * {@link setDefaultMuteAllRemoteVideoStreams setDefaultMuteAllRemoteVideoStreams(true)}
 * 停止接收远端视频流。
 * - 2: 正在订阅。
 * - 3: 收到了远端流，订阅成功。
 */
/** The subscribing state.
 *
 * @since v3.2.0
 *
 * - 0: The initial subscribing state after joining the channel.
 * - 1: Fails to subscribe to the remote stream. Possible reasons:
 *   - The remote user:
 *     - Calls {@link muteLocalAudioStream muteLocalAudioStream(true)} or
 * {@link muteLocalVideoStream muteLocalVideoStream(true)} to stop
 * sending local streams.
 *     - Calls {@link disableAudio} or {@link disableVideo} to disable the
 * entire audio or video modules.
 *     - Calls {@link enableLocalAudio enableLocalAudio(false)} or
 * {@link enableLocalVideo enableLocalVideo(false)} to disable the local
 * audio sampling or video capturing.
 *     - The role of the remote user is `2` (audience).
 *   - The local user calls the following methods to stop receiving remote
 * streams:
 *     - Calls {@link muteRemoteAudioStream muteRemoteAudioStream(true)},
 * {@link muteAllRemoteAudioStreams muteAllRemoteAudioStreams(true)}, or
 * {@link setDefaultMuteAllRemoteAudioStreams setDefaultMuteAllRemoteAudioStreams(true)}
 * to stop receiving remote audio streams.
 *     - Calls {@link muteRemoteVideoStream muteRemoteVideoStream(true)},
 * {@link muteAllRemoteVideoStreams muteAllRemoteVideoStreams(true)}, or
 * {@link setDefaultMuteAllRemoteVideoStreams setDefaultMuteAllRemoteVideoStreams(true)}
 * to stop receiving remote video streams.
 * - 2: Subscribing.
 * - 3: Subscribes to and receives the remote stream successfully.
 */
export enum STREAM_SUBSCRIBE_STATE {
  /** 0: The initial subscribing state after joining the channel.
   */
  SUB_STATE_IDLE = 0,
  /** 1: Fails to subscribe to the remote stream. Possible reasons:
   * - The remote user:
   *  - Calls \ref IRtcEngine::muteLocalAudioStream "muteLocalAudioStream(true)" or \ref IRtcEngine::muteLocalVideoStream "muteLocalVideoStream(true)" to stop sending local streams.
   *  - Calls \ref IRtcEngine::disableAudio "disableAudio" or \ref IRtcEngine::disableVideo "disableVideo" to disable the entire audio or video modules.
   *  - Calls \ref IRtcEngine::enableLocalAudio "enableLocalAudio(false)" or \ref IRtcEngine::enableLocalVideo "enableLocalVideo(false)" to disable the local audio sampling or video capturing.
   *  - The role of the remote user is `AUDIENCE`.
   * - The local user calls the following methods to stop receiving remote streams:
   *  - Calls \ref IRtcEngine::muteRemoteAudioStream "muteRemoteAudioStream(true)", \ref IRtcEngine::muteAllRemoteAudioStreams "muteAllRemoteAudioStreams(true)", or \ref IRtcEngine::setDefaultMuteAllRemoteAudioStreams "setDefaultMuteAllRemoteAudioStreams(true)" to stop receiving remote audio streams.
   *  - Calls \ref IRtcEngine::muteRemoteVideoStream "muteRemoteVideoStream(true)", \ref IRtcEngine::muteAllRemoteVideoStreams "muteAllRemoteVideoStreams(true)", or \ref IRtcEngine::setDefaultMuteAllRemoteVideoStreams "setDefaultMuteAllRemoteVideoStreams(true)" to stop receiving remote video streams.
   */
  SUB_STATE_NO_SUBSCRIBED = 1,
  /** 2: Subscribing.
   */
  SUB_STATE_SUBSCRIBING = 2,
  /** 3: Subscribes to and receives the remote stream successfully.
   */
  SUB_STATE_SUBSCRIBED = 3,
}

/** @zh-cn
 * 频道信息。
 */
/**
 * The definition of {@link ChannelMediaInfo}.
 */
export interface ChannelMediaInfo {
  /** @zh-cn
   * 频道名。
   *
   * 默认值为 NULL，表示 SDK 填充当前的频道名。
   */
  /**
   * The channel name.
   *
   * The default value is NULL, which means that
   * the SDK applies the current channel name.
   */
  channelName: string;
  /** @zh-cn
   * 能加入频道的 Token。
   *
   * 默认值为 NULL，表示 SDK 填充当前使用的 Token。
   */
  /**
   * The token that enables the user to join the channel.
   *
   * The default value is NULL, which means that the SDK applies the current
   * token.
   */
  token: string;
  /** @zh-cn
   * 用户 ID。
   */
  /**
   * The user ID.
   */
  uid: number;
}
/** @zh-cn
 * 频道媒体设置选项
 */
/**
 * The channel media options.
 */
export interface ChannelMediaOptions {
  /** @zh-cn
   * 设置加入频道时是否自动订阅音频流：
   * - true: （默认）订阅
   * - false: 不订阅
   *
   * 该成员功能与 {@link muteAllRemoteAudioStreams} 相同。加入频道后，你可以通过
   *  `muteAllRemoteAudioStreams` 方法重新设置是否订阅频道内的远端音频流。
   */
  /**
   * Determines whether to subscribe to audio streams when the user joins the
   * channel:
   * - true: (Default) Subscribe.
   * - false: Do not subscribe.
   *
   * This member serves a similar function to the
   * `muteAllRemoteAudioStreams` method. After joining
   * the channel, you can call the `muteAllRemoteAudioStreams` method to set
   * whether to subscribe to audio streams in the channel.
   */
  autoSubscribeAudio: boolean;
  /** @zh-cn
   * 设置加入频道是是否自动订阅视频流：
   * - true: （默认）订阅
   * - false: 不订阅
   *
   * 该成员功能与 {@link muteAllRemoteVideoStreams} 相同。加入频道后，你可以通过
   *  `muteAllRemoteVideoStreams` 方法重新设置是否订阅频道内的远端视频流。
   */
  /**
   * Determines whether to subscribe to video streams when the user joins the
   * channel:
   * - true: (Default) Subscribe.
   * - false: Do not subscribe.
   *
   * This member serves a similar function to the
   * `muteAllRemoteVideoStreams` method. After joining
   * the channel, you can call the `muteAllRemoteVideoStreams` method to set
   * whether to subscribe to video streams in the channel.
   */
  autoSubscribeVideo: boolean;
  /** @zh-cn
   * 设置是否在频道内发布本地音频流：
   * - true: （默认）发布
   * - false: 不发布
   *
   * 该成员功能与 `muteLocalAudioStream` 相同。加入频道后，你可以通过
   * `muteLocalAudioStream` 方法重新设置是否在频道内发布本地音频流。
   *
   * @since v3.4.5
   */
  /** Determines whether to publish the local audio stream when the user joins
   * a channel:
   * - true: (Default) Publish.
   * - false: Do not publish.
   *
   * This member serves a similar function to the `muteLocalAudioStream` method.
   * After the user joins the channel, you can call the `muteLocalAudioStream`
   * method to set whether to publish the local audio stream in the channel.
   *
   * @since v3.4.5
   */
  publishLocalAudio: boolean;
  /** @zh-cn
   * 设置是否在频道内发布本地视频流：
   * - true: （默认）发布
   * - false: 不发布
   *
   * 该成员功能与 `muteLocalVideoStream` 相同。加入频道后，你可以通过 `muteLocalVideStream` 方法重新设置是否在频道内发布本地视频流。
   *
   * @since v3.4.5
   */
  /** Determines whether to publish the local video stream when the user joins
   * a channel:
   * - true: (Default) Publish.
   * - false: Do not publish.
   *
   * This member serves a similar function to the `muteLocalVideoStream` method.
   * After the user joins the channel, you can call the `muteLocalVideoStream`
   * method to set whether to publish the local video stream in the channel.
   *
   * @since v3.4.5
   */
  publishLocalVideo: boolean;
}
/** @zh-cn
 * 水印图片的设置选项。
 */
/**
 * The watermark's options.
 *
 * @since v3.0.0
 */
export interface WatermarkOptions {
  /** @zh-cn
   * 是否将水印设为预览时本地可见：
   * - true：(默认) 预览时水印本地可见
   * - false：预览时水印本地不可见
   */
  /**
   * Sets whether or not the watermark image is visible in the local video
   * preview:
   * - true: (Default) The watermark image is visible in preview.
   * - false: The watermark image is not visible in preview.
   */
  visibleInPreview: boolean;
  /** @zh-cn
   * 视频编码模式为竖屏时的水印坐标。详见 {@link Rectangle}
   */
  /**
   * The watermark position in the portrait mode. See {@link Rectangle}
   */
  positionInPortraitMode: Rectangle;
  /** @zh-cn
   * 视频编码模式为横屏时的水印坐标。详见 {@link Rectangle}
   */
  /**
   * The watermark position in the landscape mode. See {@link Rectangle}
   */
  positionInLandscapeMode: Rectangle;
}
/** @zh-cn
 * 跨频道媒体流转发参数配置。
 */
/**
 * The configuration of the media stream relay.
 *
 * @warning 如果你想将流转发到多个目标频道，可以定义多个 {@link ChannelMediaInfo} 类（最多
 * 四个）。
 *
 */
/**
 * The configuration of the media stream relay.
 * **Warning**:
 * - If you want to relay the media stream to multiple channels, define as
 * many {@link ChannelMediaInfo} interface (at most four).
 *
 */

export interface ChannelMediaRelayConfiguration {
  /** @zh-cn
   * 源频道信息，详见 {@link ChannelMediaInfo}。
   *
   * 包含如下属性：
   *
   * - **Note**：
   *  - 如未启用 App Certificate，你无需使用 Token。请直接将以下属性设为默认值。
   *  - 如启用 App Certificate，你必须使用 Token。
   *
   * - `channel`：源频道名。默认值为 NULL，表示 SDK 传入当前的频道名。
   * - `token`：能加入源频道的 Token。由 `srcInfo` 中设置的 `channel` 和 `uid` 生成。
   * 默认值为 NULL，表示 SDK 传入 APP ID。
   * - `uid`：
   *  - 标识源频道中想要转发流的主播 UID。 默认值为 0， 表示 SDK 为你随机分配一个 UID。
   *  - 请确保设 `uid` 为 `0`。
   *
   */
  /**
   * The information of the source channel. See {@link ChannelMediaInfo}
   *
   * It contains the following properties:
   *
   * - **Note**:
   *  - If you have not enabled the App Certificate, Token is unnecessary here
   * and set the following properties as the default value.
   *  - If you have enabled the App Certificate, you must use Token.
   *
   * - `channel`: The name of the source channel. The default value is NULL,
   * which means that the SDK passes in the name of the current channel.
   * - `token`: Token for joining the source channel. It is generated with
   * `channel` and `uid` you set in `srcInfo`. The default value is NULL,
   * which means that the SDK passes in the APP ID.
   * - `uid`:
   *  - ID of the host whose media stream you want to relay. The
   * default value is 0, which means that the SDK randomly generates a UID.
   *  - You must set it as 0.
   *
   */
  srcInfo: ChannelMediaInfo;
  /** @zh-cn
   * 目标频道信息，详见 {@link ChannelMediaInfo}。
   *
   * 包含如下属性：
   *
   * - `channel`：目标频道名。
   * - `token`：能加入目标频道的 Token。由 `destInfos` 中设置的 `channel` 和 `uid`
   * 生成。
   *  - 如未启用 App Certificate，你无需使用 Token。请直接将该参数设为默认值 NULL，
   * 表示 SDK 传入 APP ID。
   *  - 如启用 App Certificate，你必须使用 Token。
   * - `uid`：标识能转发流到目标频道的主播 UID。取值范围为 0 到 2<sup>32</sup>-1。请确保与当前目标频道中所有
   * 用户 UID 不同。默认值为 0，表示 SDK 为你随机分配一个 UID。
   */
  /**
   * The information of the destination channel. See {@link ChannelMediaInfo}
   *
   * It contains the following properties:
   *
   * - `channel`: The name of the destination channel.
   * - `token`:Token for joining the destination channel.
   * It is generated with `channel` and `uid` you set in `destInfos`.
   *  - If you have not enabled the App Certificate, Token is unnecessary here
   * and set it as the default value NULL, which means that the SDK passes in
   * the APP ID.
   *  - If you have enabled the App Certificate, you must use Token.
   * - `uid`: ID of the host in the destination channel.
   * The value ranges from 0 to 2<sup>32</sup>-1. To avoid UID conflicts,
   * this `uid` must be different from any other UIDs in the destination
   * channel. The default value is 0, which means the SDK randomly generates
   * a UID.
   *
   */
  destInfos: [ChannelMediaInfo];
}
/** @zh-cn
 * 跨频道媒体流转发事件码
 */
/** The event code in CHANNEL_MEDIA_RELAY_EVENT. */
export enum ChannelMediaRelayEvent {
  /** @zh-cn
   * 0：网络中断导致用户与服务器连接断开
   */
  /** 0: The user disconnects from the server due to poor network
   * connections.
   */
  RELAY_EVENT_NETWORK_DISCONNECTED = 0,
  /** @zh-cn
   * 1：用户与服务器建立连接
   */
  /** 1: The network reconnects.
   */
  RELAY_EVENT_NETWORK_CONNECTED = 1,
  /** @zh-cn
   * 2：用户已加入源频道
   */
  /** 2: The user joins the source channel.
   */
  RELAY_EVENT_PACKET_JOINED_SRC_CHANNEL = 2,
  /** @zh-cn
   * 3：用户已加入目标频道
   */
  /** 3: The user joins the destination channel.
   */
  RELAY_EVENT_PACKET_JOINED_DEST_CHANNEL = 3,
  /** @zh-cn
   * 4：SDK 开始向目标频道发送数据包
   */
  /** 4: The SDK starts relaying the media stream to the destination channel.
   */
  RELAY_EVENT_PACKET_SENT_TO_DEST_CHANNEL = 4,
  /** @zh-cn
   * 5：服务器收到了目标频道发送的视频流
   */
  /** 5: The server receives the video stream from the source channel.
   */
  RELAY_EVENT_PACKET_RECEIVED_VIDEO_FROM_SRC = 5,
  /** @zh-cn
   * 6：服务器收到了目标频道发送的音频流
   */
  /** 6: The server receives the audio stream from the source channel.
   */
  RELAY_EVENT_PACKET_RECEIVED_AUDIO_FROM_SRC = 6,
  /** @zh-cn
   * 7：目标频道已更新
   */
  /** 7: The destination channel is updated.
   */
  RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL = 7,
  /** @zh-cn
   * 8：内部原因导致目标频道更新失败
   */
  /** 8: The destination channel update fails due to internal reasons.
   */
  RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL_REFUSED = 8,
  /** @zh-cn
   * 9：目标频道未发生改变，即目标频道更新失败
   */
  /** 9: The destination channel does not change, which means that the
   * destination channel fails to be updated.
   */
  RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL_NOT_CHANGE = 9,
  /** @zh-cn
   * 10：目标频道名为 NULL
   */
  /** 10: The destination channel name is NULL.
   */
  RELAY_EVENT_PACKET_UPDATE_DEST_CHANNEL_IS_NULL = 10,
  /** @zh-cn
   * 11：视频属性已发送至服务器
   */
  /** 11: The video profile is sent to the server.
   */
  RELAY_EVENT_VIDEO_PROFILE_UPDATE = 11,
  /** @zh-cn
   * 12: 成功暂停向目标频道转发媒体流。
   *
   * @since v3.6.1.4
   */
  /** 12: The SDK successfully pauses relaying the media stream to destination channels.
   *
   * @since v3.6.1.4
   */
  RELAY_EVENT_PAUSE_SEND_PACKET_TO_DEST_CHANNEL_SUCCESS = 12,
  /** @zh-cn
   * 13: 暂停向目标频道转发媒体流失败。
   *
   * @since v3.6.1.4
   */
  /** 13: The SDK fails to pause relaying the media stream to destination channels.
   *
   * @since v3.6.1.4
   */
  RELAY_EVENT_PAUSE_SEND_PACKET_TO_DEST_CHANNEL_FAILED = 13,
  /** @zh-cn
   * 14: 成功恢复向目标频道转发媒体流。
   *
   * @since v3.6.1.4
   */
  /** 14: The SDK successfully resumes relaying the media stream to destination channels.
   *
   * @since v3.6.1.4
   */
  RELAY_EVENT_RESUME_SEND_PACKET_TO_DEST_CHANNEL_SUCCESS = 14,
  /** @zh-cn
   * 15: 恢复向目标频道转发媒体流失败。
   *
   * @since v3.6.1.4
   */
  /** 15: The SDK fails to resume relaying the media stream to destination channels.
   *
   * @since v3.6.1.4
   */
  RELAY_EVENT_RESUME_SEND_PACKET_TO_DEST_CHANNEL_FAILED = 15,
}
/** @zh-cn
 * 状态码：
 */
/**
 * The state code.
 * - 0: The SDK is initializing.
 * - 1: The SDK tries to relay the media stream to the destination channel.
 * - 2: The SDK successfully relays the media stream to the destination
 * channel.
 * - 3: A failure occurs. See the error code in
 * {@link ChannelMediaRelayError}.
 */
export enum ChannelMediaRelayState {
  /** @zh-cn
   * 0：SDK 正在初始化
   */
  /** 0: The initial state. After you successfully stop the channel media
   * relay by calling {@link stopChannelMediaRelay},
   * the `channelMediaRelayStateChanged` callback returns this state.
   */
  RELAY_STATE_IDLE = 0,
  /** @zh-cn
   * 1：SDK 尝试跨频道
   */
  /** 1: The SDK tries to relay the media stream to the destination channel.
   */
  RELAY_STATE_CONNECTING = 1,
  /** @zh-cn
   * 2：源频道主播成功加入目标频道
   */
  /** 2: The SDK successfully relays the media stream to the destination
   * channel.
   */
  RELAY_STATE_RUNNING = 2,
  /** @zh-cn
   * 3：发生异常，详见 {@link ChannelMediaRelayError} 中错误码
   */
  /** 3: A failure occurs. See the details in code.
   */
  RELAY_STATE_FAILURE = 3,
}
/** @zh-cn
 * 错误码
 */
/**
 * The error code.
 * - 0: The state is normal.
 * - 1: An error occurs in the server response.
 * - 2: No server response. You can call the {@link leaveChannel} method to
 * leave the channel.
 * - 3: The SDK fails to access the service, probably due to limited resources
 * of the server.
 * - 4: Fails to send the relay request.
 * - 5: Fails to accept the relay request.
 * - 6: The server fails to receive the media stream.
 * - 7: The server fails to send the media stream.
 * - 8: The SDK disconnects from the server due to poor network connections.
 * You can call the {@link leaveChannel} method to leave the channel.
 * - 9: An internal error occurs in the server.
 * - 10: The token of the source channel has expired.
 * - 11: The token of the destination channel has expired.
 */
export enum ChannelMediaRelayError {
  /** @zh-cn
   * 0：一切正常
   */
  /** 0: The state is normal.
   */
  RELAY_OK = 0,
  /** @zh-cn
   * 1：服务器回应出错
   */
  /** 1: An error occurs in the server response.
   */
  RELAY_ERROR_SERVER_ERROR_RESPONSE = 1,
  /** @zh-cn
   * 2：服务器无回应。你可以调用 {@link leaveChannel} 方法离开频道
   */
  /** 2: No server response.
   *
   * You can call the
   * {@link leaveChannel} method to
   * leave the channel.
   *
   * This error can also occur if your project has not enabled co-host token
   * authentication. Contact support@agora.io to enable the co-host token
   * authentication service before starting a channel media relay.
   */
  RELAY_ERROR_SERVER_NO_RESPONSE = 2,
  /** @zh-cn
   * 3：SDK 无法获取服务，可能是因为服务器资源有限导致
   */
  /** 3: The SDK fails to access the service, probably due to limited
   * resources of the server.
   */
  RELAY_ERROR_NO_RESOURCE_AVAILABLE = 3,
  /** @zh-cn
   * 4：发起跨频道转发媒体流请求失败
   */
  /** 4: Fails to send the relay request.
   */
  RELAY_ERROR_FAILED_JOIN_SRC = 4,
  /** @zh-cn
   * 5：接受跨频道转发媒体流请求失败
   */
  /** 5: Fails to accept the relay request.
   */
  RELAY_ERROR_FAILED_JOIN_DEST = 5,
  /** @zh-cn
   * 6：服务器接收跨频道转发媒体流失败
   */
  /** 6: The server fails to receive the media stream.
   */
  RELAY_ERROR_FAILED_PACKET_RECEIVED_FROM_SRC = 6,
  /** @zh-cn
   * 7：服务器发送跨频道转发媒体流失败
   */
  /** 7: The server fails to send the media stream.
   */
  RELAY_ERROR_FAILED_PACKET_SENT_TO_DEST = 7,
  /** @zh-cn
   * 8：SDK 因网络质量不佳与服务器断开。你可以调用 {@link leaveChannel} 方法离开当前频道
   */
  /** 8: The SDK disconnects from the server due to poor network
   * connections. You can call the {@link leaveChannel} method to leave the channel.
   */
  RELAY_ERROR_SERVER_CONNECTION_LOST = 8,
  /** @zh-cn
   * 9：服务器内部出错
   */
  /** 9: An internal error occurs in the server.
   */
  RELAY_ERROR_INTERNAL_ERROR = 9,
  /** @zh-cn
   * 10：源频道的 Token 已过期
   */
  /** 10: The token of the source channel has expired.
   */
  RELAY_ERROR_SRC_TOKEN_EXPIRED = 10,
  /** @zh-cn
   * 11：目标频道的 Token 已过期
   */
  /** 11: The token of the destination channel has expired.
   */
  RELAY_ERROR_DEST_TOKEN_EXPIRED = 11,
}

/** @zh-cn
 * 访问区域。
 *
 * @since v3.2.0
 *
 * - 1: 中国大陆。
 * - 2: 北美区域。
 * - 4: 欧洲区域。
 * - 8: 除中国大陆以外的亚洲区域。
 * - 16: 日本区域。
 * - 32: 印度区域。
 * - 0xFFFFFFFF:（默认）全球。
 */
/**
 * Regions for connection.
 *
 * @since v3.2.0
 *
 * - 1: Mainland China.
 * - 2: North America.
 * - 4: Europe.
 * - 8: Asia, excluding Mainland China.
 * - 16: Japan.
 * - 32: India.
 * - 0xFFFFFFFF: (Default) Global.
 */
export type AREA_CODE =
  | 1 //AREA_CODE_CN = ,
  | 2 //AREA_CODE_NA = ,
  | 4 //AREA_CODE_EUR = ,
  | 8 //AREA_CODE_AS = ,
  | 16 //AREA_CODE_JAPAN = ,
  | 32 //AREA_CODE_INDIA = ,
  | 0xffffffff; //AREA_CODE_GLOBAL =
/** @zh-cn
 *
 * 发布状态。
 *
 * @since v3.2.0
 * - 0: 加入频道后的初始发布状态。
 * - 1: 发布失败。可能是因为：
 *   - 本地用户调用 {@link muteLocalAudioStream muteLocalAudioStream(true)} 或
 * {@link muteLocalVideoStream muteLocalVideoStream(true)} 停止发送本地媒体流。
 *   - 本地用户调用 {@link disableAudio} 或 {@link disableVideo} 关闭本地音频或视频模块。
 *   - 本地用户调用 {@link enableLocalAudio enableLocalAudio(false)} 或
 * {@link enableLocalVideo (false)} 关闭本地音频或视频采集。
 *   - 本地用户角色为观众。
 * - 2: 正在发布。
 * - 3: 发布成功。
 */
/** The publishing state.
 *
 * @since v3.2.0
 *
 * - 0: The initial publishing state after joining the channel.
 * - 1: Fails to publish the local stream. Possible reasons:
 *  - The local user calls
 * {@link muteLocalAudioStream muteLocalAudioStream(true)} or
 * {@link muteLocalVideoStream muteLocalVideoStream(true)} to stop
 * sending local streams.
 *  - The local user calls {@link disableAudio} or {@link disableVideo} to
 * disable the entire audio or video module.
 *  - The local user calls {@link enableLocalAudio enableLocalAudio(false)}
 * or {@link enableLocalVideo enableLocalVideo(false)} to disable the
 * local audio sampling or video capturing.
 *  - The role of the local user is `2` (audience).
 * - 2: Publishing.
 * - 3: Publishes successfully.
 */
export enum STREAM_PUBLISH_STATE {
  /** 0: The initial publishing state after joining the channel.
   */
  PUB_STATE_IDLE = 0,
  /** 1: Fails to publish the local stream. Possible reasons:
   * - The local user calls \ref IRtcEngine::muteLocalAudioStream "muteLocalAudioStream(true)" or \ref IRtcEngine::muteLocalVideoStream "muteLocalVideoStream(true)" to stop sending local streams.
   * - The local user calls \ref IRtcEngine::disableAudio "disableAudio" or \ref IRtcEngine::disableVideo "disableVideo" to disable the entire audio or video module.
   * - The local user calls \ref IRtcEngine::enableLocalAudio "enableLocalAudio(false)" or \ref IRtcEngine::enableLocalVideo "enableLocalVideo(false)" to disable the local audio sampling or video capturing.
   * - The role of the local user is `AUDIENCE`.
   */
  PUB_STATE_NO_PUBLISHED = 1,
  /** 2: Publishing.
   */
  PUB_STATE_PUBLISHING = 2,
  /** 3: Publishes successfully.
   */
  PUB_STATE_PUBLISHED = 3,
}

/** @zh-cn
 * 音频路由：
 * - -1: 使用默认的音频路由
 * - 0: 使用耳机为音频路由
 * - 1: 使用听筒为音频路由
 * - 2: 使用不带麦的耳机为音频路由
 * - 3: 使用手机的扬声器为音频路由
 * - 4: 使用外接的扬声器为音频路由
 * - 5: 使用蓝牙耳机为音频路由
 * - 6: 使用 USB 外接设备为音频路由（仅适用于 macOS）
 * - 7: 使用 HDMI 外接设备为音频路由（仅适用于 macOS）
 * - 8: 使用 DisplayPort 外接设备为音频路由（仅适用于 macOS）
 * - 9: 使用 Apple AirPlay 为音频路由（仅适用于 macOS）
 */
/**
 * Audio output routing.
 * - -1: Default.
 * - 0: Headset.
 * - 1: Earpiece.
 * - 2: Headset with no microphone.
 * - 3: Speakerphone.
 * - 4: Loudspeaker.
 * - 5: Bluetooth headset.
 * - 6: USB peripheral (macOS only).
 * - 7: HDMI peripheral (macOS only).
 * - 8: DisplayPort peripheral (macOS only).
 * - 9: Apple AirPlay (macOS only).
 */
export enum AUDIO_ROUTE_TYPE {
  /** -1: Default audio route.
   */
  AUDIO_ROUTE_DEFAULT = -1,
  /** 0: The audio route is a headset with a microphone.
   */
  AUDIO_ROUTE_HEADSET = 0,
  /** 1: The audio route is an earpiece.
   */
  AUDIO_ROUTE_EARPIECE = 1,
  /** 2: The audio route is a headset without a microphone.
   */
  AUDIO_ROUTE_HEADSET_NO_MIC = 2,
  /** 3: The audio route is the speaker that comes with the device.
   */
  AUDIO_ROUTE_SPEAKERPHONE = 3,
  /** 4: (iOS and macOS only) The audio route is an external speaker.
   */
  AUDIO_ROUTE_LOUDSPEAKER = 4,
  /** 5: The audio route is a Bluetooth headset.
   */
  AUDIO_ROUTE_BLUETOOTH = 5,
  /** 6: (macOS only) The audio route is a USB peripheral device.
   */
  AUDIO_ROUTE_USB = 6,
  /** 7: (macOS only) The audio route is an HDMI peripheral device.
   */
  AUDIO_ROUTE_HDMI = 7,
  /** 8: (macOS only) The audio route is a DisplayPort peripheral device.
   */
  AUDIO_ROUTE_DISPLAYPORT = 8,
  /** 9: (iOS and macOS only) The audio route is Apple AirPlay.
   */
  AUDIO_ROUTE_AIRPLAY = 9,
}

/** @zh-cn
 * 媒体附属信息。
 */
/**
 * The media metadata.
 */
export interface Metadata {
    /** @zh-cn
     * 发送媒体附属信息的用户 UID。
     *
     * @note 发送媒体附属信息时，请你忽略该参数。接收媒体附属信息时，你可以使用该参数来确认
     * 哪位用户发送媒体附属信息。
     */
    /** ID of the user who sends the metadata.
     *
     * @note When sending the metadata, ignore this parameter. When receiving
     * the metadata, use this parameter to determine who sends the metadata.
     */
    uid: number;
    /** @zh-cn
     * 媒体附属信息的大小。
     */
    /**
     * The size of the metadata.
     */
    size: number;
    /** @zh-cn
     * 媒体附属信息 buffer。
     */
    /**
     * The buffer of the metadata.
     */
    buffer: string;
    /** @zh-cn
     * 媒体附属信息发送时的时间戳（毫秒）。
     */
    /** The timestamp (ms) that the metadata sends.
     */
    timeStampMs: number;
  }
/** @zh-cn
 * 用户具体设置。
 *
 */
/** @zh-cn
 * 用户具体设置。
 *
 */
/** The detailed options of a user.
 */
export interface ClientRoleOptions {
  /** @zh-cn
   * 观众端延时级别。
   */
  /**
   * The latency level of an audience member in interactive live streaming.
   */
  audienceLatencyLevel: AUDIENCE_LATENCY_LEVEL_TYPE;
};
/** @zh-cn
 *
 * @since v3.3.1
 *
 * 云代理类型:
 * - 0: 不使用云代理。
 * - 1: UDP 协议的云代理。
 * - 2: 预留。
 */
/** The cloud proxy type.
 *
 * The cloud proxy type.
 * - 0: Do not use the cloud proxy.
 * - 1: The cloud proxy for the UDP protocol.
 * - 2: Reserved type.
 *
 */
export enum CLOUD_PROXY_TYPE {
  /** 0: The automatic mode. In this mode, the SDK attempts a direct connection to SD-RTN™ and automatically
   * switches to TLS 443 if the attempt fails. As of v3.7.0, the SDK has this mode enabled by default.
   */
  NONE_PROXY = 0,
  /** 1: The cloud proxy for the UDP protocol, that is, the Force UDP cloud proxy mode.
   * In this mode, the SDK always transmits data over UDP.
   */
  UDP_PROXY = 1,
  /** 2: The cloud proxy for the TCP (encryption) protocol, that is, the Force TCP cloud proxy mode.
   * In this mode, the SDK always transmits data over TLS 443.
   *
   * @since v3.7.0
   */
  TCP_PROXY = 2,
}
/** @zh-cn
 * Agora SDK 日志文件的配置。
 *
 * @since v3.3.1
 */
/** The configuration of the log files.
 *
 * @since v3.3.1
 */
export interface LogConfig {
  /** @zh-cn
   * 日志文件的完整路径。
   *
   *
   * 请确保你指定的目录存在而且可写。你可通过该参数修改日志文件名。
   */
  /** The absolute path of log files.
   *
   * Ensure that the directory for the log files exists and is writable.
   * You can use this parameter to rename the log files.
   */
  filePath: string;
  /** @zh-cn
   * 单个日志文件的大小，单位为 KB。默认值为 1024 KB。如果你将 `fileSize` 设为 1024 KB，SDK 会最多输出总计 5 MB 的日志文件。
   * 如果你将 `fileSize` 设为小于 1024 KB，设置不生效，单个日志文件最大仍为 1024 KB。
   */
  /** The size (KB) of a log file.
   *
   * The default value is 1024 KB. If you set
   * `fileSize` to 1024 KB, the SDK outputs at most 5 MB log files;
   * if you set it to less than 1024 KB, the setting is invalid, and the
   * maximum size of a log file is still 1024 KB.
   */
  fileSize: number;
  /** @zh-cn
   * Agora SDK 的日志输出等级:
   * - `0x0000`: 不输出任何日志。
   * - `0x0001`: (默认) 输出 FATAL、ERROR、WARN、INFO 级别的日志。我们推荐你将日志级别设为该等级。
   * - `0x0002`: 仅输出 FATAL、ERROR、WARN 级别的日志。
   * - `0x0004`: 仅输出 FATAL、ERROR 级别的日志。
   * - `0x0008`: 仅输出 FATAL 级别的日志。
   *
   */
  /** The output log level of the SDK:
   * - `0x0000`: Do not output any log.
   * - `0x0001`: (Default) Output logs of the FATAL, ERROR, WARN and INFO
   * level. We recommend setting your log filter as this level.
   * - `0x0002`: Output logs of the FATAL, ERROR and WARN level.
   * - `0x0004`: Output logs of the FATAL and ERROR level.
   * - `0x0008`: Output logs of the FATAL level.
   */
  level: number;
}
/** @zh-cn
 *
 * @since v3.3.1
 *
 * 预设的变声效果选项
 */
/** The options for SDK preset voice conversion effects.
 *
 * @since v3.3.1
 */
export enum VOICE_CONVERSION_PRESET {
    /** @zh-cn
     * 原声，即关闭变声效果。
     */
    /** Turn off voice conversion effects and use the original voice.
     */
    VOICE_CONVERSION_OFF = 0x00000000,
    /** @zh-cn
     * 中性。为避免音频失真，请确保仅对女声设置该效果。
     */
    /** A gender-neutral voice. To avoid audio distortion, ensure that you use
     * this enumerator to process a female-sounding voice.
     */
    VOICE_CHANGER_NEUTRAL = 0x03010100,
    /** @zh-cn
     * 甜美。为避免音频失真，请确保仅对女声设置该效果。
     */
    /** A sweet voice. To avoid audio distortion, ensure that you use this
     * enumerator to process a female-sounding voice.
     */
    VOICE_CHANGER_SWEET = 0x03010200,
    /** @zh-cn
     * 稳重。为避免音频失真，请确保仅对男声设置该效果。
     */
    /** A steady voice. To avoid audio distortion, ensure that you use this
     * enumerator to process a male-sounding voice.
     */
    VOICE_CHANGER_SOLID = 0x03010300,
    /** @zh-cn
     * 低沉。为避免音频失真，请确保仅对男声设置该效果。
     */
    /** A deep voice. To avoid audio distortion, ensure that you use this
     * enumerator to process a male-sounding voice.
     */
    VOICE_CHANGER_BASS = 0x03010400,
}
/** @zh-cn
 * 本地视频状态
 */
/** Local video state types.
 */
export enum LOCAL_VIDEO_STREAM_STATE {
    /** @zh-cn
     *
     * 0: 本地视频默认初始状态。
     */
    /** 0: Initial state. */
    LOCAL_VIDEO_STREAM_STATE_STOPPED = 0,
    /** @zh-cn
     *
     * 1: 本地视频采集设备启动成功。通过 Window Symbol 共享窗口且共享窗口为最大化时，也会报告该状态。
     */
    /** 1: The local video capturing device starts successfully.
     *
     * The SDK also reports this state when you share a maximized window by calling {@link startScreenCaptureByWindow}.
     */
    LOCAL_VIDEO_STREAM_STATE_CAPTURING = 1,
    /** @zh-cn
     *
     * 2: 本地视频首帧编码成功。
     */
   /** 2: The first video frame is successfully encoded. */
    LOCAL_VIDEO_STREAM_STATE_ENCODING = 2,
    /** @zh-cn
     *
     * 3: 本地视频启动失败。
     */
    /** 3: The local video fails to start. */
    LOCAL_VIDEO_STREAM_STATE_FAILED = 3,
}
/** @zh-cn
 *
 * 本地视频出错原因
 */
/** Local video state error codes.
 */
export enum LOCAL_VIDEO_STREAM_ERROR {
    /** @zh-cn
     *
     * 0: 本地视频状态正常。
     */
    /** 0: The local video is normal. */
    LOCAL_VIDEO_STREAM_ERROR_OK = 0,
    /** @zh-cn
     *
     * 1: 出错原因不明确。
     */
    /** 1: No specified reason for the local video failure. */
    LOCAL_VIDEO_STREAM_ERROR_FAILURE = 1,
    /** @zh-cn
     *
     * 2: 没有权限启动本地视频采集设备。
     */
    /** 2: No permission to use the local video capturing device. */
    LOCAL_VIDEO_STREAM_ERROR_DEVICE_NO_PERMISSION = 2,
    /** @zh-cn
     *
     * 3: 本地视频采集设备正在使用中。
     */
    /** 3: The local video capturing device is in use. */
    LOCAL_VIDEO_STREAM_ERROR_DEVICE_BUSY = 3,
    /** @zh-cn
     *
     * 4: 本地视频采集失败，建议检查采集设备是否正常工作。
     */
    /** 4: The local video capture fails. Check whether the capturing device
     * is working properly.
     */
    LOCAL_VIDEO_STREAM_ERROR_CAPTURE_FAILURE = 4,
    /** @zh-cn
     *
     * 5: 本地视频编码失败。
     */
    /** 5: The local video encoding fails. */
    LOCAL_VIDEO_STREAM_ERROR_ENCODE_FAILURE = 5,
    /** @zh-cn
     * 6:（仅适用于 iOS）应用处于后台。
     *
     * @since v3.3.1
     */
    /** 6: (iOS only) The application is in the background.
     *
     * @since v3.3.1
     */
    LOCAL_VIDEO_STREAM_ERROR_CAPTURE_INBACKGROUND = 6,
    /** @zh-cn
     * 7:（仅适用于 iOS）应用窗口处于侧拉、分屏、画中画模式。
     *
     * @since v3.3.1
     */
    /** 7: (iOS only) The application is running in Slide Over, Split View, or Picture in Picture mode.
     *
     * @since v3.3.1
     */
    LOCAL_VIDEO_STREAM_ERROR_CAPTURE_MULTIPLE_FOREGROUND_APPS = 7,
    /** @zh-cn
     * 8: 找不到本地视频采集设备。
     *
     * @since v3.4.2
     */
    /** 8: The SDK cannot find the local video capture device.
     *
     * @since v3.4.2
     */
    LOCAL_VIDEO_STREAM_ERROR_DEVICE_NOT_FOUND = 8,
    /** @zh-cn
     * 10: （仅 macOS 和 Windows）SDK 无法在视频设备列表中找到该视频设备。请检查视频设备 ID 是否有效。
     *
     * @since v3.6.1.4
     */
    /**
     * 10: (macOS and Windows only) The SDK cannot find the video device in the video device list. Check whether the ID
     * of the video device is valid.
     *
     * @since v3.6.1.4
     */
    LOCAL_VIDEO_STREAM_ERROR_DEVICE_INVALID_ID = 10,
    /** @zh-cn
     * 11: 调用 {@link startScreenCaptureByWindow} 方法共享窗口时，共享窗口处于最小化的状态。
     *
     * @since v3.2.0
     */
    /**
     * 11: The shared window is minimized when you call
     * {@link startScreenCaptureByWindow} to share a window.
     *
     * @since 3.2.0
     */
    LOCAL_VIDEO_STREAM_ERROR_SCREEN_CAPTURE_WINDOW_MINIMIZED = 11,
    /** @zh-cn
     *
     * 12: 该错误码表示通过窗口 ID 共享的窗口已关闭，或通过窗口 ID 共享的全屏窗口已退出全屏。
     * 退出全屏模式后，远端用户将无法看到共享的窗口。为避免远端用户看到黑屏，Agora 建议你立即结束本次共享。
     *
     * 报告该错误码的常见场景：
     * - 本地用户关闭共享的窗口时，SDK 会报告该错误码。
     * - 本地用户先放映幻灯片，然后共享放映中的幻灯片。结束放映时，SDK 会报告该错误码。
     * - 本地用户先全屏观看网页视频或网页文档，然后共享网页视频或网页文档。结束全屏时，SDK 会报告该错误码。
     *
     * @since v3.2.0
     */
    /** 12: The error code indicates that a window shared by the window ID
     * has been closed, or a full-screen window
     * shared by the window ID has exited full-screen mode.
     * After exiting full-screen mode, remote users cannot see the shared
     * window. To prevent remote users from seeing a
     * black screen, Agora recommends that you immediately stop screen sharing.
     *
     * Common scenarios for reporting this error code:
     * - When the local user closes the shared window, the SDK
     * reports this error code.
     * - The local user shows some slides in full-screen mode first,
     * and then shares the windows of the slides. After
     * the user exits full-screen mode, the SDK reports this error code.
     * - The local user watches web video or reads web document in full-screen
     * mode first, and then shares the window of
     * the web video or document. After the user exits full-screen mode,
     * the SDK reports this error code.
     *
     * @since 3.2.0
     */
    LOCAL_VIDEO_STREAM_ERROR_SCREEN_CAPTURE_WINDOW_CLOSED = 12,
    /** @zh-cn
     * 13:（仅 Windows）待共享的窗口被其他窗口遮挡住，被遮挡住的部分在共享时会被 SDK 涂黑。
     *
     * @since v3.6.1.4
     */
    LOCAL_VIDEO_STREAM_ERROR_SCREEN_CAPTURE_WINDOW_OCCLUDED = 13,
    /** @zh-cn
     * （仅 Windows）SDK 不支持共享该类型的窗口。
     *
     * @since v3.6.1.4
     */
    /** @ignore */
    LOCAL_VIDEO_STREAM_ERROR_SCREEN_CAPTURE_WINDOW_NOT_SUPPORTED = 20,
};
/** @zh-cn
 *
 * 本地音频状态
 */
/** Local audio state types.
 */
export enum LOCAL_AUDIO_STREAM_STATE
{
    /** @zh-cn
     *
     * 0: 本地音频默认初始状态。
     */
    /** 0: The local audio is in the initial state.
     */
    LOCAL_AUDIO_STREAM_STATE_STOPPED = 0,
    /** @zh-cn
     *
     * 1: 本地音频采集设备启动成功。
     */
    /** 1: The recording device starts successfully.
     */
    LOCAL_AUDIO_STREAM_STATE_RECORDING = 1,
    /** @zh-cn
     *
     * 2: 本地音频首帧编码成功。
     */
    /** 2: The first audio frame encodes successfully.
     */
    LOCAL_AUDIO_STREAM_STATE_ENCODING = 2,
    /** @zh-cn
     *
     * 3: 本地音频启动失败。
     */
    /** 3: The local audio fails to start.
     */
    LOCAL_AUDIO_STREAM_STATE_FAILED = 3,
}
/** @zh-cn
 *
 * 本地音频出错原因
 */
/** Local audio state error codes.
 */
export enum LOCAL_AUDIO_STREAM_ERROR {
    /** @zh-cn
     *
     * 0: 本地音频状态正常。
     */
    /** 0: The local audio is normal.
     */
    LOCAL_AUDIO_STREAM_ERROR_OK = 0,
    /** @zh-cn
     *
     * 1: 本地音频出错原因不明确。
     */
    /** 1: No specified reason for the local audio failure.
    */
    LOCAL_AUDIO_STREAM_ERROR_FAILURE = 1,
    /** @zh-cn
     *
     * 2: 没有权限启动本地音频采集设备。
     */
    /** 2: No permission to use the local audio device.
    */
    LOCAL_AUDIO_STREAM_ERROR_DEVICE_NO_PERMISSION = 2,
    /** @zh-cn
     *
     * 3: 本地音频采集设备已经在使用中。
     */
    /** 3: The microphone is in use.
    */
    LOCAL_AUDIO_STREAM_ERROR_DEVICE_BUSY = 3,
    /** @zh-cn
     *
     * 4: 本地音频采集失败，建议你检查采集设备是否正常工作。
     */
    /** 4: The local audio capturing fails. Check whether the capturing device
     * is working properly.
     */
    LOCAL_AUDIO_STREAM_ERROR_RECORD_FAILURE = 4,
    /** @zh-cn
     *
     * 5: 本地音频编码失败。
     */
    /** 5: The local audio encoding fails.
     */
    LOCAL_AUDIO_STREAM_ERROR_ENCODE_FAILURE = 5,
    /** @zh-cn
     * 6: 无本地音频采集设备（仅适用于 Windows）。
     *
     * @since v3.4.2
     */
    /** 6: (Windows only) The SDK cannot find the local audio recording device.
     *
     * @since v3.4.2
     */
    LOCAL_AUDIO_STREAM_ERROR_NO_RECORDING_DEVICE = 6,
    /** @zh-cn
     * 7: 无本地音频播放设备（仅适用于 Windows）。
     *
     * @since v3.4.2
     */
    /** 7: (Windows only) The SDK cannot find the local audio playback device.
     *
     * @since v3.4.2
     */
    LOCAL_AUDIO_STREAM_ERROR_NO_PLAYOUT_DEVICE = 7,
    /** @zh-cn
     * 8: 本地音频采集被系统电话中断。
     */
    LOCAL_AUDIO_STREAM_ERROR_INTERRUPTED = 8,
    /** @zh-cn
      * 9: 本地音频采集设备的 ID 无效。
      *
      * @since v3.6.1.4
      */
    LOCAL_AUDIO_STREAM_ERROR_RECORD_INVALID_ID = 9,
    /** @zh-cn
      * 10: 本地音频播放设备的 ID 无效。
      *
      * @since v3.6.1.4
      */
    LOCAL_AUDIO_STREAM_ERROR_PLAYOUT_INVALID_ID = 10,
};

/** @zh-cn
 * 虚拟背景开启出错的原因或开启成功的提示。
 *
 * @since v3.4.5
 */
/**
 * The reason why the virtual background is not successfully enabled or the
 * message that confirms success.
 *
 * @since v3.4.5
 */
export enum VIRTUAL_BACKGROUND_SOURCE_STATE_REASON {
  /** @zh-cn
   * 0: 虚拟背景已成功开启。
   */
  /**
   * 0: The virtual background is successfully enabled.
   */
  VIRTUAL_BACKGROUND_SOURCE_STATE_REASON_SUCCESS = 0,
  /** @zh-cn
   * 1: 自定义的背景图不存在。请检查 VirtualBackgroundSource 中 `source` 的值。
   */
  /**
   * 1: The custom background image does not exist. Please check the value of
   * `source` in {@link VirtualBackgroundSource}.
   */
  VIRTUAL_BACKGROUND_SOURCE_STATE_REASON_IMAGE_NOT_EXIST = 1,
  /** @zh-cn
   * 2: 自定义的背景图颜色格式出错。请检查 VirtualBackgroundSource 中 `color` 的值。
   */
  /**
   * 2: The color format of the custom background image is invalid. Please
   * check the value of `color` in {@link VirtualBackgroundSource}.
   */
  VIRTUAL_BACKGROUND_SOURCE_STATE_REASON_COLOR_FORMAT_NOT_SUPPORTED = 2,
  /** @zh-cn
   * 3: 设备不支持使用虚拟背景。
   */
  /**
   * 3: The device does not support using the virtual background.
   */
  VIRTUAL_BACKGROUND_SOURCE_STATE_REASON_DEVICE_NOT_SUPPORTED = 3,
}

/** @zh-cn
 * 数据流设置。
 *
 * @since v3.3.1
 *
 * |`syncWithAudio` |`ordered`| SDK 行为|
 * |--------------|--------|-------------|
 * | false   |  false   |接收端接收到数据包后，SDK 立刻触发 `streamMessage` 回调。 |
 * | true |  false | <p>如果数据包的延迟在音频延迟的范围内，SDK 会在播放音频的同时触发与该音频包同步的 `streamMessage` 回调。</p><p>如果数据包的延迟超出了音频延迟，SDK 会在接收到该数据包时立刻触发 `streamMessage` 回调；此情况会造成音频包和数据包的不同步。</p> |
 * | false  |  true |<p>如果数据包的延迟在 5 秒以内，SDK 会修正数据包的乱序问题。</p><p>如果数据包的延迟超出 5 秒，SDK 会丢弃该数据包。</p>   |
 * | true  |  true   |<p>如果数据包的延迟在音频延迟的范围内，SDK 会修正数据包的乱序问题。</p><p>如果数据包的延迟超出音频延迟，SDK 会丢弃该数据包。</p>     |
 */
/** The configurations for the data stream.
 *
 * @since v3.3.1
 *
 * <table>
 * <thead>
 *   <tr>
 *     <th>`syncWithAudio`</th>
 *     <th>`ordered`</th>
 *     <th>SDK behaviors</th>
 *   </tr>
 * </thead>
 * <tbody>
 *   <tr>
 *     <td>false</td>
 *     <td>false</td>
 *     <td>The SDK triggers the <br>`streamMessage`<br> callback immediately
 * after the receiver receives a data packet.</td>
 *   </tr>
 *   <tr>
 *     <td>true</td>
 *     <td>false</td>
 *     <td>If the data packet delay is within the audio delay, the SDK
 * triggers the <br>`streamMessage`<br> callback when the synchronized audio
 * packet is played out.<br>If the data packet delay exceeds the audio delay,
 * the SDK triggers the <br>`streamMessage`<br> callback as soon as the data
 * packet is received. In this case, the data packet is not synchronized with
 * the audio packet.</td>
 *   </tr>
 *   <tr>
 *     <td>false</td>
 *     <td>true</td>
 *     <td>If the delay of a data packet is within five seconds, the SDK
 * corrects the order of the data packet.<br>If the delay of a data packet
 * exceeds five seconds, the SDK discards the data packet.</td>
 *   </tr>
 *   <tr>
 *     <td>true</td>
 *     <td>true</td>
 *     <td>If the delay of a data packet is within the audio delay, the SDK
 * corrects the order of the data packet.<br>If the delay of a data packet
 * exceeds the audio delay, the SDK discards this data packet.</td>
 *   </tr>
 * </tbody>
 * </table>
 *
 */
export interface DataStreamConfig {
  /** @zh-cn
   * 是否与本地发送的音频流同步：
   *
   * - true: 数据流与音频流同步。
   * - false: 数据流与音频流不同步。
   *
   * 设置为与音频同步后，如果数据包的延迟在音频延迟的范围内，SDK 会在播放音频的同时触发与该音频包同步的 `streamMessage` 回调。
   * 当需要数据包立刻到达接收端时，不能将该参数设置为 `true`。Agora 建议你仅在需要实现特殊场景，例如歌词同步时，设置为与音频同步。
   */
  /** Whether to synchronize the data packet with the published audio packet.
   *
   * - true: Synchronize the data packet with the audio packet.
   * - false: Do not synchronize the data packet with the audio packet.
   *
   * When you set the data packet to synchronize with the audio, then if the
   * data
   * packet delay is within the audio delay, the SDK triggers the
   * `streamMessage` callback when
   * the synchronized audio packet is played out. Do not set this parameter
   * as `true` if you
   * need the receiver to receive the data packet immediately. Agora
   * recommends that you set
   * this parameter to `true` only when you need to implement specific
   * functions, for example
   * lyric synchronization.
   */
  syncWithAudio: boolean;
  /** @zh-cn
   * 是否保证接收到的数据按发送的顺序排列：
   *
   * - true: 保证 SDK 按照发送方发送的顺序输出数据包。
   * - false: 不保证 SDK 按照发送方发送的顺序输出数据包。
   *
   * 当需要数据包立刻到达接收端时，不能将该参数设置为 `true`。
   */
  /** Whether the SDK guarantees that the receiver receives the data in the
   * sent order.
   *
   * - true: Guarantee that the receiver receives the data in the sent order.
   * - false: Do not guarantee that the receiver receives the data in the sent
   * order.
   *
   * Do not set this parameter to `true` if you need the receiver to receive
   * the data immediately.
   */
  ordered: boolean;
}

/** @zh-cn
 * 网络连接类型
 */
/** Network type. */
export enum NETWORK_TYPE {
  /** @zh-cn
   * -1: 网络连接类型未知。 */
  /** -1: The network type is unknown. */
  NETWORK_TYPE_UNKNOWN = -1,
  /** @zh-cn
   * 0: 网络连接已断开。 */
  /** 0: The SDK disconnects from the network. */
  NETWORK_TYPE_DISCONNECTED = 0,
  /** @zh-cn
   * 1: 网络类型为 LAN。 */
  /** 1: The network type is LAN. */
  NETWORK_TYPE_LAN = 1,
  /** @zh-cn
   * 2: 网络类型为 Wi-Fi（包含热点）。 */
  /** 2: The network type is Wi-Fi (including hotspots). */
  NETWORK_TYPE_WIFI = 2,
  /** @zh-cn
   * 3: 网络类型为 2G 移动网络。 */
  /** 3: The network type is mobile 2G. */
  NETWORK_TYPE_MOBILE_2G = 3,
  /** @zh-cn
   * 4: 网络类型为 3G 移动网络。 */
  /** 4: The network type is mobile 3G. */
  NETWORK_TYPE_MOBILE_3G = 4,
  /** @zh-cn
   * 5: 网络类型为 4G 移动网络。 */
  /** 5: The network type is mobile 4G. */
  NETWORK_TYPE_MOBILE_4G = 5,
  /** @zh-cn
   * 6: 网络类型为 5G 移动网络。
   *
   * @since v3.6.1.4
   */
  /** 6: The network type is mobile 5G.
   *
   * @since v3.6.1.4
   */
  NETWORK_TYPE_MOBILE_5G = 6,
}

export interface DisplayId {
  /**
   * The screen ID.
   */
  id: number;
  /**
   * The x coordinate (px) of the screen. Available if you call {@link getScreenDisplaysInfo}.
   */
  x?: number;
  /**
   * The y coordinate (px) of the screen. Available if you call {@link getScreenDisplaysInfo}.
   */
  y?: number;
  /**
   * The width (px) of the screen. Available if you call {@link getScreenDisplaysInfo}.
   */
  width?: number;
  /**
   * The height (px) of the screen. Available if you call {@link getScreenDisplaysInfo}.
   */
  height?: number;
}

export interface DisplayInfo {
  /**
   * See {@link DisplayId}.
   */
  displayId: DisplayId;
  /**
   * The height (px) of the screen.
   */
  height: number;
  /**
   * The width (px) of the screen.
   */
  width: number;
  /**
   * The screenshot buffer.
   */
  image: Uint8Array;
  /**
   * @deprecated
   */
  isActive: boolean;
  /**
   * @deprecated
   */
  isBuiltin: boolean;
  /**
   * Whether the screen is the main screen.
   */
  isMain: boolean;
}

export interface WindowInfo {
  /** The ID of the current process. */
  currentProcessId: number;
  /** The height (px) of the window. */
  height: number;
  /** The buffer of the window's screenshot. */
  image: Uint8Array;
  /** The name of the window. */
  name: string;
  /** @deprecated */
  originHeight: number;
  /** @deprecated */
  originWidth: number;
  /** The app to which the window belongs. */
  ownerName: string;
  /** The ID of the process running in the window. */
  processId: number;
  /** The width (px) of the window. */
  width: number;
  /** The unique identifier of the window. */
  windowId: number;
  /** The x coordinate (px) of the window. */
  x: number;
  /** The y coordinate (px) of the window. */
  y: number;
}
/** @zh-cn
 * 录音音质。在 {@link startAudioRecordingWithConfig} 中设置。
 */
/**
 * Audio recording quality, which is set in {@link startAudioRecordingWithConfig}.
 */
export enum AUDIO_RECORDING_QUALITY_TYPE {
  /** @zh-cn
   * 0: 低音质。例如，采样率为 32000 Hz，录音时长为 10 分钟的 AAC 文件大小约为 1.2 M。
   */
  /** 0: Low quality. For example, the size of an AAC file with a sample rate
   * of 32,000 Hz and a 10-minute recording is approximately 1.2 MB.
   */
    AUDIO_RECORDING_QUALITY_LOW = 0,
  /** @zh-cn
   * 1:（默认）中音质。例如，采样率为 32000 Hz，录音时长为 10 分钟的 AAC 文件大小约为 2 M。
   */
  /** 1: (Default) Medium quality. For example, the size of an AAC file with
   * a sample rate of 32,000 Hz and a 10-minute recording is approximately
   * 2 MB.
   */
    AUDIO_RECORDING_QUALITY_MEDIUM = 1,
  /** @zh-cn
   * 2: 高音质。例如，采样率为 32000 Hz，录音时长为 10 分钟的 AAC 文件大小约为 3.75 M。
   */
  /** 2: High quality. For example, the size of an AAC file with a sample rate
   * of 32,000 Hz and a 10-minute recording is approximately 3.75 MB.
   */
  AUDIO_RECORDING_QUALITY_HIGH = 2,
  /** 3: Ultra high quality. For example, the size of an AAC file with a sample rate
   * of 32,000 Hz and a 10-minute recording is approximately 7.5 MB.
   *
   * @since v3.7.0
   */
  AUDIO_RECORDING_QUALITY_ULTRA_HIGH = 3,
}

/** @zh-cn
 * 自定义的背景图类型。
 *
 * @since v3.4.5
 */
/** The type of the custom background image.
 *
 * @since v3.4.5
 */
export enum BACKGROUND_SOURCE_TYPE {
  /** @zh-cn
   * 1:（默认）背景图为纯色。
   */
  /**
   * 1: (Default) The background image is a solid color.
   */
  BACKGROUND_COLOR = 1,
  /** @zh-cn
   * 背景图为 PNG、JPG 格式的图片。
   */
  /**
   * The background image is a file in PNG or JPG format.
   */
  BACKGROUND_IMG,
  /** @zh-cn
   * 背景图为虚化处理后的背景图。
   *
   * @since v3.6.1.4
   */
  /**
   * The background image is blurred.
   *
   * @since v3.6.1.4
   */
  BACKGROUND_BLUR,
}

/** @zh-cn
 * @since v3.4.0
 *
 * 录音内容。在 {@link startAudioRecordingWithConfig} 中设置。
 */
/**
 * Recording content, which is set in {@link startAudioRecordingWithConfig}.
 */
export enum AUDIO_RECORDING_POSITION {
  /** @zh-cn
   * 0:（默认）录制本地和所有远端用户混音后的音频。
   */
  /** 0: (Default) Records the mixed audio of the local user and all remote
   * users.
   */
  AUDIO_RECORDING_POSITION_MIXED_RECORDING_AND_PLAYBACK = 0,
  /** @zh-cn
   * 1: 仅录制本地用户的音频。
   */
  /** 1: Records the audio of the local user only.
   */
  AUDIO_RECORDING_POSITION_RECORDING = 1,
  /** @zh-cn
   * 2: 仅录制所有远端用户的音频。
   */
  /** 2: Records the audio of all remote users only.
   */
  AUDIO_RECORDING_POSITION_MIXED_PLAYBACK = 2,
}

/** @zh-cn
 * @since v3.4.2
 *
 * 录音配置。在 {@link startAudioRecordingWithConfig} 中设置。
 */
/**
 * Recording configuration, which is set in {@link startAudioRecordingWithConfig}.
 *
 * @since v3.4.2
 */
export interface AudioRecordingConfiguration {
  /** @zh-cn
   * 录音文件在本地保存的绝对路径，需精确到文件名及格式。例如：`C:\music\audio.aac`。
   *
   * @note 请确保你指定的路径存在并且可写。
   */
  /** The absolute path (including the filename extensions) of the recording
   * file. For example: `C:\music\audio.aac`.
   *
   * @note Ensure that the path you specify exists and is writable.
   */
  filePath: string;
  /** @zh-cn
   * 录音音质。详见 {@link AUDIO_RECORDING_QUALITY_TYPE}。
   *
   * @note 该参数仅适用于 AAC 文件。
   */
  /** Audio recording quality. See {@link AUDIO_RECORDING_QUALITY_TYPE}.
   *
   * @note This parameter applies to AAC files only.
   */
  recordingQuality: AUDIO_RECORDING_QUALITY_TYPE;
  /** @zh-cn
   * 录音内容。详见 {@link AUDIO_RECORDING_POSITION}。
   */
  /**
   * Recording content. See {@link AUDIO_RECORDING_POSITION}.
   */
  recordingPosition: AUDIO_RECORDING_POSITION;
  /** @zh-cn
   * 录音采样率（Hz）。
   * - 16000
   * - 32000（默认）
   * - 44100
   * - 48000
   *
   * @note 如果把该参数设为 44100 或 48000，为保证录音效果，Agora 推荐录制 WAV 文件
   * 或 `recordingQuality` 为 {@link AUDIO_RECORDING_QUALITY_MEDIUM} 或 {@link AUDIO_RECORDING_QUALITY_HIGH} 的 AAC 文件。
   */
  /** Recording sample rate (Hz). The following values are supported:
   *
   * - `16000`
   * - (Default) `32000`
   * - `44100`
   * - `48000`
   *
   * @note If this parameter is set to `44100` or `48000`, for better
   * recording effects, Agora recommends recording WAV files or AAC files
   * whose `recordingQuality` is {@link AUDIO_RECORDING_QUALITY_MEDIUM} or
   * {@link AUDIO_RECORDING_QUALITY_HIGH}.
   */
  recordingSampleRate: number;
  /**
   * @since v3.7.0
   *
   * The recorded audio channel. The following values are supported:
   * - `1`: (Default) Mono channel.
   * - `2`: Dual channel.
   *
   * @note The actual recorded audio channel is related to the audio channel that you capture.
   * If the captured audio is mono and `recordingChannel` is 2, the recorded audio is the dual-channel data that is copied from mono data, not stereo.
   * If the captured audio is dual channel and `recordingChannel` is 1, the recorded audio is the mono data that is mixed by dual-channel data.
   * The integration scheme also affects the final recorded audio channel. Therefore, to record in stereo, contact technical support for assistance.
   */
  recordingChannel: number;
}

/** @zh-cn
 * 自定义背景图的虚化程度。
 *
 * @since v3.6.1.4
 */
/**
 * The degree of blurring applied to the custom background image.
 *
 * @since v3.6.1.4
 */
export enum BACKGROUND_BLUR_DEGREE {
  /** @zh-cn
   * 1: 自定义背景图的虚化程度为低。用户差不多能看清背景。
   */
  /**
   * 1: The degree of blurring applied to the custom background image is low.
   * The user can almost see the background clearly.
   */
  BLUR_DEGREE_LOW = 1,
  /** @zh-cn
   * 自定义背景图的虚化程度为中。用户较难看清背景。
   */
  /**
   * The degree of blurring applied to the custom background image is medium.
   * It is difficult for the user to recognize details in the background.
   */
  BLUR_DEGREE_MEDIUM,
  /** @zh-cn
   *（默认）自定义背景图的虚化程度为高。用户很难看清背景。
   */
  /**
   * (Default) The degree of blurring applied to the custom background image is high.
   * The user can barely see any distinguishing features in the background.
   */
  BLUR_DEGREE_HIGH,
}

/** @zh-cn
 * 声道模式。在 {@link setAudioMixingDualMonoMode} 中设置。
 *
 * @since v3.6.1.4
 */
/**
 * The channel mode. Set in {@link setAudioMixingDualMonoMode}.
 *
 * @since v3.6.1.4
 */
export enum AUDIO_MIXING_DUAL_MONO_MODE {
  /** @zh-cn
   * 0: 原始模式。
   */
  /**
   * 0: Original mode.
   */
  AUDIO_MIXING_DUAL_MONO_AUTO = 0,
  /** @zh-cn
   * 1: 左声道模式。该模式用左声道的音频替换右声道的音频，即用户只能听到左声道的音频。
   */
  /**
   * 1: Left channel mode. This mode replaces the audio of the right channel
   * with the audio of the left channel, which means the user can only hear
   * the audio of the left channel.
   */
  AUDIO_MIXING_DUAL_MONO_L = 1,
  /** @zh-cn
   * 2: 右声道模式。该模式用右声道的音频替换左声道的音频，即用户只能听到右声道的音频。
   */
  /**
   * 2: Right channel mode. This mode replaces the audio of the left channel with
   * the audio of the right channel, which means the user can only hear the audio
   * of the right channel.
   */
  AUDIO_MIXING_DUAL_MONO_R = 2,
  /** @zh-cn
   * 3: 混合模式。该模式将左右声道的数据叠加，即用户能同时听到左声道和右声道的音频。
   */
  /**
   * 3: Mixed channel mode. This mode mixes the audio of the left channel and
   * the right channel, which means the user can hear the audio of the left
   * channel and the right channel at the same time.
   */
  AUDIO_MIXING_DUAL_MONO_MIX = 3,
}

/** @zh-cn
 * 音频文件信息。在 `requestAudioFileInfo` 中报告。
 *
 * @since v3.6.1.4
 */
/**
 * The information of an audio file. This struct is reported
 * in the `requestAudioFileInfo` callback.
 *
 * @since v3.6.1.4
 */
export interface AudioFileInfo {
  /** @zh-cn
   * 音频文件路径。
   */
  /** The file path.
   */
  filePath: string;
  /** @zh-cn
   * 音频文件时长（ms）。
   */
  /** The file duration (ms).
   */
  durationMs: number;
}

/** @zh-cn
 * 音频文件信息的获取状态。在 `requestAudioFileInfo` 中报告。
 *
 * @since v3.6.1.4
 */
/** The information acquisition state. This enum is reported
 * in `requestAudioFileInfo`.
 *
 * @since v3.6.1.4
 */
export enum AUDIO_FILE_INFO_ERROR {
  /** @zh-cn
   * 0: 获取成功。
   */
  /** 0: Successfully get the information of an audio file.
   */
  AUDIO_FILE_INFO_ERROR_OK = 0,
  /** @zh-cn
   * 1: 获取失败。
   */
  /** 1: Fail to get the information of an audio file.
   */
  AUDIO_FILE_INFO_ERROR_FAILURE = 1,
}

/** @zh-cn
 * 自定义的背景图。
 */
/** The custom background image.
 *
 * @since v3.4.5
 */
export interface VirtualBackgroundSource {
  /** @zh-cn
   * 自定义的背景图类型。
   *
   * @since v3.4.5
   */
  /** The type of the custom background image:
   * - 1: (Default) The background image is a solid color.
   * - 2: The background image is a file in PNG or JPG format.
   * - 3: The background image is blurred.
   *
   * @since v3.4.5
   */
  background_source_type: BACKGROUND_SOURCE_TYPE;
  /** @zh-cn
   * 自定义的背景图的本地绝对路径。支持 PNG 和 JPG 格式。如果路径无效，SDK 会用白色背景图替换原背景图。
   *
   * @note 该参数仅在自定义背景图类型为 `BACKGROUND_IMG` 时生效。
   */
  /**
   * The local absolute path of the custom background image. PNG and JPG formats
   * are supported. If the path is invalid, the SDK replaces the original
   * background image with a white background image.
   *
   * @note This parameter takes effect only when the type of the custom
   * background image is `BACKGROUND_IMG`.
   */
  source: string;
  /** @zh-cn
   * 自定义的背景图颜色。格式为 RGB 定义下的十六进制整数，不要带 # 号，如 `0xFFB6C1` 表示浅粉色。
   * 默认值为 `0xFFFFFF`，表示白色。取值范围为 [0x000000,0xffffff]。如果取值非法，SDK 会用白色背景图替换原背景图。
   *
   * @note 该参数仅在自定义背景图类型为 `BACKGROUND_COLOR` 时生效。
   */
  /**
   * The color of the custom background image. The format is a hexadecimal
   * integer defined by RGB, without the # sign, such as `0xFFB6C1` for light pink.
   * The default value is `0xFFFFFF`, which signifies white. The value range
   * is `[0x000000,0xFFFFFF]`. If the value is invalid, the SDK replaces the
   * original background image with a white background image.
   *
   * @note This parameter takes effect only when the type of the custom
   * background image is `BACKGROUND_COLOR`.
   */
  color: number;
  /** @zh-cn
   * @since v3.6.1.4
   *
   * 自定义背景图的虚化程度。详见 BACKGROUND_BLUR_DEGREE
   *
   * @note 该参数仅在自定义背景图类型为 `BACKGROUND_BLUR` 时生效。
   */
  /**
   * The degree of blurring applied to the custom background image. See #BACKGROUND_BLUR_DEGREE.
   *
   * @note This parameter takes effect only when the type of the custom background image is `BACKGROUND_BLUR`.
   *
   * @since v3.6.1.4
   */
  blur_degree: BACKGROUND_BLUR_DEGREE;
}
/**
 * interface for c++ addon (.node)
 * @ignore
 */
export interface NodeRtcEngine {
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  /** @zh-cn
   * @ignore
   */
  initialize(
    appId: string,
    areaCode?: AREA_CODE,
    logConfig?: LogConfig
  ): number;
  /**
   * @ignore
   */
  createChannel(channel: string): any;
  /**
   * @ignore
   */
  getVersion(): string;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getErrorDescription(errorCode: number): string;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getConnectionState(): ConnectionState;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  joinChannel(
    token: string,
    channel: string,
    info: string,
    uid: number,
    options?: ChannelMediaOptions
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  switchChannel(
    token: string,
    channel: string,
    options?: ChannelMediaOptions
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  leaveChannel(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  release(sync: boolean): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setHighQualityAudioParameters(
    fullband: boolean,
    stereo: boolean,
    fullBitrate: boolean
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setupLocalVideo(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  subscribe(uid: number, channel?: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setVideoRenderDimension(
    rendertype: number,
    uid: number,
    width: number,
    height: number
  ): void;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setFPS(fps: number): void;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setHighFPS(fps: number): void;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  addToHighVideo(uid: number): void;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  removeFromHighVideo(uid: number): void;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  renewToken(newToken: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setChannelProfile(profile: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setClientRole(role: ClientRoleType): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  /** @zh-cn
   * @ignore
   */
  setClientRoleWithOptions(
    role: CLIENT_ROLE_TYPE,
    options: ClientRoleOptions
  ): number;
  /**
   * @ignore
   */
  startEchoTest(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  stopEchoTest(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  startEchoTestWithInterval(interval: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  enableLastmileTest(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  disableLastmileTest(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  startLastmileProbeTest(config: LastmileProbeConfig): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  stopLastmileProbeTest(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  enableVideo(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  disableVideo(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  startPreview(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  stopPreview(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setVideoProfile(
    profile: VIDEO_PROFILE_TYPE,
    swapWidthAndHeight: boolean
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setCameraCapturerConfiguration(config: CameraCapturerConfiguration): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setVideoEncoderConfiguration(config: VideoEncoderConfiguration): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setBeautyEffectOptions(enable: boolean, options: BeautyOptions): number;
  /**
   * @ignore
   */
  setRemoteUserPriority(uid: number, priority: Priority): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  enableAudio(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  disableAudio(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setAudioProfile(profile: number, scenario: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setVideoQualityParameters(preferFrameRateOverImageQuality: boolean): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setEncryptionMode(mode: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setEncryptionSecret(secret: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  muteLocalAudioStream(mute: boolean): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  muteAllRemoteAudioStreams(mute: boolean): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setDefaultMuteAllRemoteAudioStreams(mute: boolean): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  muteRemoteAudioStream(uid: number, mute: boolean): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  muteLocalVideoStream(mute: boolean): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  enableLocalVideo(enable: boolean): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  enableLocalAudio(enable: boolean): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  muteAllRemoteVideoStreams(mute: boolean): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setDefaultMuteAllRemoteVideoStreams(mute: boolean): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  enableAudioVolumeIndication(
    interval: number,
    smooth: number,
    report_vad: boolean
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  muteRemoteVideoStream(uid: number, mute: boolean): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  pauseAudio(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  resumeAudio(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setLogFile(filepath: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setAddonLogFile(filepath: string): number;
  /**
   * @ignore
   */
  videoSourceSetAddonLogFile(filepath: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getAudioTrackCount(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  selectAudioTrack(index: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  takeSnapshot(channel: string, uid: number, filepath: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  startRtmpStreamWithoutTranscoding(url: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  startRtmpStreamWithTranscoding(
    url: string,
    transcoding: TranscodingConfig
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  updateRtmpTranscoding(transcoding: TranscodingConfig): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  stopRtmpStream(url: string): number;
  /**
   * @ignore
   */
  setAVSyncSource(channelId: string, uid: number): number;
  /**
   * @ignore
   */
  followSystemPlaybackDevice(enable: boolean): number;
  /**
   * @ignore
   */
  followSystemRecordingDevice(enable: boolean): number;
  /**
   * @ignore
   */
  setLogFileSize(size: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  videoSourceSetLogFile(filepath: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setLogFilter(filter: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  enableDualStreamMode(enable: boolean): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setRemoteVideoStreamType(uid: number, streamType: StreamType): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setRemoteDefaultVideoStreamType(streamType: StreamType): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  enableWebSdkInteroperability(enable: boolean): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setLocalVideoMirrorMode(mirrorType: 0 | 1 | 2): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setLocalVoicePitch(pitch: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setLocalVoiceEqualization(bandFrequency: number, bandGain: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setLocalVoiceReverb(reverbKey: number, value: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setLocalVoiceChanger(preset: VoiceChangerPreset): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setLocalVoiceReverbPreset(preset: AudioReverbPreset): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setLocalPublishFallbackOption(option: 0 | 1 | 2): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setRemoteSubscribeFallbackOption(option: 0 | 1 | 2): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getVideoDevices(): Array<Object>;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setVideoDevice(deviceId: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getCurrentVideoDevice(): Object;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  startVideoDeviceTest(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  stopVideoDeviceTest(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getAudioPlaybackDevices(): Array<Object>;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setAudioPlaybackDevice(deviceId: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getPlaybackDeviceInfo(deviceId: string, deviceName: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getCurrentAudioPlaybackDevice(): Object;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setAudioPlaybackVolume(volume: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getAudioPlaybackVolume(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getAudioRecordingDevices(): Array<Object>;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setAudioRecordingDevice(deviceId: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getRecordingDeviceInfo(deviceId: string, deviceName: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getCurrentAudioRecordingDevice(): Object;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getAudioRecordingVolume(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setAudioRecordingVolume(volume: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  startAudioPlaybackDeviceTest(filepath: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  stopAudioPlaybackDeviceTest(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  enableLoopbackRecording(enable: boolean, deviceName: string | null): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  /** @zh-cn
   * @ignore
   */
  startAudioRecording(
    filePath: string,
    sampleRate: number,
    quality: number,
    pos: number
  ): number;
  /**
   * @ignore
   */
  stopAudioRecording(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  startAudioRecordingDeviceTest(indicateInterval: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  stopAudioRecordingDeviceTest(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  startAudioDeviceLoopbackTest(interval: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  stopAudioDeviceLoopbackTest(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getAudioPlaybackDeviceMute(): boolean;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setAudioPlaybackDeviceMute(mute: boolean): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getAudioRecordingDeviceMute(): boolean;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setAudioRecordingDeviceMute(mute: boolean): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  /** @zh-cn
   * @ignore
   */
  videoSourceInitialize(
    appId: string,
    areaCode: AREA_CODE,
    groupId?: string,
    bundleId?: string
  ): number;
  /**
   * @ignore
   */
  videoSourceEnableWebSdkInteroperability(enabled: boolean): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  videoSourceMuteAllRemoteVideoStreams(mute: boolean): number;
  /**
   * @ignore
   */
  videoSourceJoin(
    token: string,
    cname: string,
    info: string,
    uid: number,
    options?: ChannelMediaOptions
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  videoSourceLeave(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  videoSourceRenewToken(token: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  videoSourceSetChannelProfile(profile: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  videoSourceSetVideoProfile(
    profile: VIDEO_PROFILE_TYPE,
    swapWidthAndHeight: boolean
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  videosourceStartScreenCaptureByScreen(
    screenSymbol: ScreenSymbol,
    rect: CaptureRect,
    param: CaptureParam
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  videosourceStartScreenCaptureByWindow(
    windowSymbol: number,
    rect: CaptureRect,
    param: CaptureParam
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  videosourceUpdateScreenCaptureParameters(param: CaptureParam): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  videosourceSetScreenCaptureContentHint(hint: VideoContentHint): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  videoSourceStartScreenCaptureByDisplayId(
    displayId: DisplayId,
    rect: CaptureRect,
    param: CaptureParam
  ): number;

  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  startScreenCaptureByDisplayId(
    displayId: DisplayId,
    rect: CaptureRect,
    param: CaptureParam
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getScreenWindowsInfo(callback: (list: WindowInfo[]) => void): void;
   /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getScreenDisplaysInfo(callback: (list: DisplayInfo[]) => void): void;
   /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getRealScreenDisplayInfo(callback: (list: DisplayInfo[]) => void): void;
   /**
   * @ignore
   */
  startScreenCapture2(
    windowId: number,
    captureFreq: number,
    rect: { left: number; right: number; top: number; bottom: number },
    bitrate: number
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  stopScreenCapture2(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  startScreenCaptureByWindow(
    windowSymbol: number,
    rect: CaptureRect,
    param: CaptureParam
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  startScreenCaptureByScreen(
    screenSymbol: ScreenSymbol,
    rect: CaptureRect,
    param: CaptureParam
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  updateScreenCaptureParameters(param: CaptureParam): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setScreenCaptureContentHint(hint: VideoContentHint): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  videoSourceStartPreview(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  videoSourceStopPreview(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  videoSourceEnableDualStreamMode(enable: boolean): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  videoSourceSetParameter(parameter: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  videoSourceUpdateScreenCaptureRegion(rect: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  }): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  videoSourceEnableLoopbackRecording(
    enabled: boolean,
    deviceName: string | null
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  videoSourceEnableAudio(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  videoSourceEnableEncryption(
    enabled: boolean,
    encryptionConfig: EncryptionConfig
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  videoSourceSetEncryptionMode(mode: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  videoSourceSetEncryptionSecret(mode: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  videoSourceRelease(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  startScreenCapture(
    windowId: number,
    captureFreq: number,
    rect: { left: number; right: number; top: number; bottom: number },
    bitrate: number
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  stopScreenCapture(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  updateScreenCaptureRegion(rect: {
    left: number;
    right: number;
    top: number;
    bottom: number;
  }): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  startAudioMixing(
    filepath: string,
    loopback: boolean,
    replace: boolean,
    cycle: number,
    startPos?: number
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  stopAudioMixing(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  pauseAudioMixing(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  resumeAudioMixing(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  adjustAudioMixingVolume(volume: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  adjustAudioMixingPlayoutVolume(volume: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  adjustAudioMixingPublishVolume(volume: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getAudioMixingDuration(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getAudioMixingCurrentPosition(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getAudioMixingPublishVolume(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getAudioMixingPlayoutVolume(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setAudioMixingPosition(position: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setAudioMixingPitch(pitch: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  addPublishStreamUrl(url: string, transcodingEnabled: boolean): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  removePublishStreamUrl(url: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setLiveTranscoding(transcoding: TranscodingConfig): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  addInjectStreamUrl(url: string, config: InjectStreamConfig): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  removeInjectStreamUrl(url: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  createDataStream(
    reliable: boolean | DataStreamConfig,
    ordered?: boolean
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  sendStreamMessage(streamId: number, msg: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getEffectsVolume(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setEffectsVolume(volume: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setVolumeOfEffect(soundId: number, volume: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  playEffect(
    soundId: number,
    filePath: string,
    loopcount: number,
    pitch: number,
    pan: number,
    gain: number,
    publish: boolean,
    startPos?: number
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  stopEffect(soundId: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  preloadEffect(soundId: number, filePath: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  unloadEffect(soundId: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  pauseEffect(soundId: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  pauseAllEffects(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  resumeEffect(soundId: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  resumeAllEffects(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  enableSoundPositionIndication(enable: boolean): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setRemoteVoicePosition(uid: number, pan: number, gain: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getCallId(): string;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  rate(callId: string, rating: number, desc: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  complain(callId: string, desc: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setBool(key: string, value: boolean): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setInt(key: string, value: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setUInt(key: string, value: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setNumber(key: string, value: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setString(key: string, value: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setObject(key: string, value: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getBool(key: string): boolean;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getInt(key: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getUInt(key: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getNumber(key: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getString(key: string): string;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getObject(key: string): string;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getArray(key: string): string;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setParameters(param: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  convertPath(path: string): string;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setProfile(profile: string, merge: boolean): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  onEvent(event: string, callback: Function): void;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  unsubscribe(uid: number, channel?: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  registerDeliverFrame(callback: Function): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  registerLocalUserAccount(appId: string, userAccount: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  joinChannelWithUserAccount(
    token: string,
    channel: string,
    userAccount: string,
    options?: ChannelMediaOptions
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getUserInfoByUserAccount(
    userAccount: string
  ): { errCode: number; userInfo: UserInfo };
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getUserInfoByUid(uid: number): { errCode: number; userInfo: UserInfo };
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  adjustRecordingSignalVolume(volume: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  adjustPlaybackSignalVolume(volume: number): number;
  /** @zh-cn
   * @ignore
   */
  getDefaultAudioPlaybackDevices(): Object;
  /** @zh-cn
   * @ignore
   */
  getDefaultAudioRecordingDevices(): Object;
  /** @zh-cn
   * @ignore
   */
  videoSourceDisableAudio(): number;
  /** @zh-cn
   * @ignore
   */
  adjustLoopbackSignalVolume(volume: number): number;
  /** @zh-cn
   * @ignore
   */
  videoSourceAdjustRecordingSignalVolume(volume: number): number;
  /** @zh-cn
   * @ignore
   */
  videoSourceAdjustLoopbackRecordingSignalVolume(volume: number): number;
  /** @zh-cn
   * @ignore
   */
  videoSourceMuteRemoteAudioStream(uid: number, mute: boolean): number;
  /** @zh-cn
   * @ignore
   */
  videoSourceMuteAllRemoteAudioStreams(mute: boolean): number;
  /** @zh-cn
   * @ignore
   */
  videoSourceMuteRemoteVideoStream(uid: number, mute: boolean): number;
  /** @zh-cn
   * @ignore
   */
  videoSourceMuteAllRemoteVideoStreams(mute: boolean): number;
  /** @zh-cn
   * @ignore
   */
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  stopAllEffects(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  startChannelMediaRelay(config: ChannelMediaRelayConfiguration): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  updateChannelMediaRelay(config: ChannelMediaRelayConfiguration): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  stopChannelMediaRelay(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  registerMediaMetadataObserver(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  unRegisterMediaMetadataObserver(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  sendMetadata(metadata: Metadata): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  addMetadataEventHandler(callback: Function, callback2: Function): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setMaxMetadataSize(size: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  initializePluginManager(): number;
  /** @zh-cn
   * @ignore
   */
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  releasePluginManager(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getPlugins(): Array<{ id: string }>;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  registerPlugin(pluginInfo: PluginInfo): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  unregisterPlugin(pluginId: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  enablePlugin(pluginId: string, enabled: boolean): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setPluginParameter(pluginId: string, param: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getPluginParameter(pluginId: string, paramKey: string): string;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  addVideoWatermark(path: string, options: WatermarkOptions): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  clearVideoWatermarks(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  adjustUserPlaybackSignalVolume(uid: number, volume: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  sendCustomReportMessage(
    id: string,
    category: string,
    event: string,
    label: string,
    value: number
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  enableEncryption(enabled: boolean, config: EncryptionConfig): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setAudioEffectPreset(preset: AUDIO_EFFECT_PRESET): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setVoiceBeautifierPreset(preset: VOICE_BEAUTIFIER_PRESET): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setAudioEffectParameters(
    presset: AUDIO_EFFECT_PRESET,
    param1: number,
    param2: number
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setRecordingAudioFrameParameters(
    sampleRate: number,
    channel: number,
    mode: number,
    samplesPerCall: number
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setCloudProxy(type: CLOUD_PROXY_TYPE): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  enableDeepLearningDenoise(enabled: boolean): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setVoiceBeautifierParameters(
    preset: VOICE_BEAUTIFIER_PRESET,
    param1: number,
    param2: number
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  uploadLogFile(): string;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setVoiceConversionPreset(preset: VOICE_CONVERSION_PRESET): number;
  /**
   * @ignore
   */
  adjustLoopbackRecordingSignalVolume(volume: number): number;
  /**
   * @ignore
   */
  setEffectPosition(soundId: number, pos: number): number;
  /**
   * @ignore
   */
  getEffectDuration(filePath: string): number;
  /**
   * @ignore
   */
  getEffectCurrentPosition(soundId: number): number;
  /** @zh-cn
   *
   */
  /**
   * @ignore
   */
  getAudioFileInfo(filePath: string): number;

  /**
   * @ignore
   */
  setProcessDpiAwareness(): number;
  /**
   * @ignore
   */
  videoSourceSetProcessDpiAwareness(): number;
  /**
   * @ignore
   */
  startAudioRecordingWithConfig(config: AudioRecordingConfiguration): number;
  /** @zh-cn
  * @ignore
  */
  /**
   * @ignore
   */
  enableVirtualBackground(
    enabled: Boolean,
    backgroundSource: VirtualBackgroundSource
  ): number;
  /** @zh-cn
  * @ignore
  */
  /**
   * @ignore
   */
  pauseAllChannelMediaRelay(): number;
  /** @zh-cn
  * @ignore
  */
  /**
   * @ignore
   */
  resumeAllChannelMediaRelay(): number;
  /** @zh-cn
  * @ignore
  */
  /**
   * @ignore
   */
  setAudioMixingPlaybackSpeed(speed: number): number;
  /** @zh-cn
  * @ignore
  */
  /**
   * @ignore
   */
  setAudioMixingDualMonoMode(mode: AUDIO_MIXING_DUAL_MONO_MODE): number;
  /** @zh-cn
  * @ignore
  */
  /**
   * @ignore
   */
  getScreenCaptureSources(
    thumbSize: SIZE,
    iconSize: SIZE,
    includeScreen: boolean
  ): Array<Object>;

  setLowlightEnhanceOptions(
    enabled: boolean,
    options: LowLightEnhanceOptions
  ): number;
  /**
   * @ignore
   */
  setVideoDenoiserOptions(
    enabled: boolean,
    options: VideoDenoiserOptions
  ): number;
  setColorEnhanceOptions(
    enabled: boolean,
    options: ColorEnhanceOptions
  ): number;

  setLocalAccessPoint(
    localAccessPointConfiguration: LocalAccessPointConfiguration
  ): number;

  videoSourceSetLocalAccessPoint(
    localAccessPointConfiguration: LocalAccessPointConfiguration
  ): number;
  /** @zh-cn
  * @ignore
  */
  /**
   * @ignore
   */
  startEchoTestWithConfig(config: EchoTestConfiguration): number;

  //3.7.0
  /**
   * @ignore
   */
  setScreenCaptureScenario(screenScenario: SCREEN_SCENARIO_TYPE): number;
  enableLocalVoicePitchCallback(interval: number): number;
  enableWirelessAccelerate(enabled: boolean): number;
  enableContentInspect(enabled: boolean, config: ContentInspectConfig): number;
  enableSpatialAudio(enabled: boolean): number;
  setRemoteUserSpatialAudioParams(
    uid: number,
    spatial_audio_params?: SpatialAudioParams
  ): number;
}
/** @zh-cn
 * @ignore
 */
/**
 * @ignore
 */
export interface NodeRtcChannel {
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  onEvent(event: string, callback: Function): void;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  joinChannel(
    token: string,
    info: string,
    uid: number,
    options: ChannelMediaOptions
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  registerMediaMetadataObserver(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  unRegisterMediaMetadataObserver(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  sendMetadata(metadata: Metadata): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  addMetadataEventHandler(callback: Function, callback2: Function): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setMaxMetadataSize(size: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  joinChannelWithUserAccount(
    token: string,
    userAccount: string,
    options: ChannelMediaOptions
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  channelId(): string;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getCallId(): string;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setClientRole(clientRole: CLIENT_ROLE_TYPE): number;

  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setClientRoleWithOptions(
    role: CLIENT_ROLE_TYPE,
    options: ClientRoleOptions
  ): number;

  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setRemoteUserPriority(uid: number, priority: Priority): number;

  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  renewToken(token: string): number;

  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
   setEncryptionSecret(secret: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
   setEncryptionMode(mode: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
   setRemoteVoicePosition(uid: number, pan: number, gain: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setDefaultMuteAllRemoteAudioStreams(muted: boolean): number;

  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setDefaultMuteAllRemoteVideoStreams(muted: boolean): number;

  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  muteAllRemoteAudioStreams(muted: boolean): number;

  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  muteRemoteAudioStream(uid: number, muted: boolean): number;

  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  muteAllRemoteVideoStreams(muted: boolean): number;

  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  muteRemoteVideoStream(uid: number, muted: boolean): number;

  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setRemoteVideoStreamType(uid: number, type: StreamType): number;

  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setRemoteDefaultVideoStreamType(type: StreamType): number;

  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  createDataStream(
    reliable: boolean | DataStreamConfig,
    ordered?: boolean
  ): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
   sendStreamMessage(streamId: number, msg: string): number;

  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
   addPublishStreamUrl(url: string, transcodingEnabled: boolean): number;

  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
   removePublishStreamUrl(url: string): number;

  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  setLiveTranscoding(transcoding: TranscodingConfig): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  addInjectStreamUrl(url: string, config: InjectStreamConfig): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  removeInjectStreamUrl(url: string): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  startChannelMediaRelay(config: ChannelMediaRelayConfiguration): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  updateChannelMediaRelay(config: ChannelMediaRelayConfiguration): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  stopChannelMediaRelay(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  getConnectionState(): ConnectionState;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  publish(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  unpublish(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  leaveChannel(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  release(): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  adjustUserPlaybackSignalVolume(uid: number, volume: number): number;
  /** @zh-cn
   * @ignore
   */
  /**
   * @ignore
   */
  enableEncryption(enabled: boolean, config: EncryptionConfig): number;

  muteLocalAudioStream(mute: boolean): number;
  muteLocalVideoStream(mute: boolean): number;
}
/** @zh-cn
 * 用于旁路推流的输出音频的编解码规格，默认为 LC-AAC。
 */
/** Audio codec profile types. The default value is LC_ACC. */
export enum AUDIO_CODEC_PROFILE_TYPE {
  /** @zh-cn
   * 0: (Default) LC-AAC */
  AUDIO_CODEC_PROFILE_LC_AAC = 0,
  /** @zh-cn
   * 1: HE-AAC */
  AUDIO_CODEC_PROFILE_HE_AAC = 1,
  /** @zh-cn
   * 2: HE-AAC v2 规格
   *
   * @since v3.6.1.4
   */
  /** 2: HE-AAC v2
   *
   * @since v3.6.1.4
   */
  AUDIO_CODEC_PROFILE_HE_AAC_V2 = 2,
}

export interface LiveStreamAdvancedFeature {
  /** The name of the advanced feature. It contains LBHQ and VEO.
   */
  featureName: string;

  /** Whether to enable the advanced feature:
   * - true: Enable the advanced feature.
   * - false: (Default) Disable the advanced feature.
   */
  opened: boolean;
}

/** @zh-cn
 * 对比度。 */
/** The contrast level, often used in conjunction with `lighteningLevel`.
 */
enum LIGHTENING_CONTRAST_LEVEL {
  /** @zh-cn
   * 0: 低对比度。 */
  /** 0: Low contrast level. */
  LIGHTENING_CONTRAST_LOW = 0,
  /** @zh-cn
   * （默认）正常对比度。 */
  /** (Default) Normal contrast level. */
  LIGHTENING_CONTRAST_NORMAL,
  /** @zh-cn
   * 高对比度。 */
  /** High contrast level. */
  LIGHTENING_CONTRAST_HIGH,
}

/** @zh-cn
 * 美颜选项。
 */
/** Image enhancement options.
 */
export interface BeautyOptions {
  /** @zh-cn
   * 对比度，常与 `lighteningLevel` 搭配使用。取值越大，明暗对比程度越大。详见 #LIGHTENING_CONTRAST_LEVEL 。
   */
  /** The contrast level, often used in conjunction with `lighteningLevel`.
   * The higher the value, the greater the contrast level. See `LIGHTENING_CONTRAST_LEVEL`.
   */
  lighteningContrastLevel: LIGHTENING_CONTRAST_LEVEL;
  /** @zh-cn
   * 美白程度，取值范围为 [0.0,1.0]，其中 0.0 表示原始亮度。默认值为 0.6。取值越大，美白程度越大。
   *
   */
  /**
   * The brightening level, in the range [0.0,1.0], where 0.0 means the original brightening. The default value is 0.6. The higher the value, the greater the brightening level.
   */
  lighteningLevel: number;
  /** @zh-cn
   * 磨皮程度，取值范围为 [0.0,1.0]，其中 0.0 表示原始磨皮程度。默认值为 0.5。取值越大，磨皮程度越大。
   */
  /** The smoothness level, in the range [0.0,1.0], where 0.0 means the original smoothness. The default value is 0.5. The higher the value, the greater the smoothness level.
   */
  smoothnessLevel: number;
  /** @zh-cn
   * 红润度，取值范围为 [0.0,1.0]，其中 0.0 表示原始红润度。默认值为 0.1。取值越大，红润程度越大。
   */
  /** The redness level, in the range [0.0,1.0], where 0.0 means the original redness. The default value is 0.1. The higher the value, the greater the redness level.
   */
  rednessLevel: number;
  /** @zh-cn
   * 锐度，取值范围为 [0.0, 1.0]，其中 0.0 表示原始锐化等级。可用来实现提升画面锐度/清晰度的视觉效果。
   *  @since v3.6.1.4
   */
  /** The sharpness level. The value ranges between 0 (original) and 1. This parameter is used to improve the sharpness level/clarity of the pic.
   */
  sharpnessLevel: number;
}

export enum LOW_LIGHT_ENHANCE_MODE {
  /** 0: (Default) Automatic mode. The SDK automatically enables or disables the low-light enhancement feature according to the ambient light to compensate for the lighting level or prevent overexposure, as necessary. */
  LOW_LIGHT_ENHANCE_AUTO = 0,
  /** 1: Manual mode. Users need to enable or disable the low-light enhancement feature manually. */
  LOW_LIGHT_ENHANCE_MANUAL,
}

export enum LOW_LIGHT_ENHANCE_LEVEL {
  /** 0: (Default) Promotes video quality during low-light enhancement. It processes the brightness, details, and noise of the video image. The performance consumption is moderate, the processing speed is moderate, and the overall video quality is optimal. */
  LOW_LIGHT_ENHANCE_LEVEL_HIGH_QUALITY = 0,
  /** 1: Promotes performance during low-light enhancement. It processes the brightness and details of the video image. The processing speed is faster. */
  LOW_LIGHT_ENHANCE_LEVEL_FAST,
}

/** The low-light enhancement options.
 *
 * @since v3.7.0
 */
export interface LowLightEnhanceOptions {
  /** The low-light enhancement mode:
   * - 0: (Default) Automatic mode. The SDK automatically enables or disables the low-light enhancement feature according to the ambient light to compensate for the lighting level or prevent overexposure, as necessary.
   * - 1: Manual mode. Users need to enable or disable the low-light enhancement feature manually.
   */
  mode: LOW_LIGHT_ENHANCE_MODE;

  /** The low-light enhancement level:
   * - 0: (Default) Promotes video quality during low-light enhancement. It processes the brightness, details, and noise of the video image. The performance consumption is moderate, the processing speed is moderate, and the overall video quality is optimal.
   * - 1: Promotes performance during low-light enhancement. It processes the brightness and details of the video image. The processing speed is faster.
   */
  level: LOW_LIGHT_ENHANCE_LEVEL;
}

/** The video noise reduction mode.
 */
export enum VIDEO_DENOISER_MODE {
  /** 0: (Default) Automatic mode. The SDK automatically enables or disables the video noise reduction feature according to the ambient light. */
  VIDEO_DENOISER_AUTO = 0,
  /** 1: Manual mode. Users need to enable or disable the video noise reduction feature manually. */
  VIDEO_DENOISER_MANUAL,
}

export enum VIDEO_DENOISER_LEVEL {
  /**
   * 0: (Default) Promotes video quality during video noise reduction. `HIGH_QUALITY` balances performance consumption and video noise reduction quality.
   * The performance consumption is moderate, the video noise reduction speed is moderate, and the overall video quality is optimal.
   */
  VIDEO_DENOISER_LEVEL_HIGH_QUALITY = 0,
  /**
   * 1: Promotes reducing performance consumption during video noise reduction. `FAST` prioritizes reducing performance consumption over video noise reduction quality.
   * The performance consumption is lower, and the video noise reduction speed is faster. To avoid a noticeable shadowing effect (shadows trailing behind moving objects) in the processed video, Agora recommends that you use `FAST` when the camera is fixed.
   */
  VIDEO_DENOISER_LEVEL_FAST,
  /**
   * 2: Enhanced video noise reduction. `STRENGTH` prioritizes video noise reduction quality over reducing performance consumption.
   * The performance consumption is higher, the video noise reduction speed is slower, and the video noise reduction quality is better.
   * If `HIGH_QUALITY` is not enough for your video noise reduction needs, you can use `STRENGTH`.
   */
  VIDEO_DENOISER_LEVEL_STRENGTH,
}
/**
 * The video noise reduction options.
 *
 * @since v3.7.0
 */
export interface VideoDenoiserOptions {
  /** The video noise reduction mode:
   * - 0: (Default) Automatic mode. The SDK automatically enables or disables the video noise reduction feature according to the ambient light.
   * - 1: Manual mode. Users need to enable or disable the video noise reduction feature manually.
   */
  mode: VIDEO_DENOISER_MODE;

  /** The video noise reduction level:
   * - 0: (Default) Promotes video quality during video noise reduction. `HIGH_QUALITY` balances performance consumption and video noise reduction quality.
   * The performance consumption is moderate, the video noise reduction speed is moderate, and the overall video quality is optimal.
   * - 1: Promotes reducing performance consumption during video noise reduction. `FAST` prioritizes reducing performance consumption over video noise reduction quality.
   * The performance consumption is lower, and the video noise reduction speed is faster. To avoid a noticeable shadowing effect (shadows trailing behind moving objects) in the processed video, Agora recommends that you use `FAST` when the camera is fixed.
   * - 2: Enhanced video noise reduction. `STRENGTH` prioritizes video noise reduction quality over reducing performance consumption.
   * The performance consumption is higher, the video noise reduction speed is slower, and the video noise reduction quality is better.
   * If `HIGH_QUALITY` is not enough for your video noise reduction needs, you can use `STRENGTH`.
   */
  level: VIDEO_DENOISER_LEVEL;
}

/** The color enhancement options.
 *
 * @since v3.7.0
 */
export interface ColorEnhanceOptions {
  /** The level of color enhancement. The value range is [0.0,1.0]. `0.0` is the default value, which means no color enhancement is applied to the video. The higher the value, the higher the level of color enhancement.
   */
  strengthLevel: number;

  /** The level of skin tone protection. The value range is [0.0,1.0]. `0.0` means no skin tone protection. The higher the value, the higher the level of skin tone protection.
   * The default value is `1.0`. When the level of color enhancement is higher, the portrait skin tone can be significantly distorted, so you need to set the level of skin tone protection; when the level of skin tone protection is higher, the color enhancement effect can be slightly reduced.
   * Therefore, to get the best color enhancement effect, Agora recommends that you adjust `strengthLevel` and `skinProtectLevel` to get the most appropriate values.
   */
  skinProtectLevel: number;
}
/** The local  proxy mode type. */
export enum LOCAL_PROXY_MODE {
  /** 0: Connect local proxy with high priority, if not connected to local proxy, fallback to sdrtn.
   */
  ConnectivityFirst = 0,
  /** 1: Only connect local proxy
   */
  LocalOnly = 1,
}

export interface LocalAccessPointConfiguration {
  /** local access point ip address list.
   */
  ipList: string[];
  /** local access point domain list.
   */
  domainList: string[];
  /** certificate domain name installed on specific local access point. pass "" means using sni domain on specific local access point
   */
  verifyDomainName: string;
  /** local proxy connection mode, connectivity first or local only.
   */
  mode: LOCAL_PROXY_MODE;
}
/**
 * The volume type.
 *
 * @since v3.7.0
 */
export enum AudioDeviceTestVolumeType {
  /** 0: The volume of the audio capturing device.
   */
  AudioTestRecordingVolume = 0,
  /** 1: The volume of the audio playback device.
   */
  AudioTestPlaybackVolume = 1,
}

/** @zh-cn
 * 音视频通话回路测试的配置。
 *
 * @since v3.6.1.4
/**
 * The configuration of the audio and video call loop test.
 *
 * @since v3.5.2
 */
export interface EchoTestConfiguration {
  /** @zh-cn
   * 是否开启音频设备：
   * - true:（默认）开启音频设备。如需测试音频设备，请设为 `true`。
   * - false: 关闭音频设备。
   */
  /**
   * Whether to enable the audio device for the call loop test:
   * - true: (Default) Enables the audio device. To test the audio device, set this parameter as `true`.
   * - false: Disables the audio device.
   */
  enableAudio: boolean;
  /** @zh-cn
   * 是否开启视频设备：
   * - true:（默认）开启视频设备。如需测试视频设备，请设为 `true`。
   * - false: 关闭视频设备。
   */
  /**
   * Whether to enable the video device for the call loop test:
   * - true: (Default) Enables the video device. To test the video device, set this parameter as `true`.
   * - false: Disables the video device.
   */
  enableVideo: boolean;
  /** @zh-cn
   * 用于保证音视频通话回路测试安全性的 Token。如果你在 Agora 控制台未启用 App 证书，则不需要向该参数传值；
   * 如果你在 Agora 控制台已启用 App 证书，则必须向该参数传入 Token，且在你生成 Token 时使用的 `uid` 必须为 0xFFFFFFFF，
   * 使用的频道名必须为标识每个音视频通话回路测试的频道名。服务端生成 Token 的方式请参考[使用 Token 鉴权](https://docs.agora.io/cn/Interactive%20Broadcast/token_server?platform=All%20Platforms)。
   */
  /**
   * The token used to secure the audio and video call loop test. If you do not enable App Certificate in Agora
   * Console, you do not need to pass a value in this parameter; if you have enabled App Certificate in Agora Console,
   * you must pass a token in this parameter, the `uid` used when you generate the token must be 0xFFFFFFFF, and the
   * channel name used must be the channel name that identifies each audio and video call loop tested. For server-side
   * token generation, see [Authenticate Your Users with Tokens](https://docs.agora.io/en/Interactive%20Broadcast/token_server?platform=All%20Platforms).
   */
  token: string;
  /** @zh-cn
   * 标识每个音视频通话回路测试的频道名。为保证回路测试功能正常，同一个项目（App ID）的各终端用户在不同设备上做音视频通话回路测试时，
   * 传入的标识每个回路测试的频道名不能相同。
   */
  /**
   * The channel name that identifies each audio and video call loop. To ensure proper loop test functionality, the
   * channel name passed in to identify each loop test cannot be the same when users of the same project (App ID)
   * perform audio and video call loop tests on different devices.
   */
  channelId: string;
}

/**
 * The screen sharing scenario.
 *
 * @since v3.7.0
 */
export enum SCREEN_SCENARIO_TYPE {
  /** 1: (Default) Document. This scenario prioritizes the video quality of screen sharing and reduces the latency of the shared video for the receiver. If you share documents, slides, and tables, you can set this scenario.
   */
  SCREEN_SCENARIO_DOCUMENT = 1,
  /** 2: Game. This scenario prioritizes the smoothness of screen sharing. If you share games, you can set this scenario.
   */
  SCREEN_SCENARIO_GAMING = 2,
  /** 3: Video. This scenario prioritizes the smoothness of screen sharing. If you share movies or live videos, you can set this scenario.
   */
  SCREEN_SCENARIO_VIDEO = 3,
  /** 4: Remote control. This scenario prioritizes the video quality of screen sharing and reduces the latency of the shared video for the receiver. If you share the device desktop being remotely controlled, you can set this scenario.
   */
  SCREEN_SCENARIO_RDC = 4,
}

export interface ContentInspectModule {
  /**
   * The content inspect module type.
   * the module type can be 0 to 31.
   * kContentInspectInvalid(0)
   * kContentInspectModeration(1)
   * kContentInspectSupervise(2)
   */
  type: number;
  /**The content inspect frequency, default is 0 second.
   * the frequency <= 0 is invalid.
   */
  interval: number;
}
export interface ContentInspectConfig {
  /** The extra information, max length of extraInfo is 1024.
   *  The extra information will send to server with content(image).
   */
  extraInfo: number;
  /**The content inspect modules, max length of modules is 32.
   * the content(snapshot of send video stream, image) can be used to max of 32 types functions.
   */
  modules: ContentInspectModule[];
}

export enum WLACC_MESSAGE_REASON {
  /** WIFI signal is weak.*/
  WLACC_MESSAGE_REASON_WEAK_SIGNAL = 0,
  /** Channel congestion.*/
  WLACC_MESSAGE_REASON_CHANNEL_CONGESTION = 1,
}
export enum WLACC_SUGGEST_ACTION {
  /** Please get close to AP.*/
  WLACC_SUGGEST_ACTION_CLOSE_TO_WIFI = 0,
  /** The user is advised to connect to the prompted SSID.*/
  WLACC_SUGGEST_ACTION_CONNECT_SSID = 1,
  /** The user is advised to check whether the AP supports 5G band and enable 5G band (the aciton link is attached), or purchases an AP that supports 5G. AP does not support 5G band.*/
  WLACC_SUGGEST_ACTION_CHECK_5G = 2,
  /** The user is advised to change the SSID of the 2.4G or 5G band (the aciton link is attached). The SSID of the 2.4G band AP is the same as that of the 5G band.*/
  WLACC_SUGGEST_ACTION_MODIFY_SSID = 3,
}

export interface WlAccStats {
  /** End-to-end delay optimization percentage.*/
  e2eDelayPercent: number;
  /** Frozen Ratio optimization percentage.*/
  frozenRatioPercent: number;
  /** Loss Rate optimization percentage.*/
  lossRatePercent: number;
}

export enum CONTENT_INSPECT_RESULT {
  CONTENT_INSPECT_NEUTRAL = 1,
  CONTENT_INSPECT_SEXY = 2,
  CONTENT_INSPECT_PORN = 3,
}

/**
 * The proxy type.
 *
 * @since v3.7.0
 */
export enum PROXY_TYPE {
  /** 0: Reserved for future use.
   */
  NONE_PROXY_TYPE = 0,
  /** 1: The cloud proxy for the UDP protocol, that is, the Force UDP cloud proxy mode. In this mode, the SDK always transmits data over UDP.
   */
  UDP_PROXY_TYPE = 1,
  /** 2: The cloud proxy for the TCP (encryption) protocol, that is, the Force TCP cloud proxy mode. In this mode, the SDK always transmits data over TLS 443.
   */
  TCP_PROXY_TYPE = 2,
  /** 3: Reserved for future use.
   */
  LOCAL_PROXY_TYPE = 3,
  /** 4: The automatic mode. In this mode, the SDK attempts a direct connection to SD-RTN™ and automatically switches to TLS 443 if the attempt fails.
   */
  TCP_PROXY_AUTO_FALLBACK_TYPE = 4,
}

export interface SpatialAudioParams {
  /**
   * The azimuthal angle in degrees of the remote user relative to the local user in the spherical coordinate system (taking the position of the local user as its origin). The value range is [0,360], as defined by the following main directions:
   * - `0`: (Default) 0 degrees, which means the remote user is directly in front of the local user.
   * - `90`: 90 degrees, which means the remote user is directly to the left of the local user.
   * - `180`: 180 degrees, which means the remote user is directly behind the local user.
   * - `270`: 270 degrees, which means the remote user is directly to the right of the local user.
   */
  speaker_azimuth: number;
  /**
   * The elevation angle in degrees of the remote user relative to the local user in the spherical coordinate system (taking the position of the local user as its origin). The value range is [-90,90], as defined by the following main directions:
   * - `0`: (Default) 0 degrees, which means the remote user is at the same horizontal level as the local user.
   * - `-90`: -90 degrees, which means the remote user is directly above the local user.
   * - `90`: 90 degrees, which means the remote user is directly below the local user.
   */
  speaker_elevation: number;
  /**
   * The distance in meters of the remote user relative to the local user in the spherical coordinate system (taking the position of the local user as its origin). The value range is [1,50]. The default value is 1 meter.
   */
  speaker_distance: number;
  /**
   * The orientation in degrees of the remote user's head relative to the local user's head in a spherical coordinate system (taking the position of the local user as its origin). The value range is [0,180], as defined by the following main directions:
   * - `0`: (Default) 0 degrees, which means the remote user's head and the local user's head face the same direction.
   * - `180`: 180 degrees, which means the remote user's head and the local user's head face opposite directions.
   */
  speaker_orientation: number;
  /**
   * Whether to enable audio blurring:
   * - true: Enable blurring.
   * - false: (Default) Disables blurring.
   */
  enable_blur: boolean;
  /**
   * Whether to enable air absorption. This function simulates the energy attenuation of audio when the audio transmits in the air:
   * - true: (Default) Enables air absorption.
   * - false: Disable air absorption.
   */
  enable_air_absorb: boolean;
}
