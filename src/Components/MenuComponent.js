import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import './../App.css';


const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    // minWidth: 120,
    color: 'lightBlue',
    position: 'relative',
    top: '30%',
    right: '0%',
    // boxSizing: "border-box"
    display: 'flex',
    justifyContent: 'space-evenly',
    

 
  },
  selectEmpty: {
    // marginTop: theme.spacing(2),
    color: 'Blue' ,
    fontSize: 'small'
    // position: 'relative',
    // bottom: 0,
    // backgroundColor: 'black',
  },
}));

export default function MenuComponent() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className="MenuContainer">

      <FormControl className="formControl">
        <NativeSelect
          value={state.age}
          onChange={handleChange}
          name="age"
          className="selectEmpty"
          inputProps={{ 'aria-label': 'age' }}
        >
          <option value="">Company</option>
          <option value="">Company Profile</option>
          <option value="">Over the Years</option>
          <option value="">Our Core Values</option>
          <option value="">Awards</option>
        </NativeSelect>
        {/* <FormHelperText>With visually hidden label</FormHelperText> */}
      </FormControl>

      <FormControl className="formControl">
        <NativeSelect
          value={state.age}
          onChange={handleChange}
          name="age"
          className="selectEmpty"
          inputProps={{ 'aria-label': 'age' }}
        >
          <option value="">Services</option>
          <option value="">Products</option>
          <option value="">Packaging</option>
        </NativeSelect>
        {/* <FormHelperText>With visually hidden label</FormHelperText> */}
      </FormControl>

      <FormControl className="formControl">
        <NativeSelect
          value={state.age}
          onChange={handleChange}
          name="age"
          className="selectEmpty"
          inputProps={{ 'aria-label': 'age' }}
        >
          <option value="">Careers</option>
          <option value="">Our Culture</option>
          <option value="">Training </option>
          <option value="">Join Us</option>
        </NativeSelect>
        {/* <FormHelperText>With visually hidden label</FormHelperText> */}
      </FormControl>

      <FormControl className="formControl">
        <NativeSelect
          value={state.age}
          onChange={handleChange}
          name="age"
          className="selectEmpty"
          inputProps={{ 'aria-label': 'age' }}
        >
          <option value="">Contact</option>
          <option value="">Email</option>
          <option value="">Telephone</option>
          <option value="">Facebook</option>
        </NativeSelect>
        {/* <FormHelperText>With visually hidden label</FormHelperText> */}
      </FormControl>
     
    </div>
  );
}
