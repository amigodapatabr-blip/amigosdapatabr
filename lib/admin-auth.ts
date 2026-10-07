import {getChatGPTUser} from '@/app/chatgpt-auth';
export const ownerEmail='soarestrampo2026@gmail.com';
export async function isOwner(){const user=await getChatGPTUser();return !!user&&user.email.toLowerCase()===ownerEmail;}
export function sameOrigin(request:Request){const origin=request.headers.get('origin');return origin!==null&&origin===new URL(request.url).origin;}
