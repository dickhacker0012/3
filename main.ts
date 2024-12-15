const testRoute = new URLPattern({ pathname: '/test' });

function handler(req: Request): Response {
    const match = testRoute.exec(req.url);

    if (match) {
        return new Response('Test!');
    }
    
    return new Response("Hello, world!");
};










Deno.serve(handler);