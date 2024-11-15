function setCalendar(color){
	const pinkclass = "calendar-table_pink_event";
	const redclass = "calendar-table_red_event";
	const orangeclass = "calendar-table_orange_event";
	const greenclass = "calendar-table_green_event";
	const darkorangeclass = "calendar-table_darkorange_event";

	const dateclass = "calendar-table_darkorange_event";
	const dateitemclass = "calendar-table_darkorange_event";

	document.querySelectorAll('.calendar-table__col').forEach(function(button) {
		button.classList.remove(pinkclass);
		button.classList.remove(redclass);
		button.classList.remove(orangeclass);
		button.classList.remove(greenclass);
		button.classList.remove(darkorangeclass);
		button.classList.remove('calendar-table__event');
	});

	if(color=="pink"){
		const dates = [6,7,13,14,20,21,27,28]
		document.querySelectorAll('.calendar-table__col').forEach(function(button) {
			if(button.classList.contains('calendar-table__inactive')){
				return;
			}
			const nestedElement = button.querySelector('.calendar-table__item');
			if(nestedElement) {
			const content = nestedElement.textContent;
			if(dates.includes(Number(content))){
				button.classList.add(pinkclass);
			}
			console.log(content);
			}
		});

	}
	if(color=="red"){
		const dates = [2,3,4,5]
		document.querySelectorAll('.calendar-table__col').forEach(function(button) {
			if(button.classList.contains('calendar-table__inactive')){
				return;
			}
			const nestedElement = button.querySelector('.calendar-table__item');
			if(nestedElement) {
			const content = nestedElement.textContent;
			if(dates.includes(Number(content))){
				button.classList.add(redclass);
			}
			console.log(content);
			}
		});

	}
	if(color=="orange"){
		const dates = [8,9,10,11,12]
		document.querySelectorAll('.calendar-table__col').forEach(function(button) {
			if(button.classList.contains('calendar-table__inactive')){
				return;
			}
			const nestedElement = button.querySelector('.calendar-table__item');
			if(nestedElement) {
			const content = nestedElement.textContent;
			if(dates.includes(Number(content))){
				button.classList.add(orangeclass);
			}
			console.log(content);
			}
		});

	}
	if(color=="green"){
		const dates = [15,16,17,18,19]
		document.querySelectorAll('.calendar-table__col').forEach(function(button) {
			if(button.classList.contains('calendar-table__inactive')){
				return;
			}
			const nestedElement = button.querySelector('.calendar-table__item');
			if(nestedElement) {
			const content = nestedElement.textContent;
			if(dates.includes(Number(content))){
				button.classList.add(greenclass);
			}
			console.log(content);
			}
		});

	}
	if(color=="darkorange"){
		const dates = [22,23,24,25,26]
		document.querySelectorAll('.calendar-table__col').forEach(function(button) {
			if(button.classList.contains('calendar-table__inactive')){
				return;
			}
			const nestedElement = button.querySelector('.calendar-table__item');
			if(nestedElement) {
			const content = nestedElement.textContent;
			if(dates.includes(Number(content))){
				button.classList.add(darkorangeclass);
			}
			console.log(content);
			}
		});

	}
}



function showpdf(){
$("#download_content").css("display", "block");
}

function checkBonus(){
	$("#progress-bar").click();
}

/* Helper function */
function download_file(fileURL, fileName) {
    // for non-IE
    if (!window.ActiveXObject) {
        var save = document.createElement('a');
        save.href = fileURL;
        save.target = '_blank';
        var filename = fileURL.substring(fileURL.lastIndexOf('/')+1);
        save.download = fileName || filename;
	       if ( navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) && navigator.userAgent.search("Chrome") < 0) {
				document.location = save.href;
// window event not working here
			}else{
		        var evt = new MouseEvent('click', {
		            'view': window,
		            'bubbles': true,
		            'cancelable': false
		        });
		        save.dispatchEvent(evt);
		        (window.URL || window.webkitURL).revokeObjectURL(save.href);
			}
    }

    // for IE < 11
    else if ( !! window.ActiveXObject && document.execCommand)     {
        var _window = window.open(fileURL, '_blank');
        _window.document.close();
        _window.document.execCommand('SaveAs', true, fileName || fileURL)
        _window.close();
    }
}
