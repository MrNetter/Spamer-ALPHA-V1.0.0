const telegram = document.querySelector(".img-telegram");
const discord = document.querySelector(".img-discord");
const form1 = document.querySelector(".form-telegram");
const form2 = document.querySelector(".form-discord");
const confirmBtn = document.querySelector(".comfirm-btn");
const confirm1 = document.querySelector(".confirm");

const tokenTg = document.getElementById("token-tg")
const chatId = document.getElementById("chat-id")
const messageTg = document.getElementById("message-tg")
const submitTg = document.getElementById("submit-tg")
const tokenDs = document.getElementById("token-ds")
const channelId = document.getElementById("channel-id")
const messageDs = document.getElementById("message-ds")
const submitDs = document.getElementById("submit-ds")

telegram.addEventListener("click", () => {
    form2.classList.add("none")
    form1.classList.remove("none")
})

discord.addEventListener("click", () => {
    form1.classList.add("none")
    form2.classList.remove("none")
})

confirmBtn.addEventListener("click", () => {
    form2.classList.remove("none")
    confirm1.classList.add("none")
})

async function send() {
    const token = document.getElementById('token-tg').value.trim();
    const chatId = document.getElementById('chat-id').value.trim();
    const msg = document.getElementById('message-tg').value.trim();

    try {
        const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text: msg })
        });

        const data = await res.json();
        console.log(data);

    } catch (err) {
        console.error(err);
    }
}



