import { useEffect, useState } from "react";
import { Paper, Typography, Button, Avatar } from "@material-ui/core";
import firebase from "../fire";
import defaultAvatar from "../photos/profilePhotos/default.jpg";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles((theme) => ({
  medium: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

export const Search = ({ onFilterChange }) => {
  const currentUser = firebase.auth().currentUser.uid;
  const [allUsersInfo, setAllUsersInfo] = useState([]);
  const [state, setState] = useState("initial");
  const classes = useStyles();
  const [filter, setFilter] = useState("");



  let allUsersArray = [];

  useEffect(() => {
    firebase
      .firestore()
      .collection("Users")
      .onSnapshot((users) => {
        setState("loading");
        users.forEach((user) => {
          let userId = { id: user.id };
          let object = { ...user.data(), ...userId };
          allUsersArray = [...allUsersArray, object];
          setAllUsersInfo(allUsersArray);
          setState("loaded");
        });
      });
  }, []);


  const handleOnChange = (event) => {
    setFilter(event.target.value);
    onFilterChange(event.target.value);
  };

  const filterByName = ({name}) => {
    const lowerCaseFilter = filter.toLowerCase();
    return name.toLowerCase().includes(lowerCaseFilter)
  }

  return (
    <>
     <TextField
        name="search"
        type="search"
        id="search"
        variant="outlined"
        label="Search"
        value={filter}
        onChange={handleOnChange}
        fullWidth
      />
        <div>
        {filter.length === 0 ? (
            <div></div>
          ) : (        
          allUsersInfo
            .filter((user) => {
              return user.id !== currentUser;
            })
            .filter(filterByName) 
            .map((user) => {
              return (
                <Paper elevation={2}>
                  <Avatar
                    className={classes.medium}
                    src={user.avatarUrl ? user.avatarUrl : defaultAvatar}
                  />
                  <Typography>
                    {user.name}
                  </Typography>
                  <Button
                    color="primary"
                    style={{ backgroundColor: "#6C7ED6", fontSize: "10" }}
                  >
                    Message
                  </Button>
                </Paper>
              );
            }))}
        </div>
      
    </>
  );
};










//   useEffect(() => {
//     db.collection("Users")
//       .where("name", ">=", `${filter}`)
//       .where("name", "<=", `${filter}` + "\uf8ff")
//       .get()
//       .then((querySnapshot) => {
//         const searchResults = [];
//         querySnapshot.forEach((doc) => {
//           searchResults.push(doc.data());
//         });
//         setList(searchResults);
//       });
//   }, [filter]);


//   return (
//     <div>
//       
//       <div>
//         wyniki wyszukiwania:
//         <div>
//           {filter.length === 0 ? (
//             <div></div>
//           ) : (
//             <div>
//               {list.map((user, index) => {
//                 return (
//                   <li
//                     key={index}
//                     // onClick = {handleOnClick}
//                   >
//                     {user.name}
//                   </li>
//                 );
//               })}
//               {console.log(list)}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
