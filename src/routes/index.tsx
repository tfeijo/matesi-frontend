import { Switch, Redirect } from 'react-router-dom';

import Home from '../pages/public/Home';

import English from '../pages/public/Courses/English';
import French from '../pages/public/Courses/French';
import German from '../pages/public/Courses/German';
import Korean from '../pages/public/Courses/Korean';
import Spanish from '../pages/public/Courses/Spanish';

import Methodology from '../pages/public/Methodology';
import About from '../pages/public/About';
import WorkingUs from '../pages/public/WorkingUs';
import Contact from '../pages/public/Contact';
import Login from '../pages/public/Login';
import Enroll from '../pages/public/Enroll';

import Mailbox from '../pages/private/Mailbox';
import Students from '../pages/private/Students';

import Route from './Route';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />

    <Route path="/cursos/ingles" component={English} />
    <Route path="/cursos/espanhol" component={Spanish} />
    <Route path="/cursos/frances" component={French} />
    <Route path="/cursos/coreano" component={Korean} />
    <Route path="/cursos/alemao" component={German} />

    <Route path="/metodologia" component={Methodology} />
    <Route path="/sobre-nos" component={About} />
    <Route path="/trabalhe-conosco" component={WorkingUs} />
    <Route path="/contato" component={Contact} />
    <Route path="/matricular" component={Enroll} />
    <Route path="/entrar" component={Login} />

    <Route path="/mensagens" component={Mailbox} isAdmin />
    <Route path="/matriculados" component={Students} isAdmin />

    <Route component={() => <Redirect to="/" />} />
  </Switch>
);

export default Routes;
