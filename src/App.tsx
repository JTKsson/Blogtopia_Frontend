import { CreatePost } from "./components/CreatePost";
import { LoginForm } from "./components/LoginForm";
import { PostList } from "./components/PostList";

function App() {
	return (
		<>
			<PostList />
			<LoginForm />
			<CreatePost />
		</>
	);
}

export default App;
