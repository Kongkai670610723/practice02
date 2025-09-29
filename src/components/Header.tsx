//D:\workspace\practice02\src\components\Header.tsx
import {
  Burger,
  Text,
  useMantineColorScheme,
  Group,
  ActionIcon,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { IconCash } from "@tabler/icons-react";

interface HeaderComponentProps {
  opened: boolean;
  toggle: () => void;
}

export default function HeaderComponent({
  opened,
  toggle,
}: HeaderComponentProps) {

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  
  const isDark = colorScheme === "dark";
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  return (
    <Group p="md" justify="space-between">
      <Group>
        {isMobile && (
          <Burger
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
          />
        )}

        {/*เพิ่ม Iconcash*/}
        <ActionIcon
          variant="filled"
          color={isDark ? "yellow" : "blue"}
          onClick={toggleColorScheme}
          size="lg"
          aria-label={isDark ? "Light mode" : "Dark mode"}
        >
          {isDark ? <IconCash aria-label="tracker icon" size={20} /> : <IconCash aria-label="tracker icon" size={20} />}
        </ActionIcon>
        

        <Text
          size="xl"
          fw={900}
          variant="gradient"
          gradient={{ from: "red", to: "blue", deg: 90 }}
        >
          TRACKER-APP
        </Text>
      </Group>
      <Group gap={5}>
        <ActionIcon
          variant="filled"
          color={isDark ? "yellow" : "blue"}
          onClick={toggleColorScheme}
          size="lg"
          aria-label={isDark ? "Light mode" : "Dark mode"}
        >
          {isDark ? <IconSun size={20} /> : <IconMoon size={20} />}
        </ActionIcon>
      </Group>
    </Group>
  );
}


































/*2) src/components/Header.tsx

โค้ดใช้งานได้แล้ว สลับธีม/แสดงชื่อครบ
ถ้าอยาก “สื่อการเงิน” ให้ชัด (ตาม rubric พูดถึงไอคอนการเงิน) คุณ อาจ เติม IconCash หน้าคำว่า TRACKER-APP (ถ้าไม่อยากแตะก็ผ่าน rubric ได้อยู่แล้วนะ)

// เพิ่มแค่บรรทัด import นี้ถ้าต้องการ
// import { IconCash } from "@tabler/icons-react";

// แล้วในส่วน JSX:
//
// <Group>
//   {isMobile && (/* ...Burger... )}
//   <IconCash aria-label="tracker icon" />   // <-- เพิ่มแค่บรรทัดนี้ (ออปชัน)
//   <Text /* ... >TRACKER-APP</Text>
// </Group>*/
