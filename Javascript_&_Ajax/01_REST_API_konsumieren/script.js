document.getElementById("load").addEventListener("click", function(){
    
    fetch("https://jsonplaceholder.typicode.com/todos").then((result)=>{
        result.json().then((data)=>{
            getHTMLForTodos(data);
        })
    })
})



function getHTMLForTodos(data){
    let html = "<ul>";
    data.forEach(getHTMLForTodos => {
        html += "<li>" + getHTMLForTodos.title + "</li>"
    });
    html += "</ul>";
    document.getElementById("content").innerHTML = html;
}