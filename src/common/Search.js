import TextField from "@material-ui/core/TextField";
import {useState} from 'react';
import fire from "../fire"
import {db} from "../fire"

export const Search = ({onFilterChange}) => {
    const [filter, setFilter] = useState('')
    const [list, setList] = useState([])

    const handleUsers = () => {
      db.collection("Users").where("name", ">=", `${filter}`).where("name", "<=", `${filter}`+'\uf8ff')

      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) =>
        setList([...list, 
          { 
          id: doc.id,
          name: doc.data().name
        }
      ])
        // console.log(doc.id, "=>", doc.data().name)
        );
      });
     }
  
    const handleOnChange = (event) => {
        setFilter(event.target.value);
        onFilterChange(event.target.value);
        handleUsers();
        console.log(list)

      }

    
  return <div> 
      <TextField
      id="outlined-basic-email"
      label="Search"
      variant="outlined"
      value={filter}
      onChange={handleOnChange}
      fullWidth
    />
<div>
  {list[0].name}
</div>  
</div>
    };
