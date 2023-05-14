const mongoose = require("mongoose");

const dummy = () => {
    const blogs = []
    if(blogs)
  return 1
};
const totalLikes=(blogs) => {
const total=blogs.reduce((totals, blog) =>
totals + blog.likes, 0);
return total
}
const favoriteBlog=(blogs) => {
   const maxLikes = Math.max(...blogs.map(bl=> bl.likes))
    const blogMaxLikes = blogs.find(bl=> bl.likes === maxLikes)
return blogMaxLikes
    // return (
    //    <div>
    //
    //         { blogs.map((blog, id)=>{
    //                 if(blog===blogMaxLikes){
    //                     return<div key={id}>
    //                         <p>title: {blog.title},</p>
    //                         <p>author: {blog.author}</p>
    //                     </div>
    //                 }
    //                 return null;
    //             })
    //         }
    //    </div>
    // )


}
const mostBlogs = ({blogs}) => {
    const authors = blogs.reduce((acc, blog) => {
        const author = blog.author;
        if (!acc[author]) {
            acc[author] = 1;
        } else {
            acc[author]++;
        }
        return acc;
    }, {});

    const mostAuthor = Object.keys(authors)
        .find(author => authors[author] === Math.max(...Object.values(authors)));
  return mostAuthor
    // return (
    //     <div>
    //         <h2>Most Blogs Author</h2>
    //         <p>The author with the most blogs is: {mostAuthor}</p>
    //     </div>
    // )
}





module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
}