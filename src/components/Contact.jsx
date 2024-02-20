import React from "react";
import { useState } from "react";

function Contact() {
    // create state
    const [email, setEmail] = useState("");


    // on change function
    function onEmailChange(event) {
        setEmail(event.target.value)
        console.log(email)
    }


    // on blur function
    function onEmailBlur() {
        if (email == "") {
            document.getElementById("message").textContent = "Email cannot be empty!"
        }
        else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(email)) {
            document.getElementById("message").textContent = "Email is invalid!"

        }
        else {
            document.getElementById("message").textContent = ""

        }
    }

    // create state
    const [name, setName] = useState("");

    // on change function
    function onNameChange(event) {
        setName(event.target.value)
        console.log(email)

    }
    // on blur function
    function nameBlur() {
        if (name == "") {
            document.getElementById("message").textContent = "Name cannot be empty!"
        }

        else {
            document.getElementById("message").textContent = ""
        }
    }
    const [message, setMessage] = useState("");

    // on change function
    function onMessageChange(event) {
        setMessage(event.target.value)
        console.log(email)

    }
    // on blur function
    function messageBlur() {
        if (message == "") {
            document.getElementById("message").textContent = "Message cannot be empty!"
        }

        else {
            document.getElementById("message").textContent = ""
        }
    }




    return (
        <section id="contact-me">
            <h2>Contact Me</h2>
            <div class="contact-content">

                <div class="container">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input
                                type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={onNameChange}
                                value={name}
                                onBlur={nameBlur}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={onEmailChange}
                                value={email}
                                onBlur={onEmailBlur}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="floatingTextarea" class="form-label">Message</label>

                            <textarea
                                class="form-control"
                                placeholder="Leave a message here"
                                id="floatingTextarea"
                                onChange={onMessageChange}
                                value={message}
                                onBlur={messageBlur}
                            ></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>

                    <hr />

                    <p id="message"></p>
                </div>


            </div>
        </section>
    )
}

export default Contact;