/* Alguns padrões:
S => State
T => Type
K => Key
V => Value
E => Element
*/

type numOrStr = number | string;

// deixando o string como default
function useState<S extends numOrStr = string>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState};
}

const newState = useState();

newState.setState('uma string'); // é uma string
console.log('newState: ', newState.getState());

// newState.setState(345); // dê erro
// console.log('newState: ', newState.getState());

// newState.setState('outra string');
// console.log('newState: ', newState.getState());