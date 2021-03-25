import TextField from "@material-ui/core/TextField";
import {useState} from 'react';
import fire from "../fire"
import {db} from "../fire"

export const Search = ({onFilterChange}) => {
    const [filter, setFilter] = useState('')
    
    const handleUsers = () => {
      db.collection("Users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) =>
        console.log(doc.id, "=>", doc.data())
        );
      });
    }
  
    const handleOnChange = (event) => {
        setFilter(event.target.value);
        onFilterChange(event.target.value);
        handleUsers();
      }

    
  return <TextField
      id="outlined-basic-email"
      label="Search"
      variant="outlined"
      value={filter}
      onChange={handleOnChange}
      fullWidth
    />
    };
