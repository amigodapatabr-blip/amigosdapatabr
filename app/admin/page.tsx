import {requireChatGPTUser} from '@/app/chatgpt-auth';import {ownerEmail} from '@/lib/admin-auth';import Panel from './panel';
export const dynamic='force-dynamic';
export default async function Page(){const user=await requireChatGPTUser('/admin');if(user.email.toLowerCase()!==ownerEmail)return <main style={{padding:40}}><h1>Acesso restrito</h1><p>Este painel está disponível apenas para o proprietário.</p><a href="/signout-with-chatgpt?return_to=/admin">Entrar com outra conta</a></main>;return <Panel email={user.email}/>}
