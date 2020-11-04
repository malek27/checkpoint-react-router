import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ReactStars from "react-stars";
import "./Add.css";
const Add = (props) => {
  const { handleAdd } = props;
  const [show, setShow] = useState(false);
  const [newMovie, setNewMovie] = useState({ id: Math.random() });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const ratingChanged = (newRating) => {
    setNewMovie({ ...newMovie, rate: newRating });
  };

  return (
    <div>
      <button className="Add" variant="primary" onClick={handleShow}>
        Add Movie
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group id="imgsrc">
              <Form.Label>Image Source</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter image source "
                name="PostUrl"
                onChange={(e) =>
                  setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group id="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter title "
                name="Title"
                onChange={(e) =>
                  setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group id="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter description "
                name="Description"
                onChange={(e) =>
                  setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group id="date">
              <Form.Label>date</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter date "
                name="date"
                onChange={(e) =>
                  setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group id="style">
              <Form.Label>style</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter style "
                name="style"
                onChange={(e) =>
                  setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group id="rate">
              <Form.Label>Rating</Form.Label>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
                half={false}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleAdd(newMovie);
              handleClose();
              setNewMovie({});
            }}
          >
            Add
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Add;
