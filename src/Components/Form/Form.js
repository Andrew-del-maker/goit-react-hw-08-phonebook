import { useDispatch } from 'react-redux';
import {  useState } from "react";
import { addContact } from '../../redux/phonebook/phonebook-operation'
import { TextField, Button } from '@material-ui/core';


function Form() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    

    const handleInputChange = (e) => {
        const { value, name } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value)
                break
            case 'number':
                setNumber(value)
                break
            default: return
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addContact(name,number));
        reset();
    }
    const reset = () => {
        setNumber('');
        setName('');
    }
    
    
        return (
            <form onSubmit={handleSubmit}>
          <TextField id="outlined-basic" label="Name" variant="outlined"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          value= {name}
          required
          onChange={handleInputChange}
          />
          <br/>
          <br/>
          <TextField id="outlined-basic" label="Number" variant="outlined"
            type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          value= {number}
          required
          onChange={handleInputChange}
          />
          <br/>
          <br/>
          <Button variant="outlined" type="submit" >Add contact</Button>
        </form>
        );
    

}


export default Form;