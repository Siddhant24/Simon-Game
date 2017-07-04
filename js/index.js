var order = [];
var userturn = false;
var index = 0;
var strict;
if(document.getElementById("checkbox").checked) strict = true;
else strict = false;

const audio1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
const audio2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
const audio3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
const audio4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

$(document).ready(function(){
  
  $("#start").on("click", function(){
    order= [];
    index = 0;
    $("#count").text("Count: 0");
    const $this = $(this);
    $this.text('Restart');
    userturn = false;
    setTimeout(startgame, 1000);
  });
  
  $("#blue").on("click", function(){
    const $this = $(this);
    $(".btn-play").toggleClass('disable');
    audio1.play();
    $this.animate({
      backgroundColor: '#898add',
    });
    setTimeout(function(){
      $this.animate({backgroundColor: '#094a8f'});
      $(".btn-play").toggleClass('disable');
      audio1.currentTime = 0;
      if(userturn){
        if(order[index] !== 'blue'){
          if(!strict){
            index = 0;
            userturn = false;
            $(".message").text("Wrong order!! Replaying...");
            $(".btn-play").toggleClass('disable');
            setTimeout(play, 2000);
          }
          else{
            $(".message").text("Wrong order!! Restarting game...");
            setTimeout(function(){
              $("#start").click();
            }, 1000);
          }
        }
        else{
          index++;
        }
        if(index == order.length){
          index = 0;
          userturn = false;
          setTimeout(startgame, 1000);
        }
      }
    }, 1000);
  });
  
  $("#red").on("click", function(){
    const $this = $(this);
    $(".btn-play").toggleClass('disable');
    audio2.play();
    $this.animate({
      backgroundColor: '#ea8c8c',
    });
    setTimeout(function(){
      $this.animate({backgroundColor: '#9f0f17'});
      $(".btn-play").toggleClass('disable');
      audio2.currentTime = 0;
      if(userturn){
        if(order[index] !== 'red'){
          if(!strict){
            index = 0;
            userturn = false;
            $(".message").text("Wrong order!! Replaying...");
            $(".btn-play").toggleClass('disable');
            setTimeout(play, 2000);
          }
          else{
            $(".message").text("Wrong order!! Restarting game...");
            setTimeout(function(){
              $("#start").click();
            }, 1000);
          }
        }
        else{
          index++;
        }
        if(index == order.length){
          index = 0;
          userturn = false;
          setTimeout(startgame, 1000);
        }
      }
    }, 1000);
  });
  
  $("#green").on("click", function(){
    const $this = $(this);
    $(".btn-play").toggleClass('disable');
    audio3.play();
    $this.animate({
      backgroundColor: '#8fe888',
    });
    setTimeout(function(){
      $this.animate({backgroundColor: '#00a74a'});
      $(".btn-play").toggleClass('disable');
      audio3.currentTime = 0;
      if(userturn){
        if(order[index] !== 'green'){
          if(!strict){
            index = 0;
            userturn = false;
            $(".message").text("Wrong order!! Replaying...");
            $(".btn-play").toggleClass('disable');
            setTimeout(play, 2000);
          }
          else{
            $(".message").text("Wrong order!! Restarting game...");
            setTimeout(function(){
              $("#start").click();
            }, 1000);
          }
        }
        else{
          index++;
        }
        if(index == order.length){
          index = 0;
          userturn = false;
          setTimeout(startgame, 1000);
        }
      }
    }, 1000);
  });
  
  $("#yellow").on("click", function(){
    const $this = $(this);
    $(".btn-play").toggleClass('disable');
    audio4.play();
    $this.animate({
      backgroundColor: '#eae48c',
    });
    setTimeout(function(){
      $this.animate({backgroundColor: '#cca707'});
      $(".btn-play").toggleClass('disable');
      audio4.currentTime = 0;
      if(userturn){
        if(order[index] !== 'yellow'){
          if(!strict){
            index = 0;
            userturn = false;
            $(".message").text("Wrong order!! Replaying...");
            $(".btn-play").toggleClass('disable');
            setTimeout(play, 2000);
          }
          else{
            $(".message").text("Wrong order!! Restarting game...");
            setTimeout(function(){
              $("#start").click();
            }, 1000);
          }
        }
        else{
          index++;
        }
        if(index == order.length){
          index = 0;
          userturn = false;
          setTimeout(startgame, 1000);
        }
      }
    }, 1000);
  });
  
  $("#checkbox").on("click", function(){
    if(document.getElementById("checkbox").checked){
      strict = true;
    }
    else{
      strict = false;
    }
  });
});


function startgame(){
  if($("#count").text().slice(-1) === '20'){
    $(".message").text("You won!!");
    $(".btn-play").toggleClass('disable');
    return;
  }
  if(!userturn){
    $(".message").text("Playing pattern, watch carefully!!");
    var currCount = (Number($("#count").text().slice(-1)) + 1).toString();
    $("#count").text(`Count: ${currCount}`);
    var num = Math.round(Math.random()*1000)%4 + 1;
    if(num === 1){
      order.push('blue');
    }
    else if(num === 2){
      order.push('red');
    }
    else if(num === 3){
      order.push('green');
    }
    else if(num === 4){
      order.push('yellow');
    }
  }
  $(".btn-play").toggleClass('disable');
  setTimeout(play, 500);
};

function play(){
  if(index == order.length){
    userturn = true;
    index = 0;
    $(".message").text("Your turn!");
    $(".btn-play").toggleClass('disable');
    return;
  }
  $(`#${order[index]}`).click();
  index++;
  setTimeout(play, 2000);
}