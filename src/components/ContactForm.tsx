import React, { SFC } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm: SFC = () => (
  <div className="row mx-auto px-5 pt-3">
    <div className="col-md-10 mx-auto bg-dark text-light text-left rounded">
      <div className="px-3 pt-4 pb-2">
      <h3>Send a message</h3>
      </div>
      <div className="px-3 pt-3 pb-5">
        <Form>
          <Form.Group className="text-left">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="jimmy buffet" />
          </Form.Group>
          <Form.Group className="text-left">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="text-left">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" placeholder="Write Your Message Here" />
          </Form.Group>
          <Button type="submit">Send Message</Button>
        </Form>
      </div>
    </div>
  </div>
);

export default ContactForm;
