console.log('HELLO');

const recipes = [
	{
		title: 'Eggs',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Loïc',
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
		title: 'Eggs',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Loïc',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 1596168522409,
	},
	{
		title: 'My recipe',
		picture: 'https://bit.ly/2ZXyiKI',
		author: 'Loïc',
		difficulty: 'easy',
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Crack the eggs on it',
			'Wait, put them out',
			'Add some salt on it',
		],
		id: 1596168522409,
	},
];

const renderCard = () => {
	// check the recipes collection

	// generate the HTML
	const container = document.querySelector('.container');

	recipes.forEach(element => {
		const recipesHTML = `
			<div class="card">
				<h2>${element.title}</h2>
				<img src="${element.picture}" alt="">
				<p data-id="">
				<ul>
				   <li>Timing</li>
				   <li>Difficulty</li>
				</ul>
				<button classe="btn">More Info</button>
			</div>
			`;
		container.innerHTML = recipesHTML;
	    });
	};
	
	// Creat modal 
	const outerModal = document.querySelector('.outer-modal');
	const innerModal = document.querySelector('.inner-modal');
	const moreInfoBtn = document.querySelector('.btn');


	const showMoreInfo = ingredients => {
		// Grab the detail
		
		if (e.target.matches('btn')) {
			const parent = e.target.closest('.card');
			const id = number(parent.dataset.id);
		}
		
		// Creat the innerHtml
		
		// open the modal 
		
	
	
	// Function to close the modal
	}


// put it in the DOM

const generateButton = document.querySelector('button.generate');
generateButton.addEventListener('click', renderCard);
