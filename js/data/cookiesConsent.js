
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
/*function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for(let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if(key === name) return value;
    }
    return null;
}*/

function setCookie(name, value, options = {}) {
    options = {
        path: '/',
        samesite: 'lax'
    }

    if(options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

    for(let key in options) {
        updCookie += '; ' + key;
        let optionValue = options[key];
        if(optionValue !== true) {
            updCookie += '=' + optionValue;
        }
    }
    document.cookie = updCookie;
}


function enableAnalytics() {
    console.log('Analytics is turned on 📈');
}

export function initCookiesAgreement() {
    const banner = document.querySelector('.cookie');
    const acceptBtn = document.getElementById('accept');
    const rejectBtn = document.getElementById('reject');
    const changeBtn = document.getElementById('change');
    const decision = getCookie('cookiesConsent');

    if(!decision) {
        banner.classList.add('cookie--visible');
    };

    if(decision === 'accepted') {
        enableAnalytics();
    };

    acceptBtn.addEventListener('click', () => {
        setCookie('cookieAgreement', 'accepted', 365);
        banner.classList.remove('cookie--visible');
        enableAnalytics();
    });

    rejectBtn.addEventListener('click', () => {
        setCookie('cookieAgreement', 'rejected', 365);
        banner.classList.remove('cookie--visible');
    });

    if(changeBtn) {
        changeBtn.addEventListener('click', () => {
            banner.classList.add('cookie--visible');
        })
    }
}