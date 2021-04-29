import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

import WorkingUsMailbox from '../pages/private/Mailbox/WorkingUs';
import EnrollMailbox from '../pages/private/Mailbox/Enroll';

const MailboxRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/matriculas`} component={EnrollMailbox} />
      <Route path={`${path}/trabalhe-conosco`} component={WorkingUsMailbox} />

      <Route component={() => <Redirect to={`${path}/matriculas`} />} />
    </Switch>
  );
};

export default MailboxRoutes;
