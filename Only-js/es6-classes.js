class Persone {
	constructor(name = 'User', lastName = 'Name', age = Persone.defaultAge()) {
		this.name = name;
		this.lastName = lastName;
		this.age = age;
		this._status = 'user';
	}

	get status() { 
		return this._status;
	}

	set status(value) {
		value !== undefined && (value === 'admin' || value === 'user')
		? this._status = value
		: console.error('Введите значения admin/user!')
	}

	static defaultAge() { 
		return '0'
	}
}

Persone.id = "00000000";


let Nick = new Persone('Nick', 'Scotitch' , '29');
Nick.id = '12345678';