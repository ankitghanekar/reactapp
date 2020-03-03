import React from 'react';
import Sidebar from './components/Sidebar/Sidebar'
import MainContent from './components/MainContent/MainContent'

import Header from './components/Header'
import './App.css';
import {Container, Col, Row} from 'react-bootstrap'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
const drawerWidth = 350;
// import AddTodo from '../containers/AddTodo'
function App(props) {
  // const [mobileOpen, setMobileOpen] = React.useState(false);
  //
  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };

  // const drawer = (
  //   <div>
  //     <div />
  //     <Divider />
  //     <List>
  //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //   </div>
  // );
  console.log(props)
  return (
    <div className="App">
    {/*<AppBar position="fixed">
       <Toolbar>
         <IconButton
           color="inherit"
           aria-label="open drawer"
           edge="start"
           onClick={handleDrawerToggle}

         >
           <MenuIcon />
         </IconButton>
         <Typography variant="h6" noWrap>
           Responsive drawer
         </Typography>
       </Toolbar>
     </AppBar> */}

<Header />

      <Sidebar />
    { /* */}
      <div>
{props.children}

      </div>


    </div>
  );
}

export default App;
