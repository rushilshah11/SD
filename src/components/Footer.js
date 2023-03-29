import "../App.css";

function Footer() {
  const companyArr = [
    "Services",
    "Meet The Doctor",
    "Testimonials",
    "Contact Us",
  ];
  const hoursArr = [
    "Monday - Wednesday: 9:30AM - 6:00PM",
    "Thursday: 10:00AM - 7:00PM",
    "Friday - Saturday: By Appointment Only",
    "Sunday: Closed",
  ];
  return (
    <footer className="background-Nav-Footer w-full pb-10 mt-5">
      <div className="mx-auto w-full container">
        <div className="flex py-10 flex-wrap grid grid-cols-3 grid-flow-col">
          <div>
            <h2 className="text-center mb-6 text-sm font-semibold uppercase">
              Company
            </h2>

            <ul className="text-center">
              {companyArr.map((company_i) => {
                return (
                  <li className="-ml-8 mb-4">
                    <a
                      href="#place_holder"
                      className="no-underline text-color"
                    >
                      <p className="hover:text-sky-700">{company_i}</p>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-center text-sm font-semibold uppercase">
              Hours
            </h2>
            <ul className="text-center">
              {hoursArr.map((hours_i) => {
                return <li className="-ml-8 mb-4">{hours_i}</li>;
              })}
            </ul>
          </div>
          <div className="grid grid-rows-2">
            <div>
              <h2 className="ml-8 mb-6 text-center text-sm font-semibold uppercase">
                Phone
              </h2>
              <p className="ml-8 mb-14 text-center">
                714-533-9670
              </p>
            </div>
            <div>
              <h2 className="mt-3 ml-8 mb-6 mt-px text-center text-sm font-semibold uppercase">
                Email
              </h2>
              <p className="ml-8 text-center">
                sunkistdental@yahoo.com
              </p>
            </div>
          </div>
        </div>
        <div>
          <iframe
            className="mx-auto"
            title="IFRAME"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.960470910547!2d-117.8681932848433!3d33.78751893908156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd7a7cf60ce2d%3A0xf5d0edb015e84cfd!2sSunkist%20Dental%20Office%3A%20Dr.%20Grishma%20Shah!5e0!3m2!1sen!2sus!4v1679436874039!5m2!1sen!2sus"
            width="500"
            height="300"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
