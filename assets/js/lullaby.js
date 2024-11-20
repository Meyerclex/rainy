// Draggable Windows
const windows = document.querySelectorAll('.window');
windows.forEach(makeWindowDraggable);

function makeWindowDraggable(element) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    element.querySelector('.window-title').onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        bringToFront(element);
    }

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function bringToFront(element) {
    windows.forEach(win => win.style.zIndex = "1");
    element.style.zIndex = "2";
}

function toggleWindow(id) {
    const window = document.getElementById(id);
    if (window.classList.contains('active')) {
        window.classList.remove('active');
    } else {
        window.classList.add('active');
        bringToFront(window);
    }
}

/* Other JS functions like notifications, music player, etc. */
