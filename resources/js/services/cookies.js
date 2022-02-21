export const setCookie = (options) => {
    const {
        name,
        value = '',
        path = '/',
        duration = 3600,
    } = options;

    const durationMs = duration * 1000;
    const expires =
        new Date(Date.now() + durationMs);

    document.cookie =
        `${name}=${escape(value)}; expires=${expires.toUTCString()}; path=${path}`;
}

export const getCookie = (name, cast = String) => {
    if (document.cookie.length == 0)
        return;

    const match = document
        .cookie
        .match(`${name}=(?<value>[\\w]*);?`);

    if (!match)
        return;

    const value =
        match?.groups?.value ?? '';

    return cast(unescape(value));
}

export const cookieExists = (name) => {
    return getCookie(name) !== undefined;
}

export const deleteCookie = (name) => {
    setCookie({
        name: name,
        value: undefined,
        duration: -1,
    });
}

