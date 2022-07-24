import React from 'react';
import CardList from './CardList';
import { robots } from './robots';


const App = () => {
    return (
        <div className='tc'>
            <h2>RoboFriends</h2>
            <CardList robots={robots} />
        </div>
    )
}

export default App;