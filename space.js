body {
    height:100vh;width:100vw;
    display:flex;
    overflow:hidden;
    padding:0;
    margin:0;
    background-color:#fff;
    background-image:url('https://i.imgur.com/zm1QRVD.jpeg');
    background-size:100vw 100vh;
}
#canvas{
    height:100vh;width:100vw;
    margin:0;
    z-index:0;
}
#score{
    position:absolute;
    color:#fff;
    top:5px;left:5px;
    font-size:20px;
}
#life{
    color:#fff;
    position:absolute;
    top:5px;
    right:200px;
}
#loader{
    height:50px;width:300px;
    background-color:#aeacac;
    position:absolute;
    top:50%;left:50%;
    transform:translate(-50%,-50%);
    overflow:hidden;
    display:flex;
    text-align:center;
    align-items:center;
    justify-content:center;
    border-radius:10px;
    font-size:40px;
    border:1px solid #0ff;
    color:#fff;
}
.innerLoader{
    position:absolute;
    height:50px;width:300px;
    background-color:#8cff6c;
    margin-left:0px;
    animation:move 6s 1 ease;
    z-index:0;
}
.loaderText{
    z-index:1;
}
@keyframes move{
    from{left:-300px;}
    to{left:0px;}
}
#start{
      height:50px;
      width:200px;
      background-color:none;
      color:#fff;
      display:flex;
      text-align:center;
      align-items:center;
      justify-content:center;
      position:absolute;
      top:50%;left:50%;
      transform:translate(-50%,-50%);
      border:2px solid #0ff;
      box-shadow:0px 0px 10px #0ff;
      border-radius:100px;
      visibility:hidden;
      z-index:1;
}
