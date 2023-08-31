import { getCookie as cookieGet } from 'cookies-next';
import { NextResponse } from 'next/server';

export const scrollToTarget = (id: string, fixed: boolean) => {
  const targetEl = document.querySelector(`#${id}`) as HTMLElement | null;

  if (targetEl != null) {
    if (!fixed) {
      window.scrollTo({
        top: targetEl.offsetTop,
        behavior: 'smooth'
      });
    } else {
      const _header = document.querySelector(`#header`) as HTMLElement | null;
      let _top =
        targetEl.offsetTop - (_header ? _header.offsetHeight - 110 : 0);

      window.scrollTo({
        top: _top,
        behavior: 'smooth'
      });
    }
  }
};

export const setTextLimit = (str: string, length: number): string => {
  if (str.length > length) {
    str = str.substring(0, length) + '...';
  }
  return str;
};

export const trimHttpLink = (link: string) => {
  let newLink = link.replace('http://', '').replace('https://', '');
  if (newLink.slice(-1) == '/') {
    newLink = newLink.slice(0, -1);
  }
  return newLink;
};

export const isValidHttpUrl = (url: string) => {
  let _url;
  try {
    _url = new URL(url);
  } catch (_) {
    return false;
  }
  return _url.protocol === 'http:' || _url.protocol === 'https:';
};

export const parseLinkToLocale = (
  link: string,
  lang?: string | boolean | null
) => {
  if (!lang || lang === '') {
    lang = cookieGet('i18next' as any) || '';
  }
  if (!lang) {
    lang = '';
  }
  return (lang != '' ? '/' + lang : '') + link;
};
export const validateGoogleRecaptcha = async (body: any) => {
  return fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `secret=${process.env.NEXT_RECAPTCHA_SECRETKEY}&response=${body.token}`
  })
    .then(reCaptchaRes => reCaptchaRes.json())
    .then(reCaptchaRes => {
      if (reCaptchaRes?.score > 0.5) {
        return { status: true };
      } else {
        return NextResponse.json({
          status: false,
          message: 'Google ReCaptcha Failure'
        });
      }
    })
    .catch(err => {
      console.log(err);
    });
};

export const getCookie = (key: string) => {
  if (!key) {
    return false;
  }

  const name = key + '=';
  const allCookies = document.cookie.split(';');

  for (let i = 0; i < allCookies.length; i++) {
    let singleCookie = allCookies[i];

    while (singleCookie.charAt(0) === ' ') {
      singleCookie = singleCookie.substring(1);
    }

    if (singleCookie.indexOf(name) === 0) {
      return singleCookie.substring(name.length, singleCookie.length);
    }
  }

  return false;
};
