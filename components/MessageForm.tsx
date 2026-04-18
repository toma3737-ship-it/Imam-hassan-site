'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function MessageForm() {
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    const { error } = await supabase
      .from('user-messages')
      .insert([{ content: message }]);

    if (error) {
      alert('خطأ: ' + error.message);
    } else {
      alert('تم الإرسال!');
      setMessage('');
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '20px' }}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="اكتبي رسالتك..."
      />
      <button onClick={handleSendMessage}>إرسال</button>
    </div>
  );
}
