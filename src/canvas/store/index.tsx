import { createContext } from 'react';
import { Stage as _Stage } from '../instance/stage';

export const Context = createContext<_Stage>({} as _Stage);
