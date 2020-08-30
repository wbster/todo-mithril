import m, { mount } from 'mithril'
import container from './components/TaskContainer/TaskContainer'
import form from './components/form'

const { body } = document

const page = {
    view: () => {
        return m(`div.page`, [
            m(container),
            m(form)
        ])
    }
}

body.onload = () => {
    mount(body, page)
}