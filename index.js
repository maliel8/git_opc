/*
	trim();		permet d'ignorer les espace present dens les champs de saisie
	 espression permettant de verifier email: 
	 	*r_gama.22-t@gmail.com
	 	/^[a-z 0-9 . _-]+@[a-z 0-9 . _-]{2,}\.[a-z A-Z]{2,4}$/
	
*/

// recuperation des elements du formulaire 

const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

// evenements

form.addEventListener('submit',e=>{
	e.preventDefault(); // pour modifier le comportement par defaut lord du click sur le button valide
	form_verify();	// appelle de la fonction
})

//
function form_verify() {
	// optention de toute les valeur du form recuperer
	const uservalue = username.value.trim(); 
	const emailvalue = email.value.trim();
	const pwdvalue = password.value.trim();
	const pwd2value = password2.value.trim();

	// verification du user name

	if(uservalue === "")
	{
		let message ="user ne peut pas être vide ";
		setError(username,message);
	}
	else if(!uservalue.match(/^[a-zA-Z]/)) 
	{
		let message = "username doit commencer par une lettre";
		setError(username,message);

	}
	else 
		{
			let letternum = uservalue.length;
			if(letternum < 3)
			{
				let message = "le nombre de caractere du nom doit être > 3";
				setError(username,message);
			}
			else
			{
				setSuccess(username);
			}
		}
	// verification de l'email
		if(emailvalue === "")
		{
			let message = "l'email ne peut pas être vide";
			setError(email,message);
		}
		else if(!email_verify(emailvalue))
		{
			let message = "email non valide";
			setError(email,message);
		}
		else
		{
			setSuccess(email);
		}

		// verification du password
		if(pwdvalue === "")
		{
			let message = "le password ne doit pas être vide";
			setError(password,message);
		}
		else if(!password_verify(pwdvalue))
		{
			let message =" mot de passe trop faible (8 a 12 caracteres avec des caractere speciaux)";		
			setError(password,message);
		}
		else
		{
			setSuccess(password);
		}

		// verification de password2
		if(pwd2value =="")
		{
			let message = "le mot de passe ne doit pas être vide"
			setError(password2,message);

		}
		else if (pwdvalue != pwd2value)
		{
			let message = "les deux mots de passe ne correcponde pas !!";
			setError(password2,message);
		}
		else
		{
			setSuccess(password2);
		}

}

// fonction  ------

function setError(elem,message)
{
	//recuperation du parent de l'element
	const formControl = elem.parentElement; // reccuper le nom de la class div
	const small = formControl.querySelector('small');
	//ajout du message d'erreur
	small.innerText = message; // remplace le message de small 
	// ajout de la class d'erreur

	formControl.className = "form-control error";// modifie le nom de la class div
}

function setSuccess(elem)
{
	const formControl = elem.parentElement;
	formControl.className = "form-control success";
}

function email_verify(email)
{
	/* espression permettant de verifier email: 
	 	*r_gama.22-t@gmail.com
	 	/^[a-z 0-9 . _-]+@[a-z 0-9 . _-]{2,}\.[a-z A-Z]{2,4}$/

	 	exp.test(val) et retourne true si val repon au criter de exp ou false
	*/
	return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z A-Z]{2,4}$/.test(email);
}

function password_verify(password)
{
	return /^(?=.*[0-9])(?=.*[!@$%^&*])[a-zA-Z0-9!@$%^*]{8,12}$/.test(password);
}