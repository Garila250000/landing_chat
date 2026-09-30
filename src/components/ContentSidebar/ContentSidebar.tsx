import React, { useState } from "react";
import { ViewSidebar } from "@mui/icons-material";

const Content = () => {
  // Правильний тип: масив рядків
  const [content, setContent] = useState<string[]>([]);

  // Функція додавання контенту
  const handleContentPush = (newItem: string) => {
    setContent((prev) => [...prev, newItem]);
  };

  return (
    <div className="content">
      {/* Кнопка для додавання (приклад) */}
      <button onClick={() => handleContentPush("Новий елемент")}>
        Додати контент
      </button>

      {/* Відображення списку */}
      {content.length > 0 ? (
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>Контенту поки немає</p>
      )}

      {/* Іконка (якщо потрібна) */}
      <ViewSidebar />
    </div>
  );
};

export default Content;