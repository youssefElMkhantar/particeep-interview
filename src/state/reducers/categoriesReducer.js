const reducer = (state = ['Comedy',
  'Thriller',
  'Animation',
  'Drame'], action) => {
        switch(action.type){
            case "updateCategory":
                return action.payload;
            default:
                return state;
        }
}

export default reducer;