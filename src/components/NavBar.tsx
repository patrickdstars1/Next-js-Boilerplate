import React from "react";

const NavBar: React.FC = () => {
  return (
    <div className="fixed top-0 w-full bg-purple-900 border-b border-purple-800 shadow-md text-purple-300 font-sans text-base leading-normal box-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* <button
                        id="sideNavButton"
                        className="text-purple-300 focus:outline-none"
                        aria-label="Toggle Side Navigation"
                    >
                        <i className="material-icons icon-va-8 p-lnr-8">menu</i>
                    </button> */}
            <a href="https://pantip.com/" className="ml-2">
              <img
                src="https://ptcdn.info/mobile/logo-mobile-pantip-white.png"
                alt="pantip-logo"
                className="h-8"
              />
            </a>
            <div className="flex items-center mr-4 ml-40">
              <input
                type="text"
                id="search-box"
                className="search-box bg-purple-800 text-white placeholder-white px-4 py-2 rounded-md focus:outline-none w-96"
                placeholder="ค้นหาบน Pantip"
                autoComplete="off"
                maxLength={256}
              />
              <i className="material-icons md-18 icon-va-6 text-purple-300 w-8 h-8">
                <img
                  src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
                  alt=""
                />
              </i>
            </div>
          </div>
          <div className="flex items-center">
            <a href="https://pantip.com/forum/new_topic" className="">
              <i className="pantip-icons pt-ic-add_post icon-va-6 icolor-primary"></i>
              <span className="ml-2 pt-lg-hide">ตั้งกระทู้</span>
            </a>
            <a
              href="#"
              className="ml-4 pt-sm-hide text-purple-300 flex items-center"
            >
              <i className="pantip-icons pt-top-nav-communities pt-ic-pantip_communities icon-va-6 icolor-primary"></i>
              <span className="ml-2 pt-lg-hide">คอมมูนิตี้</span>
            </a>
            <a
              href="#"
              className="ml-4 pt-md-hide text-purple-300 flex items-center"
            >
              เข้าสู่ระบบ / สมัครสมาชิก
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NavBar };
