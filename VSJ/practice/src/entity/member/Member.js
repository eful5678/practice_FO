
export default class Login {
    constructor(result) {
        super();

        const _data = result || {};

        this.username = _data.username || '';
        this.password = _data.password || '';
    }

}