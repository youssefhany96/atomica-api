import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./components/PostList/PostList";
import PostForm from "./components/PostForm/PostForm";
import DetailedPostView from "./views/DetailedPostView/DetailedPostView";
import EditPost from "./views/EditPost/EditPost";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/new" element={<PostForm />} />
        <Route path="/posts/:id/edit" element={<EditPost />} />
        <Route path="/posts/:id" element={<DetailedPostView />} />
      </Routes>
    </Router>
  );
};

export default App;
