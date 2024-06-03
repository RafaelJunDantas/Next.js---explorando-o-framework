import { useEffect, useState } from 'react';
import Link from '../src/components/Link';
import Title from '../src/theme/title';
import Head from 'next/head';
import PageTitle from '../src/components/PageTitle';
import FAQScreen from '../src/screens/FAQScreen';

// SSG - Static Site Generation
// SSR - Server Side Rendering
// ISG - Incremental Static Generation

// getStaticProps     -> roda somente em build time
// getServerSideProps -> roda a cada acesso

// em modo dev, tanto o static, quanto o server side, vão rodar todas as vezes

export async function getStaticProps(context) {
  
  const faq_api_url = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"
  const faq = await fetch(faq_api_url)
    .then((res) => {
      return res.json();
    })

  return {
    props: {
      faq,
    },
  };
}

export default FAQScreen;

// export default function FAQPage({ faq }) {

//   //console.log(faq)

//   // const [faq, setFaq] = useState([]);

//   // useEffect(() => {
//   //   const faq_api_url = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"
//   //   fetch(faq_api_url)
//   //     .then((res) => {
//   //       return res.json();
//   //     })
//   //     .then((res) => {
//   //       setFaq(res);
//   //     })
//   // }, []);

//   return (
//     <div>
//       <PageTitle>
//         FAQ - Alura Cases
//       </PageTitle>
//       {/* <Head>
//         <title>FAQ - Alura Cases</title>
//       </Head> */}
//       <Title as="h1">Alura Cases - Página de FAQ</Title>
//       <Link href="/">
//         Ir para Home
//       </Link>
//       <ul>
//         {faq.map(({ answer, question }) => (
//           <li key={question}>
//             <article>
//               <h2>{question}</h2>
//               <p>{answer}</p>
//             </article>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }