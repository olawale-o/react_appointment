import ReactDOM from 'react-dom';
import React from 'react';
import PropType from 'prop-types';
import styles from './LogoutModalStyle';

const LogoutModal = ({
  isOpen,
  onClose,
  onConfirm,
  isLoading,
}) => {
  if (!isOpen) return null;
  return (
    ReactDOM.createPortal(
      <div className="modal" style={styles.modal}>
        <div className="modal__body" style={styles.modalBody}>
          <h6 className="modal__header" style={styles.modalHeader}>Are you sure</h6>
          <div className="modal__actions" style={styles.modalActions}>
            <button type="button" style={styles.cancel} onClick={onClose}>
              Cancel
            </button>
            {isLoading
              ? <div className="form__submission-indicator" />
              : <button type="button" style={styles.confirm} onClick={onConfirm}>Logout</button>}
          </div>
        </div>
      </div>,
      document.body,
    )
  );
};

export default LogoutModal;

LogoutModal.propTypes = {
  isOpen: PropType.bool.isRequired,
  onClose: PropType.func.isRequired,
  isLoading: PropType.bool.isRequired,
  onConfirm: PropType.func.isRequired,
};
