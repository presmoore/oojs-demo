
function Samuri(weapon) {
	this.weapon = weapon;
	this.attack = function() {
		console.log('attack!!')
	
}};

function MountedSamuri() {
	console.log('on a horse');
}

MountedSamuri.prototype = new Samuri('sword');

