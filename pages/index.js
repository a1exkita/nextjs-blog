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
        <p>Hello. I'm Atsuhito Kita. I'm a software engineer / data science student at Columbia University. Here is my <a href='https://www.linkedin.com/in/alex-kita/'>LinkedIn</a>. Feel free to connect with me.</p>
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
        <p>
          I have demostrated research experience in the NLP research group at Oregn State University and development experience in multiple tech companies as an intern.
        </p>
        <ul className={utilStyles.list}>
            <li className={utilStyles.listBackground}>
              <div className={utilStyles.listDetail}>
                <h3 className={utilStyles.noPaddingAndMargin}>SmartNews International, Inc.</h3>
                <p className={`${utilStyles.noPaddingAndMargin} ${utilStyles.lightText}`}>Jun. 2022 - Aug. 2022</p>
                <p className={`${utilStyles.noPaddingAndMargin} ${utilStyles.lightText}`}>Software Engineer Intern</p>
              </div>
              <div className={utilStyles.listDetail}>
                <h3 className={utilStyles.noPaddingAndMargin}>Rakuten Inc.</h3>
                <p className={`${utilStyles.noPaddingAndMargin} ${utilStyles.lightText}`}>Jan. 2020 - Mar. 2020</p>
                <p className={`${utilStyles.noPaddingAndMargin} ${utilStyles.lightText}`}>Software Engineer Intern</p>
              </div>
              <div className={utilStyles.listDetail}>
                <h3 className={utilStyles.noPaddingAndMargin}>Oregon State University</h3>
                <p className={`${utilStyles.noPaddingAndMargin} ${utilStyles.lightText}`}>Sep. 2018 - Jun. 2021</p>
                <p className={`${utilStyles.noPaddingAndMargin} ${utilStyles.lightText}`}>Computer Science  GPA 4.00</p>
              </div>
            </li>
        </ul>
        <p>Here are my <a href="/AlexKita_resume_2022_08.pdf">resume</a> and <a href="/cv_AtsuhitoKita.pdf">CV</a>.</p>
        <h1>Skills</h1>
        <div>
            <p>Programming: </p>
            <p>Python, C++, CUDA, Java, Kotlin, Typescript, React.js, HTML, CSS</p>
        </div>
        <div>
            <p>Frameworks: </p>
            <p>PyTorch, NumPy, Pandas, Scikit-learn, CuPy, Spring Boot, Next.js</p>
        </div>
        <div>
            <p>Databases: </p>
            <p>MySQL, PostgreSQL, MongoDB</p>
        </div>
        <div>
            <p>Miscellaneous: </p>
            <p>Adobe Xd, Figma, Illustrator, Photoshop, After Effects, Premiere Pro</p>
        </div>
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