//D:\workspace\practice02\src\components\ItemCard.tsx
import { Card, Group, Badge, ActionIcon, Text } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";


type ExpenseProps = {
  name: string;                 // ชื่อค่าใช้จ่าย
  amount: number | string;      // จำนวนเงิน
  category: string;             // หมวดหมู่
  onDelete: () => void;         // ฟังก์ชันลบ (พาเรนต์ส่งมา)
};

//
export default function ItemCard({ name, amount, category, onDelete }: ExpenseProps) {
  // หากต้องการเปลี่ยนแปลง type ชนิด string เป็น number สามารถใช้วิธีการดังโค้ดตัวอย่างด้านล่างนี้ได้
  /*let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0*/

  // แปลงจำนวนเงินให้เป็น number เพื่อแสดงผลสวย ๆ และเผื่อคำนวณต่อ
  const amt = Number(amount);

  return (
    /* Type additional text here. */

    <Card withBorder radius="md" mb="xs" padding="sm">
      {/* วางเนื้อหาแถวเดียว โดยแบ่งซ้าย-ขวา */}
      <Group justify="space-between" align="center">
        {/* ซ้าย: ชื่อ + จำนวนเงิน */}
        <Group gap="sm">
          <Text fw={600}>{name}</Text>
          <Text>{isNaN(amt) ? amount : `${amt} Baht`}</Text>
        </Group>

        {/* ขวา: Badge หมวดหมู่ + ปุ่มลบ */}
        <Group gap="xs">
          <Badge variant="light">{category}</Badge>

          <ActionIcon variant="light" onClick={onDelete} aria-label="delete item">
            <IconTrash size={16} />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}































/* 3) src/components/ItemCard.tsx  (แก้สำคัญ)

ไฟล์นี้ “return เป็น object” อยู่ (วงเล็บก้ามปู {}) ทำให้ไม่ render JSX ต้องเปลี่ยนเป็น return ( ...JSX... );

import { Card, Group, Badge, ActionIcon, Text, Tooltip } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

// props ที่การ์ด 1 ใบต้องการ
type ExpenseProps = {
  name: string;                 // ชื่อค่าใช้จ่าย
  amount: number | string;      // จำนวนเงิน
  category: string;             // หมวดหมู่
  onDelete: () => void;         // ฟังก์ชันลบ (พาเรนต์ส่งมา)
};

export default function ItemCard({ name, amount, category, onDelete }: ExpenseProps) {
  // แปลงจำนวนเงินให้เป็น number เพื่อแสดงผลสวย ๆ และเผื่อคำนวณต่อ
  const amt = Number(amount);

  //  คืนค่า JSX (ไม่ใช่ object)
  return (
    <Card withBorder radius="md" mb="xs" padding="sm">
      {/* วางเนื้อหาแถวเดียว โดยแบ่งซ้าย-ขวา }
      <Group justify="space-between" align="center">
        {/* ซ้าย: ชื่อ + จำนวนเงิน }
        <Group gap="sm">
          <Text fw={600}>{name}</Text>
          <Text>{isNaN(amt) ? amount : `${amt} Baht`}</Text>
        </Group>

        {/* ขวา: Badge หมวดหมู่ + ปุ่มลบ }
        <Group gap="xs">
          <Badge variant="light">{category}</Badge>

          <Tooltip label="Delete">
            <ActionIcon variant="light" onClick={onDelete} aria-label="delete item">
              <IconTrash size={16} />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Group>
    </Card>
  );
}


อธิบายทีละบรรทัด (สำคัญในห้องสอบ):

type ExpenseProps → นิยามโครงสร้างข้อมูลที่การ์ดต้องรับ (ชื่อ/จำนวน/หมวด/ปุ่มลบ)

ItemCard({ name, amount, category, onDelete }) → ดึง props ออกมาใช้ตรง ๆ

const amt = Number(amount); → แปลงเป็นตัวเลข (ถ้า amount ถูกส่งมาเป็น string ก็ยังใช้งานได้)

<Card ...> → กล่อง 1 ใบของรายการ

<Group justify="space-between"> → แบ่งซ้าย-ขวา

<Text fw={600}>{name}</Text> → ชื่อหนา

<Text>{isNaN(amt) ? amount : \${amt} Baht`}</Text>` → ถ้าแปลงเป็นเลขไม่ได้ให้โชว์ดิบ ๆ, ถ้าได้ให้พิมพ์ “Baht” ต่อท้าย

<Badge>{category}</Badge> → แสดงหมวด

<ActionIcon onClick={onDelete}> → ปุ่มกดเรียก onDelete ที่พาเรนต์ส่งมา */
