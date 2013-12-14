// JavaScript Document

function $$(x){
	return document.getElementById(x);
	}

function loadPage(url, loadto){
		show();
		var r= '' ;
		r = new XMLHttpRequest();
		r.open("GET", 'assets/pages/'+url, true);
		//r.setRequestHeader("Content-type", "application/json");
		r.onreadystatechange = function(){
			
		if (r.readyState == 4 && r.status == 200)
			{
			
			$$(loadto).innerHTML = r.responseText;
			setTimeout("hide()",1500);
			}
		}
				r.send(null);
		
			
			

	}
function show(){
		$$('loading').style.display = 'block';
	}
function hide(){
		$$('loading').setAttribute('style', 'display:none');

	}