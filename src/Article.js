import React, {Component} from 'react';
import CommentsList from './CommentsList';

export default class Article extends Component {
/*
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }
*/
    state = {
        isOpen: false,
        foo: 'bar'
    }

    render() {
        const {article} = this.props;
        return (
            <section>
                <h2 onClick={this.toggleOpen}>
                    {article.title}
                </h2>
                {this.getBody()}
            </section>
        );
    }

    getComment() {
        const {comments} = this.props.article;
        //Я б эту проверку спрятал в CommentList
        if (comments) {
            return <CommentsList comments={comments}/>;
        }
    }

    getBody() {
        return this.state.isOpen && <div>{this.props.article.text} <hr></hr> {this.getComment()}</div>;
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
