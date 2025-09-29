//main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";
import "@mantine/core/styles.css";
import { MantineProvider, createTheme, virtualColor } from "@mantine/core";

const theme = createTheme({
  fontFamily: "Kanit,sans-serif",
  colors: {
    Phurin: virtualColor({
      name: "Phurin",
      dark: "yellow",
      light: "violet",
    }),
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);


















































/* 7) src/main.tsx ✅ (ทำให้สลับธีมเสถียร)

ใส่ ColorSchemeScript และ defaultColorScheme ให้ useMantineColorScheme() ใน Header ทำงานสมบูรณ์

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes.tsx";
import "@mantine/core/styles.css";
import { MantineProvider, createTheme, virtualColor, ColorSchemeScript } from "@mantine/core";

const theme = createTheme({
  fontFamily: "Kanit,sans-serif",
  colors: {
    Phurin: virtualColor({
      name: "Phurin",
      dark: "yellow",
      light: "violet",
    }),
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* ป้องกันธีมกระพริบตอนโหลด }
    <ColorSchemeScript />
    {/* ตั้งโหมดเริ่มต้น และเปิดระบบเปลี่ยนธีมให้ hook ใช้ได้ }
    <MantineProvider theme={theme} defaultColorScheme="light">
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);

เช็กลิสต์เทียบโจทย์ (หลังแก้เสร็จ)

Header: ชื่อ TRACKER-APP + (ออปชัน) ไอคอนเงิน + ปุ่มสลับธีม 

Modal: TextInput (required), NumberInput (>0), Select (required), กด Add แล้วปิด + ล้างค่า 

Summary: รวมทั้งหมด + รวมแต่ละหมวด (Food/Transport/Entertainment) 

Card list: แสดงชื่อ, จำนวนเงิน, Badge หมวด, มีปุ่มลบ 

Footer: ข้อมูลผ่าน props เท่านั้น + “All rights reserved.” 

ไม่สร้างไฟล์ใหม่ นอกจากแก้เฉพาะ main.tsx, src/components/*, pages/*, layout/* 

ถ้าเอาโค้ดไปวางแล้วหน้าไหนยังเออเรอร์ (เช่น import path แตกต่างจากโปรเจกต์จริงของคุณ) บอก “ไฟล์+บรรทัดที่ error” มาได้เลยครับ เดี๋ยวผมแก้ให้แบบ pinpoint ต่ออีกที  */


























/*อ๋อ “Tooltip” คือกล่องคำอธิบายเล็กๆ ที่โผล่ตอนเอาเมาส์ไปชี้ (hover) เช่นบนปุ่มลบ—ไว้บอกผู้ใช้ว่า “Delete” เฉยๆ ครับ

ใน Mantine มันคือคอมโพเนนต์ <Tooltip label="...">…</Tooltip>.

ไม่ใช่สิ่งที่โจทย์บังคับ เลย เป็นแค่ของแถมเพื่อความเข้าใจ/ช่วยการเข้าถึง (UX, accessibility)

ถ้าไม่อยากใช้ ก็ลบได้ปลอดภัย โดยให้คง aria-label ไว้ในปุ่มเพื่อช่วยผู้อ่านหน้าจอ

เอา Tooltip ออก (เวอร์ชันสั้น)

ก่อน (มี Tooltip):

import { Card, Group, Badge, ActionIcon, Text, Tooltip } from "@mantine/core";
// ...
<Tooltip label="Delete">
  <ActionIcon variant="light" onClick={onDelete} aria-label="delete item">
    <IconTrash size={16} />
  </ActionIcon>
</Tooltip>


หลัง (ไม่มี Tooltip):

import { Card, Group, Badge, ActionIcon, Text } from "@mantine/core"; // ลบ Tooltip ออกจาก import
// ...
<ActionIcon variant="light" onClick={onDelete} aria-label="delete item">
  <IconTrash size={16} />
</ActionIcon>


ถ้าที่ Header ของคุณมี Tooltip (ของผมเสนอเป็นออปชัน) ก็ลบหุ้มออกแบบเดียวกันได้ ไม่กระทบการทำงานหลัก และยัง ผ่านเกณฑ์โจทย์ครบ อยู่ครับ */




















/* ได้เลย! ทั้ง 5 ตัวคือคอมโพเนนต์พื้นฐานของ Mantine สำหรับจัดหน้าการ์ดรายการแบบที่คุณทำอยู่ เดี๋ยวสรุป “คืออะไร / ใช้ตอนไหน / พร็อพสำคัญ / ตัวอย่างสั้น” ให้ครับ

---

## 1) `Card`

**คืออะไร:** กล่องเนื้อหามีขอบ/เงา ไว้ห่อคอนเทนต์หนึ่งก้อน (เช่น 1 รายการ, 1 โปรไฟล์, 1 ฟอร์ม)
**ใช้ตอนไหน:** อยากให้ส่วนหนึ่งของหน้าดูเป็นบล็อกแยกชัดเจน
**พร็อพที่ใช้บ่อย:**

* `withBorder` แสดงเส้นขอบรอบการ์ด
* `shadow="sm" | "md" | ...` เพิ่มเงา
* `radius="md" | "lg" | ...` มุมโค้ง
* `padding="sm" | "md" | number` ระยะห่างด้านใน

**ตัวอย่าง:**

```tsx
<Card withBorder shadow="sm" radius="md" padding="sm">
  ...เนื้อหาด้านใน...
</Card>
```

---

## 2) `Group`

**คืออะไร:** คอนเทนเนอร์จัดวางลูกแบบ “แนวนอนหนึ่งแถว” (flex row)
**ใช้ตอนไหน:** จัดวางไอเท็มให้อยู่บรรทัดเดียว เช่น ชื่อ + จำนวนเงิน + ปุ่มลบ
**พร็อพที่ใช้บ่อย:**

* `justify="space-between" | "center" | "flex-start" | ...` จัดแนวนอน
* `align="center" | "flex-start" | ...` จัดแนวตั้ง
* `gap="xs" | "sm" | number` ระยะห่างระหว่างลูก

**ตัวอย่าง:**

```tsx
<Group justify="space-between" align="center" gap="sm">
  <div>ซ้าย</div>
  <div>ขวา</div>
</Group>
```

---

## 3) `Badge`

**คืออะไร:** ป้ายเล็ก ๆ สำหรับแสดงสถานะ/หมวด เช่น “Food”, “Paid”, “Draft”
**ใช้ตอนไหน:** เน้นคำสั้น ๆ ที่เป็นหมวดหมู่หรือสถานะ
**พร็อพที่ใช้บ่อย:**

* `variant="light" | "filled" | "outline"` สไตล์
* `color="blue" | "green" | ..."` สี (ถ้าอยากกำหนดเอง)
* `radius="sm" | "lg" | ...` มุมโค้ง

**ตัวอย่าง:**

```tsx
<Badge variant="light" color="green">Food</Badge>
```

---

## 4) `ActionIcon`

**คืออะไร:** ปุ่มทรงกลม/สี่เหลี่ยมเล็ก ๆ สำหรับวาง “ไอคอน” (เช่น ถังขยะ, ดินสอ)
**ใช้ตอนไหน:** ปุ่มไอคอนเดี่ยว ๆ เช่น ลบ/แก้ไข/ตั้งค่า
**พร็อพที่ใช้บ่อย:**

* `variant="light" | "filled" | "subtle"` สไตล์ปุ่ม
* `color="red" | "blue" | ...` สีปุ่ม
* `size="sm" | "md" | number` ขนาด
* `onClick={...}` ฟังก์ชันเมื่อคลิก
* `aria-label="..."` คำอธิบายเพื่อการเข้าถึง

**ตัวอย่าง:**

```tsx
<ActionIcon variant="light" color="red" aria-label="delete" onClick={handleDelete}>
  <IconTrash size={16} />
</ActionIcon>
```

---

## 5) `Text`

**คืออะไร:** ข้อความตัวอักษรทั่วไป (แทน `<p>`/`<span>`) พร้อมสไตล์ในตัว
**ใช้ตอนไหน:** แสดงข้อความทุกชนิด
**พร็อพที่ใช้บ่อย:**

* `fw={600}` ความหนา (font-weight)
* `size="sm" | "lg" | number` ขนาดตัวอักษร
* `c="dimmed" | "red" | ...` สีตัวอักษร
* `ta="center" | "right"` จัดแนวข้อความ

**ตัวอย่าง:**

```tsx
<Text fw={600} size="sm">Coke</Text>
<Text c="dimmed">25 Baht</Text>
```

---

## เอามารวมกัน (โครง `ItemCard` แบบสั้น)

```tsx
<Card withBorder radius="md" padding="sm" mb="xs">
  <Group justify="space-between" align="center">
    <Group gap="sm">
      <Text fw={600}>Coke</Text>
      <Text>25 Baht</Text>
    </Group>

    <Group gap="xs">
      <Badge variant="light">Food</Badge>
      <ActionIcon variant="light" aria-label="delete" onClick={() => { /* ลบ }}>
        <IconTrash size={16} />
      </ActionIcon>
    </Group>
  </Group>
</Card>
```

ถ้าต้องการ ฉันช่วยไล่ดู `ItemCard.tsx` ของคุณบรรทัดต่อบรรทัดอีกครั้ง แล้วคอมเมนต์ให้เลยว่าทุกบรรทัด “ทำอะไร/ทำไม” ตามสไตล์ที่ใช้ส่งสอบได้ด้วย บอกมาได้เลยนะว่าจะให้จัดแบบไหน 👍
 */


































/*ถ้าจะอ่านเอกสาร Mantine ให้ตรงกับโปรเจกต์ “Expense Tracker” ของคุณแบบไม่หลงทาง ดูชุดนี้ตามลำดับเลยครับ (หมวด → ชื่อหน้าใน docs):

# โครงหน้า / Layout

* **AppShell** – โครงหน้าแบบมี Header / Footer / Main
* **Container** – จำกัดความกว้างคอนเทนต์ (เช่น 600px)
* **Group** – จัดเรียงแนวนอน, `justify`, `align`, `gap`
* **Stack** – จัดเรียงแนวตั้งระยะห่างเท่ากัน
* **Divider** – เส้นคั่นบล็อก

# ข้อความ / หัวข้อ

* **Text** – ตัวหนังสือทั่วไป (`size`, `fw`, `c`, `ta`)
* **Title** – หัวข้อระดับ H1–H6

# การ์ดรายการ

* **Card** – กล่องเนื้อหา (`withBorder`, `shadow`, `radius`, `padding`)
* **Badge** – ป้ายหมวดหมู่ (Food/Transport/Entertainment)
* **ActionIcon** – ปุ่มไอคอน (เช่น ลบ) + ไอคอนจาก `@tabler/icons-react`
* **Button** – ปุ่มทั่วไป (เปิด Modal)

# โมดัล + ฟอร์ม

* **Modal** – กล่องโผล่สำหรับ “Add Expense Item”
* **TextInput** – ชื่อรายการ (required)
* **NumberInput** – จำนวนเงิน (ต้อง > 0)
* **Select** – เลือกหมวดหมู่

> ในแต่ละหน้า ดูแท็บ **Usage**, **Props**, **Examples** ให้ครบ (พอแล้ว ยังไม่ต้องแตะ Styles API ถ้าไม่แต่งลึก)

# เฮดเดอร์ / ธีม

* **Burger** – ไอคอนเมนูบนจอเล็ก
* **useMantineColorScheme** (Hooks) – สลับ Light/Dark
* **useMediaQuery** (Hooks) – เช็ค mobile breakpoint
* **MantineProvider** (Theming) – ครอบแอป + `defaultColorScheme`
* **ColorSchemeScript** – กันอาการ “กระพริบธีม” ตอนโหลด
* **createTheme / virtualColor** – (ออปชัน) ตั้งค่าสี/ฟอนต์

# คีย์เวิร์ดค้นใน docs (พิมพ์ตามนี้แล้วเจอหน้าเลย)

* “AppShell mantine”
* “Group props justify align”
* “Stack mantine”
* “Card withBorder radius”
* “Badge variant light”
* “ActionIcon variant onClick”
* “Modal opened onClose”
* “TextInput error withAsterisk”
* “NumberInput clampBehavior”
* “Select data value onChange”
* “useMantineColorScheme”
* “ColorSchemeScript”
* “Burger mantine”
* “useMediaQuery mantine hook”
* “MantineProvider defaultColorScheme”

# จับคู่ “ไฟล์ของคุณ ↔ เอกสารที่ต้องอ่าน”

* `layout/MainLayout.tsx` → **AppShell**, **Container**
* `components/Header.tsx` → **Group**, **Text**, **Burger**, **ActionIcon**, **useMantineColorScheme**, **useMediaQuery**
* `components/Footer.tsx` → **Group**, **Text**
* `pages/TrackerPage.tsx` → **Button**, **Card**, **Stack**, **Title**, **Text**, **Divider**
* `components/Modal.tsx` → **Modal**, **TextInput**, **NumberInput**, **Select**, **Button**
* `components/ItemCard.tsx` → **Card**, **Group**, **Text**, **Badge**, **ActionIcon**

ถ้าต้องการ ผมย่อย “พร็อพที่ต้องใช้จริง” ของแต่ละคอมโพเนนต์ในงานคุณให้เป็นชีทสรุปหนึ่งหน้าได้เลย บอกผมมาได้ทันทีครับ */
