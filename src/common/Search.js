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
          searchResults.push(doc.data().name);

          // console.log(doc.id, "=>", doc.data().name)
          // setList([doc.data().name])
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
        id="outlined-basic-email"
        label="Search"
        variant="outlined"
        value={filter}
        onChange={handleOnChange}
        fullWidth
      />
      <div>
        wyniki wyszukiwania:
        <div>{list}</div>
      </div>
    </div>
  );
};
