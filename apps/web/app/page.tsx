import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import prismaClient from "@repo/db2";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default async function Home() {
  const user = await prismaClient.user.findFirst({
    where:{
      id: 1
    }
  });
  return (
    <div>
      <h1>{user?.name}</h1>
      <h1>{user?.age}</h1>
    </div>
  );
}
