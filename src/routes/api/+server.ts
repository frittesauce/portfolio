export async function GET() {
  return new Response(JSON.stringify({
    meow: "this is a test api!"
  }))
}
