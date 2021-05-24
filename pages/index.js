import axios from "axios";
import Link from "next/Link";

// import React, { Component } from "react";

// class Index extends Component {
//   constructor(props) {
//     super(props);
//     console.log("Fetching data in constructor");
//     this.state = {
//       data: [],
//     };
//   }
//   static async getInitialProps() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const json = await res.json();
//     console.log(json);
//     return json;
//   }
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <h1>Our Index Page!!!</h1>
//       </div>
//     );
//   }
// }

// export default Index;

const Hello = ({ posts }) => {
  return (
    <div>
      <h1>Our Index Page!!! </h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}><Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}><a>{post.title}</a></Link></li>
        ))}
      </ul>
    </div>
  );
};

Hello.getInitialProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const { data } = res;
  // console.log(data[0]);
  return { posts: data };
};

export default Hello;
