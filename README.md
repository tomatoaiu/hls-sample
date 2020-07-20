# hls-sample

> Distribute the test video to hls with GStreamer and receive the video with the browser

## Prerequires

Please install `GStreamer` in advance.  
Make sure `gst-launch-1.0` is available from the command line.

## Usage

```sh
git clone https://github.com/tomatoaiu/hls-sample.git
cd hls-sample
npm i
```

### 1. Create page to receive hls

```sh
npm run build
```

### 2. Deliver test video with hls with GStreamer

```sh
npm run hls
```

### 3. Start httpserver

```sh
npm run server
```

When you start httpserver, it will automatically open `http://localhost:8080` in your browser and start receiving video.

