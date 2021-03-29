import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import { db } from "../fire";
import { AllUsersInfo} from "../components/profile-page/AllUsersInfo"


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
  }, [filter]);

  const handleOnChange = (event) => {
    setFilter(event.target.value);
    onFilterChange(event.target.value);
  };

  return (
    <div>
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
        wyniki wyszukiwania:
        <div>
          {filter.length === 0 ? (
            <div></div>
          ) : (
            <div>
              {list.map((user, index) => {
                return (
                  <li
                    key={index}
                    // onClick = {handleOnClick}
                  >
                    {user.name}
                  </li>
                );
              })}
              {console.log(list)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
