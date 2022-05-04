
export class Input {
    name: string  = '';
    customClass: string  = '';
    type: string  = 'text';
    placeholder: string  = '';
    pattern: string  = '';
    isReadOnly: string  = '';
    isDisabled: string  = '';
    isRequired: string  = '';
    fieldKey: string = '';
    onChange:() => {};
    onBlur: () => {};
    onFocus: () => {};

}

export class ColorPicker extends Input {

}

export class Inputs {
    collection: any[] = [];
    static fromJson(data) {
        const result = new Inputs();
        data.forEach(input => {
            result.collection.push(inputFactory)
        })
        return result;
    }
}
export class Select extends Input {
    values: any[] = [];
}

export const inputFactory = function(data) {
    switch (data.type) {
        case 'input':
            return new Input();
        case 'select':
            return new Select();
        case 'colorPicker':
            return new ColorPicker();
        default:
            return new Input();
    }
}
