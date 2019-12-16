import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Residencial from './pages/Residencial';
import Empresarial from './pages/Empresarial';
import Contato from './pages/Contato';
import Assinatura from './pages/Assinatura';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/residencial" exact component={Residencial} />
        <Route path="/empresarial" exact component={Empresarial} />
        <Route path="/contato" exact component={Contato} />
        <Route path="/assinatura" exact component={Assinatura} />
      </Switch>
    </BrowserRouter>
  );
}
