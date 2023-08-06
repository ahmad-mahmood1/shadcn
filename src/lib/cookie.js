import Cookie from "js-cookie"

export const setCookie = (name, value, options) => {
  Cookie.set(name, value)
}

export const getCookie = name => {
  return Cookie.get(name)
}

export const removeCookie = (name, options) => {
  return Cookie.remove(name, options)
}
