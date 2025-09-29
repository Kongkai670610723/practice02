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
