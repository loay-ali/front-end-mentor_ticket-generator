document.body.onload = function() {

	//Validate on submit
	document.getElementById('submit-form').onclick = function(e) {
		e.preventDefault();

		let faults = false;
		const form = document.querySelector("#form > form");

		for( element of form.elements ) {
			if( element.nodeName == 'INPUT' ) {
				let parentElement = element.parentElement;
				if( parentElement.classList.contains('form-field') == false )
					parentElement = parentElement.parentElement;
				if( element.validity.valueMissing ) {
					parentElement.setAttribute('class','form-field error');
					faults = true;
				}else {
					parentElement.setAttribute('class','form-field');
				}
			}
		}

		if( faults == false ) {

			document.getElementById('ticket').style.display = 'block';
			document.getElementById('form').style.display = 'none';

			document.getElementById('sender-fullname').innerHTML = document.getElementById('fullname').value;
			document.getElementById('sender-email').innerHTML = document.getElementById('email').value;
			document.getElementById('ticket-full-name').innerHTML = document.getElementById('fullname').value;
			document.getElementById('ticket-github-username').innerHTML = "@"+ document.getElementById('github-username').value;
		}
	};

	//on Avatar Upload
	function on_upload_image(event) {

		event.currentTarget.parentElement.parentElement.className = 'form-field';

		const file = event.target.files;
		const img = document.getElementById('tmp-avatar');

		const tmp_img = URL.createObjectURL(new Blob(file));
		img.src = tmp_img;
		document.querySelector('#ticket-personal-info > img').src = tmp_img;
		img.style.padding = '0px';

		document.getElementById('no-file-uploaded').style.display = 'none';
		document.getElementById('file-uploaded').style.display = 'flex';

		document.getElementById('avatar').style.display = 'none';
	}

	for( file of document.querySelectorAll('input[type="file"]') ) {

		file.onchange = on_upload_image;
	}

	//Remove Image
	document.getElementById('remove-image').onclick = function() {
		const img = document.getElementById('tmp-avatar');

		img.src = './assets/images/icon-upload.svg';
		img.style.padding = '';

		document.getElementById('no-file-uploaded').style.display = '';
		document.getElementById('file-uploaded').style.display = 'none';

		document.getElementById('avatar').style.display = 'block';
	};

	//Change Image
	document.getElementById('change-image').onclick = function() {
		document.getElementById('avatar').click();
	};
};