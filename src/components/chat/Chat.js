import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";
import fire from "../../fire";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useState, useRef, useEffect } from "react";
import "../../styles/Chat.css";
import { Search } from "../../common/Search";
import logo from "../../logo/sayIT.png";
import defaultAvatar from "../../photos/profilePhotos/default.jpg";
import { Link } from "react-router-dom";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const auth = fire.auth();
const makeMsgId = (userUid, chatUserUid) =>
  [userUid, chatUserUid].sort().join("-");

function ChatMessage(props) {
  const { text, uid, photoURL, createdAtString } = props.message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  // const formatedDate = Date(createdAt).toString().substr(4, 20);
  return (
    <>
      <div className={`message ${messageClass}`}>
        <Link to={`/users-page/${uid}`}>
          <Avatar
            onClick={(e) => console.log(uid)}
            src={photoURL || defaultAvatar}
          />
        </Link>
        <div>
          <p className="chat-text">{text}</p>
          <div className="date">{createdAtString}</div>
        </div>
      </div>
    </>
  );
}

function Chat() {
  const scroll = useRef();
  const currentUser = auth.currentUser.uid;
  const [chatUser, setChatUser] = useState("");
  const msgId = makeMsgId(currentUser, chatUser);
  const [formValue, setFormValue] = useState("");
  const messagesRef = fire
    .firestore()
    .collection("Messages")
    .doc(msgId)
    .collection(msgId);
  const query = messagesRef.orderBy("createdAt").limit(250);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [chatList, setChatList] = useState([]);
  const [activeChatUser, setActiveChatUser] = useState("");
  const [allChatUsersInfo, setAllChatUsersInfo] = useState([]);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prevChatList = usePrevious(chatList);

  const activateChat = (user) => {
    setChatUser(user);
    const msgId = makeMsgId(currentUser, user);
    fire.firestore().collection("Messages").doc(msgId).set({});
  };

  useEffect(() => {
    const unsubscribe = fire
      .firestore()
      .collection("Users")
      .onSnapshot((users) => {
        let allChatUsersArray = [];
        users.forEach((user) => {
          let userId = { id: user.id };
          let object = { ...user.data(), ...userId };
          allChatUsersArray = [...allChatUsersArray, object];
          setAllChatUsersInfo(allChatUsersArray);
        });
        const newUser = chatList.filter((i) => !prevChatList.includes(i));
        setActiveChatUser(newUser);
        console.log(activeChatUser);
        return () => {
          if (unsubscribe) {
            unsubscribe();
          }
        };
      });
  }, [chatList]);

  const filterUser = (user) => {
    const userName = allChatUsersInfo.find((item) => item.id === user)?.name;
    return userName;
  };

  const filterAvatar = (user) => {
    const userAvatar = allChatUsersInfo.find((item) => item.id === user)
      ?.avatarUrl;
    return userAvatar;
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: Date.now(),
      createdAtString: Date(Date.now()).toString().substr(4, 20),
      uid,
      photoURL: filterAvatar(uid),
    });
    setFormValue("");
  };

  useEffect(() => {
    fire
      .firestore()
      .collection("Messages")
      .onSnapshot((msg) => {
        let allMsgArray = [];
        msg.forEach((userMsg) => {
          if (userMsg.id.includes(auth.currentUser.uid)) {
            let userMsgId = userMsg.id
              .replace(auth.currentUser.uid, "")
              .replace("-", "");
            allMsgArray.push(userMsgId);
          }
        });
        setChatList(allMsgArray);
      });
  }, []);

  useEffect(() => {
    scroll.current.scrollIntoView({ bahavior: "smooth" });
  }, [messages]);

  const hanldeOnDelete = (user, currentUser) => {
    const collection = [user, currentUser].sort().join("-");
    let filteredChatListArray = chatList.filter((item) => item !== user);
    setChatList(filteredChatListArray);
    fire.firestore().collection("Messages").doc(collection).delete();
  };

  useEffect(() => {
    scroll.current.scrollIntoView({ bahavior: "smooth" });
  }, [messages]);

  const activeMsg = (user) =>
    activeChatUser === user ? "chat-active" : "chat-nonactive";

  return (
    <>
      <Grid container className="chat-section">
        <Grid
          item
          xs={3}
          component={Paper}
          className="border-right500 border-top500"
        >
          <div className="logo-cointainer">
            <img className="logo" src={logo} />
          </div>
          <Divider />
          <Grid item xs={12} style={{ padding: "10px" }}>
            <Search onResultSelect={activateChat} />
          </Grid>
          <Divider />
          {chatList.map((user) => {
            return (
              <div className={activeMsg(user)}>
                <ListItem
                  style={{ textOverflow: "ellipsis", overflow: "hidden" }}
                  button
                  key={user}
                >
                  <ListItemIcon>
                    <Avatar src={filterAvatar(user)} />
                  </ListItemIcon>
                  <ListItemText
                    onClick={(e) => {
                      activateChat(user);
                      setActiveChatUser(user);
                    }}
                  >
                    {filterUser(user)}
                  </ListItemText>
                  <HighlightOffIcon
                    onClick={(e) => hanldeOnDelete(user, currentUser)}
                  />
                </ListItem>
              </div>
            );
          })}
        </Grid>

        <Grid item xs={9} component={Paper} className="border-top500">
          <p></p>
          <List className="message-area">
            <ListItem key="1">
              <section className="chat-section">
                <main className="chat-main">
                  {messages &&
                    messages.map((msg) => (
                      <ChatMessage key={msg.id} message={msg} />
                    ))}
                  <span className="chat-span" ref={scroll}></span>
                </main>
              </section>
            </ListItem>
          </List>

          <Divider />

          <Grid container style={{ padding: "20px" }}>
            <Grid item xs={11}>
              <form onSubmit={sendMessage}>
                <TextField
                  label="Your message"
                  fullWidth
                  value={formValue}
                  onChange={(e) => setFormValue(e.target.value)}
                />
              </form>
            </Grid>

            <Grid xs={1} align="right">
              <Fab color="secondary" aria-label="add" onClick={sendMessage}>
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Chat;
