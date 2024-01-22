import ReactDOM from "react-dom";

const ModalPortal = ({ children }) => {
  const el = document.getElementById("preview-modal-wrapper");
  return ReactDOM.createPortal(children, el);
};

export default ModalPortal;
