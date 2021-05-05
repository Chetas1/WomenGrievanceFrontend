import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="black" className="page-footer font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="12">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Women Grievance
            </h5>
            <p>
              In order to maintain safety and security to the girls and women, a cell has been constituted for redressal of
              grievances. Our women grievance cell stays alert all the time to prevent sexual abuse.
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
         
        </MDBRow>
      </MDBContainer>
      <hr />
      
     
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-fb mx-1">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-tw mx-1">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-gplus mx-1">
              <i className="fab fa-google-plus"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-li mx-1">
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn-floating btn-sm btn-dribbble mx-1">
              <i className="fab fa-dribbble"> </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a target="_blank" href="http://www.hvpmcoet.in"> WomenGrievance </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;