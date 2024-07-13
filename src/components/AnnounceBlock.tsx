// AnnounceBlock.tsx
import React from 'react';

const AnnounceBlock: React.FC = () => {
  return (
    <div className=" mt-40 bg-indigo-900 border-black text-yellow-700 p-2 mb-4 container mx-auto px-4 ">
      <p className="text-3xl font-bold mb-6">Announcement</p>
      <p>Important announcement content goes here.</p>
      <ul className="pt-list pt-list__type-c">
        <li className="pt-list-item pt-list-item__label highlight">
          <div className="pt-list-item__title">
            <h2 className="gtm-announcement">
              <a href="https://pantip.com/s/b1j23" target="_blank">
                🎧 <strong>Pantip Daily Podcast</strong> 🎧 3
                อันดับกระทู้ฮิตบนพันทิป ประจำวันที่ 10 กรกฎาคม 📊
              </a>
            </h2>
          </div>
        </li>
        <li className="pt-list-item pt-list-item__label activity">
          <div className="pt-list-item__title">
            <h2 className="gtm-announcement">
              <a href="https://pantip.com/s/YXQM8" target="_blank">
                <strong>Pantip Point 💰</strong>{" "}
                น้องเพี้ยนชวนแชร์ภาพไอเทมรับหน้าฝน ที่ต้องพกติดกระเป๋า! 🌧️💧☂️
              </a>
            </h2>
          </div>
        </li>
        <li className="pt-list-item pt-list-item__label activity">
          <div className="pt-list-item__title">
            <h2 className="gtm-announcement">
              <a href="https://pantip.com/s/KbSXE" target="_blank">
                เตรียมวอร์มมือกันได้เลย กับโบนัสพิเศษเพื่อต่อลมหายใจใน{" "}
                <strong>เกมบอล 2024</strong> ⚽
              </a>
            </h2>
          </div>
        </li>
      </ul>
    </div>
  );
};

export { AnnounceBlock };
