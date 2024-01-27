const btn = document.querySelector(".question_form");
const input = document.querySelector(".question_input");

btn.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const body = { text: event.target.querySelector("input").value };
    const data = await fetch(`/api/answer/${event.target.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const dataJson = await data.json();
    const card = event.target.closest(".card");
    if (dataJson.message === "False") {
      card.classList.add("card_wrong");
    } else {
      if (card.classList.contains("card_wrong")) {
        card.classList.remove("card_wrong");
      }
      card.classList.add("card_correct");
    }
  } catch (e) {
    console.error(e);
  }
});
