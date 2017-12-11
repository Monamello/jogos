class Util {

	static getValue(texto){
		return prompt(texto);
	}

	static getInt(texto){
		return parseInt(this.getValue(texto));
	}

	static getFloat(texto){
		return parseFloat(this.getValue(texto));
	}

	static show(t){
		alert(t);
	}

	static getId(idQ){
		return document.getElementById(idQ);
	}

	static getValueHTML(idQualquer){
		return this.getId(idQualquer).value;
	}

	static getValueInt(id){
		return parseInt(this.getValueHTML(id));
	}

	static getValueFloat(id){
		return parseFloat(this.getValueHTML(id));
	}

	static setHTML(id, valor){
		this.getId(id).innerHTML = valor;
	}

	static addHTML(id, valor, sep){
		this.getId(id).innerHTML += valor + sep;
	}
}
