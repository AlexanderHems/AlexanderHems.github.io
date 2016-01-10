
  var typed = '';
  document.onkeypress = function(e) {
    e = e || window.event;
    var charcode = e.keyCode;
    if(charcode){
      typed = typed + String.fromCharCode(charcode);
      console.log('typed = '+typed)
    }
    if(typed == "traitor"){
      removeVideoAddEmbedVideo();
    }
    if(typed.length > 7){
      typed = ''
    }
  }
  function removeVideoAddEmbedVideo() {
      var video = document.querySelector('video');
      if(video == null){
        video = document.querySelector('audio');
      }
      if(video){
          video.removeAttribute('src')
      }
      var body = document.querySelector('body');
      body.style.margin = '0';
      var traitor = document.createElement('<div style="position: fixed; z-index: -99; width: 100%; height: 100%"> <iframe frameborder="0" height="100%" width="100%" src="https://youtube.com/embed/lhK94idiqUY?autoplay=1&loop=1&controls=0&showinfo=0&autohide=1&playlist=lhK94idiqUY"></iframe></div>');
      body.appendChild(traitor);
      //document.querySelector('body').style.margin = '0';
  }
