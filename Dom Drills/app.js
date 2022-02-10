
document.addEventListener("DOMContentLoaded", function() {
    let div = document.createElement("div"); 
    div.className = "header-container"; 
    document.body.appendChild(div);

    let h1 = document.createElement("h1"); 
    let h1Txt = document.createTextNode("This is an h1!"); 
    h1.appendChild(h1Txt); 
    h1.className = "h1"; 
    div.appendChild(h1); 

    let h2 = document.createElement("h2"); 
    let h2Txt = document.createTextNode("This is an h2!"); 
    h2.appendChild(h2Txt); 
    h2.className = "h2"; 
    div.appendChild(h2); 

    let h3 = document.createElement("h3"); 
    let h3Txt = document.createTextNode("This is an h3!");
    h3.appendChild(h3Txt); 
    h3.className = "h3"; 
    div.appendChild(h3);

    let h4 = document.createElement("h4"); 
    let h4Txt = document.createTextNode("This is an h4!");
    h4.appendChild(h4Txt);
    h4.className = "h4";
    div.appendChild(h4);

    let h5 = document.createElement("h5");
    let h5Txt = document.createTextNode("This is an h5!");
    h5.appendChild(h5Txt);
    h5.className = "h5"; 
    div.appendChild(h5);

    let h6 = document.createElement("h6"); 
    let h6Txt = document.createTextNode("This is an h6!");
    h6.appendChild(h6Txt);
    h6.className = "h6";
    div.appendChild(h6);

    
    let myColors = [
        "#007bff", 
        "#6c757d", 
        "#28a745", 
        "#dc3545", 
        "#ffc107", 
        "#17a2b8", 
        "#f8f9fa", 
        "#343a40" 
    ];

   
    function getRandomColor() {
        
        let myRandomColor = myColors[Math.floor(Math.random()*myColors.length)];
        
        return myRandomColor; 
    };

    
    h1.addEventListener("click", function() {
        let myRandomColor = getRandomColor();
        h1.style.color = myRandomColor;
    });
    
    h2.addEventListener("click", function() {
        let myRandomColor = getRandomColor();
        h2.style.color = myRandomColor;
    });
    
    h3.addEventListener("click", function() {
        let myRandomColor = getRandomColor();
        h3.style.color = myRandomColor;
    });
    
    h4.addEventListener("click", function() {
        let myRandomColor = getRandomColor();
        h4.style.color = myRandomColor;
    });
    
    h5.addEventListener("click", function() {
        let myRandomColor = getRandomColor();
        h5.style.color = myRandomColor;
    });
    
    h6.addEventListener("click", function () {
        let myRandomColor = getRandomColor();
        h6.style.color = myRandomColor;
    });

    let btn = document.createElement("button"); 
    let btnTxt = document.createTextNode("Click to add new list item"); 
    btn.appendChild(btnTxt);
    btn.className = "btn btn-lg btn-outline-secondary my-2";
    div.appendChild(btn);

    let ul = document.createElement("ul"); 
    div.appendChild(ul); 

    let liCount = 0; 


    function addToList() {
        liCount++; 
        let li = document.createElement("li"); 
        let liTxt = document.createTextNode("This is list item " + liCount);
        li.appendChild(liTxt);
        ul.appendChild(li);

     
        li.addEventListener("click", function() {
            let myRandomColor = getRandomColor();
            li.style.color = myRandomColor;
        });

        
        li.addEventListener("dblclick", function() {
            this.remove();
        });
    };

    
    btn.addEventListener("click", addToList);
});