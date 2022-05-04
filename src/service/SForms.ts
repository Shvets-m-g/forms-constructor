import {Inputs, inputFactory} from "../dto/Form";
const PATH = '/local/Get.json'

export default class SForms {
    async get(): Promise<any> {
        return fetch(PATH)
            .then(response => Inputs.fromJson(response))
    }

}