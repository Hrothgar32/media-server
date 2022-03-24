import React, { Component } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css'
import '../netflixskin.css';
import './ionicon.scss';
import { URL } from '../URL';
import $ from 'jquery';

export default class Video extends Component {
  registerBackButton = () =>{
    var Component = videojs.getComponent('Component');
    var BackButton = videojs.extend(Component, {
      constructor: function(video, options ){
        Component.apply(this, arguments);
      },
      createEl: function(){
        return videojs.dom.createEl('i',{
          className:'vjs-back-button ion-md-arrow-back'
        });
      }
    });
    videojs.registerComponent('BackButton', BackButton);
  }

  componentDidMount(){
      this.registerBackButton();
      var video = videojs('video');
      video.addChild('BackButton')
      video.src(URL + ":8080/api/data/" + this.props.location.state.fileName +  ".mp4");
      video.duration= function() { return video.theDuration; };
      video.start= 0;
      var timeProp = this.props;
      video.oldCurrentTime= video.currentTime;
      video.currentTime= function(time) 
      { 
          if( time === undefined )
          {
              return video.oldCurrentTime() + video.start;
          }
          console.log(time)
          video.start= time;
          video.oldCurrentTime(0);
          video.src(URL + ":8080/api/data/" + timeProp.location.state.fileName + ".mp4?start=" + time);
          video.play();
          return this;
      };

      $.getJSON( URL + ":8080/api/data/" + this.props.location.state.fileName +  ".js", function( data ) 
      {
          video.theDuration= data.duration;
      }); 
      $(function(){
        var $refreshButton = $('#refresh');
        var $results = $('#css_result');
        
        function refresh(){
          var css = $('style.cp-pen-styles').text();
          $results.html(css);
        }
      
        refresh();
        $refreshButton.click(refresh);
        
        // Select all the contents when clicked
        $results.click(function(){
          $(this).select();
        });
      });
      const BACKBUTTON = document.querySelector("i");
      BACKBUTTON.addEventListener("click", () => {
        window.location.replace("/");
        console.log(video.currentTime())
      });
  }

  render() {
    return (
      <div className="videoplayer">
        <video id="video" className="video-js vjs-16-9 vjs-default-skin" 
        controls preload="auto"></video>
      </div>
    )
  }
}
