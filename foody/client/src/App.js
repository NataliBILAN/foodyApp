import React, { Fragment, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import AppHeader from './components/AppHeader/AppHeader';
import HomePage from './pages/HomePage/Home';
import MenuPage from './pages/Menu';
import MenuItemPage from './pages/Dish';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import DeliveryPage from './pages/Delivery';
import Cart from './components/Cart/CartContainer';
import AccountPage from './pages/AccountPage/AccountContainer';
import OrderHistoryPage from './pages/OrderHistory';
import PlannerPage from './pages/Planner';
import SignUpPage from './pages/SingUp';
import SignInPage from './pages/SignIn';
import routes from './configs/routes';
import ProtectedRoute from './components/ProtectedRoute'
import { refreshCurrentUser } from './redux/auth/authOperations';


class App extends Component {
  componentDidMount() {
    this.props.refreshCurrentUser();
  }
  render() {
    return (
      <Fragment>
        <AppHeader />
        <div>
          <Switch>
            <Route exact path={routes.HOME} component={HomePage} />
            <Route exact path={routes.MENU} component={MenuPage} />
            <Route path={routes.MENU_ITEM} component={MenuItemPage} />
            <Route exact path={routes.ABOUT} component={AboutPage} />
            <Route exact path={routes.CONTACT} component={ContactPage} />
            <Route exact path={routes.DELIVERY} component={DeliveryPage} />
            <ProtectedRoute exact path={routes.CART} component={Cart} />
            <ProtectedRoute path={routes.ACCOUNT} component={AccountPage} />
            <ProtectedRoute path={routes.ORDER_HISTORY} component={OrderHistoryPage} />
            <ProtectedRoute path={routes.PLANNER} component={PlannerPage} />
            <Route exact path={routes.SIGNUP} component={SignUpPage} />
            <Route exact path={routes.SINGIN} component={SignInPage} />
          </Switch>
        </div>
      </Fragment>
    )
  }

};

const mapDispatch = { refreshCurrentUser };

export default connect(
  null,
  mapDispatch
)(App);
