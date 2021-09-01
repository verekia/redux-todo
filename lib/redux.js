// Selectors are where you can expose which property of the state
// is accessible to the useSelector hook. This is also where you
// can *derive* data. For instance, we calculate doubleCount inside
// the selector, not in the state itself. An other typical case is
// to have a list in the store, and to filter or sort that list
// in a selector.

// export const countSelector = state => state.count
// export const doubleCountSelector = state => state.count * 2
