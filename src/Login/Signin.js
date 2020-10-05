import React, { Component } from 'react'
import "../css/Signin.css"
import { Link } from 'react-router-dom'

// Material UI Components
import {
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    Paper,
    SvgIcon,
    TextField,
    Typography,
} from '@material-ui/core'

class Signin extends Component {

    render() {
        return (
            <Grid container
                alignItems="center"
                component="main"
                className="login__main my-3"
                justify="center"
            >
                <Grid item
                    xs={12}
                    sm={7}
                    md={4}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <div className="mx-5 my-4">
                        <Typography
                            className="text-center font-weight-bold"
                            component="h1"
                            paragraph={true}
                            variant="h5"
                        >
                            Sign in
                        </Typography>
                        <form method="POST">
                            <TextField
                                autoComplete="email"
                                autoFocus
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                margin="normal"
                                required
                                type="email"
                                variant="outlined"
                            />
                            <TextField
                                autoComplete="current-password"
                                fullWidth
                                id="password"
                                label="Password"
                                name="password"
                                margin="normal"
                                required
                                type="password"
                                variant="outlined"
                            />
                            <Typography
                                align="right"
                                variant="body2"
                            >
                                <Link to="#">
                                    Forgot your password?
                                </Link>
                            </Typography>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                className="mt-2"
                                color="primary"
                                fullWidth
                                type="submit"
                                variant="contained"
                            >
                                Sign In
                            </Button>
                        </form>

                        <Typography 
                            align="center"
                            className="my-4"
                        >
                            OR
                        </Typography>
                        <Button
                            color="primary"
                            fullWidth
                            variant="outlined"
                        >
                            <SvgIcon viewBox="0 0 256 262" fontSize="small">
                                <path d="M255.878,133.451 C255.878,122.717 255.007,114.884 253.122,106.761 L130.55,106.761 L130.55,155.209 L202.497,155.209 C201.047,167.249 193.214,185.381 175.807,197.565 L175.563,199.187 L214.318,229.21 L217.003,229.478 C241.662,206.704 255.878,173.196 255.878,133.451" fill="#4285F4" />
                                <path d="M130.55,261.1 C165.798,261.1 195.389,249.495 217.003,229.478 L175.807,197.565 C164.783,205.253 149.987,210.62 130.55,210.62 C96.027,210.62 66.726,187.847 56.281,156.37 L54.75,156.5 L14.452,187.687 L13.925,189.152 C35.393,231.798 79.49,261.1 130.55,261.1" fill="#34A853" />
                                <path d="M56.281,156.37 C53.525,148.247 51.93,139.543 51.93,130.55 C51.93,121.556 53.525,112.853 56.136,104.73 L56.063,103 L15.26,71.312 L13.925,71.947 C5.077,89.644 0,109.517 0,130.55 C0,151.583 5.077,171.455 13.925,189.152 L56.281,156.37" fill="#FBBC05" />
                                <path d="M130.55,50.479 C155.064,50.479 171.6,61.068 181.029,69.917 L217.873,33.943 C195.245,12.91 165.798,0 130.55,0 C79.49,0 35.393,29.301 13.925,71.947 L56.136,104.73 C66.726,73.253 96.027,50.479 130.55,50.479" fill="#EB4335" />
                            </SvgIcon>
                            <span>&nbsp; Continue with Google</span>
                        </Button>
                        <Button
                            className="mt-3"
                            color="primary"
                            fullWidth
                            variant="outlined"
                        >
                            <SvgIcon viewBox="0 0 256 256" fontSize="small">
                                <path d="M241.871,256.001 C249.673,256.001 256,249.675 256,241.872 L256,14.129 C256,6.325 249.673,0 241.871,0 L14.129,0 C6.324,0 0,6.325 0,14.129 L0,241.872 C0,249.675 6.324,256.001 14.129,256.001 L241.871,256.001" fill="#395185" />
                                <path d="M176.635,256.001 L176.635,156.864 L209.912,156.864 L214.894,118.229 L176.635,118.229 L176.635,93.561 C176.635,82.375 179.742,74.752 195.783,74.752 L216.242,74.743 L216.242,40.188 C212.702,39.717 200.558,38.665 186.43,38.665 C156.932,38.665 136.738,56.67 136.738,89.736 L136.738,118.229 L103.376,118.229 L103.376,156.864 L136.738,156.864 L136.738,256.001 L176.635,256.001" fill="#FFFFFF" />
                            </SvgIcon>
                            <span>&nbsp; Continue with Facebook</span>
                        </Button>
                        <Typography
                            className="mt-3"
                            align="center"
                            variant="body2"
                        >
                            <Link to="/signup">
                                Don't have an account? Sign Up
                            </Link>
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        )
    }
}

export default Signin
