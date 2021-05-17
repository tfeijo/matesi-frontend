import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

import WorkingUsMailbox from '../pages/private/Mailbox/WorkingUs';
import EnrollMailbox from '../pages/private/Mailbox/Enroll';
import QuestionsMailbox from '../pages/private/Mailbox/Questions';
import ArchivedMailbox from '../pages/private/Mailbox/Archived';
import DeletedMailbox from '../pages/private/Mailbox/Deleted';

const MailboxRoutes = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/matriculas`} component={EnrollMailbox} />
      <Route path={`${path}/trabalhe-conosco`} component={WorkingUsMailbox} />
      <Route path={`${path}/fale-conosco`} component={QuestionsMailbox} />
      <Route path={`${path}/arquivados`} component={ArchivedMailbox} />
      <Route path={`${path}/excluidos`} component={DeletedMailbox} />

      <Route component={() => <Redirect to={`${path}/matriculas`} />} />
    </Switch>
  );
};

export default MailboxRoutes;
