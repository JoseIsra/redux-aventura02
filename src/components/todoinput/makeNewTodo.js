import randomId from 'random-id'

export default function makeNewTodo (todo){
    let len = 8;
    let pattern='aA0';
    let id = randomId(len , pattern);
    return {
        id,
        todo
    }
}