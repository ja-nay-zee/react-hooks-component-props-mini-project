import React from "react";
import Article from "./Article";

// Make an ArticleList component as a child of App. It should return:
function ArticleList({ posts }){
          const articleJS = posts.map((postsArr) => (
            <Article
             key={postsArr.id}
             title={postsArr.title}
             date={postsArr.date}
             preview={postsArr.preview}
             minutes={postsArr.minutes}
             />
          ));
        return <main>{articleJS}</main>
}
// a <main> element with the following components inside:
// an array of Article components (one component for each post passed down as a prop to ArticleList)
// make sure to assign a unique key prop to each Article

export default ArticleList;

// DONE WITH THIS PART //