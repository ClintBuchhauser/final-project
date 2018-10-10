import React, { Component } from 'react';
import Header from '../../components/Header';
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";

class UserPage extends Component {
    state = {
        user: {}
    }

    componentDidMount() {
        API.getUser(this.props.match.params.id) 
        // console.log(API.getUser(this.props.match.params.id));
        
        .then(res => this.setState({user: res.data}))
      }

        
    render() {
    return (
        <div>
        <Header />
        <Container fluid>
            <h1>UserPage {this.state.user.name}</h1>
        </Container>
        </div>
    )
    }
}

export default UserPage;