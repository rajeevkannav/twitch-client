import React from 'react';
import {Router, Route} from 'react-router-dom';
import history from '../history';
//Application
import StreamCreate from './streams/Create';
import StreamEdit from './streams/Edit';
import StreamShow from './streams/Show';
import StreamDelete from './streams/Delete';
import StreamList from './streams/List';

import Header from './shared/Header';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <Header />
                <div>
                    <Route path='/' exact component={StreamList}/>
                    <Route path='/streams/new' exact component={StreamCreate}/>
                    <Route path='/streams/edit/:id' exact component={StreamEdit}/>
                    <Route path='/streams/delete' exact component={StreamDelete}/>
                    <Route path='/streams/show' exact component={StreamShow}/>
                </div>
            </Router>
        </div>
    )
};

export default App;