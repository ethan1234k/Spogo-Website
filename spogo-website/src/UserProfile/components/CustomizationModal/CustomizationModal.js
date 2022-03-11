import React, { useState, useEffect } from "react";
import "./CustomizationModal.css";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";

const CustomizationModal = (props) => {
  const [customizationModalOpen, setCustomizationModalOpen] = useState(
    props.modalOpen
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setCustomizationModalOpen(props.modalOpen);
  }, [props.refresh]);

  return (
    <Modal
      isOpen={customizationModalOpen}
      appElement={document.getElementById("root") || undefined}
      className="customizationModal"
      overlayClassName="customizationModalOverlay"
    >
      <div className="customizationModalHeaderContainer">
        <h1>Customization</h1>
        <MdClose onClick={() => setCustomizationModalOpen(false)} size={25}/>
      </div>
      <h1
        className="customizationBackgroundColorOption"
        onClick={() =>
          dispatch({ type: "Change Background Color: Whitesmoke" })
        }
      >
        Whitesmoke
      </h1>
      <h1
        className="customizationBackgroundColorOption"
        onClick={() =>
          dispatch({ type: "Change Background Color: Columbia Blue" })
        }
      >
        Columbia Blue
      </h1>
      <h1
        className="customizationBackgroundColorOption"
        onClick={() => dispatch({ type: "Change Background Color: Beige" })}
      >
        Beige
      </h1>
      <h1
        className="customizationBackgroundColorOption"
        onClick={() => dispatch({ type: "Change Background Color: Sunset" })}
      >
        Sunset
      </h1>
    </Modal>
  );
};

export default CustomizationModal;
