import Head from 'next/head'
import Link from 'next/link'
import Google from '../../images/GOOGLe.png'
import Nexus from '../../images/NEXUS.png'
import Gsoc from '../../images/GSOC.png'

import Image from 'next/image'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { getAllIdeas } from '@/helper/getAllIdeas'

function Article({ article }) {
  return (
    <article className="mt-5 sm:mt-0 md:grid md:grid-flow-col md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/ideas/2024/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Know More</Card.Cta>
      </Card>
    </article>
  )
}

export default function Ideas({ articles }) {
  return (
    <>
      <Head>
        <title>Idea List</title>
        <meta name="description" content="Idea List for GSOC" />
      </Head>
      <Container className="mt-20 mb-28">
      <div className="flex justify-between mt-16 mb-16">
          <Image src={Gsoc} width={50} height={50} className='scale-125 -rotate-45' alt='Aossie Logo' />
          <Image src={Google} width={50} height={50} className='scale-125  ' alt='Aossie Logo' />
          <Image src={Nexus} width={50} height={50} className='scale-125 rotate-45 ' alt='Aossie Logo' />

        </div>
        <h1 className='text-center text-[#00843D] text-6xl font-serif dark:text-yellow-400 mb-11'>IDEAS</h1>
        <div className="">
          <p className="font-mono text-lg leading-7 text-zinc-600 dark:text-zinc-400">
            Explore the world of open-source possibilities with AOSSIE&apos;s{' '}
            <b>Idea List</b>. As part of Google Summer of Code, we offer
            a unique opportunity for developers to explore new ideas,  a wide
            variety of projects for developers to choose from and contribute to.
            From developing new features to fixing critical bugs, our idea list
            is your go-to destination for finding your next big project and
            kickstart your open-source journey.
          </p>
        </div>
        <Container.Inner>
          <div className="mt-10 flex justify-center sm:mt-20">
          <div className="grid gap-6 gap-y-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {articles.map((article) => (
    <Article key={article.slug} article={article} />
  ))}
</div>
          </div>
          <div className="mt-16 text-center">
            <Link
              className="group order-2 mx-auto items-center overflow-hidden rounded-lg bg-zinc-800 px-8 py-3 text-white focus:outline-none dark:bg-white dark:text-black"
              href="/ideas/2023"
            >
              <span className="text-center font-mono font-semibold">
                View 2023 Idea List
              </span>
            </Link>
          </div>
        </Container.Inner>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllIdeas()).map(({ component, ...meta }) => meta),
    },
  }
}
