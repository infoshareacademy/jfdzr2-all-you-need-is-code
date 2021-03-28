import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import fire from "../fire";
import { db } from "../fire";

// https://www.youtube.com/watch?v=T-GfSkC1JpE
// https://clipversity.medium.com/integrating-react-select-and-firebase-firestore-for-text-searching-e1a3f805f7d7

export const Search = ({ onFilterChange }) => {
  const [filter, setFilter] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    db.collection("Users")
      .where("name", ">=", `${filter}`)
      .where("name", "<=", `${filter}` + "\uf8ff")
      .get()
      .then((querySnapshot) => {
        const searchResults = [];
        querySnapshot.forEach((doc) => {
          searchResults.push(doc.data());
        });
        setList(searchResults);
      });
  }, [filter])

  const handleOnChange = (event) => {
    setFilter(event.target.value);
    onFilterChange(event.target.value);
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={filter}
        onChange={handleOnChange}
        fullWidth
      />
<div>
        wyniki wyszukiwania:
        <div>
          {filter.length === 0 ? (
          <div></div>
          ) : ( 
          <div>
            {list.map((user, index) => {
            return <li key={index}>
              {user.name}
            </li>            
            })}          
            {console.log(list)
                                   
            }

            </div>)}
          </div>
      </div>
            
    </div>
  );
};
