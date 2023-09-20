import React from 'react';
import  { anime } from 'react-anime';
import $ from 'jquery';
import './Anime.css';

  function Anime() {
 
    var animationDone = false;
var cardAnim = anime.timeline();
var cardCount = $('.achievement-card-box').length;
cardAnim.add({
  targets: ".achievement-card-box",
  rotateY: [180,1080],
  translateY: [150,0],
  transformOrigin: ["50% 100%", "50% 100%"],
  easing: "easeOutQuad",
  scale: [0,0.8],
  delay: 1500,
  duration: 500
})
  .add({
  targets: "#achievement-info",
  scaleY: [0,1],
  duration: 400,
  easing: "linear",
  offset: "-=500"
})
  .add({
  targets: ["#achievement-header","#achievement-title","#achievement-description"],
  opacity: [0,1],
  duration: 400,
  offset: "-=400"
})
  .add({
  targets: "#achievement-button",
  opacity: 1,
  bottom: "-75px",
  easing: "easeOutCirc",
  duration: 400,
  offset: "-=200"
})
  .add({
  targets: ".achievement-card-box",
  scale: [0.8,1],
  rotateZ: function(el, i) {
    return ["0deg", Math.floor((cardCount/2))*-15 + (i*15)+"deg"];
  },
  boxShadow: ['0 0 0px rgba(128,128,255,0)','0 0 40px rgba(128,128,255,1)'],
  elasticity: 100,
  duration: 800,
  complete: function () {
    animationDone = true;
    pulse();
  }
})
function pulse() {
  cardAnim = anime({
    targets: ".achievement-card-box",
    scale: [1,0.95],
    rotateZ: function(el, i) {
      return [Math.floor((cardCount/2))*-15 + (i*15)+"deg", Math.floor((cardCount/2))*-17 + (i*17)+"deg"];
    },
    boxShadow: ['0 0 40px rgba(128,128,255,1)','0 0 60px rgba(128,128,255,1)'],
    easing: "easeInOutCubic",
    duration: 5000,
    loop: true,
    direction: 'alternate'
  })
}

function hoverCards() {
  if (animationDone) {
    cardAnim.pause();
    cardAnim = anime.timeline();
    cardAnim.add({
      targets: ".achievement-card-box",
      rotateZ: function(el, i) {
      return Math.floor((cardCount/2))*-15 + (i*15)+"deg";
    },
      translateX: function(el, i) {
        return Math.floor((cardCount/2))*-112 + (i*112)+"px";
      },
      scale: 1,
      easing: "easeInOutSine",
      duration: 400
    });
  }
}
function unhoverCards() {
  if (animationDone) {
    cardAnim.pause();
    cardAnim = anime.timeline();
    cardAnim.add({
      targets: ".achievement-card-box",
      rotateZ: function(el, i) {
      return Math.floor((cardCount/2))*-15 + (i*15)+"deg";
      },
      translateX: function(el, i) {
        return 0+"px";
      },
      scale: 1,
      easing: "easeInOutSine",
      duration: 500,
      complete: function() {
        pulse();
      }
    });
  }
}

function close() {
  cardAnim.pause();
  cardAnim = anime({
    targets: [".achievement-card-box", "#achievement-info"],
    scale: 0,
    rotateZ: 0,
    translateX: 0,
    opacity: 0,
    easing: "easeInSine",
    duration: 400,
  });
}

$("#achievement-box").on('mouseenter', hoverCards);
$("#achievement-box").on('mouseleave', unhoverCards);
$("#achievement-button").on("click", close);


    return (
      <div className="">
                //HTML part here
                    <div className="achievement-box">
                    <div className="achievement-card-container">
                        <div className="achievement-card-box">
                        <div className="a-card-back"></div>
                        <div className="a-card-image image-5"></div>
                        </div>
                        <div className="achievement-card-box">
                        <div className="a-card-back"></div>
                        <div className="a-card-image image-4"></div>
                        </div>
                        <div className="achievement-card-box">
                        <div className="a-card-back"></div>
                        <div className="a-card-image image-3"></div>
                        </div>
                        <div className="achievement-card-box">
                        <div className="a-card-back"></div>
                        <div className="a-card-image image-2"></div>
                        </div>
                        <div className="achievement-card-box">
                        <div className="a-card-back"></div>
                        <div className="a-card-image image-1"></div>
                        </div>
                    </div>
                    </div>
                    <div className="achievement-info">
                    <button className="achievement-coins" title="Coins" disabled>5000</button>
                    <button className="achievement-exp" title="EXP" disabled>2000</button>
                    <div className="achievement-header">Achievement Obtained</div>
                    <div className="achievement-title">Achievement Title</div>
                    <div className="achievement-description">Achievement Description</div>
                    <button className="achievement-button">OK</button>
                    </div>
      </div>
    );
  }

  export default Anime;
