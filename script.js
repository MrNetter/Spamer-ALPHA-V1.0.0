const telegram = document.querySelector(".img-telegram");
const form1 = document.querySelector(".form-telegram");
const confirmBtn = document.querySelector(".comfirm-btn");
const confirm1 = document.querySelector(".confirm");

const tokenTg = document.getElementById("token-tg")
const chatId = document.getElementById("chat-id")
const messageTg = document.getElementById("message-tg")
const submitTg = document.getElementById("submit-tg")

confirmBtn.addEventListener("click", () => {
    form1.classList.remove("none")
    confirm1.classList.add("none")
    telegram.classList.remove("none")
})

async function telegramSend() {

    const tokenTG = tokenTg.value.trim();
    const chatID =chatId.value.trim();
    const msgTG = messageTg.value.trim();

    try {
        const res = await fetch(`https://api.telegram.org/bot${tokenTG}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: chatID, text: msgTG })
        });

        const data = await res.json();
        console.log(data);

    } catch (err) {
        console.error(err);
    }
}
