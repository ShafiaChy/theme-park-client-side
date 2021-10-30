import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import AddService from './Components/AddService/AddService';
import AuthProvider from './Components/Context/AuthProvider';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import MyOrder from './Components/MyOrder/MyOrder';
import NotFound from './Components/NotFound/NotFound';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';


function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
         <Home></Home>
        </Route> 
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/register">
          <Register></Register>
        </Route>
       <Route exact path="/about">
          <About></About>
        </Route>
        <PrivateRoute exact path="/add-service">
          <AddService></AddService>
        </PrivateRoute>
        <PrivateRoute exact path="/my-order">
          <MyOrder></MyOrder>
        </PrivateRoute> 
        <PrivateRoute exact path="/manage-all-users">
          <ManageOrders></ManageOrders>
        </PrivateRoute> 
        <PrivateRoute exact path ="/place-order/:id">
          <PlaceOrder></PlaceOrder>
        </PrivateRoute>
         <Route exact path="/login">
         <Login></Login>
        </Route>
        <Route exact path="/register">
         <Register></Register>
        </Route> 
         <Route path="/*">
          <NotFound></NotFound>
        </Route> 
        
      </Switch>
      </Router>
     
      </AuthProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
