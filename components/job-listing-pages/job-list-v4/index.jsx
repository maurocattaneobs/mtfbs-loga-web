import FooterDefault from "../../footer/common-footer";
import LoginPopup from "../../common/form/login/LoginPopup";
import DefaulHeader from "../../header/DefaulHeader";
import Breadcrumb from "../../common/Breadcrumb";
import FilterJobBox from "./FilterJobBox";
import CallToAction from "../../call-to-action/CallToAction";

function index({ jobs }) {
  return (
    <>
      {/* <!-- Header Span --> */}
      <span className="header-span"></span>

      <LoginPopup />
      {/* End Login Popup Modal */}

      <DefaulHeader />
      {/* End Header with upload cv btn */}

      <Breadcrumb title="Elenco posizioni aperte" meta="posizioni aperte" />
      {/* <!--End Breadcrumb Start--> */}

      <section className="ls-section">
        <div className="auto-container">
          <div className="row mb-5">
            <div className="content-column col-lg-12">
              <FilterJobBox jobs={jobs} />
            </div>
            {/* <!-- End Content Column --> */}
          </div>
          {/* End row */}

          <CallToAction />
          {/* End calltoAction */}
        </div>
        {/* End container */}
      </section>
      {/* <!--End Listing Page Section --> */}

      <FooterDefault footerStyle="alternate5" />
      {/* <!-- End Main Footer --> */}
    </>
  );
}

export default index;
