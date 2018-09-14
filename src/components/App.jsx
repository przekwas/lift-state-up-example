//module imports
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//component imports
import Navbar from './Navbar';
import CommentsList from './CommentsList';
import CaptainPlaceHolder from './CaptainPlaceholder';
import SingleCommentCard from './SingleCommentCard';
import InputDisplayer from './InputDisplayer';

const App = () => {
    return (
        <Router>
            <Fragment>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={CaptainPlaceHolder} />
                    <Route exact path='/comments' component={CommentsList} />
                    <Route path='/comments/:id' component={SingleCommentCard} />
                    <Route path='/inputdisplayer' component={InputDisplayer} />
                </Switch>
            </Fragment>
        </Router>
    );
};

export default App;