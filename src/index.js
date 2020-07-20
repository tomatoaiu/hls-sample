import Hls from "hls.js";

if (Hls.isSupported()) {
  const video = document.getElementById("video");
  const hls = new Hls();

  hls.attachMedia(video);
  hls.on(Hls.Events.MEDIA_ATTACHED, function () {
    console.log("video and hls.js are now bound together !");
    hls.loadSource("http://localhost:8080/playlist.m3u8");
    hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
      console.log(
        "manifest loaded, found " + data.levels.length + " quality level"
      );
    });
  });
}
