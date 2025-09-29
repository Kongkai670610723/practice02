//D:\workspace\practice02\src\layout\MainLayout.tsx
import { Outlet } from "react-router-dom";
import { AppShell } from "@mantine/core";
import HeaderComponent from "../components/Header";
import { useDisclosure } from "@mantine/hooks";

//Footer
import FooterComponent from "../components/Footer";

export default function MainLayout() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      padding="md"
      header={{ height: 70 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      footer={{ height: 50 }}
    >
      <AppShell.Header>
        <HeaderComponent opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Footer>
        <FooterComponent
          courseName="Phurin"
          year="2025"
          fullName="Inthajak"
          studentId="670610723"         
          />
      </AppShell.Footer>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}



















































/* 6) src/layout/MainLayout.tsx  (ส่ง Footer props ให้ถูก)

ตอนนี้คุณส่ง courseName="Phurin" ซึ่งจริง ๆ คือ “ชื่อคน” ไปอยู่ช่อง “ชื่อวิชา”
ให้แก้เป็น ชื่อวิชา และ ชื่อ-นามสกุลเต็ม ตาม rubric

import { Outlet } from "react-router-dom";
import { AppShell } from "@mantine/core";
import HeaderComponent from "../components/Header";
import { useDisclosure } from "@mantine/hooks";
import FooterComponent from "../components/Footer";

export default function MainLayout() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      padding="md"
      header={{ height: 70 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      footer={{ height: 50 }}
    >
      <AppShell.Header>
        <HeaderComponent opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Footer>
        <FooterComponent
          courseName="261207 Basic Computer Engineering Lab" // ชื่อวิชา
          year="2568"                                       //  ปีการศึกษา (ไทย)
          fullName="Phurin Inthajak"                        //  ชื่อ-นามสกุลเต็ม
          studentId="670610723"                             //  รหัสนักศึกษา
        />
      </AppShell.Footer>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
} */