// Matrix rain effect
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = 'アァイィウヴエェオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ0123456789';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0F0';
  ctx.font = fontSize + 'px monospace';
  drops.forEach((y, x) => {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, x * fontSize, y * fontSize);
    if (y * fontSize > canvas.height && Math.random() > 0.975) drops[x] = 0;
    drops[x]++;
  });
}
setInterval(drawMatrix, 33);

// Menu items with effects
const menuList = document.getElementById('menu');
const menuItems = [
  { name: 'Neon Latte', effect: 'Gives you temporary night vision' },
  { name: 'Quantum Espresso', effect: 'You experience time 2x faster' },
  { name: 'Holographic Tea', effect: 'Your reflection glitches' },
  { name: 'Pixel Pancakes', effect: 'Turns your voice into 8-bit' },
  { name: 'Cyber Croissant', effect: 'You can taste in RGB' }
];

function updateMenu() {
  menuList.innerHTML = '';
  const shuffled = [...menuItems].sort(() => 0.5 - Math.random());
  shuffled.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} — ${item.effect}`;
    menuList.appendChild(li);
  });
}
setInterval(updateMenu, 1000);
updateMenu();

// Order system
document.getElementById('orderBtn').addEventListener('click', () => {
  const order = document.getElementById('orderInput').value.trim();
  if (order) {
    document.getElementById('orderMessage').textContent = `Order placed: ${order}. It may have... unexpected effects.`;
  }
});

// Glitchy reviews
const reviews = [
  '★★★★★ — “I saw colors that don’t exist”',
  '★★★★☆ — “Time folded in on itself”',
  '★★★☆☆ — “Coffee tasted like my childhood memories”',
  '★★★★★ — “The croissant blinked at me”',
  '★★☆☆☆ — “Too many parallel universes at once”'
];

function glitchText(text) {
  return text.split('').map(char =>
    Math.random() > 0.1 ? char : String.fromCharCode(33 + Math.random() * 94)
  ).join('');
}

function updateReviews() {
  const reviewList = document.getElementById('reviews');
  reviewList.innerHTML = '';
  reviews.forEach(r => {
    const li = document.createElement('li');
    li.textContent = glitchText(r);
    reviewList.appendChild(li);
  });
}
setInterval(updateReviews, 500);
updateReviews();
