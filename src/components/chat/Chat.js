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

const auth = fire.auth();


function Chat() {
  const scroll = useRef();
  const currentUser = auth.currentUser.uid;
  const [chatUser, setChatUser] = useState("test")
  const msgArray = [currentUser.substring(0,5), chatUser.substring(0,5)];
  const sortedMsgArray = msgArray.sort(); 
  const msgId = sortedMsgArray.toString();  
  const [formValue, setFormValue] = useState("");
  const messagesRef = fire.firestore().collection("Messages").doc(msgId).collection(msgId);
  const query = messagesRef.orderBy("createdAt").limit(250);
  const [messages] = useCollectionData(query, { idField: "id" });

  function getUserID(id) {
      setChatUser(id)
  }

  useEffect(() => {
    setChatUser(chatUser)
  }, [chatUser])

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      // createdAt: fire.firestore.FieldValue.serverTimestamp(),
      createdAt: Date().toLocaleString(),
      uid,
      photoURL,
    });
    setFormValue("");
    // setChatUser("");
    scroll.current.scrollIntoView({ bahavior: "smooth" });
  };


  return (
    <>
    <CssBaseline />
      <Grid container className="chat-section">
        <Grid item xs={3} component={Paper} className="border-right500 border-top500">
          <List>
            <ListItem button key="Auth">
              <ListItemIcon>
                <Avatar
                  alt="Auth"
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Auth"></ListItemText>
            </ListItem>
          </List>
          <Divider />
          <Grid item xs={12} style={{ padding: "10px" }}>
            <TextField
              id="outlined-basic-email"
              label="Search"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Divider />
          <List>
            <ListItem 
            button 
            key="test1"
            chatUser="jmKir10TYzczaR44P5cl69B3l5Z2"
            onClick={(e) => getUserID("jmKir10TYzczaR44P5cl69B3l5Z2")}
            >
              <ListItemIcon>
                <Avatar
                  alt="User1"
                  src="https://material-ui.com/static/images/avatar/3.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Test1">Test2</ListItemText>
            </ListItem>
            <ListItem
            button
            key="test2"
            id="Ji2X9LS1gQQoGWSsx2YYBfNLbHA3"
            onClick={(e) => getUserID("Ji2X9LS1gQQoGWSsx2YYBfNLbHA3")}
            >
              <ListItemIcon>
                <Avatar
                  alt="User2"
                  src="https://material-ui.com/static/images/avatar/2.jpg"
                />
              </ListItemIcon>
              <ListItemText primary="Test2">Test2</ListItemText>
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={9}  component={Paper} className="border-top500">
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
              <Fab color="secondary" aria-label="add">
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
            src={
              photoURL || "https://material-ui.com/static/images/avatar/2.jpg"
            }
          />
          <p className="chat-text">{text}</p>
          {/* <p className="date">{createdAt}</p> */}
        </div>
      </>
    );
  }
}

export default Chat;
