import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import API from '../../utils/API';
import { withRouter } from 'react-router-dom';
import "./registerForm.css";
import Grid from '@material-ui/core/Grid';

class RegisterForm extends React.Component {

    state = {
        user: {
            username: "",
            password: "",
            name: "",
            phone: "",
            street: "",
            city: "",
            state: "",
            zipcode: "",
            email: "",
            age: "",
            image: ""
        },
        redirect: false
    }

    handleRedirect = () => {
        if (this.state.redirect) {
            console.log("working")
            this.props.history.push('/')
        }
    }

    handleInputChange = event => {
        var user = this.state.user;
        const { name, value } = event.target;
        user[name] = value;
        this.setState({
            user,
            redirect: false
        })
    };

    componentDidMount() {
        console.log(this.props);
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.getUserByUsername(this.state.user.username)
            .then((response) => {
                console.log("data", response.data)
                if (response.data === null && this.state.user.age >= 21) {
                    this.setState({error: undefined})
                    // let object = {username:this.state.user.username}
                    API.saveUser({
                        username: this.state.user.username,
                        password: this.state.user.password,
                        name: this.state.user.name,
                        image: this.state.user.image,
                        phone: this.state.user.phone,
                        street: this.state.user.street,
                        city: this.state.user.city,
                        state: this.state.user.state,
                        zip: this.state.user.zip,
                        email: this.state.user.email,
                        age: this.state.user.age
                    })
                    .then(
                        this.props.history.push("/")
                    
                    );
                }
                else if (this.state.user.age <= 21) {
                    this.setState({error: "Sign Up Error: Not 21 Yet."})
                }
                else {
                    this.setState({error: "Sign Up Error: Username already exists"})
                }
            })
    }

    render () {
        return (
            <Grid item xs={12}>
                <form className="registerForm">
                    <h4>Create your account for Wine About Me</h4>
                    <p className="twentyone" style={{textAlign: "center"}}>* Must be 21 or over to sign up.</p>
                    {this.state.error && <h2 className="errormsg">{this.state.error}</h2>}
                    <div className="registerformWrap">
                        <div className="requiredReg">
                            <h5>Required</h5>
                            <TextField
                                style={{margin: 15}}
                                id="username"
                                label="Username"
                                margin="normal"
                                name="username"
                                value={this.state.user.username}
                                onChange={this.handleInputChange}
                                required={true}
                              
                            />
                            <TextField
                                style={{margin: 15}}
                                id="password"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                margin="normal"
                                name="password"
                                value={this.state.user.password}
                                onChange={this.handleInputChange}
                                required={true}
                            />
                            <TextField
                                style={{margin: 15}}
                                id="name"
                                label="Name"
                                margin="normal"
                                name="name"
                                value={this.state.user.name}
                                onChange={this.handleInputChange}
                                required={true}
                            />
                            <TextField
                                style={{margin: 15}}
                                id="age"
                                label="Age"
                                margin="normal"
                                name="age"
                                value={this.state.user.age}
                                onChange={this.handleInputChange}
                                required={true}
                            />
                        </div>
                        <div className="additionalReg">
                            <h5>More Info</h5>
                            <TextField
                                    style={{margin: 15}}
                                    id="image"
                                    label="Profile Pic Link"
                                    margin="normal"
                                    name="image"
                                    value={this.state.user.image}
                                    onChange={this.handleInputChange}
                                />
                            <TextField
                                style={{margin: 15}}
                                id="email"
                                label="Email"
                                placeholder="johndoe@example.com"
                                margin="normal"
                                name="email"
                                value={this.state.user.email}
                                onChange={this.handleInputChange}
                            />
                            <TextField
                                style={{margin: 15}}
                                id="phone"
                                label="Phone Number"
                                margin="normal"
                                placeholder="XXX-XXX-XXXX"
                                name="phone"
                                value={this.state.user.phone}
                                onChange={this.handleInputChange}
                            />
                            <hr/>
                        <TextField
                                style={{margin: 15}}
                                id="street"
                                label="Street"
                                margin="normal"
                                name="street"
                                value={this.state.user.street}
                                onChange={this.handleInputChange}
                            />
                            <TextField
                                style={{margin: 15}}
                                id="city"
                                label="City"
                                margin="normal"
                                name="city"
                                value={this.state.user.city}
                                onChange={this.handleInputChange}
                            />
                            <TextField
                                style={{margin: 15}}
                                id="state"
                                label="State"
                                margin="normal"
                                name="state"
                                value={this.state.user.state}
                                onChange={this.handleInputChange}
                            />
                            <TextField
                                style={{margin: 15}}
                                id="zipcode"
                                label="Zipcode"
                                margin="normal"
                                name="zipcode"
                                value={this.state.user.zipcode}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                    <hr/>
                    
                    <div style={{textAlign: "center"}}>
                        <Button style={{margin: 5}} onClick={this.handleFormSubmit} type="submit" variant="contained" color="primary">
                            Create Account
                        </Button>
                        
                        <Button style={{margin: 5}} variant="contained" color="primary" href="/">
                            Go Back
                        </Button>
                    </div>
                </form>
            </Grid>
            
        );
    }
}

export default withRouter(RegisterForm);