import { MdClose } from 'react-icons/md';
import Button from '../../Button';
import { StyledReactModal } from './styles';

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  deleteFunction: () => void;
}

export function ConfirmDeleteModal({
  isOpen,
  onRequestClose,
  deleteFunction,
}: ConfirmDeleteModalProps) {
  function handleConfirmDelete() {
    deleteFunction();
    onRequestClose();
  }

  return (
    <StyledReactModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Button
        iconOnly
        icon={MdClose}
        color="neutral"
        variant="ghost"
        className="close-modal"
        onClick={onRequestClose}
      />

      <h3>Tem certeza que deseja excluir permanentemente esta mensagem?</h3>
      <div>
        <Button color="neutral" variant="outline" onClick={onRequestClose}>
          Cancelar
        </Button>
        <Button color="danger" onClick={handleConfirmDelete}>
          Excluir
        </Button>
      </div>
    </StyledReactModal>
  );
}
