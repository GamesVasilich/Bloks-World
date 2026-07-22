window.onload = function () {
    const isLoggedIn = localStorage.getItem('bw_logged_in');
    const savedNick = localStorage.getItem('bw_nick');
    if (isLoggedIn === 'true') {
        showMainScreen(savedNick);
    } else {
        document.getElementById('auth-screen').style.display = 'flex';
    }
};

function sendCode() {
    const email = document.getElementById('reg-email').value;
    const nick = document.getElementById('reg-nick').value;
    const parol = document.getElementById('reg-paroll').value;
    if (email.includes('@') && nick.length > 2 && parol.length > 5) {
        document.getElementById('reg-form').style.display = 'none';
        document.getElementById('email-confirm').style.display = 'block';
        document.getElementById('reg-paroll').style.display = 'none';
    } else { alert("Заполни данные!"); }
}

function verifyAndLogin() {
    const code = document.getElementById('confirm-code').value;
    const nick = document.getElementById('reg-nick').value;
    const email = document.getElementById('reg-email').value;
    if (code === "777888") {
        localStorage.setItem('bw_logged_in', 'true');
        localStorage.setItem('bw_nick', nick);
        localStorage.setItem('bw_email', email);
        showMainScreen(nick);
    } else { alert("код не совподает"); }
}

function showMainScreen(nick) {
    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('main-screen').style.display = 'flex';
    document.getElementById('user-display').innerText = nick;
}

function logout() {
    localStorage.clear();
    window.location.reload();
}