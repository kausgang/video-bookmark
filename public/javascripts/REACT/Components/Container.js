function Container(props) {
  const [video, setVideo] = React.useState("abc");
  const [filename, setFilename] = React.useState("");

  function select_song(selected_song) {
    let file = "./VIDEO/" + selected_song.split("/").pop();
    // console.log(filename);
    setVideo(file);
    setFilename(selected_song.split("/").pop());
  }

  function save_bookmark(bookmark_name, timestamp) {
    //API call to TO SAVE IT IN SERVER
    if (bookmark_name !== null) {
      fetch("/create_bookmark", {
        method: "POST",
        body: JSON.stringify({
          filename: filename,
          bookmark_name: bookmark_name,
          timestamp: timestamp,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => {
        const status = response.status;
        console.log("status = ", status);

        if (status !== 200) {
          alert("error occured writing to bookmark record");
        } else {
          // if(bookmark_name!==null)
          // alert("Bookmark created successfully");
          // setBookmark_timestamp([bookmark_name, timestamp]);
        }
      });
    }
  }

  return (
    <div>
      <div className="mt-3">
        <SelectAudio select_song={select_song} mp3_files={mp3_files} />
      </div>

      <div className="d-flex flex-column align-items-center m-2">
        <Video video_file={video} />

        <PlaybackControl video_file={video} />

        <BookmarkCreator save_bookmark={save_bookmark} />
      </div>
    </div>
  );
}
