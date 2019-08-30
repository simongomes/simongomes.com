import React, { Component } from 'react';

export default class Chatbox extends Component {
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
            <li className="chat-item">
              <span className="user-name">simon-gomes: </span>{' '}
              <span className="message">Well, hi there!</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
