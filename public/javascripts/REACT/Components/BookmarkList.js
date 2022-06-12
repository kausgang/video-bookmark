function BookmarkList(props) {
  // GET LIST OF BOOKMARK THROUGH API CALL
  let filename = props.filename;

  var myVideo = document.getElementById("video");

  // let [response_data, setResponse_data] = React.useState([]);

  // React.useEffect(() => {
  //   URL = "/list_bookmark?filename=" + filename;

  //   console.log("here now")
  //   fetch(URL)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       // Do something with response.

  //       setResponse_data(response.slice(0, -1)); //remove the last element
  //     });
  // },[]);

  //AN EMPTY ARRY TO MAKE USEEFFECT TO RUN ONCE AND BEHAVE LIKE COMPONENTDIDMOUNT
  // When using useEffect with a second array argument, React will run the callback after mounting (initial render)
  //  and after values in the array have changed. Since we pass an empty array, it will run only after mounting

  function seek_timestamp(e) {
    let timestamp_value = e.target.attributes.data_timestamp.value;
    // props.bookmark_seek(timestamp_value);
    myVideo.currentTime = timestamp_value;
  }

  //ADD BOOKMARK TO THE LIST ONCE CREATE BOOKMARK IS CLICKED
  React.useEffect(() => {
    console.log("hi");
    URL = "/list_bookmark?filename=" + filename;

    fetch(URL)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response)

        // setResponse_data(response.slice(0, -1)); //remove the last element

        let ul = document.getElementById("bookmark_list");
        // remove all children
        ul.innerHTML = "";
        // console.log(bookmark_list)
        response.slice(0, -1).forEach((element) => {
          // console.log(element.split(','))
          if (element.split(",")[0] !== null) {
            let li = document.createElement("li");
            li.setAttribute("class", "list-group-item");
            li.addEventListener("click", seek_timestamp);
            var aTag = document.createElement("a");
            aTag.setAttribute("href", "#");
            aTag.innerText = element.split(",")[0];
            aTag.setAttribute("data_timestamp", element.split(",")[1]);
            li.appendChild(aTag);

            ul.appendChild(li);
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    // if(props.bookmark_timestamp[0]!=null){
    //   let ul=document.getElementById('bookmark_list');
    //   // console.log(bookmark_list)
    //   let li = document.createElement("li");
    //   li.addEventListener("click",send_timestamp)
    //   var aTag = document.createElement('a');
    //   aTag.setAttribute('href',"#");
    //   aTag.innerText = props.bookmark_timestamp[0];
    //   aTag.setAttribute("data_timestamp",props.bookmark_timestamp[1])
    //   li.appendChild(aTag)

    //   //ADD OTHER ATTRIBUTES

    //   ul.appendChild(li);

    //   // RESET THE VALUE OF BOOKMARK_TIMESTAMP IN PARENT TO STOP RERENDERING
    //   props.reset_bookmark_timestamp()
    // }
  });

  return (
    <div className="m-2">
      <div className="d-flex justify-content-between">
        <p class="text-danger text-decoration-underline">
          To Update bookmark names, edit - <b> ./public/"filename".txt</b>
        </p>
        <br></br>
        <p class="text-info text-decoration-underline">
          Video will reload after creating bookmark. Use Bookmark_List to seek
          to newly created bookmark and click Play/Pause
        </p>
      </div>

      <ul id="bookmark_list" className="list-group list-group-flush">
        {/* {response_data.map((element, index) => (
        <li key={index} onClick={send_timestamp}>
          <a href="#" data_timestamp={element.split(",")[1]}>
            {element.split(",")[0]}
          </a>
        </li>
      ))} */}
      </ul>
    </div>
  );
}
