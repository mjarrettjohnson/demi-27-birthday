
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const body = document.getElementById('loading');
    body.style.overflow = 'auto';

    const [div] = document.getElementsByClassName('loading');
    console.log('div', div);
    div.style.display = 'none';

  }, 5000);
})

