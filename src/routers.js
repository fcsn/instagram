import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import MainPage from './pages/mainPage/mainPage';
import RestApiPage from './pages/restApi/RestApi';
import LoginPage from './pages/loginPage/loginPage';
import RegisterPage from './pages/registerPage/registerPage';
import _Fetch from './common/fetch';
import { SERVER_URL } from './common/settings';
import { setItem } from './common/StorageUtils';

const url = `${SERVER_URL}/insta/restapi/api_list`;
// url 뒤에 붙는 주소. 버튼누를때마다 바뀜

class Routers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.getRestAPI();
  }

    getRestAPI = async () => {
      try {
        const res = await _Fetch({
          method: 'GET',
          url,
        });
        const obj = {};
        res.map(
          item => (obj[`${item.api_name}`] = {
            ...item,
            url: SERVER_URL + item.api,
          }),
        );
        // console.log(obj);
        setItem('restApi', obj);
        this.setState({
          isLoaded: true,
        });
      } catch (error) {
        console.log(error);
      }
    };

    render() {
      const { isLoaded } = this.state;
      if (!isLoaded) return null;
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/restapi" component={RestApiPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
          </Switch>
        </Router>
      );
    }
}

export default Routers;
