import React,{useState} from 'react'
import useStyle from './Styles';
export const useForm = (initialValues) => {
   const [values,setValues] = useState(initialValues);
   const handleInputChange =e=>{
    // e.preventDefault();
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        }     
        )
    }
   return{
       values,
       setValues,
       handleInputChange
   }
}

export const Form=(props)=>{
    const classes = useStyle();
    return(
        <form className={classes.formRoot} autoComplete="off">
            {props.children}
        </form>
    )
}
