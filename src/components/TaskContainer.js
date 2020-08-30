import mith from 'mithril'
import Task from './Task'
import storage from '../TaskStorage'

const container = {
    view: () => {
        return mith('div.list', storage.list.map((task, index) => {
            return mith(Task, { id: index })
        }))
    }
}

export default container