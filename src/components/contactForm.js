import "../App.css";
import {useState} from 'react';

function ContactForm() {
  const [formState, setFormState] = useState({});

  const changeHandler = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      SecureToken: "13d5dbc3-91a9-40d6-be5f-19d536b7d169",
      To: "rushilshah.282@gmail.com",
      From: formState.email,
      Subject: "This is from the contact form",
      Body: `${formState.name} connected to you over email. This is his message: ${formState.message}`,
    };
    if(window.Email){
      window.Email.send(config).then(() => alert("Form submitted successfully"));
    }
  };

  return (
    <div className="contactForm">
      <div className="flex w-ful min-h-screenitems-center">
        <div className="bgContactUs flex flex-row md:space-x-6  space-y-6 md:space-y-0 w-full max-4-4xl p-8 rounded-xl shadow-lg text-white">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h4 className="text-white text-4xl tracking-wide">Contact Us</h4>
              <p className="pt-2 text-cyan-100 text-sm">
                We promise to never compromise quality for<br></br> time and
                give my clients realistic schedules <br></br>that accommodate
                their lives. I strive for<br></br> honest customer service and
                work with the best materials available.
              </p>
            </div>
            <div className="flex flex-col space-y-6 text-cyan-100 text-sm">
              <div className="inline-flex space-x-2 items-center">
                <span>Phone: 714-533-9670</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <span>Email: sunkistdental@yahoo.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <span>
                  Location: 1234 W Chapman Ave suite 106, Orange, CA 92868
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-100">
              <form
                action=""
                className="flex flex-col spacy-y-4"
                onSubmit={handleSubmit}
              >
                <div>
                  <label for="" className="mt-2 text-sm">
                    Your Name
                  </label>
                  <input
                    for=""
                    placeholder="Your name"
                    name="name"
                    value={formState.name || ""}
                    onChange={changeHandler}
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-200"
                  />
                </div>
                <div>
                  <label for="" className="mt-2 text-sm">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formState.email || ""}
                    onChange={changeHandler}
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-200"
                  />
                </div>
                <div>
                  <label for="" className="mt-2 text-sm">
                    Message
                  </label>
                  <textarea
                    placeholder="Message"
                    rows="4"
                    name="message"
                    onChange={changeHandler}
                    value={formState.message || ""}
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-200"
                  ></textarea>
                </div>
                <input
                  type="submit"
                  value="Send Form"
                  className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm mt-3"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
