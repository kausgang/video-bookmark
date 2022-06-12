function BookmarkCreator(props) {
  const create_bookmark = () => {
    // console.log(props.timestamp);
    // let name = prompt("What's the name for the Bookmark");
    // let name = props.timestamp + " -  Seconds";
    var myVideo = document.getElementById("video");

    let name = myVideo.currentTime + " - Seconds";
    let timestamp = myVideo.currentTime;
    props.save_bookmark(name, timestamp);
    // alert("Bookmark added")
  };
  return (
    <div>
      <button className="btn btn-success btn-lg" onClick={create_bookmark}>
        Create Bookmark
      </button>
    </div>
  );
}
