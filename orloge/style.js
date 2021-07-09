* {
    margin: 0;
    padding:0;
}

body {
    background: #131416;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.clock {
background: azure;
border: 5px solid white;
border-radius: 50%;
}

.wrap {
width: 350px;
height: 350px;
position: relative;
}

.minute, .heure {
position: absolute;
height: 100px;width: 6px;
background: black;
margin: auto;
top: -27%;
left: 0;
bottom: 0;
right: 0;
transform-origin: bottom center;
transform:rotate(0deg);
box-shadow: 0 0 10px rgba(0,0,0,-4);
}

.minute {
    position: absolute;
    height: 130px;
    width: 4px;
    top: -38%;
    left: 0;
    right: 0;
    transform: rotate(90deg);
}

.seconde {
    position: absolute;
    height: 90px;
    width: 2px;
    margin: auto;
    left: 0;
    bottom: 0;
    right: 0;
    top: -26%;
    background: #ff4b3e;
    transform-origin: bottom center;
    transform: rotate(180deg); 
}

.point {
   position: absolute;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
    width: 12px;
    height: 12px;
    background: white;
    margin: auto;
    border: solid 2px #1b1b1b;
    border-radius: 50%;
    
}