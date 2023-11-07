import Header from 'components/layout/header/header'
import Footer from 'components/layout/footer/footer'

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <main className="bg-success full-viewport">{children}</main>
      <Footer />
      <style jsx>{`
        .full-viewport {
          min-height: calc(100vh - 372px); /* 100%视口高度 */
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `}</style>
    </>
  )
}
