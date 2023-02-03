export function ready(fn) {
  console.log("ready");
  document.addEventListener("DOMContentLoaded", (state) => init(state, fn));
}

function init(state, fn) {
    console.log('init')
    console.log(state, document.readyState);
 
    fn();
     
}
