import React from "react";
import "./detail.css";

const detail = () => (
  <div className="detail">
    <div className="user">
      <img src="./avatar.png" alt="" />

      <h3>Ubed khan</h3>
      <p>Lorem ipsum dolor sit.</p>
    </div>

    <div className="info">
      <div className="option">
        <div className="title">
          <span>Chat Setting</span>
          <img src="./arrowUp.png" alt="" />
        </div>
      </div>
      <div className="option">
        <div className="title">
          <span>Chat Setting</span>
          <img src="./arrowUp.png" alt="" />
        </div>
      </div>
      <div className="option">
        <div className="title">
          <span> Privacy & help </span>
          <img src="./arrowUp.png" alt="" />
        </div>
      </div>
      <div className="option">
        <div className="title">
          <span> Shared Photos </span>
          <img src="./arrowDown.png" alt="" />
        </div>
        <div className="photos">
          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://images.pexels.com/photos/24847577/pexels-photo-24847577/free-photo-of-a-wooden-walkway-in-the-fog-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt="" className="download"/>
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img src="https://images.pexels.com/photos/24847577/pexels-photo-24847577/free-photo-of-a-wooden-walkway-in-the-fog-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt=""className="download" />
          </div>
          <div className="photoItem">
            <div className="photoDetail">
              <img
                src="https://images.pexels.com/photos/24847577/pexels-photo-24847577/free-photo-of-a-wooden-walkway-in-the-fog-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="" />
              <span>photo_2024_2.png</span>
            </div>
            <img src="./download.png" alt="" className="download"/>
          </div>
        </div>
      </div>
      <div className="option">
        <div className="title">
          <span> Shared Files</span>
          <img src="./arrowUp.png" alt="" />
        </div>
      </div>
      <button>Block User</button>
    </div>
  </div>
);

export default detail;
