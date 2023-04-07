type UserType={
    displayName:string,
    email:string,
    photoURL:string
}
export type ResultType={
    user:UserType
}

interface Coordinates{
    latitude:Number,
    longitude:Number
 }
export interface geoPostion{
    coords: Coordinates
}

export interface Err{
    message:String
}
