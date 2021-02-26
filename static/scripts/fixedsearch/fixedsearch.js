// https://gist.github.com/Arty2/8b0c43581013753438a3d35c15091a9f

// static/scripts/fixedsearch/fixedsearch.js
/*--------------------------------------------------------------
fixedsearch — Super fast, client side search for Hugo.io with Fusejs.io
based on https://gist.github.com/cmod/5410eae147e4318164258742dd053993
--------------------------------------------------------------*/

fixedsearch = function(){
	var search_form = document.getElementById('search-form'); // search form
	var search_input = document.getElementById('search-input'); // input box for search
	var search_submit = document.getElementById('search-submit'); // form submit button
	var search_results = document.getElementById('search-results'); // targets the <ul>
	var fuse; // holds our search engine
	var search__focus = false; // check to true to make visible by default
	var results_available = false; // did we get any search results?
	var first_run = true; // allow us to delay loading json data unless search activated
	var first = search_results.firstChild; // first child of search list
	var last = search_results.lastChild; // last child of search list


	/*--------------------------------------------------------------
	The main keyboard event listener running the show
	--------------------------------------------------------------*/


	/*--------------------------------------------------------------
	The main keyboard event listener running the show
	--------------------------------------------------------------*/


	/*--------------------------------------------------------------
	Load our json data and builds fuse.js search index
	--------------------------------------------------------------*/
	search_form.addEventListener('focusin', function(e) {
		search_init(); // try to load the search index
	});

	/*--------------------------------------------------------------
	Make submit button toggle focus
	--------------------------------------------------------------*/


	/*--------------------------------------------------------------
	Remove focus on blur
	--------------------------------------------------------------*/


	/*--------------------------------------------------------------
	Toggle focus UI of form
	--------------------------------------------------------------*/


	/*--------------------------------------------------------------
	Fetch some json without jquery
	--------------------------------------------------------------*/
	function fetch_JSON(path, callback) {
		var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function() {
			if (httpRequest.readyState === 4) {
				if (httpRequest.status === 200) {
					var data = JSON.parse(httpRequest.responseText);
						if (callback) callback(data);
				}
			}
		};
		httpRequest.open('GET', path);
		httpRequest.send();
	}

	/*--------------------------------------------------------------
	Load script
	based on https://stackoverflow.com/a/55451823
	--------------------------------------------------------------*/
	function load_script(url) {
		return new Promise(function(resolve, reject) {
			let script = document.createElement("script");
			script.onerror = reject;
			script.onload = resolve;
			if (document.currentScript) {
				document.currentScript.parentNode.insertBefore(script, document.currentScript);
			}
			else {
				document.head.appendChild(script)
			}
			script.src = url;
		});
	}

	/*--------------------------------------------------------------
	Load our search index, only executed once
	on first call of search box (Ctrl + /)
	--------------------------------------------------------------*/
	function search_init() {
		if (first_run) {
			load_script(window.location.origin + '/scripts/fixedsearch/fuse.js').then(() => {
				search_input.value = ""; // reset default value
				first_run = false; // let's never do this again
				fetch_JSON(search_form.getAttribute('data-language-prefix') + '/index.json', function(data){
					var options = { // fuse.js options; check fuse.js website for details
						shouldSort: true,
						location: 0,
						distance: 100,
						threshold: 0.4,
						minMatchCharLength: 2,
						keys: [
							'permalink',
							'title',
                            'collections'
							]
					};

					fuse = new Fuse(data, options); // build the index from the json file

					search_input.addEventListener('keyup', function(e) { // execute search as each character is typed
						search_exec(this.value);
					});
					console.log("index.json loaded"); // DEBUG
				});
			}).catch((error) => { console.log('fixedsearch failed to load: ' + error); });
		}
	}

	/*--------------------------------------------------------------
	Using the index we loaded on Ctrl + /, run
	a search query (for "term") every time a letter is typed
	in the search box
	--------------------------------------------------------------*/
	function search_exec(term) {
		let results = fuse.search(term); // the actual query being run using fuse.js
		let search_items = ''; // our results bucket

		if (results.length === 0) { // no results based on what was typed into the input box
			results_available = false;
			search_items = '';
		} else { // build our html
			for (let item in results.slice(0,5)) { // only show first 5 results
				search_items = search_items + '<li class="w-1/6 mx-2"><a href="' + results[item].item.permalink + '" tabindex="0">' +
					'<img src="' + results[item].item.image + '">' +
                    '<div class="title">' + results[item].item.title + '</div>' +
					'<div class="price">'+ results[item].item.price +'</div>' +
				'</a></li>';
			}
			results_available = true;
		}

		search_results.innerHTML = search_items;
		if (results.length > 0) {
			first = search_results.firstChild.firstElementChild; // first result container — used for checking against keyboard up/down location
			last = search_results.lastChild.firstElementChild; // last result container — used for checking against keyboard up/down location
		}
	}
}();