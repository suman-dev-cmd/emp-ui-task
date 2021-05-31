import React from 'react'
import {AppBar, Grid, IconButton, InputBase, Toolbar,Badge} from '@material-ui/core'
import useStyles from './Styles'
import  NotificationsNoneIcon  from '@material-ui/icons/NotificationsNone';
import  ChatBubbleOutlineIcon  from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="sticky" className={classes.root}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item>
                        <InputBase
                        placeholder="Search Items"
                        className={classes.searchInputs}
                        startAdornment={<SearchIcon fontSize="small"/>}
                        />
                    </Grid>
                    <Grid item sm>
                       
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon fontSize="small"/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color="primary">
                                <ChatBubbleOutlineIcon fontSize="small"/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNewIcon fontSize="small"/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header
