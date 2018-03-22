import React,  { Component } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';

class About extends Component {
    render() {
        return (
            <React.Fragment>
            <Header title = 'BIT Persons' />
            <div className ="container">
            <div>
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias delectus eum eaque fugiat rerum nemo odit odio totam, inventore beatae velit, libero aliquam a distinctio rem praesentium. Ex, non? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias delectus eum eaque fugiat rerum nemo odit odio totam, inventore beatae velit, libero aliquam a distinctio rem praesentium. Ex, non? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias delectus eum eaque fugiat rerum nemo odit odio totam, inventore beatae velit, libero aliquam a distinctio rem praesentium. Ex, non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias delectus eum eaque fugiat rerum nemo odit odio totam, inventore beatae velit, libero aliquam a distinctio rem praesentium. Ex, non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias delectus eum eaque fugiat rerum nemo odit odio totam, inventore beatae velit, libero aliquam a distinctio rem praesentium. Ex, non?
                 </p>
                 <h4>What we do</h4>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias delectus eum eaque fugiat rerum nemo odit odio totam, inventore beatae velit, libero aliquam a distinctio rem praesentium. Ex, non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias delectus eum eaque fugiat rerum nemo odit odio totam, inventore beatae velit, libero aliquam a distinctio rem praesentium. Ex, non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias delectus eum eaque fugiat rerum nemo odit odio totam, inventore beatae velit, libero aliquam a distinctio rem praesentium. Ex, non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias delectus eum eaque fugiat rerum nemo odit odio totam, inventore beatae velit, libero aliquam a distinctio rem praesentium. Ex, non?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestias delectus eum eaque fugiat rerum nemo odit odio totam, inventore beatae velit, libero aliquam a distinctio rem praesentium. Ex, non?</p>
            </div>
            </div>
            <Footer title='© 2018 Copyright BIT'/>
            </React.Fragment>
        )
    }
}

export default About