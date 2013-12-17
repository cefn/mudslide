$(function(){
	
	var from 			= MUDSLIDE.from, 
		to				= MUDSLIDE.to,
		label			= MUDSLIDE.label,
		pause			= MUDSLIDE.pause;
			
	var rules = [
		{".scene":[ 
			{".scene":from({backgroundColor:"red"},{duration:1.0,outerOffset:"-=0.9"})},
			pause(),
			{"li":[ 
				from({position:"relative",left:"200px"}), 
				pause(),
			]},
			label("scene"),
			pause(),
			{"li":to({position:"relative",left:"200px"}, {duration:0.3,innerOffset:"-=0.2"})},
			{".scene":to({backgroundColor:"blue",delay:0.1}, {duration:1.0})},
		]}
	];
				
	MUDSLIDE.initDeck(rules);
	MUDSLIDE.timeline.pause();
	
});


