import React, {Component} from 'react';

export default class Comment extends Component {
	constructor() {
		super();
		this.state = {
			isOpen: false
		}
	}

	// state = {
	// 	isOpen: false
	// }

	render() {
		//const {comment} = this.comment;
		return (
			<button onClick={this.toggleOpen}> {this.getButtonText()} comment</button>
			//{this.getCommentBody123()}
			)
	}

	getButtonText() {
		if (this.state.isOpen) {
			return 'Hide';
		}
		return 'Show';
	}

	getCommentBody123() {
		const template123 = <div className="comment-body">
							<p>{this.props.comment.text}</p>
							<div className="comment-author">{this.props.comment.user}</div>
						 </div>

		return this.state.isOpen && template123;

	}

	toggleOpen = ev => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}