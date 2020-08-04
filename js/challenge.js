const $plusButton = document.getElementById('plus');
const $minusButton = document.getElementById('minus');
const $heartButton = document.getElementById('heart');
const $submitButton = document.getElementById('submit');

const $pauseButton = document.getElementById('pause');


const $buttons = [
  $plusButton,
  $minusButton,
  $heartButton,
  $submitButton
];

let $counter = document.getElementById('counter');
let counter = parseInt($counter.innerText);

let counterInterval = window.setInterval(timerCountUp, 1000);
let running = true;

function timerCountUp(event) {
  counter++;
  $counter.innerText = counter;
}

function timerCountDown(event) {
  counter--;
  $counter.innerText = counter;
}

$plusButton.addEventListener('click', function(e) {
  timerCountUp();
});

$minusButton.addEventListener('click', function(e) {
  timerCountDown();
});

$heartButton.addEventListener('click', function(e) {
  const $likesList = document.querySelector('ul.likes');
  let $newLike = document.getElementById(counter);

  if ($newLike) {
    let likeCount = parseInt($newLike.childNodes[1].innerText);

    likeCount++;
    $newLike.innerHTML = `${counter} has been liked <span>${likeCount}</span> times`;
  } else {
    $newLike = document.createElement('li');
    
    const likeCount = 1;
    $newLike.id = counter;
    $newLike.innerHTML = `${counter} has been liked <span>${likeCount}</span> time`;

    $likesList.append($newLike);
  }
});

$pauseButton.addEventListener('click', function(e) {
  if (running) {
    window.clearInterval(counterInterval);
    $pauseButton.innerText = 'resume';
  } else {
    counterInterval = window.setInterval(timerCountUp, 1000);
    $pauseButton.innerText = 'pause';
  }
  $buttons.forEach($button => {
    $button.disabled = ( $button.disabled ? false : true );
  });
  running = ( running ? false : true );
});

$submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  const $newComment = document.createElement('p');
  const $commentList = document.getElementById('list');
  const $commentInput = document.getElementById('comment-input');

  $newComment.textContent = $commentInput.value;

  $commentList.append($newComment);
});


