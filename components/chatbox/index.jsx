import React, { Component } from 'react';
import firebase from '../../src/js/firebase';

export default class Chatbox extends Component {
  constructor() {
    super();
    this.state = {
      chats: []
    };

    // Bind methods
    this.onMessageType = this.onMessageType.bind(this);
  }

  componentDidMount() {
    const chatsRef = firebase.database().ref('messages');
    chatsRef.on('value', snapshot => {
      this.setState({
        message: {
          text: ''
        },
        chats: snapshot.val()
      });
    });
  }

  onMessageType(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="chatbox" id="chatbox">
        <div className="chatbox-topbar">
          <button className="chatbox-topbar-button button-red" />
          <button className="chatbox-topbar-button button-yellow" />
          <button className="chatbox-topbar-button button-green" />
        </div>
        <div className="chatbox-body">
          <ul className="chat-list">
            {this.state.chats.map((chat, index) => {
              return (
                <li className="chat-item" key={index}>
                  <span
                    className="user-name"
                    style={{
                      color: chat.color
                    }}
                  >
                    {chat.name}:{' '}
                  </span>{' '}
                  <span className="message">{chat.message}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="chatbox-input">
          <input
            type="text"
            placeholder="Type your message here..."
            onChange={this.onMessageType}
            value={this.state.message.text}
          />
        </div>
      </div>
    );
  }
}
