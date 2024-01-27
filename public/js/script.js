const btn = document.querySelector('.question_form');
const input = document.querySelector('.question_input');

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
