const initState = {
    projects: [
        {id: '1', title: 'hello', content: 'stuff about this project'},
        {id: '2', title: 'world', content: 'stuff about this project'},
        {id: '3', title: 'bye', content: 'stuff about this project'}
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer