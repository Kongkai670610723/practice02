//D:\workspace\practice02\src\components\Footer.tsx
import { Text, Group } from "@mantine/core";
import { type FooterProps } from "../libs/Footer";
export default function Footer(/* add props here */{ courseName, year, fullName, studentId }: FooterProps) {
  return (
    <Group p="md" justify="center">
      <Text>
        © CPE207-{year} {courseName} {fullName} {studentId}. All rights reserved.
      </Text>
    </Group>
  );
}



















































/* 0) สารบัญสิ่งที่เราจะแก้

Footer.tsx – ใช้ props ได้ถูกแล้ว แค่ “ส่งค่าให้ถูก” ใน MainLayout.tsx

Header.tsx – ใช้ได้เลย (แถมทริกเพิ่มไอคอน “เงิน” เผื่ออยากให้ตรง rubric มากขึ้น)

ItemCard.tsx – ตอนนี้ยัง “return เป็น object” ทำให้ JSX ไม่ออก → แก้ให้แสดงการ์ด + ปุ่มลบ

Modal.tsx – ตอนนี้ยังไม่ทำงาน → เติม state + validate + ส่งข้อมูลขึ้นพาเรนต์

TrackerPage.tsx – ลวดลายหลักของแอพ: เปิด/ปิดโมดัล, รวมยอด, รวมตามหมวด, แสดงลิสต์การ์ด

MainLayout.tsx – ส่ง FooterProps ให้ถูกฟิลด์

main.tsx – ใส่ ColorSchemeScript และ defaultColorScheme ให้ปุ่มสลับธีมทำงานเสถียร

หมายเหตุ: ผมไม่สร้างไฟล์ใหม่ นอกจากแก้เฉพาะไฟล์ที่คุณส่งมา (ตามกติกาข้อสอบ)

1) src/components/Footer.tsx

ของคุณถูกแนวทางอยู่แล้ว (รับผ่าน props) เพียงแต่ใน MainLayout.tsx ส่งค่าผิดช่อง เดี๋ยวไปแก้ในข้อ 6)

โค้ดนี้ คงเดิม ได้เลย

import { Text, Group } from "@mantine/core";
import { type FooterProps } from "../libs/Footer";

// ฟังก์ชันคอมโพเนนต์ Footer รับ props และแสดงผลตามรูปแบบโจทย์
export default function Footer({ courseName, year, fullName, studentId }: FooterProps) {
  return (
    <Group p="md" justify="center">
      <Text>
        © CPE207-{year} {courseName} {fullName} {studentId}. All rights reserved.
      </Text>
    </Group>
  );
} */