/* Made with Framer
by Pete Lada
www.framerjs.com */

/* Background */
var animSpeed, arrow, cancelSearch, cancelStickySearch, closePhoto, codePlaceholder, container, defaultAnimCurve, endRefresh, header, initRedeem, initScan, initSearch, initStickySearch, limit, logo, logoDefaultAnim, logoReturningAnim, margin, noAnim, photoArea, ptr, ptrBorder, qr, qrButton, redeemText, refresh, reset, resetView, searchBar, searchPlaceholder, smallBounce, spin, startRefresh, startY, store, storeStartY, useCode;

Framer.Device.screen.backgroundColor = "#439FD8";

/* Defaults and variables */

animSpeed = .25;

defaultAnimCurve = "spring(250,25,5)";

smallBounce = "spring(250,25,2)";

margin = 20;

noAnim = {
  curve: "ease",
  time: 0,
  delay: 0
};

logoDefaultAnim = {
  curve: "ease",
  time: .2,
  delay: 0
};

logoReturningAnim = {
  curve: defaultAnimCurve,
  time: .3,
  delay: .1
};

Framer.Defaults.Animation = {
  curve: defaultAnimCurve,
  time: animSpeed
};

/* Create image layers */

photoArea = new Layer({
  x: 0,
  y: 0,
  width: 640,
  height: 640,
  image: "images/photo-area.png",
  scale: .86,
  opacity: 0
});

closePhoto = new Layer({
  x: 560,
  y: 40,
  width: 50,
  height: 50,
  backgroundColor: "transparent"
});

container = new ScrollComponent({
  x: 0,
  y: 0,
  width: 640,
  height: 1136,
  backgroundColor: "transparent",
  scrollHorizontal: false
});

container.clip = false;

container.states.animationOptions = {
  curve: smallBounce
};

header = new Layer({
  x: 0,
  y: 0,
  width: 640,
  height: 413,
  backgroundColor: "#439FD8"
});

logo = new Layer({
  x: 0,
  y: 114,
  width: 328,
  height: 70,
  image: "images/guidebook_logo_dark.png"
});

store = new Layer({
  x: 0,
  y: 413,
  width: 640,
  height: 1963,
  image: "images/store.png"
});

codePlaceholder = new Layer({
  x: 20,
  y: 22,
  width: 171,
  height: 34,
  image: "images/code-placeholder.png",
  opacity: 0
});

searchBar = new Layer({
  x: 30,
  y: 304,
  width: 580,
  height: 79,
  backgroundColor: "white",
  borderRadius: "8px"
});

searchBar.shadowX = 0;

searchPlaceholder = new Layer({
  x: 20,
  y: 22,
  width: 171,
  height: 37,
  image: "images/search-placeholder.png"
});

reset = new Layer({
  x: 0,
  y: 413,
  width: 640,
  height: 2376,
  backgroundColor: "rgba(255,255,255,.6)",
  opacity: 0
});

redeemText = new Layer({
  x: 0,
  y: 114,
  width: 362,
  height: 65,
  image: "images/redeem-text.png",
  opacity: 0
});

cancelSearch = new Layer({
  x: 525,
  y: 20,
  width: 40,
  height: 40,
  image: "images/cancel-search.png",
  opacity: 0,
  index: 0
});

useCode = new Layer({
  x: 0,
  y: searchBar.y - 30 - 43,
  width: 180,
  height: 43,
  image: "images/use-code.png"
});

useCode.x = Align.center;

qrButton = new Layer({
  x: searchBar.width - 200,
  y: 0,
  width: 200,
  height: searchBar.height,
  backgroundColor: "transparent"
});

qr = new Layer({
  x: 150,
  y: 0,
  width: 34,
  height: 34,
  image: "images/qr.png"
});

ptr = new Layer({
  x: 0,
  y: header.height - 100,
  height: 100,
  width: 640,
  backgroundColor: "transparent"
});

ptrBorder = new Layer({
  x: 0,
  y: ptr.height - 2,
  height: 2,
  width: 640,
  backgroundColor: "#D7E1E9"
});

arrow = new Layer({
  x: 0,
  y: 0,
  width: 33,
  height: 44,
  image: "images/pull-arrow.png"
});

refresh = new Layer({
  x: 0,
  y: 0,
  width: 44,
  height: 44,
  image: "images/refresh.png",
  opacity: 0

  /* Add sublayers */
});

ptr.addSubLayer(arrow);

ptr.addSubLayer(ptrBorder);

ptr.addSubLayer(refresh);

arrow.x = Align.center;

arrow.y = Align.center;

refresh.x = Align.center;

refresh.y = Align.center;

ptr.index = 0;

qrButton.addSubLayer(qr);

container.content.addSubLayer(store);

container.content.addSubLayer(reset);

header.addSubLayer(useCode);

header.addSubLayer(redeemText);

header.addSubLayer(logo);

header.addSubLayer(searchBar);

searchBar.addSubLayer(searchPlaceholder);

searchBar.addSubLayer(codePlaceholder);

codePlaceholder.y = Align.center;

searchBar.addSubLayer(qrButton);

qr.y = Align.center;

searchBar.addSubLayer(cancelSearch);

/* Center redeem and logo within parent */

redeemText.x = Align.center;

logo.x = Align.center;

/* States for various items */

qrButton.states.add({
  hidden: {
    opacity: 0
  }
});

container.states.add({
  scanning: {
    y: photoArea.height
  }
});

photoArea.states.add({
  scanning: {
    scale: 1,
    opacity: 1
  }
});

searchBar.states.add({
  searching: {
    y: header.height - margin - searchBar.height
  },
  redeeming: {
    y: useCode.y
  },
  sticky: {
    y: margin
  },
  stickyReturn: {
    y: 304
  }
});

reset.states.add({
  searching: {
    opacity: 1,
    y: margin + searchBar.height + margin
  },
  usingCode: {
    opacity: 1,
    y: header.height - useCode.height - margin
  },
  scanning: {
    opacity: .001,
    y: 0
  }
});

codePlaceholder.states.add({
  redeeming: {
    opacity: 1
  }
});

redeemText.states.add({
  visible: {
    opacity: 1
  }
});

useCode.states.add({
  hidden: {
    opacity: 0
  },
  pressed: {
    scale: .9
  }
});

logo.states.add({
  searching: {
    y: logo.y - 50,
    opacity: 0
  },
  returning: {
    y: logo.y,
    opacity: 1
  },
  hidden: {
    opacity: 0
  }
});

store.states.add({
  searching: {
    y: 20 + searchBar.height + 20,
    opacity: 1
  },
  redeeming: {
    y: header.height - useCode.height - margin
  },
  scanning: {
    y: header.height + photoArea.height,
    blur: 5
  },
  refreshing: {
    y: header.height + 100
  }
});

searchPlaceholder.states.add({
  hidden: {
    opacity: 0,
    x: searchPlaceholder.x - 100
  }
});

cancelSearch.states.add({
  visible: {
    opacity: 1,
    index: 1
  }
});

ptr.states.add({
  refreshing: {
    y: header.height
  }
});

redeemText.states.animationOptions = {
  curve: "ease",
  time: animSpeed
};

searchPlaceholder.states.animationOptions = {
  curve: smallBounce,
  time: animSpeed
};

cancelSearch.states.animationOptions = {
  curve: "ease",
  time: animSpeed
};

header.states.add({
  searching: {
    y: -(header.height - margin - searchBar.height - margin)
  },
  redeeming: {
    height: header.height - useCode.height - margin
  },
  stickySearch: {
    y: 0,
    height: margin + searchBar.height + margin
  },
  stickyReturn: {
    y: 0,
    height: 413
  }
});

/* State functions */

resetView = function() {
  searchPlaceholder.states["switch"]("default");
  qrButton.states["switch"]("default");
  header.states["switch"]("default");
  logo.states["switch"]("returning");
  store.states["switch"]("default");
  reset.states["switch"]("default");
  cancelSearch.states["switch"]("default");
  redeemText.states["switch"]("default");
  searchBar.states["switch"]("default");
  useCode.states["switch"]("default");
  container.states["switch"]("default");
  photoArea.states["switch"]("default");
  codePlaceholder.states["switch"]("default");
  Utils.delay(0.5, function() {
    return bg.backgroundColor = "#439FD8";
  });
  return qrButton.index = 100;
};

initSearch = function() {
  if (!sticky) {
    header.states["switch"]("searching");
    logo.states["switch"]("searching");
    qrButton.states["switch"]("hidden");
    store.states["switch"]("searching");
    reset.states["switch"]("searching");
    cancelSearch.states["switch"]("visible");
    searchBar.states["switch"]("searching");
    useCode.states["switch"]("hidden");
    return qrButton.index = 0;
  } else {
    return reset.states["switch"]("searching");
  }
};

initRedeem = function() {
  searchPlaceholder.states["switch"]("hidden");
  reset.states["switch"]("usingCode");
  searchBar.states["switch"]("redeeming");
  cancelSearch.states["switch"]("visible");
  redeemText.states["switch"]("visible");
  logo.states["switch"]("hidden");
  useCode.states["switch"]("hidden");
  header.states["switch"]("redeeming");
  store.states["switch"]("redeeming");
  codePlaceholder.states["switch"]("redeeming");
  qrButton.states["switch"]("hidden");
  return qrButton.index = 0;
};

initScan = function() {
  container.states["switch"]("scanning");
  reset.states["switch"]("scanning");
  container.animate({
    properties: {
      y: photoArea.height
    }
  });
  bg.backgroundColor = "black";
  return photoArea.states["switch"]("scanning");
};

initStickySearch = function() {
  header.states["switch"]("stickySearch");
  logo.states["switch"]("hidden");
  container.removeSubLayer(header);
  return searchBar.states["switch"]("sticky");
};

cancelStickySearch = function() {
  container.addSubLayer(header);
  header.index = 1;
  header.states["switch"]("stickyReturn");
  searchBar.states["switch"]("stickyReturn");
  return searchBar.states["switch"]("default");
};

/* Events */

searchPlaceholder.on(Events.Click, function() {
  return initSearch();
});

qrButton.on(Events.Click, function() {
  container.scrollVertical = false;
  header.animate({
    properties: {
      y: photoArea.height
    }
  });
  return initScan();
});

qr.on(Events.Click, function() {
  return initScan();
});

useCode.on(Events.TouchStart, function() {
  return this.states["switch"]("pressed");
});

useCode.on(Events.MouseOut, function() {
  return this.states["switch"]("default");
});

useCode.on(Events.Click, function() {
  return initRedeem();
});

reset.on(Events.Click, function() {
  return resetView();
});

cancelSearch.on(Events.Click, function() {
  return resetView();
});

closePhoto.on(Events.Click, function() {
  return resetView();
});

/* State switch functions
These change the animation for an item based on its new state */

logo.states.on(Events.StateWillSwitch, function(oldState, newState) {
  if (newState === 'returning') {
    return logo.states.animationOptions = logoReturningAnim;
  } else {
    return logo.states.animationOptions = logoDefaultAnim;
  }
});

reset.on(Events.AnimationStart, function(event, layer) {
  return layer.visible = true;
});

reset.on(Events.AnimationEnd, function(event, layer) {
  if (layer.opacity === 0) {
    return layer.visible = false;
  } else {
    return layer.visible = true;
  }
});

/* Pull to refresh */

spin = function() {
  refresh.animate({
    properties: {
      rotation: 1080
    },
    time: 1.5,
    curve: "linear"
  });
  return Utils.delay(1.5, function() {
    refresh.rotation = 0;
    return spin();
  });
};

spin();

startY = 0;

storeStartY = store.y;

limit = header.height - 20 - searchBar.height - 20;

container.on(Events.Move, function(event) {
  var x, y;
  bg.backgroundColor = "#F6FBFE";
  ptr.maxY = store.y - container.scrollY;
  x = Utils.modulate(container.scrollY, [0, limit - 100], [1, 0], true);
  y = Utils.modulate(container.scrollY, [0, limit], [1, 0], true);
  logo.opacity = x;
  useCode.opacity = y;
  if (container.scrollY <= 20 && header.y < 0) {
    header.animate({
      properties: {
        y: 0
      },
      time: 0.05
    });
  } else if (container.scrollY > header.height - 20 && header.y !== -header.height + (searchBar.height + 55)) {
    header.animate({
      properties: {
        y: -header.height + (searchBar.height + 55),
        time: 0.05
      }
    });
  }
  if (container.scrollY < -60) {
    return arrow.animate({
      properties: {
        rotation: 180
      },
      time: .12,
      curve: "ease"
    });
  } else {
    return arrow.animate({
      properties: {
        rotation: 0
      },
      time: .12,
      curve: "ease"
    });
  }
});

container.on(Events.ScrollEnd, function(event) {
  spin();
  if (container.scrollY > 0) {
    store.animate({
      properties: {
        y: reset.y
      }
    });
    return ptr.animate({
      properties: {
        maxY: reset.y
      }
    });
  }
});

startRefresh = function() {
  store.states["switch"]("refreshing");
  ptr.states["switch"]("refreshing");
  refresh.animate({
    properties: {
      opacity: 1
    },
    time: .2,
    curve: "ease"
  });
  arrow.animate({
    properties: {
      opacity: 0
    },
    time: .2,
    curve: "ease"
  });
  return Utils.delay(2, function() {
    return endRefresh();
  });
};

endRefresh = function() {
  store.states["switch"]("default");
  ptr.states["switch"]("default");
  refresh.opacity = 0;
  arrow.animate({
    properties: {
      opacity: 1
    },
    time: .2,
    curve: "ease"
  });
  return Utils.delay(.2, function() {
    bg.backgroundColor = "#439FD8";
    return arrow.rotation = 0;
  });
};
