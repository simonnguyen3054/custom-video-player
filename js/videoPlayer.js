(function(window, document){
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

    }
  };

  //Call immediately when page loads
  videoPlayer.init();

}(this, document));