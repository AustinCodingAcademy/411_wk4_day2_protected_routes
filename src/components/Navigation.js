import React, { useState } from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Grid,
    Drawer,
    Button,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import SettingsIcon from '@material-ui/icons/Settings'
import colorArray from '../colors'
import PaletteIcon from '@material-ui/icons/Palette'

const Navigation = (props) => {
    let [palValue, setPalValue] = useState(false)
    let [settingValue, setSettingValue] = useState(false)

    const colorText = ['#fff', '#000']

    const toggleDisplay = (bool, icon) => (event) => {
        if (icon === 'pallete') {
            if (
                event.type === 'keydown' &&
                (event.key === 'Tab' || event.key === 'Shift')
            ) {
                return
            }
            setPalValue((palValue = bool))
        }

        if (icon === 'settings') {
            if (
                event.type === 'keydown' &&
                (event.key === 'Tab' || event.key === 'Shift')
            ) {
                return
            }
            setSettingValue((settingValue = bool))
        }
    }

    const captureEvent = (event) => {
        let capture = event.target.value
        console.log(event.target)
        console.log(capture)
    }

    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: '1' }}>
                    FakeCars.com
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li
                        className="nav-list-item"
                        onClick={() => {
                            document.cookie = 'loggedIn='
                            window.location.replace('/login')
                        }}
                    >
                        Logout
                    </li>
                    <li>
                        <IconButton
                            onClick={props.darkMode}
                            color="inherit"
                            className="nav-list-item"
                        >
                            <Brightness4Icon color="inherit" />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton
                            onClick={toggleDisplay(true, 'settings')}
                            color="inherit"
                            className="nav-list-item"
                        >
                            <SettingsIcon color="inherit" />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton
                            onClick={toggleDisplay(true, 'pallete')}
                            color="inherit"
                            className="nav-list-item"
                        >
                            <PaletteIcon color="inherit" />
                        </IconButton>
                    </li>
                </ul>
            </Toolbar>

            {/* setting drawer starts here */}
            <Drawer
                open={settingValue}
                onClose={toggleDisplay(false, 'settings')}
                anchor={'right'}
            >
                <Grid
                    container
                    spacing={2}
                    direction="column"
                    justify="space-around"
                    alignItems="baseline"
                >
                    <Grid item>
                        <Button></Button>
                    </Grid>
                </Grid>
            </Drawer>

            {/* pallete drawer starts here */}
            <Drawer
                open={palValue}
                onClose={toggleDisplay(false, 'pallete')}
                anchor={'bottom'}
            >
                <Grid container direction="row" alignItems="baseline">
                    <Grid item>
                        <Typography
                            variant="h4"
                            style={{
                                paddingTop: 20,
                                paddingBottom: 15,
                                paddingLeft: 20,
                            }}
                        >
                            Change Primary Color:
                        </Typography>
                    </Grid>
                    <Grid item>
                        {colorArray.map((color) => {
                            return (
                                <Button
                                    onClick={(e) => props.setColor(e)}
                                    style={{
                                        backgroundColor: color,
                                        paddingTop: 20,
                                        margin: 5,
                                    }}
                                    key={color}
                                    size="large"
                                    variant="contained"
                                    color="default"
                                    value={color}
                                    name="primary"
                                ></Button>
                            )
                        })}
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="h4"
                            style={{
                                paddingTop: 20,
                                paddingBottom: 20,
                                paddingLeft: 20,
                            }}
                        >
                            Change Text Color:
                        </Typography>
                    </Grid>
                    <Grid item>
                        {colorText.map((color) => {
                            return (
                                <Button
                                    onClick={(e) => props.setColor(e)}
                                    style={{
                                        backgroundColor: color,
                                        paddingTop: 20,
                                        margin: 10,
                                        marginBottom: 18,
                                    }}
                                    key={color}
                                    variant="contained"
                                    color="default"
                                    value={color}
                                    name="contrastText"
                                ></Button>
                            )
                        })}
                    </Grid>
                </Grid>
            </Drawer>
            {/* drawers end here */}
        </AppBar>
    )
}

export default Navigation
