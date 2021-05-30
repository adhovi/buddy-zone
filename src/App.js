import React, { useEffect, useState } from 'react'
import { Container, AppBar, Typography, Grid, Grow } from "@material-ui/core"
import {useDispatch} from "react-redux"
import logo from "./images/logo.svg"
import Form from './Components/Form/Form'
import Posts from './Components/Posts/Posts'
import {getPosts} from "./actions/Posts"
import useStyles from "./styles"

const App = () => {
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts)
    }, [dispatch])
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center"> Buddy Zone </Typography>
                <img className={classes.image} src={logo} alt="logo" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch">
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={ setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
            
        </Container>
    )
}

export default App
