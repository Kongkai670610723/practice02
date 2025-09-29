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
