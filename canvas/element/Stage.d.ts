import React, { CSSProperties } from 'react';
interface StageProps extends CSSProperties {
    children?: any;
    width?: number | string;
    height?: number;
    border?: string;
    background?: string;
    margin?: string | number;
}
declare const Stage: (props: StageProps) => React.JSX.Element;
export default Stage;
