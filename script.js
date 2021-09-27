const elCollection = document.body.children;
const elements = Array.prototype.slice.call(elCollection);

const backgroundChange = (target) => {
  const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if(entry.isIntersecting){
            const p = entry.target;
            p.className = 'p-fade';
            observer.disconnect();
          }
      })
  },{
      threshold:[1]
    });
    
  io.observe(target);
}

elements.forEach(backgroundChange);