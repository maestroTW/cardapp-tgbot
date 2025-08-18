let tg = window.Telegram.WebApp;

function updateText() {
    let username = tg.initDataUnsafe.user.username;
    let name = tg.initDataUnsafe.user.first_name + tg.initDataUnsafe.user.last_name;
    document.getElementById('username').textContent = username
    document.getElementById('name').textContent = name
}