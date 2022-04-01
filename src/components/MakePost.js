import '../css/custom.css';
import emojiIcon from '../img/happy.svg';
import imgIcon from '../img/images.svg';
import liveVideoIcon from '../img/live-video.svg';
import PostCard from './PostCard';

function MakePost() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-6">
          <div className="card mx-auto text-center mt-4 custom__card__style shadow p-2 custon__Card__class">
            <div className="card-body d-flex align-items-center ">
              <img
                src="https://cdn.pixabay.com/photo/2021/02/06/08/54/man-5987375__340.jpg"
                alt=""
                className="custom__img"
              />
              <input
                type="text"
                className=" w-100 ms-3 p-2 input__round"
                placeholder="What's on Your mind...?"
              />
            </div>
            <hr />
            <div className=" align-items-center justify-content-between">
              <div className=".row d-flex align-items-center justify-content-between">
                <div className="col-md-4 d-flex align-items-center justify-content-center custom__colum_hover">
                  <span>
                    <img src={liveVideoIcon} alt="" className="svg__icon" />
                  </span>
                  <p className="mt-3 ms-2 fw-bold">Live Video</p>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-center custom__colum_hover">
                  <span>
                    <img src={imgIcon} alt="" className="svg__icon" />
                  </span>
                  <p className="mt-3 ms-2 fw-bold ">Photo/Video</p>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-center custom__colum_hover">
                  <span>
                    <img src={emojiIcon} alt="" className="svg__icon" />
                  </span>
                  <p className="mt-3 ms-2 fw-bold">Feeling/Activity</p>
                </div>
              </div>
            </div>
          </div>
          <PostCard />
        </div>
        <div className="col-md-3" />
      </div>
    </div>
  );
}

export default MakePost;
