const initState = {
    projects: [
        {id: '1', title: 'Hello', content: 'stuff about this project'},
        {id: '2', title: 'World', content: 'stuff about this project'},
        {id: '3', title: 'Bye', content: 'stuff about this project'}
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer