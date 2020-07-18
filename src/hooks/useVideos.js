// // 2 Reference before using Netlify's serverless function
// import { useState, useEffect } from "react";
// import youtube from "../apis/youtube";
// // import { API_KEY } from "../apis/video-hooks-api"; // No longer using.  Instead API calls will be made via Netlify's ServerLess functions.

// // console.developers.google.com > YouTube Data API v3
// const KEY = "AIzaSyCVdCbdit08UrBt2ky0pOcHlaCtKORekdQ";

// const useVideos = (defaultSearchTerm) => {
//   const [videos, setVideos] = useState([]);

//   // Initial API search to return a list of videos
//   useEffect(() => {
//     search(defaultSearchTerm);
//   }, [defaultSearchTerm]);

//   // Callback - Pass down to SearchBar.  Update videos list.
//   const search = async (term) => {
//     const response = await youtube.get("/search", {
//       params: {
//         q: term,
//         part: "snippet",
//         maxResult: 5,
//         // type: 'video'
//         key: KEY,
//       },
//     });

//     setVideos(response.data.items);
//   };

//   return [videos, search]; // Like useState() convention. 'videos' is our state.  'search' is our functiom we can use to get a list of videos.
//   // return {videos, onTermSubmit} // JS convention works as well
// };

// export default useVideos;

/* 1 Reference orinigal only
  import { useState, useEffect } from "react";
  import youtube from "../apis/youtube";
  import { API_KEY } from "../apis/video-hooks-api"; // No longer using.  Instead API calls will be made via Netlify's ServerLess functions.

  // console.developers.google.com > YouTube Data API v3
  const KEY = API_KEY;

  const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    // Initial API search to return a list of videos
    useEffect(() => {
      search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    // Callback - Pass down to SearchBar.  Update videos list.
    const search = async (term) => {
      const response = await youtube.get("/search", {
        params: {
          q: term,
          part: "snippet",
          maxResult: 5,
          // type: 'video'
          key: KEY,
        },
      });

      setVideos(response.data.items);
    };

    return [videos, search]; // Like useState() convention. 'videos' is our state.  'search' is our functiom we can use to get a list of videos.
    // return {videos, onTermSubmit} // JS convention works as well
  };

  export default useVideos;
*/

// 3 Netlify's serverless function - Reference only
import axios from "axios";
import { useState, useEffect } from "react";

// import youtube from "../apis/youtube";
// import { API_KEY } from "../apis/video-hooks-api"; // No longer using.  Instead API calls will be made via Netlify's ServerLess functions.

// console.developers.google.com > YouTube Data API v3
// const KEY = API_KEY;

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  // Initial API search to return a list of videos
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  // Callback - Pass down to SearchBar.  Update videos list.
  const search = (term) => {
    console.log("Perform api call from our app dev http://localhost:3000");

    axios
      .get("/getvideos")
      .then((response) => setVideos(response))
      .catch((err) => console.log("Error:", err));
    // , {
    // crossDomain: true,
    // headers: { "Content-Type": "text/plain" },
    // withCredentials: true,
    // credentials: "same-origin",
    // })

    // .get("/.netlify/functions/getvideos") // production

    // const response = await youtube.get("/search", {
    //   params: {
    //     q: term,
    //     part: "snippet",
    //     maxResult: 5,
    //     // type: 'video'
    //     key: KEY,
    //   },
    // });

    // setVideos(response.data.items);
    // setVideos(response);
  };

  return [videos, search]; // Like useState() convention. 'videos' is our state.  'search' is our functiom we can use to get a list of videos.
  // return {videos, onTermSubmit} // JS convention works as well
};

export default useVideos;
