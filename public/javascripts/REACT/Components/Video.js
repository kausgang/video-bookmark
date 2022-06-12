function Video(props) {
  React.useEffect(() => {
    // reload the video after selection changes
    let video = document.getElementById("video");
    video.load();
  });
  return (
    // <div>
    <video id="video" width="60%" controls>
      <source src={props.video_file} type="video/mp4" />
      {/* <source
          src="./VIDEO/[HQ] Requiem for a dream (Piano cover) (720p_30fps_H264-128kbit_AAC).mp4"
          type="video/mp4"
        /> */}
      Your browser does not support HTML video.
    </video>
    // </div>
  );
}
