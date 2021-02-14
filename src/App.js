import React from 'react';
import './App.css';

function SingleTweet(props){
    return (
        <div id = "tweet">
            <div> {props.writer}</div>
            <div> {props.date}</div>
            <div> {props.content}</div>
        </div>
    )
}

class Twittler extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tweets:[
            {
                uuid : 1,
                writer : "김코딩",
                date : "2020-10-10",
                content : "안녕 리액트"
            },
            {
                uuid : 2,
                writer : "박해커",
                date : "2019-10-03",
                content : "좋네 좋아"
            }
            ]
        }
        this.handleClick = this.handleClick.bind(this);
    }
    date() {
        let date = new Date()
        let yy = date.getFullYear();
    
        let mm = date.getMonth() + 1;
        if (mm < 10) {
          mm = '0' + mm;
        }
    
        let dd = date.getDate();
        if (dd < 10) {
          dd = '0' + dd;
        }
    
        return `${yy}-${mm}-${dd}`;
      
      }
    handleClick() {
        let newTweet = {
            uuid: this.state.tweets.length+1,
            writer : "호노리",
            date : this.date(),
            content : document.querySelector('#new-tweet-content').value
        }
        this.setState({
            tweets : this.state.tweets.concat(newTweet)
        })
        this.clearForm()
    }
    clearForm() {
        document.querySelector('#new-tweet-content').value = ''
    }
    render(){
        return (
            <div id = "root">
                <div>
                    <div>작성자 : 호놀킴</div>
                    <div id = "new-tweet">
                        <textarea id = "new-tweet-content"></textarea>
                        <button id = "submit-new-tweet" onClick = {this.handleClick}>새 글 쓰기</button>
                    </div>
                    <ul id = "tweets">
                        {this.state.tweets.map(element => {
                            return (
                            <SingleTweet key = {element.uuid} writer = {element.writer} date = {element.date} content = {element.content}></SingleTweet>    
                            )                       
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}
export default Twittler;