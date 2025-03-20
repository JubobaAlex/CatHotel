import './Home.css'
const Home = () => {
    return (
        <div>
            <header>
        <nav className='window'>
          <div>
              <a href='/'>CatHotel.com</a>
          </div>
        </nav>
      </header>
      <div className='img_div'>
        <img src='./public/img.jpg' />
          <h1 className='text_img'>Отпуск в доме вашей мечты</h1>
        
      </div>
        </div>
    )
}
export default Home