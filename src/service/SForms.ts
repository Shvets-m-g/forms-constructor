import {Axios} from "axios";

const PATH = '/local/Get.json'

export default class SForms {
    async get(): Promise<any> {
        let response = undefined;
        const params = {

        }/*
        await Axios.get(PATH, {params: params}).then(data => {
            console.log('response', data.data)

            response = data.data;
        }).catch(error => {
            console.log(error);
            throw {status: 'error'}
        })
        return response;*/
    }

}