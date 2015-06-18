
function Samuri(weapon) {
	this.weapon = weapon;
	this.stamina = 10;
	this.attack = function() {
		console.log('attack!!')
	
}};

var Jin = new Samuri('spear')

function MountedSamuri() {
	return true;
}

MountedSamuri.prototype = new Samuri('sword');

var Atilla = new MountedSamuri()