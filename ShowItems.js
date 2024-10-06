function toggleList(listId, arrowId) {
    const list = document.getElementById(listId);
    const arrowIcon = document.getElementById(arrowId);
    
    
    list.classList.toggle('show');
    
    // Change the arrow icon
    if (list.classList.contains('show')) {
        arrowIcon.src = "MyImagesAndIcons/Down_Arrow.png"; 
    } else {
        arrowIcon.src = "MyImagesAndIcons/Right_Arrow.png"; 
    }
}
