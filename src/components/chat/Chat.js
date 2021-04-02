import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";
import CssBaseline from '@material-ui/core/CssBaseline';
import db from "../../fire";
import fire from "../../fire";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useState, useRef, useEffect } from "react";
import "../../styles/Chat.css";
import Button from "@material-ui/core/Button";
import { Search } from "../../common/Search"
import { SettingsInputAntennaTwoTone } from "@material-ui/icons";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Tooltip from '@material-ui/core/Tooltip';



const auth = fire.auth();

const makeMsgId = (userUid, chatUserUid) => [userUid, chatUserUid].sort().join('-')

function Chat() {
  const scroll = useRef();
  const currentUser = auth.currentUser.uid;
  const [chatUser, setChatUser] = useState("");
  const msgId = makeMsgId(currentUser, chatUser)
  const [formValue, setFormValue] = useState("");
  const messagesRef = fire.firestore().collection("Messages").doc(msgId).collection(msgId);
  const query = messagesRef.orderBy("createdAt").limit(250);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [chatList, setChatList] = useState([])


  const [allChatUsersInfo, setAllChatUsersInfo] = useState([]);



  // const [filter, setFilter] = useState("")

  const activateChat = (user) => {
    setChatUser(user)
    const msgId = makeMsgId(currentUser, user)
    fire.firestore().collection("Messages").doc(msgId).set({})
  }

  let allChatUsersArray = [];
  useEffect(() => {
    fire
      .firestore()
      .collection("Users")
      .onSnapshot((users) => {
        users.forEach((user) => {
          let userId = { id: user.id };
          let object = { ...user.data(), ...userId };
          allChatUsersArray = [...allChatUsersArray, object];
          setAllChatUsersInfo(allChatUsersArray);

        });
      });
  }, [chatList]);

  const filterUser = (user) => {
    const userName = allChatUsersInfo.find(item => item.id === user)?.name
    return userName
  }

  const filterAvatar = (user) => {
    const userAvatar = allChatUsersInfo.find(item => item.id === user)?.avatarUrl
    return userAvatar
  }

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: Date().toLocaleString(),
      uid,
      photoURL: filterAvatar(uid),
    });
    setFormValue("");
    scroll.current.scrollIntoView({ bahavior: "smooth" });
  };

  // const handleOnFilterChange = (filterText) => {
  //   setFilter(filterText);
  // }

  useEffect(() => {
    fire
      .firestore()
      .collection("Messages")
      .onSnapshot((msg) => {
        let allMsgArray = [];
        msg.forEach((userMsg) => {
          if (userMsg.id.includes(auth.currentUser.uid)) {
            let userMsgId = userMsg.id.replace(auth.currentUser.uid, "");
            allMsgArray = [...allMsgArray, userMsgId];
          }
        });
        setChatList(allMsgArray);
      });
  }, []);

  const hanldeOnDelete = (user, currentUser) => {
    const collection = currentUser + user
    console.log(collection)
    fire.firestore().collection("Messages").doc(collection).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    })

  }

  return (
    <>
      <CssBaseline />
      <Grid container className="chat-section">
        <Grid item xs={3} component={Paper} className="border-right500 border-top500">
          <List>
            <ListItem button key="Chat">

              <ListItemText primary="Chat"></ListItemText>
            </ListItem>
          </List>

          <Divider />
          <Grid item xs={12} style={{ padding: "10px" }}>

            <Search
            />

          </Grid>
          <Divider />
          {chatList.map((user) => {
            return (
              <ListItem
                button
                key={user}
                onClick={(e) => { activateChat(user) }}
              >
                <ListItemIcon>
                  <Avatar
                    src={filterAvatar(user)}
                  />
                </ListItemIcon>
                <ListItemText>{filterUser(user)}
                </ListItemText>
                <Tooltip title={"DELETE CHAT"}>
                  <DeleteOutlineIcon color="action" onClick={(e) => { hanldeOnDelete(user, currentUser) }} /></Tooltip>
              </ListItem>
            )
          }
          )}

        </Grid>

        <Grid item xs={9} component={Paper} className="border-top500">
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
                  id="outlined-basic-email"
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

  function ChatMessage(props) {
    const { text, uid, photoURL, createdAt } = props.message;
    const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
    return (
      <>
        <div className={`message ${messageClass}`}>
          <img
            className="chat-img"
          // src={filterAvatar(uid)
          // photoURL || "https://material-ui.com/static/images/avatar/2.jpg"
          // }
          />
          <p className="chat-text">{text}</p>
          {/* <p className="date">{createdAt}</p> */}
        </div>
      </>
    );
  }
}

export default Chat;
