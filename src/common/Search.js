import TextField from "@material-ui/core/TextField";
import {useState} from 'react';

export const Search = ({onFilterChange}) => {
    const [filter, setFilter] = useState('')
    
    const handleOnChange = (event) => {
        setFilter(event.target.value);
        onFilterChange(event.target.value);
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
