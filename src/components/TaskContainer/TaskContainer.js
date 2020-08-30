import mith from 'mithril'
import Task from './Task'
import storage from './TaskStorage'
import './style.scss'

const container = {
    view: () => {
        return mith('div.taskContainer', storage.list.map((task, index) => {
            return mith(Task, { id: index })
        }))
    }
}

export default container