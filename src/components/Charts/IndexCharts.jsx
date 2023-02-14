import React from "react";
import { useState } from "react";
import PostChart from "./PostChart";
import { db } from "../../firebase";
import { collectionGroup, getDocs } from "@firebase/firestore";
import { useEffect } from "react";
// import RatingChart from './RatingChart'



const count = (n, arr) => {
  let c = 0;
  arr.forEach((el) => (n == el ? c++ : c));
  return c;
};
const IndexCharts = () => {
  const [ratings, setRatings] = useState([]);
  const [posts, setPosts] = useState();
  useEffect(() => {
    getDocs(collectionGroup(db, "posts")).then((snapshot) => {
      let ratings = [];
      let data = [];
      let posts_data = {};
      snapshot.forEach((doc) => data.push(doc.data()));
      data.forEach((post) => ratings.push(...Object.values(post.likes_by_users)));
      setRatings(ratings);
      data.forEach((post) => {
        let createdAt = new Date(post.createdAt.seconds * 1000);
        createdAt = createdAt.toLocaleDateString();
        posts_data[createdAt] = posts_data[createdAt]
          ? posts_data[createdAt] + 1
          : 1;
      });
      posts_data = Object.keys( posts_data).map(date => {return {'label': date, 'value': posts_data[date]}})
      setPosts(posts_data);
    });
  }, [])
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        // gap:"20px"
      }}
    >
      {ratings ? (
        <PostChart
          dataSource={{
            dataSource: {
              // Chart Configuration
              chart: {
                //Set the chart caption
                caption: "Ratings Stats",
                //Set the chart subcaption
                subCaption: "",
                //Set the x-axis name
                xAxisName: "Rating",
                //Set the y-axis name
                yAxisName: "Number of ratings",
                numberSuffix: "",
                //Set the theme for your chart
                theme: "fusion",
              },
              // Chart Data
              data: [
                { label: "😕", value: count(1, ratings) },
                { label: "😐", value: count(2, ratings) },
                { label: "😊", value: count(3, ratings) },
              ],
            },
          }}
        />
      ) : (
        <div></div>
      )}
      {posts ? (
        <PostChart
          dataSource={{
            dataSource: {
              // Chart Configuration
              chart: {
                //Set the chart caption
                caption: "Posts Stats",
                //Set the chart subcaption
                subCaption: "",
                //Set the x-axis name
                xAxisName: "Date",
                //Set the y-axis name
                yAxisName: "Number of posts",
                numberSuffix: "",
                //Set the theme for your chart
                theme: "fusion",
              },
              // Chart Data
              data: posts,
            },
          }}
        />
      ) : (
        <div></div>
      )}
      
    </div>
  );
};

export default IndexCharts;
