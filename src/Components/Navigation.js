import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../img/logo-white.png'

import './Navigation.css'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="navbar">
            <img src={ Logo } className="logo-navbar" alt="Logo"/>
        </Toolbar>
      </AppBar>
    </div>
  );
}