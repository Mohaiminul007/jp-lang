export async function GET(req) {
  return new Response(JSON.stringify({ message: 'Hello from the API!' }), {
    headers: { 'Content-Type': 'application/json' },
  });


}