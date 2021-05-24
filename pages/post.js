// import { withRouter } from "next/router";
import axios from "axios";

// const Post = withRouter((props) => {
//   return <h1>ou are looking at post no. {props.router.query.id} </h1>;
// });

// **********Other option:
const Post = (props) => {
  return (
    <div>
      <h1>comments for post no. {props.id}</h1>
      {props.comments.map((comment) => {
        return (
          <div>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
          </div>
        );
      })}
    </div>
  );
};


Post.getInitialProps = async ({ query }) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`);
  const { data } = res;
  return { ...query, comments: data };
};

export default Post;
