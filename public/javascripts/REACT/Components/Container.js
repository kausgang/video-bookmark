function Container(props) {
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
  }

  return (
    <div>
      <div className="mt-3">
        <SelectAudio select_song={select_song} mp3_files={mp3_files} />
      </div>
    </div>
  );
}
