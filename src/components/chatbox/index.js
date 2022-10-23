import React, { Component } from "react";
import {
  uniqueNamesGenerator,
  adjectives,
  animals,
} from "unique-names-generator";
import randomColor from "randomcolor";
import firebase from "../../js/firebase";
import Scrollbar from "react-scrollbars-custom";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

class Chatbox extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      message: {
        message: "",
        name: "",
        color: "",
        time: null,
      },
      chats: [],
      submitDisabled: false,
      database: firebase.database(),
    };

    // Bind methods
    this.onMessageType = this.onMessageType.bind(this);
    this.onMessageSubmit = this.onMessageSubmit.bind(this);
  }

  // componentWillMount() {
  //   const chatsRef = this.state.database.ref("messages");
  //   chatsRef.on("value", (snapshot) => {
  //     this.setState({
  //       chats: Object.keys(snapshot.val()).map((key) => {
  //         return snapshot.val()[key];
  //       }),
  //     });
  //   });
  // }

  componentDidMount() {
    const chatsRef = this.state.database.ref("messages");
    chatsRef.on("value", (snapshot) => {
      this.setState({
        chats: Object.keys(snapshot.val()).map((key) => {
          return snapshot.val()[key];
        }),
      });
    });

    // Set color and name from cookies
    const { cookies } = this.props;

    // Set chat name
    cookies.get("chat_name") ||
      cookies.set(
        "chat_name",
        uniqueNamesGenerator({
          dictionaries: [adjectives, animals],
          separator: "-",
          length: 2,
        }),
        {
          path: "/",
        }
      );

    // Set chat color
    cookies.get("chat_color") ||
      cookies.set("chat_color", randomColor({ luminosity: "bright" }), {
        path: "/",
      });

    // Set active message user name
    this.setState(({ message }) => {
      return {
        message: Object.assign(message, {
          color: cookies.get("chat_color"),
        }),
      };
    });

    // Set active message color
    this.setState(({ message }) => {
      return {
        message: Object.assign(message, {
          name: cookies.get("chat_name"),
        }),
      };
    });

    // Scroll the chatbox to bottom
    this.scrollToBottom();
  }

  componentDidUpdate() {
    // Scroll the chatbox to bottom
    this.scrollToBottom();
  }

  // Updates the message from state on type
  onMessageType(e) {
    e.persist();
    this.setState(({ message }) => {
      return {
        message: Object.assign(message, { message: e.target.value }),
      };
    });
  }

  // Pushes the news chat message to firebase store
  onMessageSubmit(e) {
    if (e.charCode === 13) {
      if (!this.submitDisabled) {
        this.submitDisabled = true;
        // Set current time
        this.setState(({ message }) => {
          return {
            message: Object.assign(message, {
              time: Date.now(),
            }),
          };
        });
        const chatsRef = this.state.database.ref("messages");
        if (
          this.state.message.message !== "" ||
          this.state.message.message.trim() !== ""
        ) {
          setTimeout(() => {
            chatsRef.push(this.state.message);
            this.setState(({ message }) => {
              return {
                message: Object.assign(message, { message: "" }),
              };
            });
            this.submitDisabled = false;
          }, 1500);
        } else {
          this.submitDisabled = false;
        }
      }
    }
  }

  // Scroll Bottom
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <div className="chatbox" id="chatbox">
        <div className="chatbox-topbar">
          <button className="chatbox-topbar-button button-red" />
          <button className="chatbox-topbar-button button-yellow" />
          <button className="chatbox-topbar-button button-green" />
        </div>
        <Scrollbar
          className="chatbox-body"
          style={{ width: "31.1rem", height: "50vh" }}
        >
          <ul className="chat-list">
            {this.state.chats.map((chat, index) => {
              return (
                <li className="chat-item" key={index}>
                  <span
                    className="user-name"
                    style={{
                      color: chat.color,
                    }}
                  >
                    {chat.name}:{" "}
                  </span>{" "}
                  <span className="message">{chat.message}</span>
                </li>
              );
            })}
            <li
              style={{ float: "left", clear: "both" }}
              ref={(el) => {
                this.messagesEnd = el;
              }}
            ></li>
          </ul>
        </Scrollbar>
        <div className="chatbox-input">
          <input
            type="text"
            placeholder="Type your message here..."
            onChange={this.onMessageType}
            onKeyPress={this.onMessageSubmit}
            value={this.state.message.message}
          />
        </div>
      </div>
    );
  }
}

export default withCookies(Chatbox);
