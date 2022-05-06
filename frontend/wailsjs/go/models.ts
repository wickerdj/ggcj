export namespace main {
	
	export class Joke {
	    id: string;
	    joke: string;
	
	    static createFrom(source: any = {}) {
	        return new Joke(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.joke = source["joke"];
	    }
	}

}

