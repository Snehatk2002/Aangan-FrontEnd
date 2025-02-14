import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBBtn
} from "mdb-react-ui-kit";

const Navbar = () => {
  const [openNavColor, setOpenNavColor] = useState(false);
  const navigate = useNavigate();

  const LogOut = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <MDBNavbar expand="lg" dark bgColor="warning">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#">AanganCare</MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNavColor(!openNavColor)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse open={openNavColor} navbar>
          <MDBNavbarNav className="me-auto mb-2 mb-lg-0">

            {/* Children Dropdown */}
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link">
                  Children
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href="/vaccination">
                    Vaccination
                  </MDBDropdownItem>
                  <MDBDropdownItem link href="/nutrition">
                    Nutrition
                  </MDBDropdownItem>
                  <MDBDropdownItem link href="/nutritionvideo">
                    How to Use Nutrition
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            {/* Pregnant Women */}
            <MDBNavbarItem>
              <MDBNavbarLink href="#">Pregnant Women</MDBNavbarLink>
            </MDBNavbarItem>

            {/* Teenagers Dropdown */}
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link">
                  Teenagers
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href="/educationalvideo">
                    Educational Videos
                  </MDBDropdownItem>
                  <MDBDropdownItem link href="/concerns">
                    Concerns
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            {/* Other Links */}
            <MDBNavbarItem>
              <MDBNavbarLink href="/book">Vaccination Slot Booking</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/feedback">Feedback</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          {/* Logout Button */}
          <MDBBtn color="danger" onClick={LogOut}>
            Logout
          </MDBBtn>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;
