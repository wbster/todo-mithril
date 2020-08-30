import mith from 'mithril'
import storage, { del } from '../TaskStorage'

const Task = {
    view: ({ attrs }) => {
        const id = attrs.id
        const task = storage.list[id]
        const title = task.title
        const isDone = task.isDone
        const color = isDone ? 'green' : 'red'
        const onchange = () => del(id)

        return mith(`div.task`, { style: { color } }, [
            mith(`input`, {
                type: 'checkbox',
                cheched: isDone,
                onchange
            }),
            mith(`span`, `${ title }`)
        ])
    }
}

export default Task