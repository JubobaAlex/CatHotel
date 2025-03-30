import React from 'react'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
import './Home.css';


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    
  };

  return (
    <div>
      <div className='img_div'>
        <img src='/img.jpg' alt="Дом мечты" /> 
        <h1 className='text_img'>Отпуск в доме вашей мечты</h1>
        <a className='buy' href='/buy'>Забронировать</a>
      </div>

      <div className='slider_container'> 
        <Slider {...settings}>
          <div>
            <img src='./public/hotel1.jpg' />
          </div>
          <div>
          <img src='./public/hotel2.jpg' />
          </div>
          <div>
          <img src='./public/hotel3.jpg' />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;