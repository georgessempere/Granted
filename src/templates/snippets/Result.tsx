import { css } from '../../../public/styled-system/css'

export const Result = ({ message }: { message?: string }) =>
    <div safe id="result" class={css({ textAlign: "center", fontSize: "2xl", color: 'sky.400' })} > {message ?? ''}</div >;
