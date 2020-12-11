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
        <p>
          I have working experience as a software engineer intern at Rakuten, which is the largest software company in Japan. I used to work as a marketing consultant for L'Oreal Paris and Softbank. So, I am able to develop software products while thinking of customer insights.
        </p>
        <ul className={utilStyles.list}>
            <li className={utilStyles.listBackground}>
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
              <div className={utilStyles.listDetail}>
                <h3 className={utilStyles.noPaddingAndMargin}>Freelance</h3>
                <p className={`${utilStyles.noPaddingAndMargin} ${utilStyles.lightText}`}>Oct. 2017 - May. 2018</p>
                <p className={`${utilStyles.noPaddingAndMargin} ${utilStyles.lightText}`}>Web Developer & Designer</p>
              </div>
              <div className={utilStyles.listDetail}>
                <h3 className={utilStyles.noPaddingAndMargin}>Dentsu Inc.</h3>
                <p className={`${utilStyles.noPaddingAndMargin} ${utilStyles.lightText}`}>Apr. 2016 - Sep. 2017</p>
                <p className={`${utilStyles.noPaddingAndMargin} ${utilStyles.lightText}`}>Marketing Consultant</p>
              </div>
              <div className={utilStyles.listDetail}>
                <h3 className={utilStyles.noPaddingAndMargin}>Hitotsubashi University</h3>
                <p className={`${utilStyles.noPaddingAndMargin} ${utilStyles.lightText}`}>Apr. 2012 - Mar. 2016</p>
                <p className={`${utilStyles.noPaddingAndMargin} ${utilStyles.lightText}`}>Business</p>
              </div>
            </li>
        </ul>
        <p>Here is my <a href="/cv_AtsuhitoKita.pdf">CV</a>.</p>
        <h1>Skills</h1>
        <div>
            <p>Programming: </p>
            <p>Python, C, C++, CUDA, Java, Kotlin, Typescript, React.js, HTML, CSS</p>
        </div>
        <div>
            <p>Frameworks: </p>
            <p>PyTorch, NumPy, CuPy, Spring Boot, Next.js</p>
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