const modal = {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1500,
  background: 'grey',
  opacity: 0.9,
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'all',
};

const modalBody = {
  background: '#071609',
  textAlign: 'center',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '500px',
  height: '200px',
};

const modalHeader = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  color: '#fff',
};

const modalActions = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const cancel = {
  marginRight: '2rem',
  width: '50%',
  borderRadius: '20px',
  paddingTop: '0.8rem',
  paddingBottom: '0.8rem',
  paddingLeft: '2rem',
  paddingRight: '2rem',
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
};

const confirm = {
  background: '#c51742',
  color: '#fff',
  width: '50%',
  borderRadius: '20px',
  paddingTop: '0.8rem',
  paddingBottom: '0.8rem',
  paddingLeft: '2rem',
  paddingRight: '2rem',
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
};

const styles = {
  modal,
  modalBody,
  modalHeader,
  modalActions,
  cancel,
  confirm,
};

export default styles;
