export const setStorageItem = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value))
}

export const getStorageItem = name => {
  const item = localStorage.getItem(name)
  let value = ""
  try {
    value = JSON.parse(!!item && item !== "undefined" ? item : null)
  } catch (e) {
    value = item
  }
  return value
}

export const removeStorageItem = name => {
  return localStorage.removeItem(name)
}
