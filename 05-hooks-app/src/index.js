import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './componets/01-useState/CounterApp';
import CounterWithCustomHook from './componets/01-useState/CounterWithCustomHook';
import FormWithCustomHook from './componets/02-useEffect/FormWithCustomHook';
import SimpleForm from './componets/02-useEffect/SimpleForm';
import MultipleCustomHooks from './componets/03-examples/MultipleCustomHooks';
import FocusScreen from './componets/04-useRef/FocusScreen';
import RealExampleRef from './componets/04-useRef/RealExampleRef';
import HookApp from './HookApp';

ReactDOM.render(<RealExampleRef />, document.getElementById('root'));
