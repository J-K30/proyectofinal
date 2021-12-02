// Pagos de plan premiun

var btnAbrirPopup = document.getElementById('btn-abrir-popupP'),
	overlay = document.getElementById('overlayP'),
	popup = document.getElementById('popupP'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popupP');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

// PLAN STANDAR

var btnAbrirPopup = document.getElementById('btn-abrir-popupS'),
	overlay = document.getElementById('overlayS'),
	popup = document.getElementById('popupS'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popupS');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

// PLAN BASICO

var btnAbrirPopup = document.getElementById('btn-abrir-popupB'),
	overlay = document.getElementById('overlayB'),
	popup = document.getElementById('popupB'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popupB');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});