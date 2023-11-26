import { css } from '../../../public/styled-system/css'

import { BaseHTML } from '../baseHtml'
import { Result } from '../snippets/Result'

export const Home = () => (
    <BaseHTML title="Hello Elysia">
        <h1 class={css({ fontSize: '5xl', lineHeight: '5xl', textAlign: 'center', color: 'sky.400' })}>Hello Elysia !</h1>
        <form hx-post="/snip-hello" hx-target="#result" hx-swap="outerHTML">
            <input
                type="text"
                id="name_input"
                class={css({
                    borderWidth: '1px',
                    borderColor: 'sky.400',
                    rounded: '2xl',
                    w: 'full',
                    px: '4',
                    py: '2',
                    mb: '4',
                })}
                name="name"
                placeholder="Ecris ton nom"
            />
            <button
                class={css({
                    bgColor: 'sky.400',
                    _hover: { bgColor: 'sky.500' },
                    color: 'white',
                    fontWeight: 'bold',
                    px: '4',
                    py: '2',
                    mx: 'auto',
                    rounded: '2xl',
                })}
                type="submit"
            >
                Say hello
            </button>
        </form>
        <Result />
    </BaseHTML>
)
