import { Switch, Route, Redirect } from 'react-router-dom';

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

import WorkingUsMailbox from '../pages/private/Mailbox/WorkingUs';
import EnrollMailbox from '../pages/private/Mailbox/Enroll';

import Students from '../pages/private/Students';

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

    <Route path="/mensagens/trabalhe-conosco" component={WorkingUsMailbox} />
    <Route path="/mensagens/matriculas" component={EnrollMailbox} />

    <Route path="/alunos" component={Students} />

    <Route component={() => <Redirect to="/" />} />
  </Switch>
);

export default Routes;
