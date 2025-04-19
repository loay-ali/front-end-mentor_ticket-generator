function linear_range(n) {
	const r = [];

	for( let i = 1;i <= n;i++ ) {
		r.push(i);
	}

	return r;
}

function range(n) {
	const r = [];

	for( let i = 1;i <= n;i++ ) {
		for( let ii = 1;ii <= n;ii++ ) {
			r.push([i,ii]);
		}
	}

	return r;
}

function create_firework(parent_ele = document.body,particles=20) {
	const container = document.createElement('div');
	container.className = 'bw-bigbang-container';

	create_particles(container,particles);

	parent_ele.appendChild(container);
}

function create_particles(parent_ele,number=20) {

	let randomize_range = range(number);
	let color_random_range = linear_range(360);

	for( let i = 0;i < number;i++ ) {
		const ele = document.createElement('p');
		ele.className = 'bw-bigbang-particle';

		const choosed_range = Math.floor(Math.random() * randomize_range.length);
		const choosed_pos = randomize_range[choosed_range];

		const choosed_color_index = Math.floor(Math.random() * color_random_range.length);
		const choosed_color = color_random_range[choosed_color_index];

		ele.style.top = ((choosed_pos[1] / 20) * 100) +'%';
		ele.style.left = ((choosed_pos[0] / 20) * 100) +'%';
		ele.style.backgroundColor = "hsl("+ choosed_color +",100%,50%)";
		ele.style.color = "hsl("+ choosed_color +",100%,50%)";

		randomize_range = randomize_range.filter((_,ind) => { return ind != choosed_range;});
		color_random_range = color_random_range.filter((_,ind) => { return ind != choosed_color_index;});

		parent_ele.appendChild(ele);
	}
}

document.body.onload = function() {
	create_firework(document.getElementById('top-left'));
	create_firework(document.getElementById('bottom-right'));
};