// hhtps://developer.spotify.com/
//documentation/web-playback-sdk/quick-start/#

export const authEndpoint ="https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
 
const clientId = "2d69218a748d4cd4a877e28e03b9721f";
/*  Scopes are permissions to perform actions in my app */
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () =>{
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial,item) => {
        //accessToken=mysupersecretkey&name=anuj;
        var parts = item.split("=");
        initial[parts[0]] = 
        decodeURIComponent(parts[1]);

        return initial;
    }, {});
}
/*  ASCII code for space is %20 Token is astring that represents authentication*/
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

