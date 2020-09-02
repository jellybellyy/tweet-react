import React, { Component } from "react";

import User from "users.js";
import tweets from "tweets.js";

class Tweet extends Component {
  render() {
    let info = tweets.tweets;
    let allTweets = info.map((tweetInfo, index) => {
      return (
        <div key={index}>
          <User user={tweetInfo.user} />
          <br />
          <p>{tweetInfo.text}</p>
          <br />
          {tweetInfo.retweet_count}retweets;
          {tweetInfo.favorite_count}likes;
        </div>
      );
    });

    return <div>{allTweets};</div>;
  }
}

export default Tweet;
