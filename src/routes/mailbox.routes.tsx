import { Routes, Route, Navigate } from 'react-router-dom';

import WorkingUsMailbox from '../pages/private/Mailbox/WorkingUs';
import EnrollMailbox from '../pages/private/Mailbox/Enroll';
import QuestionsMailbox from '../pages/private/Mailbox/Questions';
import ArchivedMailbox from '../pages/private/Mailbox/Archived';
import DeletedMailbox from '../pages/private/Mailbox/Deleted';

const MailboxRoutes = () => {
  return (
    <Routes>
      <Route path="matriculas" element={<EnrollMailbox />} />
      <Route path="trabalhe-conosco" element={<WorkingUsMailbox />} />
      <Route path="fale-conosco" element={<QuestionsMailbox />} />
      <Route path="arquivados" element={<ArchivedMailbox />} />
      <Route path="excluidos" element={<DeletedMailbox />} />

      <Route path="*" element={<Navigate to="matriculas" replace />} />
    </Routes>
  );
};

export default MailboxRoutes;
