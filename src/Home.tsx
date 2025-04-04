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
      <br />
      <h2 className='text_info'>Почему мы ?</h2>
      <div className='info'>
        
        <div>
            <h3>Низкие цены</h3>
          <b>Мы работаем напрямую с тысячами отелей, десятками поставщиков и можем контролировать цены на номера. Поэтому у нас всегда есть выгодные предложения на большинство направлений.</b>
        </div>
        <div>
            <h3>Отели по всему миру</h3>
          <b>У нас более 2600000 вариантов размещения по всему миру. Это отели, хостелы, апартаменты, виллы и даже кемпинги. В любой сезон вы найдёте то, что подходит именно вам.</b>
        </div>
        <div>
          <h3>Заботливая поддержка 24/7</h3>
          <b>Операторы поддержки помогут с выбором отеля и бронированием. Если вопрос возник в поездке, оператор будет на связи и найдёт решение в кратчайший срок.</b>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Home;