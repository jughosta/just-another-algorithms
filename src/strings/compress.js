'use strict';

module.exports = {

	/**
	 * Compress the string
	 * @param {string} text
	 * @return {string}
	 */
	compress: function (text) {
		var n = text.length;
		if (n < 2) {
			return text;
		}

		var compressionPart = '';

		var compression = {
			parts: [],
			wholeLength: 0,
			maxAllowedLength: 0,
			setMaxAllowedLength: function (len) {
				this.maxAllowedLength = len;
			},
			push: function (part) {
				this.parts.push(part);
				this.wholeLength += part.length;
			},
			isEffective: function () {
				return (this.wholeLength <= this.maxAllowedLength);
			},
			toString: function () {
				return this.parts.join('');
			}
		};

		var symbol = {
			value: '',
			count: 0,
			changeSymbol: function (value) {
				this.value = value;
				this.count = 1;
			},
			toString: function () {
				return this.value + this.count;
			}
		};

		symbol.changeSymbol(text[0]);
		compression.setMaxAllowedLength(n);

		function addPartToCompression() {
			compressionPart = symbol.toString();
			compression.push(compressionPart);
		}

		for (var i = 1; i < n; i++) {
			if (text[i] === symbol.value) {
				symbol.count++;
				continue;
			}

			addPartToCompression();
			if (!compression.isEffective()) {
				return text;
			}

			symbol.changeSymbol(text[i]);
		}

		addPartToCompression();
		if (!compression.isEffective()) {
			return text;
		}

		return compression.toString();
	}
};