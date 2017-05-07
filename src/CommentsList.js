import React from 'react';
import Comment from './Comment';

export default function CommentsList({comments}) {
	if (!comments || !comments.length) return null;
	const elements = comments.map(comment => <li key={comment.id}><Comment comment={comment}/> </li>);
	return (
		<div className="comments">
			<div className="comments-title">{comments.length} comments</div>
			<ul>
				{elements}
			</ul>
		</div>
	);
}