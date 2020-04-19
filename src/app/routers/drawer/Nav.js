import React from "react";
import List from "@material-ui/core/List";
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AcUnitIcon from '@material-ui/icons/AcUnit';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import MailIcon from '@material-ui/icons/Mail';
import RouterApp from '../consts';
// import RouterConfig from '../RouterConfig'
// import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Nav = () => {
    return (
        <>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <Link to={RouterApp.features} key={text}>
                        <ListItem button>
                            <ListItemIcon>{index % 2 === 0 ? <AcUnitIcon/> : <MailIcon/>}</ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider/>
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <Link to={RouterApp.home} key={text}>
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <AcUnitIcon/> : <MailIcon/>}</ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    </Link>
                ))}
            </List>
            <List>
                <Link to={RouterApp.routine}>
                    <ListItem button>
                        <ListItemIcon>
                            <AccessAlarmsIcon />
                        </ListItemIcon>
                        <ListItemText>Routine</ListItemText>
                    </ListItem>
                </Link>
            </List>
        </>
    )
}

export default Nav;