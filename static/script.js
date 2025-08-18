document.addEventListener("DOMContentLoaded", () => {
    let tg = window.Telegram.WebApp;

    let avatar_url = tg.initDataUnsafe.photo_url;
    //let avatar_url = 'https://ae04.alicdn.com/kf/S5dae3e85566d4f54b5dd04f90f8ea16a4.jpg_480x480.jpg'
    let avatar = document.createElement('img');
    avatar.src = avatar_url;
    document.getElementById('avatar-container').appendChild(avatar);

    //let username = "username";
    //let first_name = 'ivan';
    //let last_name = 'ivanov';
    let username = tg.initDataUnsafe.user.username;
    let first_name = tg.initDataUnsafe.user.first_name;
    let last_name = tg.initDataUnsafe.user.last_name;
    document.getElementById('username').textContent = username;
    document.getElementById('name').textContent = `${first_name} ${last_name}`;
});