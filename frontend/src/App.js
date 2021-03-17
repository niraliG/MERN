
import './App.css';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import UserForm from './UserForm';
import ViewUsers from './ViewUsers';
import EditUser from './EditUser';
function App() {
  return (
   <Router>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/createuser" exact={true} component={UserForm} />
          <Route path="/viewusers" exact={true} component={ViewUsers} />
          <Route path="/edituser/:id" exact={true} component={EditUser} />
        </Switch>
      </Router>
  );
}

export default App;
