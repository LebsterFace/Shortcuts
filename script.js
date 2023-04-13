class URLRed{constructor(find,out){this.find=find,this.out=out;}}
var settings = [];

$('#newButton').click(function() {
  $('#settings').append('<tr class="setting"><td class="in"><textarea spellcheck="false" class="intext text"></textarea></td><td class="out"><textarea spellcheck="false" class="outtext text"></textarea></td></tr>')
});

function calculateSettings() {
  settings=[];
  $('.setting').each(function() {
    settings.push(new URLRed($(this).children(".in").children().val(),$(this).children(".out").children().val()))
  });
}

$(document).ready(function() {
	chrome.storage.local.get("key",function(result) {
		let x = JSON.parse(result.key);
		x.forEach(function(me,index) {
			if (me.out==""&&me.find=="") {	x.splice(index,1);return;	}
			if (index==0) {
				$('.setting').children(".in").children().val(me.find);
				$('.setting').children(".out").children().val(me.out);
			} else {
				$('#settings').append(`<tr class="setting"><td class="in"><textarea spellcheck="false" class="intext text">${me.find}</textarea></td><td class="out"><textarea spellcheck="false" class="outtext text">${me.out}</textarea></td></tr>`)
			}
		});
		doStuff();
	});
});

$(document).keydown(function() {doStuff()});
$(document).keyup(function() {doStuff()});

function doStuff() {
	calculateSettings();
	chrome.storage.local.set({"key":JSON.stringify(settings)});
}
