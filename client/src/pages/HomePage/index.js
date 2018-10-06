import React from 'react';
import Jumbotron from '../../components/Jumbotron'
import homepageImage from '../../images/homepageImage.jpeg'
import JumbotronImage from '../../components/JumbotronImage'
import styles from './homepageStyle.css'
import LoginForm from '../../components/LoginForm'

const HomePage = () => {
    return (
    <div>
        <Jumbotron>
            <JumbotronImage />     
        </Jumbotron>
    </div>
    )
    
}

export default HomePage;