import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import './css/custom.css';

function Index() {
    return (
        <div className="cotainer">
            <div className="row">
                <div className="col-md-4" />
                <div className="col-md-4">
                    <div className="card w-75 mx-auto text-center mt-4 custom__card__style shadow p-2">
                        <div className="card-body d-flex align-items-center ">
                            <img
                                src="https://cdn.pixabay.com/photo/2021/02/06/08/54/man-5987375__340.jpg"
                                alt=""
                                className="custom__img"
                            />
                            <input
                                type="text"
                                className="border border-2 w-100 ms-3 p-2 input__round"
                                placeholder="What's on Your mind...?"
                            />
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="col-md-4" />
            </div>
        </div>
    );
}

export default Index;

render(<Index />, document.getElementById('root'));
