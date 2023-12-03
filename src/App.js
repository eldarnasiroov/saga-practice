import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getPosts } from "./redux/actions";
import { Button } from "antd";
import PostView from "./components/PostView/PostView.js";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((data) => data);

  const handleGetPosts = () => {
    dispatch(getPosts());
  };

  return (
    <div className="App">
      <Button onClick={handleGetPosts}>Получить посты</Button>
      {data.posts && data.posts.map((post) => <PostView key={post.id} id={post.id} body={post.body} />)}
    </div>
  );
}

export default App;
