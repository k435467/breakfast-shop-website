import { GetStaticProps } from 'next'
import { PrismaClient, MyModel } from '@prisma/client'

export default function Home({
  data
}: {
  data: MyModel[];
}) {
  return (
    <div><p>{JSON.stringify(data)}</p></div>
  )
}

const prisma = new PrismaClient();

export const getStaticProps: GetStaticProps = async () => {
  const mymodeldata = await prisma.myModel.findMany();
  return {
    props: {
      data: mymodeldata
    }
  }
}
