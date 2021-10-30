document.addEventListener("DOMContentLoaded", function(){
    const title=document.getElementById('title');
    const description=document.getElementById('description');
    const table=document.getElementById('table');
    const alert=document.getElementById('alert');
    const btn=document.getElementById("add");

    function addTodo(){
        if(title.value === '' || description.value === ''){
            alert.classList.remove('d-none');
            alert.innerText='Title and description are required';
            return;
        }
        alert.classList.add('d-none');

        const row = table.insertRow();
        row.innerHTML=`
            <td>${title.value}</td>
            <td>${description.value}</td>
            <td class="text-center">
                <input type="checkbox">
            </td>
            <td class="text-right">
                <button class="btn btn-primary mb-1">
                    <i class="fa fa-pencil"></i>
                </button>
            </td>
        `;

        const removeBtn=document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        removeBtn.innerHTML='<i class="fa fa-trash"></i>';
        removeBtn.onclick = function(e){
            console.log(e.target.parentNode.parentNode.parentNode);
        };
        row.children[3].appendChild(removeBtn);
    }

    btn.onclick=addTodo;
});

