//your code here
function drag(event){
	event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event){
	event.preventDefault();
}

function drop(event) {
        event.preventDefault();
        var fetchData = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(fetchData));
    }