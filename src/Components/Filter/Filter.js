import { useDispatch, useSelector } from 'react-redux';
import {changeFilter} from '../../redux/phonebook/phonebook-action'
import { TextField } from '@material-ui/core';


const Filter = () => {
    const value = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();


    return(
    <label>
        <br />
          <TextField id="outlined-basic" label="Find contacts by name " variant="outlined" type='text' value={value} onChange={(e)=>dispatch(changeFilter(e.target.value))}></TextField>
    </label>
)};


export default Filter;