import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const InputForm = () => {
  return (
    <div>
      <Form className="container">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Income</Form.Label>
          <Form.Control type="number" placeholder="Income" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Expendature</Form.Label>
          <Form.Control type="text" placeholder="Expense" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default InputForm;
