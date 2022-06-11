function Container(props) {
  const [video, setVideo] = React.useState("abc");
  // const [filename, setFilename] = React.useState("");

  function select_song(selected_song) {
    // CHANGE SOUND SOURCE
    // let new_sound = new Howl({
    //   src: selected_song,
    //   html5: true,
    // });
    // setSound(new_sound);
    // setFilename(selected_song.split("/").pop());
    // // CHANGE DISPLAY OF PLAYAUDIO
    // setIsHidden(false);

    let filename = "./VIDEO/" + selected_song.split("/").pop();
    console.log(filename);
    setVideo(filename);
    console.log(video);
  }

  return (
    <div>
      <div className="mt-3">
        <SelectAudio select_song={select_song} mp3_files={mp3_files} />
      </div>

      <div className="mt-3">
        <Video video_file={video} />
      </div>
    </div>
  );
}
