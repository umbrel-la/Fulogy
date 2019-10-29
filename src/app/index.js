import React from 'react';
import styles from './app.module.sass';
import Header from '@p/header';
import Footer from '@p/footer';
import { observer, Provider } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes, { routesMap } from '@/routes';

import stores from '@s';

class App extends React.Component{
    render(){
      let routesComponents = routes.map((route) => {
          console.log(route.component)
          return <Route path={route.url}
                        component={route.component}
                        exact={route.exact}
                        key={route.url}
                  />;

      });

        return (
      <Provider stores={stores}>
        <Router>
          <div className="container-fluid">
            <div className="row">
              <Header />
          </div>
          <main>
          <Switch>
              {routesComponents}

          </Switch>
          </main>
            <Footer />
          </div>
        </Router>
      </Provider>
        );
    }
}

export default App;
