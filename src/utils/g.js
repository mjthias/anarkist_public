// VARS
export const API_BASE_URL = import.meta.env.PUBLIC_ENV == 'dev' ? "http://127.0.0.1:5555" : "http://anarkist.eu.pythonanywhere.com";
export const SUPPORTED_LANGS = ["da", "en"]
export const MAIN_LANG = "da"
export const LANG_STRINGS = {
    da: {
        beers: "Øl",
        beersLink: "Gå til øl",
        readMore: "Læs mere",
        pizzas: "Pizzaer",
    },
    en: {
        beers: "Beers",
        beersLink: "Go to beers",
        readMore: "Read more",
        pizzas: "Pizzas",
    }
}

// FUNCTIONS
export function slugify(value) {
    return value
        .toLowerCase()
        .replace("ø", "oe")
        .replace("æ", "ae")
        .replace("å", "aa")
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

export function toBarPath(obj) {
    return `${slugify(obj.bar_name)}/${slugify(obj.bar_street)}-${slugify(obj.bar_city)}`
}

export function filterTapsByBarId(taps, barId) {
    return taps.filter((tap) => tap.fk_bar_id  == barId)
}

