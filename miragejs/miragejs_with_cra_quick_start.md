# MirageJS with cra - easy start

## Why and for what?

If you want mock or imitate some answers from backend in you app, MirageJS is what you need. Sometimes backend isn't ready, but you know format of data, or you want just try something, or you want test some functionality properly.

**Key features**

- Declarative server configuration, simple and intuitive API.

- Realistic network behavior: MirageJS can simulate a range of network behaviors, such as delays and error responses.

- Request and response handling: you can not only intercept, but also modify requests and responses.

- Flexible and extensible.

- Finally, it's very easy to use.

<sub>Thank ChatGPC - it helps me a little bit with this list :)</sub>

## How to use?

I use create-react-app, because I on my work we have CRA app ;) If you don't have one for experiment, you can create new one with `npx create-react-app my-app` ([CRA documentation](https://create-react-app.dev/docs/getting-started)).

### Setup

In directory that contains your project (example project in this [repo](https://github.com/Svetzayats/articles/tree/main/miragejs/app-example)) run this command - it adds MirageJS in your dev dependencies and you can start using it.

`npm install --save-dev miragejs`

### Start using

In src folder of your project create file server.js. There you import `createServer` from `miragejs` and start creates your routes:

```
export default function createMirageServer() {
  createServer({
    routes() {

      // this request will be handled by mirage server
      this.get('/data', () => {
        return {
          name: 'Awesome data',
          list: [
            { id: 1, value: 'First point' },
            { id: 2, value: 'Second point' },
            { id: 3, value: 'Third point' },
          ]
        };
      });

      // if you want other request (for example, starts with /api) don't be handled mirage
      this.namespace = 'api';
      this.passthrough();
    },
  });
}
```

For example, here I create answer for GET request to '/data'.

Please note this `this.passthrough()` - it allows other requests pass through, they are handled by backend.

And in my App.js I just import my new function and run it:

```
import createMirageServer from './server';

createMirageServer();
```

You can see all code for this example in [app-example repo](https://github.com/Svetzayats/articles/tree/main/miragejs/app-example).

MirageJS also logs all requests in console - so it's pretty easy to find out what's going on.

## Useful links

[MirageJS documentation](https://miragejs.com/docs/getting-started/introduction/)

[CRA documentation](https://create-react-app.dev/docs/getting-started)

[ChatGPC](https://chat.openai.com/) - here you can ask questions and AI answers. You can ask something about MirageJS and ChatGPC answer with examples of code. Or it can write some code for you, if you make your request clear :)
