import React, { useState, useRef } from "react";
import "./App.css";
import {
  image1,
  image2,
  image3,
  image4,
  logo,
  logo2,
  p1,
  p4,
} from "./assets/images";

import Carousel from "react-simply-carousel";

function App() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [selectNav, setSelectNav] = useState({
    title: "MOUNTAIN 1",
    id: 1,
  });
  const historyRef = useRef(null);
  const mountainRef = useRef(null);

  const scrollToHistory = () => historyRef.current.scrollIntoView();
  const scrollMountain = () => mountainRef.current.scrollIntoView();
  const mounArr = [
    {
      title: "MOUNTAIN 1",
      id: 1,
    },
    {
      title: "MOUNTAIN 2",
      id: 2,
    },
  ];

  const sechduleArr = [
    {
      id: 1,
      date: "25 Nov 2016",
    },
    {
      id: 2,
      date: "28 Nov 2016",
    },
    {
      id: 2,
      date: "18 Dec 2016",
    },
    {
      id: 3,
      date: "7 Jan 2016",
    },
  ];

  return (
    <div className="main-container">
      <div
        className="back-ground"
        style={{
          backgroundImage: `url(${image1})`,
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <div className="top-nav">
          <p onClick={scrollToHistory}>01.History</p>
          <p onClick={scrollMountain} style={{ marginLeft: "4rem" }}>
            02.Team
          </p>
        </div>
        {/* <img src={image1} /> */}
        <div style={{ height: "825px" }}></div>
      </div>
      <div className="logo-container">
        <img src={logo} />
        <div style={{ marginRight: "0" }} className="top-nav">
          <p onClick={scrollToHistory} style={{ color: "#3a506cff" }}>
            01.History
          </p>
          <p
            onClick={scrollMountain}
            style={{ marginLeft: "4rem", color: "#3a506cff" }}
          >
            02.Team
          </p>
        </div>
      </div>
      <div
        className="back-ground"
        style={{
          backgroundImage: `url(${image2})`,
          marginTop: "1.5rem",
        }}
      >
        <div ref={historyRef} className="_01-history-main-container">
          <div className="_01-history-container">
            <h1>01</h1>
            <div className="history-title-main-container">
              <h2>HISTORY</h2>
              <div className="small-box"></div>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus
            est. Nullam purus ex, iaculis sed erat sed, blandit tincidunt quam.
            Cras scelerisque id quam sed dignissim Pellentesque urna nunc,
            gravida quis hendrerit ac, tristique ut quam. Vivamus suscipit
            dignissim tortor nec congue.
          </p>
        </div>
        <div style={{ height: "825px" }}></div>
      </div>
      <div
        className="back-ground"
        style={{
          backgroundImage: `url(${image3})`,
        }}
      >
        <Carousel
          innerProps={{
            style: {
              marginTop: "2rem",
              maxWidth: "80%",
              minWidth: "60%",
              marginBottom: "3.5rem",
              gap: "2rem",
            },
          }}
          dotsNav={{
            show: true,

            itemBtnProps: {
              style: {
                height: 5,
                width: 5,
                borderRadius: "10%",
                border: 0,
                background: "rgba(225,225,225,0.3)",
                marginLeft: "1rem",
                marginBottom: "2rem",
              },
            },
            activeItemBtnProps: {
              style: {
                height: 5,
                width: 5,
                borderRadius: "10%",
                border: 0,
                background: "white",
                marginBottom: "2rem",
              },
            },
          }}
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          infinite={false}
          itemsToScroll={1}
          forwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: "center",
              background: "transparent",
              border: "none",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 30,
            },
            // children: <span>{`>`}</span>,
          }}
          backwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: "center",
              background: "transparent",
              border: "none",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 30,
            },
            // children: <span>{`<`}</span>,
          }}
          responsiveProps={[
            {
              itemsToShow: 2,
              itemsToScroll: 2,
              minWidth: 768,
            },
          ]}
          speed={400}
          easing="linear"
        >
          {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
          <div key={1} className="carousal-image">
            <img src={p1} />
          </div>
          <div key={2} className="carousal-image">
            <img src={p4} />
          </div>
          <div key={3} className="carousal-image">
            <img src={p1} />
          </div>
          <div key={4} className="carousal-image">
            <img src={p4} />
          </div>
        </Carousel>
        <div style={{ height: "0px" }}></div>
      </div>
      <div
        ref={mountainRef}
        style={{ alignItems: "center" }}
        className="_02-history-main-container"
      >
        <div className="_01-history-container">
          <h1 style={{ color: "#9ca7b6ff" }}>02</h1>
          <div className="history-title-main-container">
            <h2 style={{ color: "#3a506cff" }}>CLIMB</h2>
            <div
              style={{ background: "#9ca7b6ff" }}
              className="small-box"
            ></div>
          </div>
          <p style={{ marginLeft: "2rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
            ante viverra, rutrum erat rutrum, consectetur mi. Proin at maximus
            est.
          </p>
        </div>
      </div>
      <div className="mountain-navbar-main-container">
        <div className="mountain-navbar">
          {mounArr.map((item) => (
            <h1
              onClick={() => setSelectNav(item)}
              style={{
                backgroundColor:
                  selectNav.title == item.title ? "#9ca7b6ff" : "#3a506cff",
                color:
                  selectNav.title == item.title ? "#3a506cff" : "#9ca7b6ff",
              }}
            >
              {item.title}
            </h1>
          ))}
        </div>
      </div>
      <div
        className="back-ground"
        style={{
          backgroundImage: `url(${image4})`,
          width: "100%",
        }}
      >
        <div
          style={{
            height: "586px",
            width: "100%",
            background: "rgba(58, 80, 108, 0.3)",
          }}
        >
          {selectNav.title == "MOUNTAIN 1" && (
            <div className="mountain-list-main-container">
              <h1>SCHEDULE</h1>
              {sechduleArr.map((item) => (
                <div className="mountain-list-container">
                  <p>{item.date}</p>
                  <p> Vestibulum viverra</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="footer">
        <img src={logo2} />
        <p>COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
}

export default App;
