export const API_BASE_URL = process.env.NODE_ENV == 'production' ? "TODO" : "http://127.0.0.1:5555";

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

export function toBeerPath(obj) {
    return `${slugify(obj.brewery_name)}/${slugify(obj.beer_name)}`
}

export function filterTapsByBarId(taps, barId) {
    return taps.filter((tap) => tap.fk_bar_id  == barId)
}

