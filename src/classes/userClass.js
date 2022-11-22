export default class userClass{
    id;
    first_name;
    last_name;
    username;
    email;
    constructor(id, first_name, last_name, username, email){
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.email = email;
    }

    toObject(){
        return {
            id:this.id,
            first_name:this.first_name,
            last_name:this.last_name,
            username:this.username,
            email:this.email
        }
    }

    setSession(){
        sessionStorage.setItem('logeduser',JSON.stringify(this.toObject()))
    }
}