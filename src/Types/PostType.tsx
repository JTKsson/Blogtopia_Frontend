import { CommentType } from "./CommentType";

export interface PostType {
	postID: number;
	title: string;
	postBody: string;
	categoryID: number;
	userId: number;
	comments: CommentType[];
}
