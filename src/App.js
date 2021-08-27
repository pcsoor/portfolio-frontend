import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import EditProject from './components/EditProject'
import AddProject from './components/AddProject'
import Resume from './components/Resume'
import Work from './components/Work'
import Contact from './components/Contact'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/edit" component={EditProject}/>
                <Route path="/add" component={AddProject}/>
                <Route path="/resume" component={Resume}/>
                <Route path="/work" component={Work}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
        </BrowserRouter>

    );
}

export default App;
