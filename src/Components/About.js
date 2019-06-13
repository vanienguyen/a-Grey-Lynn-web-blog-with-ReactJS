import React from 'react';
import './about.css';

class About extends React.Component {

    componentWillMount() {
        let e = document.documentElement,
            g = document.getElementsByTagName('body')[0],
            x = window.innerWidth || e.clientWidth || g.clientWidth,
            y = window.innerHeight|| e.clientHeight|| g.clientHeight;

        this.setState({x:x,y:y});
    }
    render() {
        return(
            <div className='about'>
                <img className='about-background' src={require('./about.jpg')}
                     alt='coffee and lap background is here!!'/>
            </div>
        )
    }
}

export default About;