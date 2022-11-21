import http from '../http-common'
class LoadJson{
    getJson(path){
        //When loading the file, put the name of the json file as a parameter of this method, this way, we only need one service class :)
        return http.get(`data/${path}.json`)
    }
}
export default new LoadJson()