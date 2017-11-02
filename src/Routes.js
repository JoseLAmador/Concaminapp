import React from 'react';
import {Root} from 'native-base';
import {Router, Scene} from 'react-native-router-flux';
import Login from "./components/login/Login";
import Log from "./components/login/Log";
import Recover from "./components/login/Recover";
import Perfil from './components/perfil/Perfil';
import Eventos from './components/eventos/Eventos';
import NuevoEvento from './components/eventos/NuevoEvento';

const Routes = () => {
    return (
        <Root>
          <Router>
            <Scene key="root">
              <Scene key="Log" header={null} component={Log}/>
              <Scene key="Login" header={null} component={Login}/>
              <Scene key="Recover" header={null} component={Recover}/>
              <Scene key="Perfil" header={null} component={Perfil}/>
              <Scene key="Eventos" header={null} component={Eventos} initial/>
              <Scene key="NuevoEvento" header={null} component={NuevoEvento}/>
            </Scene>
          </Router>
        </Root>
    );
}
export default Routes;