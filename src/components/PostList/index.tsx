import { useEffect, useState } from "react";
import { getPosts } from "../../API/PostAPI";
import { PostType } from "../../Types/PostType";
import Styles from "./PostList.module.css";
import { CommentType } from "../../Types/CommentType";
import { RemovePost } from "../RemovePost";
import { UpdatePost } from "../UpdatePost";

export const PostList = () => {
	const [data, setData] = useState<PostType[]>([]);

	const fetchData = async () => {
		try {
			const result = await getPosts();
			setData(result);
			console.log(result);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			{data &&
				data.map((post: PostType) => (
					<div key={post.postID} className={Styles.postList}>
						<h2>{post.title}</h2>
						<p>{post.postBody}</p>
						<div>
							<h3>Comments:</h3>
							{post.comments.map((comment: CommentType) => (
								<p key={comment.commentID}>{comment.commentBody}</p>
							))}
						</div>
						<UpdatePost post={post} />
						<RemovePost id={post.postID} />
					</div>
				))}
		</>
	);
};
