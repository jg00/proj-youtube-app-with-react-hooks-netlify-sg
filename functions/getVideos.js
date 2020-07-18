// Netlify serverless function to retreive vidoe list from API.
import axios from "axios";

exports.handler = function (event, context, callback) {
  // const { API_URL, API_KEY } = process.env;
  // const API_KEY = "AIzaSyCVdCbdit08UrBt2ky0pOcHlaCtKORekdQ";
  const API_KEY = "AIzaSyAHlMI6rKQP5usbYOlaD-iCXaU26D5MikM"; // new project
  const API_URL = "https://www.googleapis.com/youtube/v3";
  const { term } = JSON.parse(event.body);

  // console.log(API_URL);
  // console.log(term);

  // Send the user response
  const send = (body) => {
    callback(null, {
      statusCode: 200,
      // headers: {
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Headers":
      // "Origin, X-Requested-With, Content-Type, Accept, X-Powered-By",
      // "Access-Control-Allow-Methods":
      //   "GET, PUT, POST, DELETE, HEAD, OPTIONS, PATCH",
      // "Access-Control-Allow-Credentials": true,
      // },
      body: JSON.stringify(body),
    });
  };

  // Perform API call
  const getVideos = (term) => {
    console.log("getVideos terms:", term);
    axios
      .get(`${API_URL}/search`, {
        params: {
          q: term.term,
          part: "snippet",
          maxResult: 5,
          // type: "video",
          key: API_KEY,
        },
      })
      .then((res) => {
        console.log("getVideos API response");
        // console.log(res);
        // send(res);
        send(res.data.items);
      })
      .catch((err) => send(err));
  };

  // Make sure method is GET
  if (event.httpMethod === "GET") {
    getVideos(term);
  }
};

/*
// 1 Reference - Good Example
  exports.handler = function (event, context, callback) {
    // Request body - POST with data
    const { name } = JSON.parse(event.body);
    console.log(name);

    // Response - GET
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ msg: "Hello " + name }),
    });
  };
*/

// 2 Reference Only
// const URL = "https://www.googleapis.com/youtube/v3/search?q=buildings&part=snippet&maxResult=5&key=********************";
// const URL = `${API_URL}/search?q=${term}&part=snippet&maxResult=5&key=${API_KEY}`;
// console.log(URL);
