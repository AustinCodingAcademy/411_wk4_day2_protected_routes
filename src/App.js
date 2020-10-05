import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import './App.css'
import Router from './Router'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
    let [prefersDarkMode, setMode] = useState(true)
    let [primaryColor, setPrimaryColor] = useState({
        light: '#3f50b5',
        dark: '#1B5E20',
    })
    let [textColor, setTextColor] = useState({
        light: '#fff',
        dark: '#fff',
    })

    const toggleDarkMode = () => {
        setMode(prefersDarkMode === false ? true : false)
    }

    const setColor = (event) => {
        console.log(event.target.name, event.target.value)

        event.target.name === 'primary'
            ? prefersDarkMode
                ? setPrimaryColor({ ...primaryColor, dark: event.target.value })
                : setPrimaryColor({
                      ...primaryColor,
                      light: event.target.value,
                  })
            : console.log('Jacob, get your shit together')

        event.target.name === 'contrastText'
            ? prefersDarkMode
                ? setTextColor({ ...textColor, dark: event.target.value })
                : setTextColor({
                      ...textColor,
                      light: event.target.value,
                  })
            : console.log('Jacob, get your shit together')
    }

    const theme = createMuiTheme({
        palette: {
            type: prefersDarkMode ? 'dark' : 'light',
            primary: {
                main: prefersDarkMode ? primaryColor.dark : primaryColor.light,

                contrastText: prefersDarkMode
                    ? textColor.dark
                    : textColor.light,
            },
        },
    })

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <Navigation darkMode={toggleDarkMode} setColor={setColor} />
                <CssBaseline />
                <Router />
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
