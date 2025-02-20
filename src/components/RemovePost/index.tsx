import { removePost } from "../../API/PostAPI";

export const RemovePost = ({ id }: { id: number }) => {
	const handleClick = async () => {
		await removePost({ id });
	};

	return (
		<>
			<button onClick={handleClick}>Delete</button>
		</>
	);
};
