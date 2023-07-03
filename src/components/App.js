import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
// {
//   id: 1,
//   title: "Components 101",
//   date: "December 15, 2020",
//   preview: "Setting up the building blocks of your site",
//   minutes: 5,
// },
console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name=""/>
      <About image="" about=""/>
      <ArticleList title="" date="" preview=""/>
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
