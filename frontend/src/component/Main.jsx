import React from 'react'
import "./Main.css"
import profile from "../img/profile.png"
import tab from "../img/bg-tab.png"
import bg from "../img/background.jpeg"
import bird from "../img/bird.jpeg"
import btnAdd from "../img/btnAdd.png"
import btnPlay from "../img/btnPlay.png"
import btnTest from "../img/btnTest.png"
import cactus from "../img/cactus.png"
import fish from "../img/fish.jpeg"
import history from "../img/history.png"
import language from "../img/language.png"
import logout from "../img/log-out.png"
// import mushroom from "../mushroom.png"
import panguin from "../img/panguin.png"
import popo from "../img/popo.jpg"
import setting from "../img/setting.png"
import snow from "../img/snow.png"
import sound from "../img/snow.png"
import treasury from "../img/treasury.png"

function Main() {
  return (
    <>
      <div id="root">
        <h1 class="main-page">User name</h1>
        <p class="main-page" id="point">point : 100 </p>
        <img src={profile} id="profile" />
        {/* <div  className="GeeksForGeeks" ></div> */}
        <div className='bg-tab'></div>
        {/* <div id="lol" src={popo}></div> */}

        <div class="tab">
          <img id="bg-tab" src={tab} weight="50px" height="500px"/> 
          <img id="treasury" src={treasury} weight="50px" height="50px"/>
          <p class="tab-text" id="treasury-text">คลัง</p>
          <img id="history" src={history} weight="50px" height="50px"/>
          <p class="tab-text" id="history-text">ประวัติ</p>
          <img id="setting" src={setting} weight="50px" height="50px"/>
          <p class="tab-text" id="setting-text">ตั่งค่า</p>
          <img id="log-out" src={logout} weight="50px" height="50px"/>
          <p class="tab-text" id="log-out-text">ออกจากระบบ</p>
        </div>
    
        <div class="center">
          <img id="play" src={btnPlay.png} weight="50px" height="500px"/>
          <img id="add" src={btnAdd.png} weight="50px" height="350px"/>
          <img id="test" src={btnTest.png} weight="20px" height="300px"/>
        </div>
      </div>

      
  </>
  )
}

export default Main