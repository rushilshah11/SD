import "../App.css";

function ContactForm() {
  return (
    <div className="">
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
                <span>Phone: 7144044595</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <span>Email: sunkistdental@yahoo.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <span>Location: 2710 N Coventry St, Orange, CA 92867</span>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-100">
              <form action="" className="flex flex-col spacy-y-4">
                <div>
                  <label for="" className="mt-2 text-sm">
                    Your Name
                  </label>
                  <input
                    for=""
                    placeholder="Your name"
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
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-200"
                  />
                  <label for="" className="mt-2 text-sm">
                    Message
                  </label>
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-200"
                  ></textarea>
                </div>
                <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm mt-3">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
