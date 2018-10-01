sap.ui.define([], function() {
	'use strict';

	return {
		setTileBg: function(status) {
			status = status.toUpperCase();
			if (status === 'ERROR') {
				return 'tile redBg';
			} else {
				return 'tile';
			}
		},
		setStatusIcon: function(status) {
			if (typeof status !== 'undefined' && status !== null) {
				status = status.toUpperCase();
				if (status === 'ERROR') {
					return 'alert';
				} else if (status === 'INPROGRESS') {
					return 'away';
				} else if (status === 'DECOMISSIONED') {
					return 'appear-offline';
				} else if (status === 'AVAILABLE') {
					return 'cart-approval';
				} else {
					return 'sys-enter-2';
				}
			} else {
				return 'sys-enter-2';
			}
		},
		setStatusIconColour: function(status) {
			if (typeof status !== 'undefined' && status !== null) {
				status = status.toUpperCase();
				if (status === 'ERROR') {
					return '#e83b3b';
				} else if (status === 'INPROGRESS') {
					return '#ff8600';
				} else if (status === 'DECOMISSIONED') {
					return '#a7a7a7';
				} else {
					return '#7ae646';
				}
			} else {
				return '#7ae646';
			}
		},
		setStatusText: function(status) {
			if (typeof status !== 'undefined' && status !== null) {
				status = status.toUpperCase();
				if (status === 'ERROR') {
					return 'Issue Detected';
				} else if (status === 'INPROGRESS') {
					return 'Work In Progress';
				} else if (status === 'DECOMISSIONED') {
					return 'Decomissioned';
				} else if (status === 'AVAILABLE') {
					return 'Available';
				} else {
					return 'Operational';
				}
			} else {
				return 'Operational';
			}
		},
		setState: function(status) {
			if (typeof status !== 'undefined' && status !== null) {
				status = status.toUpperCase();
				if (status === 'ERROR') {
					return 'Error';
				} else if (status === 'INPROGRESS') {
					return 'Warning';
				} else if (status === 'DECOMISSIONED') {
					return 'None';
				} else {
					return 'Success';
				}
			} else {
				return 'Success';
			}
		},
		showClaimButton: function(status) {
			if (typeof status !== 'undefined' && status !== null) {
				status = status.toUpperCase();
				if (status === 'ERROR') {
					return true;
				} else if (status === 'INPROGRESS') {
					return false;
				} else {
					return false;
				}
			} else {
				return false;
			}
		},
		showFinishButton: function(status) {
			if (typeof status !== 'undefined' && status !== null) {
				status = status.toUpperCase();
				if (status === 'ERROR') {
					return false;
				} else if (status === 'INPROGRESS') {
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
		},
		formatTxDate: function(date) {
			if (typeof date !== 'undefined' && date !== null) {
				date = parseInt(date, 10);
				return new Date(date * 1000).toLocaleString();
			} else {
				return '';
			}
		},
		showPrePart: function(prePart) {
			if (typeof prePart !== 'undefined' && prePart !== '') {
				return true;
			} else {
				return false;
			}
		},
		returnRandomDigits: function(bool) {
			let string = 'Purchase Order 45' + Math.floor(Math.random() * 90000) + 1000 + ' has been generated';
			return string;
		},
		returnImgSrc: function(description) {
			if (typeof description !== 'undefined') {
				return description.toLowerCase() + '.png';
			} else {
				return 'fn.png';
			}
		},
		showNavToVDS: function(description) {
			if (typeof description !== 'undefined') {
				description = description.toUpperCase();
				if (description.indexOf('LANDING') > -1 || description.indexOf('NOZZLE') > -1) {
					return true;
				} else {
					return false;
				}
			}
		}
	};
});
