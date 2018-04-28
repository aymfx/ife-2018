let slide = document.getElementsByTagName('nav')[0],
    alist = slide.getElementsByTagName('a'),
    changestyle = document.getElementById('change-style');

for (const iterator of alist) {
    iterator.addEventListener('click',function(){
        let num = this.dataset.id;
        changestyle.setAttribute('href','./css/style_'+num+'.css');
        
       for (const iterator of object) {
           iterator.setAttribute('class','');
       }
        this.setAttribute('class', 'active');
    })
}
