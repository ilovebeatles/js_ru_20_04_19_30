import React, {Component} from 'react';

export default class Comment extends Component {
	constructor() {
		super();
		this.state = {
			isOpen: false
		};
	}

	// state = {
	// 	isOpen: false
	// }

	render() {
		const {user} = this.props.comment;
		return (
			<div>
				<div>Commented by {user}</div>
				<button onClick={this.toggleOpen}>{this.getButtonText()} comment</button>
				{this.getCommentBody()}
			</div>
			);
	}

	getButtonText() {
		if (this.state.isOpen) {
			return 'Hide';
		}

		return 'Show';
	}

	getCommentBody() {
		const template = <div className="comment-body">
							<p>{this.props.comment.text}</p>
						 </div>;

		return this.state.isOpen && template;

	}

	toggleOpen = ev => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
}