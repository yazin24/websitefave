import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2'



const Appointmentform = () => {
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const phone = formData.get("user_phone");
    const message = formData.get("message");

    if (!name || !email || !phone || !message) {
      Swal.fire({
        text: "Please fill out all fields.",
        icon: "error",
      });
      return;
    }
    
        
    emailjs
      .sendForm(
        "service_yszvwgk",
        "template_lkaosuc",
        form.current,
        "FNNM-1AT0Je5GIXwn"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Messege Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );   
  };

const Alert = () => {
  Swal.fire({
    text: "Set Appointment Successfully!",
    icon: "success",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.reload("/");
    }
  })
} 

  return (

       <div className='flex flex-col items-center'>
            <div className='cleaning bg-violet-700 w-full h-24 md:h-52'>
                <div className='teamcleaningcolor'>
                </div>
            </div>          

    <div>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>

              <div className="mt-8">
                <a href="" className="text-2xl font-bold text-pink-600">
                  0998-887-3878
                </a>

                <address className="mt-2 not-italic">Fave Ecommerce INC</address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form
                action="form"
                ref={form}
                onSubmit={sendEmail}
                className="space-y-4"
              >
                <div>
                  <label className="sr-only" for="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    name="user_name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" for="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      name="user_email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" for="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border bor der-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      name="user_phone"
                      id="phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" for="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    name="message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    onClick={Alert}
                    a
                    href="home"
                    type="submit"
                    value="Send"
                    className="inline-block w-full rounded-lg bg-violet-700 px-5 py-3 font-medium text-white sm:w-auto hover:bg-rose-400 duration-500"
                  >
                    Set Appointment
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );

};

export default Appointmentform;
