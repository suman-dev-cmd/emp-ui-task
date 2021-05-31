import {makeStyles} from '@material-ui/core/styles';
 const useStyles = makeStyles((theme)=>({
    sideMenu:{
        display:'flex',
        flexDirection:'column',
        position:'absolute',
        left: '0px',
        width:'200px',
        height:'100%',
        backgroundColor:'#253053'
    },
    headerItem1:{
        border:'1px solid #fff'
    },
    headerItem2:{
        border:'1px solid #000'
    },
    appMain:{
        paddingLeft:'200px',
        width:'100%'
    },
    root:{
        backgroundColor:'white !important',
        transform:'translateZ(0)'
    },
    searchInputs:{
        opacity:'0.6',
        padding:'0px 8px',
        fontSize:'0.8rem',
        '&:hover':{
            backgroundColor:'#f2f2f2'
        },
        '& .MuiSvgIcon-root':{
            marginRight:'8px'
        }
    },
    pageRoot:{
        backgroundColor:'#fdfdff'
    },
    pageHeader:{
        padding:theme.spacing(4),
        display:'flex',
        marginButtom:theme.spacing(2)
    },
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#3c44b1'
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
        }
    },
    formRoot:{
        '& .MuiFormControl-root':{
            width:'80%',
            margin:theme.spacing(1)
        }
    },
    formpageContent:{
        margin: theme.spacing(5),
        padding:theme.spacing(3)
    },
    buttonRoot:{
        marginLeft: "9px"
    },
    buttonLabel:{
        textTransform:'none'
    }

 }))
 export default useStyles;