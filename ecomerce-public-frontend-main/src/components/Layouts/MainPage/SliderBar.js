import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderData from './SliderData';
function SliderBar() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ margin: "0px" }}>{dots}</ul>
        },
    };
    return (
        <div className="slider col-sm-12 col-md-9 col-lg-9">
            <Slider {...settings}>
                {SliderData.map((item) => {
                    return (
                        <div className="slider-wrapper d-flex" key={item.id}>
                            <div className="slider-content">
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                                <button>Views Collections</button>
                            </div>
                            <div className="slider-image">
                                <img src={item.cover} alt="" />
                            </div>
                        </div>
                    );

                })}
            </Slider>
        </div>
    );
}

export default SliderBar;