const btn = document.querySelector('.form-Q');
const input = document.querySelector('.input');

btn.addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    const data = await fetch('/api/answer/', {
      method: 'POST',
		headers: { 'Content-Type': 'application/json' },
	  body:
    });
  } catch (e) {
    console.error(e);
  }
});
