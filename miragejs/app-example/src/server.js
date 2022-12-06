import { createServer } from 'miragejs';

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
