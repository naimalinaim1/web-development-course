// select dom element
const matchContainer = document.querySelector('.all-matches');
const addMatch = document.querySelector('.lws-addMatch');
const deleteMatch = document.querySelector('.lws-delete')
const totalResult = document.querySelectorAll('.lws-singleResult');
const singleResult = document.querySelectorAll('.lws-singleResult')[0];
const incrementEl = document.querySelectorAll('.all-matches')[0];
const decrementEl = document.querySelectorAll('.all-matches')[0];
const resetEl = document.querySelector('.lws-reset');


// create new match
let serial=2;
function createMatch(){
  const newMatch = document.createElement('div');
  newMatch.classList.add('match');  
  newMatch.innerHTML=`<div class="wrapper">
  <button class="lws-delete">
      <img src="./image/delete.svg" alt="" />
  </button>
  <h3 class="lws-matchName">Match ${serial++}</h3>
</div>
<div class="inc-dec">
  <form class="incrementForm">
      <h4>Increment</h4>
      <input
          type="number"
          name="increment"
          class="lws-increment"
      />
  </form>
  <form class="decrementForm">
      <h4>Decrement</h4>
      <input
          type="number"
          name="decrement"
          class="lws-decrement"
      />   
  </form>
</div>
<div class="numbers">
  <h2 class="lws-singleResult"></h2>
</div>`;
matchContainer.appendChild(newMatch)
}

// delete match
function matchDelete(e){
    const isDelete =e.target;
    if(isDelete.getAttribute('src')){
        const deleteElementContainer = e.target.parentNode.parentNode.parentNode.parentNode;
        deleteElementContainer.removeChild(e.target.parentNode.parentNode.parentNode);
    }
}

// add match event listener
addMatch.addEventListener('click',()=>{
    createMatch()
});

// delete match event listener
matchContainer.addEventListener('click', (e)=>{
    matchDelete(e)
})

// default behavior change
matchContainer.addEventListener('click', 
function (event){
    const targetElement = event.target;
    if(targetElement.getAttribute('type')){
        targetElement.addEventListener('keydown',
        function(e){
            if(e.keyCode ===13){
                e.preventDefault()
            }
                
        }
        );  
    }
}
)


const initialState =
    {
        id:0,
        value:0,
    }


// create reducer function 
function counterReducer (state=initialState, action){
    if(action.type==='increment'){
        return {
            ...state,
            value: state.value + action.payload,
        }
    }else if(action.type==='decrement'){
        return {
            ...state,
            value:state.value - action.payload,
        }
    }else{
        return state;
    }
}

// create store
const store = Redux.createStore(counterReducer);
// create render function
const render = ()=>{
    const state = store.getState();

   if(state.value<0){
    state.value = 0;
    
    singleResult.innerText= state.value;
   }else{
    singleResult.innerText= state.value;
   }
}
render();
// subscribe to store
store.subscribe(render);
// create increment function 
const increment = (e) =>{
    if(e.key==='Enter'){
      const value= e.target.value 
    store.dispatch({
                    type:'increment',
                    payload:parseInt(value),
                 });

    const currentSingleResultElement =   e.target.closest('.match').querySelector('.lws-singleResult');
    currentSingleResultElement.innerText = value;
    e.target.value='';
    }
}
// create decrement function 
const decrement = (e) =>{
    if(e.key==='Enter'){
        const value= e.target.value
    store.dispatch({
                    type:'decrement',
                    payload:parseInt(value),
                  
                 });

    e.target.value='';             
   }
}

incrementEl.addEventListener('keyup',(e)=>{
    const target = e.target;
    if(target.getAttribute('type') && target.getAttribute('class') == 'lws-increment'){
        increment(e);
    }
})
decrementEl.addEventListener('keyup',(e)=>{
    const target = e.target;
    if(target.getAttribute('type') && target.getAttribute('class') == 'lws-decrement'){
        decrement(e);
    }
    
})

// reset total value

resetEl.addEventListener('click', ()=>{
    for (const result of totalResult){
    result.innerText=0 
   }
})
