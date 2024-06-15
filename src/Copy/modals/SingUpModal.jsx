import React from 'react'
import {Modal, Button, Form} from 'react-bootstrap'

const SingUpModal = ({show,onHide}) => {
  return (
    <Modal
    show = {show}
    onHide={onHide}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        관리자 권한
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>숙소 이름</Form.Label>
        <Form.Control type="text" placeholder="Lazy People" />
        <Form.Text className="text-muted">
          방 주인이 원하는 이름을 입력해 주세요.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>관리 비밀번호</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
     </Form>
    </Modal.Body>
    <Modal.Footer>
    <Button variant="primary" type="button">
        등록
      </Button>
     </Modal.Footer>
  </Modal>
  )
}

export default SingUpModal