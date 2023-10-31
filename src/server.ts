import { Elysia, t } from 'elysia'
import { swagger } from '@elysiajs/swagger'

function signIn(body: any) {
  console.log('body: ', body)
}

const app = new Elysia()
  .use(swagger())
  .post('/signin', ({ body }) => signIn(body), {
    body: t.Object({
      username: t.String(),
      password: t.String()
    })
  })

app.listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)

export type App = typeof app