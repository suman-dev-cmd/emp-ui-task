import DateFnsUtils from '@date-io/date-fns';
import { FormControl, FormControlLabel, FormLabel, Grid,RadioGroup,Radio,MenuItem,InputLabel,Select,TextField, Checkbox, Button } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React,{useState,useEffect} from 'react';
import Input from '../../components/contorls/Input';
import useStyle from '../../components/Styles';
import {useForm,Form} from '../../components/useForm';

const initialValues ={
    id:0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'male',
    departmentId:'',
    haireDate:new Date(),
    isPermanent:false
}
const EmployeeForm = () => {
    const classes = useStyle();
    const {values,setValues,handleInputChange} = useForm(initialValues);
    const convertToDefEventPara = (name,value) =>({
        target:{
            name,value
        }
    })

    return (
        <>
          <Form>
              <Grid container>
                <Grid item xs={6}>
                    <Input 
                     name='fullName'
                     label='Full Name'
                     value={values.name}
                     onChange={handleInputChange}
                    />
                    <Input
                    label="Email"
                    name="email"
                    value={values.email}
                    onChange={handleInputChange}
                    />
                    <Input
                    label="Moblie"
                    name="mobile"
                    value={values.mobile}
                    onChange={handleInputChange}
                    />
                    <Input
                    label="City"
                    name="city"
                    value={values.city}
                    onChange={handleInputChange}
                    />
                   
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup row={true} name="gender" values={values.gender} onChange={handleInputChange}>
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="others" control={<Radio />} label="Others" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl variant="outlined">
                        <InputLabel>Department</InputLabel>
                        <Select
                        label="Department"
                        name="departmentId"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        >
                            <MenuItem value="">Select Department</MenuItem>
                            <MenuItem value="hr">HR Department</MenuItem>
                            <MenuItem value="account">Account Department</MenuItem>
                            <MenuItem value="developer">Developer Department</MenuItem>
                        </Select>
                    </FormControl>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker 
                        disableToolbar 
                        variant="inline" 
                        inputVariant="outlined"
                        label="haireDate"
                        format="MM/dd/yyyy"
                        name="haireDate"
                        value={values.haireDate}
                        onChange={date=>handleInputChange(convertToDefEventPara('haireDate',date))}
                        >

                        </KeyboardDatePicker>
                   </MuiPickersUtilsProvider>
                    <FormControl>
                        <FormControlLabel control={<Checkbox name="isPermanent" color="primary" checked={values.isPermanent} onChange={e=>handleInputChange(convertToDefEventPara('isPermanent',e.target.checked))}/>} label="Permament Employee"/>
                    </FormControl>
                    <Button variant="contained" size="large" color="primary" >Submit</Button>
                    <Button variant="contained" size="large" color="default" className={classes.buttonRoot}>Reset</Button>
                </Grid>
                

              </Grid>     
          </Form>  
        </>
    )
}

export default EmployeeForm
