function Submit(){
    document.getElementById("input").focus();
    function Submission(){
        const form=document.getElementById("form");
        const input=document.getElementById("input");
        const todo=document.getElementById("todo");
        const text=input.value;
        if(text){
            const todoEl=document.createElement
            ("li");
            todoEl.innerText=text;
            todo.appendChild(todoEl);
        }
    }
    function Reset(){
        document.getElementById("input").value='';
    }
    Submission();
    Reset();
}
