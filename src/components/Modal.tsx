//D:\workspace\practice02\src\components\Modal.tsx
import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
  Group,
} from "@mantine/core";

type AddExpenseModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string, 
    amount: number | string, 
    category: string
  ) => void;
};

export default function AddExpenseModal({}: AddExpenseModalProps) {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string | number>(0);
  const [category, setCategory] = useState<string | null>(null);

  const [nameError, setNameError] = useState<string>("");
  const [amountError, setAmountError] = useState<string | number>(0);
  const [categoryError, setCategoryError] = useState<string | null>(null);

  

  const handleSubmit = () => {};

 

  

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  return {
    
    /* Type additional text here. */
  };
}















































/* 4) src/components/Modal.tsx (แก้สำคัญ)

ทำให้ฟอร์มกรอก → validate → กด Add แล้วส่งขึ้น onAdd + ปิด modal

import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
  Group,
  Text,
} from "@mantine/core";

type AddExpenseModalProps = {
  opened: boolean;  // เปิด/ปิด modal
  onClose: () => void; // ปิด modal
  onAdd: (name: string, amount: number, category: string) => void; // ส่งข้อมูลขึ้นพาเรนต์
};

export default function AddExpenseModal({ opened, onClose, onAdd }: AddExpenseModalProps) {
  // state ของอินพุต
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<number | string>(0);
  const [category, setCategory] = useState<string | null>(null);

  // state ของ error
  const [nameError, setNameError] = useState<string>("");
  const [amountError, setAmountError] = useState<string>("");
  const [categoryError, setCategoryError] = useState<string>("");

  // ตรวจค่าก่อนส่ง
  const validate = () => {
    let ok = true;

    if (!name.trim()) {
      setNameError("Expense Name is required");
      ok = false;
    } else setNameError("");

    const num = Number(amount);
    if (isNaN(num) || num <= 0) {
      setAmountError("Amount must be greater than 0");
      ok = false;
    } else setAmountError("");

    if (!category) {
      setCategoryError("Category is required");
      ok = false;
    } else setCategoryError("");

    return ok;
  };

  // เมื่อกด Add
  const handleSubmit = () => {
    if (!validate()) return;
    onAdd(name.trim(), Number(amount), category!); // ส่งขึ้นพาเรนต์
    // ล้างค่า + ปิด modal
    setName("");
    setAmount(0);
    setCategory(null);
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Add Expense Item" centered>
      <Stack>
        {/* ชื่อค่าใช้จ่าย }
        <TextInput
          label="Expense Name"
          placeholder="e.g. Coke"
          withAsterisk
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          error={nameError}
        />

        {/* จำนวนเงิน }
        <NumberInput
          label="Amount (Baht)"
          placeholder="e.g. 25"
          withAsterisk
          min={0}
          clampBehavior="strict"
          value={Number(amount)}
          onChange={(v) => setAmount(v ?? 0)}
          error={amountError}
        />

        {/* หมวดหมู่ }
        <Select
          label="Category"
          placeholder="Pick one"
          withAsterisk
          data={["Food", "Transport", "Entertainment"]}
          value={category}
          onChange={setCategory}
          error={categoryError}
        />

        {/* แถบปุ่ม }
        <Group justify="flex-end">
          <Button variant="default" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Add</Button>
        </Group>

        {(nameError || amountError || categoryError) && (
          <Text c="red" size="sm">Please fill all required fields correctly.</Text>
        )}
      </Stack>
    </Modal>
  );
}


สรุปการทำงาน (เล่าในห้องสอบได้):

เก็บค่าอินพุตใน useState

กด Add → validate() ตรวจ 3 อย่าง: name ไม่ว่าง, amount > 0, category ต้องเลือก

ถ้าผ่าน → เรียก onAdd(name, Number(amount), category) แล้วล้างค่า/ปิด modal */