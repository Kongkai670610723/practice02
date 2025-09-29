//D:\workspace\practice02\src\pages\TrackerPage.tsx
import { useState } from "react";
import { Button, Stack, Title, Divider, Container } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";

type Expense = {
  id: string;
  name: string;
  amount: number | string;
  category: string;
};

export default function ExpenseTracker() {
  const [opened, setOpened] = useState(false);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const categories = ["Food", "Transport", "Entertainment"];



  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Expense Tracker
      </Title>
      <Button onClick={ExpenseTracker}>Add Expense Item</Button>

      {/* Type additional AddExpenseModal here. */}

      <Divider my="md" />
      {/* Type additional total cost here. */}
      <Title order={4}>Total cost: {} Baht</Title>
      <Stack my="sm">{/* Type additional text here. */}</Stack>

      <Divider my="md" />
      {/* Type additional card here. */}
      <Stack>{/* Type additional expense card list here. */}</Stack>
    </Container>
  );
}














































/*5) src/pages/TrackerPage.tsx  (ไฟล์ “แกนหลัก”)

ไฟล์นี้จะผูกทุกอย่างเข้าด้วยกัน: เปิด/ปิดโมดัล, รวมยอด, รวมตามหมวด, แสดงรายการเป็นการ์ด

import { useMemo, useState } from "react";
import { Button, Stack, Title, Divider, Container, Text, Card } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
import AddExpenseModal from "../components/Modal";
import ItemCard from "../components/ItemCard";

type Expense = {
  id: string;
  name: string;
  amount: number;
  category: string;
};

export default function ExpenseTracker() {
  // สถานะเปิด/ปิด modal
  const [opened, setOpened] = useState(false);
  // ลิสต์รายการทั้งหมด
  const [expenses, setExpenses] = useState<Expense[]>([]);
  // รายชื่อหมวด เพื่อสรุปผลแยกตามหมวด
  const categories = ["Food", "Transport", "Entertainment"];

  // รวมยอดทั้งหมด
  const totalCost = useMemo(
    () => expenses.reduce((sum, it) => sum + it.amount, 0),
    [expenses]
  );

  // ฟังก์ชันเพิ่มรายการ (ถูกเรียกจาก Modal)
  const handleAdd = (name: string, amount: number, category: string) => {
    setExpenses((prev) => [{ id: uuidv4(), name, amount, category }, ...prev]);
  };

  // ฟังก์ชันลบรายการ
  const handleDelete = (id: string) => {
    setExpenses((prev) => prev.filter((x) => x.id !== id));
  };

  // รวมตามหมวด (ฟังก์ชันช่วย)
  const sumByCategory = (c: string) =>
    expenses.filter((e) => e.category === c).reduce((s, e) => s + e.amount, 0);

  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      {/* หัวเรื่อง }
      <Title order={2} mb="md">
        Expense Tracker
      </Title>

      {/* ปุ่มเปิดโมดัล: (ของเดิมพลาดไปเรียกคอมโพเนนต์ตัวเอง) }
      <Button onClick={() => setOpened(true)}>Add Expense Item</Button>

      {/* โมดัลเพิ่มรายการ }
      <AddExpenseModal opened={opened} onClose={() => setOpened(false)} onAdd={handleAdd} />

      <Divider my="md" />

      {/* การ์ดสรุปยอดรวม + แยกตามหมวด }
      <Card withBorder radius="md" mb="md">
        <Stack gap={4}>
          <Title order={4}>Total cost: {totalCost} Baht</Title>
          {categories.map((c) => (
            <Text key={c}>
              {c}: {sumByCategory(c)} Baht
            </Text>
          ))}
        </Stack>
      </Card>

      <Divider my="md" />

      {/* ลิสต์การ์ดรายการ }
      <Stack>
        {expenses.map((it) => (
          <ItemCard
            key={it.id}
            name={it.name}
            amount={it.amount}
            category={it.category}
            onDelete={() => handleDelete(it.id)}
          />
        ))}
        {expenses.length === 0 && <Text c="dimmed">No items yet</Text>}
      </Stack>
    </Container>
  );
}


อธิบายจุดพลาดเดิม

เดิม Button onClick={ExpenseTracker} → เรียกคอมโพเนนต์เอง ทำให้ปุ่มไม่เปิดโมดัล
 แก้เป็น onClick={() => setOpened(true)}

เติม AddExpenseModal + ItemCard ให้ทำงานครบลูปเพิ่ม/ลบ */
