import React,{ useState } from 'react';
import { GoChevronDown } from "react-icons/go";

import '../assets/style/Navbar.scss';
function Navbar () {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 993);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [activeDropdown, setActiveDropdown] = React.useState(null);
  const toggleDropdown = (index) => {setActiveDropdown(activeDropdown === index ? null : index);}
  const [showSearch, setShowSearch] = React.useState(false);
  const toggleSearch = () => {setShowSearch(!showSearch)};
  
  const topNavData = [
    { title: "EN", path:"#" },
    { title: "四健紀念品", path:"#" },
    { title: "活動報名", path:"#" },
    { title: "四健Q&A", path:"#" },
    { title: "招標公告", path:"#" },
    { title: "聯絡我們", path:"#" },
    { title: "我要贊助", path:"#" },
    { title: "登入", path:"#" },
  ];
  const bottomNavData = [
    { title: "關於本協會", path:"#", dropdown: [{ title:"123123455", path: "#" },{ title:"1233455", path: "#" },{ title:"123123455", path: "#" },{ title:"123123455", path: "#" }] },
  { title: "關於四健會", path:"#", dropdown: [{ title:"123", path: "#" },{ title:"123123455", path: "#" }] },
  { title: "最新消息", path:"#", dropdown: [{ title:"123", path: "#" },{ title:"123123455", path: "#" }] },
  { title: "農水文化及水田", path:"#", dropdown: [{ title:"123", path: "#" },{ title:"123123455", path: "#" }] },
  { title: "國際四健", path:"#", dropdown: [{ title:"123", path: "#" },{ title:"123123455", path: "#" }] },
  { title: "四健70週年", path:"#", dropdown: [{ title:"123", path: "#" },{ title:"123123455", path: "#" }] },
  { title: "亞洲四健網絡會議", path:"#"},
];
  
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 993);
      if (window.innerWidth >= 993) setMenuOpen(false)
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  React.useEffect(() => {
    const handleClickOutSide = (e) => {
      if(!e.target.closest('.has-dropdown')){
        setActiveDropdown(null);
      }
    };
      document.addEventListener('click', handleClickOutSide);
      return () => document.removeEventListener('click', handleClickOutSide)
  },[]);
  
  return (
    <>
    <header>
      <div className="navbar">
        <h1><a href="#" className="logo">中華民國四健會協會</a></h1>
        <ul className={`navbar-top ${isMobile?(menuOpen? "active":"hidden"):""}`}>
          {!isMobile && (
            topNavData.map((item, i) => (
              <li className="nav-link" key={i}><a href={item.path}>{item.title}</a></li>
            ))
          )}
        </ul>
        {isMobile && (
          <div className={`menu-toggle ${menuOpen?"open":""}`} onClick={toggleMenu}>
            <span></span>
          </div>
        )}
      </div>
      
      <ul className={`navbar-bottom ${menuOpen ? "active" : ""}`}>
        {bottomNavData.map((item, i) => (<li className={`nav-item ${item.dropdown?"has-dropdown":""} ${activeDropdown === i?"open":""}`} onClick={() => toggleDropdown(i)} key={i}><a href={item.path}>{item.title}{item.dropdown && <GoChevronDown />}</a>
            {item.dropdown && activeDropdown===i && (<ul className="dropdown">
                {item.dropdown.map((subItem, j) => (<li key={j}><a href={subItem.path}>{subItem.title}</a></li>
              ))}
              </ul>
            )}
        </li>
        ))}
        
        {isMobile && (
          <ul className="mobile-top-links">
            <hr />
            {topNavData.map((item, i) => <li className="nav-link" key={i}><a href={item.path}>{item.title}</a></li>)}
          </ul>
        )}
        <i className="fa-solid fa-magnifying-glass" onClick={toggleSearch}></i>
      </ul>
    </header>
      {showSearch && (
        <div className="search-overlay">
          <input type="text" placeholder="輸入搜尋關鍵字..."/>
          <button onClick={toggleSearch}>取消</button>
          <button onClick={toggleSearch}>送出</button>
        </div>
      )}
    </>
  )
}
export default Navbar;
