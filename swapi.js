let button = document.querySelector('#button')
let height = document.querySelector('#height')
let mass = document.querySelector('#mass')
let hairColor = document.querySelector('#hairColor')
let skinColor = document.querySelector('#skinColor')
let birthYear = document.querySelector('#birthYear')
let gender = document.querySelector('#gender')



	function getInfo(){
		/*let randomNumber = Math.floor((Math.random() * 88) * 1)*/
		let apiUrl = 'http://swapi.co/api/people/1'

		axios.get(apiUrl).then(function(response){
				updateInfo(response.data)
		})
	}

	function updateInfo(data){
		height.innerText = `Taille : ${data.height} `
		mass.innerText = `Poids : ${data.mass} `
		hairColor.innerText = `Couleur de cheveux : ${data.hair_color} `
		skinColor.innerText = `Couleur de peau : ${data.skin_color} `
		birthYear.innerText = `Naissance : ${data.birth_year} `
		gender.innerText = `Sexe : ${data.gender} `

	}
button.addEventListener('click', getInfo)




let button2 = document.querySelector('#button2')
let height2 = document.querySelector('#height2')
let mass2 = document.querySelector('#mass2')
let hairColor2 = document.querySelector('#hairColor2')
let skinColor2 = document.querySelector('#skinColor2')
let birthYear2 = document.querySelector('#birthYear2')
let gender2 = document.querySelector('#gender2')

function getInfo2(){
		let apiUrl = 'http://swapi.co/api/people/2'

		axios.get(apiUrl).then(function(response){
				updateInfo2(response.data)
		})
	}

function updateInfo2(data){
		height2.innerText = `Taille : ${data.height} `
		mass2.innerText = `Poids : ${data.mass} `
		hairColor2.innerText = `Couleur de cheveux : ${data.hair_color} `
		skinColor2.innerText = `Couleur de peau : ${data.skin_color} `
		birthYear2.innerText = `Naissance : ${data.birth_year} `
		gender2.innerText = `Sexe : ${data.gender} `

	}
button2.addEventListener('click', getInfo2)












	

 
