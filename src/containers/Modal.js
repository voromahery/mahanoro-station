import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { displayModal } from "../actions/modal";
import { Modal } from "../components";

export default function ModalContainer() {
  const dispatch = useDispatch();
  return (
    <Modal>
      <Modal.Wrapper>
        <Modal.Close onClick={() => dispatch(displayModal(false))}>
          CLEAR
        </Modal.Close>
        <Modal.Heading>Booking comfirmed!</Modal.Heading>
        <Modal.Paragraph>
          Thank you for trusting our services. Your booking has been added to
          your account. You can review it there.
        </Modal.Paragraph>
        <Link to="/account">
          <Modal.Button>Check your account</Modal.Button>
        </Link>
      </Modal.Wrapper>
    </Modal>
  );
}
