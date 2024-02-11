import { Component } from "react";
import axios from "axios";

class JobPosation extends Component {
  state = {
    job: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://api.moallem.sch.ir/hire/v1/job/position/list/"
    );
    console.log(response);
    this.setState({ job: response.data });
  }
  render() {
    return (
      <>
        <div dir="rtl" className="container mt-5">
          <div className="w-100 border-bottom border-white pb-4 text-white">
            <i className="fa-solid fa-bars-staggered fs-1">
              <span className="fs-1 ps-4">موقعیت های شغلی</span>
            </i>
          </div>
          <div className="mt-3">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item border border-black mb-4">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button fs-4 bg-info"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    آموزشی
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body bg-dark">
                    <div
                      className="accordion"
                      id="accordionPanelsStayOpenExample"
                    >
                      <div className="accordion-item mb-3 border border-black">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button fs-4 bg-info-subtle"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#One"
                            aria-expanded="true"
                            aria-controls="One"
                          >
                            دبستان دوره اول
                          </button>
                        </h2>
                        <div id="One" className="accordion-collapse collapse">
                          <div className="accordion-body my-2">
                            <div className="container row border border-black p-3 mb-3">
                              <h3 className="col-8 pb-3">معلم</h3>
                              <i className="fa-solid fa-venus-mars col-4 text-danger">
                                <span className="ps-3 text-black fs-5">
                                  مرد / زن
                                </span>
                              </i>
                              <ul className="list-group list-group-horizontal col-8">
                                <li className="list-group-item me-2 border border-black">
                                  An item
                                </li>
                                <li className="list-group-item me-2 border border-black">
                                  A second item
                                </li>
                                <li className="list-group-item me-2 border border-black">
                                  A third item
                                </li>
                                <li className="list-group-item border border-black">
                                  A third item
                                </li>
                              </ul>
                              <i className="fa-solid fa-location-dot col-4 text-danger">
                                <span className="ps-3 text-black fs-5">
                                  تهران
                                </span>
                              </i>
                            </div>
                            <div className="container row border border-black p-3 mb-3">
                              <h3 className="col-8 pb-3">معلم</h3>
                              <i className="fa-solid fa-venus-mars col-4 text-danger">
                                <span className="ps-3 text-black fs-5">
                                  مرد / زن
                                </span>
                              </i>
                              <ul className="list-group list-group-horizontal col-8">
                                <li className="list-group-item me-2 border border-black">
                                  An item
                                </li>
                                <li className="list-group-item me-2 border border-black">
                                  A second item
                                </li>
                                <li className="list-group-item me-2 border border-black">
                                  A third item
                                </li>
                                <li className="list-group-item border border-black">
                                  A third item
                                </li>
                              </ul>
                              <i className="fa-solid fa-location-dot col-4 text-danger">
                                <span className="ps-3 text-black fs-5">
                                  تهران
                                </span>
                              </i>
                            </div>
                            <div className="container row border border-black p-3 mb-3">
                              <h3 className="col-8 pb-3">معلم</h3>
                              <i className="fa-solid fa-venus-mars col-4 text-danger">
                                <span className="ps-3 text-black fs-5">
                                  مرد / زن
                                </span>
                              </i>
                              <ul className="list-group list-group-horizontal col-8">
                                <li className="list-group-item me-2 border border-black">
                                  An item
                                </li>
                                <li className="list-group-item me-2 border border-black">
                                  A second item
                                </li>
                                <li className="list-group-item me-2 border border-black">
                                  A third item
                                </li>
                                <li className="list-group-item border border-black">
                                  A third item
                                </li>
                              </ul>
                              <i className="fa-solid fa-location-dot col-4 text-danger">
                                <span className="ps-3 text-black fs-5">
                                  تهران
                                </span>
                              </i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item mb-3 border border-black">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed fs-4 bg-info-subtle"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#Two"
                            aria-expanded="false"
                            aria-controls="Two"
                          >
                            دبستان دوره دوم
                          </button>
                        </h2>
                        <div id="Two" className="accordion-collapse collapse">
                          <div className="accordion-body">
                            <strong>
                              This is the second item's accordion body.
                            </strong>
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. It's also worth noting that just about
                            any HTML can go within the
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item border border-black mb-3">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed fs-4 bg-info-subtle"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#Three"
                            aria-expanded="false"
                            aria-controls="Three"
                          >
                            متوسطه دوره اول
                          </button>
                        </h2>
                        <div id="Three" className="accordion-collapse collapse">
                          <div className="accordion-body">
                            <strong>
                              This is the third item's accordion body.
                            </strong>
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. It's also worth noting that just about
                            any HTML can go within the
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item border border-black">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed fs-4 bg-info-subtle"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#Four"
                            aria-expanded="false"
                            aria-controls="Four"
                          >
                            متوسطه دوره دوم
                          </button>
                        </h2>
                        <div id="Four" className="accordion-collapse collapse">
                          <div className="accordion-body">
                            <strong>
                              This is the third item's accordion body.
                            </strong>
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classNamees that we use to
                            style each element. These classNamees control the
                            overall appearance, as well as the showing and
                            hiding via CSS transitions. You can modify any of
                            this with custom CSS or overriding our default
                            variables. It's also worth noting that just about
                            any HTML can go within the
                            <code>.accordion-body</code>, though the transition
                            does limit overflow.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item border border-black">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed fs-4 bg-info"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    اجرایی
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>{" "}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element.
                    These classNamees control the overall appearance, as well as
                    the showing and hiding via CSS transitions. You can modify
                    any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML
                    can go within the
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default JobPosation;
