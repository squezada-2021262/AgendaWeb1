let items = [];
let editId = null; // Variable para saber qué tarea estamos editando

// AGREGAR
function add() {
    const txt = document.getElementById('taskIn').value;
    const prio = document.getElementById('prioIn').value;
    if(!txt) return;
    items.push({ id: Date.now(), txt, prio });
    document.getElementById('taskIn').value = '';
    render();
}

// ELIMINAR
function del(id) {
    items = items.filter(i => i.id !== id);
    render();
}

// ENTRAR EN MODO EDICIÓN
function startEdit(id) {
    const item = items.find(i => i.id === id);
    editId = id; // Guardamos el ID que se va a editar
    
    // Cambiamos el texto del input de edición
    document.getElementById('taskEdit').value = item.txt;
    
    // Intercambiamos los formularios
    document.getElementById('add-section').style.display = 'none';
    document.getElementById('edit-section').style.display = 'block';
}

// GUARDAR CAMBIOS
function saveEdit() {
    const nuevoTexto = document.getElementById('taskEdit').value;
    if(!nuevoTexto) return;

    // Actualizamos el objeto en el arreglo
    const index = items.findIndex(i => i.id === editId);
    items[index].txt = nuevoTexto;

    cancelEdit(); // Cerramos el panel de edición
    render();
}

// CANCELAR EDICIÓN
function cancelEdit() {
    editId = null;
    document.getElementById('add-section').style.display = 'block';
    document.getElementById('edit-section').style.display = 'none';
}

// DIBUJAR LISTA
function render() {
    const div = document.getElementById('list');
    div.innerHTML = '';
    items.sort((a, b) => a.prio - b.prio);
    
    items.forEach(i => {
        div.innerHTML += `
            <div class="item p${i.prio}">
                <span class="texto-tarea">${i.txt}</span>
                <div class="acciones">
                    <button class="btn-ui-edit" onclick="startEdit(${i.id})">Editar</button>
                    <button class="btn-ui-del" onclick="del(${i.id})">X</button>
                </div>
            </div>`;
    });
}