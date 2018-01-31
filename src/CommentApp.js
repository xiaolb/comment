import React,{Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            comments:[]
        }
    }
    handleSubmitComment(comment) {
        this.state.comments.unshift(comment);

        this.setState({comment:this.state.comments})
    }
    render() {
        return (
            <div className='wrapper' >
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp