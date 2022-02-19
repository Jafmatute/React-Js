import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './componets/01-useState/CounterApp';
import CounterWithCustomHook from './componets/01-useState/CounterWithCustomHook';
import FormWithCustomHook from './componets/02-useEffect/FormWithCustomHook';
import SimpleForm from './componets/02-useEffect/SimpleForm';
import MultipleCustomHooks from './componets/03-examples/MultipleCustomHooks';
import FocusScreen from './componets/04-useRef/FocusScreen';
import RealExampleRef from './componets/04-useRef/RealExampleRef';
import LayaoutEffect from './componets/05-useLayoutEffect/LayaoutEffect';
import CallbackHook from './componets/06-useMemo/CallbackHook';
import MemoHook from './componets/06-useMemo/MemoHook';
import Memorize from './componets/06-useMemo/Memorize';
import { Padre } from './componets/07-tarea-memo/Padre';
import HookApp from './HookApp';

ReactDOM.render(<Padre />, document.getElementById('root'));
