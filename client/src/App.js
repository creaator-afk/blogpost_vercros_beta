import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Blog from "./Blog";
import {Fragment} from "react";
import Post1 from "./Posts/Post1";
import BlogEditor from "./blogEditor/BlogEditor";
import {Provider} from 'react-redux';
import store from './store'

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Fragment>
                    <Routes>
                        <Route path="/signin" Component={SignIn}/>
                        <Route path="/signup" Component={SignUp}/>
                        <Route path="/" Component={Blog}/>
                        <Route path="/blog/post1" Component={Post1}/>
                        <Route path="/blog/editor" Component={BlogEditor}/>
                    </Routes>
                </Fragment>
            </Router>
        </Provider>
    );
}

export default App;
