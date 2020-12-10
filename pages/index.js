import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello. I'm Atsuhito Kita. I'm a CS student and a NLP researcher at Oregon State University. Here is my <a href='https://www.linkedin.com/in/atsuhito-k-b20ab7b9/'>LinkedIn</a>. Feel free to connect with me.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1>Works</h1>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, tag, image }) => (
            <li className={utilStyles.listItem} key={id}>

              <Link href={`/posts/${id}`}>
                <a>
                  <img src={image} />
                  <p className={utilStyles.pad}>{title}</p>
                </a>
              </Link>
              <div className={utilStyles.pad}>
                    <small className={utilStyles.lightText}>
                      <Date dateString={date} />
                      <p className={utilStyles.tagText}>{tag}</p>
                    </small>
              </div>

            </li>
          ))}
        </ul>
        <h1>Background</h1>
        <ul className={utilStyles.list}>
            <li className={utilStyles.listBackground}>
            <div className={utilStyles.listDetail}>
                <h3 className={utilStyles.noPaddingAndMargin}>Rakuten Inc.</h3>
                <p className={`${utilStyles.noPaddingAndMargin} ${utilStyles.lightText}`}>Software Engineer Intern</p>
              </div>
              <div className={utilStyles.listDetail}>
                <h3 className={utilStyles.noPaddingAndMargin}>Oregon State University</h3>
                <p className={`${utilStyles.noPaddingAndMargin} ${utilStyles.lightText}`}>Computer Science</p>
              </div>
              <div className={utilStyles.listDetail}>
                <h3 className={utilStyles.noPaddingAndMargin}>Detsu Inc.</h3>
                <p className={`${utilStyles.noPaddingAndMargin} ${utilStyles.lightText}`}>Business Consultant</p>
              </div>
              <div className={utilStyles.listDetail}>
                <h3 className={utilStyles.noPaddingAndMargin}>Hitotsubashi University</h3>
                <p className={`${utilStyles.noPaddingAndMargin} ${utilStyles.lightText}`}>Business</p>
              </div>
            </li>
        </ul>
        <p>Here is my <a href="/cv_AtsuhitoKita.pdf">CV</a>.</p>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}