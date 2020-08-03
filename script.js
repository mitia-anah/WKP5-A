console.log('HELLO');

const recipes = [
	{
		title: 'Eggs',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Rosny',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 1596168482053,
	},
	{
		title: 'Burger',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Rosny',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['tomato', 'salt', 'carrot salad'],
		steps: [
			'Slice the bread',
			'put some salad in it',
			'Add tomato sauce',
			'Eat it!',
		],
		id: 1596168522409,
	},
	{
		title: 'Fried fish',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Rosny',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['flour', 'fish', 'salt'],
		steps: [
			'Put the pan on the fire',
			'Pour the oil',
			'Wait for a while until it is hot',
			'Fry the fish',
		],
		id: 1596168522409,
	},
];

// Grab the container element for the list
const container = document.querySelector('.container');
const outerModal = document.querySelector('.outer-modal');
const innerModal = document.querySelector('.inner-modal');


const renderCard = () => {
	// check the recipes collection

    // Generate the html
	// Set up a loop that goes through the items in the recipes object
    for (let i = 0; i < recipes.length; i++) {
		const recipesHTML = `
		<div data-id="${recipe.id}">
		<header><h2>${recipe.title}</h2></header>
		<img src="${recipe.picture}" alt="${recipe.title}">
		<ul>
			<li>Timing:${recipe.timing}</li>
			<li>Difficulty:${recipe.difficulty}</li>
		</ul>
		<button aria-label="More Info">More Info</button>
	</div>
		`;
		container.innerHTML += recipesHTML;
	}	
};

// Open modal
const openModal = e => {
	outerModal.classList.add("open");
	const moreInfoHTML = `
		<div class="card">
			<h2>${e.title} by <i>${e.author}</i></h2>
			<img src="${e.picture}" alt="">
			<div class="detail">
				<p>timing:${e.timing}</p>
				<p>difficulty:${e.difficulty}<p>
			</div>	
			<div class='preparation'>
				<p>Step:
					<ul>
						${e.steps}
					</ul>
				</p>
				<p>Ingredient:
					<ul>
						${e.ingredients}
					</ul>
				</p>
			</div>
		</div>
		`;
	innerModal.innerHTML = moreInfoHTML;
};

// Get the parent element then get the id and use find to get fullobject
const handleMoreInfo = e => {
	if (e.target.matches('button.button-info')) {
		const parentElement = e.target.closest('.card');
		const id = Number(parentElement.dataset.id);
		const recipe = recipes.find(recipe => recipe.id === id);
		openModal(recipe);
	}

};

// when click outside the modal, the modal is closed
const closeModal = e => {
    const isOutside = !e.target.closest('.inner-modal');
    if (isOutside) {
        outerModal.classList.remove('open');
    }
};

const closeModalWithEscapeKey = e => {
    if (e.key === 'Escape') {
        outerModal.classList.remove('open');
    }
};


// add event listener
window.addEventListener('keydown', closeModalWithEscapeKey);
outerModal.addEventListener('click', closeModal);
window.addEventListener('click', handleMoreInfo);

// put it in the DOM

const generateButton = document.querySelector('button.generate');
generateButton.addEventListener('click', renderCard);
