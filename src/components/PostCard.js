import React from 'react';
import globeImg from '../img/globe.svg';

function PostCard() {
  return (
    <div className="card mt-3 custon__Card__class">
      <div className="card-body">
        <div className="card-title d-flex justify-content-between align-items-center">
          <div className="user d-flex">
            <img
              src="https://cdn.pixabay.com/photo/2017/10/18/11/03/boy-2863701__340.jpg"
              alt="card-img"
              className="custom__img custom__outline"
            />
            <div className="details ms-3">
              <div className="details__name">Md. Anamul Haque</div>
              <div className="details__time d-flex align-items-center">
                <p className="time">2 hrs</p>
                <img src={globeImg} alt="" className="ms-2 globe__icon" />
              </div>
            </div>
          </div>
          <div className="fs-1 d-flex justify-content-center align-items-center rounded-circle dot__custom ">
            <span>...</span>
          </div>
        </div>
        <div className="post__text ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, explicabo iusto a iure
            libero amet minima alias eius quia vel! Ducimus quod repellendus cupiditate repudiandae
            quos asperiores officiis vitae delectus.
          </p>
        </div>
        <div className="post__img__box">
          <img
            src="https://cdn.pixabay.com/photo/2017/10/18/11/03/boy-2863701__340.jpg"
            alt="Post imgt"
            className="post__img card-img"
          />
        </div>
      </div>
    </div>
  );
}

export default PostCard;
