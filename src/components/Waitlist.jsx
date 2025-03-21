import waitlistIcon from '../assets/waitlist/wait.svg'

export default function Waitlist() {
  return (
    <div className="bThemeYellow pt-5 pb-5">
      <section className="container g-4">
        <div className="row g-0">
          <div className="col col-lg-7 d-flex justify-content-start align-items-center">
            <div>
              <div className="text-center text-lg-start">
                <h1 className="display-4 fw-bold mb-2 mt-0">
                  Build a highly engaged community with no efforts.
                </h1>
                <p>
                  Commune offers the tools you need to build a highly engaged community with little
                  to no efforts. Simply setup your Commune workspace, and manage everything from
                  members to content from one central dashboard.
                </p>
              </div>
              <form className="row g-3">
                <div className="col-lg-6 col-xl-5">
                  <label
                    htmlFor="inputEmail"
                    className="visually-hidden"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="inputEmail"
                    placeholder="Enter your e-mail address"
                    required
                  />
                </div>
                <div className="col-lg-4 col-xl-3">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg mb-3 w-100"
                  >
                    Join Waitlist
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4 col-xxl-3 ms-auto d-none d-lg-block">
            <img
              src={waitlistIcon}
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>

  );
}
