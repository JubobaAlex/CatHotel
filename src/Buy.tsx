import './Buy.css'
import { useState } from 'react';

const Buy = () => {
    const [state, setState] = useState('')
    
    function Check() {
        if(state.trim() === ''){
            alert("Введите номер телефона")
        }
        else{
            alert('Ожидайте звонок')
        }
    }
    return(
        <div>
            <div className='div_buy'>
                <img src='./public/lapa.jpg'/>
            
                <div className='div_text_buy'>
                <b >Ваш номер телефона:</b>
                <input value={state} onChange={(e) => setState(e.target.value)}  type='text'></input>
                <button className='btn' onClick={Check}  >Забронировать</button>
                </div>
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
        </div>
    )
}
export default Buy