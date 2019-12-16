import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Residencial from './pages/Residencial';
import Empresarial from './pages/Empresarial';
import Contato from './pages/Contato';
import Assinatura from './pages/Assinatura';
import AreaCliente from './pages/AreaCliente';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/residencial" exact component={Residencial} />
      <Route path="/empresarial" exact component={Empresarial} />
      <Route path="/contato" exact component={Contato} />
      <Route path="/assinatura" exact component={Assinatura} />
      <Route path="/area-cliente" exact component={AreaCliente} />
    </Switch>
  );
}
