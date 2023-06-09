function getRandomPosition() {
    var width = window.innerWidth - 100;
    var height = window.innerHeight - 100;
    var newLeft = Math.floor(Math.random() * width);
    var newTop = Math.floor(Math.random() * height);
    return { left: newLeft + 'px', top: newTop + 'px' };
  }
  
  function moveNoButton() {
    var naoButton = document.getElementById('naoButton');
    var newPosition = getRandomPosition();
    naoButton.style.left = newPosition.left;
    naoButton.style.top = newPosition.top;
  }
  
  function showLoveMessage() {
    alert('Você é MUITO incrível!');
  }
  
  document.getElementById('simButton').addEventListener('click', function() {
    showLoveMessage();
    window.location.href = 'https://youtu.be/har3c93pJe0?t=55';
  });
  
  document.getElementById('naoButton').addEventListener('mouseover', function() {
    moveNoButton();
  });
  
