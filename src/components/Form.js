import mith from 'mithril'
import { add } from './TaskContainer/TaskStorage'

const data = {
    value: ''
}

const form = {
    view: () => {
        return mith(`div.form`, [

            mith(`input`, {
                type: 'text',
                onchange({ target }) {
                    data.value = target.value
                }
            }),

            mith(`div.button`, {
                onclick() {
                    add(data.value)
                }
            }, `add`)
        ])
    }
}

export default form