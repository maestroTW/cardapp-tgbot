document.addEventListener("DOMContentLoaded", () => {
    let tg = window.Telegram.WebApp;

    let avatar_url = tg.initDataUnsafe.photo_url;
    let avatar = document.createElement('img');
    avatar.src = avatar_url;
    document.getElementById('avatar-container').appendChild(avatar);

    let username = tg.initDataUnsafe.user.username;
    let first_name = tg.initDataUnsafe.user.first_name;
    let last_name = tg.initDataUnsafe.user.last_name;
    document.getElementById('username').textContent = `@${username}`;
    document.getElementById('name').textContent = `${first_name} ${last_name}`;

});

function changeBackground(gradient) {
    document.body.style.background = gradient;
    document.body.style.backgroundAttachment = 'fixed';
}

