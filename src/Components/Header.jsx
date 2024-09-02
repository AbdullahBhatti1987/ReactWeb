import { Button, MegaMenu, Navbar } from "flowbite-react";

function Header({className}) {
  return (
    <MegaMenu className={`${className}`}>
      <div className=" mx-auto flex 2xl:w-11/12 sm:w-full flex-wrap items-center justify-between p-4 md:space-x-8">
        <Navbar.Brand href="/" className="col-3">
          <img alt="" src="../../images/logo.png" className="mr-3 h-6 sm:h-9" />
        </Navbar.Brand>
        <div className="order-2 hidden items-center md:flex">
          <a
            href="#"
            className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"
          >
            Login
          </a>
          <Button href="#">Sign up</Button>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" className="">HOME</Navbar.Link >
          <Navbar.Link>
            <MegaMenu.Dropdown toggle={<>PAGE</>}>
              <ul className="grid grid-cols-2">
                <div className="space-y-4 p-4">
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Library
                    </a>
                  </li>
                </div>
              </ul>
            </MegaMenu.Dropdown>
          </Navbar.Link>
          <Navbar.Link>
            <MegaMenu.Dropdown toggle={<>ABOUT</>}>
              <ul className="grid grid-cols-2">
                <div className="space-y-4 p-4">
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Library
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      About Us
                    </a>
                  </li>
                </div>
              </ul>
            </MegaMenu.Dropdown>
          </Navbar.Link>
          <Navbar.Link>
            <MegaMenu.Dropdown toggle={<>DESGINER</>}>
              <ul className="grid grid-cols-2">
                <div className="space-y-4 p-4">
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Library
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      About Us
                    </a>
                  </li>
                </div>
              </ul>
            </MegaMenu.Dropdown>
          </Navbar.Link>
          <Navbar.Link>
            <MegaMenu.Dropdown toggle={<>STORE</>}>
              <ul className="grid grid-cols-2">
                <div className="space-y-4 p-4">
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Library
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      About Us
                    </a>
                  </li>
                </div>
              </ul>
            </MegaMenu.Dropdown>
          </Navbar.Link>
          <Navbar.Link href="#">CONTACT</Navbar.Link>
        </Navbar.Collapse>
      </div>
    </MegaMenu>
  );
}
export default Header;
