import mith from 'mithril'
import { add } from '../TaskStorage'

const data = {
    value: ''
}

const form = {
    view: () => {
        return mith(`div`, [

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