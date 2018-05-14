function getWinSize (document) {
  let winHeight_ = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  let winWidth_ = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
  );
  return {
    winHeight: winHeight_,
    winWidth: winWidth_
  };
}
function getWinSizeInitial (document) {
  return {
    winHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    winWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  };
}
function getCoords(el, event) {
  let dim = el.getBoundingClientRect();
  return {
    x_: event.clientX - dim.left,
    y_: event.clientY - dim.top
  }
}
function resizeImage(img_, canvas_){
  let winSize = getWinSizeInitial(window);
  let ratioWin = winSize.winHeight / winSize.winWidth;
  let imgHeight = img_.height;
  let imgWidth = img_.width;
  let ratioPic = imgHeight / imgWidth;

  if ((ratioWin < 1) && (ratioPic >= 1)) {
    img_.style.height = (winSize.winHeight - 50) + 'px';
    img_.style.width = 'auto';
  } else if ((ratioWin > 1) && (ratioPic <= 1)) {
    img_.style.height = 'auto';
    img_.style.width = winSize.winWidth + 'px';
  } else if ((ratioWin < 1) && (ratioPic < 1)) {
    if (ratioWin > ratioPic) {
      img_.style.height = 'auto';
      img_.style.width = winSize.winWidth + 'px';
    } else {
      img_.style.height = winSize.winHeight - 50 + 'px';
      img_.style.width = 'auto';
    }
  } else if ((ratioWin > 1) && (ratioPic > 1)) {
    if (ratioWin > ratioPic) {
      img_.style.height = 'auto';
      img_.style.width = winSize.winWidth + 'px';
    } else {
      img_.style.height = winSize.winHeight - 50 + 'px';
      img_.style.width = 'auto';
    }
  }

  canvas_.style.height = img_.offsetHeight + 'px';
  canvas_.style.width = img_.offsetWidth + 'px';
}
//
// function img_position () {
//   let win_height = Math.max(
//     document.body.scrollHeight, document.documentElement.scrollHeight,
//     document.body.offsetHeight, document.documentElement.offsetHeight,
//     document.body.clientHeight, document.documentElement.clientHeight
//     ),
//     win_width = Math.max(
//       document.body.scrollWidth, document.documentElement.scrollWidth,
//       document.body.offsetWidth, document.documentElement.offsetWidth,
//       document.body.clientWidth, document.documentElement.clientWidth
//     ),
//     img_ = document.getElementById('pic-main'),
//     canvas = document.getElementById('mycanvas');
//
//   let img_height = img_.height,
//     img_width = img_.width;
//
//   let ratio_win = win_height / win_width,
//     ratio_pic = img_height / img_width;
//
//   if ((ratio_win < 1) && (ratio_pic >= 1)) {
//     img_.style.height = win_height;
//     img_.style.width = 'auto';
//   } else if ((ratio_win > 1) && (ratio_pic <= 1)) {
//     img_.style.height = 'auto';
//     img_.style.width = win_width;
//   } else if ((ratio_win < 1) && (ratio_pic < 1)) {
//     if (ratio_win > ratio_pic) {
//       img_.style.height = 'auto';
//       img_.style.width = win_width;
//     } else {
//       img_.style.height = win_height;
//       img_.style.width = 'auto';
//     }
//   } else if ((ratio_win > 1) && (ratio_pic > 1)) {
//     if (ratio_win > ratio_pic) {
//       img_.style.height = 'auto';
//       img_.style.width = win_width;
//     } else {
//       img_.style.height = win_height;
//       img_.style.width = 'auto';
//     }
//   }
//
//   canvas.style.height = img_.offsetHeight;
//   canvas.style.width = img_.offsetWidth;
// }
// function load_img(e, paper) {
//
//   let files = e.target.files;
//
//   for (let i = 0, f; f = files[i]; i++) {
//
//     if (!f.type.match('image.*')) {
//       $.Notify({
//         caption: 'Внимание!!!',
//         content: 'Это к сожалению не файл изображения',
//         icon: "<span class='mif-warning'></span>",
//         shadow: true,
//         timeout: 7000,
//         type: 'alert'
//       });
//       continue;
//     }
//     let reader = new FileReader();
//     reader.onload = (function () {
//       return function (e) {
//         document.getElementById('pic-main').style.height = '';
//         document.getElementById('pic-main').style.width = '';
//         document.getElementById('pic-main').src = e.target.result;
//       };
//     })(f);
//     reader.onloadend = function () {
//       img_position();
//     };
//     reader.onerror = function (event) {
//       alert('Файл не загружен. Пожалуйста повторите попытку. Размер загружаемого файло не должен превышать 3 МБ!')
//     };
//     //todo мне сделать индикатор загрузки
//     reader.readAsDataURL(f);
//   }
// }
//
// function addCoords(mouseCoords, dotStr) {
//   return dotStr + ' ' + mouseCoords.left + ',' + mouseCoords.top
// }

export {getWinSize, getWinSizeInitial, getCoords, resizeImage};
