<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Bravo 3leek</title>
  <meta name="description" content="Bravo 3leeeeeeeeeeeeeeeeeeek">
  <meta name="author" content="SitePoint">
<style>
  body {
    background-color: gray;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 200px;
  }
  .question {
    color: white;
    font-size: 180%;
  }
  .btn {
  background-color: #f4511e;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 0.6;
  transition: 0.3s;
}
video {
  position: fixed;
  top: 0;
  width: 100%; 
  height: 100%;
  object-fit: contain;
  
}
.image {
  position: fixed;
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 80%;
  z-index: -1;
}
.hide {
  display: none !important;
}
.btn:hover {opacity: 1}
@media (max-width: 768px) {
  body {
    padding-top: 130px;
  }
  .textfield {
    width: 80%;
  }
}
.textfield {
border: none; 
color: #f4511e;
width: 200px;
height: 100px; 
padding: 10px;
font-size: 20px;
overflow: hidden;
border-radius: 10px;
opacity: 80%;
}
.mylable {
  font-size: 120%;
  color: white;
  margin-top: 10px;
}
.dev{
  position: fixed;
  bottom: 10px;
  color: white;
}
.icon {
  width: 20px;
  height: 20px;
  margin: 10px;
  margin-bottom: -5px;
  margin-right: 5px;
}
</style>
</head>

<body>
  <div class="question">ايه الانجاز اللي عملته النهاردة ؟</div><br><br>
  <input placeholder="....." type="text" class='textfield'></input>
  <br>
  <button class='btn'>Submit</button>
  <div class="dev">Developed By: <em>Ehab Hosam</em><a href="https://twitter.com/ehab7osam"><img class='icon' src="/twitter.png"></a><a href="https://www.instagram.com/ehab7osam/"><img class='icon' src="/insta.png" ></a></div>
  <div class="hide mylable">اكتب يسطا متخمش</div>
  <video src="/video.mp4" controls class='hide bravo'></video>
  <video src="/video2.mp4" controls class='hide bravo2'></video>
  <video src="/video3.mp4" controls class='hide bravo3'></video>
  <video src="/video4.mp4" controls class='hide bravo4'></video>
  <script>
    const videos = ['bravo', 'bravo2', 'bravo3', 'bravo4'];
    document.querySelector('.btn').addEventListener('click', ()=>{
      if (document.querySelector('input').value == '') {
        document.querySelector('.mylable').classList.remove('hide');
      }
      else 
        {
          const vidclass = videos[Math.floor(Math.random() * videos.length)];
          const bravo = document.querySelector(`.${vidclass}`);
          document.querySelector('.mylable').classList.add('hide');
          document.querySelector('input').value = '';
          bravo.classList.remove('hide');
          bravo.currentTime = 0;
          bravo.play();
        }
    })
    videos.forEach(v=>{
      const bravo = document.querySelector(`.${v}`);
      bravo.addEventListener('ended', ()=>{
      bravo.classList.add('hide');
    })
    bravo.addEventListener('pause', ()=>{
      bravo.classList.add('hide');
    })
    })
    
  </script>
  
</body>
</html>
