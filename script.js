const io = document.getElementById('io');
const kon = document.querySelector('.container');
let sistem = true;

io.addEventListener('click', () => {
  sistem = !sistem; 
  
  io.innerHTML = sistem ? "<h2><i class='fa-solid fa-bars'></i></h2>" : "<h2><i class='fa-solid fa-times'></i></h2>";
  kon.style.width = sistem ? "0%" : "80%";
});
