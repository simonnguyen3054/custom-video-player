(function(window, document){
  //declare variables to referenced elements
  var video = document.getElementsByTagName('video')[0],
      videoControls = document.getElementById('videoControls'),
      play = document.getElementById('play'),

      progressContainer = document.getElementById('progress'),
      progressHolder = document.getElementById('progress_box'),
      PlayProgressBar = document.getElementById('play_progress');

      fullScreenToggleButton = document.getElementById('fullScreen');

  //Create videoPlayer object to cover all the methods
  var videoPlayer = {
    init: function() {
      //set var that to the object videoPlayer
      var that = this;
      //Trigger css when javascript is enabled
      document.documentElement.className = 'js';
      //Get rid of default controls
      video.removeAttribute('controls');
      //When meta data is ready, show the controls
      video.addEventListener('loadeddata', this.initializeControls, false);
    },
    initializeControls: function() {
      //When all meta data has loaded, show the controls
      videoPlayer.showHideControls();
    },
    showHideControls: function() {
      //shows and hides the video player
      video.addEventListener('mouseover', function() {
        videoControls.style.opacity = 1;
      }, false);

      videoControls.addEventListener('mouseover', function() {
        videoControls.style.opacity = 1;
      }, false);

      video.addEventListener('mouseout', function() {
        videoControls.style.opacity = 0;
      }, false);

      videoControls.addEventListener('mouseout', function() {
        videoControls.style.opacity = 0;
      })
    }
  };

  //Call immediately when page loads
  videoPlayer.init();

}(this, document));