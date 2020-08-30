const key = 'todo-app'

const storageString = localStorage.getItem(key)

/** @type {Array<{title: string, isDone: boolean}>} */
const list = storageString ? JSON.parse(storageString) : []

const storage = {
    list
}

export function add(title) {
    list.push({ title, isDone: false })
    updateLocalStorage()
}

export function del(id) {
    storage.list.splice(id, 1)
    updateLocalStorage()
}

function updateLocalStorage() {
    localStorage.setItem(key, JSON.stringify(storage.list))
}

export default storage