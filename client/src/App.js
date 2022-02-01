import './App.css';
import Login from './auth/login'
import SignUp from './auth/signUp'
import Home from './HomePage/index'
import NavBar from './HomePage/NavBar'
import Student from './student/index'
import {Switch,Route} from 'react-router-dom'
import {useSelector} from 'react-redux'

function App() {

  const student = useSelector(state => state.students)

  return (
    <div className="App">
      <NavBar student={student} />
      <Switch> 
        <Route exact path="/" component={Home} /> 
        <Route path="/login" component={Login} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/student" component={Student} />       
      </Switch>
    </div>
  );
}
 
export default App;
