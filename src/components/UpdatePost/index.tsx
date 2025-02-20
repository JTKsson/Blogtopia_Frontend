import { useEffect, useState } from "react";
import { PostType } from "../../Types/PostType";
import { updatePost } from "../../API/PostAPI";

export const UpdatePost = ({ post }: { post: PostType }) => {
	const [formData, setFormData] = useState({
		postId: post.postID,
		title: post.title,
		postBody: post.postBody,
		categoryId: post.categoryID,
	});
	const [error, setError] = useState<string | null>(null);
	const [show, setShow] = useState(false);

	useEffect(() => {
		setFormData({
			postId: post.postID,
			title: post.title,
			postBody: post.postBody,
			categoryId: post.categoryID,
		});
	}, [post]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleClick = async () => {
		try {
			if (!formData.title || !formData.postBody) {
				setError("Please make sure you added a title, content");
				return;
			}
			const result = await updatePost(
				formData.postId,
				formData.title,
				formData.postBody,
				formData.categoryId
			);
			console.log(result);
			setError(null);
		} catch (error) {
			console.error(error);
			setError("Someting went wrong");
		}
	};

	const categories = [
		{ categoryName: "Fitness", categoryId: 1 },
		{ categoryName: "Fashion", categoryId: 2 },
		{ categoryName: "Cooking", categoryId: 3 },
		{ categoryName: "Gaming", categoryId: 4 },
	];

	return (
		<>
			<button onClick={() => setShow(!show)}>Edit</button>
			{error && <p style={{ color: "red" }}>{error}</p>}

			{show && (
				<div>
					<input
						type='text'
						name='title'
						placeholder='Title'
						value={formData.title}
						onChange={handleChange}
					/>
					<input
						type='text'
						name='postBody'
						placeholder='Start your post...'
						value={formData.postBody}
						onChange={handleChange}
					/>
					<select name='categoryId' value={formData.categoryId} onChange={handleChange}>
						<option value=''>Select a category</option>
						{categories.map((category) => (
							<option key={category.categoryId} value={category.categoryId}>
								{category.categoryName}
							</option>
						))}
					</select>
					<button onClick={handleClick}>Update Post</button>
				</div>
			)}
		</>
	);
};
