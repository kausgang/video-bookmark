function Video(props) {
  React.useEffect(() => {
    console.log("from useeffect " + props.video_file);

    let video = document.getElementById("video");
    video.load();
  });
  return (
    <div>
      {/* {props.video_file} */}
      <video id="video" width="80%" height="50%">
        <source src={props.video_file} type="video/mp4" />
        {/* <source
          src="./VIDEO/[HQ] Requiem for a dream (Piano cover) (720p_30fps_H264-128kbit_AAC).mp4"
          type="video/mp4"
        /> */}
        Your browser does not support HTML video.
      </video>
    </div>
  );
}
