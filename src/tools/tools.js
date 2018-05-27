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
function getCoords (el, event) {
  let dim = el.getBoundingClientRect();
  return {
    x_: event.clientX - dim.left,
    y_: event.clientY - dim.top
  };
}
function resizeImage (img_, canvas_) {
  let winSize = getWinSizeInitial(window);
  let heightDel = 55;
  let widthDel = getScrollbarWidth();
  let ratioWin = winSize.winHeight / winSize.winWidth;
  let imgHeight = img_.height;
  let imgWidth = img_.width;
  let ratioPic = imgHeight / imgWidth;

  if ((ratioWin < 1) && (ratioPic >= 1)) {
    img_.style.height = (winSize.winHeight - heightDel) + 'px';
    img_.style.width = 'auto';
  } else if ((ratioWin > 1) && (ratioPic <= 1)) {
    img_.style.height = 'auto';
    img_.style.width = (winSize.winWidth - widthDel) + 'px';
  } else if ((ratioWin < 1) && (ratioPic < 1)) {
    if (ratioWin > ratioPic) {
      img_.style.height = 'auto';
      img_.style.width = (winSize.winWidth - widthDel) + 'px';
    } else {
      img_.style.height = winSize.winHeight - heightDel + 'px';
      img_.style.width = 'auto';
    }
  } else if ((ratioWin > 1) && (ratioPic > 1)) {
    if (ratioWin > ratioPic) {
      img_.style.height = 'auto';
      img_.style.width = (winSize.winWidth - widthDel) + 'px';
    } else {
      img_.style.height = winSize.winHeight - heightDel + 'px';
      img_.style.width = 'auto';
    }
  }

  canvas_.style.height = img_.offsetHeight + 'px';
  canvas_.style.width = img_.offsetWidth + 'px';
}
function getScrollbarWidth () {
  let outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

  document.body.appendChild(outer);

  let widthNoScroll = outer.offsetWidth;
  // force scrollbars
  outer.style.overflow = "scroll";

  // add innerdiv
  let inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);

  let widthWithScroll = inner.offsetWidth;

  // remove divs
  outer.parentNode.removeChild(outer);

  return widthNoScroll - widthWithScroll;
}

export {getWinSize, getWinSizeInitial, getCoords, resizeImage};
