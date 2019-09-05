import React, { Component } from 'react';
import { uniqueNamesGenerator } from 'unique-names-generator';
import randomColor from 'randomcolor';
import firebase from '../../src/js/firebase';

export default class Chatbox extends Component {
  constructor() {
    super();
    this.state = {
      message: {
        message: '',
        name: '',
        color: '',
        time: Date.now()
      },
      chats: []
    };

    // Bind methods
    this.onMessageType = this.onMessageType.bind(this);
    this.onMessageSubmit = this.onMessageSubmit.bind(this);
  }

  componentDidMount() {
    const chatsRef = firebase.database().ref('messages');
    chatsRef.on('value', snapshot => {
      this.setState({
        chats: snapshot.val()
      });
    });

    // Set active message user name
    this.setState(({ message }) => {
      return {
        message: Object.assign(message, {
          color: uniqueNamesGenerator({ separator: '-', length: 2 })
        })
      };
    });

    // Set active message color
    this.setState(({ message }) => {
      return {
        message: Object.assign(message, {
          name: randomColor({ luminosity: 'bright' })
        })
      };
    });
  }

  // Updates the message from state on type
  onMessageType(e) {
    e.persist();
    this.setState(({ message }) => {
      return { message: Object.assign(message, { message: e.target.value }) };
    });
  }

  // Pushes the news chat message to firebase store
  onMessageSubmit(e) {
    if (e.charCode === 13) {
      console.log(this.state.message);
    }
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
            onKeyPress={this.onMessageSubmit}
            value={this.state.message.text}
          />
        </div>
      </div>
    );
  }
}
