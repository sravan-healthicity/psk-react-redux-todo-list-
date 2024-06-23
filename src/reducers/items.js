const items = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEMS':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'UPDATE_ITEM':
            return state.map(item =>
                item.id === action.id ? { ...item, completed: !item.completed } : item
            )
        case 'DELETE_ITEM':
            return {
                ...state,
                items: state.todos.filter(item => item.id !== action.payload),
            };
        default:
            return state
    }
}

export default items;