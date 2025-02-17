import { CommentType } from "./CommentType";

export interface PostType {
	PostID: number;
	title: string;
	postBody: string;
	categoryId: number;
	userId: number;
	comments: CommentType[];
}
