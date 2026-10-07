import landing from './landing.html?raw';
export function GET(){return new Response(landing,{headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'}})}
