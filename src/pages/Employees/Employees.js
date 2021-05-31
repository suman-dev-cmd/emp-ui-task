import React from 'react'
import PageHeader from '../../components/PageHeader'
import EmployeeForm from './EmployeeForm'
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import { Paper } from '@material-ui/core';
import useStyle from '../../components/Styles'
const Employees = () => {
    const classes = useStyle();
    return (
        <>
        <PageHeader 
        title="New Employee" 
        subTitle="Form Design with Validations" 
        icon={<PeopleAltOutlinedIcon fontSize="large"/>}/>
        <Paper className={classes.formpageContent}>
            <EmployeeForm /> 
        </Paper>
        </>
    )
}

export default Employees
