import { EmailData } from './email';

export async function sendContactEmail(email: EmailData) {
  // 우리 API 라우터에 이메일 전송을 위한 요청을 보냄 (fetch)
  const reponse = await fetch('api/contact', {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await reponse.json();
  if(!reponse.ok) {
    throw new Error(data.message || '서버 요청에 실패함')
  }
  return data;

}