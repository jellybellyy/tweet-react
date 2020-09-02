import React from "react";
import ReactDOM from "react-dom";

import Tweet from "Tweet";

// import tweets from "tweets";

// class App extends React.Component {
//   render() {
//     let tweet = tweets.tweets;
//     console.log(tweet[0].user.name);

//     return <div>Hello{tweet[0].user.name}</div>;
//   }
// }

const element = document.getElementById("app");

ReactDOM.render(<Tweet />, element); //

console.log("tweet react");
