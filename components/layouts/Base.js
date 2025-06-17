import Navbar from '../Navbar'
import Footer from '../Footer'
import Alert from '../PreviewAlert'
import { cookies, draftMode } from "next/headers"


export default function Base({ children }) {

  
  const preview = draftMode().isEnabled
  return (
    <>
        {preview && <Alert preview={preview} slug="myslug" model="products" />}

      <Navbar />
      <main id="site-main">
        {children}
      </main>
      <Footer />
    </>
  )
}