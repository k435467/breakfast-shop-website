import { GetStaticProps } from "next";
import { PrismaClient, MyModel } from "@prisma/client";
import Layout from "../component/layout";

export default function Home({ data }: { data: MyModel[] }) {
  return (
    <Layout>
      <p>{JSON.stringify(data)}</p>
    </Layout>
  );
}

const prisma = new PrismaClient();

export const getStaticProps: GetStaticProps = async () => {
  const mymodeldata = await prisma.myModel.findMany();
  return {
    props: {
      data: mymodeldata,
    },
  };
};
