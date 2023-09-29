
// function drop(event){
//     event.preventDefault();
//     event.target.appendChilde(dragableElem);
// }
// var dragableElem;
// function dragStart(dragableImg){
//     dragableElem = dragableImg ;
// }
var dragArr = [
  ['camel-removebg-preview.png' ,'cat-removebg-preview.png' , 'frog-removebg-preview.png'],
  ['cat-removebg-preview.png' , 'dog-removebg-preview.png' , 'lionWhite.png'],
  ['horseWhite.png' , 'fox-removebg-preview.png' ,'bear-removebg-preview.png'],
  ['frogWhite.png' , 'sheep-removebg-preview.png' ,'fox-removebg-preview.png'],
];

var dragDivImg = document.getElementById('dragImg');
function changeDragImg(par1 , par2 , par3){
  var img1 = document.createElement('img');
  var img2 = document.createElement('img');
  var img3 = document.createElement('img');
  // img1.setAttribute('src',`${assets}/${imgs}/${dragArr[0][0]}`);
  // img2.setAttribute('src',`${assets}/${imgs}/${dragArr[0][1]}`);
  // img3.setAttribute('src',`${assets}/${imgs}/${dragArr[0][2]}`);
  img1.setAttribute('src',par1);
  img2.setAttribute('src',par2);
  img2.setAttribute('id','animalDragImg')
  img2.setAttribute('draggable','true')
  document.images.draggble
  img3.setAttribute('src',par3);
  dragDivImg.appendChild(img1);
  dragDivImg.appendChild(img2);
  dragDivImg.appendChild(img3);
};

window.onload=function () {
  changeDragImg(`${assets}/${imgs}/${dragArr[0][0]}`,
  `${assets}/${imgs}/${dragArr[0][1]}`,
  `${assets}/${imgs}/${dragArr[0][2]}`
  )
}

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("draggableID", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
  
    var data = ev.dataTransfer.getData("draggableID");
    if(data=="animalDragImg")

      ev.target.appendChild(document.getElementById(data));

      changeDragImg(`${assets}/${imgs}/${dragArr[1][0]}`,
      `${assets}/${imgs}/${dragArr[1][1]}`,
      `${assets}/${imgs}/${dragArr[1][2]}`
      )
  }

  var imgId = document.getElementById('dropImg');
  function changeImg(){
    imgId.style.backgroundImage = `url(${assets}/${imgs}/${dropArr[0]})`;
  }


  // imgId.addEventListener('dragover' , function(){
  //   this.preventDefault();
  // });


  // imgId.addEventListener('drop',function(){
  //   this.preventDefault(); 
    
  //   var data = ev.dataTransfer.getData("draggableID");
  //   if(data=="animalDragImg")
  //   {ev.target.appendChild(document.getElementById(data));}



  // });


  // var evImg = document.getElementById('animalDragImg');
  // evImg.addEventListener('dragstart', function(){
  //   //draggable="true";
  //    ev.dataTransfer.setData("draggableID", ev.target.id);

  // });

 



  // ---------------------

  //var dropArr = ['../assets/images/catWhite.png' , '../assets/images/lionWhite.png' ,
  // '../assets/images/horse.jpg' , '../assets/images/frogWhite.png'];
 
  // var img = new Image();
  // var imgSrc= img.src= '../assets/images/catWhite.png'; samir
  

  var assets = 'assets';
  var imgs = 'images';
var dropArr = ['catWhite.png' , 'lionWhite.png' , 'horse.jpg' , 'frogWhite.png' ];
 

  // ------------------------------ دي كدا اول خطوةخليت الديف تسمح انه يحصلها دروب

//  var imgId = document.querySelector('.dropImg') samir


//  imgId.addEventListener('drop',function(){
//   this.preventDefault();
//  });
// var counter = 0 ;



  // imgId.style.backgroundImage = `url(${imgSrc})`; samir
  // imgId.style.backgroundImage = `url(${assets}/${imgs}/${dropArr[0]})`;   sssssssssssssssssssssssssssssssssssssssss
  // imgId.style.backgroundImage = 'url("../assets/images/catWhite.png")'










/////////////////////////////

  // var str = document.getElementById('btnStart');
  // str.addEventListener('click', function(){
  //   var dropDiv = document.getElementById('dropImg');
  //   dropDiv.addEventListener('dragover',function(){
  //     ev.preventDefault();
  //     //preventDefault();
  //     this.addEventListener('drop',function(){
  //       ev.preventDefault();
  //     //preventDefault();
  //     });

  //   });
  // });

  ////////////////////////////////
  // var str = document.getElementById('btnStart')
  // str.addEventListener('click',function(){
  //   // var backgrondImg = document.getElementById('dropImg');
  //   // for(var i=0 ; i<1 ; i++){
  //   //   backgrondImg.style.background = "url'dropArr[i]'"
  //   // }
  //   var pp = document.createElement('p')
  //   pp.innerHTML='lkj;lm,'
  //   pp.append
   
  // });
