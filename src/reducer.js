export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
   // token: 'BQAZLKg5AMNPnjx5HRp6AX_TclvCr8nGJW595ZDxnqajnjMKhCzQFfNJjfJ-q0o09OZ8kUn6KZurutzKj0-0reyzbgLIsZi3jDlBibpAbps9wkI7tmaRfedO99c4Pm7OhXDgjID-6ouBd8F5m1E9YEyY5tI',

};

const reducer = (state,action) => {
console.log(action);
//ACTION -> type,[payload]
switch(action.type) {
     case 'SET_USER': 
     return {
         ...state,
         user: action.user
     }
     case 'SET_TOKEN':
         return {
             ...state,
             token: action.token,
         }
    case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
    case "SET_DISCOVER_WEEKLY":
                return {
                    ...state,
                    discover_weekly: action.discover_weekly,
                }    
     default:
         return state;
        }

};

export default reducer;