function HideSubMenus(){
    var submenus = document.querySelectorAll('ul li ul');
    for (let i=0 ;i<submenus.length;i++ ){
    submenus[i].className = 'hide-menu';
}
}
HideSubMenus();

var menulinks = document.querySelectorAll('.menulink');

for (let i=0 ;i<menulinks.length;i++ ){
    menulinks[i].addEventListener('click',function(event){
        event.preventDefault();

        var thisMenu = this.parentNode.querySelector('ul');
        if(thisMenu.classList.contains('hide-menu')){
            HideSubMenus();
            thisMenu.className = 'show-menu';
        }
        else{
            thisMenu.className = 'hide-menu';
        }

    });
}