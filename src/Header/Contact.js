import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    console.log(data);

    fetch("https://react-http-1a3d9-default-rtdb.firebaseio.com/userdetails.json", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Contact-type": "user/data",
      },
    });

    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
  };

  return (
    <div className="p-6 pl-16 pr-16">
      <Form className="p-6 rounded-lg font-bold shadow-lg bg-slate-200" onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label className="block mb-2 text-gray-900 dark:text-white">NAME :</Form.Label>
          <Form.Control
            type="text"
            ref={nameRef}
            placeholder="Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="block mb-2 text-gray-900 dark:text-white">EMAIL :</Form.Label>
          <Form.Control
            type="email"
            ref={emailRef}
            placeholder="Email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="block mb-2 text-gray-900 dark:text-white">PHONE NUMBER :</Form.Label>
          <Form.Control
            type="number"
            ref={phoneRef}
            placeholder="Enter Your Phone no."
            required
          />
        </Form.Group>

        <Button
          type="submit"
          className="text-white bg-primary rounded-lg w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
