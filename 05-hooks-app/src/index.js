import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './componets/01-useState/CounterApp';
import CounterWithCustomHook from './componets/01-useState/CounterWithCustomHook';
import FormWithCustomHook from './componets/02-useEffect/FormWithCustomHook';
import SimpleForm from './componets/02-useEffect/SimpleForm';
import HookApp from './HookApp';

ReactDOM.render(<FormWithCustomHook />, document.getElementById('root'));
