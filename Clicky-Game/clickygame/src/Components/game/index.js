import React, {Component} from 'react';
import Nav from '../nav';
import ClickItem from '../clickItem';

class Game extends Component {
    // // state = {
    // //     data, 
    // //     score:0,
    // //     topScore:0
    // // };
    // // //add data to the state 
    // // componentDidMount () {
    // //     this.setState ({data: this.shuffleData(this.state.data)});
    // }
    render () {
        return (
            <div>
                <Nav/>
                <ClickItem/>


            </div>

        )
    }
} 
export default Game;