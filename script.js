let audio = new Audio();
let start=false;
[].forEach.call(document.querySelectorAll('.play'), function(item) {
        item.addEventListener('click', function() {
      		let audioName = item.querySelector('audio').getAttribute('src');
        	audio.src = audioName;
       		if (!start){
				audio.play(); start=true;
			} else {
        		audio.pause(); start=false;
        	}

        });
    });




