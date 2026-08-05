import React from 'react';

export default function Screen() {
  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '40px auto', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#fff' }}>
      <h2>NFR-USA-01 (Tính khả dụng)</h2>
      <p>• <b>Mục tiêu khả dụng:</b> Hệ thống hoạt động ổn định 99.5% trong giờ làm việc.</p>
      <p>• <b>Khung giờ phục vụ:</b> Từ 7:00 Sáng đến 10:00 Tối mỗi ngày.</p>
      <div style={{ padding: '15px', backgroundColor: '#e2f0d9', borderRadius: '5px', marginTop: '20px' }}>
        <p style={{ margin: 0, color: '#385723', fontWeight: 'bold' }}>Trạng thái hệ thống hiện tại: Hoạt động bình thường (Online - 99.9%)</p>
      </div>
    </div>
  );
}