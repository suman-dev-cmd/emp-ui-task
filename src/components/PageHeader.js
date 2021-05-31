import { Paper,Card, Typography } from '@material-ui/core'
import React from 'react'
import useStyle from './Styles'
const PageHeader = (props) => {
    const classes = useStyle();
    const {title,subTitle,icon} = props;
    return (
        <Paper elevation={0} square className={classes.pageRoot}>
            <div className={classes.pageHeader}> 
                <Card className={classes.pageIcon}>
                    {icon}
                </Card>
                <div className={classes.pageTitle}>
                    <Typography
                    variant="h6"
                    component="div"
                    >{title}</Typography>
                    <Typography
                    variant="subtitle2"
                    component="div"
                    >{subTitle}</Typography>
                </div>
            </div>
        </Paper>
    )
}

export default PageHeader
